---
sidebar_position: 1
slug: guide
id: guide
title: HTTP 协议概述
authors: [yuanyp8]
tags: [HTTP, protocol, guide]
---
import { Highlight } from "@site/src/components/MyMDX"
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<img className="Badges" src="https://img.shields.io/badge/author-yuanyp8-yellowgreen" />  
&nbsp;
 <img className="Badges" src="https://img.shields.io/badge/reference-mozilla-lightgrey"/><br/>  
&nbsp;

超文本传输协议 (Hypertext Transfer Protocol, HTTP) 是设计用于在 Web 上传输内容的协议。 **HTTP** 是一种简单协议，它利用可靠的传输控制协议 (Transmission Control Protocol, **TCP**) 服务来执行其内容传输功能。 因此，HTTP 是**高度可靠**的**内容传输**协议。 HTTP 是最常用的应用程序协议之一。 Web 上的所有操作都使用 HTTP 协议。

![A Web document is the composition of different resources](assets/fetching_a_page.png)

:::note
客户端和服务端通过交换各自的消息（与数据流正好相反）进行交互。由像浏览器这样的客户端发出的消息叫做 `requests`，被服务端响应的消息叫做 `responses`。
:::

## 基础架构

HTTP 是一个 client-server 协议：请求通过一个实体被发出，实体也就是用户代理。大多数情况下，这个用户代理都是指浏览器，当然它也可能是任何东西，比如一个爬取网页生成维护搜索引擎索引的机器爬虫。

每一个发送到服务器的请求，都会被服务器处理并返回一个消息，也就是*response*。在这个请求与响应之间，还有许许多多的被称为 [proxies](https://developer.mozilla.org/zh-CN/docs/Glossary/Proxy_server) 的实体，他们的作用与表现各不相同，比如有些是网关，还有些是[caches](https://developer.mozilla.org/zh-CN/docs/Glossary/Cache)等。

![img](assets/client-server-chain.png)

:::note
实际上，在一个浏览器和处理请求的服务器之间，还有路由器、调制解调器等许多计算机。由于 Web 的层次设计，那些在网络层和传输层的细节都被隐藏起来了。HTTP 位于最上层的应用层。虽然底层对于分析网络问题非常重要，但是大多都跟对 HTTP 的描述不相干。
:::

HTTP协议是基于基于客户端/服务器的体系结构的请求/响应协议，其中Web浏览器，机器人和搜索引擎等充当HTTP客户端，并且Web服务器充当服务器。

### 客户端：user-agent

`user-agent` 就是任何能够为用户发起行为的工具。这个角色通常都是由浏览器来扮演。一些例外情况，比如是工程师使用的程序，以及 Web 开发人员调试应用程序。

浏览器**总是**作为发起一个请求的实体，他永远不是服务器（虽然近几年已经出现一些机制能够模拟由服务器发起的请求消息了）。

要展现一个网页，浏览器首先发送一个请求来获取页面的 HTML 文档，再解析文档中的资源信息发送其他请求，获取可执行脚本或 CSS 样式来进行页面布局渲染，以及一些其它页面资源（如图片和视频等）。然后，浏览器将这些资源整合到一起，展现出一个完整的文档，也就是网页。浏览器执行的脚本可以在之后的阶段获取更多资源，并相应地更新网页。

一个网页就是一个超文本文档。也就是说，有一部分显示的文本可能是链接，启动它（通常是鼠标的点击）就可以获取一个新的网页，使得用户可以控制客户端进行网上冲浪。浏览器来负责发送 HTTP 请求，并进一步解析 HTTP 返回的消息，以向用户提供明确的响应。

### Web 服务端

在上述通信过程的另一端，是由 Web Server 来*服务*并提供客户端所请求的文档。Server 只是虚拟意义上代表一个机器：它可以是共享负载（负载均衡）的一组服务器组成的计算机集群，也可以是一种复杂的软件，通过向其他计算机（如缓存，数据库服务器，电子商务服务器 ...）发起请求来获取部分或全部资源。

Server 不一定是一台机器，但一个机器上可以装载的众多 Servers。在 HTTP/1.1 和`Host`头部中，它们甚至可以共享同一个 IP 地址。

### 代理（Proxies）

在浏览器和服务器之间，有许多计算机和其他设备转发了 HTTP 消息。由于 Web 栈层次结构的原因，它们大多都出现在传输层、网络层和物理层上，对于 HTTP 应用层而言就是透明的，虽然它们可能会对应用层性能有重要影响。还有一部分是表现在应用层上的，被称为**代理（Proxies）**。代理（Proxies）既可以表现得透明，又可以不透明。代理主要有如下几种作用：

-   缓存（可以是公开的也可以是私有的，像浏览器的缓存）
-   过滤（像反病毒扫描，家长控制...）
-   负载均衡（让多个服务器服务不同的请求）
-   认证（对不同资源进行权限管理）
-   日志记录（允许存储历史信息）

## HTTP 的基本性质

### HTTP 是简单的

虽然下一代 HTTP/2 协议将 HTTP 消息封装到了帧（frames）中，HTTP 大体上还是被设计得简单易读。HTTP 报文能够被人读懂，还允许简单测试，降低了门槛，对新人很友好。

### HTTP 是可扩展的

在 HTTP/1.0 中出现的 HTTP headers 让协议扩展变得非常容易。只要服务端和客户端就新 headers 达成语义一致，新功能就可以被轻松加入进来。

### HTTP 是无状态，有会话的

**HTTP 是无状态的**：在同一个连接中，两个执行成功的请求之间是没有关系的。这就带来了一个问题，用户没有办法在同一个网站中进行连续的交互，比如在一个电商网站里，用户把某个商品加入到购物车，切换一个页面后再次添加了商品，这两次添加商品的请求之间没有关联，浏览器无法知道用户最终选择了哪些商品。而使用 HTTP 的头部扩展，HTTP Cookies 就可以解决这个问题。把 Cookies 添加到头部中，创建一个会话让每次请求都能共享相同的上下文信息，达成相同的状态。

:::warning
HTTP 本质是无状态的，使用 Cookies 可以创建有状态的会话
:::

### HTTP 和连接

**一个连接是由传输层来控制的，这从根本上不属于 HTTP 的范围**。HTTP 并不需要其底层的传输层协议是面向连接的，只需要它是可靠的，或不丢失消息的（至少返回错误）。在互联网中，有两个最常用的传输层协议：**TCP 是可靠的，而 UDP 不是**。因此，HTTP 依赖于面向连接的 TCP 进行消息传递，但连接并不是必须的。

在客户端（通常指浏览器）与服务器能够交互（客户端发起请求，服务器返回响应）之前，必须在这两者间建立一个 TCP 链接，打开一个 TCP 连接需要多次往返交换消息（因此耗时）。HTTP/1.0 默认为每一对 HTTP 请求/响应都打开一个单独的 TCP 连接。当需要连续发起多个请求时，这种模式比多个请求共享同一个 TCP 链接更低效。

为了减轻这些缺陷，HTTP/1.1 引入了流水线（被证明难以实现）和持久连接的概念：底层的 TCP 连接可以通过`Connection`头部来被部分控制。

:::tip
HTTP/2 则发展得更远，通过在一个连接复用消息的方式来让这个连接始终保持为暖连接。
:::

为了更好的适合 HTTP，设计一种更好传输协议的进程一直在进行。Google 就研发了一种以 `UDP` 为基础，能提供更可靠更高效的传输协议[QUIC](https://en.wikipedia.org/wiki/QUIC)。

## HTTP 能控制什么

多年以来，HTTP 良好的扩展性使得越来越多的 Web 功能归其控制。*缓存*和*认证*很早就可以由 HTTP 来控制了。另一方面，对同源同域的限制到 2010 年才有所改变。

以下是可以被 HTTP 控制的常见特性。

-   **缓存**
    文档如何缓存能通过 HTTP 来控制。服务端能告诉代理和客户端哪些文档需要被缓存，缓存多久，而客户端也能够命令中间的缓存代理来忽略存储的文档。
    
-   ***开放同源限制***
    为了防止网络窥听和其它隐私泄漏，浏览器强制对 Web 网站做了分割限制。只有来自于**相同来源**的网页才能够获取网站的全部信息。这样的限制有时反而成了负担，HTTP 可以通过修改头部来开放这样的限制，因此 Web 文档可以是由不同域下的信息拼接成的（某些情况下，这样做还有安全因素考虑）。
    
-   ***认证***
    一些页面能够被保护起来，仅让特定的用户进行访问。基本的认证功能可以直接通过 HTTP 提供，使用`Authenticate`相似的头部即可，或用 HTTP Cookies 来设置指定的会话。
    
-   ***代理和隧道***
    通常情况下，服务器和/或客户端是处于内网的，对外网隐藏真实 IP 地址。因此 HTTP 请求就要通过代理越过这个网络屏障。
    
    :::caution
    但并非所有的代理都是 HTTP 代理。例如，SOCKS 协议的代理就运作在更底层，一些像 FTP 这样的协议也能够被它们处理。
    :::
    
-   ***会话***
    使用 HTTP Cookies 允许你用一个服务端的状态发起请求，这就创建了会话。虽然基本的 HTTP 是无状态协议。这很有用，不仅是因为这能应用到像购物车这样的电商业务上，更是因为这使得任何网站都能轻松为用户定制展示内容了。

## HTTP 流

当客户端想要和服务端进行信息交互时（服务端是指最终服务器，或者是一个中间代理），过程表现为下面几步：

1.  打开一个 TCP 连接：TCP 连接被用来发送一条或多条请求，以及接受响应消息。客户端可能打开一条新的连接，或重用一个已经存在的连接，或者也可能开几个新的 TCP 连接连向服务端。

2.  发送一个 HTTP 报文：HTTP 报文（在 HTTP/2 之前）是语义可读的。在 `HTTP/2` 中，这些简单的消息被封装在了帧中，这使得报文不能被直接读取，但是原理仍是相同的。

    ```html
    GET / HTTP/1.1
    Host: developer.mozilla.org
    Accept-Language: fr
    ```

3.  读取服务端返回的报文信息：

    ```html
    HTTP/1.1 200 OK
    Date: Sat, 09 Oct 2010 14:28:02 GMT
    Server: Apache
    Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
    ETag: "51142bc1-7449-479b075b2891b"
    Accept-Ranges: bytes
    Content-Length: 29769
    Content-Type: text/html
    
    <!DOCTYPE html... (here comes the 29769 bytes of the requested web page)
    ```

4.  关闭连接或者为后续请求重用连接。

当 HTTP 流水线启动时，后续请求都可以不用等待第一个请求的成功响应就被发送。然而 HTTP 流水线已被证明很难在现有的网络中实现，因为现有网络中有很多老旧的软件与现代版本的软件共存。因此，HTTP 流水线已被在有多请求下表现得更稳健的 HTTP/2 的帧所取代。

## HTTP 报文

HTTP/1.1 以及更早的 HTTP 协议报文都是语义可读的。在 HTTP/2 中，这些报文被嵌入到了一个新的二进制结构，<Highlight color="#25c2a0">帧</Highlight>。帧允许实现很多优化，比如报文头部的压缩和复用。即使只有原始 HTTP 报文的一部分以 HTTP/2 发送出来，每条报文的语义依旧不变，客户端会重组原始 HTTP/1.1 请求。因此用 HTTP/1.1 格式来理解 HTTP/2 报文仍旧有效。

有两种 HTTP 报文的类型，*请求*与*响应*，每种都有其特定的格式。

### 请求

HTTP 请求的一个例子：

![A basic HTTP request](assets/http_request.png)

请求由以下元素组成：

-   一个 HTTP 的method，经常是由一个动词像`GET`, `POST`或者一个名词像`OPTIONS`，`HEAD`来定义客户端的动作行为。通常客户端的操作都是获取资源（GET 方法）或者发送HTML form表单（POST 方法），虽然在一些情况下也会有其他操作
-   要获取的资源的路径，通常是上下文中就很明显的元素资源的 URL，它没有protocol（`http://`），domain（`developer.mozilla.org`），或是 TCP 的port (en-US)（HTTP 一般在 80 端口）。
-   HTTP 协议版本号
-   为服务端表达其他信息的可选头部headers
-   对于一些像 POST 这样的方法，报文的 body 就包含了发送的资源，这与响应报文的 body 类似。

### 响应

HTTP 响应的一个例子：

![img](assets/http_response.png)

响应报文包含了下面的元素：

-   HTTP 协议版本号。
-   一个状态码（status code），来告知对应请求执行成功或失败，以及失败的原因。
-   一个状态信息，这个信息是非权威的状态码描述信息，可以由服务端自行设定。
-   HTTP headers，与请求头部类似。
-   可选项，比起请求报文，响应报文中更常见地包含获取的资源 body。

## 基于 HTTP 的 APIs


基于 HTTP 的最常用 API `XMLHttpRequest`API，可用于在user agent和服务器之间交换数据。 现代`Fetch API`提供相同的功能，具有更强大和灵活的功能集。

另一种 API，即服务器发送的事件，是一种单向服务，允许服务器使用 HTTP 作为传输机制向客户端发送事件。 使`EventSource`接口，客户端打开连接并建立事件句柄。 客户端浏览器自动将到达 HTTP 流的消息转换为适当的`Event`对象，并将它们传递给专门处理这类`type`事件的句柄，如果有这么个句柄的话。但如果相应的事件处理句柄根本没有建立，那就交给`onmessage` (en-US)事件处理程序处理。

## 总结

HTTP 是一种简单可扩展的协议，其 Client-Server 的结构以及轻松扩展头部信息的能力使得 HTTP 可以和 Web 共同发展。

即使 HTTP/2 为了提高性能将 HTTP 报文嵌入到帧中这一举措增加了复杂度，但是从 Web 应用的角度看，报文的基本结构没有变化，从 HTTP/1.0 发布起就是这样的结构。会话流依旧简单，通过一个简单的 [HTTP message monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)就可以查看和纠错。