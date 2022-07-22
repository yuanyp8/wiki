---
sidebar_position: 6
slug: protocol_upgrade
id: protocol_upgrade
title: HTTP协议升级机制
authors: [yuanyp8]
tags: [HTTP, protocol, protocol_upgrade]
---

import { Highlight } from "@site/src/components/MyMDX"
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<img className="Badges" src="https://img.shields.io/badge/author-yuanyp8-yellowgreen" />  
&nbsp;
 <img className="Badges" src="https://img.shields.io/badge/reference-mozilla-lightgrey"/><br/>  
&nbsp;
<br />

HTTP 协议 提供了一种特殊的机制，这一机制允许将一个已建立的连接升级成新的、不相容的协议。这篇指南涵盖了其工作原理和使用场景。

通常来说这一机制总是由客户端发起的（不过也有例外，比如说可以由服务端发起升级到传输层安全协议（TLS））， 服务端可以选择是否要升级到新协议。借助这一技术，连接可以以常用的协议启动（如 HTTP/1.1），随后再升级到 HTTP2 甚至是 WebSockets.

:::warning
HTTP/2 明确禁止使用此机制，这个机制只属于 HTTP/1.1
:::



## 升级 HTTP/1.1 的链接

协议升级请求总是由客户端发起的；暂时没有服务端请求协议更改的机制。当客户端试图升级到一个新的协议时，可以先发送一个普通的请求（`GET`，`POST`等），不过这个请求需要进行特殊配置以包含升级请求。

特别这个请求需要添加两项额外的 header：

-   `Connection: Upgrade`

    设置 `Connection` 头的值为 `"Upgrade"` 来指示这是一个升级请求。

-   `Upgrade: *protocols*`

    `Upgrade` 头指定一项或多项协议名，按优先级排序，以逗号分隔。

一个典型的包含升级请求的例子差不多是这样的：

```
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

根据之前的请求的协议，可能需要其他头部信息，例如：从 HTTP/1.1 升级到[WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) 允许配置有关 WebSocket 连接的头部详细信息，以及在连接时提供一定程度的安全性。

如果服务器决定升级这次连接，就会返回一个 `101 Switching Protocols`响应状态码，和一个要切换到的协议的头部字段 Upgrade。 如果服务器没有（或者不能）升级这次连接，它会忽略客户端发送的 `"Upgrade` 头部字段，返回一个常规的响应：例如一个`200 OK`).

服务在发送 `101` 状态码之后，就可以使用新的协议，并可以根据需要执行任何其他协议指定的握手。实际上，一旦这次升级完成了，连接就变成了双向管道。并且可以通过新协议完成启动升级的请求。

由 HTTP/1.1 请求建立的连接可以升级为 HTTP/2 协议的连接，但是反过来不可以。事实上 HTTP/2 已经不再支持 101 状态码了，也不再支持任何连接升级机制。

## 升级机制的常用场合

此处将介绍最常用到 `Upgrade` header 的场合。

### 升级到 WebSocket 协议的连接

至今为止最经常会需要升级一个 HTTP 连接的场合就是使用 WebSocket。当你用 [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) 以及其他大部分实现 WebSockets 的库去建立 WebSocket 连接时，基本上都不用操心升级的过程，因为这些 API 已经实现了这一步。比如，用如下 API 打开一个 WebSocket 连接：

```
webSocket = new WebSocket("ws://destination.server.ext", "optionalProtocol");
```

[`WebSocket()`](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/WebSocket) 构造函数已经自动完成了发送初始 HTTP/1.1 请求，处理握手及升级过程。

你也可以用 `"wss://"` 地址格式来打开安全的 WebSocket 连接。

如果想要自己重头实现 WebSocket 连接，就必须要处理握手和升级过程。在创建初始 HTTP/1.1 会话之后你需要发送另一个 HTTP 标准请求，但在 headers 中要带上Upgrade (en-US)and `Connection`，也就是：

```
Connection: Upgrade
Upgrade: websocket
```

