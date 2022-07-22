---
sidebar_position: 10
slug: www
id: www
title: www 或非 www URL
authors: [yuanyp8]
tags: [HTTP, protocol, www, domain]
---

import { Highlight } from "@site/src/components/MyMDX"
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<img className="Badges" src="https://img.shields.io/badge/author-yuanyp8-yellowgreen" />  
&nbsp;
 <img className="Badges" src="https://img.shields.io/badge/reference-mozilla-lightgrey"/><br/>  
&nbsp;
<br />

:::note
网站所有者经常会问的一个问题是选择非 www 的还是 www 的网址。本文提供了选择建议。
:::

## 什么是域名？

在一个 HTTP 网址中，在初始 `http://` 或 `https://` 后的第一个子字符串称为域。它是文档所在的服务器的名称。

一个服务器不一定是一个独立的物理机：几台服务器可以驻留在同一台物理机器上，或者一台服务器可以通过几台机器进行处理，协作处理并响应或负载均衡它们之间的请求。关键点在于语义上**一个域名代表一个单独的服务器**。

## 所以，我只能选择其中一个做为我的网站的网址？


<Tabs>
  <TabItem value="是的" label="是的" default>

是的，你必须选择其中之一，且一直使用。选择使用其中哪一个取决于你，当你选择完之后，就要保持下去。这样，无论是对用户，还是对搜索引擎，你的网站能保持更好的一致性。这包括始终链接到所选域名（如果你在网站中使用相对网址，则不应该很难），也可以始终将链接（通过电子邮件/社交网络等）共享使用同一个域名。

  </TabItem>
  <TabItem value="不" label="不"> 

不，你可以有两个。重要的是，你需是保持的那一个官方的域名，**这个官方域名被称为\*规范\*名称**。你所有的绝对链接应该使用它。但即便如此，你仍然可以有其他域名使用：HTTP 允许使用两种技术，以便它在使用规范域名的同时还允许非规范域名使用，使使用者或搜索引擎可以准确的访问到所预期的页面。

  </TabItem>

</Tabs>



**所以，选择其中一个作为你的域名的规范地址！下面有两种技术允许不规范的域名仍然起作用。**

## 规范网址方式
选择下面有两种不同的方式使网站规范。
### 使用 HTTP 301 重定向

在这种情况下，你需要配置服务器接收的 HTTP 请求（ 常见为 www 和非 www 网址相同）以及适当的 HTTP 响应 301 去响应所有非规范的域名请求。这会将尝试使访问非规范网址的浏览器重定向到其规范的等效网址。举例来说，如果您选择使用非 www 网址为规范类型，你的所有 www 网址都应该被重定向到对应的非 www 网址上。

例如：

- 服务器收到 `http://www.example.org/whaddup` 请求（当规范域名是 `example.org` 时）
- 服务器则以代码 `301` 与头 `Location ：http://example.org/whaddup`
- 该客户端发出的规范的域名请求：`http://example.org/whaddup`

### 使用 `<link rel="canonical">`

它可以将一个特殊的 HTML [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link) 元素添加到网页指示什么网页的标准地址，这对页面的访问者没有影响，但在搜索引擎检索时会告诉搜索引擎当页面实际的地址。通过这种方式，搜索引擎不需要索引同一页面多次，那样可能导致它被视为重复的内容或垃圾邮件，甚至从搜索引擎结果中删除或者降低你的页面显示排名。

当加入这样一个标签，会告诉搜索引擎，你提供相同内容的两个域名那一个是规范的。以前面的例子为例，http://www.example.org/whaddup 将提供与 http://example.org/whaddup 相同的内容，但有一个附加的 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link) 头部元素：

```
<link href="http://example.org/whaddup" rel="canonical">
```

不同于以往，浏览器历史记录将考虑非 www 和 www 的网址作为独立的条目。



## www 和非www都生效

有了这些技术，你可以配置服务器对 www 前缀和非 www 前缀的域名进行正确的响应，如果你无法预测用户会在浏览器地址栏使用哪个 URL，你需要做的就是选择一个作为你的规范地址，然后重定向另一个。