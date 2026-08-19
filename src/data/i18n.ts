export type Language = 'cn' | 'en';

export const defaultLang: Language = 'cn';

export const ui = {
	cn: {
		// Navigation
		'nav.home': '首页',
		'nav.resume': '简历',
		'nav.projects': '项目',
		'nav.blog': '博客',
		'nav.contact': '联系',
		'nav.github': 'GitHub',
		'nav.menu': '打开导航菜单',
		'nav.close': '关闭导航菜单',
		'nav.theme': '切换主题',
		'nav.lang': '切换语言 / Language',
		'skip.link': '跳到主要内容',

		// Common labels
		'common.back': '返回',
		'common.viewAll': '查看全部',
		'common.publishedAt': '发布于',
		'common.updatedAt': '更新于',
		'common.tags': '标签',
		'common.year': '年份',
		'common.role': '角色',
		'common.location': '所在地',
		'common.status': '当前状态',
		'common.sayHello': '找我聊聊',
		'common.sendEmail': '发送邮件',
		'common.copy': '复制',
		'common.copied': '已复制',
		'common.readArticle': '阅读文章',
		'common.viewProject': '查看项目',
		'common.sourceCode': '查看源码',
		'common.liveDemo': '访问项目',
		'common.prev': '上一篇',
		'common.next': '下一篇',
		'common.backToTop': '回到页首',
		'common.madeWith': '用 Astro、纸张质感与一点好奇心制作。',

		// Blog list & card
		'blog.latestNotes': 'LATEST NOTES / 全部文章',
		'blog.heading': '从最近写起',
		'blog.intro': '这里记录开发实验、设计思考与阶段复盘。',
		'blog.langBadge.cn': '中文 (CN)',
		'blog.langBadge.en': 'English (EN)',
		'blog.hasTranslation': '有 EN 译文',
		'blog.noTranslation': '单语言版本',
		'blog.translationAvailable': '本文提供多语言翻译版本：',
		'blog.cta.quote': 'less polish, more process.',
		'blog.cta.title': '文字之外，也看看作品。',
		'blog.cta.button': '浏览项目档案',

		// Projects
		'projects.allWork': 'ALL WORK / 全部作品',
		'projects.heading': '按创作顺序整理',
		'projects.intro': '从交互实验、原型设计到完整前端实现的代表案例。',
		'projects.cta.quote': 'more ideas are coming...',
		'projects.cta.title': '想看看创作过程？',
		'projects.cta.button': '去读创作笔记',

		// Hero / Home
		'home.scrollDown': '向下看看',
		'home.aboutTitle': '你好，我是',
		'home.projectsTitle': '精选项目',
		'home.projectsSub': '近期代表实践',
		'home.blogTitle': '最新博客',
		'home.blogSub': '近期创作笔记',
		'home.viewAllProjects': '查看全部项目',
		'home.viewAllBlog': '翻阅全部文章',

		// 404
		'404.title': '这张纸不在这里。',
		'404.desc': '可能是链接写错了，也可能这个页面已经被收进抽屉。你可以回到首页，或者继续浏览项目档案。',
		'404.backHome': '回到首页',
	},
	en: {
		// Navigation
		'nav.home': 'Home',
		'nav.resume': 'Resume',
		'nav.projects': 'Projects',
		'nav.blog': 'Blog',
		'nav.contact': 'Contact',
		'nav.github': 'GitHub',
		'nav.menu': 'Open Menu',
		'nav.close': 'Close Menu',
		'nav.theme': 'Toggle Theme',
		'nav.lang': 'Switch Language / 语言切换',
		'skip.link': 'Skip to content',

		// Common labels
		'common.back': 'Back',
		'common.viewAll': 'View All',
		'common.publishedAt': 'Published',
		'common.updatedAt': 'Updated',
		'common.tags': 'Tags',
		'common.year': 'Year',
		'common.role': 'Role',
		'common.location': 'Location',
		'common.status': 'Status',
		'common.sayHello': 'Say Hello',
		'common.sendEmail': 'Send Email',
		'common.copy': 'Copy',
		'common.copied': 'Copied',
		'common.readArticle': 'Read Article',
		'common.viewProject': 'View Project',
		'common.sourceCode': 'Source Code',
		'common.liveDemo': 'Live Demo',
		'common.prev': 'Previous',
		'common.next': 'Next',
		'common.backToTop': 'Back to top',
		'common.madeWith': 'Crafted with Astro, paper textures, and curiosity.',

		// Blog list & card
		'blog.latestNotes': 'LATEST NOTES / ALL ARTICLES',
		'blog.heading': 'Field Notes & Writing',
		'blog.intro': 'Documenting dev experiments, design thoughts, and ongoing reviews.',
		'blog.langBadge.cn': 'Chinese (CN)',
		'blog.langBadge.en': 'English (EN)',
		'blog.hasTranslation': 'EN Translation Available',
		'blog.noTranslation': 'Original Version Only',
		'blog.translationAvailable': 'Translations available for this note:',
		'blog.cta.quote': 'less polish, more process.',
		'blog.cta.title': 'Beyond words, explore the works.',
		'blog.cta.button': 'Browse Project Archive',

		// Projects
		'projects.allWork': 'ALL WORK / PORTFOLIO',
		'projects.heading': 'Curated by Timeline',
		'projects.intro': 'Selected cases from interactive prototypes to frontend craft.',
		'projects.cta.quote': 'more ideas are coming...',
		'projects.cta.title': 'Interested in the creative process?',
		'projects.cta.button': 'Read Field Notes',

		// Hero / Home
		'home.scrollDown': 'Scroll Down',
		'home.aboutTitle': 'Hi, I am',
		'home.projectsTitle': 'Selected Projects',
		'home.projectsSub': 'Recent Works',
		'home.blogTitle': 'Latest Notes',
		'home.blogSub': 'Recent Writings',
		'home.viewAllProjects': 'View All Projects',
		'home.viewAllBlog': 'Read All Articles',

		// 404
		'404.title': 'This page is tucked away.',
		'404.desc': 'The link might be broken or this paper has been archived into drawers. You can head back home or explore project archives.',
		'404.backHome': 'Back to Home',
	},
} as const;

export type UIKey = keyof typeof ui['cn'];

export function useTranslations(lang: Language = 'cn') {
	return function t(key: UIKey): string {
		return ui[lang][key] || ui['cn'][key] || key;
	};
}
