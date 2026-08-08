export interface NavigationItem {
	label: string;
	href: string;
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

export interface SiteConfig {
	language: 'zh-CN';
	title: string;
	description: string;
	identity: SiteIdentity;
	navigation: readonly NavigationItem[];
	experience: readonly ExperienceItem[];
	skills: readonly SkillGroup[];
	education: readonly EducationItem[];
	contact: ContactDetails;
}

export const siteConfig = {
	language: 'zh-CN',
	title: '你的名字｜创意开发者',
	description: '一个可替换内容的创意开发者个人站示例，记录设计、代码与持续发生的好奇心。',
	identity: {
		name: '你的名字',
		role: '创意开发者',
		eyebrow: 'HELLO, I MAKE THINGS WITH IDEAS & CODE',
		intro: '我把模糊的灵感，做成可以看见、触碰和使用的数字体验。',
		bio: [
			'我关注设计、前端与叙事之间的空隙，喜欢从一张草图开始，把想法逐步变成有性格的作品。',
			'这里的姓名、经历与联系方式都是可替换示例。你可以在一个文件里更新它们，而不用改动页面结构。',
		],
		location: '你所在的城市',
		availability: '开放接洽新的创意项目',
		isPlaceholder: true,
	},
	navigation: [
		{ label: '首页', href: '/' },
		{ label: '简历', href: '/resume/' },
		{ label: '项目', href: '/projects/' },
		{ label: '博客', href: '/blog/' },
		{ label: '联系', href: '/#contact' },
	],
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
			period: '20XX — 20XX',
			program: '你的专业',
			institution: '你的学校',
			description: '在这里替换真实的学习经历、研究方向或与创作相关的训练。',
		},
	],
	contact: {
		heading: '一起做点有意思的事',
		message: '如果你有一个刚冒出来的想法、一次合作邀请，或只是想聊聊设计与代码，欢迎来信。',
		email: 'hello@example.com',
		socials: [
			{
				label: '代码主页',
				href: 'https://example.com/code',
				note: '请替换为你的代码托管主页',
			},
			{
				label: '设计主页',
				href: 'https://example.com/design',
				note: '请替换为你的作品发布主页',
			},
		],
	},
} as const satisfies SiteConfig;

export default siteConfig;
