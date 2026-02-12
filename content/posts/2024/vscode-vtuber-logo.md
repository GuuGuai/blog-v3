---
title: VScode更换Vtuber风格LOGO
description: 介绍使用 Custom CSS and JS Loader 扩展修改 VSCode 默认背景 LOGO 的方法，实现编辑器界面的个性化定制。
date: 2024-05-05 10:39:42
updated: 2024-05-05 12:07:52
tags:
    - VScode
    - 美化
categories: [经验分享]
---

## 图标仓库

这种Vtuber风格的LOGO最近貌似很火，Zhilu之前也给我分享过这个仓库：

[Aikoyori/ProgrammingVTuberLogos](https://github.com/Aikoyori/ProgrammingVTuberLogos)

仓库内有各种IDE的LOGO，有些甚至还有多个版本，看了之后我也想给VScode的背景LOGO换一下，可惜仓库readme并没有介绍如何更换，issues里面有人问过，根据回答和资料总结一下VScode的更换方法。

## 如何更换

###　方法来源

[@PrunusSpeciosa_--I setup.....](https://x.com/PrunusSpeciosa_/status/1781241673525170535)

### 步骤

* 首先在VScode中安装[Custom CSS and JS Loader](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css)扩展，他是一个可以在VScode加载自定义 CSS和JS的扩展。
* 访问[Ynng/custom.css](https://gist.github.com/Ynng/3275eb9cb2b5816554877e5518417f44),可以看到：
``` css
.editor-group-watermark > .letterpress{
  background-image: url("https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/VSCode/VSCode-Thick.png") !important;
  opacity: .75;
  aspect-ratio: 3/2 !important;
}
```
* 右上角给自己fork一份，然后在自己的custom.css中修改`background-image: url("")`中的链接为自己想要的图标链接，注意是**图片的直链**，此处填的链接是上文提到的仓库里的`/VSCode/VSCode-Thick.png`图标，如果喜欢这个可以不改。
* **注意一定是给自己fork一份，改也是改自己的，不要随随便便加载来自网络的其它人的CSS，这样做有风险。**
* 修改完毕后点击代码块右上角的`Raw`按钮，页面跳转为只显示CSS文件内容，然后复制当前页面链接。
* 在VScode中打开设置，搜索`@ext:be5invis.vscode-custom-css`，进入扩展设置，找到`Vscode_custom_css: Imports`，点击`在settings.json 中编辑`，在`settings.json`中找到（没有的话自己加）：
``` json
{
  "vscode_custom_css.imports": ["",],
}
```
* 当然也可以在扩展介绍页面点击卸载按钮旁边的齿轮图标直接进入扩展设置。
* `[""]`的引号内填写你刚刚复制的链接，Ctrl+S保存并关闭文件。
* 点击VScode上方搜索框，选择`显示并运行命令`，运行`Reload Custom CSS and JS`命令后重启VScode即可。
* 恭喜，更换成功。

### 小问题

* code 安装以乎损坏。请重新安装。:正常现象，点击右上角齿轮图标选择`不再显示`。
* 我能不能使用本地的CSS文件：当然可以，但是请注意填写的必须是URL，而非资源管理器中的文件路径，套用扩展官方的说明：
>* Windows File URL Example: file:///C:/Users/MyUserName/Documents/custom.css
>* The C:/ part is REQUIRED.
>* MacOS and Linux File URL Example: file:///Users/MyUserName/Documents/custom.css

参见：[Marketplace Custom>CSS and JS Loader](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css)中的`Getting Started`章节。
