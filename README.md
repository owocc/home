# 纸张拼贴风个人作品集

一个使用 Astro 7 构建的中文静态个人站，包含个人简介、简历、项目案例与创作博客。视觉语言来自纸张拼贴海报：米白方格纸、粗黑描边、硬阴影、撞色色块和少量手写标记。

## 本地运行

项目使用 pnpm，并需要 Node.js 22.12 或更高版本（Astro 7 的运行要求）：

```sh
pnpm install
pnpm dev
```

开发服务器默认位于 `http://localhost:4321`。提交或发布前运行完整检查与生产构建：

```sh
pnpm run build
```

该命令依次执行 `astro check` 和 `astro build`，静态产物写入 `dist/`。

## 路由结构

网站基于 Astro 7 的文件路由与 Content Layer：

```text
src/pages/
├── index.astro                 # 首页
├── resume.astro                # /resume/
├── projects/
│   ├── index.astro             # /projects/
│   └── [id].astro              # /projects/:id/
├── blog/
│   ├── index.astro             # /blog/
│   └── [id].astro              # /blog/:id/
└── 404.astro                   # /404.html
```

项目详情和文章详情在构建时由 `getStaticPaths()` 生成；正文通过 Astro 7 的 `render()` 渲染。项目按 `order` 升序排列，博客按 `publishedAt` 逆序排列。

## 替换个人资料

身份、经历、技能、教育和联系方式统一维护在 `src/data/site.ts`，无需修改页面组件：

- `identity`：姓名、角色、简介、所在地和当前状态；替换完成后将 `isPlaceholder` 改为 `false`。
- `navigation`：站点导航文字与目标地址。
- `experience`：经历时间、角色、组织、简介和要点。
- `skills`：按设计、开发或工作方式等类别组织技能。
- `education`：教育经历。
- `contact`：联系标题、说明、邮箱与社交链接。

示例邮箱与 `example.com` 链接仅用于占位，正式使用前应替换为真实信息。

## 新增项目

在 `src/content/projects/` 新建 Markdown 文件，文件名会成为详情页 id，例如 `my-project.md` 对应 `/projects/my-project/`。

```md
---
title: "项目名称"
summary: "一句话项目摘要。"
year: 2026
role: "概念设计、视觉设计、前端开发"
tags: ["互动网页", "视觉叙事"]
featured: true
order: 5
theme: "orange"
draft: false
links:
  live: "https://example.com"
---

## 项目背景

在这里撰写过程、选择、结果与反思。
```

`theme` 可使用 `orange`、`blue`、`purple` 或 `yellow`。`links` 可省略；如果保留，至少提供 `live` 或 `source` 之一。

## 新增文章

在 `src/content/blog/` 新建 Markdown 文件，文件名同样会成为文章 id：

```md
---
title: "文章标题"
description: "文章摘要。"
publishedAt: "2026-08-08"
updatedAt: "2026-08-10"
tags: ["Astro", "创意开发"]
featured: false
draft: false
---

从这里开始撰写正文。
```

`updatedAt` 为可选字段。日期建议使用 `YYYY-MM-DD` 格式。

## 草稿规则

项目和文章都必须显式设置 `draft`：

- `draft: false`：出现在公开列表中，并生成详情静态路由。
- `draft: true`：不会进入首页、列表页或 `getStaticPaths()`，因此不会生成详情页面。

`featured` 只控制首页精选状态，不会替代 `draft` 的公开控制。内容字段由 `src/content.config.ts` 校验，字段缺失或格式错误会让构建失败。

## 素材位置

原创图片位于 `src/assets/images/`：

- `hero-peek.png`：首页探头角色透明图。
- `mascot-bust.png`：简历页半身角色透明图。
- `paper-texture.webp`：全站低对比度纸张纹理。
- `public/og.png`：社交分享海报（1734 × 907）。

页面装饰中的方格、色块、贴纸、代码符号与阴影主要由 CSS 生成。替换图片时建议保留透明背景、相近构图比例与足够边缘留白。

当前项目未配置公开域名，因此 OG/Twitter 图片使用根路径 `/og.png`。未来发布时，请在 `astro.config.mjs` 中设置 `site`，构建会自动输出绝对图片地址与 canonical URL。
