第一步当然是安装好python,

推荐3.7.0和3.6.8 勾选好 环境变量 和 pip

打开cmd的交互式窗口
输入python  回车  出现:

```python
Python 3.7.0 (v3.7.0:1bf9cc5093, Jun 27 2018, 04:59:51) [MSC v.1914 64 bit (AMD64)] on win32
Type "copyright", "credits" or "license()" for more information.
>>>
```

那么你就成功了一半

# print("Hello World!")





这是宇宙级代码 不许笑

按下Enter 恭喜你入门了

这个python学习路线是速成的 而且已经学过了JavaScript 所以进度会快一些

这个是kogawa nanari no python基础知识笔记

## 推荐资源

如果没有其他语言基础 推荐这个

视频  bilibili的up主 油菜花姐 发布的老男孩全套视频(第14期完整) 

 <https://space.bilibili.com/385868518>

或者老男孩第九期  我已经2倍速度食用了一遍(发现尾部不完整)

 <https://www.bilibili.com/video/av24702867>

感谢老男孩教育 感谢哔哩哔哩

由于我是主学前端的 所以看到黏包后就直接开始mysql和django了 

所以笔记也就只有这么多



## 常见问题

window下安装后:

1.

```shell
C:\Users\Administrator>python -V
'python' 不是内部或外部命令，也不是可运行的程序
或批处理文件。
```

这就是没设好环境变量,解决方法百度

2.

```shell
C:\Users\Administrator>pip -V
'pip' 不是内部或外部命令，也不是可运行的程序
或批处理文件。
```

可能是没设置好环境变量,或者pip压根没装  解决方法重新安装

若是提醒升级可以不必在意

3.

.py文件 鼠标右键中没有 edit with IDLE

解决方法 修改注册表 有3个文件夹(新建)的默认值要修改 具体百度