# AIPE — Doc

English is the default language; the Chinese edition of this page is [README.zh-CN.md](README.zh-CN.md).

AIPE Doc provides the AIPE-branded HTML templates of **AI for Power Engineering** for web reading,
offline sharing and browser PDF export: a document layout (A4 portrait) and a slide layout (16:9), each
in an English and a Chinese edition, built on one set of shared components. Within the ecosystem it is the
presentation layer for engineering content (the AIPE-Workflows review package is rendered in the document
layout); gallery, templates and guide need nothing but a browser.

## Features

- Document and slide templates in English (`templates/document.html`, `templates/slides.html`) and Chinese
  (`*.zh.html`), plus an engineering report template
- Shared brand and content components (`assets/base.css`), print layouts for A4 and 16:9 pages, print and
  slide controls (`assets/template.js`)
- Text, images, tables and video in one content model; PDFs keep a video's cover and viewing link
- Offline by design: relative paths, system fonts, no third-party downloads, no build step
- Loopback-only preview server and a dependency-free validator for local links, assets, duplicate IDs,
  document language and language pairs

## Installation

No installation: open [index.html](index.html) in a browser (Chinese gallery:
[index.zh.html](index.zh.html)). The preview server and validator need Node.js 18 or newer.

```sh
npm run check
```

## Usage

```sh
npm run dev              # serves the repository at http://127.0.0.1:4173 (loopback only)
node scripts/check.mjs   # the validator without npm
```

Copy a template inside `templates/`, rename and edit it; keep relative paths and `lang="en"` /
`lang="zh-CN"`, and update author, date, version, sources, media URLs, page numbers and the language link.
Export to PDF with Chrome or Edge "Save as PDF" at 100 % scale with background graphics; details and
sharing advice: [docs/templates.md](docs/templates.md).

## Project Information

- Version: 0.1.0 (`package.json`)
- Status: Prototype (`aipe.yaml`: status `active`, maturity `prototype`); hosting has not been configured
  or published
- Developer: Fulong Li
- Organisation: Spirit Connect / AIPE Labs
- License: not declared - no distribution licence has been assigned to this repository (`aipe.yaml`:
  `NOASSERTION`). AIPE and Spirit Connect logos and trademarks remain the property of their rights holders
  ([assets/BRAND.md](assets/BRAND.md)); sample text and illustrations do not represent validated
  engineering results

## Documentation

- [Templates: formats, file layout, authoring, PDF export, video and sharing, brand and permissions](docs/templates.md)
- [User guide](docs/guide.html) · [中文使用指南](docs/guide.zh.html)
- [Brand asset provenance](assets/BRAND.md)
- [简体中文 README](README.zh-CN.md)
- [Capability manifest](aipe.yaml)
