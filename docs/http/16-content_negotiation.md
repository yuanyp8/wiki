---
sidebar_position: 16
slug: content_negotiation
id: content_negotiation
title: 内容协商
authors: [yuanyp8]
tags: [HTTP, protocol, 内容协商, content_negotiation]
---

import { Highlight } from "@site/src/components/MyMDX"
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<img className="Badges" src="https://img.shields.io/badge/author-yuanyp8-yellowgreen" />  
&nbsp;
 <img className="Badges" src="https://img.shields.io/badge/reference-mozilla-lightgrey"/><br/>  
&nbsp;
<br />

HTTP 协议中，内容协商是这样一种机制，通过为同一 URI 指向的资源提供不同的展现形式，可以使用户代理选择与用户需求相适应的最佳匹配（例如，文档使用的自然语言，图片的格式，或者内容编码形式）。

::warning 注意
HTTP 内容协商的一些不好的地方在这篇文章中有介绍[a wiki page from WHATWG](https://wiki.whatwg.org/wiki/Why_not_conneg)，HTML5 提供其他的选择来进行内容协商，如[`source` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source)。
:::

## 内容协商的基本原则

一份特定的文件称为一项资源。当客户端获取资源的时候，会使用其对应的 URL 发送请求。服务器通过这个 URL 来选择它指向的资源的某一变体——每一个变体称为一种展现形式——然后将这个选定的展现形式返回给客户端。整个资源，连同它的各种展现形式，共享一个特定的 URL 。当一项资源被访问的时候，特定展现形式的选取是通过内容协商机制来决定的，并且客户端和服务器端之间存在多种协商方式。

![img](assets/httpnego.png)

最佳展现形式的选取可以通过两种机制实现：

-   客户端设置特定的 [HTTP 首部](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) （又称为服务端驱动型内容协商机制或者主动协商机制）；这是进行内容协商的标准方式；
-   服务器返回 [`300`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/300) (Multiple Choices) 或者 [`406`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/406) (Not Acceptable) [HTTP 状态码](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) （又称为代理驱动型协商机制或者响应式协商机制）；这种方式一般用作备选方案。

随着时间的推移，也有其他一些内容协商的提案被提出来，比如透明内容协商以及 Alternates 首部。但是它们都没有获得人们的认可从而被遗弃。

## 服务端驱动型内容协商机制

在服务端驱动型协商机制或者主动协商机制中，浏览器（或者其他任何类型的用户代理）会随同 URL 发送一系列的消息头。这些消息头描述了用户倾向的选择。服务器则以此为线索，通过内部算法来选择最佳方案提供给客户端。相关算法与具体的服务器相关，并没有在规范中进行规定。例如这里有一份 [Apache 2.2 服务器的内容协商算法](https://httpd.apache.org/docs/2.2/en/content-negotiation.html#algorithm)。

![img](assets/httpnegoserver.png)

HTTP/1.1 规范指定了一系列的标准消息头用于启动服务端驱动型内容协商 （[`Accept`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept)、[`Accept-Charset`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Charset)、 [`Accept-Encoding`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Encoding)、[`Accept-Language`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Language)）。尽管严格来说 [`User-Agent`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent) 并不在此列，有时候它还是会被用来确定给客户端发送的所请求资源的特定展现形式，不过这种做法不提倡使用。服务器会使用 [`Vary`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Vary) 消息头来说明实际上哪些消息头被用作内容协商的参考依据（确切来说是与之相关的响应消息头），这样可以使[缓存](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)的运作更有效。

除此之外，有一个建议向可供选择的列表中增加更多的消息头的实验性提案，称为“客户端示意”（client hints）。客户端示意机制可以告知运行用户代理的设备类型（例如，是桌面计算机还是移动设备）。

即便服务端驱动型内容协商机制是最常用的对资源特定展现形式进行协商的方式，它存在如下几个缺点：

-   服务器对浏览器并非全知全能。即便是有了客户端示意扩展，也依然无法获取关于浏览器能力的全部信息。与客户端进行选择的代理驱动型内容协商机制不同，服务器端的选择总是显得有点武断。
-   客户端提供的信息相当冗长（HTTP/2 协议的首部压缩机制缓解了这个问题），并且存在隐私风险（HTTP 指纹识别技术）。
-   因为给定的资源需要返回不同的展现形式，共享缓存的效率会降低，而服务器端的实现会越来越复杂。

### `Accept` 首部

[`Accept`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept) 首部列举了用户代理希望接收的媒体资源的 MIME 类型。其中不同的 MIME 类型之间用逗号分隔，同时每一种 MIME 类型会配有一个品质因数（quality factor），该参数明确了不同 MIME 类型之间的相对优先级。

[`Accept`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept) 首部的值由浏览器或其他类型的用户代理确定，并且会由于上下文环境的不同而不同，比如在获取 HTML 页面、图片文件、视频文件或者是脚本文件的时候，无论是通过在地址栏中输入资源地址来获取还是通过 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img)、[``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video) 或 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio) 元素引用都是不一样的。浏览器可以自由使用它们认为最为合适的首部值；这里有一份[常见浏览器 Accept 首部默认值](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values)的完整列表。

### `Accept-CH` 首部Experimental

:::tip
这是被称为“客户端示意”（Client Hints）的**实验性**技术方案的一部分，目前仅在 Chrome 46 及以后的版本中得到了实现。
:::

该实验性首部 [`Accept-CH`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-CH) 列出了服务器可以用来选择合适响应的配置数据。合法值如下：

| Value            | Meaning                                                      |
| :--------------- | :----------------------------------------------------------- |
| `Device-Memory`  | 标明客户端设备的 RAM 内存大小。该值是个估计值，设备的实际内存值会向 2 的次方取整，且除以 1024。比如 512MB 的内存对应的值为 0.5。 |
| `DPR`            | 标明客户端所在设备的像素比率。                               |
| `Viewport-Width` | 标明用 CSS 像素数值表示的布局视口（layout viewport）宽度。   |
| `Width`          | 标明用物理像素值表示的资源宽度（换句话说就是一张图片的固有大小）。 |

### `Accept-Charset` 首部

[`Accept-Charset`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Charset)首部用于告知服务器该客户代理可以理解何种形式的字符编码。按照传统，不同地区用户使用的的浏览器会被赋予不同的值，比如说西欧地区用户使用的浏览器中，该首部的值可能会是 `ISO-8859-1,utf-8;q=0.7,*;q=0.7` 。

如今 UTF-8 编码已经得到了广泛的支持，成为首选的字符编码类型，[为了通过减少基于配置信息的信息熵来更好地保护隐私信息](https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy)， 大多数浏览器会将 Accept-Charset 首部移除：Internet Explorer 8、Safari 5、Opera 11 以及 Firefox 10 都已经不再发送该首部。

### `Accept-CH-Lifetime` 首部Experimental
:::tip
这是被称为“客户端示意”（Client Hints）的**实验性**技术方案的一部分，目前仅在 Chrome 61 及以后的版本中得到了实现。
:::

该实验性首部 [`Accept-CH-Lifetime`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-CH-Lifetime) 与 Accept-CH 首部中的 Device-Memory 值一同使用，标明设备应该与服务器共享指定大小的内存的时间。单位为毫秒。该首部为可选的。

### `Accept-Encoding` 首部

[`Accept-Encoding`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Encoding) 首部明确说明了（接收端）可以接受的内容编码形式（所支持的压缩算法）。该首部的值是一个 Q 因子清单（例如 br, gzip;q=0.8），用来提示不同编码类型值的优先级顺序。默认值 identity 则优先级最低（除非声明为其他优先级）。

将 HTTP 消息进行压缩是一种最重要的提升 Web 站点性能的方法。该方法会减小所要传输的数据量的大小，节省可用带宽。浏览器总是会发送该首部，服务器则应该配置为接受它，并且采用一定的压缩方案。

### `Accept-Language` 首部

[`Accept-Language`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Language) 首部用来提示用户期望获得的自然语言的优先顺序。该首部的值是一个 Q 因子清单（例如 "de, en;q=0.7"）。用户代理的图形界面上所采用的语言通常可以用来设置为默认值，但是大多数浏览器允许设置不同优先级的语言选项。

由于[基于配置信息的信息熵](https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy)的增加，修改后的值可以用作识别用户的指纹，所以不建议对其进行修改，不过这样的话 Web 站点也就不能依赖该值来揭示用户的真实期望。站点设计者不能过度热衷于通过这个首部来进行语言检测，因为它可能会导致糟糕的用户体验：

-   站点设计者应该总是提供一种方式来使用户能够覆盖由服务器端选择的语言，例如在页面上提供一个用于语言选择的按钮。大多数用户代理会为 Accept-Language 首部提供一个默认值，该值采用的是用户界面的显示的语言，通常终端用户不能对其进行修改，或者是不知道该怎么修改，或者是无法进行修改，例如在网络咖啡厅里的情形。
-   一旦用户覆盖了服务器端选择的语言选项，站点就不应该再使用语言检测技术，而应该忠于明确选择的语言选项。换句话说，只有站点的入口页面应该使用这个首部来选择合适的语言。

### `User-Agent` 首部
:::tip
尽管使用该首部来进行内容选择是合理的，但是依赖这个首部来确定用户代理都支持哪些功能特性通常[被认为是一个糟糕的做法](https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent)。
:::

[`User-Agent`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent) 首部可以用来识别发送请求的浏览器。该字符串中包含有用空格间隔的**产品标记符**及**注释**的清单。

**产品标记符**由产品名称、后面紧跟的 '/' 以及产品版本号构成，例如 Firefox/4.0.1 。用户代理可以随意添加多少产品标记符都可以。**注释**是一个用括号分隔的自由形式的字符串。显然括号本身不能用在该字符串中。规范没有规定注释的内部格式，不过一些浏览器会把一些标记符放置在里面，不同的标记符之间使用 `;`分隔。

### `Vary` 响应首部

与前面列举的 Accept-* 形式的由客户端发送的首部相反，[`Vary`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Vary) 首部是由服务器在响应中发送的。它标示了服务器在服务端驱动型内容协商阶段所使用的首部清单。这个首部是必要的，它可以用来通知缓存服务器决策的依据，这样它可以进行复现，使得缓存服务器在预防将错误内容提供给用户方面发挥作用。

特殊值 `*` 意味着在服务端驱动型内容协商过程中同时采纳了未在首部中传递的信息来选择合适的内容。

Vary 首部是在 HTTP 协议的 1.1 版本中新添加的，而为了使缓存服务器恰当地工作，这个首部是必要的。缓存服务器为了能够与服务端驱动型内容协商机制协同工作，需要知道服务器选择传送内容的决策依据。这样的话，缓存服务器就可以重复该算法，直接提供恰当的内容，而不需要向服务器发送更多的请求。显然，通配符 `*` 阻碍了缓存机制发挥作用，因为缓存服务器并不知道该通配符究竟指代哪些元素。

## 代理驱动型内容协商机制

服务端驱动型内容协商机制由于一些缺点而为人诟病——它在规模化方面存在问题。在协商机制中，每一个特性需要对应一个首部。如果想要使用屏幕大小、分辨率或者其他方面的特性，就需要创建一个新的首部。而且在每一次请求中都必须发送这些首部。在首部很少的时候，这并不是问题，但是随着数量的增多，消息体的体积会导致性能的下降。带有精确信息的首部发送的越多，信息熵就会越大，也就准许了更多 HTTP 指纹识别行为，以及与此相关的隐私问题的发生。

从 HTTP 协议制定之初，该协议就准许另外一种协商机制：代理驱动型内容协商机制，或称为响应式协商机制。在这种协商机制中，当面临不明确的请求时，服务器会返回一个页面，其中包含了可供选择的资源的链接。资源呈现给用户，由用户做出选择。

![img](assets/httpnego3.png)

不幸的是，HTTP 标准没有明确指定提供可选资源链接的页面的格式，这一点阻碍了将这一过程无痛自动化。除了退回至服务端驱动型内容协商机制外，这种自动化方法几乎无一例外都是通过脚本技术来完成的，尤其是 JavaScript 重定向技术：在检测了协商的条件之后，脚本会触发重定向动作。另外一个问题是，为了获得实际的资源，需要额外发送一次请求，减慢了将资源呈现给用户的速度。