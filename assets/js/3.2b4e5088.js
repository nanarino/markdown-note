(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{150:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"a",(function(){return i})),n.d(e,"i",(function(){return s})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return m})),n.d(e,"c",(function(){return g})),n.d(e,"j",(function(){return b}));const a=/#.*$/,r=/\.(md|html)$/,i=/\/$/,s=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(a,"").replace(r,"")}function l(t){return s.test(t)}function u(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function f(t){if(l(t))return t;const e=t.match(a),n=e?e[0]:"",r=o(t);return i.test(r)?t:r+".html"+n}function h(t,e){const n=decodeURIComponent(t.hash),r=function(t){const e=t.match(a);if(e)return e[0]}(e);if(r&&n!==r)return!1;return o(t.path)===o(e)}function p(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){const a=t.charAt(0);if("/"===a)return t;if("?"===a||"#"===a)return e+t;const r=e.split("/");n&&r[r.length-1]||r.pop();const i=t.replace(/^\//,"").split("/");for(let t=0;t<i.length;t++){const e=i[t];".."===e?r.pop():"."!==e&&r.push(e)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));const a=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===a)return Object.assign({},t[e],{type:"page",path:f(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function m(t,e,n,a){const{pages:r,themeConfig:i}=n,s=a&&i.locales&&i.locales[a]||i;if("auto"===(t.frontmatter.sidebar||s.sidebar||i.sidebar))return d(t);const o=s.sidebar||i.sidebar;if(o){const{base:n,config:a}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const a in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(a)))return{base:a,config:e[a]};var n;return{}}(e,o);return"auto"===a?d(t):a?a.map(t=>function t(e,n,a,r=1){if("string"==typeof e)return p(n,e,a);if(Array.isArray(e))return Object.assign(p(n,e[0],a),{title:e[1]});{const i=e.children||[];return 0===i.length&&e.path?Object.assign(p(n,e.path,a),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:i.map(e=>t(e,n,a,r+1)),collapsable:!1!==e.collapsable}}}(t,r,n)):[]}return[]}function d(t){const e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}function g(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function b(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},151:function(t,e,n){"use strict";var a=n(150),r={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(a.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link},isNonHttpURI(){return Object(a.g)(this.link)||Object(a.h)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(a.f)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(a.f)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}},i=n(6),s=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction(e)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.a=s.exports},167:function(t,e,n){},198:function(t,e,n){"use strict";n(167)},206:function(t,e,n){"use strict";n.r(e);var a={components:{NavLink:n(151).a},data:()=>({msg:"",frameSpeed:0,frameItem:0,frames:[]}),computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}},methods:{alert(t){return this.msg=t},nextFrame(){this.frameSpeed||this.frameItem++},startAnimation(){this.frameSpeed<3?(console.log("fps "+8*++this.frameSpeed),setInterval(()=>{this.frameItem++},125)):console.log("播放速度已达上限")}},mounted(){const t=this.$refs.canvas.getContext("2d"),e={j:[140,201,240],k:[75,23,70],l:[251,137,154],m:[139,83,92],n:[251,183,145],o:[68,136,208],p:[253,240,197],q:[179,0,34],r:[248,36,53],s:[239,134,27],a:[252,202,53],b:[99,151,97],c:[102,169,208],d:[87,73,101],e:[75,29,76],f:[231,149,161],g:[251,209,216],h:[255,255,255],i:[169,163,189]};t.fillStyle=`rgb(${e.j.toString()})`,t.fillRect(0,0,48,40),t.fillStyle=`rgb(${e.i.toString()})`,t.fillRect(0,40,48,48);const n=t.getImageData(0,0,48,48),a=(t,e)=>{let a,r=-1;for(a of e)a=a||r+1,n.data[4*a]=t[0],n.data[4*a+1]=t[1],n.data[4*a+2]=t[2],r=a};this.frames[1]=()=>{a(e.f,[483,534,584]),a(e.h,[682,0,708,0,1455,1504,1751,1753,1755]),a(e.j,[684,0,734,0,760,0,809,0,1754]),a(e.e,[1843,1892,1894,0]),a(e.n,[1847]),a(e.p,[1796,0,0,0,1844,0]),a(e.d,[1942,0]),a(e.i,[1990,2039]),t.putImageData(n,0,0)},this.frames[2]=()=>{a(e.g,[35,127,198,0]),a(e.f,[80,125,150,0,214,262,302,585,634]),a(e.j,[338,682,0,1455,1504]),a(e.h,[705,0,0,1452,0,0]),t.putImageData(n,0,0)},this.frames[3]=()=>{a(e.h,[654,0,703,0,1451,1497,0,0,1630,1754,1798]),a(e.j,[585,706,0,0,0,754,1453,0,1751,1753,1755,1797]),a(e.f,[680]),a(e.g,[681]),a(e.e,[802,1796,1845]),a(e.n,[1799]),a(e.b,[1843,0,1892]),a(e.p,[1847,1894,0,1942,0,1990]),a(e.d,[2038,0]),t.putImageData(n,0,0)},this.frames[4]=()=>{a(e.j,[35,127,262,655,703,0,0,746,1408,0,0,0,0,0,0,1451,0,1499,1616,1664,1713]),a(e.g,[80,125,150,0,214,302,673,723,727]),a(e.f,[198,0,338]),a(e.h,[650,0,697,0,1496,1570,1675,0,1799]),a(e.e,[654,747,1385,1415,1430,1433,1457,0,0,0,0,1481,1504,1510,1601,1698,1844]),a(e.r,[1384,1432,1505,1602,0,0,0,0,0]),a(e.c,[1478]),a(e.q,[1506,0,1556,0,0,0]),a(e.a,[1511,0,1522,1618,1666,1714]),a(e.s,[1513]),a(e.o,[1520,1568]),a(e.b,[1630]),a(e.p,[1651,0,1991]),a(e.n,[1653,1699,0]),a(e.d,[1990]),t.putImageData(n,0,0)},this.frames[5]=()=>{a(e.j,[483,534,584,634,650,0,681,698,1496,0,0,1665,1714]),a(e.f,[673,723,727]),a(e.g,[680]),a(e.h,[696,743,0,1444,0,0,1493,0,0,1522,1672,0]),a(e.a,[1570,1619,1667]),a(e.b,[1675,0]),a(e.p,[1896,1944,1992]),a(e.n,[1900]),a(e.d,[1947,1994]),t.putImageData(n,0,0)},this.frames[6]=()=>{a(e.f,[483,534,584,634]),a(e.j,[696,0,743,0,1445,0,1493,0,0]),a(e.h,[788,0,0,0,1393,0,1442,0,1622,1755,1804,1900]),a(e.p,[1370,0,0,0,1418,1800,0,0,1848,1850]),a(e.s,[1512]),a(e.c,[1672,0]),a(e.m,[1799,1847]),a(e.p,[1851]),a(e.n,[1895,1898,1943,0]),a(e.d,[1899,1945,0,1992,0]),t.putImageData(n,0,0)},this.frames[7]=()=>{a(e.g,[35,127,198,0]),a(e.f,[80,125,150,0,214,262,302]),a(e.j,[338,790,0,1393,0,1442,0,0,1504,1601]),a(e.h,[786,0,835,0,1344]),a(e.e,[1408,0,0,0,0,0,0,1505,1602,1699]),a(e.m,[1415]),a(e.p,[1419,1421,1603,0]),a(e.r,[1457,1506,0,1512,0,1556,0,0,0]),a(e.q,[1458,0,0,0,1510,0]),a(e.n,[1605,1651,0]),a(e.o,[1606,0,1653,1700]),a(e.c,[1622,1698,1844]),t.putImageData(n,0,0)},this.frames[8]=()=>{a(e.k,[651,746,1384,1478]),a(e.j,[654,789,835,0,1344,1755,1804]),a(e.f,[680]),a(e.g,[681]),a(e.h,[737,0,813,0,1570,1799,0,0,0,1851]),a(e.r,[747,1430]),a(e.c,[1385]),a(e.l,[1418,0,1421]),a(e.a,[1522,1665,1714]),a(e.s,[1619,1667]),a(e.p,[1847,1895,1898,1943,0,0,0,1992,0]),a(e.n,[1848,1850,1899,0]),t.putImageData(n,0,0)},this.frames[9]=()=>{a(e.j,[35,127,262,534,722,737,0,786,0,0,813,1714]),a(e.g,[80,125,150,0,214,302,673,723,727]),a(e.f,[198,0,338]),a(e.h,[734,0,0,783,0,0,859,0,1568,1900]),a(e.e,[754,1432]),a(e.r,[802]),a(e.c,[814,1433,1481]),a(e.l,[1370,0,0,0]),a(e.a,[1520,1616,1664]),a(e.s,[1522,1570,1618]),a(e.o,[1666]),a(e.n,[1896,1947]),a(e.d,[1944,1992]),a(e.p,[1994]),t.putImageData(n,0,0)},this.frames[0]=()=>{a(e.j,[584,634,681,736,783,0,0,859,0]),a(e.f,[673,723,727]),a(e.g,[680,722]),a(e.h,[684,0,760,0,809,0]),a(e.a,[1713]),a(e.n,[1799]),a(e.p,[1990]),a(e.d,[1991]),a(e.i,[2038]),t.putImageData(n,0,0)},requestAnimationFrame(r=>{a(e.k,[1462]),a(e.l,[1318,0,1327,0,1370,0,0,0,1418,0,0,0]),a(e.m,[1271,0,0,1276,0,0,0,1415,1467,0,1471,1514,1561]),a(e.n,[1129,1177,1181,1223,1231,1469,0,1516,1605,1651,0,1799,1848,1850,1896,1899,1947]),a(e.o,[1028,0,1077,1091,1093,1095,1141,0,1187,0,0,1235,1606,0,1614,1653,0,1656,0,1666,1700,0,1715,1748,1757,0,1806,1854,0]),a(e.p,[1081,1085,1224,0,0,0,0,0,0,1274,0,1320,0,0,0,0,0,0,1367,0,0,1374,0,1416,0,1422,0,1603,0,1846,0,1849,1894,0,1897,0,1942,0,1945,0,1990,1993,0]),a(e.q,[848,0,1458,0,0,0,1508,0,0,0,1662,1709,0]),a(e.r,[700,0,747,0,0,795,0,0,0,802,0,0,0,0,843,0,850,0,0,0,0,898,0,0,0,0,948,0,0,997,0,1046,1238,1286,1334,0,1382,0,1430,0,1457,1506,0,1512,0,1554,0,0,0,0,0,0,1658,0,0,0,1708]),a(e.s,[897,947,996,1044,0,1133,1137,1179,1185,1232,0,1236,0,1280,1283,0,0,1331,0,0,1379,0,0,1427,0,0,1464,0,0,1475,0,1522,0,0,1570,0,1608,1618,0,1667,1860]),a(e.a,[890,0,0,0,936,0,0,0,0,0,0,0,0,0,0,983,0,0,0,0,0,0,0,0,0,0,0,0,1030,0,0,0,0,0,0,0,0,0,0,0,0,0,1078,0,0,1082,0,0,1086,0,0,0,0,1126,0,0,1130,0,0,1134,0,0,1138,1174,0,0,1178,1180,1182,0,0,1186,1234,1281,0,1329,0,1376,0,0,1424,0,0,1463,1472,0,0,1520,0,1572,1616,0,1620,1655,1664,0,1668,1713,1716,0,1764,0,1908,0,0,1958]),a(e.b,[1627,0,0,0,0,1670,0,1674,0,0,0,0,0,1696,0,0,1719,0,0,0,0,0,0,0,0,0,0,0,0,1744,0,0,1768,0,0,0,0,0,0,0,0,0,0,0,0,1786,1789,1791,0,0,0,1816,0,0,0,0,0,0,0,0,0,0,0,0,1833,0,1837,0,0,0,0,0,0,0,1864,0,0,0,0,0,0,0,0,1877,0,1881,0,1884,0,0,0,0,0,0,0,0]),a(e.c,[814,0,861,0,0,908,0,0,0,956,0,0,0,1003,0,0,0,0,1049,0,0,0,0,0,0,1097,0,0,0,0,0,0,1144,0,0,0,0,0,0,0,1191,0,0,0,0,0,0,0,0,1240,0,0,0,0,0,0,0,1288,0,0,0,0,0,0,0,1337,0,0,0,0,0,0,1385,0,0,0,0,0,0,1433,0,0,0,0,0,0,1481,0,0,0,0,0,0,0,1526,0,0,0,0,0,0,0,0,0,0,1543,1574,0,0,0,0,0,0,0,0,0,0,0,1589,0,0,1622,0,0,0,0,1632,0,1637,0,0,1672,0,1680,0,1685,0,0,1691,0,1733,0,0,1739,0,1781,0,0,1787,0,1829,0,0,1835,0,1879,1883]),a(e.d,[1905,0,0,1944,1948,0,1952,0,0,0,0,0,1991,0,1995,2002,2004,0,0,2039,0,0,0,2050,2052,0,0,2090,2094,2098,0,0,0,0,2131,0,2138,2141,0,2146,0,0,0,0,2181,0,2185,0,2188,0,0,0,0,0,0,0,0]),a(e.e,[651,0,0,699,702,746,750,754,0,0,0,0,0,794,799,0,0,807,842,855,888,0,903,934,0,951,979,0,0,0,999,1027,1047,0,1076,1096,1125,1143,1173,1190,1221,0,1239,1287,1336,1366,1384,1408,0,0,0,0,0,0,1432,1456,1477,0,0,0,1505,1525,1553,1573,1602,1621,1650,1669,1699,1702,1718,1747,1749,1766,0,1795,0,1815,1845,1863,1893,1911,1941,1959,1971,0,0,0,1988,2007,2018,2023,2035,2055,2065,0,2070,0,2083,2103,2115,0,0,0,2130,2151,2180,2197,0,2229,2231,0,0,2236,0,0,2242,0,0]),a(e.f,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,69,0,0,0,0,0,0,0,0,0,0,96,0,0,0,0,0,0,0,0,0,107,0,0,0,0,0,114,118,0,0,0,0,0,0,144,0,0,0,0,0,155,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,192,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,216,0,240,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,289,0,0,0,0,0,0,0,0,0,0,0,0,338,0,0,480,0,0,0,528,0,0,0,0,0,576,0,0,0,0,0,0,0,624,0,0,0,0,0,0,0,0,0,673,0,0,0,0,0,0,723,727,0,1915,0,1924,1930,1932,1936,1938,1967,0,0,1975,0,1981,1985,0,2009,2028,0,0,2059,2075,2104,2111,0,2114,2125,2164,2171,2199,0,2204,2213,0,0,2224,0,2230,2234,2245,0,2249,2253,0,2260,2274,0,2280,2287,2291,2299]),a(e.g,[34,67,0,80,0,106,113,125,0,150,0,0,0,172,214,0,218,0,260,0,264,0,288,302,0,0,0,0,341,0,0,0,0,0,0,0,672,680,722,724,0,0,1873,0,0,0,1912,0,0,1917,0,0,0,0,0,0,1926,0,0,0,1931,1933,1937,1939,0,1960,0,1982,0,2008,2011,0,0,0,0,0,0,2024,2031,2056,0,2060,2062,0,2073,0,2076,0,2120,0,2123,0,2155,0,0,0,2163,2170,2177,0,0,2205,2207,2226,2235,2239,0,0,2250,0,2256,0,2259,2268,0,2272,0,2281,0,0,0,2286,2290]),a(e.h,[684,0,734,0,760,0,809,0,845,0,0,894,0,0,1515,1517,0,1563,0,1568,0,1611,1750,1752,1754,1798,1800,0,0,0,1808,1812,0,0,1851,0,1857,0,0,1862,1900,0,0,0,0,1984,2021,2049,2061,2086,2093,2097,2122,2140,2167,0,0,2206,2252,2258,2271,2285]),t.putImageData(n,0,0),this.data.initdate||(this.$page.frontmatter.initdate=r,console.log("首屏"+this.alert(`加载耗时${(r/1e3).toFixed(2)}秒`)))})},watch:{frameItem:function(t,e){requestAnimationFrame(this.frames[t%10])}}},r=(n(198),n(6)),i=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title",onselectstart:"return false;"}},[n("header",{staticClass:"hero"},[n("canvas",{ref:"canvas",attrs:{width:"48",height:"48"},on:{click:function(e){return t.alert("Bottoms up!")},dblclick:function(e){return t.startAnimation()},mouseout:function(e){return t.nextFrame()}}}),t._v(" "),n("Alert",{attrs:{msg:t.msg},on:{setMsg:t.alert}}),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"无题"))]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"导读不见了呢")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()],1),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,a){return n("div",{key:a,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);e.default=i.exports}}]);