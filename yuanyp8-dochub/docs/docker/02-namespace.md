---
id: namespace
title: Linux Namespace 简介
more_data:
- group: docker
---
:::caution 导读
我们在上一节简单介绍了Docker涉及的6个Linux Namespace，这一节我将尝试着用几个生动的例子去揭开Namespace神秘的面纱
:::

## Namespace 基本概念

Linux `Namespace` 是 Kernel 的一组功能，它可以隔离一些列的系统资源，比如`PID`(Process ID)、`User ID`、`Network` 等。
`Namespace` 可以在一些资源上，将进程隔离起来，这些资源包括但不限于进程树、网络接口、文件挂载点等。

:::tip
对Linux比较熟悉的人，可能很快就能想到`chroot`命令，它能将当前目录变成根目录一样
:::

比如，一家公司对外界出售其计算资源，公司有一台性能不错的服务器，每个用户都购买了一个tomcat实例，某些用户可能不小心进入了别人的tomcat实例并进行了相关变更，造成客户之间的干扰。也许你会说，给每个用户分配单独的账户，保证每个用户只能访问自己的实例，但是有些操作可能需要系统级别的权限，我们不可能给每个用户都进行root赋权，也不可能给每个实例一个单独的服务器进行部署。
因此，Namespace在这里就派上了用处，使用Namepspace可以实现UID级别的隔离，__也就是说给UID为n的用户虚拟出一个UID Namespace，在这个Namespace里面，用户是有这个命名空间的root权限的，但是在真实的物理机上，还还是那个UID为n的普通用户__。
这样，就能初步实现用户隔离的需求

除了User Namespace，PID也是可以被虚拟的。命名空间建立系统的不同视图，从用户的角度看来，每个命名空间就像一个单独的Linux计算机一样，有自己的init进程（PID==1），其他进程的PID依次递增，空间A和空间B都会存在PID为1的init进程，子命名空间的进程映射到父命名空间上，父命名空间可以知道每一个子命名空间的运行状态，子命名空间之间又是相互隔离的。
![pid](assets\pid.png)

:::tip
如上图所示，子命名空间内的进程PID都是从init进程开始的，且每个子命名空间对其他命名空间是无感知的
:::

当前Docker技术所涉及的6个Namespace如下表

| namespace              | 引入的相关内核版本                                           | 被隔离的全局系统资源                                         | 在容器语境下的隔离效果                                       |
| ---------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Mount namespaces**   | [Linux 2.4.19](http://lwn.net/2001/0301/a/namespaces.php3)   | 文件系统挂接点                                               | 每个容器能看到不同的文件系统层次结构                         |
| **UTS namespaces**     | [Linux 2.6.19](http://lwn.net/Articles/179345/)              | nodename 和 domainname                                       | 每个容器可以有自己的 hostname 和 domain name                 |
| **IPC namespaces**     | [Linux 2.6.19](http://lwn.net/Articles/187274/)              | 特定的进程间通信资源，包括[System V IPC](http://www.kernel.org/doc/man-pages/online/pages/man7/svipc.7.html) 和 [POSIX message queues](http://www.kernel.org/doc/man-pages/online/pages/man7/mq_overview.7.html) | 每个容器有其自己的 System V IPC 和 POSIX 消息队列文件系统，因此，只有在同一个 IPC namespace 的进程之间才能互相通信 |
| **PID namespaces**     | [Linux 2.6.24](http://lwn.net/Articles/259217/)              | 进程 ID 数字空间 （process ID number space）                 | 每个 PID namespace 中的进程可以有其独立的 PID； 每个容器可以有其 PID 为 1 的root 进程；也使得容器可以在不同的 host 之间迁移，因为 namespace 中的进程 ID 和 host 无关了。这也使得容器中的每个进程有两个PID：容器中的 PID 和 host 上的 PID。 |
| **Network namespaces** | [始于Linux 2.6.24 完成于 Linux 2.6.29](http://lwn.net/Articles/219794/) | 网络相关的系统资源                                           | 每个容器用有其独立的网络设备，IP 地址，IP 路由表，/proc/net 目录，端口号等等。这也使得一个 host 上多个容器内的同一个应用都绑定到各自容器的 80 端口上。 |
| **User namespaces**    | [始于 Linux 2.6.23 完成于 Linux 3.8)](http://lwn.net/Articles/528078/) | 用户和组 ID 空间                                             | 在 user namespace 中的进程的用户和组 ID 可以和在 host 上不同； 每个 container 可以有不同的 user 和 group id；一个 host 上的非特权用户可以成为 user namespace 中的特权用户； |

Namespace的API主要涉及如下三个系统调用

- [clone()](https://man7.org/linux/man-pages/man2/clone.2.html) 创建新进程。 根据系统调用参数来判断哪些类型的Namespace被创建，而且它们的子进程也会被包含到当前Namespace

    ```c
     int clone(int (*child_fn)(void *), void *child_stack, int flags, void *arg, ...
                     /* pid_t *parent_tid, void *tls, pid_t *child_tid */ );
   ```
   - **child_fn**: 指定一个由新进程执行的函数。当这个函数返回时，子进程终止。该函数返回一个整数，表示子进程的退出代码
   - **指针child_stack**： 传入子进程的栈空间，也就是把用户态堆栈信息赋给子进程的esp寄存器。调用进程（父进程）总是为子进程分配新的堆栈
   - **flags**：CLONE_*标志位
   - **args**: 用户自定义的参数
   

<details>
  <summary>六种CLONE_NEW标志</summary>
  <div>
    <div>         
    <p>CLONE_NEWIPC (since Linux 2.6.19)</p>
    <p>CLONE_NEWNET (since Linux 2.6.24)</p>
    <p>CLONE_NEWNS (since Linux 2.4.19)</p>
    <p>CLONE_NEWPID (since Linux 2.6.24)</p>
    <p>CLONE_NEWUSER</p>
    <p>CLONE_NEWUTS</p>
    </div>
    <br/>
  </div>
</details>

:::note
clone系统调用其实就是fork的延申函数。我们可以通过flag来控制特定的功能。clone总共有20多个标志来控制进程clone时的行为。例如是否与父进程共享虚拟内存、open files、信号处理等。
:::

-   [unshare()](https://man7.org/linux/man-pages/man2/unshare.2.html) 将进程移出某个命名空间

    ```c
     int unshare(int flags);
    ```

    -   其中的flags参数与clone中的一致

-   [setns()](https://man7.org/linux/man-pages/man2/setns.2.html) 将进程加入到某个namespace

    ```c
    int setns(int fd, int nstype);
    ```

    -   **fd**: 表示进程待加入的namespace对应的文件描述符，它实际代表指向/proc/PID/ns目录下的符号链接的文件描述符
    -   **nstype**：让调用者检查fd指向的mmkj的类型是否与nstype一致，0代表不检查

## UTS Namespace

### shell demo

 UTS(UNIX Time-Sharing System) namespace可隔离 `hostname` 和 `NIS Domain name`资源，使得一个宿主机可拥有多个主机名或Domain Name。换句话说，可让不同namespace中的进程看到不同的主机名。 `

例如，使用unshare命令(较新版本Linux内核还支持nscreate命令)创建一个新的uts namespace：

```shell
$ hostname
niubility     # 当前root namespace的主机名为niubility
$ sudo unshare -u /bin/bash
[root@niubility dc2-user]            # 进入了新的namespace中的shell
                                     # 其主机名初始时也是niubility
                                     # 其拷贝自上级namespace资源
```

-   -u或--uts表示创建一个uts namespace，这个namespace中运行/bin/bash程序

因为是uts namespace，所以可在此namespace中修改主机名：

```shell
[root@niubility dc2-user]# hostname ns1
[root@niubility dc2-user]# hostname
ns1
[root@niubility dc2-user]# exec $SHELL
[root@ns1 dc2-user]#
```

namespace中修改的主机名不会直接修改主机名配置文件(如`/etc/hostname`)，而是修改内核属性`/proc/sys/kernel/hostname`：

```shell
[root@ns1 dc2-user]# cat /proc/sys/kernel/hostname
ns1
[root@ns1 dc2-user]# cat /etc/hostname
niubility
```

### go demo

:::caution 为什么用go语言演示
下面将使用`go`做一个例子，其实对于namespace这种系统调用，使用`c`语言来描述是最好的，但是这的目录是为了理解docker，由于`docker`就是`go`开发的，所以我们用`go`来进行讲解
:::

```go title="ust_ns_demo.go"
package main

import (
	"os/exec"
    "syscall"
    "os"
    "log"
)

func main() {
    cmd := exec.Command("sh")
    cmd.SysProcAttr = &syscall.SysProcAttr{
        Cloneflags: syscall.CLONE_NEWUTS,
    }
    cmd.Stdin = os.Stdin
    cmd.Stdout = os.Stdout
    cmd.Stderr = os.Stderr
    
    if err := cmd.Run(); err != nil {
        log.Fatal(err)
    }
}
```

-   `exec.Command("sh")`用来指定被`fork`出来的新进程的初始命令，等价于前面的`clone()`命令的*child_fn*

-   下面就是设置*flags*参数标志位为`CLONE_NEWUTS`，并使用这个标志去创建一个UTS_NAMESPACE
-   go实际上是帮我们封装了`clone()`这个函数
-   这段代码执行后就会进入到一个子进程的sh运行环境

