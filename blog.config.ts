import type { FeedEntry } from './app/types/feed'

const basicConfig = {
	title: '古怪杂记本',
	subtitle: '一个什么都可能会写的博客',
	// 长 description 利好于 SEO
	description: '这是GuuGuai的个人博客，记录一些生活琐事、经验分享以及其它琐碎事务。',
	author: {
		name: 'GuuGuai',
		avatar: 'https://cravatar.cn/avatar/646331BFF8F19A0E05679C3CC0FC54D6',
		email: 'hi@guuguai.site',
		homepage: 'https://blog.guuguai.site/',
	},
	copyright: {
		abbr: 'CC BY-NC-SA 4.0',
		name: '署名-非商业性使用-相同方式共享 4.0 国际',
		url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans',
	},
	favicon: 'https://cravatar.cn/avatar/646331BFF8F19A0E05679C3CC0FC54D6',
	language: 'zh-CN',
	timeEstablished: '2022-04-24',
	timeZone: 'Asia/Shanghai',
	url: 'https://blog.guuguai.site/',
	defaultCategory: '未分类',
}

// 存储 nuxt.config 和 app.config 共用的配置
// 此处为启动时需要的配置，启动后可变配置位于 app/app.config.ts
// @keep-sorted
const blogConfig = {
	...basicConfig,

	article: {
		categories: {
			[basicConfig.defaultCategory]: { icon: 'ph:folder-dotted-bold' },
			经验分享: { icon: 'ph:mouse-bold', color: '#3af' },
			Minecraft: { icon: 'mdi:minecraft', color: '#3ba' },
			数学建模: { icon: 'ph:sigma-bold', color: '#f77' },
			考研: { icon: 'ph:graduation-cap-bold', color: '#77f' },
		},
		defaultCategoryIcon: 'ph:folder-bold',
		/** 文章版式，首个为默认版式 */
		types: {
			tech: {},
			story: {},
		},
		/** 分类排序方式，键为排序字段，值为显示名称 */
		order: {
			date: '创建日期',
			updated: '更新日期',
			// title: '标题',
		},
		/** 使用 pnpm new 新建文章时自动生成自定义链接（permalink/abbrlink） */
		useRandomPremalink: false,
		/** 隐藏基于文件路由（不是自定义链接）的 URL /post 路径前缀 */
		hidePostPrefix: true,
		/** 禁止搜索引擎收录的路径 */
		robotsNotIndex: ['/preview', '/previews/*'],
	},

	/** 博客 Atom 订阅源 */
	feed: {
		/** 订阅源最大文章数量 */
		limit: 50,
		/** 订阅源是否启用XSLT样式 */
		enableStyle: true,
	},

	/** 向 <head> 中添加脚本 */
	scripts: [
		// 自己部署的 Umami 统计服务
		{ 'src': 'https://u.guuguai.site/script.js', 'data-website-id': 'ae322dda-e6cd-4290-9008-2ba2af4ef85e', 'defer': true },
		// 自己网站的 Cloudflare Insights 统计服务
		{ 'src': 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "a6a9f9b04e5d4fc492a8844a45276fd5"}', 'defer': true },
		// Twikoo 评论系统
		{ src: 'https://lib.baomitu.com/twikoo/1.6.44/twikoo.min.js', defer: true },
	],

	/** 自己部署的 Twikoo 服务 */
	twikoo: {
		envId: 'https://gug-twikoo-netgug.netlify.app/.netlify/functions/twikoo',
		preload: 'https://gug-twikoo-netgug.netlify.app/',
	},
}

/** 用于生成 OPML 和友链页面配置 */
export const myFeed: FeedEntry = {
	author: blogConfig.author.name,
	sitenick: '杂记本',
	title: blogConfig.title,
	desc: blogConfig.subtitle || blogConfig.description,
	link: blogConfig.url,
	feed: new URL('/atom.xml', blogConfig.url).toString(),
	icon: blogConfig.favicon,
	avatar: blogConfig.author.avatar,
	archs: ['Nuxt', 'Netlify'],
	date: blogConfig.timeEstablished,
	comment: '这是我自己',
}

export default blogConfig
