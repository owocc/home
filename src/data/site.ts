export interface NavigationItem {
	label: string;
	href: string;
	external?: boolean;
}

export interface SiteIdentity {
	name: string;
	role: string;
	eyebrow: string;
	intro: string;
	bio: readonly string[];
	location: string;
	availability: string;
	isPlaceholder: boolean;
}

export interface ExperienceItem {
	period: string;
	role: string;
	organization: string;
	summary: string;
	highlights: readonly string[];
}

export interface SkillGroup {
	label: string;
	items: readonly string[];
}

export interface EducationItem {
	period: string;
	program: string;
	institution: string;
	description: string;
}

export interface SocialLink {
	label: string;
	href: string;
	note: string;
}

export interface ContactDetails {
	heading: string;
	message: string;
	email: string;
	socials: readonly SocialLink[];
}

export interface DesignGalleryItem {
	id: string;
	title: string;
	category: 'design' | 'photography';
	image: string;
	description: string;
	year: string;
	isAiGenerated: boolean;
	tags: readonly string[];
}

export interface SiteConfig {
	username: string;
	github: string;
	language: 'zh-CN';
	title: string;
	description: string;
	identity: SiteIdentity;
	navigation: readonly NavigationItem[];
	experience: readonly ExperienceItem[];
	skills: readonly SkillGroup[];
	education: readonly EducationItem[];
	contact: ContactDetails;
	heroQuotes: {
		cn: readonly string[];
		en: readonly string[];
	};
}

export const siteConfig = {
	username: 'owocc',
	github: 'https://github.com/owocc',
	language: 'zh-CN',
	title: 'owocc｜创意开发者',
	description: 'owocc 的创意开发者个人站，记录设计、代码与持续发生的好奇心。',
	identity: {
		name: 'owocc',
		role: '创意开发者',
		eyebrow: 'HELLO, I MAKE THINGS WITH IDEAS & CODE',
		intro: '我把模糊的灵感，做成可以看见、触碰和使用的数字体验。',
		bio: [
			'我关注设计、前端与叙事之间的空隙，喜欢从一张草图开始，把想法逐步变成有性格的作品。',
			'探索创意编码、互动动画与极具质感的界面设计，打造独特而富有生命力的网页体验。',
		],
		location: '中国',
		availability: '开放接洽新的创意项目与技术交流',
		isPlaceholder: false,
	},
	navigation: [
		{ label: '首页', href: '/' },
		{ label: '简历', href: '/resume/' },
		{ label: '设计', href: '/design/' },
		{ label: '项目', href: '/projects/' },
		{ label: '博客', href: '/blog/' },
		{ label: 'GitHub', href: 'https://github.com/owocc', external: true },
		{ label: '联系', href: '/#contact' },
	],
	heroQuotes: {
		cn: [
			'HELLO, I MAKE THINGS WITH IDEAS & CODE ✨',
			'欢迎来到 owocc 的手作数字小站 🎨',
			'让设计与代码自然发生，充满生命力 🚀',
			'这里记录实验、草图与好奇心 💡',
			'保持好奇，持续创造美好的事物 🌟',
		],
		en: [
			'HELLO, I MAKE THINGS WITH IDEAS & CODE ✨',
			'Welcome to owocc\'s handmade digital nook 🎨',
			'Blending design & code with alive motion 🚀',
			'A creative archive of ideas & curiosity 💡',
			'Keep curious and craft good things 🌟',
		],
	},
	experience: [
		{
			period: '2024 — 现在',
			role: '创意开发者',
			organization: '自由创作 / 个人实践',
			summary: '围绕数字产品、互动网页与视觉叙事完成从概念到落地的完整实践。',
			highlights: [
				'将内容结构、交互原型和前端实现放在同一条创作链路中思考。',
				'建立轻量设计系统，让实验性表达仍然保持一致与可维护。',
			],
		},
		{
			period: '2022 — 2024',
			role: '设计与开发练习者',
			organization: '独立项目 / 学习实验室',
			summary: '通过持续的小型项目练习界面设计、动态图形与创意编程。',
			highlights: [
				'把每次试验整理为可复用的组件、笔记和复盘。',
				'练习用清晰的故事说明设计选择，而不只展示最终画面。',
			],
		},
	],
	skills: [
		{
			label: '设计',
			items: ['视觉叙事', '界面设计', '交互原型', '设计系统'],
		},
		{
			label: '开发',
			items: ['Astro', 'TypeScript', 'HTML / CSS', '创意前端'],
		},
		{
			label: '工作方式',
			items: ['内容梳理', '快速试验', '无障碍设计', '项目复盘'],
		},
	],
	education: [
		{
			period: '2020 — 2024',
			program: '软件工程 / 计算机科学与技术',
			institution: '大学',
			description: '专注于现代 Web 技术、人机交互与图形渲染方向的探索与实践。',
		},
	],
	contact: {
		heading: '一起做点有意思的事',
		message: '如果你有一个刚冒出来的想法、一次合作邀请，或只是想聊聊设计与代码，欢迎通过 GitHub 或邮件来信。',
		email: 'hello@owocc.dev',
		socials: [
			{
				label: 'GitHub',
				href: 'https://github.com/owocc',
				note: 'owocc 的 GitHub 代码主页',
			},
			{
				label: '设计主页',
				href: '/design/',
				note: '设计图与摄影画廊',
			},
		],
	},
} as const satisfies SiteConfig;

export default siteConfig;
