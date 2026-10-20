# AIPE Doc

[English（默认）](README.md) · 简体中文（可选）

英文是默认语言。文档与 Slides 均提供独立的英文和中文模板，可通过页面顶部的语言链接切换；各语言独立编辑，不会自动翻译或同步。

以 HTML 为主的 AIPE 品牌文档与演示模板。支持网页阅读、离线分享和浏览器“另存为 PDF”。

## 设计选择

采用一套共享内容组件、两种版式：

| 版式 | 用途 | PDF |
| --- | --- | --- |
| Document | 报告、教程、研究笔记、项目方案；可混排文字、图片、表格、视频 | A4 纵向 |
| Slides | 技术分享、汇报、教学；支持逐页播放与键盘控制 | 16:9 横向，每张一页 |

不另设“表格文档”或“视频文档”。视频属于内容模块，PDF 中以封面、说明和链接呈现。两种版式共享设计语言与组件；不会自动把报告转换成演讲稿。

## 开始使用

直接用浏览器打开 `index.html`，无需安装依赖。可选本地服务（Node.js >= 18）：

```sh
npm run dev
```

访问 <http://127.0.0.1:4173>。`npm run check` 检查本地资源和链接。

在 `templates/` 内复制模板并编辑 HTML，保留相对路径。英文模板为 `document.html` / `slides.html`，中文模板为 `document.zh.html` / `slides.zh.html`。作者、日期、版本、来源、媒体地址和页码需要随内容更新。复制后请更新或移除指向示例模板的语言切换链接。中文指南为 `docs/guide.zh.html`，中文入口为 `index.zh.html`。

```text
index.html / index.zh.html                    英文（默认）/ 中文入口
templates/document.html / document.zh.html     英文 / 中文文档模板
templates/slides.html / slides.zh.html         英文 / 中文 Slides 模板
docs/guide.html / guide.zh.html                英文 / 中文写作指南
assets/base.css               品牌与内容组件
assets/document.css           文档布局及 A4 打印
assets/slides.css             演示布局及 16:9 打印
assets/template.js            打印、视频插槽与演示控制
assets/BRAND.md               Logo 来源与品牌说明
scripts/serve.mjs             仅监听本机的静态预览服务
scripts/check.mjs             资源与链接检查，无依赖
```

## 导出 PDF

建议桌面 Chrome / Edge 内置“另存为 PDF”：比例 100%，使用 CSS 默认纸张及边距，关闭浏览器页眉页脚，开启背景图形。文档为 A4 纵向；Slides 使用 `254mm × 142.875mm` 自定义横向页面，保持 16:9。

文档使用显式页面区块，但不裁切长内容；超长内容可能续到额外页面，页脚不会自动重复，手写页码需要复核。Slides 为固定尺寸，每页内容过多时应拆页。自定义纸张是否被采用取决于浏览器及打印驱动，导出前必须看打印预览。

## 视频与分享

视频示例默认是带说明的插槽，不包含虚假的演示视频。添加自己的 `source` 后会显示播放器；打印时保留单独封面。务必填写实际观看链接和文字说明。

离线分享需要 HTML、CSS、JS 和媒体一起打包，保留目录结构。在线分享可使用静态托管服务，仓库根目录就是站点目录。本次不含部署、推送或在线发布。公共样式会影响所有引用它的文档，正式存档时建议为发布版本保留一份完整快照。

## 品牌与许可

Logo 与色彩来自 [AIPE 官网](https://aipel.co.uk/)，来源见 `assets/BRAND.md`。采用系统字体以保证离线可用，未下载第三方字体。Logo、商标及用户后续加入的内容保留各自权利；本仓库尚未指定对外分发许可。模板中的教学文案和图示不代表已验证的工程结果。
