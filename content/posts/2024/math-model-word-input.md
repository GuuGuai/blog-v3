---
title: MATLAB如何导入Word文档中的表格数据
description: 24年西建大数模校赛C题中，题目数据以表格的形式放进了word文档之中，部分同学被这个数据导入给卡住了，对着word里面的数据无从下手，其实MATLAB提供了从word中导入表格数据的函数。
date: 2024-05-04 11:17:03
updated: 2024-05-04 16:02:45
tags:
    - 数学建模
    - MATLAB
categories: [数学建模]
plugins: [indent]
---

## 题目描述

题目来源为2024年西建大学数学建模校赛C题：某单位委托了心理测评机构为148名应聘者进行了三种心理测评问卷，以了解应聘者的心理状态，问题出在测试者的问卷结果在附件中是以Word文档的形式给出，测评分数等结果在其中以表格形式给出，需要全部提取出来才可以进行之后建模数据处理。

## 手动录入方法

最低门槛方法，不多说，一个一个Ctrl CV即可，重复的机械劳动。

## MATLAB录入

平时可能不会遇到从word导入数据的情况，以至于有些同学不太清楚，事实上MATLAB R2013b加入的readtable函数就可以读取word文档中的表格数据，不过由于附件中的文档存在多个表格，并且存在合并单元格等等情况，直接在函数中进行控制显得凌乱而且控制功能可能不齐全，所以这里可以使用R2021b新增的wordDocumentImportOptions导入对象十分方便地控制readtable函数读取word文档中的表格数据。
这个对象有5个变量属性，6个位置属性，6个替代规则，可以很方便的控制导入哪个表格，支持多种查找指定表格的方法，如何处理合并列、行的单元格，如何处理缺失值等等。

参见：[Microsoft Word 文档文件的导入选项对象](https://ww2.mathworks.cn/help/releases/R2023b/matlab/ref/matlab.io.word.worddocumentimportoptions.html)

下面是一个简单的例子：
``` MATLAB
opts = wordDocumentImportOptions( ...
    'NumVariables',5, ...  % 变量的数目
    'TableSelector',"//w:tbl[contains(.,'躯体化')]", ... % XPath表达式，指定要读取的表格此处为指定含有“躯体化”的表格
    'VariableNamesRow',0, ... % 0为不导入变量名称
    'MergedCellColumnRule','duplicate'); % 处理合并列单元格，此处为在所有单元格中复制数据
    val=readtable(path,opts);
```

## 提一句

本学期开设了一门专业选修课：MATLAB数学建模，课本里面和老师在表格读取这块还是用的xlsread函数，但这个函数已经被MathWorks标记为：“**不推荐**”了：
>R2019a: 不推荐使用 xlsread。
不推荐使用 xlsread。请改用 [readtable](https://ww2.mathworks.cn/help/releases/R2023b/matlab/ref/readtable.html)、[readmatrix](https://ww2.mathworks.cn/help/releases/R2023b/matlab/ref/readmatrix.html) 或 [readcell](https://ww2.mathworks.cn/help/releases/R2023b/matlab/ref/readcell.html)。目前没有删除 xlsread 的计划。
从 R2019a 开始，请分别使用 [readtable](https://ww2.mathworks.cn/help/releases/R2023b/matlab/ref/readtable.html)、[readmatrix](https://ww2.mathworks.cn/help/releases/R2023b/matlab/ref/readmatrix.html) 或 [readcell](https://ww2.mathworks.cn/help/releases/R2023b/matlab/ref/readcell.html) 将电子表格数据作为表、矩阵或元胞数组导入。与 xlsread 函数相比，readtable、readmatrix 和 readcell 函数>具有以下优势：
>* 更好的跨平台支持和性能
>* 自动检测数据格式和类型
>* 能够使用导入选项来控制数据导入过程，包括错误和缺失数据的处理

[xlsread（不推荐）读取电子表格文件-兼容性注意事项](https://ww2.mathworks.cn/help/releases/R2023b/matlab/ref/xlsread.html?s_tid=doc_ta#mw_2b66895a-270a-4fe2-aeda-ee9d833839a2)

如果课本能使用较新的readtable、readmatrix 和 readcell函数的话，同学们想必也是可以接触到word文档导入的。
