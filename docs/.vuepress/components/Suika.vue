<template>
  <main class="home" aria-labelledby="main-title" onselectstart="return false;">
    <header class="hero">
      <canvas width="48" height="48" 
        @click="alert('Bottoms up!')"
        @dblclick="startAnimation()"
        @mouseout="nextFrame()" ref="canvas">
      </canvas>
        
      <Alert @setMsg='alert' :msg="msg"/>

      <h1 v-if="data.heroText !== null" id="main-title">{{ data.heroText || $title || '无题' }}</h1>

      <p class="description">
        {{ data.tagline || $description || '导读不见了呢' }}
      </p>

      <p class="action" v-if="data.actionText && data.actionLink">
        <NavLink class="action-button" :item="actionLink"/>
      </p>
    </header>

    <div class="features" v-if="data.features && data.features.length">
      <div class="feature" v-for="(feature, index) in data.features" :key="index">
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content class="theme-default-content custom"/>

    <div class="footer" v-if="data.footer">
      {{ data.footer }}
    </div>
  </main>
</template>

<script>
import NavLink from '@vuepress/theme-default/components/NavLink.vue'

export default {
  components: { NavLink },
  data(){
    return {
      msg:'',
      frameSpeed: 0,
      frameItem: 0,
      frames:[]
    }
  },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  },
  methods:{
    alert(m){
      return this.msg = m
    },
    nextFrame(){
      if(!this.frameSpeed) this.frameItem++
    },
    startAnimation(){
      if(this.frameSpeed < 3){
        console.log(`fps ${8*(++this.frameSpeed)}`)
        setInterval(()=>{
          this.frameItem++
        },125)
      }else{
        console.log(`播放速度已达上限`)
      }
    }
  },
  mounted(){
    const ctx = this.$refs.canvas.getContext("2d"),
      cd = {
        j: [140,201,240],
        k: [75,23,70],
        l: [251,137,154],
        m: [139,83,92],
        n: [251,183,145],
        o: [68,136,208],
        p: [253,240,197],
        q: [179,0,34],
        r: [248,36,53],
        s: [239,134,27],
        a: [252,202,53],
        b: [99,151,97],
        c: [102,169,208],
        d: [87,73,101],
        e: [75,29,76],
        f: [231,149,161],
        g: [251,209,216],
        h: [255,255,255],
        i: [169,163,189]
      }
    ctx.fillStyle = `rgb(${cd.j.toString()})`
    ctx.fillRect(0,0,48,40)
    ctx.fillStyle = `rgb(${cd.i.toString()})`
    ctx.fillRect(0,40,48,48)
    const px = ctx.getImageData(0,0,48,48)
    const fillPx = (rgbArray,pxpoints) => {
      let last = -1,p
      for (p of pxpoints) {
        p = p || last + 1
        px.data[p*4] = rgbArray[0]
        px.data[p*4 + 1] = rgbArray[1]
        px.data[p*4 + 2] = rgbArray[2]
        last = p
      }
    }
    const firstFrameInit = time => {
      fillPx(cd.k,[1462])
      fillPx(cd.l,[1318,0,1327,0,1370,0,0,0,1418,0,0,0])
      fillPx(cd.m,[1271,0,0,1276,0,0,0,1415,1467,0,1471,1514,1561])
      fillPx(cd.n,[1129,1177,1181,1223,1231,1469,0,1516,1605,1651,0,1799,1848,1850,1896,1899,1947])
      fillPx(cd.o,[1028,0,1077,1091,1093,1095,1141,0,1187,0,0,1235,1606,0,1614,1653,0,1656,0,1666,1700,0,1715,1748,1757,0,1806,1854,0])
      fillPx(cd.p,[1081,1085,1224,0,0,0,0,0,0,1274,0,1320,0,0,0,0,0,0,1367,0,0,1374,0,1416,0,1422,0,1603,0,1846,0,1849,1894,0,1897,0,1942,0,1945,0,1990,1993,0])
      fillPx(cd.q,[848,0,1458,0,0,0,1508,0,0,0,1662,1709,0])
      fillPx(cd.r,[700,0,747,0,0,795,0,0,0,802,0,0,0,0,843,0,850,0,0,0,0,898,0,0,0,0,948,0,0,997,0,1046,1238,1286,1334,0,1382,0,1430,0,1457,1506,0,1512,0,1554,0,0,0,0,0,0,1658,0,0,0,1708])
      fillPx(cd.s,[897,947,996,1044,0,1133,1137,1179,1185,1232,0,1236,0,1280,1283,0,0,1331,0,0,1379,0,0,1427,0,0,1464,0,0,1475,0,1522,0,0,1570,0,1608,1618,0,1667,1860])
      fillPx(cd.a,[890,0,0,0,936,0,0,0,0,0,0,0,0,0,0,983,0,0,0,0,0,0,0,0,0,0,0,0,1030,0,0,0,0,0,0,0,0,0,0,0,0,0,1078,0,0,1082,0,0,1086,0,0,0,0,1126,0,0,1130,0,0,1134,0,0,1138,1174,0,0,1178,1180,1182,0,0,1186,1234,1281,0,1329,0,1376,0,0,1424,0,0,1463,1472,0,0,1520,0,1572,1616,0,1620,1655,1664,0,1668,1713,1716,0,1764,0,1908,0,0,1958])
      fillPx(cd.b,[1627,0,0,0,0,1670,0,1674,0,0,0,0,0,1696,0,0,1719,0,0,0,0,0,0,0,0,0,0,0,0,1744,0,0,1768,0,0,0,0,0,0,0,0,0,0,0,0,1786,1789,1791,0,0,0,1816,0,0,0,0,0,0,0,0,0,0,0,0,1833,0,1837,0,0,0,0,0,0,0,1864,0,0,0,0,0,0,0,0,1877,0,1881,0,1884,0,0,0,0,0,0,0,0])
      fillPx(cd.c,[814,0,861,0,0,908,0,0,0,956,0,0,0,1003,0,0,0,0,1049,0,0,0,0,0,0,1097,0,0,0,0,0,0,1144,0,0,0,0,0,0,0,1191,0,0,0,0,0,0,0,0,1240,0,0,0,0,0,0,0,1288,0,0,0,0,0,0,0,1337,0,0,0,0,0,0,1385,0,0,0,0,0,0,1433,0,0,0,0,0,0,1481,0,0,0,0,0,0,0,1526,0,0,0,0,0,0,0,0,0,0,1543,1574,0,0,0,0,0,0,0,0,0,0,0,1589,0,0,1622,0,0,0,0,1632,0,1637,0,0,1672,0,1680,0,1685,0,0,1691,0,1733,0,0,1739,0,1781,0,0,1787,0,1829,0,0,1835,0,1879,1883])
      fillPx(cd.d,[1905,0,0,1944,1948,0,1952,0,0,0,0,0,1991,0,1995,2002,2004,0,0,2039,0,0,0,2050,2052,0,0,2090,2094,2098,0,0,0,0,2131,0,2138,2141,0,2146,0,0,0,0,2181,0,2185,0,2188,0,0,0,0,0,0,0,0])
      fillPx(cd.e,[651,0,0,699,702,746,750,754,0,0,0,0,0,794,799,0,0,807,842,855,888,0,903,934,0,951,979,0,0,0,999,1027,1047,0,1076,1096,1125,1143,1173,1190,1221,0,1239,1287,1336,1366,1384,1408,0,0,0,0,0,0,1432,1456,1477,0,0,0,1505,1525,1553,1573,1602,1621,1650,1669,1699,1702,1718,1747,1749,1766,0,1795,0,1815,1845,1863,1893,1911,1941,1959,1971,0,0,0,1988,2007,2018,2023,2035,2055,2065,0,2070,0,2083,2103,2115,0,0,0,2130,2151,2180,2197,0,2229,2231,0,0,2236,0,0,2242,0,0])
      fillPx(cd.f,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,69,0,0,0,0,0,0,0,0,0,0,96,0,0,0,0,0,0,0,0,0,107,0,0,0,0,0,114,118,0,0,0,0,0,0,144,0,0,0,0,0,155,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,192,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,216,0,240,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,289,0,0,0,0,0,0,0,0,0,0,0,0,338,0,0,480,0,0,0,528,0,0,0,0,0,576,0,0,0,0,0,0,0,624,0,0,0,0,0,0,0,0,0,673,0,0,0,0,0,0,723,727,0,1915,0,1924,1930,1932,1936,1938,1967,0,0,1975,0,1981,1985,0,2009,2028,0,0,2059,2075,2104,2111,0,2114,2125,2164,2171,2199,0,2204,2213,0,0,2224,0,2230,2234,2245,0,2249,2253,0,2260,2274,0,2280,2287,2291,2299])
      fillPx(cd.g,[34,67,0,80,0,106,113,125,0,150,0,0,0,172,214,0,218,0,260,0,264,0,288,302,0,0,0,0,341,0,0,0,0,0,0,0,672,680,722,724,0,0,1873,0,0,0,1912,0,0,1917,0,0,0,0,0,0,1926,0,0,0,1931,1933,1937,1939,0,1960,0,1982,0,2008,2011,0,0,0,0,0,0,2024,2031,2056,0,2060,2062,0,2073,0,2076,0,2120,0,2123,0,2155,0,0,0,2163,2170,2177,0,0,2205,2207,2226,2235,2239,0,0,2250,0,2256,0,2259,2268,0,2272,0,2281,0,0,0,2286,2290])
      fillPx(cd.h,[684,0,734,0,760,0,809,0,845,0,0,894,0,0,1515,1517,0,1563,0,1568,0,1611,1750,1752,1754,1798,1800,0,0,0,1808,1812,0,0,1851,0,1857,0,0,1862,1900,0,0,0,0,1984,2021,2049,2061,2086,2093,2097,2122,2140,2167,0,0,2206,2252,2258,2271,2285])
      ctx.putImageData(px,0,0)
      if(!this.data.initdate){
        this.$page.frontmatter.initdate = time
        console.log('首屏'+this.alert(`加载耗时${(time/1000).toFixed(2)}秒`))
      }
    }
    this.frames[1] = () => {
      fillPx(cd.f,[483,534,584])
      fillPx(cd.h,[682,0,708,0,1455,1504,1751,1753,1755])
      fillPx(cd.j,[684,0,734,0,760,0,809,0,1754])
      fillPx(cd.e,[1843,1892,1894,0])
      fillPx(cd.n,[1847])
      fillPx(cd.p,[1796,0,0,0,1844,0])
      fillPx(cd.d,[1942,0])
      fillPx(cd.i,[1990,2039])
      ctx.putImageData(px,0,0)
    }
    this.frames[2] = () => {
      fillPx(cd.g,[35,127,198,0])
      fillPx(cd.f,[80,125,150,0,214,262,302,585,634])
      fillPx(cd.j,[338,682,0,1455,1504])
      fillPx(cd.h,[705,0,0,1452,0,0])
      ctx.putImageData(px,0,0)
    }
    this.frames[3] = () => {
      fillPx(cd.h,[654,0,703,0,1451,1497,0,0,1630,1754,1798])
      fillPx(cd.j,[585,706,0,0,0,754,1453,0,1751,1753,1755,1797])
      fillPx(cd.f,[680])
      fillPx(cd.g,[681])
      fillPx(cd.e,[802,1796,1845])
      fillPx(cd.n,[1799])
      fillPx(cd.b,[1843,0,1892])
      fillPx(cd.p,[1847,1894,0,1942,0,1990])
      fillPx(cd.d,[2038,0])
      ctx.putImageData(px,0,0)
    }
    this.frames[4] = () => {
      fillPx(cd.j,[35,127,262,655,703,0,0,746,1408,0,0,0,0,0,0,1451,0,1499,1616,1664,1713])
      fillPx(cd.g,[80,125,150,0,214,302,673,723,727])
      fillPx(cd.f,[198,0,338])
      fillPx(cd.h,[650,0,697,0,1496,1570,1675,0,1799])
      fillPx(cd.e,[654,747,1385,1415,1430,1433,1457,0,0,0,0,1481,1504,1510,1601,1698,1844])
      fillPx(cd.r,[1384,1432,1505,1602,0,0,0,0,0])
      fillPx(cd.c,[1478])
      fillPx(cd.q,[1506,0,1556,0,0,0])
      fillPx(cd.a,[1511,0,1522,1618,1666,1714])
      fillPx(cd.s,[1513])
      fillPx(cd.o,[1520,1568])
      fillPx(cd.b,[1630])
      fillPx(cd.p,[1651,0,1991])
      fillPx(cd.n,[1653,1699,0])
      fillPx(cd.d,[1990])
      ctx.putImageData(px,0,0)
    }
    this.frames[5] = () => {
      fillPx(cd.j,[483,534,584,634,650,0,681,698,1496,0,0,1665,1714])
      fillPx(cd.f,[673,723,727])
      fillPx(cd.g,[680])
      fillPx(cd.h,[696,743,0,1444,0,0,1493,0,0,1522,1672,0])
      fillPx(cd.a,[1570,1619,1667])
      fillPx(cd.b,[1675,0])
      fillPx(cd.p,[1896,1944,1992])
      fillPx(cd.n,[1900])
      fillPx(cd.d,[1947,1994])
      ctx.putImageData(px,0,0)
    }
    this.frames[6] = () => {
      fillPx(cd.f,[483,534,584,634])
      fillPx(cd.j,[696,0,743,0,1445,0,1493,0,0])
      fillPx(cd.h,[788,0,0,0,1393,0,1442,0,1622,1755,1804,1900])
      fillPx(cd.p,[1370,0,0,0,1418,1800,0,0,1848,1850])
      fillPx(cd.s,[1512])
      fillPx(cd.c,[1672,0])
      fillPx(cd.m,[1799,1847])
      fillPx(cd.p,[1851])
      fillPx(cd.n,[1895,1898,1943,0])
      fillPx(cd.d,[1899,1945,0,1992,0])
      ctx.putImageData(px,0,0)
    }
    this.frames[7] = () => {
      fillPx(cd.g,[35,127,198,0])
      fillPx(cd.f,[80,125,150,0,214,262,302])
      fillPx(cd.j,[338,790,0,1393,0,1442,0,0,1504,1601])
      fillPx(cd.h,[786,0,835,0,1344])
      fillPx(cd.e,[1408,0,0,0,0,0,0,1505,1602,1699])
      fillPx(cd.m,[1415])
      fillPx(cd.p,[1419,1421,1603,0])
      fillPx(cd.r,[1457,1506,0,1512,0,1556,0,0,0])
      fillPx(cd.q,[1458,0,0,0,1510,0])
      fillPx(cd.n,[1605,1651,0])
      fillPx(cd.o,[1606,0,1653,1700])
      fillPx(cd.c,[1622,1698,1844])
      ctx.putImageData(px,0,0)
    }
    this.frames[8] = () => {
      fillPx(cd.k,[651,746,1384,1478])
      fillPx(cd.j,[654,789,835,0,1344,1755,1804])
      fillPx(cd.f,[680])
      fillPx(cd.g,[681])
      fillPx(cd.h,[737,0,813,0,1570,1799,0,0,0,1851])
      fillPx(cd.r,[747,1430])
      fillPx(cd.c,[1385])
      fillPx(cd.l,[1418,0,1421])
      fillPx(cd.a,[1522,1665,1714])
      fillPx(cd.s,[1619,1667])
      fillPx(cd.p,[1847,1895,1898,1943,0,0,0,1992,0])
      fillPx(cd.n,[1848,1850,1899,0])
      ctx.putImageData(px,0,0)
    }
    this.frames[9] = () => {
      fillPx(cd.j,[35,127,262,534,722,737,0,786,0,0,813,1714])
      fillPx(cd.g,[80,125,150,0,214,302,673,723,727])
      fillPx(cd.f,[198,0,338])
      fillPx(cd.h,[734,0,0,783,0,0,859,0,1568,1900])
      fillPx(cd.e,[754,1432])
      fillPx(cd.r,[802])
      fillPx(cd.c,[814,1433,1481])
      fillPx(cd.l,[1370,0,0,0])
      fillPx(cd.a,[1520,1616,1664])
      fillPx(cd.s,[1522,1570,1618])
      fillPx(cd.o,[1666])
      fillPx(cd.n,[1896,1947])
      fillPx(cd.d,[1944,1992])
      fillPx(cd.p,[1994])
      ctx.putImageData(px,0,0)
    }
    this.frames[0] = () => {
      fillPx(cd.j,[584,634,681,736,783,0,0,859,0])
      fillPx(cd.f,[673,723,727])
      fillPx(cd.g,[680,722])
      fillPx(cd.h,[684,0,760,0,809,0])
      fillPx(cd.a,[1713])
      fillPx(cd.n,[1799])
      fillPx(cd.p,[1990])
      fillPx(cd.d,[1991])
      fillPx(cd.i,[2038])
      ctx.putImageData(px,0,0)
    }
    requestAnimationFrame(firstFrameInit)
  },
  watch:{
    'frameItem': function(newItem, oldItem){
      requestAnimationFrame(this.frames[newItem%10])
    },
  }
}
</script>

<style lang="stylus">
.home
  padding $navbarHeight 2rem 0
  max-width 960px
  margin 0 auto
  display block
  .hero
    text-align center
    img
      display none
    canvas
      max-width: 100%
      height 24rem
      display block
      margin 3rem auto 1.5rem
      image-rendering pixelated
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      canvas
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding .6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
