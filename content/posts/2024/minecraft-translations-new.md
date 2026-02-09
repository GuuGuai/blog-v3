---
title: Java版的译名是Mojang官方翻译的吗？
date: 2024-08-07 11:09:03
updated: 2024-08-07 19:44:09
tags:
    - Minecraft
    - Java版
    - 译名
categories: [Minecraft]
---

## 先说结论，不是

正如小标题所言，Java的翻译不是Mojang自己进行的，截至目前，MC共计有166种语言，甚至包含文言，这么多语言的翻译Mojang由Mojang内部自己完成再怎么说也是有点难的，也许有同学会问：那外包不就行了？

## 也没有外包（仅限Java版）

事实上基岩版的翻译工作是外包给第三方公司了，但Java版没有，而是依托于各地区玩家社区进行翻译工作。

::pic
---
src: https://p.ananas.chaoxing.com/star3/origin/5df2ee02791094d7f74bb0c3594e0a32.png
mirror: baidu
caption: 简体中文译名讨论模式示意图
width: 400
---
::

Java版的翻译工作在Crowdin上进行，Crowdin是一个提供语言本地化服务的在线平台，致力于帮助各种项目与产品翻译为多种语言，Mojang在上面开设了两个翻译项目，分别是[Minecraft本体](https://zh.crowdin.com/project/minecraft)与[官方启动器](https://zh.crowdin.com/project/minecraft-launcher)，根据Wiki管理组发布的流程图，新加入的内容由Mojang公布后会在Crowdin上传语言文件，中文wiki管理组会先进行讨论，对于一些已有翻译的、没有分歧和争议的会直接批准为译名，而管理组有分歧的将会在社区进行进行讨论与投票（目前指定的交流讨论平台为[Crowdin](https://zh.crowdin.com/project/minecraft/discussions)、[QQ交流群](https://zh.minecraft.wiki/w/Minecraft_Wiki:%E4%BA%A4%E6%B5%81%E7%BE%A4#qqtranslation)和[Discord服务器](https://discord.com/invite/HPJ8z2Y6Zk)）。

对于社区讨论的结果将继续由管理组进行讨论，对于没有分歧的结果将直接批准，有分歧的译名将进行投票以决定最终译名，在Crowdin提出的译名在平台上可直接进行投票，投票分为支持(+1)或反对(-1)，同时其它讨论平台（即前文提到的Discord服务器和QQ交流群）也可能会有投票（不过就目前而言，主要在Crowdin上）。

::pic
---
src: https://p.ananas.chaoxing.com/star3/origin/79b9f974ebd6ee898ed618f1a196d840.png
mirror: baidu
caption: Crowdin界面
width: 400
---
::

投票反映的是大家对于当前译名的态度与看法，并不取到决定性作用，接下来就是由Mojang指定的审核员评估投票结果是否具有参考价值，然后对译名进行批准操作，批准后的译名将作为正式译名在下次发布的快照版本或正式版本中使用，目前简体中文现任的审核员分别是ff98sha、Lxazl5770和powup333。（顺带提一句，Mojang并不会在所有译名都批准后才使用翻译文件，翻译进行期间发布的版本有什么用什么，批准了就用批准的，一个词语没有任何一个译名被批准时，会取Crowdin上得票数最高的译名使用）

可能还有同学会问，啊？什么叫有没有参考价值？其实投票最高的译名他真的不一定就是恰当的，互联网上人数众多，我们不能只看投票结果，需要对结果进行评估，把结果作为参考，而不是简简单单当作结论。举个例子：假如有人恶趣味地组织了对垃圾译名的刷票行为，或者使用小号干扰破坏投票结果等等，后者在最近就出现过一次：`Mace`（重锤）的译名在几个月曾被大量三无账号干扰过投票，这些账号在短时间内对已批准的译名（原本得票最高）投反对票，对其它译名投支持票，企图以这种行为干扰译名投票结果。

::pic
---
src: https://p.ananas.chaoxing.com/star3/origin/85664a2a3ba19529ce705906555ba518.png
mirror: baidu
caption: Crowdin上的公告
width: 400
---
::

因此有些时候，为了得到一个译名其实并不容易，再比如1.16加入的`Netherite`（现在的标准译名为下界合金）要如何进行翻译在社区之中曾引起过一场旷日持久的讨论（或者说是争论？），几经波折最终才将译名定为`下界合金`。（下图是由Lxazl5770总结的译名讨论之不可能三角，即这个三角一般情况下只能取其二）

::pic
---
src: https://p.ananas.chaoxing.com/star3/origin/c258ba13bc70ffcee23b8afe3bfff019.png
mirror: baidu
caption: 不可能三角
width: 400
---
::

## 一点总结

Mojang没有自己做Java版的翻译，也没有把这活外包给第三方公司，而是在Crowdin上交给当地玩家社区进行。

当然上面的描述只是对Crowdin这一模式进行简单介绍，详细的流程不做讨论，第一因为总是在变的，比如MCBBS一关，之前制定的“论坛模式”也就随之消失了（如果对之前的模式感兴趣可以看看下面的参考资料，其中有提到已经过期的讨论模式和其他信息）。

第二在译名决定这件事上我只是一个旁观者，和活跃的贡献者不一样的是，写不出来详细的东西，之前我曾找到Lake桑打扰他帮我看了下内容，他和SkyEye_FAST发现我之前写的东西一些地方已经过时，并且错误连篇（再次表示感谢），后面坐下来想了一会，发现我其实偏离了写这篇文章的目的：“社团的公众号没有什么内容，刚好一些同学对mc的翻译有误解，那就写篇文章告诉他们翻译其实不是Mojang自己做的吧”。那么这样的话，关于这套流程细枝末节的地方和不确定的地方，有必要出现吗？显然没有必要，我的目的一开始就没有那些内容，偏题了而已，我的目的就是一篇简短的介绍而已，说明一个基本的流程就可以了，什么翻译准则、什么基翻流程等等，不在我的能力范围以内，所以就把那些内容删掉了，只保留了大致的介绍（不过就这些内容估计也有地方出错，发现的话请各位指正）。

## 参考资料

1. [Crowdin上的Mojang/Minecraft-讨论](https://zh.crowdin.com/project/minecraft/discussions)
2. [中文Minecraft Wiki:译名标准化/译名讨论指导](https://zh.minecraft.wiki/w/Minecraft_Wiki:%E8%AF%91%E5%90%8D%E6%A0%87%E5%87%86%E5%8C%96/%E8%AF%91%E5%90%8D%E8%AE%A8%E8%AE%BA%E6%8C%87%E5%AF%BC)
3. [中文Minecraft Wiki:Crowdin](https://zh.minecraft.wiki/w/Crowdin)
4. [中文Minecraft Wiki:译名标准化](https://zh.minecraft.wiki/w/Minecraft_Wiki:%E8%AF%91%E5%90%8D%E6%A0%87%E5%87%86%E5%8C%96)
5. [邹陈云飞-MC基岩版的雷人翻译是如何“炼成”的](https://www.bilibili.com/video/BV1CS4y1E7ap/?share_source=copy_web&vd_source=957e69f379bacc93f215b526c47faac8)
6. [Netherite是怎样炼成“下界合金”的？【SkyEye_FAST】](https://www.bilibili.com/video/BV1PR4y177Jq/)
