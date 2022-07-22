---
sidebar_position: 14
slug: compression
id: compression
title: HTTP 协议中的数据压缩
authors: [yuanyp8]
tags: [HTTP, protocol, 压缩, compression]
---

import { Highlight } from "@site/src/components/MyMDX"
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<img className="Badges" src="https://img.shields.io/badge/author-yuanyp8-yellowgreen" />  
&nbsp;
 <img className="Badges" src="https://img.shields.io/badge/reference-mozilla-lightgrey"/><br/>  
&nbsp;
<br />

**数据压缩**是提高 Web 站点性能的一种重要手段。对于有些文件来说，高达 70% 的压缩比率可以大大减低对于带宽的需求。随着时间的推移，压缩算法的效率也越来越高，同时也有新的压缩算法被发明出来，应用在客户端与服务器端。

在实际应用时，web 开发者不需要亲手实现压缩机制，浏览器及服务器都已经将其实现了，不过他们需要确保在服务器端进行了合理的配置。数据压缩会在三个不同的层面发挥作用：

-   首先某些格式的文件会采用特定的优化算法进行压缩，
-   其次在 HTTP 协议层面会进行通用数据加密，即数据资源会以压缩的形式进行端到端传输，
-   最后数据压缩还会发生在网络连接层面，即发生在 HTTP 连接的两个节点之间。

## 文件格式压缩

每一种文件类型都会存有冗余，也就是浪费的空间。如果一个典型的文本文件存在 60% 的冗余的话，那么对于其他类型的文件例如音频或视频文件来说，这个比率会更高。不同于文本文件，这些其他类型的媒体文件占据的空间也更大，所以很早就出现了回收这些浪费的空间的需求。工程师们设计了可以应用于特定用途的文件类型的经过优化的算法。用于文件的压缩算法可以大致分为两类：

-   无损压缩算法。在压缩与解压缩的过程中，不会对要恢复的数据进行修改。复原后的数据与原始数据是一致的（比特与比特之间一一对应）。
    对于图片文件来说，gif 或者 png 格式的文件就是采用了无损压缩算法。.
-   有损压缩算法。在压缩与解压缩的过程中，会对原始数据进行修改，但是会以用户无法觉察的方式进行。
    网络上的视频文件通常采用有损压缩算法，图片是`jpeg`。

一些特定的文件格式既可以采用无损压缩算法，又可以采用有损压缩算法，例如 `webp` ，并且有损压缩算法可以对压缩比率进行配置，当然这会导致压缩品质的不同。为了使一个站点获得更好的性能，理想情况是在保持可以接受的品质水准的前提下，压缩比率尽可能得高。对于图片来说，通过压缩工具生成的图片对于 Web 应用来说，优化程度可能依然不够高。一般建议选用在保持所要求的品质的前提下压缩比率尽可能高的工具。这里有[各种各样的工具](http://www.creativebloq.com/design/image-compression-tools-1132865)专门用来干这个。

有损压缩通常会比无损压缩效率更高一些。

:::info

由于数据压缩技术在一些特定类型的文件上效果很好，再次进行压缩通常没有什么效果。事实上，这种做法常常会适得其反，因为间接开销（算法通常需要使用字典，而字典的大小是会计入初始大小的）会比在压缩过程中获取的额外收益要高，从而会使文件的体积增加。不要对文件类型为压缩格式的文件应用如下两种压缩技术。

:::

## 端到端压缩技术

对于各种压缩手段来说，端到端压缩技术是 Web 站点性能提升最大的部分之所在。端到端压缩技术指的是消息体压缩是在服务器端完成的，并且在传输过程中保持不变，直到抵达客户端。不管途中遇到什么样的中间节点，它们都会使消息体保持原样。

![img](assets/httpenco1.png)

所有的现代浏览器及服务器都支持该技术，唯一需要协商的是所采用的压缩算法。这些压缩算法是为文本内容进行过优化的。在 20 世纪，压缩技术快速发展，为数众多的算法相继出现，扩大了可选的范围。如今只有两种算法有着举足轻重的地位：gzip 应用最广泛，br 则是新的挑战者。

为了选择要采用的压缩算法，浏览器和服务器之间会使用[主动协商机制](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation)。浏览器发送 [`Accept-Encoding`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Encoding) 首部，其中包含有它所支持的压缩算法，以及各自的优先级，服务器则从中选择一种，使用该算法对响应的消息主体进行压缩，并且发送 [`Content-Encoding`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Encoding) 首部来告知浏览器它选择了哪一种算法。由于该内容协商过程是基于编码类型来选择资源的展现形式的，在响应中， [`Vary`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Vary) 首部中至少要包含 [`Accept-Encoding`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Encoding) ；这样的话，缓存服务器就可以对资源的不同展现形式进行缓存。

![img](assets/httpcompression1.png)

由于压缩技术可以带来很大的性能提升，建议对除了已经经过压缩的文件如图片、音频和视频文件之外的其他类型的文件均进行应用。

Apache 服务器支持数据压缩，有 [mod_deflate](https://httpd.apache.org/docs/current/mod/mod_deflate.html)可供使用；nginx 中有[ngx_http_gzip_module](http://nginx.org/en/docs/http/ngx_http_gzip_module.html) 模块；在 IIS 中则可以使用 `<httpCompression>` 元素。

## 逐跳压缩技术

逐跳压缩技术尽管与端到端压缩技术有些类似，但是它们在一点上有着本质的区别，即这里的压缩指的不是对源头服务器上的资源的压缩，以此来创建一份特定的展现形式然后进行传输，而是对客户端与服务器端之间的任意两个节点之间传递的消息的主体的压缩。在两个相邻的中间节点之间的连接上，可能会应用不同的压缩方式。

![img](assets/httpte1.png)

为了实现这个目的，HTTP 协议中采用了与端到端压缩技术所使用的内容协商机制相类似的机制：节点发送请求，使用 [`TE`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/TE) 首部来宣布它的意愿，另外一个节点则从中选择合适的方法，进行应用，然后在 [`Transfer-Encoding`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Transfer-Encoding) 首部中指出它所选择的方法。

![img](assets/httpcomp2.png)

在实际应用中，逐跳压缩对于服务器和客户端来说是不可见的，并且很少使用。[`TE`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/TE) 首部和 [`Transfer-Encoding`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Transfer-Encoding) 首部最常用来发送分块响应，允许在获得资源的确切长度之前就可以开始传输。

:::warning

在单次转发层面使用 [`Transfer-Encoding`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Transfer-Encoding) 首部和压缩技术是如此地少见，以至于 Apache、nginx 或 IIS 等服务器都不太容易配置。此类配置通常用在代理服务器层面。

:::