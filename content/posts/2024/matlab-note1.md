---
title: MATLAB-笔记1
date: 2024-01-29 15:29:45
updated: 2024-03-30 13:11:47
tags:
    - 数学建模
    - MATLAB
categories: [数学建模]
---

:alert{type="warning" title="以下内容仅为笔记，仅供参考复习"}

> [对应课程地址](https://www.bilibili.com/video/BV1Az41187mi?p=1&vd_source=0ba530b3a9600f6e711ed9a290af87e0)
## 控制台
* ；抑制输出，运行但不输出
* clc清空输出，clear彻底清空，clear加变成名称可以指定清除某变量（可跟多个）
* 输入脚本名，matlab会自动查找工作目录以及上级目录下是否有对应脚本，工作目录有则运行，上级目录有则提示是否更改目录。
* 大小写敏感
* 变量名称仅允许以字母开头，，后面可以使用字母数字特殊符号，最大长度63字符
* 使用who查看所有变量名称，whose查看详细
* 执行format long命令可以在后续输出全部位数的有效数字
* 光标位于命令中按F1查看该命令帮助
* 在已经有输入内容的时候按方向上只会显示与已有内容有关的
* % 注释符
## 数据类型相关
* 数据类型(变量名) 可以指定数据类型，如：single(sum),int8/16/32/64(sum)等等(uint为不带符号)
* 'Apple'为char类型，"Apple"为string字符串类型
* 5/2=2.5，5\2=0.4，2 ^ 3=8，3e8=3*10 ^ 8
* format compact命令，紧凑输出；format loose 默认显示空格。
* ...结尾当换行符
* 运算优先级：() > ^ > -(负号）> * ,/,\ > + ,-  ；即括号>幂次>负号>乘除>加减
[MATLAB帮助中心-运算优先级条目](https://ww2.mathworks.cn/help/matlab/matlab_prog/operator-precedence.html)
* i 和 j 默认为虚数单位，若被当作变量赋值，在其前面加上常数即可重新被认为是虚数单位，如：2+3 * 1i或1+3i
* inf 和-inf代表无穷大和负无穷大，本质是double
* NaN 表示非数字值，本质double
* logical为逻辑变量类型，0为true，1为false
> 3>5会返回逻辑变量1，3<5返回0
## 基本函数
* help elfun 基本函数帮助信息，help 函数名 返回对应函数的帮助
* sqrt()开方
* abs()绝对值
### 随机数函数
* rand（）直接输出是0-1的伪随机数，后面加* n可以改变随机范围
* randn()生成标准正态分布上的随机数，randi([1 10])，生成1-10上的伪随机整数
* rng（）设置随机数种子， seed为非负整数，如 rng(1)，用该种子初始化随机数生成器，将 seed 指定为 "shuffle"，以根据当前时间初始化生成器种子，即rng('shuffle')
> 要生成特定范围的随机数，比如20-35，可以：15* rand()+20
