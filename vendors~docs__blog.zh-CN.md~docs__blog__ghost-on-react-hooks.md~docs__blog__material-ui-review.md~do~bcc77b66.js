(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{"2N97":function(e,t,r){"use strict";function n(){const e=r("cDcd");return n=function(){return e},e}function o(e,t){return l(e)||c(e,t)||a(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,t){if(e){if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0)if(u.push(n.value),t&&u.length===t)break}catch(c){i=!0,o=c}finally{try{a||null==r["return"]||r["return"]()}finally{if(i)throw o}}return u}}function l(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const s="data-prefers-color",f="dumi:prefers-color";let d;class p{constructor(){this.color=void 0,this.callbacks=[],this.color=localStorage.getItem(f)||document.documentElement.getAttribute(s),["light","dark"].forEach((e=>{const t=this.getColorMedia(e),r=t=>{t.matches&&"auto"===this.color&&(document.documentElement.setAttribute(s,e),this.applyCallbacks())};t.addEventListener?t.addEventListener("change",r):t.addListener&&t.addListener(r)}))}getColorMedia(e){return window.matchMedia(`(prefers-color-scheme: ${e})`)}isColorMode(e){return this.getColorMedia(e).matches}applyCallbacks(){this.callbacks.forEach((e=>e(this.color)))}listen(e){this.callbacks.push(e)}unlisten(e){this.callbacks.splice(this.callbacks.indexOf(e),1)}set(e){return this.color=e,localStorage.setItem(f,e),this.applyCallbacks(),"auto"===e?document.documentElement.setAttribute(s,this.isColorMode("dark")?"dark":"light"):document.documentElement.setAttribute(s,e),e}}var m=()=>{const e=(0,n().useState)(),t=o(e,2),r=t[0],u=t[1],a=(0,n().useCallback)((e=>{d.set(e)}),[]);return(0,n().useEffect)((()=>(d=d||new p,d.listen(u),u(d.color),()=>d.unlisten(u))),[]),[r,a]};t.default=m},"3QDa":function(e,t,r){"use strict";function n(){const e=r("cDcd");return n=function(){return e},e}function o(){const e=a(r("Zs1V"));return o=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(r("nLCz"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return d(e)||f(e,t)||l(e,t)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){if(e){if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0)if(u.push(n.value),t&&u.length===t)break}catch(c){i=!0,o=c}finally{try{a||null==r["return"]||r["return"]()}finally{if(i)throw o}}return u}}function d(e){if(Array.isArray(e))return e}function p(e,t,r){return Object.entries(o().default[e]).reduce(((e,[n,o])=>(e[n]=o.map((e=>{const n=Object.assign({},e);return Object.keys(e).forEach((e=>{if(/^description(\.|$)/.test(e)){const o=e.match(/^description\.?(.*)$/),u=i(o,2),a=u[1];a&&a!==t||!a&&!r?delete n[e]:n.description=n[e]}})),n})),e)),{})}var m=e=>{const t=(0,n().useContext)(u.default),r=t.locale,o=t.config.locales,a=!o.length||o[0].name===r,c=(0,n().useState)(p(e,r,a)),l=i(c,2),s=l[0],f=l[1];return(0,n().useEffect)((()=>{f(p(e,r,a))}),[e,r,a]),s};t.default=m},"6asN":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("LtsZ"),o=r("zqmC"),u=(0,o.LinkWrapper)(n.NavLink);t.default=u},"6xEa":function(e,t,r){var n,o=function(){var e=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",n={};function o(e,t){if(!n[e]){n[e]={};for(var r=0;r<e.length;r++)n[e][e.charAt(r)]=r}return n[e][t]}var u={compressToBase64:function(e){if(null==e)return"";var r=u._compress(e,6,(function(e){return t.charAt(e)}));switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(e){return null==e?"":""==e?null:u._decompress(e.length,32,(function(r){return o(t,e.charAt(r))}))},compressToUTF16:function(t){return null==t?"":u._compress(t,15,(function(t){return e(t+32)}))+" "},decompressFromUTF16:function(e){return null==e?"":""==e?null:u._decompress(e.length,16384,(function(t){return e.charCodeAt(t)-32}))},compressToUint8Array:function(e){for(var t=u.compress(e),r=new Uint8Array(2*t.length),n=0,o=t.length;n<o;n++){var a=t.charCodeAt(n);r[2*n]=a>>>8,r[2*n+1]=a%256}return r},decompressFromUint8Array:function(t){if(null===t||void 0===t)return u.decompress(t);for(var r=new Array(t.length/2),n=0,o=r.length;n<o;n++)r[n]=256*t[2*n]+t[2*n+1];var a=[];return r.forEach((function(t){a.push(e(t))})),u.decompress(a.join(""))},compressToEncodedURIComponent:function(e){return null==e?"":u._compress(e,6,(function(e){return r.charAt(e)}))},decompressFromEncodedURIComponent:function(e){return null==e?"":""==e?null:(e=e.replace(/ /g,"+"),u._decompress(e.length,32,(function(t){return o(r,e.charAt(t))})))},compress:function(t){return u._compress(t,16,(function(t){return e(t)}))},_compress:function(e,t,r){if(null==e)return"";var n,o,u,a={},i={},c="",l="",s="",f=2,d=3,p=2,m=[],y=0,h=0;for(u=0;u<e.length;u+=1)if(c=e.charAt(u),Object.prototype.hasOwnProperty.call(a,c)||(a[c]=d++,i[c]=!0),l=s+c,Object.prototype.hasOwnProperty.call(a,l))s=l;else{if(Object.prototype.hasOwnProperty.call(i,s)){if(s.charCodeAt(0)<256){for(n=0;n<p;n++)y<<=1,h==t-1?(h=0,m.push(r(y)),y=0):h++;for(o=s.charCodeAt(0),n=0;n<8;n++)y=y<<1|1&o,h==t-1?(h=0,m.push(r(y)),y=0):h++,o>>=1}else{for(o=1,n=0;n<p;n++)y=y<<1|o,h==t-1?(h=0,m.push(r(y)),y=0):h++,o=0;for(o=s.charCodeAt(0),n=0;n<16;n++)y=y<<1|1&o,h==t-1?(h=0,m.push(r(y)),y=0):h++,o>>=1}f--,0==f&&(f=Math.pow(2,p),p++),delete i[s]}else for(o=a[s],n=0;n<p;n++)y=y<<1|1&o,h==t-1?(h=0,m.push(r(y)),y=0):h++,o>>=1;f--,0==f&&(f=Math.pow(2,p),p++),a[l]=d++,s=String(c)}if(""!==s){if(Object.prototype.hasOwnProperty.call(i,s)){if(s.charCodeAt(0)<256){for(n=0;n<p;n++)y<<=1,h==t-1?(h=0,m.push(r(y)),y=0):h++;for(o=s.charCodeAt(0),n=0;n<8;n++)y=y<<1|1&o,h==t-1?(h=0,m.push(r(y)),y=0):h++,o>>=1}else{for(o=1,n=0;n<p;n++)y=y<<1|o,h==t-1?(h=0,m.push(r(y)),y=0):h++,o=0;for(o=s.charCodeAt(0),n=0;n<16;n++)y=y<<1|1&o,h==t-1?(h=0,m.push(r(y)),y=0):h++,o>>=1}f--,0==f&&(f=Math.pow(2,p),p++),delete i[s]}else for(o=a[s],n=0;n<p;n++)y=y<<1|1&o,h==t-1?(h=0,m.push(r(y)),y=0):h++,o>>=1;f--,0==f&&(f=Math.pow(2,p),p++)}for(o=2,n=0;n<p;n++)y=y<<1|1&o,h==t-1?(h=0,m.push(r(y)),y=0):h++,o>>=1;while(1){if(y<<=1,h==t-1){m.push(r(y));break}h++}return m.join("")},decompress:function(e){return null==e?"":""==e?null:u._decompress(e.length,32768,(function(t){return e.charCodeAt(t)}))},_decompress:function(t,r,n){var o,u,a,i,c,l,s,f=[],d=4,p=4,m=3,y="",h=[],b={val:n(0),position:r,index:1};for(o=0;o<3;o+=1)f[o]=o;a=0,c=Math.pow(2,2),l=1;while(l!=c)i=b.val&b.position,b.position>>=1,0==b.position&&(b.position=r,b.val=n(b.index++)),a|=(i>0?1:0)*l,l<<=1;switch(a){case 0:a=0,c=Math.pow(2,8),l=1;while(l!=c)i=b.val&b.position,b.position>>=1,0==b.position&&(b.position=r,b.val=n(b.index++)),a|=(i>0?1:0)*l,l<<=1;s=e(a);break;case 1:a=0,c=Math.pow(2,16),l=1;while(l!=c)i=b.val&b.position,b.position>>=1,0==b.position&&(b.position=r,b.val=n(b.index++)),a|=(i>0?1:0)*l,l<<=1;s=e(a);break;case 2:return""}f[3]=s,u=s,h.push(s);while(1){if(b.index>t)return"";a=0,c=Math.pow(2,m),l=1;while(l!=c)i=b.val&b.position,b.position>>=1,0==b.position&&(b.position=r,b.val=n(b.index++)),a|=(i>0?1:0)*l,l<<=1;switch(s=a){case 0:a=0,c=Math.pow(2,8),l=1;while(l!=c)i=b.val&b.position,b.position>>=1,0==b.position&&(b.position=r,b.val=n(b.index++)),a|=(i>0?1:0)*l,l<<=1;f[p++]=e(a),s=p-1,d--;break;case 1:a=0,c=Math.pow(2,16),l=1;while(l!=c)i=b.val&b.position,b.position>>=1,0==b.position&&(b.position=r,b.val=n(b.index++)),a|=(i>0?1:0)*l,l<<=1;f[p++]=e(a),s=p-1,d--;break;case 2:return h.join("")}if(0==d&&(d=Math.pow(2,m),m++),f[s])y=f[s];else{if(s!==p)return null;y=u+u.charAt(0)}h.push(y),f[p++]=u+y.charAt(0),d--,u=y,0==d&&(d=Math.pow(2,m),m++)}}};return u}();n=function(){return o}.call(t,r,t,e),void 0===n||(e.exports=n)},"7sf/":function(e,t,r){"use strict";function n(){const e=r("cDcd");return n=function(){return e},e}function o(){const e=u(r("6xEa"));return o=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return f(e)||s(e,t)||c(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){if(e){if("string"===typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0)if(u.push(n.value),t&&u.length===t)break}catch(c){i=!0,o=c}finally{try{a||null==r["return"]||r["return"]()}finally{if(i)throw o}}return u}}function f(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const d={"zh-CN":"https://www.typescriptlang.org/zh/play","en-US":"https://www.typescriptlang.org/play"};var p=(e,t)=>{const r=(...e)=>{const t=/^zh|cn$/.test(e[0])?d["zh-CN"]:d["en-US"];return`${t}?skipLibCheck=true&jsx=1#code/${o().default.compressToEncodedURIComponent(e[1])}`},u=(0,n().useState)(r(e,t)),i=a(u,2),c=i[0],l=i[1];return(0,n().useEffect)((()=>{l(r(e,t))}),[e,t]),c};t.default=p},"U/TZ":function(e,t,r){"use strict";function n(){const e=r("cDcd");return n=function(){return e},e}function o(e,t){return l(e)||c(e,t)||a(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,t){if(e){if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0)if(u.push(n.value),t&&u.length===t)break}catch(c){i=!0,o=c}finally{try{a||null==r["return"]||r["return"]()}finally{if(i)throw o}}return u}}function l(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=(e,t)=>{const r=(...e)=>{const t={};return Object.keys(e[1]).forEach((r=>{const n=(r.match(/^(.+)\.([^_]+)$/)||[]).slice(1),u=o(n,2),a=u[0],i=u[1];i&&i!==e[0]||(t[a||r]=e[1][r])})),t},u=(0,n().useState)(r(e,t)),a=o(u,2),i=a[0],c=a[1];return(0,n().useEffect)((()=>{c(r(e,t))}),[e,t]),i};t.default=s},WWur:function(e,t,r){"use strict";const n=(e,{target:t=document.body}={})=>{const r=document.createElement("textarea"),n=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const o=document.getSelection();let u=!1;o.rangeCount>0&&(u=o.getRangeAt(0)),t.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch(i){}return r.remove(),u&&(o.removeAllRanges(),o.addRange(u)),n&&n.focus(),a};e.exports=n,e.exports.default=n},bYHP:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r("cDcd")),o=r("LtsZ");function u(e){return e&&e.__esModule?e:{default:e}}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e){return e.offsetTop+(e.offsetParent?i(e.offsetParent):0)}var c=function e(t){var r,u=(null===(r=t.to.match(/(#.+)$/))||void 0===r?void 0:r[1])||"";return n.default.createElement(o.NavLink,a({},t,{onClick:function(){return e.scrollToAnchor(u.substring(1))},isActive:function(e,t){return u&&decodeURIComponent(t.hash)===u}}))};c.scrollToAnchor=function(e){window.requestAnimationFrame((function(){var t=document.getElementById(decodeURIComponent(e));t&&window.scrollTo(0,i(t)-100)}))};var l=c;t.default=l},beRK:function(e,t,r){"use strict";function n(){const e=r("cDcd");return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.getDemoUrl=t.getDemoRouteName=void 0;var o=u(r("nLCz"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return f(e)||s(e,t)||c(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){if(e){if("string"===typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0)if(u.push(n.value),t&&u.length===t)break}catch(c){i=!0,o=c}finally{try{a||null==r["return"]||r["return"]()}finally{if(i)throw o}}return u}}function f(e){if(Array.isArray(e))return e}function d(){return"BASEMENT"===Object({NODE_ENV:"production"}).PLATFORM_TYPE}const p=()=>d()?"_demos":"~demos";t.getDemoRouteName=p;const m=(e,t)=>{var r;const n=window,o=n.location,u=o.href,i=o.origin,c=u.split(/#\//),l=a(c,2),s=l[0],f=l[1],m="string"===typeof f;return[m?`${s}#`:i,`${(null===(r=window)||void 0===r?void 0:r.routerBase)||""}/`.replace(/\/\/$/,"/"),p(),"/",e,d()?"/index.html":""+(t?".html":"")].join("")};t.getDemoUrl=m;var y=e=>{const t=(0,n().useContext)(o.default),r=t.config,u=(0,n().useState)(""),i=a(u,2),c=i[0],l=i[1];return(0,n().useEffect)((()=>{l(m(e,r.exportStatic&&r.exportStatic.htmlSuffix))}),[e,r]),c};t.default=y},dEAq:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"context",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"NavLink",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"AnchorLink",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"useSearch",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"useCopy",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"useRiddle",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"useMotions",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"useCodeSandbox",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"useLocaleProps",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"useDemoUrl",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"useApiData",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"useTSPlaygroundUrl",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"usePrefersColor",{enumerable:!0,get:function(){return h.default}});var n=b(r("nLCz")),o=b(r("zqmC")),u=b(r("6asN")),a=b(r("bYHP")),i=b(r("t/kZ")),c=b(r("dfPH")),l=b(r("o0kM")),s=b(r("zYLY")),f=b(r("r1Q5")),d=b(r("U/TZ")),p=b(r("beRK")),m=b(r("3QDa")),y=b(r("7sf/")),h=b(r("2N97"));function b(e){return e&&e.__esModule?e:{default:e}}},dfPH:function(e,t,r){"use strict";function n(){const e=r("cDcd");return n=function(){return e},e}function o(){const e=u(r("WWur"));return o=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return f(e)||s(e,t)||c(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){if(e){if("string"===typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0)if(u.push(n.value),t&&u.length===t)break}catch(c){i=!0,o=c}finally{try{a||null==r["return"]||r["return"]()}finally{if(i)throw o}}return u}}function f(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=()=>{const e=(0,n().useState)(),t=a(e,2),r=t[0],u=t[1],i=(0,n().useState)("ready"),c=a(i,2),l=c[0],s=c[1],f=(0,n().useCallback)((e=>{(0,o().default)(e),s("copied"),clearTimeout(r),u(setTimeout((()=>{s("ready")}),2e3))}),[]);return[f,l]};t.default=d},nLCz:function(e,t,r){"use strict";function n(){const e=o(r("cDcd"));return n=function(){return e},e}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n().default.createContext({config:{mode:"doc",title:"",navs:{},menus:{},locales:[],repository:{branch:"master"},theme:{}},meta:{title:""},menu:[],nav:[],base:"",routes:[]});t.default=u},o0kM:function(e,t,r){"use strict";function n(){const e=r("cDcd");return n=function(){return e},e}function o(e,t){return l(e)||c(e,t)||a(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,t){if(e){if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0)if(u.push(n.value),t&&u.length===t)break}catch(c){i=!0,o=c}finally{try{a||null==r["return"]||r["return"]()}finally{if(i)throw o}}return u}}function l(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const s="https://riddle.alibaba-inc.com/riddles/define";let f;const d=()=>{const e=(0,n().useState)(Boolean(f)),t=o(e,2),r=t[0],u=t[1];return(0,n().useEffect)((()=>{if(void 0===f){const e=document.createElement("img");setTimeout((()=>{e.src="",e.remove()}),200),e.onload=()=>{f=!0,u(!0),e.remove()},e.src="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png"}}),[]),r};function p(e){var t;const r=e.dependencies;let n=e.sources._.tsx||e.sources._.jsx;return n=n.replace(/^/,`import ReactDOM from 'react-dom@${(null===(t=r.react)||void 0===t?void 0:t.version)||"latest"}';\n`).replace("export default","const DumiDemo =").concat("\nReactDOM.render(<DumiDemo />, mountNode);"),n=n.replace(/(from ')((?:@[^/'"]+)?[^/'"]+)/g,((e,t,n)=>{let o=`${t}${n}`;return r[n]&&(o+=`@${r[n].version}`),o})),n}var m=e=>{const t=(0,n().useState)(),r=o(t,2),u=r[0],a=r[1],i=d();return(0,n().useEffect)((()=>{if(e&&i&&1===Object.keys(e.sources).length){const t=document.createElement("form"),r=document.createElement("input");return t.method="POST",t.target="_blank",t.style.display="none",t.action=s,t.appendChild(r),t.setAttribute("data-demo",e.title||""),r.name="data",r.value=JSON.stringify({title:e.titlle,js:p(e),css:Object.entries(e.dependencies).filter((([,e])=>e.css)).map((([e,{version:t,css:r}])=>`@import '~${r.replace(new RegExp(`^(${e})`),`$1@${t}`)}';`)).join("\n")}),document.body.appendChild(t),a((()=>()=>t.submit())),()=>t.remove()}}),[e,i]),u};t.default=m},r1Q5:function(e,t,r){"use strict";function n(){const e=r("cDcd");return n=function(){return e},e}function o(){const e=u(r("6xEa"));return o=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return f(e)||s(e,t)||c(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){if(e){if("string"===typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0)if(u.push(n.value),t&&u.length===t)break}catch(c){i=!0,o=c}finally{try{a||null==r["return"]||r["return"]()}finally{if(i)throw o}}return u}}function f(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const d="https://codesandbox.io/api/v1/sandboxes/define";function p(e){return o().default.compressToBase64(JSON.stringify(e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function m(e){const t=document.createElement("span");t.innerHTML=e;const r=t.textContent;return t.remove(),r}function y(e){const t=Boolean(e.sources._.tsx),r=t?".tsx":".jsx",n={},o={},u=Object.values(e.dependencies).filter((e=>e.css)),a=`App${r}`,i=`index${r}`;return Object.entries(e.dependencies).forEach((([e,{version:t}])=>{o[e]=t})),o["react-dom"]||(o["react-dom"]=o.react||"latest"),n["sandbox.config.json"]={content:JSON.stringify({template:t?"create-react-app-typescript":"create-react-app"},null,2)},n["package.json"]={content:JSON.stringify({name:e.title,description:m(e.description)||"An auto-generated demo by dumi",main:i,dependencies:o,devDependencies:t?{typescript:"^3"}:{}},null,2)},n["index.html"]={content:'<div style="margin: 16px;" id="root"></div>'},n[i]={content:`/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n${u.map((({css:e})=>`import '${e}';`)).join("\n")}\nimport App from './App';\n\nReactDOM.render(\n  <App />,\n  document.getElementById('root'),\n);`},Object.entries(e.sources).forEach((([e,{tsx:t,jsx:r,content:o}])=>{n["_"===e?a:e]={content:t||r||o}})),p({files:n})}var h=(e,t=d)=>{const r=(0,n().useState)(),o=a(r,2),u=o[0],i=o[1];return(0,n().useEffect)((()=>{if(e){const r=document.createElement("form"),n=document.createElement("input"),o=y(e);return r.method="POST",r.target="_blank",r.style.display="none",r.action=t,r.appendChild(n),r.setAttribute("data-demo",e.title||""),n.name="parameters",n.value=o,document.body.appendChild(r),i((()=>()=>r.submit())),()=>r.remove()}}),[e]),u};t.default=h},"t/kZ":function(e,t,r){"use strict";function n(){const e=r("cDcd");return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r("dEAq");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){return p(e)||d(e,t)||s(e,t)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0)if(u.push(n.value),t&&u.length===t)break}catch(c){i=!0,o=c}finally{try{a||null==r["return"]||r["return"]()}finally{if(i)throw o}}return u}}function p(e){if(Array.isArray(e))return e}const m=e=>{const t=(0,n().useContext)(o.context),r=t.locale,u=t.routes,a=t.config.locales,i=(0,n().useState)([]),l=c(i,2),s=l[0],f=l[1],d=(0,n().useState)([]),p=c(d,2),m=p[0],y=p[1];return(0,n().useEffect)((()=>{f(u.filter((({title:e,meta:t})=>{const n=(null===t||void 0===t?void 0:t.locale)===r,o=(null===t||void 0===t?void 0:t.locale)===a[0].name||!(null===t||void 0===t?void 0:t.locale)&&(!a.length||r===a[0].name);return e&&(o||n)})).reduce(((e,t)=>{var r,n;const o={title:t.title,path:t.path};return(null===(r=t.meta)||void 0===r?void 0:r.group)&&(o.parent=t.meta.group),e.push(o),e.push(...((null===(n=t.meta)||void 0===n?void 0:n.slugs)||[]).filter((({value:e})=>e!==t.title)).map((e=>({title:e.value,path:`${t.path}#${e.heading}`,parent:o})))),e}),[]))}),[u.length,r]),(0,n().useEffect)((()=>{const t=null===e||void 0===e?void 0:e.trim().toUpperCase();if(t){const e=[];for(let r=0;r<s.length;r+=1)s[r].title.toUpperCase().indexOf(t)>-1&&e.push(s[r]);y(e)}else y([])}),[e,s.length]),m},y=()=>{const e=(0,n().useContext)(o.context),t=e.config.algolia,r=(0,n().useCallback)((e=>{window.docsearch(a({inputSelector:e},t))}),[t]);return r};var h=e=>{const t=(0,n().useContext)(o.context),r=t.config,u=m(e),a=y();return r.algolia?a:u};t.default=h},zYLY:function(e,t,r){"use strict";function n(){const e=r("cDcd");return n=function(){return e},e}function o(e,t){return l(e)||c(e,t)||a(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,t){if(e){if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0)if(u.push(n.value),t&&u.length===t)break}catch(c){i=!0,o=c}finally{try{a||null==r["return"]||r["return"]()}finally{if(i)throw o}}return u}}function l(e){if(Array.isArray(e))return e}function s(e,t,r,n=0){var u;if(n<t.length){const a=t[n],i=()=>s(e,t,r,n+1),c=a.match(/^([^:]+):?(.*)$/)||[],l=o(c,3),f=l[1],d=l[2];switch(f){case"autoplay":i();break;case"click":const t=d.match(/^(global\()?(.+?)\)?$/)||[],r=o(t,3),n=r[1],c=r[2],l=n?document:e;null===(u=l.querySelector(c))||void 0===u||u.click(),i();break;case"timeout":setTimeout(i,Number(d));break;case"capture":window.postMessage({type:"dumi:capture-element",value:d},"*"),i();break;default:console.warn(`[dumi: motion] unknown motion '${a}', skip.`),i()}}else r()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var f=(e,t)=>{const r=(0,n().useState)(!1),u=o(r,2),a=u[0],i=u[1],c=(0,n().useCallback)((()=>{a||(s(t,e,(()=>{i(!1)})),i(!0))}),[e,t,a]);return(0,n().useEffect)((()=>{"autoplay"===e[0]&&t&&c()}),[e,t]),[c,a]};t.default=f},zqmC:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.LinkWrapper=void 0;var n=a(r("cDcd")),o=r("LtsZ"),u=["to"];function a(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,o=l(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function l(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var s=function(e){return function(t){var r=t.to,o=c(t,u),a=/^(\w+:)?\/\//.test(r)||!r,l=n.default.isValidElement(o.children);return n.default.createElement(e,i({to:r||"",component:a?function(){return n.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:r},o.children,r&&!l&&n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},n.default.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),n.default.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))}:void 0},o,a?{}:{onClick:function(){var e;window.scrollTo({top:0});for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];null===(e=o.onClick)||void 0===e||e.apply(this,r)}}))}};t.LinkWrapper=s;var f=s(o.Link);t.default=f}}]);