---
title: 如何查找二次元插画原图以及作者
description: 介绍了 SauceNAO、ascii2d 以及 Google 识图等搜图工具的使用方法和技巧，通过实际案例演示如何从一张残缺的图片找到原图。
date: 2024-02-09 15:23:17
updated: 2026-02-13 00:35:50
tags:
	- pixiv
	- 以图搜图
	- Google
	- 插画
	- 二次元
categories: [经验分享]
---

## 搜索前准备

* 最好有梯子，因为下面这些站点有些必须要挂梯子才能用，而且搜索出来的结果可能也要梯子才能进行查看。

* **不要在公共场合搜索**，即使你搜的图片是Non-H级别的：搜索结果并不是百分百准确的，也还是会有可能搜出限制级的图片。

* 搜索用的图片**提前裁剪**一下无用的部分，尽量不要把全屏截图拿来直接搜索，把多余的软件UI界面都裁剪掉。

## SauceNAO

[SauceNAO](https://saucenao.com/)可以搜索各种类型图片的来源，包括插画、漫画、电影、游戏等等，默认会从38个数据源中进行检索（默认全选，你可以自己选择），包括各位常用的Pixiv、推特（X），甚至部分来自Fanbox等等平台的赞助图也可以被检索到。

打开页面后点击**Select Image**选择图片或将图片拖拽到页面上点击**SERACH**即可搜索。

其中 **Safe <sup>ish</sup> Search** 是一个安全搜索开关，如果开启的话，在搜索结果中可能会隐藏部分存在露骨等不适宜的结果，不过并不是完全隐藏。

**Auto**一个自动搜索开关，把这个勾选上的话，选择完图片就行自动开始检索，无需手动点击SEARCH按钮。

::pic
---
src: https://assets.065535.xyz/posts/20260215_saucenao-homepage.webp
caption: SauceNAO首页
width: 500
---
::

对于搜索出来的结果会按照相似度进行排序，结果左边是用来预览的缩略图，右边是详细信息，以Pixiv为例，点击右边的**pixiv ID**即可进入该插画的pixiv详细页，点击**Member**即可进入该作者的Pixiv主页。

::pic
---
src: https://assets.065535.xyz/posts/20260215_saucenao-results.webp
caption: SauceNAO搜索结果页
width: 500
---
::

不仅仅局限于插画，海报、动画、gal的CG等等都可以在这里检索。

::pic
---
src: https://assets.065535.xyz/posts/20260215_saucenao-other-results.webp
caption: SauceNAO多种检索结果
width: 500
---
::

另外SauceNAO也有有浏览器拓展的，可以首页下方点击**Tools**，然后选择自己的浏览器类型进入安装界面（并非只有Firefox和chrome可以安装，Edge以及其它基于chrome内核的浏览器用户也可以选择chrome拓展）。

::pic
---
src: https://assets.065535.xyz/posts/20260215_saucenao-ext-install.png
caption: SauceNAO拓展安装
width: 500
---
::

安装完成后在图片上右键就可以看到菜单了。

::pic
---
src: https://assets.065535.xyz/posts/20260215_saucenao-ext-menu.webp
width: 500
---
::

然而SauceNAO并不能搜索被裁剪过的图片，边边角角缺失一点问题不算很大，但是如果是差不多三分之一及以上被截掉了，基本上搜不出来的，需要使用其它方法，例如接下来要说的ascii2d特徴検索以及Google。

## ascii2d/二次元画像詳細検索

[ascii2d](https://ascii2d.net/)是专门用来查找二次元插画的网站，在主页选择文件或者是拖拽文件到框内即可（网络图片不想下载了也可以把图片粘贴到画像URL框内）。

::pic
---
src: https://assets.065535.xyz/posts/20260215_ascii2d-homepage.png
caption: ascii2d主页
width: 500
---
::

他有两个检索模式，一个是**色合検索**，一个是**特徴検索**，**色合検索**适合于未经裁剪的图片，同时需要注意的是黑白图片需要几乎完全一致才能检索到。

::pic
---
src: https://assets.065535.xyz/posts/20260215_ascii2d-color-results.png
caption: 色合检索结果
width: 500
---
::

如果图片经过裁剪的话，可以使用**特徴検索**，如果被裁剪的范围不是很大的话，有很大可能是会找到原图的，下面这个例子我把图片拦腰截断，在默认的色合検索下无法找到原图，点击红色框中的特徴検索后，成功找到原图。

::pic
---
src: https://assets.065535.xyz/posts/20260215_ascii2d-feat-results1.png
caption: 特徴检索位置
width: 500
---
::

::pic
---
src: https://assets.065535.xyz/posts/20260215_ascii2d-feat-results2.png
caption: 特徴检索结果
width: 500
---
::

## Google识图

如果上面两个站点都查不到原图，可能是你搜索用的图严重残缺，有较多的干扰元素（例如较大的文字），或者是图片是拼接起来的，抑或是这张图没有上传在Pixiv等主流插画平台，那么这种疑难杂症就需要用Google了。

::pic
---
src: https://assets.065535.xyz/posts/20260215_google-homepage.png
caption: Google主页
width: 500
---
::

在Google主页点击右侧红框中的图标，上传或者拖拽文件即可。PC端可以直接上传图片，手机端会强制跳转让你去安装Google的app，使用浏览器的访问电脑版/桌面版选项，可以绕过安装app。

Google的搜图结果可以找到很多关于这个图的线索，根据得到的线索（比如作者、标题、所绘制的角色、更加完整的版本等等）继续搜索，一路搜下去直到找到原图。

如果在搜索结果中碰到各种论坛的贴子，也可以点进去看看，说不定评论区就有人发图片的来源。

### 实例

举个例子吧，下面这张八奈见的图，作者并没有上传到Pixiv，这种没在Pixiv上、并且还可能有裁剪的图，只能靠在Google识图这种引擎在全网搜索了。

::chat
{:某日于QQ，收到好友一条消息}

{汋}

::pic
---
src: https://assets.065535.xyz/posts/20260215_example-pic.jpg
width: 200
---
::

你是不是有这个图

{.GuuGuai}

没

{.}

你这个版本我第一次见

{.}

我要去找找原图
::

上传到Google之后，给出的结果也证实了这个图是裁剪过的，为了更好的溯源，在有较多结果时，可以先去在关闭了的**安全搜索**的**完全匹配的结果**里面检索，这样可以排减少一些工作量。

::pic
---
src: https://assets.065535.xyz/posts/20260215_google-results.png
caption: Google全部搜索结果
width: 500
---
::

这个图片的使用频率还挺高的，我们可以看到有各种站点和图片尺寸，有些是网文网文封面，大概看一下，没有网文老老实实标注出处的，pass；有些是社交媒体头像，可以点进去到主页个人介绍看看，没有标注头像出处，pass；壁纸引擎的创意工坊里面也有一堆壁纸用这个图片当封面，同样没有出处，pass.......

::pic
---
src: https://assets.065535.xyz/posts/20260215_google-exact-match.png
caption: 完全匹配的结果
height: 500
---
::

最终发现有一个标题为 **[新番讨论][专楼]《败犬女主太多了！》最终话** 的NGA帖子出现了一个`717*1024`的匹配图片，这个尺寸估计也不是原图，不过就像上面提到的，对于这种讨论贴，点进去看一下还是很有必要的，说不定发图的人就会附带图片出处或者被人追问出处。

::pic
---
src: https://assets.065535.xyz/posts/20260215_nga-result.png
caption: NGA的帖子
width: 500
---
::

果不其然，发这个图片的用户就附带了这张图片的出处，虽然没有直接发链接，但是图片中已经指明了吧名、标题、用户名，只要接下来去贴吧按这个信息搜一下就能找到原图了。

::pic
---
src: https://assets.065535.xyz/posts/20260215_nga-content.png
caption: 原图出处
height: 400
---
::

::chat
{:找到原图后}

{.GuuGuai}

原地址：[败犬女主太多了吧-八奈见插画上色](https://tieba.baidu.com/p/9160259842?pid=150886955832&cid=0#150886955832){icon="ri:baidu-fill"}

{.}

我草

{.}

这个真心好看啊

{.}

越看越喜欢

{汋}

换壁纸

{.}

我发现这个也有很多上色版本

{.}

原图是伊右群在小说里的插画

::

## 其它图片搜索引擎

百度识图/Bing视觉搜索等等其它的图片搜索引擎，不过这属于是没办法的办法，上面都试过去了不行，这几个大概率也不会有结果......百度和Bing的识图都烂的不行。

可能有人会觉得你上面Google的那个例子里面，出处不就是百度贴吧吗，那百度还能识别不出来。还真就这样，百度确实识别不出来，以图搜图做的很差。
