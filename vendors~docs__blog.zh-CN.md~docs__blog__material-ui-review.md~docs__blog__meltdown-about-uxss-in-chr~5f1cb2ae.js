(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{"2N97":function(t,e,n){"use strict";function r(){const t=n("cDcd");return r=function(){return t},t}function o(t,e){return l(t)||c(t,e)||u(t,e)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,e){if(t){if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),e&&i.length===e)break}catch(c){a=!0,o=c}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function l(t){if(Array.isArray(t))return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;const s="data-prefers-color",f="dumi:prefers-color";let d;class p{constructor(){this.color=void 0,this.callbacks=[],this.color=localStorage.getItem(f)||document.documentElement.getAttribute(s),["light","dark"].forEach((t=>{const e=this.getColorMedia(t),n=e=>{e.matches&&"auto"===this.color&&(document.documentElement.setAttribute(s,t),this.applyCallbacks())};e.addEventListener?e.addEventListener("change",n):e.addListener&&e.addListener(n)}))}getColorMedia(t){return window.matchMedia(`(prefers-color-scheme: ${t})`)}isColorMode(t){return this.getColorMedia(t).matches}applyCallbacks(){this.callbacks.forEach((t=>t(this.color)))}listen(t){this.callbacks.push(t)}unlisten(t){this.callbacks.splice(this.callbacks.indexOf(t),1)}set(t){return this.color=t,localStorage.setItem(f,t),this.applyCallbacks(),"auto"===t?document.documentElement.setAttribute(s,this.isColorMode("dark")?"dark":"light"):document.documentElement.setAttribute(s,t),t}}var m=()=>{const t=(0,r().useState)(),e=o(t,2),n=e[0],i=e[1],u=(0,r().useCallback)((t=>{d.set(t)}),[]);return(0,r().useEffect)((()=>(d=d||new p,d.listen(i),i(d.color),()=>d.unlisten(i))),[]),[n,u]};e.default=m},"3QDa":function(t,e,n){"use strict";function r(){const t=n("cDcd");return r=function(){return t},t}function o(){const t=u(n("Zs1V"));return o=function(){return t},t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n("nLCz"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t,e){return d(t)||f(t,e)||l(t,e)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){if(t){if("string"===typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),e&&i.length===e)break}catch(c){a=!0,o=c}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function d(t){if(Array.isArray(t))return t}function p(t,e,n){return Object.entries(o().default[t]).reduce(((t,[r,o])=>(t[r]=o.map((t=>{const r=Object.assign({},t);return Object.keys(t).forEach((t=>{if(/^description(\.|$)/.test(t)){const o=t.match(/^description\.?(.*)$/),i=a(o,2),u=i[1];u&&u!==e||!u&&!n?delete r[t]:r.description=r[t]}})),r})),t)),{})}var m=t=>{const e=(0,r().useContext)(i.default),n=e.locale,o=e.config.locales,u=!o.length||o[0].name===n,c=(0,r().useState)(p(t,n,u)),l=a(c,2),s=l[0],f=l[1];return(0,r().useEffect)((()=>{f(p(t,n,u))}),[t,n,u]),s};e.default=m},"6asN":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("LtsZ"),o=n("zqmC"),i=(0,o.LinkWrapper)(r.NavLink);e.default=i},"6xEa":function(t,e,n){var r,o=function(){var t=String.fromCharCode,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",r={};function o(t,e){if(!r[t]){r[t]={};for(var n=0;n<t.length;n++)r[t][t.charAt(n)]=n}return r[t][e]}var i={compressToBase64:function(t){if(null==t)return"";var n=i._compress(t,6,(function(t){return e.charAt(t)}));switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(t){return null==t?"":""==t?null:i._decompress(t.length,32,(function(n){return o(e,t.charAt(n))}))},compressToUTF16:function(e){return null==e?"":i._compress(e,15,(function(e){return t(e+32)}))+" "},decompressFromUTF16:function(t){return null==t?"":""==t?null:i._decompress(t.length,16384,(function(e){return t.charCodeAt(e)-32}))},compressToUint8Array:function(t){for(var e=i.compress(t),n=new Uint8Array(2*e.length),r=0,o=e.length;r<o;r++){var u=e.charCodeAt(r);n[2*r]=u>>>8,n[2*r+1]=u%256}return n},decompressFromUint8Array:function(e){if(null===e||void 0===e)return i.decompress(e);for(var n=new Array(e.length/2),r=0,o=n.length;r<o;r++)n[r]=256*e[2*r]+e[2*r+1];var u=[];return n.forEach((function(e){u.push(t(e))})),i.decompress(u.join(""))},compressToEncodedURIComponent:function(t){return null==t?"":i._compress(t,6,(function(t){return n.charAt(t)}))},decompressFromEncodedURIComponent:function(t){return null==t?"":""==t?null:(t=t.replace(/ /g,"+"),i._decompress(t.length,32,(function(e){return o(n,t.charAt(e))})))},compress:function(e){return i._compress(e,16,(function(e){return t(e)}))},_compress:function(t,e,n){if(null==t)return"";var r,o,i,u={},a={},c="",l="",s="",f=2,d=3,p=2,m=[],y=0,h=0;for(i=0;i<t.length;i+=1)if(c=t.charAt(i),Object.prototype.hasOwnProperty.call(u,c)||(u[c]=d++,a[c]=!0),l=s+c,Object.prototype.hasOwnProperty.call(u,l))s=l;else{if(Object.prototype.hasOwnProperty.call(a,s)){if(s.charCodeAt(0)<256){for(r=0;r<p;r++)y<<=1,h==e-1?(h=0,m.push(n(y)),y=0):h++;for(o=s.charCodeAt(0),r=0;r<8;r++)y=y<<1|1&o,h==e-1?(h=0,m.push(n(y)),y=0):h++,o>>=1}else{for(o=1,r=0;r<p;r++)y=y<<1|o,h==e-1?(h=0,m.push(n(y)),y=0):h++,o=0;for(o=s.charCodeAt(0),r=0;r<16;r++)y=y<<1|1&o,h==e-1?(h=0,m.push(n(y)),y=0):h++,o>>=1}f--,0==f&&(f=Math.pow(2,p),p++),delete a[s]}else for(o=u[s],r=0;r<p;r++)y=y<<1|1&o,h==e-1?(h=0,m.push(n(y)),y=0):h++,o>>=1;f--,0==f&&(f=Math.pow(2,p),p++),u[l]=d++,s=String(c)}if(""!==s){if(Object.prototype.hasOwnProperty.call(a,s)){if(s.charCodeAt(0)<256){for(r=0;r<p;r++)y<<=1,h==e-1?(h=0,m.push(n(y)),y=0):h++;for(o=s.charCodeAt(0),r=0;r<8;r++)y=y<<1|1&o,h==e-1?(h=0,m.push(n(y)),y=0):h++,o>>=1}else{for(o=1,r=0;r<p;r++)y=y<<1|o,h==e-1?(h=0,m.push(n(y)),y=0):h++,o=0;for(o=s.charCodeAt(0),r=0;r<16;r++)y=y<<1|1&o,h==e-1?(h=0,m.push(n(y)),y=0):h++,o>>=1}f--,0==f&&(f=Math.pow(2,p),p++),delete a[s]}else for(o=u[s],r=0;r<p;r++)y=y<<1|1&o,h==e-1?(h=0,m.push(n(y)),y=0):h++,o>>=1;f--,0==f&&(f=Math.pow(2,p),p++)}for(o=2,r=0;r<p;r++)y=y<<1|1&o,h==e-1?(h=0,m.push(n(y)),y=0):h++,o>>=1;while(1){if(y<<=1,h==e-1){m.push(n(y));break}h++}return m.join("")},decompress:function(t){return null==t?"":""==t?null:i._decompress(t.length,32768,(function(e){return t.charCodeAt(e)}))},_decompress:function(e,n,r){var o,i,u,a,c,l,s,f=[],d=4,p=4,m=3,y="",h=[],v={val:r(0),position:n,index:1};for(o=0;o<3;o+=1)f[o]=o;u=0,c=Math.pow(2,2),l=1;while(l!=c)a=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),u|=(a>0?1:0)*l,l<<=1;switch(u){case 0:u=0,c=Math.pow(2,8),l=1;while(l!=c)a=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),u|=(a>0?1:0)*l,l<<=1;s=t(u);break;case 1:u=0,c=Math.pow(2,16),l=1;while(l!=c)a=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),u|=(a>0?1:0)*l,l<<=1;s=t(u);break;case 2:return""}f[3]=s,i=s,h.push(s);while(1){if(v.index>e)return"";u=0,c=Math.pow(2,m),l=1;while(l!=c)a=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),u|=(a>0?1:0)*l,l<<=1;switch(s=u){case 0:u=0,c=Math.pow(2,8),l=1;while(l!=c)a=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),u|=(a>0?1:0)*l,l<<=1;f[p++]=t(u),s=p-1,d--;break;case 1:u=0,c=Math.pow(2,16),l=1;while(l!=c)a=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),u|=(a>0?1:0)*l,l<<=1;f[p++]=t(u),s=p-1,d--;break;case 2:return h.join("")}if(0==d&&(d=Math.pow(2,m),m++),f[s])y=f[s];else{if(s!==p)return null;y=i+i.charAt(0)}h.push(y),f[p++]=i+y.charAt(0),d--,i=y,0==d&&(d=Math.pow(2,m),m++)}}};return i}();r=function(){return o}.call(e,n,e,t),void 0===r||(t.exports=r)},"7sf/":function(t,e,n){"use strict";function r(){const t=n("cDcd");return r=function(){return t},t}function o(){const t=i(n("6xEa"));return o=function(){return t},t}function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e){return f(t)||s(t,e)||c(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){if(t){if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),e&&i.length===e)break}catch(c){a=!0,o=c}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function f(t){if(Array.isArray(t))return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;const d={"zh-CN":"https://www.typescriptlang.org/zh/play","en-US":"https://www.typescriptlang.org/play"};var p=(t,e)=>{const n=(...t)=>{const e=/^zh|cn$/.test(t[0])?d["zh-CN"]:d["en-US"];return`${e}?skipLibCheck=true&jsx=1#code/${o().default.compressToEncodedURIComponent(t[1])}`},i=(0,r().useState)(n(t,e)),a=u(i,2),c=a[0],l=a[1];return(0,r().useEffect)((()=>{l(n(t,e))}),[t,e]),c};e.default=p},"U/TZ":function(t,e,n){"use strict";function r(){const t=n("cDcd");return r=function(){return t},t}function o(t,e){return l(t)||c(t,e)||u(t,e)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,e){if(t){if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),e&&i.length===e)break}catch(c){a=!0,o=c}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function l(t){if(Array.isArray(t))return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=(t,e)=>{const n=(...t)=>{const e={};return Object.keys(t[1]).forEach((n=>{const r=(n.match(/^(.+)\.([^_]+)$/)||[]).slice(1),i=o(r,2),u=i[0],a=i[1];a&&a!==t[0]||(e[u||n]=t[1][n])})),e},i=(0,r().useState)(n(t,e)),u=o(i,2),a=u[0],c=u[1];return(0,r().useEffect)((()=>{c(n(t,e))}),[t,e]),a};e.default=s},WWur:function(t,e,n){"use strict";const r=(t,{target:e=document.body}={})=>{const n=document.createElement("textarea"),r=document.activeElement;n.value=t,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let i=!1;o.rangeCount>0&&(i=o.getRangeAt(0)),e.append(n),n.select(),n.selectionStart=0,n.selectionEnd=t.length;let u=!1;try{u=document.execCommand("copy")}catch(a){}return n.remove(),i&&(o.removeAllRanges(),o.addRange(i)),r&&r.focus(),u};t.exports=r,t.exports.default=r},bYHP:function(t,e,n){"use strict";function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=l(n("cDcd")),i=n("LtsZ"),u=a(n("hKI/"));function a(t){return t&&t.__esModule?t:{default:t}}function c(t){if("function"!==typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(c=function(t){return t?n:e})(t)}function l(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!==typeof t)return{default:t};var n=c(e);if(n&&n.has(t))return n.get(t);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if("default"!==u&&Object.prototype.hasOwnProperty.call(t,u)){var a=i?Object.getOwnPropertyDescriptor(t,u):null;a&&(a.get||a.set)?Object.defineProperty(o,u,a):o[u]=t[u]}return o.default=t,n&&n.set(t,o),o}function s(){return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s.apply(this,arguments)}function f(t,e){return h(t)||y(t,e)||p(t,e)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(t,e){if(t){if("string"===typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function y(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),e&&i.length===e)break}catch(c){a=!0,o=c}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function h(t){if(Array.isArray(t))return t}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function g(t,e,n){return e&&b(t.prototype,e),n&&b(t,n),t}var w=new(function(){function t(){v(this,t),this.anchors=[],this.listeners=[],this.listener=void 0,this.listener=(0,u.default)(this._matchActiveAnchor.bind(this),200)}return g(t,[{key:"_matchActiveAnchor",value:function(){var t=this,e=this.anchors.findIndex((function(e,n){return e.getBoundingClientRect().top>128||n===t.anchors.length-1})),n=this.anchors[Math.max(0,e-1)],r=n.parentElement.id;this.listeners.forEach((function(t){return t(r)}))}},{key:"watch",value:function(t){0===this.anchors.length&&"undefined"!==typeof window&&window.addEventListener("scroll",this.listener),this.anchors.push(t),this.listener()}},{key:"unwatch",value:function(t){this.anchors.splice(this.anchors.findIndex((function(e){return e===t})),1),0===this.anchors.length&&"undefined"!==typeof window&&window.removeEventListener("scroll",this.listener)}},{key:"listen",value:function(t){this.listeners.push(t)}},{key:"unlisten",value:function(t){this.listeners.splice(this.listeners.findIndex((function(e){return e===t})),1)}}]),t}());function O(t){return t.offsetTop+(t.offsetParent?O(t.offsetParent):0)}var j=function t(e){var n,r=(null===(n=e.to.match(/(#[^&?]*)/))||void 0===n?void 0:n[1])||"",u=(0,o.useRef)(null),a=(0,o.useState)(!1),c=f(a,2),l=c[0],d=c[1];return(0,o.useEffect)((function(){var t,e;if(["H1","H2","H3"].includes(null===(t=u.current)||void 0===t||null===(e=t.parentElement)||void 0===e?void 0:e.tagName)&&u.current.parentElement.id){var n=u.current;return w.watch(n),function(){w.unwatch(n)}}var o=function(t){d(r==="#".concat(t))};return w.listen(o),function(){return w.unlisten(o)}}),[]),o.default.createElement(i.NavLink,s({},e,{ref:u,onClick:function(){return t.scrollToAnchor(r.substring(1))},isActive:function(){return l}}))};j.scrollToAnchor=function(t){window.requestAnimationFrame((function(){var e=document.getElementById(decodeURIComponent(t));e&&window.scrollTo(0,O(e)-100)}))};var A=j;e.default=A},beRK:function(t,e,n){"use strict";function r(){const t=n("cDcd");return r=function(){return t},t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.getDemoUrl=e.getDemoRouteName=void 0;var o=i(n("nLCz"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e){return f(t)||s(t,e)||c(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){if(t){if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),e&&i.length===e)break}catch(c){a=!0,o=c}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function f(t){if(Array.isArray(t))return t}function d(){return"BASEMENT"===Object({NODE_ENV:"production"}).PLATFORM_TYPE}const p=()=>d()?"_demos":"~demos";e.getDemoRouteName=p;const m=(t,e)=>{var n;const r=window,o=r.location,i=o.href,a=o.origin,c=i.split(/#\//),l=u(c,2),s=l[0],f=l[1],m="string"===typeof f;return[m?`${s}#`:a,`${(null===(n=window)||void 0===n?void 0:n.routerBase)||""}/`.replace(/\/\/$/,"/"),p(),"/",t,d()?"/index.html":""+(e?".html":"")].join("")};e.getDemoUrl=m;var y=t=>{const e=(0,r().useContext)(o.default),n=e.config,i=(0,r().useState)(""),a=u(i,2),c=a[0],l=a[1];return(0,r().useEffect)((()=>{l(m(t,n.exportStatic&&n.exportStatic.htmlSuffix))}),[t,n]),c};e.default=y},dEAq:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"context",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"Link",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"NavLink",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"AnchorLink",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e,"useSearch",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"useCopy",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e,"useRiddle",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"useMotions",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e,"useCodeSandbox",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(e,"useLocaleProps",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(e,"useDemoUrl",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(e,"useApiData",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(e,"useTSPlaygroundUrl",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(e,"usePrefersColor",{enumerable:!0,get:function(){return h.default}});var r=v(n("nLCz")),o=v(n("zqmC")),i=v(n("6asN")),u=v(n("bYHP")),a=v(n("t/kZ")),c=v(n("dfPH")),l=v(n("o0kM")),s=v(n("zYLY")),f=v(n("r1Q5")),d=v(n("U/TZ")),p=v(n("beRK")),m=v(n("3QDa")),y=v(n("7sf/")),h=v(n("2N97"));function v(t){return t&&t.__esModule?t:{default:t}}},dfPH:function(t,e,n){"use strict";function r(){const t=n("cDcd");return r=function(){return t},t}function o(){const t=i(n("WWur"));return o=function(){return t},t}function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e){return f(t)||s(t,e)||c(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){if(t){if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),e&&i.length===e)break}catch(c){a=!0,o=c}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function f(t){if(Array.isArray(t))return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var d=()=>{const t=(0,r().useState)(),e=u(t,2),n=e[0],i=e[1],a=(0,r().useState)("ready"),c=u(a,2),l=c[0],s=c[1],f=(0,r().useCallback)((t=>{(0,o().default)(t),s("copied"),clearTimeout(n),i(setTimeout((()=>{s("ready")}),2e3))}),[]);return[f,l]};e.default=d},"hKI/":function(t,e,n){(function(e){var n="Expected a function",r=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,d=s||f||Function("return this")(),p=Object.prototype,m=p.toString,y=Math.max,h=Math.min,v=function(){return d.Date.now()};function b(t,e,r){var o,i,u,a,c,l,s=0,f=!1,d=!1,p=!0;if("function"!=typeof t)throw new TypeError(n);function m(e){var n=o,r=i;return o=i=void 0,s=e,a=t.apply(r,n),a}function b(t){return s=t,c=setTimeout(j,e),f?m(t):a}function g(t){var n=t-l,r=t-s,o=e-n;return d?h(o,u-r):o}function O(t){var n=t-l,r=t-s;return void 0===l||n>=e||n<0||d&&r>=u}function j(){var t=v();if(O(t))return S(t);c=setTimeout(j,g(t))}function S(t){return c=void 0,p&&o?m(t):(o=i=void 0,a)}function x(){void 0!==c&&clearTimeout(c),s=0,o=l=i=c=void 0}function k(){return void 0===c?a:S(v())}function E(){var t=v(),n=O(t);if(o=arguments,i=this,l=t,n){if(void 0===c)return b(l);if(d)return c=setTimeout(j,e),m(l)}return void 0===c&&(c=setTimeout(j,e)),a}return e=A(e)||0,w(r)&&(f=!!r.leading,d="maxWait"in r,u=d?y(A(r.maxWait)||0,e):u,p="trailing"in r?!!r.trailing:p),E.cancel=x,E.flush=k,E}function g(t,e,r){var o=!0,i=!0;if("function"!=typeof t)throw new TypeError(n);return w(r)&&(o="leading"in r?!!r.leading:o,i="trailing"in r?!!r.trailing:i),b(t,e,{leading:o,maxWait:e,trailing:i})}function w(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function O(t){return!!t&&"object"==typeof t}function j(t){return"symbol"==typeof t||O(t)&&m.call(t)==o}function A(t){if("number"==typeof t)return t;if(j(t))return r;if(w(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=w(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=a.test(t);return n||c.test(t)?l(t.slice(2),n?2:8):u.test(t)?r:+t}t.exports=g}).call(this,n("IyRk"))},nLCz:function(t,e,n){"use strict";function r(){const t=o(n("cDcd"));return r=function(){return t},t}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r().default.createContext({config:{mode:"doc",title:"",navs:{},menus:{},locales:[],repository:{branch:"master"},theme:{}},meta:{title:""},menu:[],nav:[],base:"",routes:[]});e.default=i},o0kM:function(t,e,n){"use strict";function r(){const t=n("cDcd");return r=function(){return t},t}function o(t,e){return l(t)||c(t,e)||u(t,e)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,e){if(t){if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),e&&i.length===e)break}catch(c){a=!0,o=c}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function l(t){if(Array.isArray(t))return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;const s="https://riddle.alibaba-inc.com/riddles/define";let f;const d=()=>{const t=(0,r().useState)(Boolean(f)),e=o(t,2),n=e[0],i=e[1];return(0,r().useEffect)((()=>{if(void 0===f){const t=document.createElement("img");setTimeout((()=>{t.src="",t.remove()}),200),t.onload=()=>{f=!0,i(!0),t.remove()},t.src="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png"}}),[]),n};function p(t){var e;const n=t.dependencies;let r=t.sources._.tsx||t.sources._.jsx;return r=r.replace(/^/,`import ReactDOM from 'react-dom@${(null===(e=n.react)||void 0===e?void 0:e.version)||"latest"}';\n`).replace("export default","const DumiDemo =").concat("\nReactDOM.render(<DumiDemo />, mountNode);"),r=r.replace(/(from ')((?:@[^/'"]+)?[^/'"]+)/g,((t,e,r)=>{let o=`${e}${r}`;return n[r]&&(o+=`@${n[r].version}`),o})),r}var m=t=>{const e=(0,r().useState)(),n=o(e,2),i=n[0],u=n[1],a=d();return(0,r().useEffect)((()=>{if(t&&a&&1===Object.keys(t.sources).length){const e=document.createElement("form"),n=document.createElement("input");return e.method="POST",e.target="_blank",e.style.display="none",e.action=s,e.appendChild(n),e.setAttribute("data-demo",t.title||""),n.name="data",n.value=JSON.stringify({title:t.titlle,js:p(t),css:Object.entries(t.dependencies).filter((([,t])=>t.css)).map((([t,{version:e,css:n}])=>`@import '~${n.replace(new RegExp(`^(${t})`),`$1@${e}`)}';`)).join("\n")}),document.body.appendChild(e),u((()=>()=>e.submit())),()=>e.remove()}}),[t,a]),i};e.default=m},r1Q5:function(t,e,n){"use strict";function r(){const t=n("cDcd");return r=function(){return t},t}function o(){const t=i(n("6xEa"));return o=function(){return t},t}function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e){return f(t)||s(t,e)||c(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){if(t){if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),e&&i.length===e)break}catch(c){a=!0,o=c}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function f(t){if(Array.isArray(t))return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;const d="https://codesandbox.io/api/v1/sandboxes/define";function p(t){return o().default.compressToBase64(JSON.stringify(t)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function m(t){const e=document.createElement("span");e.innerHTML=t;const n=e.textContent;return e.remove(),n}function y(t){const e=Boolean(t.sources._.tsx),n=e?".tsx":".jsx",r={},o={},i=Object.values(t.dependencies).filter((t=>t.css)),u=`App${n}`,a=`index${n}`;return Object.entries(t.dependencies).forEach((([t,{version:e}])=>{o[t]=e})),o["react-dom"]||(o["react-dom"]=o.react||"latest"),r["sandbox.config.json"]={content:JSON.stringify({template:e?"create-react-app-typescript":"create-react-app"},null,2)},r["package.json"]={content:JSON.stringify({name:t.title,description:m(t.description)||"An auto-generated demo by dumi",main:a,dependencies:o,devDependencies:e?{typescript:"^3"}:{}},null,2)},r["index.html"]={content:'<div style="margin: 16px;" id="root"></div>'},r[a]={content:`/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n${i.map((({css:t})=>`import '${t}';`)).join("\n")}\nimport App from './App';\n\nReactDOM.render(\n  <App />,\n  document.getElementById('root'),\n);`},Object.entries(t.sources).forEach((([t,{tsx:e,jsx:n,content:o}])=>{r["_"===t?u:t]={content:e||n||o}})),p({files:r})}var h=(t,e=d)=>{const n=(0,r().useState)(),o=u(n,2),i=o[0],a=o[1];return(0,r().useEffect)((()=>{if(t){const n=document.createElement("form"),r=document.createElement("input"),o=y(t);return n.method="POST",n.target="_blank",n.style.display="none",n.action=e,n.appendChild(r),n.setAttribute("data-demo",t.title||""),r.name="parameters",r.value=o,document.body.appendChild(n),a((()=>()=>n.submit())),()=>n.remove()}}),[t]),i};e.default=h},"t/kZ":function(t,e,n){"use strict";function r(){const t=n("cDcd");return r=function(){return t},t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("dEAq");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){return p(t)||d(t,e)||s(t,e)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){if(t){if("string"===typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),e&&i.length===e)break}catch(c){a=!0,o=c}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function p(t){if(Array.isArray(t))return t}const m=t=>{const e=(0,r().useContext)(o.context),n=e.locale,i=e.routes,u=e.config.locales,a=(0,r().useState)([]),l=c(a,2),s=l[0],f=l[1],d=(0,r().useState)([]),p=c(d,2),m=p[0],y=p[1];return(0,r().useEffect)((()=>{f(i.filter((({title:t,meta:e})=>{const r=(null===e||void 0===e?void 0:e.locale)===n,o=(null===e||void 0===e?void 0:e.locale)===u[0].name||!(null===e||void 0===e?void 0:e.locale)&&(!u.length||n===u[0].name);return t&&(o||r)})).reduce(((t,e)=>{var n,r;const o={title:e.title,path:e.path};return(null===(n=e.meta)||void 0===n?void 0:n.group)&&(o.parent=e.meta.group),t.push(o),t.push(...((null===(r=e.meta)||void 0===r?void 0:r.slugs)||[]).filter((({value:t})=>t!==e.title)).map((t=>({title:t.value,path:`${e.path}#${t.heading}`,parent:o})))),t}),[]))}),[i.length,n]),(0,r().useEffect)((()=>{const e=null===t||void 0===t?void 0:t.trim().toUpperCase();if(e){const t=[];for(let n=0;n<s.length;n+=1)s[n].title.toUpperCase().indexOf(e)>-1&&t.push(s[n]);y(t)}else y([])}),[t,s.length]),m},y=()=>{const t=(0,r().useContext)(o.context),e=t.config.algolia,n=(0,r().useCallback)((t=>{window.docsearch(u({inputSelector:t},e))}),[e]);return n};var h=t=>{const e=(0,r().useContext)(o.context),n=e.config,i=m(t),u=y();return n.algolia?u:i};e.default=h},zYLY:function(t,e,n){"use strict";function r(){const t=n("cDcd");return r=function(){return t},t}function o(t,e){return l(t)||c(t,e)||u(t,e)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,e){if(t){if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),e&&i.length===e)break}catch(c){a=!0,o=c}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function l(t){if(Array.isArray(t))return t}function s(t,e,n,r=0){var i;if(r<e.length){const u=e[r],a=()=>s(t,e,n,r+1),c=u.match(/^([^:]+):?(.*)$/)||[],l=o(c,3),f=l[1],d=l[2];switch(f){case"autoplay":a();break;case"click":const e=d.match(/^(global\()?(.+?)\)?$/)||[],n=o(e,3),r=n[1],c=n[2],l=r?document:t;null===(i=l.querySelector(c))||void 0===i||i.click(),a();break;case"timeout":setTimeout(a,Number(d));break;case"capture":window.postMessage({type:"dumi:capture-element",value:d},"*"),a();break;default:console.warn(`[dumi: motion] unknown motion '${u}', skip.`),a()}}else n()}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var f=(t,e)=>{const n=(0,r().useState)(!1),i=o(n,2),u=i[0],a=i[1],c=(0,r().useCallback)((()=>{u||(s(e,t,(()=>{a(!1)})),a(!0))}),[t,e,u]);return(0,r().useEffect)((()=>{"autoplay"===t[0]&&e&&c()}),[t,e]),[c,u]};e.default=f},zqmC:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.LinkWrapper=void 0;var r=u(n("cDcd")),o=n("LtsZ"),i=["to"];function u(t){return t&&t.__esModule?t:{default:t}}function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function c(t,e){if(null==t)return{};var n,r,o=l(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function l(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}var s=function(t){return function(e){var n=e.to,o=c(e,i),u=/^(\w+:)?\/\//.test(n)||!n,l=r.default.isValidElement(o.children);return r.default.createElement(t,a({to:n||"",component:u?function(){return r.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:n},o.children,n&&!l&&r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.default.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.default.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))}:void 0},o,u?{}:{onClick:function(){var t;window.scrollTo({top:0});for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];null===(t=o.onClick)||void 0===t||t.apply(this,n)}}))}};e.LinkWrapper=s;var f=s(o.Link);e.default=f}}]);