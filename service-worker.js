/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bd51ab9753df452be287fc538705c16a"
  },
  {
    "url": "assets/css/0.styles.3b996e25.css",
    "revision": "222e21ca5529ffa53e689b13c62e6bde"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.238563f2.js",
    "revision": "8aeb60be7e9282bc24a3729625b0c92b"
  },
  {
    "url": "assets/js/10.d7ebe35d.js",
    "revision": "5dfe007f296b8da5482e4980fb01c1f5"
  },
  {
    "url": "assets/js/14.afe76789.js",
    "revision": "e09a09a2660ddd4d72012b00bd0a7c01"
  },
  {
    "url": "assets/js/15.74eb4110.js",
    "revision": "48bfb5a12680e21a1fad25ca48cd8193"
  },
  {
    "url": "assets/js/16.de458767.js",
    "revision": "c3788709e46cb2fd8bb2278cef85f096"
  },
  {
    "url": "assets/js/17.155ce7ce.js",
    "revision": "9d1141aa4d8e4e157cb5b6c6c34e70e1"
  },
  {
    "url": "assets/js/18.b9ed37ac.js",
    "revision": "dd403fea88baa59c7ba37ee58a90a432"
  },
  {
    "url": "assets/js/19.2c5e5b5b.js",
    "revision": "1a40ce244a05f13a3c6a117eb7b1c59a"
  },
  {
    "url": "assets/js/2.496299c8.js",
    "revision": "0c1a063be4231fa307824490c467ff84"
  },
  {
    "url": "assets/js/20.3cd1b0ff.js",
    "revision": "434173508e64a6d4c463287a8415b629"
  },
  {
    "url": "assets/js/21.866b1ecc.js",
    "revision": "fa24fc220b4e6e6ec51b5024ee7d28dd"
  },
  {
    "url": "assets/js/22.47cd2858.js",
    "revision": "cf05d9f553ff0b801b4f36197bbf921f"
  },
  {
    "url": "assets/js/23.663de762.js",
    "revision": "0d7cabb39987864f16007936cb93965d"
  },
  {
    "url": "assets/js/24.427fa1ee.js",
    "revision": "fa40269ebf941a970bb846bd0ed6db5f"
  },
  {
    "url": "assets/js/25.d199256d.js",
    "revision": "1d5bda1df2d1713c3d5f9f51127afa07"
  },
  {
    "url": "assets/js/26.a97cc8e3.js",
    "revision": "8cb432c3b187c9569dac753fab952617"
  },
  {
    "url": "assets/js/27.d6e4bda7.js",
    "revision": "ca23beb6e037416a5eed3abee4c38e27"
  },
  {
    "url": "assets/js/28.afab28a4.js",
    "revision": "ecad932cd6acf19ff21428b49a157522"
  },
  {
    "url": "assets/js/29.82652176.js",
    "revision": "3d3ec0661469b74d37eb069e54d1d457"
  },
  {
    "url": "assets/js/3.db45bb20.js",
    "revision": "30f8184f5c40bd21f44a9d8159c0be96"
  },
  {
    "url": "assets/js/30.41077d1c.js",
    "revision": "2a6d8b3d4309163ea5afdb41e50ec5a7"
  },
  {
    "url": "assets/js/31.85e1f989.js",
    "revision": "dce81db418327f60201cf7ce3230e65f"
  },
  {
    "url": "assets/js/32.27b087b1.js",
    "revision": "b36d8d42f039a5cf00520995f1ecbf92"
  },
  {
    "url": "assets/js/33.60d4e13f.js",
    "revision": "5c95c258242e71c686d47b6a618ac367"
  },
  {
    "url": "assets/js/34.2807c690.js",
    "revision": "fad4453c4901c84ad02fbf50300bfb5d"
  },
  {
    "url": "assets/js/35.4adad1d4.js",
    "revision": "49989135236678df297b8eb75bd12b14"
  },
  {
    "url": "assets/js/36.a1650bb0.js",
    "revision": "a2a119c91c3fd08537928903dee5a182"
  },
  {
    "url": "assets/js/37.839e6830.js",
    "revision": "100ad88f250ac1d753de44a00138c9da"
  },
  {
    "url": "assets/js/38.da4fcbef.js",
    "revision": "942415fcbfa0509b21bb5b81719b6a41"
  },
  {
    "url": "assets/js/39.4615afa7.js",
    "revision": "373f1f6a456bb1340fb13c66b3320ded"
  },
  {
    "url": "assets/js/4.620edd08.js",
    "revision": "af74010a92e6ecab69dced183c6aba43"
  },
  {
    "url": "assets/js/40.a964914f.js",
    "revision": "75405135bca0c4ac01739af90785239f"
  },
  {
    "url": "assets/js/41.65f39f82.js",
    "revision": "ee3083b385ba9a474ab934f4ace27745"
  },
  {
    "url": "assets/js/42.eed4283c.js",
    "revision": "e9403f6fdd4c62d8c23f3f433e3175f8"
  },
  {
    "url": "assets/js/43.89625fa3.js",
    "revision": "bf99ef98f64f5404db9c1744f5f61ee6"
  },
  {
    "url": "assets/js/44.1eb79d49.js",
    "revision": "6969571f902032ed21a9db7f1015da9e"
  },
  {
    "url": "assets/js/45.d692092e.js",
    "revision": "31bdacaadfb993e49dfbc4b844f65a9b"
  },
  {
    "url": "assets/js/5.914a2687.js",
    "revision": "a4124896c463754c57373439a84a5c51"
  },
  {
    "url": "assets/js/6.901a1f9a.js",
    "revision": "4ec06b0dc2f9ab2886ee9cbb823af737"
  },
  {
    "url": "assets/js/7.fcf5d18e.js",
    "revision": "53314a46987320fd9c9dd99318fe34c1"
  },
  {
    "url": "assets/js/8.c436a761.js",
    "revision": "52444a144a60471c86b2b65743aad9d7"
  },
  {
    "url": "assets/js/9.55bdbe0e.js",
    "revision": "273fff2a2da287caabf56186dbd1d444"
  },
  {
    "url": "assets/js/app.3d8b15bc.js",
    "revision": "b4336aae609a5a285b3e84dd32d15c20"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.8512197f.js",
    "revision": "c769d28bc27ebe3ee83cc3787c31b863"
  },
  {
    "url": "assets/js/vendors~flowchart.63dff3b6.js",
    "revision": "110377f28de45a35cbf89c289fa4f2a5"
  },
  {
    "url": "avatar.jpg",
    "revision": "eb179dbf5469675adc5a459bd8172d06"
  },
  {
    "url": "categories/index.html",
    "revision": "990361b5cf5874995826bdbb57467db3"
  },
  {
    "url": "categories/java/index.html",
    "revision": "a26c8206a6fa7aa7afc824aeedd9a23e"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "33b3531229fb2b414ea82675a586ace1"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c2ba12863486c802762a9e40fa67ccd0"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "850e1344cfa1b859046e12bc4fdba8f7"
  },
  {
    "url": "css/style.css",
    "revision": "d95da696757426591899ef0875b9f54c"
  },
  {
    "url": "guide/index.html",
    "revision": "948eaff917dd55ab81bb91f6fa28be21"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/logok.png",
    "revision": "03c615ea56db9459799928fe3a962e22"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "12354d68904cee0c64eb6c840ed11ec6"
  },
  {
    "url": "js/custom.js",
    "revision": "12179015ee092e538ea349b83b44eaae"
  },
  {
    "url": "tag/index.html",
    "revision": "3d06e76c2266b1214af0a1455d9430c1"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "81b101c308f75526731285c84bed66d8"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "13ecd3a0c020202c3dc8019c91852c9d"
  },
  {
    "url": "tags/js/index.html",
    "revision": "2a4fd64a6c539c098aa3a964ebb4cdf0"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "85b908bb3bf9842f4d0515b3eb827e31"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "97ca6349f0711e042e06e94ecae8273e"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "1a989e5b26f316e3e9d06a8a6a0f33b0"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "c88f7b09099e8c8985943174efda9672"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "3abc924d746de9348ed886773317912d"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "6ad91b89284e9170ce5183e65e645446"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "8a98ae8e07525dda928af6bccdf16d87"
  },
  {
    "url": "timeline/index.html",
    "revision": "a4ca36260632548227d104390f387902"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "8178153310747c6bee8d9aff37dc1260"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "023893b8ab702cdca489dfaa721c046c"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "c8cbed9a8c3715831855bb118b04d67a"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "32c2882384ebc7ca2d48e8f0c93e2476"
  },
  {
    "url": "生活分享/life.html",
    "revision": "72f04fe1364a6290013f29f32d951f96"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
