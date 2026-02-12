---
title: Github22端口被占用
description: 发文章的时候发现Github 22端口被占用，写一篇文章备忘。
date: 2024-01-21 13:22:23
updated: 2024-03-29 21:59:45
tags:
  - Github
categories: [经验分享]
---

昨天晚上写好一篇文章准备更新博客时，发现连不上GitHub的22端口了，网上查了查教程发现可以换端口，于是写一篇这个备忘。

## 更改22端口为443端口

系统是Windows 11，在用户文件夹下找到.ssh文件夹，新建config文件，在其中填写：

```
Host github.com
  Hostname ssh.github.com
  Port 443
```

保存关闭即可，clean后重新生成提交就可以了。

## 其它情况

查的时候发现了其它原因导致的连接超时，比如DNS解析，可以先执行

```sh
ssh -vT git@github.com
```

看看能否解析到正确的IP地址，解析到其它地方或localhost那就证明是解析出问题了，修改hosts文件添加正确的解析即可。

## 参考

* [坑：ssh: connect to host github.com port 22: Connection refused - 无忌的文章 - 知乎](https://zhuanlan.zhihu.com/p/521340971)
* [Github 22端口被占用解决方案 - Wilson27的文章 - 知乎](https://zhuanlan.zhihu.com/p/148771981)
* [通过 SSH 连接到 GitHub](https://docs.github.com/zh/authentication/connecting-to-github-with-ssh)
