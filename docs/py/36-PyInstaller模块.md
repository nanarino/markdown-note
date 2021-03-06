## PyInstaller模块

绝大多数人电脑里都没有Python编译器，所以打包成exe，让用户（windows）双击就可以打开    
PyInstaller模块是用来打包的办法之一

::: tip 关于本模块
本笔记只记录基础，详细的API用法请左转其官方文档。
:::

## 使用方法

打开cmd窗口，把路径切换到入口文件所在路径，输入以下内容（最后的是文件名，而且一定要是纯英文）：

```bash
pyinstaller -F myfile.py
```

### 参数的含义

- -F 表示生成单个可执行文件
- -w 表示去掉控制台窗口，这在GUI界面时非常有用。不过如果是命令行程序的话那就把这个选项删除吧！
- -p 表示你自己自定义需要加载的类路径，一般情况下用不到
- -i 表示可执行文件的图标



## 若使用shell命令

GUI项目中若需执行shell脚本，os模块的方法则不推荐使用，    
如~~os.system~~、 ~~os.popen~~ 等方法。否则影响GUI界面的使用体验（黑窗口一闪而过）

### 使用内置模块subprocess

通过subprocess.Popen创建子进程类就不会造成cmd窗口一闪而过。    
其实例化对象可以用`.wait()`方法来等返回结果，否则不会阻塞。    
设定一小时后关机

```python
s = subprocess.Popen("shutdown -s -t 3600", shell=True)
s.wait()#阻塞进程等待shell命令执行完毕
```



## 若使用第三方库

在打包之前务必找到第三方库的包，把包复制到到跟myfile.py同目录下，然后再使用以上2种方式打包，否则会打包失败或者即使打包成功，程序也会闪退。    
找到第三方库的包，如使用了requests，可以使用查找的方式，找到这个包在哪里，然后把它复制到入口文件同目录下    
打包命令加上`--hidden-import  model_name `



## 解决打包后体积太大

使用虚拟环境 如 `pipenv`

```bash
#建立虚拟环境
pipenv install
#进入虚拟环境
pipenv shell
#安装依赖的模块
pip install -r requirements.txt
#打包的模块也要安装
pip install pyinstaller
#开始打包
pyinstaller -Fw xx.py
```

**关于requirements.txt**

- 可以直接将pip list中的内容生成

  ```bash
  pip freeze > requirements.txt
  ```

- 更推荐直接手写，格式如下

  ```bash
  moviepy==0.2.3.2
  requests==2.18.4
  ```



## 其他注意事项

~~基于当前系统配置PyInstaller，如果更换了Python版本，需要重新下载相应版本的PyInstaller并重新执行Configure.py~~（pip安装的PyInstaller不必如此）    
 注意关注运行过程中的警告和错误，最好没有警告和错误，如果出现找不到某dll，可以下载后放到C:\Windows\system32下，一般都能解决。

