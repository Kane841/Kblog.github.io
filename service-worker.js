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
    "revision": "82f65a0b35df1944fb493367dc31b515"
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
    "url": "assets/js/1.b2eb5cc0.js",
    "revision": "3492cc5f9e19256fc1f052f82f5436f2"
  },
  {
    "url": "assets/js/10.e0341bd1.js",
    "revision": "95cc8541cac98406e77db4ced701e27d"
  },
  {
    "url": "assets/js/14.3701df1e.js",
    "revision": "60a683e5d7e872c15383f7a7594d410f"
  },
  {
    "url": "assets/js/15.c366a2a0.js",
    "revision": "3d5b5e20e2b8418c11a09969d8e8083d"
  },
  {
    "url": "assets/js/16.b615131c.js",
    "revision": "357613cd105e9ba1ea06747ad9695319"
  },
  {
    "url": "assets/js/17.5bbd56fc.js",
    "revision": "21042cca97359c0920d3025139f4f9c9"
  },
  {
    "url": "assets/js/18.a9c521a0.js",
    "revision": "0263e5328a819446fc15e4c4bb29be92"
  },
  {
    "url": "assets/js/19.5587a39f.js",
    "revision": "d61117fe8b56f02ffc45333b83d73acb"
  },
  {
    "url": "assets/js/2.96b39227.js",
    "revision": "f269ffbf63507dac7c66d4a6245ac201"
  },
  {
    "url": "assets/js/20.7ac62362.js",
    "revision": "319e3465df4930e533dcabbc6682bca9"
  },
  {
    "url": "assets/js/21.6e76f069.js",
    "revision": "c25a97f7e4025a3a6afe99201918fa65"
  },
  {
    "url": "assets/js/22.74753234.js",
    "revision": "1c92e9a19d3f52bcd64f7a53619c239e"
  },
  {
    "url": "assets/js/23.8487d63a.js",
    "revision": "c0f91cc3502a4bbc897214924b764a72"
  },
  {
    "url": "assets/js/24.14d676ba.js",
    "revision": "14efb03c53bb55afd0584c03783e16b4"
  },
  {
    "url": "assets/js/25.0eac1470.js",
    "revision": "74e0432e97098af9861ed76099995685"
  },
  {
    "url": "assets/js/26.67ffba2a.js",
    "revision": "440f946aed175c9f6fd5897c97a1f8ac"
  },
  {
    "url": "assets/js/27.805cf24a.js",
    "revision": "e9a9878e2195bfb1c24a5883aaa38b5e"
  },
  {
    "url": "assets/js/28.5629d7dd.js",
    "revision": "3ae797276969cd6563edfb22bdb78275"
  },
  {
    "url": "assets/js/29.b7a64475.js",
    "revision": "9655cf71ad57f77d4a32324573034cc6"
  },
  {
    "url": "assets/js/3.b4886575.js",
    "revision": "d8d45e591037fcb3a515eb402363fc09"
  },
  {
    "url": "assets/js/30.23cd0126.js",
    "revision": "e4273ee4795b5d8f86c35f403049f75c"
  },
  {
    "url": "assets/js/31.1a61b5b3.js",
    "revision": "a842f234bdc4d8fbca545dd4b8e20d74"
  },
  {
    "url": "assets/js/32.3bd54d0f.js",
    "revision": "9ecc42dcec2fe25874bd790426b6a28d"
  },
  {
    "url": "assets/js/33.3c89553e.js",
    "revision": "213038c6b295ca7b8b118b127e95bf55"
  },
  {
    "url": "assets/js/34.f66b8b7b.js",
    "revision": "2e6d49da55bd1bb580f759dff96fa93e"
  },
  {
    "url": "assets/js/35.5dbad152.js",
    "revision": "f4cf5381fe103262514614a85ee103c4"
  },
  {
    "url": "assets/js/36.3bfd31b1.js",
    "revision": "18a699a2c1d7bcef4f1244ac0ade054c"
  },
  {
    "url": "assets/js/37.5091a190.js",
    "revision": "8c2283a98f8d9187a801a621c3064860"
  },
  {
    "url": "assets/js/38.ecf5db2c.js",
    "revision": "e2458a9ddfdf24abec9e16e2680579c0"
  },
  {
    "url": "assets/js/39.28fa493b.js",
    "revision": "bd3c6dc0197d0e285dbcfe5fffeb4d80"
  },
  {
    "url": "assets/js/4.0f27d608.js",
    "revision": "d8c2fc09c5624f0aab398a801baeb732"
  },
  {
    "url": "assets/js/40.e87268ad.js",
    "revision": "15e94ebfcbd69ae7a38a8ea55890b720"
  },
  {
    "url": "assets/js/41.3c3d39ef.js",
    "revision": "e98a429d01758e20068eae7352179ca5"
  },
  {
    "url": "assets/js/42.15b484fc.js",
    "revision": "c3260ee8853dd16d184442dc719f8dc5"
  },
  {
    "url": "assets/js/43.40b28104.js",
    "revision": "ff461b391fc483282ab7236f41671a9c"
  },
  {
    "url": "assets/js/44.a2351913.js",
    "revision": "3f69fab6417517c24ab5fbf005da7ab8"
  },
  {
    "url": "assets/js/45.c7da697d.js",
    "revision": "5c5b76b1b5814358d19034975870221c"
  },
  {
    "url": "assets/js/46.6b786f43.js",
    "revision": "a24e5288d6f0331f064a08188283ceb6"
  },
  {
    "url": "assets/js/5.f7616e1f.js",
    "revision": "3ac60428c8786bbdea8f28a22599a59b"
  },
  {
    "url": "assets/js/6.102d8387.js",
    "revision": "106165b8fc945f496e7a60a7c8976224"
  },
  {
    "url": "assets/js/7.01828142.js",
    "revision": "aa0bcd9d75169a0efd985b99dafc5ea2"
  },
  {
    "url": "assets/js/8.6ba62ff9.js",
    "revision": "f734e008ed31657adc00512f1976adfd"
  },
  {
    "url": "assets/js/9.dda019fa.js",
    "revision": "6ed2c22c5b5355fd0a3036ea0fe7af91"
  },
  {
    "url": "assets/js/app.89b1b7f0.js",
    "revision": "3d6faf0e6e243ba1944e76285f8f5b64"
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
    "revision": "0ea3ea33409b84944dc51ed73149b442"
  },
  {
    "url": "categories/java/index.html",
    "revision": "c749a8da0c06a623519c8ded027378a2"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "bbb6c90a35608198feca9fc6eb277be0"
  },
  {
    "url": "categories/python/index.html",
    "revision": "40cc85a0054aa84ecd21e08ca149901c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "8cf01fd12c899de067e20560f21fc499"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "a651a4607e1269485cbdb8b8d7f32c1b"
  },
  {
    "url": "css/style.css",
    "revision": "d95da696757426591899ef0875b9f54c"
  },
  {
    "url": "guide/index.html",
    "revision": "b90e70efdc930cf51a72ae6eee3b7d37"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/6.jpg",
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
    "revision": "32b4b46546ce790e9ba61fcf79c23c17"
  },
  {
    "url": "js/custom.js",
    "revision": "12179015ee092e538ea349b83b44eaae"
  },
  {
    "url": "tag/index.html",
    "revision": "7e8f61c9b45be84aa6305af2f0dfbb79"
  },
  {
    "url": "tags/Anaconda/index.html",
    "revision": "f69da6de22de4a9edffaf0b0c5a525de"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "a910e297b4821b581cb2ad9fc86a737c"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "158b32e093d008384cb32b7c72fea911"
  },
  {
    "url": "tags/js/index.html",
    "revision": "95014f57f4238fb7ec666d27e548fc03"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "bf45abf4608fc1200d203fedf831a654"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "fff741657c42c75341d4903213a99b95"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "0cf53abbc513f64c143042f8ddc1047c"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "14f4d065ae479ae153612afaf76ee278"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "686d70d7f8f18cf57b120d1720fcb9e5"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "9e25aa511d6d1080f6b28f8433453d89"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "8f99231741e9879295ecdca38922a4ae"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "18a28b177cc748fc51fe0a693da00d25"
  },
  {
    "url": "timeline/index.html",
    "revision": "6dfedc46bff9dbcd910361955b4f83af"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/Conda/Conda.html",
    "revision": "cc34f540df46c9a591cc0933ad472304"
  },
  {
    "url": "技术文章/index.html",
    "revision": "7cc72587f6a20ec0db9cdb8ccb9d6950"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "99021b1f62d9d2dc9db4eb548f282620"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "2bda1691b74c6c6f716c897a7a958d57"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "6fb0f7481545a3275980f9ea04113664"
  },
  {
    "url": "生活分享/life.html",
    "revision": "9275ae69f36a7fcaf0fabd75c909ae75"
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
