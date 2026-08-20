export type Language = 'cn' | 'en';

export const defaultLang: Language = 'cn';

export const ui = {
	cn: {
		// Navigation
		'nav.home': '首页',
		'nav.resume': '简历',
		'nav.design': '设计',
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

		// Hero
		'hero.currently': 'CURRENTLY',
		'hero.role': '创意开发者',
		'hero.intro': '我把模糊的灵感，做成可以看见、触碰和使用的数字体验。',
		'hero.scrollDown': '向下看看',

		// About
		'about.kicker': 'ABOUT / 关于我',
		'about.title': '灵感落地的地方',
		'about.introHeading': '你好，我是 owocc',
		'about.bio1': '我关注设计、前端与叙事之间的空隙，喜欢从一张草图开始，把想法逐步变成有性格的作品。',
		'about.bio2': '探索创意编码、互动动画与极具质感的界面设计，打造独特而富有生命力的网页体验。',
		'about.locationVal': '中国',
		'about.statusVal': '开放接洽新的创意项目与技术交流',

		// Experience / Skills on Home
		'experience.kicker': 'EXPERIENCE / 经历',
		'experience.title': '一份很短的简历',
		'experience.openFull': '打开完整简历',

		// Projects
		'projects.kicker': 'SELECTED WORK / 精选项目',
		'projects.title': '做过的一些东西',
		'projects.allWork': 'ALL WORK / 全部作品',
		'projects.heading': '按创作顺序整理',
		'projects.intro': '从交互实验、原型设计到完整前端实现的代表案例。',
		'projects.cta.quote': 'more ideas are coming...',
		'projects.cta.title': '想看看创作过程？',
		'projects.cta.button': '去读创作笔记',
		'projects.viewAll': '查看全部项目',

		// Design Gallery
		'design.kicker': 'DESIGN & PHOTO / 设计主页',
		'design.title': '视觉、摄影与 AI 试验',
		'design.intro': '这里收录海报设计、界面构思、胶片摄影以及结合生成式 AI 的创意图谱试验。',
		'design.tab.all': '全部作品',
		'design.tab.design': '🎨 设计图',
		'design.tab.photography': '📷 摄影记录',
		'design.aiBadge': '✨ AI 生成',
		'design.humanBadge': '🎨 原创手作',
		'design.count': '件精选作品收录于画廊',

		// Blog list & card
		'blog.kicker': 'FIELD NOTES / 创作笔记',
		'blog.title': '最近写下的东西',
		'blog.latestNotes': 'LATEST NOTES / 全部文章',
		'blog.heading': '从最近写起',
		'blog.intro': '这里记录开发实验、设计思考与阶段复盘。',
		'blog.viewAll': '翻阅全部文章',
		'blog.langBadge.cn': '中文 (CN)',
		'blog.langBadge.en': 'English (EN)',
		'blog.hasTranslation': '有 EN 译文',
		'blog.noTranslation': '单语言版本',
		'blog.translationAvailable': '本文提供多语言翻译版本：',
		'blog.cta.quote': 'less polish, more process.',
		'blog.cta.title': '文字之外，也看看作品。',
		'blog.cta.button': '浏览项目档案',

		// Contact
		'contact.kicker': 'CONTACT / 找我聊聊',
		'contact.heading': '一起做点有意思的事',
		'contact.message': '如果你有一个刚冒出来的想法、一次合作邀请，或只是想聊聊设计与代码，欢迎通过 GitHub 或邮件来信。',

		// Resume
		'resume.kicker': 'RESUME / 个人档案',
		'resume.lead': '关于我的经历、技能构成，以及在不同阶段里如何把想法做成可用产品的记录。',
		'resume.profileTitle': '你好，我是 owocc。',
		'resume.experienceTitle': '工作与实践记录',
		'resume.skillsTitle': '平时常用的工具与方法',
		'resume.educationTitle': '学习与训练',
		'resume.together': 'let\'s work together!',

		// 404
		'404.title': '这张纸不在这里。',
		'404.desc': '可能是链接写错了，也可能这个页面已经被收进抽屉。你可以回到首页，或者继续浏览项目档案。',
		'404.backHome': '回到首页',
	},
	en: {
		// Navigation
		'nav.home': 'Home',
		'nav.resume': 'Resume',
		'nav.design': 'Design',
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

		// Hero
		'hero.currently': 'CURRENTLY',
		'hero.role': 'Creative Developer',
		'hero.intro': 'I turn fuzzy ideas into tangible, interactive, and joyful digital experiences.',
		'hero.scrollDown': 'Scroll Down',

		// About
		'about.kicker': 'ABOUT / PROFILE',
		'about.title': 'Where Ideas Take Shape',
		'about.introHeading': 'Hello, I am owocc',
		'about.bio1': 'I look into the gaps between design, engineering, and storytelling, transforming sketches into purposeful digital craft.',
		'about.bio2': 'Exploring creative coding, tactile UI animations, and design systems that stay consistent yet vibrantly alive.',
		'about.locationVal': 'China',
		'about.statusVal': 'Open for new creative collabs & tech discussions',

		// Experience / Skills on Home
		'experience.kicker': 'EXPERIENCE / TIMELINE',
		'experience.title': 'A Brief Timeline',
		'experience.openFull': 'Open Full Resume',

		// Projects
		'projects.kicker': 'SELECTED WORK / PORTFOLIO',
		'projects.title': 'Things I\'ve Made',
		'projects.allWork': 'ALL WORK / PORTFOLIO',
		'projects.heading': 'Curated by Timeline',
		'projects.intro': 'Selected cases from interactive prototypes to frontend craft.',
		'projects.cta.quote': 'more ideas are coming...',
		'projects.cta.title': 'Interested in the creative process?',
		'projects.cta.button': 'Read Field Notes',
		'projects.viewAll': 'View All Projects',

		// Design Gallery
		'design.kicker': 'DESIGN & PHOTO / GALLERY',
		'design.title': 'Visuals, Photos & AI Graph Experiments',
		'design.intro': 'A curated gallery featuring graphic design, concept art, photography, and AI-assisted generative works.',
		'design.tab.all': 'All Works',
		'design.tab.design': '🎨 Design',
		'design.tab.photography': '📷 Photography',
		'design.aiBadge': '✨ AI Generated',
		'design.humanBadge': '🎨 Handcrafted',
		'design.count': 'selected pieces in the archive',

		// Blog list & card
		'blog.kicker': 'FIELD NOTES / WRITING',
		'blog.title': 'Recent Field Notes',
		'blog.latestNotes': 'LATEST NOTES / ALL ARTICLES',
		'blog.heading': 'Field Notes & Writing',
		'blog.intro': 'Documenting dev experiments, design thoughts, and ongoing reviews.',
		'blog.viewAll': 'Read All Articles',
		'blog.langBadge.cn': 'Chinese (CN)',
		'blog.langBadge.en': 'English (EN)',
		'blog.hasTranslation': 'EN Translation Available',
		'blog.noTranslation': 'Original Version Only',
		'blog.translationAvailable': 'Translations available for this note:',
		'blog.cta.quote': 'less polish, more process.',
		'blog.cta.title': 'Beyond words, explore the works.',
		'blog.cta.button': 'Browse Project Archive',

		// Contact
		'contact.kicker': 'CONTACT / SAY HELLO',
		'contact.heading': 'Let\'s Make Something Good',
		'contact.message': 'Whether you have a fresh idea, a collaboration invite, or just want to chat about code and design, feel free to reach out.',

		// Resume
		'resume.kicker': 'RESUME / PROFILE',
		'resume.lead': 'A record of my journey, technical toolbox, and philosophy on turning thoughts into real-world software.',
		'resume.profileTitle': 'Hello, I am owocc.',
		'resume.experienceTitle': 'Experience & Practice',
		'resume.skillsTitle': 'Tools & Methodology',
		'resume.educationTitle': 'Education & Training',
		'resume.together': 'let\'s work together!',

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
