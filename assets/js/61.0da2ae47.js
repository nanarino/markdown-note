(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{272:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"加密有关模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加密有关模块"}},[t._v("#")]),t._v(" 加密有关模块")]),t._v(" "),a("h2",{attrs:{id:"hashlib模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hashlib模块"}},[t._v("#")]),t._v(" hashlib模块")]),t._v(" "),a("p",[t._v("内置模块"),a("a",{attrs:{href:"https://docs.python.org/zh-cn/3/library/hashlib.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("hashlib")]),a("OutboundLink")],1),t._v("提供了常见的摘要算法，如MD5，SHA1等等。")]),t._v(" "),a("blockquote",[a("p",[t._v("什么是摘要算法呢？摘要算法又称哈希算法、散列算法。它通过一个函数，把任意长度的数据转换为一个长度固定的数据串（通常用16进制的字符串表示）。\n摘要算法就是通过摘要函数f()对任意长度的数据data计算出固定长度的摘要digest，目的是为了发现原始数据是否被人篡改过。\n摘要算法之所以能指出数据是否被篡改过，就是因为摘要函数是一个单向函数，计算f(data)很容易，但通过digest反推data却非常困难。而且，对原始数据做一个bit的修改，都会导致计算出的摘要完全不同。")])]),t._v(" "),a("p",[t._v("我们以常见的摘要算法MD5为例，计算出一个字符串的MD5值：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" hashlib\n\nmd5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hashlib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("md5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmd5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'how to use md5 in python hashlib?'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#计算结果如下：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" md5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hexdigest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'d26a53750bc40b38b65a520292f69306'")]),t._v("\n")])])]),a("p",[t._v("如果数据量很大，可以分块多次调用update()，最后计算的结果是一样的")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("md5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hashlib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("md5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmd5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'how to use md5 in '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmd5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'python hashlib?'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("md5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hexdigest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("MD5是最常见的摘要算法，速度很快，生成结果是固定的128 bit字节，通常用一个32位的16进制字符串表示。另一种常见的摘要算法是SHA1，调用SHA1和调用MD5完全类似")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" hashlib\n \nsha1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hashlib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sha1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsha1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'how to use sha1 in '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsha1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'python hashlib?'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("md5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hexdigest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("SHA1的结果是160 bit字节，通常用一个40位的16进制字符串表示。比SHA1更安全的算法是SHA256和SHA512，不过越安全的算法越慢，而且摘要长度更长。")]),t._v(" "),a("h2",{attrs:{id:"hmac模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hmac模块"}},[t._v("#")]),t._v(" hmac模块")]),t._v(" "),a("p",[t._v("Keyed-Hashing for Message Authentication。它通过一个标准算法，在计算哈希的过程中，把key混入计算过程中。Hmac算法针对所有哈希算法都通用，无论是MD5还是SHA-1。采用Hmac替代我们自己的salt算法，可以使程序算法更标准化，也更安全。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" hmac\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("b'Hello, world!'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("b'secret'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hmac"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("new"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" digestmod"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MD5'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果消息很长，可以多次调用h.update(msg)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hexdigest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fa4ee7d173f2d97ee79022d1a7355bcf'")]),t._v("\n")])])]),a("h2",{attrs:{id:"base64模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base64模块"}},[t._v("#")]),t._v(" base64模块")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.python.org/zh-cn/3/library/base64.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("base64")]),a("OutboundLink")],1),t._v("模块它也不算加密，只是二进制显示的区别。"),a("br"),t._v("\n解码需要注意的是，位数不够 等号来凑。"),a("br"),t._v("\n具体用法请参考文档。最常用的编码和解码的API为：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("base64.b64encode(s, altchars=None)")])]),t._v(" "),a("li",[a("code",[t._v("base64.b64decode(s, altchars=None, validate=False)")])])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" base64\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" base64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b64encode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("b'nanarino'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" altchars"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("b'bmFuYXJpbm8='")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" base64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b64decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("b'bmFuYXJpbm8='")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("altchars"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" validate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("b'nanarino'")]),t._v("\n")])])]),a("h2",{attrs:{id:"pycrypt模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pycrypt模块"}},[t._v("#")]),t._v(" pycrypt模块")]),t._v(" "),a("p",[t._v("加密不同于摘要，加密是一个可逆的过程。"),a("br"),t._v("\nPython中常用的加密模块是第三方模块"),a("code",[t._v("pycrypto")]),a("br"),t._v("\n在Windows系统中可用的模块名字叫"),a("code",[t._v("pycryptodomex")])]),t._v(" "),a("p",[t._v("提供了常用的几种对称加密算法（RSA等）"),a("br"),t._v("\n具体用法请参考文档。使用ASE加密和解密的例子：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" base64\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#导入时某些python版本下,包名crypto要小写")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这里是Windows7 python3.7下使用pycryptodomex安装的")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" Cryptodome"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Cipher "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" AES\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 密钥长度必须为16、24或32位，分别对应AES-128、AES-192和AES-256,这里使用16位")]),t._v("\naes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" AES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("new"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1234567890123456'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MODE_ECB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmsg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'待加密文本'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#待加密文本长度需要是为16的倍数 不够需要补'\\0'，反之 解密后也需要去除多余的'\\0'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_to_16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\0'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nencrypted_text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("base64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encodebytes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("aes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encrypt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("add_to_16"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                     encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("replace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 加密")]),t._v("\ndecrypted_text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    aes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decrypt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("base64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decodebytes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        encrypted_text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rstrip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("b'\\0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解密")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'加密值：'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" encrypted_text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'解密值：'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" decrypted_text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"zlib模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zlib模块"}},[t._v("#")]),t._v(" zlib模块")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.python.org/zh-cn/3/library/zlib.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("zlib")]),a("OutboundLink")],1),t._v("模块通过哈夫曼编码对二进制数据的压缩，具体用法请参考文档。常用API：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#压缩二进制字符串")]),t._v("\nmsg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zlib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#解压二进制字符串")]),t._v("\nmsg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zlib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decompress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"uuid模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uuid模块"}},[t._v("#")]),t._v(" uuid模块")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.python.org/zh-cn/3/library/uuid.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("uuid")]),a("OutboundLink")],1),t._v("模块是用来生成唯一标识的工具")]),t._v(" "),a("ul",[a("li",[t._v("uuid1，基于时间戳和Mac地址，有连续的特点：")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" uuid\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uuid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uuid1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ab537191-a545-11ea-a77d-00e070a5016b'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uuid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uuid1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abaf0e8a-a545-11ea-bb19-00e070a5016b'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uuid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uuid1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ac2dfa83-a545-11ea-87e2-00e070a5016b'")]),t._v("\n")])])]),a("ul",[a("li",[t._v("uuid3，基于名字的MD5散列值：")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" uuid\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uuid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uuid3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uuid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NAMESPACE_DNS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"alice"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("uuid4，基于随机数。")]),t._v(" "),a("li",[t._v("uuid5，基于名字的SHA-1散列值。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);