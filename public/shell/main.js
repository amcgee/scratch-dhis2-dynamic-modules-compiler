(()=>{var e,r,t,n,a={3773:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof shell)return e();t.l("http://localhost:3000/remoteEntry.js",(t=>{if("undefined"!=typeof shell)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"shell")})).then((()=>shell))}},o={};function i(e){if(o[e])return o[e].exports;var r=o[e]={id:e,loaded:!1,exports:{}};return a[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=a,i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>e+"."+{13:"a22a896b2571dad531f8",38:"60816c707497c513e696",46:"2b27d78b738cbb5f17ae",117:"1b536a7de39b845874b7",126:"bf0fcadbfc22352c6d80",163:"7651bce1e503297fe62c",294:"cb5b982bbe3a7f7e52df",384:"127acb299df3b235298a",394:"e065f1c752e7fab0543b",418:"b0f5072c3500d77273e5",522:"11289938267ffdcf6d8c",700:"08be0a57e48bcfc7b192",762:"6ed079ca6008229d1e5f",865:"fd979084abf40cf0397d",877:"3746592629ad35711289",935:"06a8eb3b67b3ebd59c80",955:"ea1e334f7399593d3790"}[e]+".js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="shell:",i.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var l,s;if(void 0!==a)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var d=u[f];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+a){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.setAttribute("data-webpack",r+a),l.src=t),e[t]=[n];var c=(r,n)=>{l.onerror=l.onload=null,clearTimeout(h);var a=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(n))),r)return r(n)},h=setTimeout(c.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=c.bind(null,l.onerror),l.onload=c.bind(null,l.onload),s&&document.head.appendChild(l)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),t={46:[7458]},n={7458:["default",".",3773]},i.f.remotes=(e,r)=>{i.o(t,e)&&t[e].forEach((e=>{var t=i.R;t||(t=[]);var o=n[e];if(!(t.indexOf(o)>=0)){if(t.push(o),o.p)return r.push(o.p);var l=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+o[1]+'" from '+o[2]),a[e]=()=>{throw r},o.p=0},s=(e,t,n,a,i,s)=>{try{var u=e(t,n);if(!u||!u.then)return i(u,a,s);var f=u.then((e=>i(e,a)),l);if(!s)return f;r.push(o.p=f)}catch(e){l(e)}},u=(e,r,n)=>s(r.get,o[1],t,0,f,n),f=r=>{o.p=1,a[e]=e=>{e.exports=r()}};s(i,o[2],0,0,((e,r,t)=>e?s(i.I,o[0],0,e,u,t):l()),1)}}))},(()=>{i.S={};var e={},r={};i.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];i.o(i.S,t)||(i.S[t]={});var o=i.S[t],l="shell",s=(e,r,t,n)=>{var a=o[e]=o[e]||{},i=a[r];(!i||!i.loaded&&(!n!=!i.eager?n:l>i.from))&&(a[r]={get:t,from:l,eager:!!n})},u=[];switch(t){case"default":s("@dhis2/app-runtime","2.7.0",(()=>Promise.all([i.e(117),i.e(13),i.e(38)]).then((()=>()=>i(9117))))),s("@dhis2/d2-i18n","1.0.6",(()=>i.e(163).then((()=>()=>i(6163))))),s("@dhis2/ui","6.1.7",(()=>Promise.all([i.e(955),i.e(384),i.e(13),i.e(877),i.e(126)]).then((()=>()=>i(5955))))),s("moment","2.29.1",(()=>Promise.all([i.e(762),i.e(700)]).then((()=>()=>i(381))))),s("react-dom","17.0.1",(()=>Promise.all([i.e(935),i.e(522),i.e(418)]).then((()=>()=>i(3935))))),s("react","17.0.1",(()=>Promise.all([i.e(294),i.e(394)]).then((()=>()=>i(7294))))),(e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(r);var r};try{var a=i(3773);if(!a)return;var o=e=>e&&e.init&&e.init(i.S[t],n);if(a.then)return u.push(a.then(o,r));var l=o(a);l&&l.then&&u.push(l.catch(r))}catch(e){r(e)}})()}return u.length?e[t]=Promise.all(u).then((()=>e[t]=1)):e[t]=1}}})(),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var r=i.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var a=r[n],o=(typeof a)[0];if(n>=t.length)return"u"==o;var i=t[n],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},t=e=>{if(1===e.length)return"*";if(0 in e){var r="",n=e[0];r+=0==n?">=":-1==n?"<":1==n?"^":2==n?"~":n>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,r+="u"==(typeof(l=e[o]))[0]?"-":(a>0?".":"")+(a=2,l);return r}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+s()+")":1===l?"("+s()+" || "+s()+")":2===l?i.pop()+" "+i.pop():t(l))}return s();function s(){return i.pop().replace(/^\((.+)\)$/,"$1")}},n=(r,t)=>{if(0 in r){t=e(t);var a=r[0],o=a<0;o&&(a=-a-1);for(var i=0,l=1,s=!0;;l++,i++){var u,f,d=l<r.length?(typeof r[l])[0]:"";if(i>=t.length||"o"==(f=(typeof(u=t[i]))[0]))return!s||("u"==d?l>a&&!o:""==d!=o);if("u"==f){if(!s||"u"!=d)return!1}else if(s)if(d==f)if(l<=a){if(u!=r[l])return!1}else{if(o?u>r[l]:u<r[l])return!1;u!=r[l]&&(s=!1)}else if("s"!=d&&"n"!=d){if(o||l<=a)return!1;s=!1,l--}else{if(l<=a||f<d!=o)return!1;s=!1}else"s"!=d&&"n"!=d&&(s=!1,l--)}}var c=[],h=c.pop.bind(c);for(i=1;i<r.length;i++){var p=r[i];c.push(1==p?h()|h():2==p?h()&h():p?n(p,t):!h())}return!!h()},l=(e,a,o,i)=>{var l=((e,t)=>{var n=e[t];return Object.keys(n).reduce(((e,t)=>!e||!n[e].loaded&&r(e,t)?t:e),0)})(e,o);return n(i,l)||"undefined"!=typeof console&&console.warn&&console.warn(((e,r,n)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+t(n)+")")(o,l,i)),s(e[o][l])},s=e=>(e.loaded=1,e.get()),u=e=>function(r,t,n,a){var o=i.I(r);return o&&o.then?o.then(e.bind(e,r,i.S[r],t,n,a)):e(r,i.S[r],t,n,a)},f=u(((e,r,t,n,a)=>r&&i.o(r,t)?l(r,0,t,n):a())),d=u(((e,t,a,o,l)=>{var u=t&&i.o(t,a)&&((e,t,a)=>{var o=e[t];return(t=Object.keys(o).reduce(((e,t)=>!n(a,t)||e&&!r(e,t)?e:t),0))&&o[t]})(t,a,o);return u?s(u):l()})),c={},h={7865:()=>f("default","react",[1,17,0,1],(()=>Promise.all([i.e(294),i.e(394)]).then((()=>()=>i(7294))))),1704:()=>f("default","react-dom",[1,17,0,1],(()=>Promise.all([i.e(935),i.e(522),i.e(418)]).then((()=>()=>i(3935))))),8013:()=>f("default","react",[1,16,8],(()=>Promise.all([i.e(294),i.e(394)]).then((()=>()=>i(7294))))),3038:()=>f("default","react",[1,16,8,6],(()=>Promise.all([i.e(294),i.e(394)]).then((()=>()=>i(7294))))),4290:()=>f("default","react",[,[1,17],[1,16,8,0],1],(()=>i.e(294).then((()=>()=>i(7294))))),8076:()=>f("default","react-dom",[1,16,8],(()=>Promise.all([i.e(935),i.e(522)]).then((()=>()=>i(3935))))),8988:()=>f("default","react",[,[1,17,0,0],[1,16,8,0],1],(()=>i.e(294).then((()=>()=>i(7294))))),824:()=>d("default","@dhis2/app-runtime",[1,2,7,0],(()=>Promise.all([i.e(117),i.e(38)]).then((()=>()=>i(9117))))),1339:()=>d("default","@dhis2/d2-i18n",[1,1,0,6],(()=>i.e(163).then((()=>()=>i(6163))))),2151:()=>f("default","react",[,[1,17],[1,16],[1,15],1,1],(()=>i.e(294).then((()=>()=>i(7294))))),7522:()=>f("default","react",[4,17,0,1],(()=>i.e(294).then((()=>()=>i(7294)))))},p={13:[8013],38:[3038],46:[1704],126:[824,1339,2151],522:[7522],865:[7865],877:[4290,8076,8988]};i.f.consumes=(e,r)=>{i.o(p,e)&&p[e].forEach((e=>{if(i.o(c,e))return r.push(c[e]);var t=r=>{c[e]=0,a[e]=t=>{delete o[e],t.exports=r()}},n=r=>{delete c[e],a[e]=t=>{throw delete o[e],r}};try{var l=h[e]();l.then?r.push(c[e]=l.then(t).catch(n)):t(l)}catch(e){n(e)}}))}})(),(()=>{var e={179:0};i.f.j=(r,t)=>{var n=i.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(126|13|38|522|865|877)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>{n=e[r]=[t,a]}));t.push(n[2]=a);var o=i.p+i.u(r),l=new Error;i.l(o,(t=>{if(i.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}}),"chunk-"+r,r)}};var r=(r,t)=>{for(var n,a,[o,l,s]=t,u=0,f=[];u<o.length;u++)a=o[u],i.o(e,a)&&e[a]&&f.push(e[a][0]),e[a]=0;for(n in l)i.o(l,n)&&(i.m[n]=l[n]);for(s&&s(i),r&&r(t);f.length;)f.shift()()},t=self.webpackChunkshell=self.webpackChunkshell||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),Promise.all([i.e(865),i.e(46)]).then(i.bind(i,46))})();
//# sourceMappingURL=main.js.map