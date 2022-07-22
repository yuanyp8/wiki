---
sidebar_position: 15
slug: conditional_requests
id: conditional_requests
title: HTTP 条件请求
authors: [yuanyp8]
tags: [HTTP, protocol, 条件请求, conditional_requests]
---

import { Highlight } from "@site/src/components/MyMDX"
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<img className="Badges" src="https://img.shields.io/badge/author-yuanyp8-yellowgreen" />  
&nbsp;
 <img className="Badges" src="https://img.shields.io/badge/reference-mozilla-lightgrey"/><br/>  
&nbsp;
<br />





在 HTTP 协议中有一个“**条件式请求**”的概念，在这类请求中，请求的结果，甚至请求成功的状态，都会随着验证器与受影响资源的比较结果的变化而变化。这类请求可以用来验证缓存的有效性，省去不必要的控制手段，以及验证文件的完整性，例如在断点续传的场景下或者在上传或者修改服务器端的文件的时候避免更新丢失问题。

## 基本原理

在 HTTP 协议中，条件请求指的是请求的执行结果会因特定首部的值不同而不同。这些首部规定了请求的前置条件，请求结果则视条件匹配与否而有所不同。

请求引发的不同的反应取决于请求所使用的方法，以及组成前置条件首部集合：

-   对于安全（[safe](https://developer.mozilla.org/zh-CN/docs/Glossary/Safe)）方法来说，例如 [`GET`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET)，通常用来获取文件，条件请求可以被用来限定仅在满足条件的情况下返回文件。这样可以节省带宽。
-   对于非安全（[unsafe](https://developer.mozilla.org/zh-CN/docs/Glossary/Safe)）方法来说，例如 [`PUT`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/PUT) 方法，通常用来上传文件，条件请求可以被用来限定仅在满足文件的初始版本与服务器上的版本相同的条件下才会将其上传。

## 验证器

所有的条件请求首部都是试图去检测服务器上存储的资源是否与某一特定版本相匹配。为了达到这个目的，条件请求需要指明资源的版本。由于逐个字节去比较完整资源是不切实际的，况且这也并非总是想要的结果，所以在请求中会传递一个描述资源版本的值。这些值称为“验证器”，并且分为两大类：

-   文件的最后修改时间，即 *last-modified* （最后修改）时间。
-   一个意义模糊的字符串，指代一个独一无二的版本，称为“实体标签”，或者 *etag 。*

比较同一份资源的不同版本有一定的技巧性：取决于上下文环境的不同，有两种不同的等值检查（*equality checks*）类型：

-   强验证类型（*Strong validation*）应用于需要逐个字节相对应的情况，例如需要进行断点续传的时候。
-   弱验证类型（*Weak validation*）应用于用户代理只需要确认资源内容相同即可。即便是有细微差别也可以接受，比如显示的广告不同，或者是页脚的时间不同。

验证类型与验证器的类型是相互独立的。 [`Last-Modified`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Last-Modified) 和 [`ETag`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ETag) 首部均可应用于两种验证类型，尽管在服务器端实现的复杂程度可能会有所不同。HTTP 协议默认使用强验证类型，可以指定何时使用弱验证类型。

### 强验证类型

强验证类型的作用在于确保要比较的资源与其相比较的对象之间每一个字节都相同。对于有些首部来说需要明确指定该验证类型，而对于另外一些来说则是默认值就是强验证类型。强验证类型的要求相当严格，在服务器层面来说可能较难保证。但是它确保了数据在任何时候都没有缺损，有时候则需要以牺牲性能为代价。

使用 [`Last-Modified`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Last-Modified) 首部很难为强验证类型提供一个唯一标识。通常这是由 [`ETag`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ETag) 首部来完成的，该首部可以提供使用 MD5 算法获取的资源（或其衍生品）的散列值。

### 弱验证类型

弱验证类型与强验证类型不同，因为它会把内容相同的两份文件看做是一样的。例如，使用弱验证类型，一个页面与另外一个页面只是在页脚显示的时间上有所不同，或者是展示的广告不相同，那么就会被认为是**相同的**。但是在使用强验证的情况下，二者是**不同的**。构建应用于弱验证类型的标签（etag）体系可能会比较复杂，因为这会涉及到对页面上不同的元素的重要性进行排序，但是会对缓存性能优化相当有帮助。

## 条件首部

一些被称为条件首部的 HTTP 首部，可以引发条件请求。它们是：

-   [`If-Match`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Match)

    如果远端资源的实体标签与在 [`ETag`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ETag) 这个首部中列出的值相同的话，表示条件匹配成功。默认地，除非实体标签带有 'W/' 前缀，否者它将会执行强验证。

-   [`If-None-Match`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-None-Match)

    如果远端资源的实体标签与在 [`ETag`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ETag) 这个首部中列出的值都不相同的话，表示条件匹配成功。默认地，除非实体标签带有 'W/' 前缀，否者它将会执行强验证。

-   [`If-Modified-Since`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Modified-Since)

    如果远端资源的 [`Last-Modified`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Last-Modified) 首部标识的日期比在该首部中列出的值要更晚，表示条件匹配成功。

-   [`If-Unmodified-Since`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Unmodified-Since)

    如果远端资源的 HTTPHeader("Last-Modified")}} 首部标识的日期比在该首部中列出的值要更早或相同，表示条件匹配成功。

-   [`If-Range`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Range)

    与 [`If-Match`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Match) 或 [`If-Unmodified-Since`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Unmodified-Since) 相似，但是只能含有一个实体标签或者日期值。如果匹配失败，则条件请求宣告失败，此时将不会返回 [`206`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/206) `Partial Content` 响应码，而是返回 [`200`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/200) `OK` 响应码，以及完整的资源。

## 应用场景

### 缓存更新

条件式请求最常见的应用场景是更新缓存。假如缓存为空，或者是没有缓存的话，被请求资源会以状态码 [`200`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/200) `OK `返回。

![The request issued when the cache is empty triggers the resource to be downloaded, with both validator value sent as headers. The cache is then filled.](assets/cache1.png)

验证器会同资源一起返回，它们出现在首部字段中。在这个例子中， [`Last-Modified`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Last-Modified) 与 [`ETag`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ETag) 都被返回，不过如果只返回其中的一个也是可以的。这些验证器会同资源一起被缓存起来（与所有的首部一样），并在在缓存失效的时候用来发起条件式请求。

只要缓存未失效，就不会发起任何请求。但是一旦失效——主要是由 [`Cache-Control`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control) 首部控制——客户端就不会采用缓存值而是发起条件式请求。验证器的值会用作 [`If-Modified-Since`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Modified-Since) 和 [`If-Match`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Match) 首部字段的参数。

假如资源未发生变化，服务器就返回状态码为 [`304`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/304) `Not Modified` 的响应。这样相当于对缓存资源进行了刷新，而客户端则采用被缓存的资源。尽管这里有一次请求/响应往返会消耗一定的资源，但是这样做比将整个资源通过网络再传输一遍更高效。

![With a stale cache, the conditional request is sent. The server can determine if the resource changed, and, as in this case, decide not to send it again as it is the same.](assets/httpcache2.png)

假如资源发生了变化，服务器就直接返回 [`200`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/200)` OK` 响应码，连同新版本的资源，就像是没有应用条件式请求一样；客户端则采用新版本资源（并将其缓存起来）。

![In the case where the resource was changed, it is sent back as if the request wasn't conditional.](assets/httpcache3.png)

除了需要在服务器端对验证器进行设置以外，该机制是透明的：所有的浏览器都会对缓存资源进行管理，在不需要 Web 开发者进行任何特殊处理的情况下发送条件式请求。

### 增量下载的完整性

文件的增量下载是 HTTP 协议规定的一项功能，它允许恢复先前的操作，通过保存先前已经获得的信息来节省带宽和时间：

![A download has been stopped and only partial content has been retrieved.](assets/httpresume1.png)

支持增量下载的服务器会通过 [`Accept-Ranges`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Ranges) 首部来广播这项能力。此后客户端就可以通过发送 [Ranges (en-US)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range) 首部字段以及缺失的范围值来进行断点续传了：

![The client resumes the requests by indicating the range he needs and preconditions checking the validators of the partially obtained request.](assets/httpresume2.png)

基本原理很简单，但是这里有一个潜在的问题：如果要下载的资源在两次下载之间进行了修改，得到的数据范围就会对应该资源的两个不同的版本，那么最终获得的文件是损坏的。

为了防止这种情况的发生，需要使用条件式请求。对于范围请求来说，有两种方法可以实现这个目的。更灵活一些的方法是使用 [`If-Modified-Since`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Modified-Since) 和 [`If-Match`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Match) 首部，假如前置条件失败，服务器端会返回错误提示，然后客户端可以从头开始重新下载资源：

![When the partially downloaded resource has been modified, the preconditions will fail and the resource will have to be downloaded again completely.](assets/httpresume3.png)

尽管这种方法行得通，但是它在文件发生变化的情况下增加了一次额外的请求/响应往返。这一点会影响性能。为此 HTTP 协议规定了一个特定的首部—— [`If-Range`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Range) ——来避免这种情况的发生：

![The If-Range headers allows the server to directly send back the complete resource if it has been modified, no need to send a 412 error and wait for the client to re-initiate the download.](assets/httpresume4.png)

该方法更高效，但是缺乏一定的灵活性，因为条件值只能是实体标签。不过这种额外的灵活性很少会需要。

### 使用乐观锁避免更新丢失问题

对于 Web 应用的一项常见操作是远程更新文件。这在各种类型的文件系统以及版本控制软件中都很常见，但是任何允许远程存储资源的软件也都需要这样一个乐观锁机制。常见的 Web 站点，例如 wiki 系统或其他类型的内容管理系统（CMS），都存在这样的需求。

使用 [`PUT`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/PUT) 方法可以实现上述机制。客户端首先读取原始文件，然后进行修改，最后将它们推送到服务器上：

![Updating a file with a PUT is very simple when concurrency is not involved.](assets/httplock1.png)

不幸的是，当把并发情况考虑在内的时候，事情变得有些不那么确定。当一个客户端在本地修改它新获得的资源副本的时候，另外一个客户端同样可以获取一份资源副本并进行同样的操作。接下来要发生的事情就不那么顺利了：当二者提交回服务器的时候，前一个客户端作出的修改会被第二个客户端的推送所覆盖，因为第二个客户端对于第一个客户端做出的修改一无所知。最终的结果则取决于获胜的一方，但是该结果不会通知给另一方。哪一个客户端作出的修改将会被保存下来，会由于它们提交的速度而有所不同；提交的速度则依赖于客户端及服务器端的性能，甚至是使用客户端进行编辑的人的表现。每一次的胜出者都会有所不同。这种情况被称作竞态条件（race condition ），会导致难以捉摸的情况的发生，并且难以探测和除错：

![When several clients update the same resource in parallel, we are facing a race condition: the slowest win, and the others don't even know they lost. Problematic!](assets/httplock2.png)

不存在解决这一问题而不打扰双方某一方的办法。然而，更新丢失问题以及竞态条件是需要避免的。我们希望获得可预测的结果，并且希望在更新操作被拒绝的时候客户端可以得到反馈。

条件式请求可以被用在**乐观锁算法**（大多数 wiki 系统和版本管理系统采用的是该算法）的实现上。其思路是，允许所有的客户端获得资源的副本，然后在本地进行编辑，通过只允许第一个客户端成功提交的方式来控制并发操作。其余的基于现今已过期版本的更新操作都会被拒绝：

![Conditional requests allow to implement optimistic locking: now the quickest wins, and the others get an error.](assets/httplock3.png)

这种方式的实现需要用到 [`If-Match`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Match) 或 [`If-Unmodified-Since`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Unmodified-Since) 首部。假如实体标签与源头文件的实体标签不一致，或者源头文件在被获取副本之后经过了修改，那么此次变更请求就会被拒绝，收到 [`412`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/412) `Precondition Failed` 的错误提示。之后就需要依靠客户端来处理该错误了：或者通知用户重新开始（基于最新的版本），或者是给用户展示两个版本之间的**差异**，辅助他们决定要保留哪些变更。

### 处理资源的首次上传问题

资源的首次上传问题是前面所描述的情况的一个极端情况。与任何资源更新问题一样，当两个客户端在大致相同的时间进行上传操作的时候，就会遇到竞态条件。为了防止这种情况的发生，可以使用条件式请求：添加 [`If-None-Match`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-None-Match) 首部，并将其值设置为`'*'`, 表示任意实体标签。当且仅当资源先前并不存在的情况下请求的操作才会成功执行：

![Like for a regular upload, the first upload of a resource is subject to a race condition: If-None-Match can prevent it.](assets/httpfirst.png)

`If-None-Match` 首部只可应用于兼容 HTTP/1.1（及后续版本）的服务器。假如不确定所访问的服务器是否兼容，需要首先向要访问的资源发送一次 [`HEAD`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/HEAD) 请求来进行确认。

## 结语

条件式请求是 HTTP 协议中一项非常重要的特性，它使高效复杂的应用系统的构建得以实现。对于缓存或断点续传功能来说，站点管理员只需要正确配置服务器就可以了；在某些环境中设置正确的实体标签可能需要一些技巧。但一旦设置成功，浏览器就能够按照预期地发送条件式请求。

而对于锁机制，则恰恰相反：Web 开发者需要使用合适的消息首部生成请求，另一方面，站点管理员在大多时候可以依赖应用来检查这些首部信息。

显然在两种情况下，条件式请求都发挥着基础性作用，成为 Web 应用的有力支撑。