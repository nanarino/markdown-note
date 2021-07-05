(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{259:function(t,s,a){"use strict";a.r(s);var n=a(6),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"正则有关模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则有关模块"}},[t._v("#")]),t._v(" 正则有关模块")]),t._v(" "),a("p",[t._v("本篇不会过多介绍正则表达式内容，可参考js篇的正则对象章节。")]),t._v(" "),a("h2",{attrs:{id:"正则表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式"}},[t._v("#")]),t._v(" 正则表达式")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("python不支持不定长的后行断言（逆序环视）")]),t._v(" "),a("p",[t._v("error: look-behind requires fixed-width pattern")])]),t._v(" "),a("blockquote",[a("p",[t._v("正则就是用一些具有特殊含义的符号组合到一起（称为正则表达式）来描述字符或者字符串的方法。或者说：正则就是用来描述一类事物的规则。（在Python中）它内嵌在Python中，并通过 re 模块实现。正则表达式模式被编译成一系列的字节码，然后由用 C 编写的匹配引擎执行。")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("正则表达式")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("匹配内容")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v(".")])]),t._v(" "),a("td",[t._v("元字符")]),t._v(" "),a("td",[t._v("匹配除换行符以外的任意字符")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("\\w")])]),t._v(" "),a("td",[t._v("元字符")]),t._v(" "),a("td",[t._v("匹配字母或数字或下划线，大写即非数字字母下划线")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("\\s")])]),t._v(" "),a("td",[t._v("元字符")]),t._v(" "),a("td",[t._v("匹配任意的空白符，大写即非空字符")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("\\d")])]),t._v(" "),a("td",[t._v("元字符")]),t._v(" "),a("td",[t._v("匹配数字，大写即非数字")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("\\n")])]),t._v(" "),a("td",[t._v("元字符")]),t._v(" "),a("td",[t._v("匹配一个换行符，也属于"),a("code",[t._v("\\s")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("\\t")])]),t._v(" "),a("td",[t._v("元字符")]),t._v(" "),a("td",[t._v("匹配一个制表符，也属于"),a("code",[t._v("\\s")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("\\b")])]),t._v(" "),a("td",[t._v("元字符")]),t._v(" "),a("td",[t._v("匹配一个单词的边界")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("^")])]),t._v(" "),a("td",[t._v("元字符")]),t._v(" "),a("td",[t._v("匹配字符串的开始")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("$")])]),t._v(" "),a("td",[t._v("元字符")]),t._v(" "),a("td",[t._v("匹配字符串的结尾")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("a|b")])]),t._v(" "),a("td",[t._v("逻辑")]),t._v(" "),a("td",[t._v("匹配字符a或字符b")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("(...)")])]),t._v(" "),a("td",[t._v("分组")]),t._v(" "),a("td",[t._v("匹配括号内的组，捕获")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("(?:...)")])]),t._v(" "),a("td",[t._v("分组")]),t._v(" "),a("td",[t._v("匹配括号内的组，不捕获")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("(?<Name>...)")])]),t._v(" "),a("td",[t._v("命名分组")]),t._v(" "),a("td",[t._v("匹配括号内的组，捕获并命名（python支持）")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("(?>...)")])]),t._v(" "),a("td",[t._v("固化分组")]),t._v(" "),a("td",[t._v("匹配过程中不交还括号内的组（python不支持）")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("[...]")])]),t._v(" "),a("td",[t._v("字符集")]),t._v(" "),a("td",[t._v("匹配字符组中的字符")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("[^...]")])]),t._v(" "),a("td",[t._v("字符集")]),t._v(" "),a("td",[t._v("匹配除了字符组中字符的所有字符")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("*")])]),t._v(" "),a("td",[t._v("量词")]),t._v(" "),a("td",[t._v("贪婪匹配，重复零次或更多次")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("+")])]),t._v(" "),a("td",[t._v("量词")]),t._v(" "),a("td",[t._v("贪婪匹配，重复一次或更多次")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("?")])]),t._v(" "),a("td",[t._v("量词")]),t._v(" "),a("td",[t._v("贪婪匹配，重复零次或一次")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("{n}")])]),t._v(" "),a("td",[t._v("量词")]),t._v(" "),a("td",[t._v("重复n次")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("{n,}")])]),t._v(" "),a("td",[t._v("量词")]),t._v(" "),a("td",[t._v("重复n次或更多次")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("{n,m}")])]),t._v(" "),a("td",[t._v("量词")]),t._v(" "),a("td",[t._v("重复n到m次")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("(?=pattern)")])]),t._v(" "),a("td",[t._v("断言")]),t._v(" "),a("td",[t._v("后面有，断言也叫环视look-behind")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("(?!pattern)")])]),t._v(" "),a("td",[t._v("断言")]),t._v(" "),a("td",[t._v("后面没有")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("(?<=pattern)")])]),t._v(" "),a("td",[t._v("断言")]),t._v(" "),a("td",[t._v("前面有（python不支持不定长逆序环视）")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("(?<!pattern)")])]),t._v(" "),a("td",[t._v("断言")]),t._v(" "),a("td",[t._v("前面没有（python不支持不定长逆序环视）")])])])]),t._v(" "),a("p",[t._v("注意")]),t._v(" "),a("ul",[a("li",[t._v("python中正则表达式是不是真实字符串，需要二重转义，推荐使用真实字符串("),a("code",[t._v('r""')]),t._v(")")]),t._v(" "),a("li",[t._v("贪婪匹配会尽可能匹配，后面加?号使其变成惰性匹配，匹配尽可能少的。")]),t._v(" "),a("li",[t._v("断言（环视）的括号中的匹配到的内容只会用来判断不会被正则表达式捕获。")]),t._v(" "),a("li",[t._v("由于状态机制，从左往右被捕获的字符不再参与匹配。例如'ababa'里无法捕获到第二个'aba'")])]),t._v(" "),a("h2",{attrs:{id:"常用范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用范围"}},[t._v("#")]),t._v(" 常用范围")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("正则")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("[0-9]")])]),t._v(" "),a("td",[t._v("和"),a("code",[t._v("[0123456789]")]),t._v("和"),a("code",[t._v("\\d")]),t._v("是一个意思")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("[a-z]+")])]),t._v(" "),a("td",[t._v("不定长的小写字母，尽可能多，一个以上")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("[A-Z]*?")])]),t._v(" "),a("td",[t._v("不定长的大写字母，尽可能少，可以一个都没有")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("[0-9a-fA-F]")])]),t._v(" "),a("td",[t._v("十六进制字符")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("^.*(?=\\.jpg$|\\.png)")])]),t._v(" "),a("td",[t._v("后面出现"),a("code",[t._v(".jpg")]),t._v("或"),a("code",[t._v(".png")]),t._v("的")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("^(?!-).*")])]),t._v(" "),a("td",[t._v("不以"),a("code",[t._v("-")]),t._v("开头的行（"),a("code",[t._v("re.M")]),t._v("模式）")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("[a-z0-9_\\.-]{3,15}@[a-z]{2,5}\\.[a-z]{2,6}")])]),t._v(" "),a("td",[t._v("Email")])])])]),t._v(" "),a("h2",{attrs:{id:"re模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#re模块"}},[t._v("#")]),t._v(" re模块")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.python.org/zh-cn/3/library/re.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("re")]),a("OutboundLink")],1),t._v("模块提供了与 Perl 语言类似的正则表达式匹配操作")]),t._v(" "),a("p",[t._v("最常用方法")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("re.findall(r,txt)")]),t._v(" 查找所有满足匹配条件的结果,放在列表里")]),t._v(" "),a("li",[a("code",[t._v("re.match(r,txt)")]),t._v(" 匹配第一个然后返回一个包含匹配信息的对象")]),t._v(" "),a("li",[a("code",[t._v("re.sub(r,s,txt)")]),t._v(" 将所有满足匹配条件的替换成字符串s")])]),t._v(" "),a("h3",{attrs:{id:"模式flags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模式flags"}},[t._v("#")]),t._v(" 模式"),a("code",[t._v("flags")])]),t._v(" "),a("p",[t._v("不同模式主要会改变"),a("code",[t._v(".")]),t._v("以及"),a("code",[t._v("^")]),t._v("和"),a("code",[t._v("$")]),t._v("的匹配行为")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("None")]),t._v(" 首行模式，默认的。只有第一行都有开头和结尾。换行符不会被匹配。")]),t._v(" "),a("li",[a("code",[t._v("re.S")]),t._v(" / "),a("code",[t._v("re.DOTALL")]),t._v(" 单行模式，整个文本看成一行。换行符会被当作普通字符匹配。")]),t._v(" "),a("li",[a("code",[t._v("re.M")]),t._v(" / "),a("code",[t._v("re.MULTILINE")]),t._v(" 多行模式，每一行都有开头和结尾。换行符不会被匹配。")]),t._v(" "),a("li",[a("code",[t._v("re.I")]),t._v(" / "),a("code",[t._v("re.IGNORECASE")]),t._v("忽略大小写模式。")])]),t._v(" "),a("p",[t._v("多模式可以直接相加")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''few.JPG\noij.png\nade.jpg\nade.jpg.rename\nytr.GIF\npow.PNG'''")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("r'.*(?=\\.jpg|\\.png)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'oij'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ade'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ade'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("r'^.*(?=\\.jpg$|\\.png$)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("M"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("I"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'few'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'oij'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ade'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pow'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"分组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分组"}},[t._v("#")]),t._v(" 分组"),a("code",[t._v("(...)")])]),t._v(" "),a("p",[t._v("分组在某种程度上完全可以代替断言的功能。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'(.*?)_sb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'alex_sb wusir_sb 日天_sb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'alex'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wusir'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'日天'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" HTML "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<a href=\"http://www.baidu.com\">点击</a>'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'href=\"(.*?)\"'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" HTML"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.baidu.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("分组"),a("code",[t._v("()")]),t._v("中加入"),a("code",[t._v("?:")]),t._v(" 表示整体，而不是只针对性捕获"),a("code",[t._v("()")]),t._v("里面的内容。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" re\n\nret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'www.(baidu|oldboy).com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'www.oldboy.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ['oldboy']这是因为findall会优先把匹配结果组里内容返回,如果想要匹配结果,取消权限即可")]),t._v("\n\nret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'www.(?:baidu|oldboy).com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'www.oldboy.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ['www.oldboy.com']")]),t._v("\n")])])]),a("h3",{attrs:{id:"常用方法用例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用方法用例"}},[t._v("#")]),t._v(" 常用方法用例")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" re\n\nret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eva egon yuan'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回所有匹配的字符串,放在列表里")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#结果 : ['a', 'a']")]),t._v("\n\nret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("search"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eva egon yuan'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 结果 : 'a'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回匹配成功的第一个Match对象，找不到则是None")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Match对象的group()方法得到匹配的字符串")]),t._v("\n\nret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("match"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从头开始匹配 相当于search('^a', 'abc').group()")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 结果 : 'a'")]),t._v("\n\nret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[ab]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abcd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 先按'a'分割得到''和'bcd',再对''和'bcd'分别按'b'分割")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ['', '', 'cd']")]),t._v("\n\nret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'H'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eva3egon4yuan4'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 简单的匹配后替换，参数1表示只替换1个")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# evaHegon4yuan4")]),t._v("\n\nret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'H'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eva3egon4yuan4'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 匹配后替换，返回元组(替换的结果,替换了多少次)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nobj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\d{3}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将正则表达式编译成为一个Pattern对象，这里匹配的是3个数字")]),t._v("\nret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("search"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc123eeee'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Pattern对象调用search，参数为待匹配的字符串")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#结果 ： 123")]),t._v("\n\nret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("finditer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ds3sy4784a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# finditer返回一个存放Match对象的迭代器")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看第一个的结果")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看第二个在原字符串里面的开始的位置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看剩余的结果")]),t._v("\n")])])]),a("h4",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意：")]),t._v(" "),a("ul",[a("li",[t._v("多行模式("),a("code",[t._v("MULTILINE")]),t._v(")中"),a("code",[t._v("match()")]),t._v("只匹配字符串的开始，但"),a("code",[t._v("search()")]),t._v("和以 "),a("code",[t._v("'^'")]),t._v(" 开头的正则会每行匹配")]),t._v(" "),a("li",[a("code",[t._v("split()")]),t._v("的优先级查询")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("ret"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\d+"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eva3egon4yuan"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#结果 ： ['eva', 'egon', 'yuan']")]),t._v("\n\nret"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(\\d+)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eva3egon4yuan"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#结果 ： ['eva', '3', 'egon', '4', 'yuan']")]),t._v("\n")])])]),a("p",[t._v("在匹配部分加上"),a("code",[t._v("()")]),t._v("之后所切出的结果是不同的，\n没有"),a("code",[t._v("()")]),t._v("的没有保留所匹配的项，但是有"),a("code",[t._v("()")]),t._v("的却能够保留了匹配的项，\n这个在某些需要保留匹配部分的使用过程是非常重要的。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v(".sub()")]),t._v("  第二个参数可以接受函数 第一个参数要使用分组（命名分组）")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" size "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'height165weight21deep213'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#要求所有数字内容都加5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("r'(?P<num>\\d+)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lambda")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"num"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'height170weight26deep218'")]),t._v("\n")])])]),a("h2",{attrs:{id:"regex模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regex模块"}},[t._v("#")]),t._v(" regex模块")]),t._v(" "),a("p",[t._v("Python自带了正则表达式引擎（内置的re模块），但是不支持一些高级特性，比如下面这几个：")]),t._v(" "),a("ul",[a("li",[t._v("固化分组  Atomic grouping")]),t._v(" "),a("li",[t._v("占有优先量词   Possessive quantifiers")]),t._v(" "),a("li",[t._v("可变长度的逆序环视   Variable-length lookbehind")]),t._v(" "),a("li",[t._v("递归匹配  Recursive patterns")]),t._v(" "),a("li",[t._v("（起始/继续）位置锚\\G  Search anchor")])]),t._v(" "),a("p",[t._v("第三方模块regex实现了如上高级特效，且API与re模块一致。")])])}),[],!1,null,null,null);s.default=r.exports}}]);