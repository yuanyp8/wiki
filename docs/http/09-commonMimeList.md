---
sidebar_position: 9
slug: mime_common_types
id: mime_common_types
title: 常见 MIME 类型列表
authors: [yuanyp8]
tags: [HTTP, protocol, mime]
---

import { Highlight } from "@site/src/components/MyMDX"
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<img className="Badges" src="https://img.shields.io/badge/author-yuanyp8-yellowgreen" />  
&nbsp;
 <img className="Badges" src="https://img.shields.io/badge/reference-mozilla-lightgrey"/><br/>  
&nbsp;
<br />

这是一份 MIME 类型列表，以及各个类型的文档类别，按照它们的常见扩展名排序。

两种主要的 MIME 类型在默认类型中扮演了重要的角色：

-   `text/plain` 表示文本文件的默认值。一个文本文件应当是人类可读的，并且不包含二进制数据。
-   `application/octet-stream` 表示所有其他情况的默认值。一种未知的文件类型应当使用此类型。浏览器在处理这些文件时会特别小心，试图防止、避免用户的危险行为。

IANA 是 MIME 媒体类型的官方注册机构，并维护了 [list of all the official MIME types](https://www.iana.org/assignments/media-types/media-types.xhtml)。下面的表格列出了 Web 上的一些重要 MIME 类型：

| 扩展名         | 文档类型                                                     | MIME 类型                                                    |
| :------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `.aac`         | AAC audio                                                    | `audio/aac`                                                  |
| `.abw`         | [AbiWord](https://en.wikipedia.org/wiki/AbiWord) document    | `application/x-abiword`                                      |
| `.arc`         | Archive document (multiple files embedded)                   | `application/x-freearc`                                      |
| `.avi`         | AVI: Audio Video Interleave                                  | `video/x-msvideo`                                            |
| `.azw`         | Amazon Kindle eBook format                                   | `application/vnd.amazon.ebook`                               |
| `.bin`         | Any kind of binary data                                      | `application/octet-stream`                                   |
| `.bmp`         | Windows OS/2 Bitmap Graphics                                 | `image/bmp`                                                  |
| `.bz`          | BZip archive                                                 | `application/x-bzip`                                         |
| `.bz2`         | BZip2 archive                                                | `application/x-bzip2`                                        |
| `.csh`         | C-Shell script                                               | `application/x-csh`                                          |
| `.css`         | Cascading Style Sheets (CSS)                                 | `text/css`                                                   |
| `.csv`         | Comma-separated values (CSV)                                 | `text/csv`                                                   |
| `.doc`         | Microsoft Word                                               | `application/msword`                                         |
| `.docx`        | Microsoft Word (OpenXML)                                     | `application/vnd.openxmlformats-officedocument.wordprocessingml.document` |
| `.eot`         | MS Embedded OpenType fonts                                   | `application/vnd.ms-fontobject`                              |
| `.epub`        | Electronic publication (EPUB)                                | `application/epub+zip`                                       |
| `.gif`         | Graphics Interchange Format (GIF)                            | `image/gif`                                                  |
| `.htm.html`    | HyperText Markup Language (HTML)                             | `text/html`                                                  |
| `.ico`         | Icon format                                                  | `image/vnd.microsoft.icon`                                   |
| `.ics`         | iCalendar format                                             | `text/calendar`                                              |
| `.jar`         | Java Archive (JAR)                                           | `application/java-archive`                                   |
| `.jpeg` `.jpg` | JPEG images                                                  | `image/jpeg`                                                 |
| `.js`          | JavaScript                                                   | `text/javascript`                                            |
| `.json`        | JSON format                                                  | `application/json`                                           |
| `.jsonld`      | JSON-LD format                                               | `application/ld+json`                                        |
| `.mid` `.midi` | Musical Instrument Digital Interface (MIDI)                  | `audio/midi` `audio/x-midi`                                  |
| `.mjs`         | JavaScript module                                            | `text/javascript`                                            |
| `.mp3`         | MP3 audio                                                    | `audio/mpeg`                                                 |
| `.mpeg`        | MPEG Video                                                   | `video/mpeg`                                                 |
| `.mpkg`        | Apple Installer Package                                      | `application/vnd.apple.installer+xml`                        |
| `.odp`         | OpenDocument presentation document                           | `application/vnd.oasis.opendocument.presentation`            |
| `.ods`         | OpenDocument spreadsheet document                            | `application/vnd.oasis.opendocument.spreadsheet`             |
| `.odt`         | OpenDocument text document                                   | `application/vnd.oasis.opendocument.text`                    |
| `.oga`         | OGG audio                                                    | `audio/ogg`                                                  |
| `.ogv`         | OGG video                                                    | `video/ogg`                                                  |
| `.ogx`         | OGG                                                          | `application/ogg`                                            |
| `.otf`         | OpenType font                                                | `font/otf`                                                   |
| `.png`         | Portable Network Graphics                                    | `image/png`                                                  |
| `.pdf`         | Adobe [Portable Document Format](https://acrobat.adobe.com/us/en/why-adobe/about-adobe-pdf.html) (PDF) | `application/pdf`                                            |
| `.ppt`         | Microsoft PowerPoint                                         | `application/vnd.ms-powerpoint`                              |
| `.pptx`        | Microsoft PowerPoint (OpenXML)                               | `application/vnd.openxmlformats-officedocument.presentationml.presentation` |
| `.rar`         | RAR archive                                                  | `application/x-rar-compressed`                               |
| `.rtf`         | Rich Text Format (RTF)                                       | `application/rtf`                                            |
| `.sh`          | Bourne shell script                                          | `application/x-sh`                                           |
| `.svg`         | Scalable Vector Graphics (SVG)                               | `image/svg+xml`                                              |
| `.swf`         | [Small web format](https://en.wikipedia.org/wiki/SWF) (SWF) or Adobe Flash document | `application/x-shockwave-flash`                              |
| `.tar`         | Tape Archive (TAR)                                           | `application/x-tar`                                          |
| `.tif.tiff`    | Tagged Image File Format (TIFF)                              | `image/tiff`                                                 |
| `.ttf`         | TrueType Font                                                | `font/ttf`                                                   |
| `.txt`         | Text, (generally ASCII or ISO 8859-*n*)                      | `text/plain`                                                 |
| `.vsd`         | Microsoft Visio                                              | `application/vnd.visio`                                      |
| `.wav`         | Waveform Audio Format                                        | `audio/wav`                                                  |
| `.weba`        | WEBM audio                                                   | `audio/webm`                                                 |
| `.webm`        | WEBM video                                                   | `video/webm`                                                 |
| `.webp`        | WEBP image                                                   | `image/webp`                                                 |
| `.woff`        | Web Open Font Format (WOFF)                                  | `font/woff`                                                  |
| `.woff2`       | Web Open Font Format (WOFF)                                  | `font/woff2`                                                 |
| `.xhtml`       | XHTML                                                        | `application/xhtml+xml`                                      |
| `.xls`         | Microsoft Excel                                              | `application/vnd.ms-excel`                                   |
| `.xlsx`        | Microsoft Excel (OpenXML)                                    | `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` |
| `.xml`         | `XML`                                                        | `application/xml` 代码对普通用户来说不可读 ([RFC 3023](https://tools.ietf.org/html/rfc3023#section-3), section 3) `text/xml` 代码对普通用户来说可读 ([RFC 3023](https://tools.ietf.org/html/rfc3023#section-3), section 3) |
| `.xul`         | XUL                                                          | `application/vnd.mozilla.xul+xml`                            |
| `.zip`         | ZIP archive                                                  | `application/zip`                                            |
| `.3gp`         | [3GPP](https://en.wikipedia.org/wiki/3GP_and_3G2) audio/video container | `video/3gpp` `audio/3gpp`（若不含视频）                      |
| `.3g2`         | [3GPP2](https://en.wikipedia.org/wiki/3GP_and_3G2) audio/video container | `video/3gpp2` `audio/3gpp2`（若不含视频）                    |
| `.7z`          | [7-zip](https://en.wikipedia.org/wiki/7-Zip) archive         | `application/x-7z-compressed`                                |

