'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "08c911ea3311151fac4fef223e86cb16",
".git/config": "ebffd2301b4bd8af309bc99797a347fc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d1c98d1b7c849c55a78a66c5ba93aa11",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "80d6062ca8e0c6a250e7c2adb11ee557",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "28302fed53556fd552dc11951b952227",
".git/logs/refs/heads/main": "592e9fd697583d27520c798dec9540a8",
".git/logs/refs/remotes/origin/main": "4f986e48752ae0f4abc23835e73db747",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/01/f47892733126c32678005394782db12f9d219e": "86fdf06baf518d86a9e293d433ba01cc",
".git/objects/02/dca0e0a1ca3b442161c7ffff51d8ac5f2ed6f6": "89c84957ceaa30387f79a2cdec91f165",
".git/objects/0a/004df833548717035eeb6b8b42785dd40ca113": "7efd2ebebdc7196a30ce09e2889f7fb0",
".git/objects/0c/654b1a83abbf3d898b46d2eca073c1b94258e3": "5114fbb756389889651e786f4977f900",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/11/572b45c8c4a0319f889cfb3bb8e194e934ad62": "81b91137274dae8aa6b74e1dce21d111",
".git/objects/13/67a7802b0675c9baca9d4291c7597336cc9922": "38bfbf730f0df8228c9c213a14b5eb87",
".git/objects/15/ea3f7e6e9b0a3b51dce320e011b656dd379f38": "70688af17fc7f170304efe3149d14687",
".git/objects/17/75b7156543d1e268f4dfee99ca5a5f67a73845": "8589c90e0391f6cbae88a292921c8e88",
".git/objects/1c/2df287b51503eb907ad643fde4aaa7f274cb33": "a302ee1d9f4a5eb765b7a73c5ae6fa44",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/707119d553b9da7b8d718013432c5e1829f7e7": "2c0fe15f18573bb5e80d6f0c53cfad85",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/e1fec6c6700b0359cc4389912b1c9687d2b6fa": "4346b9eeb1d6689aa419fbbca5046fa0",
".git/objects/38/9ccbc12f9d6cce46ca15dd06ad8e75c88bd5e1": "bcbcfc00a9bfc843858032b232880a84",
".git/objects/3b/bc1123853d6949bba2ad2d22938f8d5d3938a5": "b357ce0eea84ec4dc5b01511ad75f97b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/6f22810b23ba8ca5ffa12f31b94721a385510b": "83d3e4f51074e3f878637983a9a8e065",
".git/objects/47/bca3f02be776c372325616cee185b6af438964": "dee263272996c36edab41beb98b16eba",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/58/3a76e1cb4559b2ab923bfc76cb0853b010a0db": "0754274dc89cc831525e7cc248854b7a",
".git/objects/6a/fb49e11d50d622e2d717e604a113c41cc6b133": "cfcfadd99f3b51d1dc16309a23048d5c",
".git/objects/6c/362c319dac8a636473c172082327d557b5bb86": "ddb5a4b9a3c061c879f545ea643f2c5c",
".git/objects/6f/af9b1961bb4cb7d1d21dc4398b588729a7e0b3": "040d2ac62bfd02257c863530b98ccb88",
".git/objects/73/71b18b4fac147f679eb7570dfaed2749c6223b": "d3f526cc6c8e28b0112bb38e86dac569",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/11d23a0988e1bc6f25fa8d5f13d0e9e1f68155": "8a4135021e28862b473b64944595d05e",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/5267d2fc23bc4ee77064a722eb3e63afb3d84a": "2e9164c9f51b1d4071870f5b1a6f31cd",
".git/objects/9e/376030e04ffddc2163f0270a8b60a669834f68": "b1919bb22e66b4f45c5e9f9e62ec7101",
".git/objects/9f/a35d269d96141e29294dda703f547b887bb055": "7b8c53baf3ceab5cd855e112ac77ac90",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/95300e0700aaad9111281c2edbfa484a8b8ad3": "3548e102a23a2961beba3fa7cd3c3619",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/1bb82bafa364b4c5c8e878f8410b19c8d7735f": "3d040e4dd6b0a380a3f817758551526e",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d1/e1b0aec3d2d97d9bfa6289dc9960349b3e8d73": "ab32b29a34cb0fd397d2453d36e24de1",
".git/objects/d8/cb34a0daf0e5cac603d1991d1c7d25734771e5": "1fd929772aaf41e1899d297f23cabac1",
".git/objects/d9/12232be872a612c0aa6120fdf925aeda89bb06": "73f7e3bfe5e73d028af6f7fb3662a03c",
".git/objects/dc/0172808822ece1f767247f7091baba625deb6c": "ecf14323e9272b85d2d89903a5832ae1",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/67e0f47bf65a2accdcecadd1eeaf5b726814ae": "f28d95e2f5c8c591cb7fa08bde509709",
".git/objects/e0/02ee39f27a8c0ccadcf9e443e3c065dc3f59fb": "6a95fd3f323ce9a7a98460033d248c09",
".git/objects/e2/df4400d605d23fee8df16ea445f3b4c62ae41c": "088425f911363c7316ef779ef7c7dfa6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/ebd22175eb1a13c526b7021ee734cd102ceead": "f2dbd863d298db4a106f8816213a720b",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ee/43aea989398b8ad0bbfbd763feec15d19cb9d5": "68cc68d3ea4267544f8cefd1e9e8155c",
".git/objects/f0/67f019215bf5912420c412110ae86dc1adfb75": "06352aa0d3b51a333148e4bd86bbfafb",
".git/objects/f0/9ef243b8aebf19f1f88d95d39fccf78421e4e4": "257e53e35bba436d44ef1e1449ce27df",
".git/objects/f1/4ec61e3bffaf0917477987b22d079c12d8bf2e": "f377a1db56cd2ee1282cef56cc8a46cf",
".git/ORIG_HEAD": "5e5c1e2ca999a0e06f1709aec882c0f1",
".git/refs/heads/main": "2e74c897851da857f4150aa5acf55d45",
".git/refs/remotes/origin/main": "2e74c897851da857f4150aa5acf55d45",
"assets/AssetManifest.json": "0ec7b3a362dc3e41c5dcc7e5056d567d",
"assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"assets/assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"assets/assets/icons/facebook.svg": "6b446a380e308ad3d84cf955d088f3be",
"assets/assets/icons/github.svg": "2f55debd98b4040009b3ab545969577d",
"assets/assets/icons/googleplay.svg": "aaa20018388cac24f8852359b02442ad",
"assets/assets/icons/linkedin.svg": "1468abee16a7b01cec56ec79db11348a",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/images/ecommerce.jpg": "cfec479c2b63089b17fd0dce575a8d24",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "1549cdc40a15897cc863d0067cf23075",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/youtube_player_iframe/assets/player.html": "3e1f3fad6eb85b36d87c8cf245306e0e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "cd2d76ebf792fbb7bfa90821c3ea6e90",
"/": "cd2d76ebf792fbb7bfa90821c3ea6e90",
"main.dart.js": "996cce288a4b687c13329334e86e7fe1",
"manifest.json": "6f329b3a398bb282fa75661ee9d0abb8",
"version.json": "1ac57eb0214a8f5216f1da7dd479b33f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
