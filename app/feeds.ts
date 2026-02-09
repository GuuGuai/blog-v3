// 友链检测 CLI 需要使用显式导入和相对路径
import type { FeedGroup } from '../app/types/feed'
import { myFeed } from '../blog.config'
import { getFavicon, getGhAvatar, getGhIcon, getOicqAvatar, getQgroupAvatar, OicqAvatarSize } from './utils/img'

export default [
	// #region Clarity
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
				title: 'LuckyFish博客',
				link: 'https://blog.luckyfishes.com/',
				icon: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F08ce0f67-8cac-4bb5-b79a-7a40936baf90%2F1a1181d4-358f-4a58-817d-130836258c52%2Fduitang_1654934307200.png?table=collection&id=07f7dc19-7a9a-48cf-9b90-7d45e0f23f7a&width=400',
				avatar: getOicqAvatar('2383690354'),
				archs: [],
				date: '2023-12-23',
				comment: '舍友，曾任西建大iOS Club社长',
				error: '正在自建博客框架中',
			},
		],
	},
	// #endregion
	// #region 网上邻居
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
