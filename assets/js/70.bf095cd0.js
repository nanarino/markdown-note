(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{285:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"django框架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#django框架"}},[t._v("#")]),t._v(" Django框架")]),t._v(" "),s("blockquote",[s("p",[t._v("Python下有许多款不同的 Web 框架。Django是重量级选手中最有代表性的一位。许多成功的网站和APP都基于Django。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("关于框架")]),t._v(" "),s("p",[t._v("本笔记只记录基础，详细的框架用法请左转其官方文档。")])]),t._v(" "),s("p",[t._v("东西有点多 除了官方文档以外，这里外链2个博客，博主是老男孩教育的两位老师")]),t._v(" "),s("h2",{attrs:{id:"django"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#django"}},[t._v("#")]),t._v(" django")]),t._v(" "),s("p",[t._v("推荐版本")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Django")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.11")]),t._v(".20\n")])])]),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/liwenzhou/p/9959979.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/liwenzhou/p/9959979.html"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"django-rest-framework"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#django-rest-framework"}},[t._v("#")]),t._v(" django rest framework")]),t._v(" "),s("p",[t._v("推荐版本")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("django")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.11")]),t._v(".20\ndjango-cors-headers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0")]),t._v(".2\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("djangorestframework")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.9")]),t._v(".4\n")])])]),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/GGGG-XXXX/p/9564651.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/GGGG-XXXX/p/9564651.html"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"常用指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用指令"}},[t._v("#")]),t._v(" 常用指令")]),t._v(" "),s("p",[t._v("迁移数据库")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("python manage.py makemigrations\npython manage.py migrate  \n")])])]),s("p",[t._v("生成超级管理员")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("python manage.py createsuperuser\n")])])]),s("p",[t._v("启动服务到80端口")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("python manage.py runserver "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:80\n")])])]),s("h2",{attrs:{id:"与mysql连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与mysql连接"}},[t._v("#")]),t._v(" 与mysql连接")]),t._v(" "),s("p",[t._v("首先需要安装第三方库"),s("code",[t._v("PyMySQL")]),t._v("模块")]),t._v(" "),s("p",[s("code",[t._v("settings.py")]),t._v("中：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("DATABASES "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'default'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ENGINE'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'django.db.backends.mysql'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HOST"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PORT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NAME'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cdbproject"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"USER"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PASSWORD"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**********"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("__init__.py")]),t._v("中：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pymysql\npymysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("install_as_MySQLdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),s("h3",{attrs:{id:"版本问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本问题"}},[t._v("#")]),t._v(" 版本问题")]),t._v(" "),s("p",[t._v("在django小于1.11.6且python大于3.7.0的时候，会报出一个错误"),s("br"),t._v("\n解决办法有3种，我个人推荐升级django到1.11.20")]),t._v(" "),s("ul",[s("li",[t._v("python重新安装3.6.x及其以下")]),t._v(" "),s("li",[t._v("django升级1.11.6及以上")]),t._v(" "),s("li",[t._v("修改django源码 ：")])]),t._v(" "),s("p",[t._v("源码在"),s("code",[t._v("Python\\\\Lib\\\\site-packages\\\\django\\\\contrib\\\\admin\\\\widgets.py")]),t._v("中")]),t._v(" "),s("p",[t._v("第151行")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%s=%s'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("去掉末尾的逗号即可")]),t._v(" "),s("h3",{attrs:{id:"时区-语言问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#时区-语言问题"}},[t._v("#")]),t._v(" 时区/语言问题")]),t._v(" "),s("p",[t._v("时间默认为格林尼治时间"),s("br"),t._v("\nadmin中的语言默认为英文"),s("br"),t._v("\n可以在"),s("code",[t._v("settings.py")]),t._v("中做出如下修改：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#LANGUAGE_CODE = 'en-us'")]),t._v("\nLANGUAGE_CODE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zh-Hans'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#TIME_ZONE = 'UTC'")]),t._v("\nTIME_ZONE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Asia/Shanghai'")]),t._v("\n")])])]),s("h3",{attrs:{id:"部署问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署问题"}},[t._v("#")]),t._v(" 部署问题")]),t._v(" "),s("p",[t._v("一般用"),s("code",[t._v("nginx")]),t._v("+"),s("code",[t._v("uwsgi")]),t._v("来部署django项目到生产环境。"),s("br"),t._v("\n通过配置，"),s("code",[t._v("nginx")]),t._v("与"),s("code",[t._v("uwsgi")]),t._v("之间进行socket通信，"),s("br"),t._v("\nnginx提供static目录的静态文件访问。"),s("br"),t._v("\n具体可以参考我在"),s("a",{attrs:{href:"https://github.com/nanarino/cdb",target:"_blank",rel:"noopener noreferrer"}},[t._v("cdb仓库"),s("OutboundLink")],1),t._v("中的配置文件示例。"),s("br"),t._v("\n开发之前"),s("code",[t._v("settings.py")]),t._v("中就应该做出如下设置：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("STATICFILES_DIRS "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BASE_DIR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"static"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("在部署之后，如admin的静态资源会出现404的情况，解决办法："),s("br"),t._v("\n默认安装的python，admin的静态资源一般在"),s("br"),t._v(" "),s("code",[t._v("C:\\Users\\Administrator\\AppData\\Local\\Programs\\Python\\Python37\\Lib\\site-packages\\django\\contrib\\admin\\static\\admin")]),t._v("目录中，"),s("br"),t._v("\n将其拷贝到项目的static目录，以便被nginx访问。")])])}),[],!1,null,null,null);a.default=r.exports}}]);