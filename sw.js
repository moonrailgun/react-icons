if(!self.define){let e,c={};const s=(s,n)=>(s=new URL(s+".js",n).href,c[s]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=c,document.head.appendChild(e)}else e=s,importScripts(s),c()})).then((()=>{let e=c[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(c[i])return;let t={};const r=e=>s(e,i),o={module:{uri:i},exports:t,require:r};c[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-c5ed321c"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/react-icons/_next/static/96i9pQYCBYviUMamU1CNb/_buildManifest.js",revision:"480f9ef24539dc8a5315324683625bdf"},{url:"/react-icons/_next/static/96i9pQYCBYviUMamU1CNb/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/react-icons/_next/static/chunks/0.65f933ac534c8f94.js",revision:"65f933ac534c8f94"},{url:"/react-icons/_next/static/chunks/124.f4f2caac1c1aacd2.js",revision:"f4f2caac1c1aacd2"},{url:"/react-icons/_next/static/chunks/126.210633f7390e92d7.js",revision:"210633f7390e92d7"},{url:"/react-icons/_next/static/chunks/250.3842817ef20dc31b.js",revision:"3842817ef20dc31b"},{url:"/react-icons/_next/static/chunks/253.c5ade48e94c35451.js",revision:"c5ade48e94c35451"},{url:"/react-icons/_next/static/chunks/255.c529ee6d1c0b770c.js",revision:"c529ee6d1c0b770c"},{url:"/react-icons/_next/static/chunks/268.2a4840143bacdde8.js",revision:"2a4840143bacdde8"},{url:"/react-icons/_next/static/chunks/28.071efb9785c19818.js",revision:"071efb9785c19818"},{url:"/react-icons/_next/static/chunks/305-a0252a3586b891ae.js",revision:"a0252a3586b891ae"},{url:"/react-icons/_next/static/chunks/324.9684e49047fb6423.js",revision:"9684e49047fb6423"},{url:"/react-icons/_next/static/chunks/332.070fc5dac1047ea4.js",revision:"070fc5dac1047ea4"},{url:"/react-icons/_next/static/chunks/374.1dee20a893612543.js",revision:"1dee20a893612543"},{url:"/react-icons/_next/static/chunks/432.9e205d337eb614fc.js",revision:"9e205d337eb614fc"},{url:"/react-icons/_next/static/chunks/435.15b35bd05faa0dc6.js",revision:"15b35bd05faa0dc6"},{url:"/react-icons/_next/static/chunks/500.330c1b8791ed0bb9.js",revision:"330c1b8791ed0bb9"},{url:"/react-icons/_next/static/chunks/517.5cff0c3d5d27e3cc.js",revision:"5cff0c3d5d27e3cc"},{url:"/react-icons/_next/static/chunks/526.e6f3f235ca50c0e3.js",revision:"e6f3f235ca50c0e3"},{url:"/react-icons/_next/static/chunks/538.f4b50bb3fed12722.js",revision:"f4b50bb3fed12722"},{url:"/react-icons/_next/static/chunks/581.6ba5ff0452799d33.js",revision:"6ba5ff0452799d33"},{url:"/react-icons/_next/static/chunks/594.2df300199aa87234.js",revision:"2df300199aa87234"},{url:"/react-icons/_next/static/chunks/660.583a1f1395217e36.js",revision:"583a1f1395217e36"},{url:"/react-icons/_next/static/chunks/703.5b7e92b7ae6f3ee2.js",revision:"5b7e92b7ae6f3ee2"},{url:"/react-icons/_next/static/chunks/713.d0f4d41d6cf41723.js",revision:"d0f4d41d6cf41723"},{url:"/react-icons/_next/static/chunks/736-6867619a8725f27a.js",revision:"6867619a8725f27a"},{url:"/react-icons/_next/static/chunks/782.6af3a07622a83ea2.js",revision:"6af3a07622a83ea2"},{url:"/react-icons/_next/static/chunks/807.dad1e1735125be3a.js",revision:"dad1e1735125be3a"},{url:"/react-icons/_next/static/chunks/908.6746ba2b28a916c5.js",revision:"6746ba2b28a916c5"},{url:"/react-icons/_next/static/chunks/920.c82fc7c35f15f5b8.js",revision:"c82fc7c35f15f5b8"},{url:"/react-icons/_next/static/chunks/937-519fec79fbc53136.js",revision:"519fec79fbc53136"},{url:"/react-icons/_next/static/chunks/939.ef1a35a40526df6c.js",revision:"ef1a35a40526df6c"},{url:"/react-icons/_next/static/chunks/952.4a202957a63f8e80.js",revision:"4a202957a63f8e80"},{url:"/react-icons/_next/static/chunks/977.83bb70b8d52ace1e.js",revision:"83bb70b8d52ace1e"},{url:"/react-icons/_next/static/chunks/framework-a42f82fbe29cccf0.js",revision:"a42f82fbe29cccf0"},{url:"/react-icons/_next/static/chunks/main-dc668c95f3dc2753.js",revision:"dc668c95f3dc2753"},{url:"/react-icons/_next/static/chunks/pages/_app-da38c2348106be68.js",revision:"da38c2348106be68"},{url:"/react-icons/_next/static/chunks/pages/_error-ab557634fd13a70c.js",revision:"ab557634fd13a70c"},{url:"/react-icons/_next/static/chunks/pages/icons-ed1ce995404c32da.js",revision:"ed1ce995404c32da"},{url:"/react-icons/_next/static/chunks/pages/index-46b1d1695b176878.js",revision:"46b1d1695b176878"},{url:"/react-icons/_next/static/chunks/pages/search-0af0dc5d2729bae6.js",revision:"0af0dc5d2729bae6"},{url:"/react-icons/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/react-icons/_next/static/chunks/webpack-4d97cac792e73b97.js",revision:"4d97cac792e73b97"},{url:"/react-icons/_next/static/css/85ab309e24e7dbb1.css",revision:"85ab309e24e7dbb1"},{url:"/react-icons/brand-icon.svg",revision:"33455d33822cd86a7b2e7c12be2688f6"},{url:"/react-icons/favicon.ico",revision:"217bba9d985038b5db0f675aadef1058"},{url:"/react-icons/favicon.png",revision:"217bba9d985038b5db0f675aadef1058"},{url:"/react-icons/icons/icon-128x128.png",revision:"61141052122e82b0e4c106b6478053f7"},{url:"/react-icons/icons/icon-144x144.png",revision:"d7041f383ef13f304ce0c8222c768687"},{url:"/react-icons/icons/icon-152x152.png",revision:"e892614a0964881052f52449818355d2"},{url:"/react-icons/icons/icon-192x192.png",revision:"09b80496ac709b0fceef80e2c89a5558"},{url:"/react-icons/icons/icon-384x384.png",revision:"065ce43c918fae1157d9fa6757bc7685"},{url:"/react-icons/icons/icon-512x512.png",revision:"c4642057e4afcfa6776064b99ae43a13"},{url:"/react-icons/icons/icon-72x72.png",revision:"5fedad82387f7b30c250134c5a394688"},{url:"/react-icons/icons/icon-96x96.png",revision:"2c3ea4bbe99ae01388b3dcd30b5d053d"},{url:"/react-icons/manifest.json",revision:"5e1ad0e81ce18198d248b49a2758b3c6"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/react-icons",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:c,event:s,state:n})=>c&&"opaqueredirect"===c.type?new Response(c.body,{status:200,statusText:"OK",headers:c.headers}):c}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const c=e.pathname;return!c.startsWith("/api/auth/")&&!!c.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
