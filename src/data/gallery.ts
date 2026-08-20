export interface GalleryItem {
	id: string;
	title: {
		cn: string;
		en: string;
	};
	category: 'design' | 'photography';
	image: string;
	description: {
		cn: string;
		en: string;
	};
	year: string;
	isAiGenerated: boolean;
	tags: readonly string[];
}

export const designGallery: readonly GalleryItem[] = [
	{
		id: 'poster-collage-2026',
		title: {
			cn: '纸张撕裂风视觉海报试验',
			en: 'Paper Collage Visual Poster Experiment',
		},
		category: 'design',
		image: '/og.png',
		description: {
			cn: '探索真实纸张纹理、高饱和拼贴撞色与粗黑描边在现代数字海报中的视觉张力。',
			en: 'Exploring tactile paper textures, high-contrast collage palettes, and bold outlines in digital poster craft.',
		},
		year: '2026',
		isAiGenerated: false,
		tags: ['平面设计', '海报', '视觉叙事'],
	},
	{
		id: 'ai-concept-cyber-landscape',
		title: {
			cn: '神经脉络：赛博数字景观概念图',
			en: 'Neural Flora: Cyber Digital Landscape',
		},
		category: 'design',
		image: '/og.png',
		description: {
			cn: '使用 Midjourney 与 ComfyUI 流程生成并在 Figma 中完成排版与配色重构的未来主义概念设计。',
			en: 'Futuristic concept design generated via Midjourney + ComfyUI and refined with custom typography in Figma.',
		},
		year: '2026',
		isAiGenerated: true,
		tags: ['概念设计', 'AI 生成', '创意编码'],
	},
	{
		id: 'photo-urban-lights',
		title: {
			cn: '雨夜光轨与城市剪影',
			en: 'Rainy Night Light Trails & Urban Silhouettes',
		},
		category: 'photography',
		image: '/og.png',
		description: {
			cn: '在雨夜的十字路口记录行色匆匆的人群与车流慢门拉出的霓虹光斑。',
			en: 'Capturing hurried crowds and slow-shutter neon light streaks at a rainy street intersection.',
		},
		year: '2025',
		isAiGenerated: false,
		tags: ['城市摄影', '夜景', '胶片色调'],
	},
	{
		id: 'ai-surreal-desert',
		title: {
			cn: '白日梦境：浮空几何与沙丘',
			en: 'Daydream: Floating Geometries over Dunes',
		},
		category: 'design',
		image: '/og.png',
		description: {
			cn: 'AI 辅助生成的超现实主义三维构图，展现超自然几何体在自然荒漠中的光影反射。',
			en: 'Surrealist 3D scene assisted by AI diffusion, contrasting monolithic shapes against natural sand curves.',
		},
		year: '2026',
		isAiGenerated: true,
		tags: ['超现实', 'AI 生成', '3D 渲染'],
	},
	{
		id: 'photo-minimal-architecture',
		title: {
			cn: '混凝土与光线的几何交界',
			en: 'Minimal Concrete & Light Intersection',
		},
		category: 'photography',
		image: '/og.png',
		description: {
			cn: '在建筑转角捕捉极简的光影切线与纯粹的材质质感。',
			en: 'Catching geometric shadow slices and raw material textures along minimalist architectural corners.',
		},
		year: '2025',
		isAiGenerated: false,
		tags: ['建筑摄影', '极简主义', '黑白光影'],
	},
	{
		id: 'ai-character-mascot-evolution',
		title: {
			cn: '角色吉祥物多态表情设计',
			en: 'Mascot Polymorphic Expressions',
		},
		category: 'design',
		image: '/og.png',
		description: {
			cn: '结合手绘线稿与 AI 图像控制网（ControlNet），实现角色在不同情绪状态下的质感统一。',
			en: 'Combining hand-drawn key sketches and ControlNet diffusion to maintain visual consistency across states.',
		},
		year: '2026',
		isAiGenerated: true,
		tags: ['角色设计', 'AI 生成', '插画'],
	},
];
