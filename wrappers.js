(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{"5UBC":function(e,t,a){},"B7p+":function(e,t,a){},IZsy:function(e,t,a){},KwE7:function(e,t,a){},MZF8:function(e,t,a){"use strict";var l=a("ogwx");a.d(t,"a",(function(){return l["b"]}));a("VCU9")},RGYn:function(e){e.exports=JSON.parse('{"menus":{"zh-CN":{"/blog":[{"title":"\u6742\u8c08","path":"/blog","meta":{},"children":[{"path":"/blog/ghost-on-react-hooks","title":"React Hooks \u4e2d\u7684\u66f4\u65b0\u5e7d\u7075","meta":{}},{"path":"/blog/material-ui-review","title":"\u5ffd\u7136\u60f3\u8d77\u7684 material-ui","meta":{}},{"path":"/blog/meltdown-about-uxss-in-chrome","title":"meltdown-about-uxss-in-chrome","meta":{}}]},{"title":"TS \u4f53\u64cd","path":"/blog/ts-challenge","meta":{},"children":[{"path":"/blog/ts-challenge/lodash-get","title":"TS \u7c7b\u578b\u4f53\u64cd - lodash.get","meta":{}}]}],"*":[{"path":"/","title":"\u9996\u9875","meta":{}}],"/donate":[{"path":"/donate","title":"Sponsors \ud83e\udd1d","meta":{}}],"/packages":[{"title":"Hooks","path":"/packages/hooks","meta":{"order":11},"children":[{"path":"/packages/hooks/use-boolean","title":"useBoolean","meta":{}},{"path":"/packages/hooks/use-on-click-outside","title":"useOnClickOutside","meta":{}},{"path":"/packages/hooks/use-toggle","title":"useToggle","meta":{}}]}]}},"locales":[{"name":"zh-CN","label":"\u4e2d\u6587"}],"navs":{"zh-CN":[{"title":"\u535a\u5ba2","path":"/blog"},{"title":"JS \u5e93","path":"/packages"},{"title":"\u5468\u672b\u65f6\u95f4 \u23f0","path":"/donate"}]},"title":"Ray","logo":"https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png","mode":"site","repository":{"url":"","branch":"master"},"theme":{},"exportStatic":{}}')},TFQZ:function(e,t,a){"use strict";a.r(t);var l=a("tJVT"),n=a("cDcd"),o=a.n(n),c=a("dEAq"),r=(a("Telt"),a("Tckk")),i=a("cPsf"),m=(a("hFYA"),a("IZsy"),e=>{var t=e.onMobileMenuClick,a=e.navPrefix,l=e.location,m=e.darkPrefix,s=void 0===m?null:m,u=Object(n["useContext"])(c["context"]),d=u.base,h=u.config,p=h.mode,g=h.title,E=h.logo,v=u.nav;return o.a.createElement("div",{className:"__dumi-default-navbar","data-mode":p},o.a.createElement("button",{className:"__dumi-default-navbar-toggle",onClick:t}),o.a.createElement(c["Link"],{className:"__dumi-default-navbar-logo",style:{backgroundImage:"none"},to:d,"data-plaintext":!1===E||void 0},o.a.createElement(r["a"],{style:{marginRight:4},src:"/assets/images/avatar-baymax.jpeg"}),g),o.a.createElement("nav",null,a,v.map((e=>{var t,a=Boolean(null===(t=e.children)||void 0===t?void 0:t.length)&&o.a.createElement("ul",null,e.children.map((e=>o.a.createElement("li",{key:e.path},o.a.createElement(c["NavLink"],{to:e.path},e.title)))));return o.a.createElement("span",{key:e.title||e.path},e.path?o.a.createElement(c["NavLink"],{to:e.path,key:e.path},e.title):e.title,a)})),o.a.createElement(i["a"],{location:l}),s))}),s=m,u=a("tIx2"),d=(a("lQE1"),e=>{var t=e.mobileMenuCollapsed,a=e.location,l=e.darkPrefix,r=Object(n["useContext"])(c["context"]),m=r.config,s=m.logo,d=m.title,h=m.description,p=m.mode,g=m.repository.url,E=r.menu,v=r.nav,f=r.base,b=r.meta,k=Boolean((b.hero||b.features||b.gapless)&&"site"===p)||!1===b.sidemenu||void 0;return o.a.createElement("div",{className:"__dumi-default-menu","data-mode":p,"data-hidden":k,"data-mobile-show":!t||void 0},o.a.createElement("div",{className:"__dumi-default-menu-inner"},o.a.createElement("div",{className:"__dumi-default-menu-header"},o.a.createElement(c["Link"],{to:f,className:"__dumi-default-menu-logo",style:{backgroundImage:s&&"url('".concat(s,"')")}}),o.a.createElement("h1",null,d),o.a.createElement("p",null,h),/github\.com/.test(g)&&"doc"===p&&o.a.createElement("p",null,o.a.createElement("object",{type:"image/svg+xml",data:"https://img.shields.io/github/stars".concat(g.match(/((\/[^\/]+){2})$/)[1],"?style=social")}))),o.a.createElement("div",{className:"__dumi-default-menu-mobile-area"},!!v.length&&o.a.createElement("ul",{className:"__dumi-default-menu-nav-list"},v.map((e=>{var t,a=Boolean(null===(t=e.children)||void 0===t?void 0:t.length)&&o.a.createElement("ul",null,e.children.map((e=>o.a.createElement("li",{key:e.path||e.title},o.a.createElement(c["NavLink"],{to:e.path},e.title)))));return o.a.createElement("li",{key:e.path||e.title},e.path?o.a.createElement(c["NavLink"],{to:e.path},e.title):e.title,a)}))),o.a.createElement(i["a"],{location:a}),l),o.a.createElement("ul",{className:"__dumi-default-menu-list"},!k&&E.map((e=>{var t,l=Boolean(null===(t=b.slugs)||void 0===t?void 0:t.length),n=e.children&&Boolean(e.children.length),r="menu"===b.toc&&!n&&l&&e.path===a.pathname.replace(/([^^])\/$/,"$1");return o.a.createElement("li",{key:e.path||e.title},o.a.createElement(c["NavLink"],{to:e.path,exact:!(e.children&&e.children.length)},e.title),Boolean(e.children&&e.children.length)&&o.a.createElement("ul",null,e.children.map((e=>o.a.createElement("li",{key:e.path},o.a.createElement(c["NavLink"],{to:e.path,exact:!0},o.a.createElement("span",null,e.title)),Boolean("menu"===b.toc&&"undefined"!==typeof window&&e.path===a.pathname&&l)&&o.a.createElement(u["a"],{slugs:b.slugs}))))),r&&o.a.createElement(u["a"],{slugs:b.slugs}))})))))}),h=d,p=a("Xy2S"),g=a("+jXX");a("jlma"),a("f+5B");function E(e,t,a){switch(e){case"HomePage":return"/"===t;case"ArchivePage":return"/blog"===t||"/blog/"===t;case"PostPage":return t.startsWith("/blog/")}return!1}a("5UBC"),a("KwE7"),a("fxq7");var v=a("tOAR"),f=a("oN5p"),b=a("su5N");function k(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"wrapper",className:"page__home"},o.a.createElement("section",{id:"main"},o.a.createElement("header",null,o.a.createElement("span",{className:"avatar"},o.a.createElement(c["NavLink"],{to:"blog"},o.a.createElement("img",{src:"/assets/images/avatar-baymax.jpeg",alt:""}))),o.a.createElement("h1",null,"Ray"),o.a.createElement("p",null,"Zigzag in the FLAT pavement")),o.a.createElement("footer",{className:"mt-md"},o.a.createElement("ul",{className:"icons"},o.a.createElement("li",null,o.a.createElement("a",{className:"icon-weibo",target:"_blank",href:"http://weibo.com/u/1269775130/"},o.a.createElement(v["a"],{style:{color:"#d52c2b"},className:"ant-icon"}))),o.a.createElement("li",null,o.a.createElement("a",{className:"icon-github",target:"_blank",href:"https://github.com/richardo2016"},o.a.createElement(f["a"],{className:"ant-icon"}))),o.a.createElement("li",null,o.a.createElement(c["NavLink"],{className:"icon-book",to:"blog"},o.a.createElement(b["a"],{className:"ant-icon"})))))),o.a.createElement("footer",{id:"footer"},o.a.createElement("ul",{className:"copyright"},o.a.createElement("li",null,"\xa9 Ray"),o.a.createElement("li",null,"2021")))))}var N=a("CiB2");a("ck77");function _(e){var t=new Date(e),a="".concat(t.toLocaleDateString([],{hour12:!1})," ").concat(t.toLocaleTimeString([],{hour12:!1}));return{ins:t,formatted:a}}function y(){var e,t,a=o.a.useContext(c["context"]),l=a.config,n=l.mode,r=l.repository,i=a.meta,m=a.locale,s="site"===n,u=s&&i.hero,d=s&&i.features,h=!1!==i.sidemenu&&!u&&!d&&!i.gapless,p=!u&&!d&&Boolean(null===(e=i.slugs)||void 0===e?void 0:e.length)&&("content"===i.toc||void 0===i.toc)&&!i.gapless,g=r.url,E=r.branch,v=r.platform,f=/^zh|cn$/i.test(m),b=_(i.updatedTime),k=b.ins,N=b.formatted,y={github:"GitHub",gitlab:"GitLab"}[(null===(t=(g||"").match(/(github|gitlab)/))||void 0===t?void 0:t[1])||"nothing"]||v;return{showHero:u,showFeatures:d,showSideMenu:h,showSlugs:p,isCN:f,frontMatter:{tags:i.tags||[],dateInfo:i.date?_(i.date):null},updatedTimeIns:k,updatedTime:N,gitRepoInfo:{url:g,platform:y,branch:E}}}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{posts:[]};return e.forEach((e=>{e.children?x(e.children,t):E("PostPage",e.path||"")&&t.posts.unshift(e)})),t}var w=e=>o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"__dumi-default-layout-hero"},(null===e||void 0===e?void 0:e.image)&&o.a.createElement("img",{src:null===e||void 0===e?void 0:e.image}),o.a.createElement("h1",null,null===e||void 0===e?void 0:e.title),o.a.createElement("div",{className:"archive-subtitle",dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.desc}}),(null===e||void 0===e?void 0:e.actions)&&(null===e||void 0===e?void 0:e.actions.map((e=>o.a.createElement(c["Link"],{to:e.link,key:e.text},o.a.createElement("button",{type:"button"},e.text))))))),S=e=>o.a.createElement("div",{className:"__dumi-default-layout-features"},e.map((e=>o.a.createElement("dl",{key:e.title,style:{backgroundImage:e.icon?"url(".concat(e.icon,")"):void 0}},e.link?o.a.createElement(c["Link"],{to:e.link},o.a.createElement("dt",null,e.title)):o.a.createElement("dt",null,e.title),o.a.createElement("dd",{dangerouslySetInnerHTML:{__html:e.desc}})))));function L(e){Object(N["a"])(e);var t=o.a.useContext(c["context"]),a=t.menu,l=t.meta;console.log("[LayoutContentArchive] menu",a);var n=y(),r=n.showSlugs,i=n.showHero,m=n.showFeatures,s=n.updatedTime,d=n.gitRepoInfo,h=n.isCN,p=o.a.useMemo((()=>x(a).posts),[a]);return console.log("posts",p),o.a.createElement(o.a.Fragment,null,r&&o.a.createElement(u["a"],{slugs:l.slugs,className:"__dumi-default-layout-toc"}),w(l.hero),m&&S(l.features),o.a.createElement("div",{className:"__dumi-default-layout-content"},o.a.createElement("section",{className:"archives-wrap"},o.a.createElement("div",{className:"archive-year-wrap"},o.a.createElement("a",{href:"/archives/2018",className:"archive-year"},"\xa0")),p.map((e=>o.a.createElement("section",{key:"archive-item-".concat(e.path),className:"archives"},o.a.createElement("article",{className:"archive-article archive-type-post"},o.a.createElement("div",{className:"archive-article-inner"},o.a.createElement("header",{className:"archive-article-header"},o.a.createElement(c["NavLink"],{to:e.path,className:"archive-article-date"}),o.a.createElement("div",{className:"flex-v-center-j-between"},o.a.createElement("h1",{itemProp:"name"},o.a.createElement(c["NavLink"],{to:e.path,className:"archive-article-title"},e.title)))),o.a.createElement("div",{className:"archive-article-body"}))))))),!i&&!m&&l.filePath&&!l.gapless&&o.a.createElement("div",{className:"__dumi-default-layout-footer-meta"},d.platform&&o.a.createElement(c["Link"],{to:"".concat(d.url,"/edit/").concat(d.branch,"/apps/rudio/").concat(l.filePath)},h?"\u5728 ".concat(d.platform," \u4e0a\u7f16\u8f91\u6b64\u9875"):"Edit this doc on ".concat(d.platform)),o.a.createElement("span",{"data-updated-text":h?"\u6700\u540e\u66f4\u65b0\u65f6\u95f4\uff1a":"Last update: "},s)),l.footer&&o.a.createElement("div",{className:"__dumi-default-layout-footer",dangerouslySetInnerHTML:{__html:l.footer}})))}a("+BJd");var C=a("mr32"),P=(a("B7p+"),a("USVy"),e=>o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"__dumi-default-layout-hero"},e.image&&o.a.createElement("img",{src:e.image}),o.a.createElement("h1",null,e.title),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.desc}}),e.actions&&e.actions.map((e=>o.a.createElement(c["Link"],{to:e.link,key:e.text},o.a.createElement("button",{type:"button"},e.text))))))),T=e=>o.a.createElement("div",{className:"__dumi-default-layout-features"},e.map((e=>o.a.createElement("dl",{key:e.title,style:{backgroundImage:e.icon?"url(".concat(e.icon,")"):void 0}},e.link?o.a.createElement(c["Link"],{to:e.link},o.a.createElement("dt",null,e.title)):o.a.createElement("dt",null,e.title),o.a.createElement("dd",{dangerouslySetInnerHTML:{__html:e.desc}})))));function I(e){var t,a=e.children,l=void 0===a?null:a,n=o.a.useContext(c["context"]),r=n.meta,i=y(),m=i.showSlugs,s=i.showHero,d=i.showFeatures,h=i.frontMatter,p=i.updatedTime,g=i.gitRepoInfo,v=i.isCN,f=E("PostPage",r.__pathname||"");return o.a.createElement(o.a.Fragment,null,m&&o.a.createElement(u["a"],{slugs:r.slugs,className:"__dumi-default-layout-toc"}),s&&P(r.hero),d&&T(r.features),o.a.createElement("div",{className:"__dumi-default-layout-content post"},f&&o.a.createElement(o.a.Fragment,null,r.title&&o.a.createElement("h1",null,r.title),!s&&!d&&r.filePath&&!r.gapless&&o.a.createElement("div",{className:"__dumi-default-layout-postheader-meta"},o.a.createElement("span",{"data-updated-text":v?"\u66f4\u65b0\u4e8e ":"Update At: "},(null===(t=h.dateInfo)||void 0===t?void 0:t.formatted)||p),o.a.createElement("span",{"data-tags":!0},h.tags.map(((e,t)=>o.a.createElement(C["a"],{key:"".concat(e,"-").concat(t),className:"postheader-tag"},e)))))),l,o.a.createElement("div",{className:"__dumi-default-layout-footer-meta"},g.platform&&o.a.createElement(c["Link"],{to:"".concat(g.url,"/edit/").concat(g.branch,"/apps/rudio/").concat(r.filePath)},v?"\u5728 ".concat(g.platform," \u4e0a\u7f16\u8f91\u6b64\u9875"):"Edit this doc on ".concat(g.platform))),(s||d)&&r.footer&&o.a.createElement("div",{className:"__dumi-default-layout-footer",dangerouslySetInnerHTML:{__html:r.footer}})))}var M=e=>{var t=e.children,a=e.location,n=o.a.useContext(c["context"]),r=n.config.mode,i=n.meta,m=o.a.useState(!0),u=Object(l["default"])(m,2),d=u[0],v=u[1],f=o.a.useState(!1),b=Object(l["default"])(f,2),N=b[0],_=b[1],x="site"===r,w=y(),S=w.showSideMenu,C=w.showSlugs;return E("HomePage",a.pathname)?o.a.createElement(k,null):o.a.createElement("div",{className:"__dumi-default-layout","data-route":a.pathname,"data-show-sidemenu":String(S),"data-show-slugs":String(C),"data-site-mode":x,"data-gapless":String(!!i.gapless),onClick:()=>{_(!1),d||v(!0)}},o.a.createElement(s,{location:a,navPrefix:o.a.createElement(p["a"],null),onMobileMenuClick:e=>{v((e=>!e)),e.stopPropagation()}}),o.a.createElement(h,{darkPrefix:o.a.createElement(g["a"],{darkSwitch:N,isSideMenu:!0}),mobileMenuCollapsed:d,location:a}),E("ArchivePage",a.pathname)?o.a.createElement(L,null):o.a.createElement(I,null,t))};t["default"]=M},USVy:function(e,t,a){},Zs1V:function(e){e.exports=JSON.parse("{}")},ck77:function(e,t,a){},"f+5B":function(e,t,a){},fxq7:function(e,t,a){},hFYA:function(e,t,a){},jlma:function(e,t,a){},lQE1:function(e,t,a){}}]);