<script setup lang="ts">
const { timeEstablished } = useAppConfig()

const blogLog = [
	{ label: '2026-02-09', value: '弃用Hexo框架，更换为纸鹿的blog-v3（Nuxt 4 & Nuxt Content v3）' },
	{ label: '2024-03-30', value: '升级框架与主题版本' },
	{ label: '2022-06-21', value: '部署于Netlify，使用Volantis主题' },
	{ label: '2022-05-08', value: '使用 gug.thisis.host 域名' },
	{ label: '2022-04-25', value: '部署于Github Pages' },
	{ label: timeEstablished, value: '博客建站，使用Hexo框架' },
]
</script>

<template>
<BlogWidget card title="更新日志">
	<ZDlGroup size="large" :items="blogLog" />
</BlogWidget>
</template>
