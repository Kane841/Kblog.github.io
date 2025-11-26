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
    "revision": "c05618235cd2aa6b990d89934b64b429"
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
    "url": "assets/js/37.e93d2164.js",
    "revision": "92744efc14b1a30ba0e64d357b82f59b"
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
    "url": "assets/js/40.f248a5cc.js",
    "revision": "1337251eef9bdd8f7a4bc01963d3b70a"
  },
  {
    "url": "assets/js/41.6386ee55.js",
    "revision": "a6c1d610444a8230500dddb266420614"
  },
  {
    "url": "assets/js/42.b9feacee.js",
    "revision": "c090273299bffbbf35fa446f4b113af1"
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
    "url": "assets/js/45.d0b2906b.js",
    "revision": "3d972056fae15a7018103a5a84d7b331"
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
    "url": "assets/js/app.35c847f6.js",
    "revision": "b3ccd04f658a582ac8e52b64acf0358a"
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
    "revision": "955521e998276c7f4d15f1f583008b39"
  },
  {
    "url": "categories/java/index.html",
    "revision": "4637f16c485b263b972124dcd1451299"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "da9ef7ba2a523a35acbdf8bd8be331e7"
  },
  {
    "url": "categories/python/index.html",
    "revision": "b4d86088c173a7138b004ffe11762c3e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d53d045fe2a04b1a78c742a3aeefccaa"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "c939a9b7a15e6abcdfa9c07921372a63"
  },
  {
    "url": "css/style.css",
    "revision": "d95da696757426591899ef0875b9f54c"
  },
  {
    "url": "guide/index.html",
    "revision": "98d6b6628df10bd7c41fcaf25d46c15a"
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
    "revision": "600070483ad84b2fa3f2b944107640e9"
  },
  {
    "url": "js/custom.js",
    "revision": "12179015ee092e538ea349b83b44eaae"
  },
  {
    "url": "tag/index.html",
    "revision": "e5419b765b9e203da9b25934ae9f2fb6"
  },
  {
    "url": "tags/Anaconda/index.html",
    "revision": "543c51a83abf8394b317dd329a99bc94"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "eb4795531bb303c1a0bfe6d306ad8d29"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "a64b8e6d6d8c3dff1e854b8d3996826b"
  },
  {
    "url": "tags/js/index.html",
    "revision": "47fe5cc3923a390e6bd4b61bd142589c"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "a423e597a71cbcd285c9dcfcb60984c5"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "29d10d23303ca64fa93f71c49d170fc8"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "1aaf21523e3c1597da5c222586030590"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "e16e37c4d0d778fd266314090afdb4a7"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "9a3882b6b4f2ed69cafa390f0bbf5cb3"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "c4fd15a994f9a59b9361fabba350c0be"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "7df8a67dc781bbca0d08c15a3dcb3109"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "8b45b2c79f53097c6b155aaa04543f06"
  },
  {
    "url": "timeline/index.html",
    "revision": "49052154145c68c581d9a2ec97fcd584"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/Conda/Conda.html",
    "revision": "4b6463122dcc0e7249dcad08e6243691"
  },
  {
    "url": "技术文章/index.html",
    "revision": "1d7c21307c5a5e491b68f2c87298f829"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "c19c3ea3cfe9d23b6ef74fe80b7b87ae"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "a295a7b22b51701d52b3df1086a5f83d"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "2de5fb2137ebcf687f561f0920d754bb"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f20a9712c09da97a0bba3d3e9cbf9034"
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
