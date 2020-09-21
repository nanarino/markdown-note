(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{127:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"协程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协程"}},[t._v("#")]),t._v(" 协程")]),t._v(" "),a("p",[t._v("协程是单线程下的并发，又称微线程，纤程。英文名Coroutine。"),a("br"),t._v("\nPython通过"),a("code",[t._v("yield")]),t._v("，"),a("code",[t._v(".send()")]),t._v("提供了对协程的基本支持，但是不完全。"),a("br"),t._v("\n在python中，由于GIL锁的存在，并发编程的最佳实践是"),a("strong",[t._v("多进程")]),t._v("+"),a("strong",[t._v("协程")]),t._v("的方式。")]),t._v(" "),a("h2",{attrs:{id:"greenlet模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#greenlet模块"}},[t._v("#")]),t._v(" greenlet模块")]),t._v(" "),a("p",[t._v("第三方模块"),a("code",[t._v("greenlet")]),t._v("已经实现了协程，无需写生成器，"),a("code",[t._v(".switch()")]),t._v("代替了"),a("code",[t._v(".send()")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" greenlet "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" greenlet\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("eat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%s eat 1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    g2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("switch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'egon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%s eat 2'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    g2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("switch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%s play 1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    g1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("switch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%s play 2'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ng1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("greenlet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ng2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("greenlet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("play"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ng1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("switch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'egon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以在第一次switch时传入参数，以后都不需要")]),t._v("\n")])])]),a("h2",{attrs:{id:"gevent模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gevent模块"}},[t._v("#")]),t._v(" gevent模块")]),t._v(" "),a("p",[t._v("第三方库"),a("code",[t._v("gevent")]),t._v("实现并发同步或异步编程，内部以"),a("code",[t._v("greenlet")]),t._v("方式"),a("strong",[t._v("自动调度它自己的IO")]),t._v("，它是以C扩展模块形式接入Python的轻量级协程。是python2版本协程的首选方案。它的API与进程，线程相近。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" gevent\n\ng1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("gevent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spawn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ng2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("gevent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spawn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ng1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#等待g1结束")]),t._v("\ng2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#等待g2结束")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#或者上述两步合作一步：gevent.joinall([g1,g2])")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("g1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#拿到func1的返回值")]),t._v("\n")])])]),a("p",[t._v("它自己的IO有："),a("code",[t._v("gevent.sleep()")]),t._v("，"),a("code",[t._v("gevent.socket")]),t._v("等")]),t._v(" "),a("h3",{attrs:{id:"猴子补丁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#猴子补丁"}},[t._v("#")]),t._v(" 猴子补丁")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" gevent "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" spawn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("joinall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("monkey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("monkey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("patch_all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("在它之后导入的模块将被替换为它自己的io，动态替换已有的标准库。")]),t._v(" "),a("h2",{attrs:{id:"其他第三方异步库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他第三方异步库"}},[t._v("#")]),t._v(" 其他第三方异步库")]),t._v(" "),a("p",[a("code",[t._v("eventlet")]),t._v("：同"),a("code",[t._v("gevent")]),t._v("模块，内部以"),a("code",[t._v("greenlet")]),t._v("方式，也有猴子补丁方法，但没"),a("code",[t._v("gevent")]),t._v("好用。"),a("br"),t._v(" "),a("code",[t._v("twisted")]),t._v("：基于事件驱动的网络引擎框架。"),a("br"),t._v(" "),a("code",[t._v("tornado")]),t._v("：最简单的回调实现异步协程，作为httpserver和httpclient，同时也是Web框架。")]),t._v(" "),a("h2",{attrs:{id:"asyncio模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asyncio模块"}},[t._v("#")]),t._v(" asyncio模块")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.python.org/zh-cn/3/library/asyncio.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("asyncio")]),a("OutboundLink")],1),t._v("是Python 3.4版本引入的标准库，直接内置了对异步IO的支持。")]),t._v(" "),a("p",[a("strong",[t._v("运行和休眠")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("asyncio.run(可等待对象)")]),t._v("  创建和运行event_loop")]),t._v(" "),a("li",[a("code",[t._v("asyncio.sleep(秒数)")]),t._v("  模拟io耗时")])]),t._v(" "),a("p",[a("strong",[t._v("可等待对象")])]),t._v(" "),a("ul",[a("li",[t._v("coroutine：协程对象，"),a("code",[t._v("async")]),t._v("关键字定义的函数对象")]),t._v(" "),a("li",[t._v("task：任务对象，包含协程对象的各种状态")]),t._v(" "),a("li",[t._v("future：将来执行的task，是task的父类，给予高层去等待")])]),t._v(" "),a("h3",{attrs:{id:"asyncio-run-aw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asyncio-run-aw"}},[t._v("#")]),t._v(" "),a("code",[t._v("asyncio.run(aw)")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" asyncio\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("say")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("delay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" what"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" asyncio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("delay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("what"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"start ')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strftime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%X'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" say"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" say"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'world'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"finish ')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strftime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%X'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nasyncio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v('它将会打印 "start"，'),a("br"),t._v('\n等待 1 秒，再打印 "hello"'),a("br"),t._v('\n等待 2 秒，再打印 "world"'),a("br"),t._v('\n最后打印 "finish"')]),t._v(" "),a("p",[a("code",[t._v("asyncio.run(main())")]),t._v("是 python3.7以上的写法"),a("br"),t._v("\n以前的写法是：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    loop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run_until_complete"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    loop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("code",[t._v("async/await")]),t._v("是 python3.7以上的写法（以前是"),a("code",[t._v("yield from")]),t._v("写法）")]),t._v(" "),a("h3",{attrs:{id:"asyncio-create-task-aw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asyncio-create-task-aw"}},[t._v("#")]),t._v(" "),a("code",[t._v("asyncio.create_task(aw)")])]),t._v(" "),a("p",[t._v("将协程对象及其各种状态打包为 Task 对象，放入任务队列中，并返回。")]),t._v(" "),a("p",[t._v("是 python3.7以上的写法（以前是"),a("code",[t._v("asyncio.ensure_future()")]),t._v(")")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    task1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" asyncio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("say"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    task2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" asyncio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("say"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'world'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"start ')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strftime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%X'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" task1\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" task2\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"finish ')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strftime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%X'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v('它将会打印 "start"，'),a("br"),t._v('\n等待 1 秒，再打印 "hello"'),a("br"),t._v('\n等待 1 秒，再打印 "world"'),a("br"),t._v('\n最后打印 "finish"'),a("br"),t._v("\n它们并发运行了。")]),t._v(" "),a("h3",{attrs:{id:"asyncio-gather-aws"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asyncio-gather-aws"}},[t._v("#")]),t._v(" "),a("code",[t._v("asyncio.gather(*aws)")])]),t._v(" "),a("p",[t._v("并发运行可等待对象，并获得顺序同aws的返回值列表")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" asyncio\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" aiohttp\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("download")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" aiohttp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ClientSession"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" resp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Read {} from {}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content_length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nsites "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.baidu.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://cn.bing.com'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    tasks "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("asyncio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("download"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("site"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" site "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" sites"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" asyncio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gather"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("tasks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nasyncio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("code",[t._v("aiohttp")]),t._v("和"),a("code",[t._v("requests")]),t._v("库类似，前者需与"),a("code",[t._v("asyncio")]),t._v("配合")]),t._v(" "),a("h3",{attrs:{id:"asyncio-as-completed-aws"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asyncio-as-completed-aws"}},[t._v("#")]),t._v(" "),a("code",[t._v("asyncio.as_completed(aws)")])]),t._v(" "),a("p",[t._v("并发运行可等待对象，返回一个协程迭代器")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    tasks "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("asyncio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("download"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("site"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" site "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" sites"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" task "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" asyncio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("as_completed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tasks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" task\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nasyncio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"asyncio-wait-for-aw-timeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asyncio-wait-for-aw-timeout"}},[t._v("#")]),t._v(" "),a("code",[t._v("asyncio.wait_for(aw, timeout)")])]),t._v(" "),a("p",[t._v("给可等待对象指定timeout秒数后超时")]),t._v(" "),a("h3",{attrs:{id:"asyncio-wait-tasks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asyncio-wait-tasks"}},[t._v("#")]),t._v(" "),a("code",[t._v("asyncio.wait(tasks)")])]),t._v(" "),a("p",[t._v("并发运行并阻塞，python3.8后只能传tasks")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("done"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pending "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" asyncio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wait"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"asyncio-all-tasks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asyncio-all-tasks"}},[t._v("#")]),t._v(" "),a("code",[t._v("asyncio.all_tasks()")])]),t._v(" "),a("p",[t._v("返回事件循环所运行的未完成的Task对象的集合")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" task "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" asyncio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("all_tasks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cancel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"task对象方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#task对象方法"}},[t._v("#")]),t._v(" task对象方法")]),t._v(" "),a("ul",[a("li",[a("code",[t._v(".cancel()")]),t._v("\t取消任务")]),t._v(" "),a("li",[a("code",[t._v(".result()")]),t._v("    获取返回")]),t._v(" "),a("li",[a("code",[t._v(".add_done_callback()")]),t._v(" 添加完成时回调")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("future"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Callback: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" future"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ntask "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" asyncio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("coroutine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_done_callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);