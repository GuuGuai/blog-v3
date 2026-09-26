// 友链检测 CLI 需要使用显式导入和相对路径
import type { FeedGroup } from '../app/types/feed'
import { myFeed } from '../blog.config'
import { getFavicon, getGhAvatar, getGhIcon, getOicqAvatar, getQgroupAvatar, OicqAvatarSize } from './utils/img'

export default [
	// #region 同学朋友
	{
		name: '同学朋友',
		desc: '身边的同学朋友们',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			myFeed,
			{
				author: '纸鹿本鹿',
				sitenick: '摸鱼处',
				title: '纸鹿摸鱼处',
				desc: '纸鹿至麓不知路，支炉制露不止漉',
				link: 'https://blog.zhilu.site/',
				feed: 'https://blog.zhilu.site/atom.xml',
				icon: 'https://www.zhilu.site/icon.png',
				avatar: getGhAvatar('L33Z22L11'),
				archs: ['Nuxt', 'Vercel'],
				date: '2023-12-23',
				comment: '本主题的作者',
			},
			{
				author: 'LuckyFish',
				sitenick: '博客',
				title: 'NoName Blog',
				desc: '一条鱼的自娱自乐',
				link: 'https://blog.luckyfishes.site/',
				feed: 'https://blog.luckyfishes.site/rss.xml',
				icon: 'https://blog.luckyfishes.site/avatar.png',
				avatar: 'https://blog.luckyfishes.site/avatar.png',
				archs: ['React', 'Vercel'],
				date: '2023-12-23',
				comment: '舍友，曾任西建大iOS Club社长',
			},
			// {
			// 	author: 'Rail-Station',
			// 	sitenick: '图鉴',
			// 	title: 'RS',
			// 	desc: 'Rail-Station 行迹车站图鉴',
			// 	link: 'https://rail-station.com/',
			// 	icon: 'https://rail-station.com/assets/logo/Rail-Station-RS-2048x.png',
			// 	avatar: 'https://rail-station.com/assets/logo/Rail-Station-RS-2048x.png',
			// 	archs: ['PHP', '服务器'],
			// 	date: '2024-08-10',
			// 	comment: '同学，目前专注于铁路相关内容的图鉴站点',
			// },
			/* ========从此处新增友链======== */
		],
	},
	// #endregion
	// #region 网上邻居
	{
		name: '网上邻居',
		desc: '网络好友~',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			{
				author: '洪畅',
				// sitenick: '博客',
				title: '洪畅的博客',
				desc: '想，全是问题；做，才有答案。',
				link: 'https://blog.hcbu.cn/',
				feed: 'https://blog.hcbu.cn/atom.xml',
				icon: 'https://gitee.com/hcbug/picture1/raw/master/20260607223324364.webp',
				avatar: 'https://gitee.com/hcbug/picture1/raw/master/20260607223324364.webp',
				archs: ['Nuxt', 'Vercel'],
				date: '2026-07-08',
				// comment: '',
			},
			{
				author: 'Alex',
				sitenick: 'RAGNote',
				title: 'RAGNote',
				desc: 'Life is code. I will debug it.',
				link: 'https://ragnote.top/',
				feed: 'https://api.ragnote.top/rss.xml',
				icon: 'https://ragnote.top/default-favicon.png',
				avatar: 'https://ragnote.top/Avatar.png',
				archs: ['Vue', 'Cloudflare'],
				date: '2026-09-26',
				// comment: '',
			},
			/* ========从此处新增友链======== */
		],
	},

	// #endregion
	// #region 组织机构
	{
		name: '组织机构',
		desc: '一些有趣的组织机构',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			{
				author: '野生技协',
				desc: '自发性的技术协助组织/无门槛的技术交流群',
				link: 'https://thisis.host/',
				icon: getQgroupAvatar('894656456'),
				avatar: getQgroupAvatar('894656456'),
				archs: ['Hexo', 'EdgeOne'],
				date: '2024-03-14',
				comment: '纸鹿在高中时期创建的技术交流群',
			},
			{
				author: '方块茶话会',
				desc: '一个线上的Minecraft交流群',
				link: 'https://btr.thisis.host/',
				icon: getQgroupAvatar('1142349003'),
				avatar: getQgroupAvatar('1142349003'),
				archs: ['VitePress', 'Netlify'],
				date: '2024-03-14',
				comment: '',
			},
			{
				author: '西建大iOS Club',
				desc: '西建大较大和较为知名的科技类社团',
				link: 'https://www.xauat.site/',
				icon: getQgroupAvatar('952954710'),
				avatar: getQgroupAvatar('952954710'),
				archs: ['Vue', 'Zeabur'],
				date: '2024-03-14',
				comment: '西建大的iOS社团，全校唯一的科技类社团',
			},
			/* ========从此处新增友链======== */
		],
	},

	// #endregion
] satisfies FeedGroup[]
