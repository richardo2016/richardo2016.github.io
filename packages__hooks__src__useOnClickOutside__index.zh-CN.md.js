(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{"+SHF":function(e,t,n){"use strict";n.r(t);var a=n("cDcd"),r=n.n(a),c=n("dEAq"),o=n("Zxc8"),i=n("H1Ra"),l=r.a.memo((e=>{var t=e.demos,n=t["useonclickoutside-demo1"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"useonclickoutside"},r.a.createElement(c["AnchorLink"],{to:"#useonclickoutside","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"useOnClickOutside"),r.a.createElement("p",null,"\u5bf9\u4e00\u4e2a\u5305\u88f9 HTML \u5143\u7d20\u7684 ",r.a.createElement("code",null,"React.Ref<HTMLElement>"),', \u5b9a\u5236"\u70b9\u51fb\u8fd9\u4e2a\u5143\u7d20\u4e4b\u5916"\u52a8\u4f5c\u7684\u76d1\u542c\u51fd\u6570.'),r.a.createElement("h2",{id:"examples"},r.a.createElement(c["AnchorLink"],{to:"#examples","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Examples"),r.a.createElement("h3",{id:"\u57fa\u7840\u7528\u6cd5"},r.a.createElement(c["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),r.a.createElement(o["default"],t["useonclickoutside-demo1"].previewerProps,r.a.createElement(n,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(c["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(i["a"],{code:"const domRef = React.useRef(null);\nconst handler = React.useCallback(() => {\n  // trigger on click outsize `domRef.current`\n}, []);\n\nuseOnClickOutside(\n  domRef,\n  handler\n);",lang:"typescript"}),r.a.createElement("p",null,r.a.createElement("strong",null,"\u6ce8\u610f")," \u4e3a\u4e86\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u6027\u80fd\u6d88\u8017, \u5982\u679c handler \u6ca1\u6709\u672c\u8d28\u7684\u53d8\u5316, \u5c3d\u91cf\u4f7f\u5f97\u591a\u6b21\u7ec4\u4ef6 render \u65f6 handler \u7684\u503c\u5f15\u7528\u4fdd\u6301\u4e0d\u53d8."))))}));t["default"]=e=>{var t=r.a.useContext(c["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(l,{demos:n})}},MZF8:function(e,t,n){"use strict";var a=n("ogwx");n.d(t,"a",(function(){return a["b"]}));n("VCU9")},RZMt:function(e,t,n){},Zxc8:function(e,t,n){"use strict";n.r(t);var a=n("cDcd"),r=n.n(a),c=n("wx14"),o=n("rePB"),i=n("ODXe"),l=n("U8pU"),u=n("Ff2n"),s=n("VTBJ"),d=n("TSYQ"),f=n.n(d),b=n("Zm9Q"),m=n("5Z9U"),v=n("6cGi"),p=n("KQm4"),h=n("wgJM"),j=n("t23M");function O(e){var t=Object(a["useRef"])(),n=Object(a["useRef"])(!1);function r(){for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];n.current||(h["a"].cancel(t.current),t.current=Object(h["a"])((function(){e.apply(void 0,r)})))}return Object(a["useEffect"])((function(){return function(){n.current=!0,h["a"].cancel(t.current)}}),[]),r}function y(e){var t=Object(a["useRef"])([]),n=Object(a["useState"])({}),r=Object(i["a"])(n,2),c=r[1],o=Object(a["useRef"])("function"===typeof e?e():e),l=O((function(){var e=o.current;t.current.forEach((function(t){e=t(e)})),t.current=[],o.current=e,c({})}));function u(e){t.current.push(e),l()}return[o.current,u]}var E=n("4IlW");function g(e,t){var n,r=e.prefixCls,c=e.id,i=e.active,l=e.tab,u=l.key,s=l.tab,d=l.disabled,b=l.closeIcon,m=e.closable,v=e.renderWrapper,p=e.removeAriaLabel,h=e.editable,j=e.onClick,O=e.onRemove,y=e.onFocus,g=e.style,k="".concat(r,"-tab");a["useEffect"]((function(){return O}),[]);var w=h&&!1!==m&&!d;function x(e){d||j(e)}function C(e){e.preventDefault(),e.stopPropagation(),h.onEdit("remove",{key:u,event:e})}var N=a["createElement"]("div",{key:u,ref:t,className:f()(k,(n={},Object(o["a"])(n,"".concat(k,"-with-remove"),w),Object(o["a"])(n,"".concat(k,"-active"),i),Object(o["a"])(n,"".concat(k,"-disabled"),d),n)),style:g,onClick:x},a["createElement"]("div",{role:"tab","aria-selected":i,id:c&&"".concat(c,"-tab-").concat(u),className:"".concat(k,"-btn"),"aria-controls":c&&"".concat(c,"-panel-").concat(u),"aria-disabled":d,tabIndex:d?null:0,onClick:function(e){e.stopPropagation(),x(e)},onKeyDown:function(e){[E["a"].SPACE,E["a"].ENTER].includes(e.which)&&(e.preventDefault(),x(e))},onFocus:y},s),w&&a["createElement"]("button",{type:"button","aria-label":p||"remove",tabIndex:0,className:"".concat(k,"-remove"),onClick:function(e){e.stopPropagation(),C(e)}},b||h.removeIcon||"\xd7"));return v?v(N):N}var k=a["forwardRef"](g),w={width:0,height:0,left:0,top:0};function x(e,t,n){return Object(a["useMemo"])((function(){for(var n,a=new Map,r=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||w,c=r.left+r.width,o=0;o<e.length;o+=1){var i,l=e[o].key,u=t.get(l);if(!u)u=t.get(null===(i=e[o-1])||void 0===i?void 0:i.key)||w;var d=a.get(l)||Object(s["a"])({},u);d.right=c-d.left-d.width,a.set(l,d)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}var C={width:0,height:0,left:0,top:0,right:0};function N(e,t,n,r,c){var o,i,l,u=c.tabs,s=c.tabPosition,d=c.rtl;["top","bottom"].includes(s)?(o="width",i=d?"right":"left",l=Math.abs(t.left)):(o="height",i="top",l=-t.top);var f=t[o],b=n[o],m=r[o],v=f;return b+m>f&&b<f&&(v=f-m),Object(a["useMemo"])((function(){if(!u.length)return[0,0];for(var t=u.length,n=t,a=0;a<t;a+=1){var r=e.get(u[a].key)||C;if(r[i]+r[o]>l+v){n=a-1;break}}for(var c=0,s=t-1;s>=0;s-=1){var d=e.get(u[s].key)||C;if(d[i]<l){c=s+1;break}}return[c,n]}),[e,l,v,s,u.map((function(e){return e.key})).join("_"),d])}var R=n("1j5w"),S=n("eDIo");function _(e,t){var n=e.prefixCls,r=e.editable,c=e.locale,o=e.style;return r&&!1!==r.showAdd?a["createElement"]("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:o,"aria-label":(null===c||void 0===c?void 0:c.addAriaLabel)||"Add tab",onClick:function(e){r.onEdit("add",{event:e})}},r.addIcon||"+"):null}var T=a["forwardRef"](_);function I(e,t){var n=e.prefixCls,r=e.id,c=e.tabs,l=e.locale,u=e.mobile,s=e.moreIcon,d=void 0===s?"More":s,b=e.moreTransitionName,m=e.style,v=e.className,p=e.editable,h=e.tabBarGutter,j=e.rtl,O=e.removeAriaLabel,y=e.onTabClick,g=Object(a["useState"])(!1),k=Object(i["a"])(g,2),w=k[0],x=k[1],C=Object(a["useState"])(null),N=Object(i["a"])(C,2),_=N[0],I=N[1],M="".concat(r,"-more-popup"),A="".concat(n,"-dropdown"),P=null!==_?"".concat(M,"-").concat(_):null,L=null===l||void 0===l?void 0:l.dropdownAriaLabel;function D(e,t){e.preventDefault(),e.stopPropagation(),p.onEdit("remove",{key:t,event:e})}var B=a["createElement"](R["f"],{onClick:function(e){var t=e.key,n=e.domEvent;y(t,n),x(!1)},id:M,tabIndex:-1,role:"listbox","aria-activedescendant":P,selectedKeys:[_],"aria-label":void 0!==L?L:"expanded dropdown"},c.map((function(e){var t=p&&!1!==e.closable&&!e.disabled;return a["createElement"](R["d"],{key:e.key,id:"".concat(M,"-").concat(e.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(e.key),disabled:e.disabled},a["createElement"]("span",null,e.tab),t&&a["createElement"]("button",{type:"button","aria-label":O||"remove",tabIndex:0,className:"".concat(A,"-menu-item-remove"),onClick:function(t){t.stopPropagation(),D(t,e.key)}},e.closeIcon||p.removeIcon||"\xd7"))})));function K(e){for(var t=c.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===_}))||0,a=t.length,r=0;r<a;r+=1){n=(n+e+a)%a;var o=t[n];if(!o.disabled)return void I(o.key)}}function W(e){var t=e.which;if(w)switch(t){case E["a"].UP:K(-1),e.preventDefault();break;case E["a"].DOWN:K(1),e.preventDefault();break;case E["a"].ESC:x(!1);break;case E["a"].SPACE:case E["a"].ENTER:null!==_&&y(_,e);break}else[E["a"].DOWN,E["a"].SPACE,E["a"].ENTER].includes(t)&&(x(!0),e.preventDefault())}Object(a["useEffect"])((function(){var e=document.getElementById(P);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[_]),Object(a["useEffect"])((function(){w||I(null)}),[w]);var F=Object(o["a"])({},j?"marginRight":"marginLeft",h);c.length||(F.visibility="hidden",F.order=1);var H=f()(Object(o["a"])({},"".concat(A,"-rtl"),j)),U=u?null:a["createElement"](S["a"],{prefixCls:A,overlay:B,trigger:["hover"],visible:w,transitionName:b,onVisibleChange:x,overlayClassName:H,mouseEnterDelay:.1,mouseLeaveDelay:.1},a["createElement"]("button",{type:"button",className:"".concat(n,"-nav-more"),style:F,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":M,id:"".concat(r,"-more"),"aria-expanded":w,onKeyDown:W},d));return a["createElement"]("div",{className:f()("".concat(n,"-nav-operations"),v),style:m,ref:t},U,a["createElement"](T,{prefixCls:n,locale:l,editable:p}))}var M=a["memo"](a["forwardRef"](I),(function(e,t){return t.tabMoving})),A=Object(a["createContext"])(null),P=.1,L=.01,D=20,B=Math.pow(.995,D);function K(e,t){var n=Object(a["useState"])(),r=Object(i["a"])(n,2),c=r[0],o=r[1],l=Object(a["useState"])(0),u=Object(i["a"])(l,2),s=u[0],d=u[1],f=Object(a["useState"])(0),b=Object(i["a"])(f,2),m=b[0],v=b[1],p=Object(a["useState"])(),h=Object(i["a"])(p,2),j=h[0],O=h[1],y=Object(a["useRef"])();function E(e){var t=e.touches[0],n=t.screenX,a=t.screenY;o({x:n,y:a}),window.clearInterval(y.current)}function g(e){if(c){e.preventDefault();var n=e.touches[0],a=n.screenX,r=n.screenY;o({x:a,y:r});var i=a-c.x,l=r-c.y;t(i,l);var u=Date.now();d(u),v(u-s),O({x:i,y:l})}}function k(){if(c&&(o(null),O(null),j)){var e=j.x/m,n=j.y/m,a=Math.abs(e),r=Math.abs(n);if(Math.max(a,r)<P)return;var i=e,l=n;y.current=window.setInterval((function(){Math.abs(i)<L&&Math.abs(l)<L?window.clearInterval(y.current):(i*=B,l*=B,t(i*D,l*D))}),D)}}var w=Object(a["useRef"])();function x(e){var n=e.deltaX,a=e.deltaY,r=0,c=Math.abs(n),o=Math.abs(a);c===o?r="x"===w.current?n:a:c>o?(r=n,w.current="x"):(r=a,w.current="y"),t(-r,-r)&&e.preventDefault()}var C=Object(a["useRef"])(null);C.current={onTouchStart:E,onTouchMove:g,onTouchEnd:k,onWheel:x},a["useEffect"]((function(){function t(e){C.current.onTouchStart(e)}function n(e){C.current.onTouchMove(e)}function a(e){C.current.onTouchEnd(e)}function r(e){C.current.onWheel(e)}return document.addEventListener("touchmove",n,{passive:!1}),document.addEventListener("touchend",a,{passive:!1}),e.current.addEventListener("touchstart",t,{passive:!1}),e.current.addEventListener("wheel",r),function(){document.removeEventListener("touchmove",n),document.removeEventListener("touchend",a)}}),[])}function W(){var e=Object(a["useRef"])(new Map);function t(t){return e.current.has(t)||e.current.set(t,a["createRef"]()),e.current.get(t)}function n(t){e.current.delete(t)}return[t,n]}function F(e,t){var n=a["useRef"](e),r=a["useState"]({}),c=Object(i["a"])(r,2),o=c[1];function l(e){var a="function"===typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,o({})}return[n.current,l]}var H=function(e){var t,n=e.position,r=e.prefixCls,c=e.extra;if(!c)return null;var o={};return c&&"object"===Object(l["a"])(c)&&!a["isValidElement"](c)?o=c:o.right=c,"right"===n&&(t=o.right),"left"===n&&(t=o.left),t?a["createElement"]("div",{className:"".concat(r,"-extra-content")},t):null};function U(e,t){var n,r=a["useContext"](A),l=r.prefixCls,u=r.tabs,d=e.className,b=e.style,m=e.id,v=e.animated,E=e.activeKey,g=e.rtl,w=e.extra,C=e.editable,R=e.locale,S=e.tabPosition,_=e.tabBarGutter,I=e.children,P=e.onTabClick,L=e.onTabScroll,D=Object(a["useRef"])(),B=Object(a["useRef"])(),U=Object(a["useRef"])(),V=Object(a["useRef"])(),Z=W(),G=Object(i["a"])(Z,2),X=G[0],J=G[1],Y="top"===S||"bottom"===S,$=F(0,(function(e,t){Y&&L&&L({direction:e>t?"left":"right"})})),z=Object(i["a"])($,2),Q=z[0],q=z[1],ee=F(0,(function(e,t){!Y&&L&&L({direction:e>t?"top":"bottom"})})),te=Object(i["a"])(ee,2),ne=te[0],ae=te[1],re=Object(a["useState"])(0),ce=Object(i["a"])(re,2),oe=ce[0],ie=ce[1],le=Object(a["useState"])(0),ue=Object(i["a"])(le,2),se=ue[0],de=ue[1],fe=Object(a["useState"])(null),be=Object(i["a"])(fe,2),me=be[0],ve=be[1],pe=Object(a["useState"])(null),he=Object(i["a"])(pe,2),je=he[0],Oe=he[1],ye=Object(a["useState"])(0),Ee=Object(i["a"])(ye,2),ge=Ee[0],ke=Ee[1],we=Object(a["useState"])(0),xe=Object(i["a"])(we,2),Ce=xe[0],Ne=xe[1],Re=y(new Map),Se=Object(i["a"])(Re,2),_e=Se[0],Te=Se[1],Ie=x(u,_e,oe),Me="".concat(l,"-nav-operations-hidden"),Ae=0,Pe=0;function Le(e){return e<Ae?Ae:e>Pe?Pe:e}Y?g?(Ae=0,Pe=Math.max(0,oe-me)):(Ae=Math.min(0,me-oe),Pe=0):(Ae=Math.min(0,je-se),Pe=0);var De=Object(a["useRef"])(),Be=Object(a["useState"])(),Ke=Object(i["a"])(Be,2),We=Ke[0],Fe=Ke[1];function He(){Fe(Date.now())}function Ue(){window.clearTimeout(De.current)}function Ve(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=Ie.get(e)||{width:0,height:0,left:0,right:0,top:0};if(Y){var n=Q;g?t.right<Q?n=t.right:t.right+t.width>Q+me&&(n=t.right+t.width-me):t.left<-Q?n=-t.left:t.left+t.width>-Q+me&&(n=-(t.left+t.width-me)),ae(0),q(Le(n))}else{var a=ne;t.top<-ne?a=-t.top:t.top+t.height>-ne+je&&(a=-(t.top+t.height-je)),q(0),ae(Le(a))}}K(D,(function(e,t){function n(e,t){e((function(e){var n=Le(e+t);return n}))}if(Y){if(me>=oe)return!1;n(q,e)}else{if(je>=se)return!1;n(ae,t)}return Ue(),He(),!0})),Object(a["useEffect"])((function(){return Ue(),We&&(De.current=window.setTimeout((function(){Fe(0)}),100)),Ue}),[We]);var Ze=N(Ie,{width:me,height:je,left:Q,top:ne},{width:oe,height:se},{width:ge,height:Ce},Object(s["a"])(Object(s["a"])({},e),{},{tabs:u})),Ge=Object(i["a"])(Ze,2),Xe=Ge[0],Je=Ge[1],Ye={};"top"===S||"bottom"===S?Ye[g?"marginRight":"marginLeft"]=_:Ye.marginTop=_;var $e=u.map((function(e,t){var n=e.key;return a["createElement"](k,{id:m,prefixCls:l,key:n,tab:e,style:0===t?void 0:Ye,closable:e.closable,editable:C,active:n===E,renderWrapper:I,removeAriaLabel:null===R||void 0===R?void 0:R.removeAriaLabel,ref:X(n),onClick:function(e){P(n,e)},onRemove:function(){J(n)},onFocus:function(){Ve(n),He(),D.current&&(g||(D.current.scrollLeft=0),D.current.scrollTop=0)}})})),ze=O((function(){var e,t,n,a,r,c,o=(null===(e=D.current)||void 0===e?void 0:e.offsetWidth)||0,i=(null===(t=D.current)||void 0===t?void 0:t.offsetHeight)||0,l=(null===(n=V.current)||void 0===n?void 0:n.offsetWidth)||0,s=(null===(a=V.current)||void 0===a?void 0:a.offsetHeight)||0;ve(o),Oe(i),ke(l),Ne(s);var d=((null===(r=B.current)||void 0===r?void 0:r.offsetWidth)||0)-l,f=((null===(c=B.current)||void 0===c?void 0:c.offsetHeight)||0)-s;ie(d),de(f),Te((function(){var e=new Map;return u.forEach((function(t){var n=t.key,a=X(n).current;a&&e.set(n,{width:a.offsetWidth,height:a.offsetHeight,left:a.offsetLeft,top:a.offsetTop})})),e}))})),Qe=u.slice(0,Xe),qe=u.slice(Je+1),et=[].concat(Object(p["a"])(Qe),Object(p["a"])(qe)),tt=Object(a["useState"])(),nt=Object(i["a"])(tt,2),at=nt[0],rt=nt[1],ct=Ie.get(E),ot=Object(a["useRef"])();function it(){h["a"].cancel(ot.current)}Object(a["useEffect"])((function(){var e={};return ct&&(Y?(g?e.right=ct.right:e.left=ct.left,e.width=ct.width):(e.top=ct.top,e.height=ct.height)),it(),ot.current=Object(h["a"])((function(){rt(e)})),it}),[ct,Y,g]),Object(a["useEffect"])((function(){Ve()}),[E,ct,Ie,Y]),Object(a["useEffect"])((function(){ze()}),[g,_,E,u.map((function(e){return e.key})).join("_")]);var lt,ut,st,dt,ft=!!et.length,bt="".concat(l,"-nav-wrap");return Y?g?(ut=Q>0,lt=Q+me<oe):(lt=Q<0,ut=-Q+me<oe):(st=ne<0,dt=-ne+je<se),a["createElement"]("div",{ref:t,role:"tablist",className:f()("".concat(l,"-nav"),d),style:b,onKeyDown:function(){He()}},a["createElement"](H,{position:"left",extra:w,prefixCls:l}),a["createElement"](j["a"],{onResize:ze},a["createElement"]("div",{className:f()(bt,(n={},Object(o["a"])(n,"".concat(bt,"-ping-left"),lt),Object(o["a"])(n,"".concat(bt,"-ping-right"),ut),Object(o["a"])(n,"".concat(bt,"-ping-top"),st),Object(o["a"])(n,"".concat(bt,"-ping-bottom"),dt),n)),ref:D},a["createElement"](j["a"],{onResize:ze},a["createElement"]("div",{ref:B,className:"".concat(l,"-nav-list"),style:{transform:"translate(".concat(Q,"px, ").concat(ne,"px)"),transition:We?"none":void 0}},$e,a["createElement"](T,{ref:V,prefixCls:l,locale:R,editable:C,style:Object(s["a"])(Object(s["a"])({},0===$e.length?void 0:Ye),{},{visibility:ft?"hidden":null})}),a["createElement"]("div",{className:f()("".concat(l,"-ink-bar"),Object(o["a"])({},"".concat(l,"-ink-bar-animated"),v.inkBar)),style:at}))))),a["createElement"](M,Object(c["a"])({},e,{removeAriaLabel:null===R||void 0===R?void 0:R.removeAriaLabel,ref:U,prefixCls:l,tabs:et,className:!ft&&Me,tabMoving:!!We})),a["createElement"](H,{position:"right",extra:w,prefixCls:l}))}var V=a["forwardRef"](U);function Z(e){var t=e.id,n=e.activeKey,r=e.animated,c=e.tabPosition,i=e.rtl,l=e.destroyInactiveTabPane,u=a["useContext"](A),s=u.prefixCls,d=u.tabs,b=r.tabPane,m=d.findIndex((function(e){return e.key===n}));return a["createElement"]("div",{className:f()("".concat(s,"-content-holder"))},a["createElement"]("div",{className:f()("".concat(s,"-content"),"".concat(s,"-content-").concat(c),Object(o["a"])({},"".concat(s,"-content-animated"),b)),style:m&&b?Object(o["a"])({},i?"marginRight":"marginLeft","-".concat(m,"00%")):null},d.map((function(e){return a["cloneElement"](e.node,{key:e.key,prefixCls:s,tabKey:e.key,id:t,animated:b,active:e.key===n,destroyInactiveTabPane:l})}))))}function G(e){var t=e.prefixCls,n=e.forceRender,r=e.className,c=e.style,o=e.id,l=e.active,u=e.animated,d=e.destroyInactiveTabPane,b=e.tabKey,m=e.children,v=a["useState"](n),p=Object(i["a"])(v,2),h=p[0],j=p[1];a["useEffect"]((function(){l?j(!0):d&&j(!1)}),[l,d]);var O={};return l||(u?(O.visibility="hidden",O.height=0,O.overflowY="hidden"):O.display="none"),a["createElement"]("div",{id:o&&"".concat(o,"-panel-").concat(b),role:"tabpanel",tabIndex:l?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(b),"aria-hidden":!l,style:Object(s["a"])(Object(s["a"])({},O),c),className:f()("".concat(t,"-tabpane"),l&&"".concat(t,"-tabpane-active"),r)},(l||h||n)&&m)}var X=["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"],J=0;function Y(e){return Object(b["a"])(e).map((function(e){if(a["isValidElement"](e)){var t=void 0!==e.key?String(e.key):void 0;return Object(s["a"])(Object(s["a"])({key:t},e.props),{},{node:e})}return null})).filter((function(e){return e}))}function $(e,t){var n,r,d=e.id,b=e.prefixCls,p=void 0===b?"rc-tabs":b,h=e.className,j=e.children,O=e.direction,y=e.activeKey,E=e.defaultActiveKey,g=e.editable,k=e.animated,w=void 0===k?{inkBar:!0,tabPane:!1}:k,x=e.tabPosition,C=void 0===x?"top":x,N=e.tabBarGutter,R=e.tabBarStyle,S=e.tabBarExtraContent,_=e.locale,T=e.moreIcon,I=e.moreTransitionName,M=e.destroyInactiveTabPane,P=e.renderTabBar,L=e.onChange,D=e.onTabClick,B=e.onTabScroll,K=Object(u["a"])(e,X),W=Y(j),F="rtl"===O;r=!1===w?{inkBar:!1,tabPane:!1}:!0===w?{inkBar:!0,tabPane:!0}:Object(s["a"])({inkBar:!0,tabPane:!1},"object"===Object(l["a"])(w)?w:{});var H=Object(a["useState"])(!1),U=Object(i["a"])(H,2),G=U[0],$=U[1];Object(a["useEffect"])((function(){$(Object(m["a"])())}),[]);var z=Object(v["a"])((function(){var e;return null===(e=W[0])||void 0===e?void 0:e.key}),{value:y,defaultValue:E}),Q=Object(i["a"])(z,2),q=Q[0],ee=Q[1],te=Object(a["useState"])((function(){return W.findIndex((function(e){return e.key===q}))})),ne=Object(i["a"])(te,2),ae=ne[0],re=ne[1];Object(a["useEffect"])((function(){var e,t=W.findIndex((function(e){return e.key===q}));-1===t&&(t=Math.max(0,Math.min(ae,W.length-1)),ee(null===(e=W[t])||void 0===e?void 0:e.key));re(t)}),[W.map((function(e){return e.key})).join("_"),q,ae]);var ce=Object(v["a"])(null,{value:d}),oe=Object(i["a"])(ce,2),ie=oe[0],le=oe[1],ue=C;function se(e,t){null===D||void 0===D||D(e,t);var n=e!==q;ee(e),n&&(null===L||void 0===L||L(e))}G&&!["left","right"].includes(C)&&(ue="top"),Object(a["useEffect"])((function(){d||(le("rc-tabs-".concat(J)),J+=1)}),[]);var de,fe={id:ie,activeKey:q,animated:r,tabPosition:ue,rtl:F,mobile:G},be=Object(s["a"])(Object(s["a"])({},fe),{},{editable:g,locale:_,moreIcon:T,moreTransitionName:I,tabBarGutter:N,onTabClick:se,onTabScroll:B,extra:S,style:R,panes:j});return de=P?P(be,V):a["createElement"](V,be),a["createElement"](A.Provider,{value:{tabs:W,prefixCls:p}},a["createElement"]("div",Object(c["a"])({ref:t,id:d,className:f()(p,"".concat(p,"-").concat(ue),(n={},Object(o["a"])(n,"".concat(p,"-mobile"),G),Object(o["a"])(n,"".concat(p,"-editable"),g),Object(o["a"])(n,"".concat(p,"-rtl"),F),n),h)},K),de,a["createElement"](Z,Object(c["a"])({destroyInactiveTabPane:M},fe,{animated:r}))))}var z=a["forwardRef"]($);z.TabPane=G;var Q=z,q=Q,ee=n("MZF8"),te=n("dEAq"),ne=n("H1Ra");n("RZMt");function ae(e,t){return le(e)||ie(e,t)||ce(e,t)||re()}function re(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ce(e,t){if(e){if("string"===typeof e)return oe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?oe(e,t):void 0}}function oe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function ie(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,c=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(a=n.next()).done);o=!0)if(c.push(a.value),t&&c.length===t)break}catch(l){i=!0,r=l}finally{try{o||null==n["return"]||n["return"]()}finally{if(i)throw r}}return c}}function le(e){if(Array.isArray(e))return e}function ue(e,t){var n,a=null===(n=e.match(/\.(\w+)$/))||void 0===n?void 0:n[1];return a||(a=t.tsx?"tsx":"jsx"),a}var se=function(e){var t,n,c,o=Object(a["useRef"])(),i=Object(a["useContext"])(te["context"]),l=i.locale,u=Object(te["useLocaleProps"])(l,e),s=Object(te["useDemoUrl"])(u.identifier),d=u.demoUrl||s,f=(null===ee["a"]||void 0===ee["a"]?void 0:ee["a"].location.hash)==="#".concat(u.identifier),b=1===Object.keys(u.sources).length,m=Object(te["useCodeSandbox"])((null===(t=u.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:u),v=Object(te["useRiddle"])((null===(n=u.hideActions)||void 0===n?void 0:n.includes("RIDDLE"))?null:u),p=Object(te["useMotions"])(u.motions||[],o.current),h=ae(p,2),j=h[0],O=h[1],y=Object(te["useCopy"])(),E=ae(y,2),g=E[0],k=E[1],w=Object(a["useState"])((function(){return u.sources._?"_":Object.keys(u.sources)[0]})),x=ae(w,2),C=x[0],N=x[1],R=Object(a["useState"])(ue(C,u.sources[C])),S=ae(R,2),_=S[0],T=S[1],I=Object(a["useState"])(Boolean(u.defaultShowCode)),M=ae(I,2),A=M[0],P=M[1],L=Object(a["useState"])(Math.random()),D=ae(L,2),B=D[0],K=D[1],W=u.sources[C][_]||u.sources[C].content,F=Object(te["useTSPlaygroundUrl"])(l,W),H=Object(a["useRef"])(),U=Object(te["usePrefersColor"])(),V=ae(U,1),Z=V[0],X=u.actionBarRender,J=void 0===X?function(e){return e}:X;function Y(e){N(e),T(ue(e,u.sources[e]))}return Object(a["useEffect"])((function(){K(Math.random())}),[Z]),r.a.createElement("div",{style:u.style,className:[u.className,"__dumi-default-previewer",f?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:u.identifier,"data-debug":u.debug||void 0,"data-iframe":u.iframe||void 0},u.iframe&&r.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.a.createElement("div",{ref:o,className:"__dumi-default-previewer-demo",style:{transform:u.transform?"translate(0, 0)":void 0,padding:u.compact||u.iframe&&!1!==u.compact?"0":void 0,background:u.background}},u.iframe?r.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(u.iframe).replace(/(\d)$/,"$1px")},key:B,src:d,ref:H}):u.children),r.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":u.title},u.title&&r.a.createElement(te["AnchorLink"],{to:"#".concat(u.identifier)},u.title),u.description&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:u.description}})),r.a.createElement("div",{className:"__dumi-default-previewer-actions"},J(r.a.createElement(r.a.Fragment,null,m&&r.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:m}),v&&r.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:v}),u.motions&&r.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:O,onClick:function(){return j()}}),u.iframe&&r.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return K(Math.random())}}),!(null===(c=u.hideActions)||void 0===c?void 0:c.includes("EXTERNAL"))&&r.a.createElement(te["Link"],{target:"_blank",to:d},r.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.a.createElement("span",null),r.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":k,onClick:function(){return g(W)}}),"tsx"===_&&A&&r.a.createElement(te["Link"],{target:"_blank",to:F},r.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(A?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return P(!A)}})))),A&&r.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!b&&r.a.createElement(q,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:C,onChange:Y},Object.keys(u.sources).map((function(e){return r.a.createElement(G,{tab:"_"===e?"index.".concat(ue(e,u.sources[e])):e,key:e})}))),r.a.createElement("div",{className:"__dumi-default-previewer-source"},r.a.createElement(ne["a"],{code:W,lang:_,showCopy:!1}))))};t["default"]=se}}]);