import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const result = [];
  for (const entry of entries) {
    if (entry.name.startsWith('.') || ['node_modules', 'tmp', 'output'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...await walk(full));
    else result.push(full);
  }
  return result;
}
const files = await walk(root);
const failures = [];
let links = 0;
for (const file of files.filter(file => file.endsWith('.html'))) {
  const raw = await readFile(file, 'utf8');
  const html = raw.replace(/<!--[\s\S]*?-->/g, '');
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  if (new Set(ids).size !== ids.length) failures.push(`${path.relative(root, file)}: duplicate IDs`);
  if (!/<html\b[^>]*\blang=/.test(html)) failures.push(`${file}: missing document language`);
  const tags = [...html.matchAll(/<[a-z][^>]*>/gi)].map(match => match[0]).join('\n');
  for (const match of tags.matchAll(/\b(?:href|src|poster)="([^"]+)"/g)) {
    const ref = match[1];
    if (/^(?:[a-z]+:|\/\/)/i.test(ref)) continue;
    links++;
    const [resource, fragment] = ref.split('#');
    const target = resource ? path.resolve(path.dirname(file), decodeURIComponent(resource.split('?')[0])) : file;
    try {
      if (!(await stat(target)).isFile()) throw new Error('not a file');
      if (fragment && target.endsWith('.html')) {
        const targetHtml = await readFile(target, 'utf8');
        if (!targetHtml.includes(`id="${fragment}"`)) throw new Error(`missing anchor #${fragment}`);
      }
    } catch (error) { failures.push(`${path.relative(root, file)}: ${ref} (${error.message})`); }
  }
}
// The entry points are English by default, with complete Chinese counterparts.
for (const entry of ['index.html', 'templates/document.html', 'templates/slides.html', 'docs/guide.html']) {
  const chinese = entry.replace('.html', '.zh.html');
  for (const [filename, language, counterpart] of [[entry, 'en', chinese], [chinese, 'zh-CN', entry]]) {
    try {
      const html = await readFile(path.join(root, filename), 'utf8');
      if (!html.includes(`<html lang="${language}">`)) failures.push(`${filename}: expected language ${language}`);
      const switchTag = [...html.matchAll(/<a\b[^>]*>/g)].map(match => match[0]).find(tag => tag.includes('class="language-link"'));
      if (!switchTag?.includes(`href="${path.basename(counterpart)}"`)) failures.push(`${filename}: missing matching language switch`);
      if (!html.includes(`hreflang="x-default" href="${path.basename(entry)}"`)) failures.push(`${filename}: English must be the default alternate`);
    } catch (error) { failures.push(`${filename}: ${error.message}`); }
  }
}
if (failures.length) { console.error(failures.join('\n')); process.exitCode = 1; }
else console.log(`OK: ${files.filter(file => file.endsWith('.html')).length} HTML files; ${links} local links/assets checked.`);
