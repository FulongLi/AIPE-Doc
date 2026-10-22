# Templates: formats, authoring, PDF export, video, sharing, brand and permissions

## Formats and languages

One set of shared components, two layouts, and an independent template in each language:

| Format | English (default) | Chinese | PDF layout |
| --- | --- | --- | --- |
| Document | [document.html](../templates/document.html) | [document.zh.html](../templates/document.zh.html) | A4 portrait, 3 sample pages |
| Slides | [slides.html](../templates/slides.html) | [slides.zh.html](../templates/slides.zh.html) | 16:9 landscape, 5 sample slides |
| Engineering report | [report-engineering.html](../templates/report-engineering.html) | - | document layout; used for the AIPE-Workflows engineering review package |

Documents suit reports, research notes, proposals and tutorials. Slides support talks, teaching,
presentation mode and keyboard navigation. Both can combine text, images, tables and video. Video is a
content module, not a separate format; PDFs retain its cover, explanation and viewing link.

The gallery, templates and user guide open in English by default. The language link opens the matching
Chinese edition. Separate HTML files work offline without runtime translation. Edits are not automatically
translated or synchronised. When copying a template, update or remove its language link so it points to
your own translation.

## File layout

```text
index.html / index.zh.html                 English / Chinese gallery
templates/document.html / document.zh.html Document templates
templates/slides.html / slides.zh.html     Slide templates
templates/report-engineering.html          Engineering report template
docs/guide.html / guide.zh.html            User guides
assets/base.css                           Shared brand and content components
assets/document.css                       Document and A4 print layouts
assets/slides.css                         Presentation and 16:9 print layouts
assets/template.js                        Print, video slots and slide controls
assets/BRAND.md                           Brand asset provenance
scripts/serve.mjs                         Loopback-only static preview server
scripts/check.mjs                         Dependency-free validation
```

## Get started and author a document

Open [index.html](../index.html) directly in a browser. No installation or build is required. The optional
Chinese gallery is [index.zh.html](../index.zh.html).

With Node.js 18 or newer, run:

```sh
npm run dev
```

Open <http://127.0.0.1:4173>. Run `npm run check` to validate local links, assets and language pairs.
Without npm, use `node scripts/serve.mjs` and `node scripts/check.mjs` directly.

Copy a template inside `templates/`, rename it and edit the HTML. Preserve relative paths, and update the
author, date, version, sources, media URLs and manually written page numbers. Keep `lang="en"` for English
or `lang="zh-CN"` for Chinese.

See the [English user guide](guide.html) or [中文使用指南](guide.zh.html).

## Export to PDF

Use desktop Chrome / Edge's built-in **Save as PDF**. Set scale to **100%**, retain CSS default paper and
margins, disable browser headers and footers, and enable background graphics. Documents use A4 portrait;
slides use `254mm × 142.875mm` landscape pages to preserve 16:9.

Document blocks can grow instead of clipping content. Long sections may continue onto extra printed pages,
without automatically repeating headers or footers; check manually written page numbers. Split overfull
slides rather than shrinking text or hiding overflow. Browsers and drivers may override page sizes, so
review the print preview after editing either language.

## Video and sharing

The video example is a labelled placeholder. Add your own `source` to enable playback. Supply a real
viewing link and text alternative; PDF exports retain a separate cover image.

For offline sharing, package HTML, CSS, JavaScript and media together with relative paths intact. For
online sharing, use a static host with the repository root as the site directory. Hosting has not been
configured or published. Archive a complete snapshot for stable releases, since shared stylesheet changes
affect all documents that reference them.

## Brand and permissions

Original logos and colours come from the [AIPE website](https://aipel.co.uk/); see
[brand provenance](../assets/BRAND.md). System fonts support offline reading; no third-party fonts are
downloaded. Logos, trademarks and subsequently added content retain their respective rights. No
distribution licence has been assigned to this repository. Sample text and illustrations do not represent
validated engineering results.
