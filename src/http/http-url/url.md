<!-- 写一篇博客，标题为 《浅析 URL》，最少一百字。

内容包括：

    URL 包含哪几部分，每部分分别有什么作用
    DNS 的作用是什么，nslookup 命令怎么用
    IP 的作用是什么，ping 命令怎么用
    域名是什么，分别哪几类域名 -->

# 浅析 URL

大家好，我是 陳昆，今天了解了些 URL 的一些相关知识，在这里分享给大家，希望对大家有些用处。

## 什么是 ULRL

统一资源定位符（英语：Uniform Resource Locator，缩写：URL；或称统一资源定位器、定位地址、URL 地址，俗称网页地址或简称网址）是因特网上标准的资源的地址（Address），如同在网络上的门牌。它最初是由蒂姆·伯纳斯-李发明用来作为万维网的地址，现在它已经被万维网联盟编制为因特网标准 RFC 1738

<h2>URL 包含部分与作用</h2>
URL 包含 5 部分|
协议 |  域名或 IP | 端口号 | 路径 | 查询字符串 | 锚点

举个栗子 https://www.baidu.com/s?wd=hi&res_spt=1#5
### 协议  
在这里协议是https _ https:// ，_  也就是网站的传输协议，当然还有其它协议，
### 域名或 IP
域名是你访问的地址 _www.baidu.com_

### 路径
_/s_  用于定位访问的地址

###  端口
https 默认端口是 443
### 查询字符串
_s?wd=hi&res_spt=1_  用它可以实现同一个页面，出现不同的内容

### 锚点
_#5_ 用于定位访问页面的位置

<h2>DNS 的作用是什么，nslookup 命令怎么用</h2>
域名系统（英语：Domain Name System，缩写：DNS）是互联网的一项服务。它作为将域名和IP地址相互映射的一个分布式数据库，能够使人更方便地访问互联网。

nslookup命令是常用域名查询工具，就是查DNS信息用的命令。
```
语法
nslookup(选项)(参数)
选项
-sil：不显示任何警告信息。
参数
域名：指定要查询域名。

实例
[root@localhost ~]# nslookup www.linuxde.net
Server:         202.96.104.15
Address:        202.96.104.15#53

Non-authoritative answer:
www.linuxde.net canonical name = host.1.linuxde.net.
Name:   host.1.linuxde.net
Address: 100.42.212.8
```

<h2>IP 的作用是什么，ping 命令怎么用</h2>

「ping」是用来探测本机与网络中另一主机之间是否可达的命令，如果两台主机之间ping不通，则表明这两台主机不能建立起连接。ping是定位网络通不通的一个重要手段。

在终端下 ping + 查询域名 即可直接查询
```
ping www.baidu.com
```
<h2>域名是什么，分别哪几类域名</h2>
域名别称IP
### 域名的层级结构
在讨论域名的时候，我们经常听到有人说「顶级域名」、「一级域名」、「二级域名」等概念，域名级别究竟是怎么划分的呢？


根域名。还是以百度为例，通过一些域名解析工具，我们可以看到百度官网域名显示为 www.baidu.com.，细心的人会注意到，这里最后有一个 .，这不是 bug，而是所有域名的尾部都有一个根域名。www.baidu.com 真正的域名是 www.baidu.com.root，简写为www.baidu.com.，又因为根域名 .root 对于所有域名都是一样的，所以平时是省略的，最终就变成了我们常见的样子。


根域名的下一级叫做顶级域名（top-level domain，缩写为 TLD），也叫做一级域名，常见的如 .com / .net / .org / .cn 等等，他们就是顶级域名。


再下一级叫做二级域名（second-level domain，缩写为 SLD），比如 baidu.com。这是我们能够购买和注册的最高级域名。


次级域名之下，就是主机名（host），也可以称为三级域名，比如 www.baidu.com，由此往下，基本上 N 级域名就是在 N-1 级域名前追加一级。


总结一下，常见的域名层级结构如下：
主机名.次级域名.顶级域名.根域名
# ie
www.baidu.com.root
复制代码一般来说我们购买一个域名就是购买一个二级域名（SLD）的管理权（如 leancloud.cn），有了这个管理权我们就可以随意设置三级、四级域名了。

节选域名的层级结构
>作者：LeanCloud
>链接：https://juejin.im/post/5d37cf70e51d4510664d17d3

欢迎大家加我github 好友交流

>https://github.com/zerochenkun/urlBlog