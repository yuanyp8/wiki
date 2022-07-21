---
slug: awk
title: awk 用法
authors: [yuanyp8]
tags: [linux, shell, regex, awk]
---
import { Highlight } from "@site/src/components/MyMDX"
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<img className="Badges" src="https://img.shields.io/badge/author-yuanyp8-yellowgreen"/><br/>
<br />


## awk 简介
awk 是一种编程语言，用于在linux/unix下对文本和数据进行处理。数据可以来自标准输入(stdin)、一个或多个文件，或其它命令的输出。它支持用户自定义函数和动态正则表达式等先进功能，是linux/unix下的一个强大编程工具。它在命令行中使用，但更多是作为脚本来使用。awk有很多内建的功能，比如数组、函数等，这是它和C语言的相同之处，灵活性是awk最大的优势。

## 命令行格式


```shell
awk: option requires an argument -- h
Usage: awk [POSIX or GNU style options] -f progfile [--] file ...
Usage: awk [POSIX or GNU style options] [--] 'program' file ...
```


<details>
  <summary>参数</summary>
  <div>

```shell
        -f progfile             --file=progfile
        -F fs                   --field-separator=fs
        -v var=val              --assign=var=val
Short options:          GNU long options: (extensions)
        -b                      --characters-as-bytes
        -c                      --traditional
        -C                      --copyright
        -d[file]                --dump-variables[=file]
        -e 'program-text'       --source='program-text'
        -E file                 --exec=file
        -g                      --gen-pot
        -h                      --help
        -L [fatal]              --lint[=fatal]
        -n                      --non-decimal-data
        -N                      --use-lc-numeric
        -O                      --optimize
        -p[file]                --profile[=file]
        -P                      --posix
        -r                      --re-interval
        -S                      --sandbox
        -t                      --lint-old
        -V                      --version
```

  </div>
</details>

## `awk`结合`printf`的玩法

原始数据
```shell
# kubectl get pods -A
NAMESPACE                      NAME                                                              READY   STATUS                  RESTARTS   AGE
elastic-system                 elastic-operator-0                                                0/1     ImagePullBackOff        0          88d
istio-system                   istio-ingressgateway-6cfc89c4b6-krwcj                             1/1     Running                 3          301d
istio-system                   istiod-1-6-10-75fcd5bbd5-qdm8t                                    1/1     Running                 3          301d
istio-system                   jaeger-collector-5f6d955b67-fg4v4                                 1/1     Running                 13         301d
istio-system                   jaeger-es-index-cleaner-1658159700-vhv5n                          0/1     Completed               0          2d16h
istio-system                   jaeger-es-index-cleaner-1658246100-9ct9v                          0/1     Completed               0          40h
istio-system                   jaeger-es-index-cleaner-1658332500-pztsw                          0/1     Completed               0          16h
istio-system                   jaeger-operator-5d78df8787-kkrsh                                  1/1     Running                 3          301d
istio-system                   jaeger-query-75cf7bd66b-lrtbv                                     2/2     Running                 15         301d
istio-system                   kiali-7b8cffc45c-7lxzm                                            1/1     Running                 3
```

实现如下批量功能
```shell
     namespace:${NAMESAPCE_NAME}, pod:${POD_NAME}
```

<details>
  <summary>语法实现</summary>
  <div>


```shell
# kubectl get pods -A |awk '{printf("namespace:%s, pod:%s\n", $1, $2)}'
#highlight-start
namespace:pl, pod:web-revision-v1-55674487c-qgrfs
namespace:pl, pod:web-revision-v1-5cb47bc74-f7ft2
namespace:pl, pod:web-revision-v1-5cb47bc74-mvfmt
namespace:podscaler, pod:redis-0
namespace:project-system, pod:project-controller-manager-856cfbdfc6-r84xm
namespace:velero, pod:restic-rkwd6
namespace:velero, pod:restic-wjdqs
namespace:velero, pod:velero-8668b67b-qwk5t
namespace:velero, pod:velero-8668b67b-rffxn
namespace:vue-test, pod:demo-77d5c8d6b6-vd5x6
namespace:vue-test, pod:games-9786647cc-68nqh
namespace:vue-test, pod:games-9786647cc-xm7gg
#highlight-end
```

参数说明
<ol>
<li>
<b>%s</b>: 占位符,用于声明此处应存在一个字符串
</li>
<li>
<b>'$1'</b>: 传入参数,awk默认解析的分隔符为空字符(贪婪模式),上述例子对应关系为 $1=NAMESPACE | $2=NAME | $3=READY | $4=STATUS | $5=RESTARTS | $6=AGE
</li>
</ol>

  </div>
</details>

:::warning
上述命令只是拼凑字符串到控制台, 要想让bash解释执行需要用管道符将stdin传给bash,举例子如下
```shell title="强制删除集群内所有的处于Terminating状态的pod"
kubectl get pods -A|grep Terminating |awk '{printf("kubectl delete pod --force --grace-period=0 -n %s %s\n", $1, $2)}'|bash
```
:::

