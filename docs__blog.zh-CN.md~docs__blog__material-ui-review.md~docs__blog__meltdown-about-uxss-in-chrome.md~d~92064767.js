(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{JjdP:function(e,t,n){"use strict";n.r(t);var r=n("9og8"),a=n("WmNS"),o=n.n(a),s=n("LtsZ"),u="import React from 'react';\nimport { useBoolean } from '@rangine/richardo2016-hooks';\n\nexport default () => {\n  const [state, { toggle, setTrue, setFalse }] = useBoolean(true);\n\n  return (\n    <div>\n      <p>Effects\uff1a{JSON.stringify(state)}</p>\n      <p>\n        <button type=\"button\" onClick={() => toggle()}>\n          Toggle\n        </button>\n        <button type=\"button\" onClick={setFalse} style={{ margin: '0 16px' }}>\n          Set false\n        </button>\n        <button type=\"button\" onClick={setTrue}>\n          Set true\n        </button>\n      </p>\n    </div>\n  );\n};",c="import React from 'react';\nimport { useOnClickOutside } from '@rangine/richardo2016-hooks';\n\nexport default () => {\n  const domRef = React.useRef(null);\n  const [count, setCount] = React.useState(0);\n  useOnClickOutside(domRef, () => {\n    setCount((prev) => prev + 1);\n  });\n\n  return (\n    <div>\n      <p>Click outside to add counter</p>\n      <p>count is {count}</p>\n      <button\n        type=\"button\"\n        ref={domRef}\n        onClick={() => {\n          setCount(0);\n        }}\n      >\n        Reset\n      </button>\n    </div>\n  );\n};",l="import React from 'react';\nimport { useToggle } from '@rangine/richardo2016-hooks';\n\nexport default () => {\n  const [state, { toggle }] = useToggle();\n\n  return (\n    <div>\n      <p>Effects\uff1a{`${state}`}</p>\n      <p>\n        <button type=\"button\" onClick={() => toggle()}>\n          Toggle\n        </button>\n        <button type=\"button\" onClick={() => toggle(false)} style={{ margin: '0 8px' }}>\n          Toggle False\n        </button>\n        <button type=\"button\" onClick={() => toggle(true)}>\n          Toggle True\n        </button>\n      </p>\n    </div>\n  );\n};",d="import React from 'react';\nimport { useToggle } from '@rangine/richardo2016-hooks';\n\nexport default () => {\n  const [state, { toggle, setLeft, setRight }] = useToggle('Hello', 'World');\n\n  return (\n    <div>\n      <p>Effects\uff1a{state}</p>\n      <p>\n        <button type=\"button\" onClick={() => toggle()}>\n          Toggle\n        </button>\n        <button type=\"button\" onClick={() => toggle('Hello')} style={{ margin: '0 8px' }}>\n          Toggle Hello\n        </button>\n        <button type=\"button\" onClick={() => toggle('World')}>\n          Toggle World\n        </button>\n        <button type=\"button\" onClick={setLeft} style={{ margin: '0 8px' }}>\n          Set Hello\n        </button>\n        <button type=\"button\" onClick={setRight}>\n          Set World\n        </button>\n      </p>\n    </div>\n  );\n};";t["default"]={"ghost-on-react-hooks-demo":{component:Object(s["dynamic"])({loader:function(){var e=Object(r["default"])(o.a.mark((function e(){var t,r,a,s;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=function(){var e=a.default.useState(0),t=(0,r.default)(e,2),n=t[0],o=t[1],s=a.default.useState(""),u=(0,r.default)(s,2),c=u[0],l=u[1];return a.default.useEffect((function(){var e=setInterval((function(){o((function(e){return e+1}))}),1e3);return function(){clearInterval(e)}}),[]),a.default.createElement(a.default.Fragment,null,a.default.createElement("p",null,"time counter: ",n),a.default.createElement("input",{value:c,onChange:function(e){l(e.target.value)},placeholder:"text value"}))},t=n("K+nK"),e.t0=t,e.next=5,n.e(5).then(n.bind(null,"tJVT"));case 5:return e.t1=e.sent,r=(0,e.t0)(e.t1),e.t2=t,e.next=10,Promise.resolve().then(n.t.bind(null,"cDcd",7));case 10:return e.t3=e.sent,a=(0,e.t2)(e.t3),e.abrupt("return",s);case 13:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{jsx:"import React from 'react';\n\nexport default function SimpleInput() {\n  const [clock, setClock] = React.useState(0);\n  const [textValue, setTextValue] = React.useState('');\n\n  React.useEffect(() => {\n    const timer = setInterval(() => {\n      setClock((prev) => prev + 1);\n    }, 1000);\n\n    return () => {\n      clearInterval(timer);\n    };\n  }, []);\n\n  return (\n    <>\n      <p>time counter: {clock}</p>\n      <input\n        value={textValue}\n        onChange={(domEvt) => {\n          setTextValue(domEvt.target.value);\n        }}\n        placeholder=\"text value\"\n      />\n    </>\n  );\n}"}},dependencies:{react:{version:"16.14.0"}},defaultShowCode:!0,identifier:"ghost-on-react-hooks-demo"}},"ghost-on-react-hooks-demo-1":{component:Object(s["dynamic"])({loader:function(){var e=Object(r["default"])(o.a.mark((function e(){var t,r,a,s;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=function(){var e=a.default.useState(0),t=(0,r.default)(e,2),n=t[0],o=t[1],s=a.default.useState(""),u=(0,r.default)(s,2),c=u[0],l=u[1],d=a.default.useCallback((function(e){l(e.target.value)}),[]);return a.default.useEffect((function(){var e=setInterval((function(){o((function(e){return e+1}))}),1e3);return function(){clearInterval(e)}}),[]),a.default.createElement(a.default.Fragment,null,a.default.createElement("p",null,"time counter: ",n),a.default.createElement("input",{value:c,onChange:d,placeholder:"text value"}))},t=n("K+nK"),e.t0=t,e.next=5,n.e(5).then(n.bind(null,"tJVT"));case 5:return e.t1=e.sent,r=(0,e.t0)(e.t1),e.t2=t,e.next=10,Promise.resolve().then(n.t.bind(null,"cDcd",7));case 10:return e.t3=e.sent,a=(0,e.t2)(e.t3),e.abrupt("return",s);case 13:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{jsx:"import React from 'react';\n\nexport default function SimpleInput() {\n  const [clock, setClock] = React.useState(0);\n  const [textValue, setTextValue] = React.useState('');\n\n  const onTextChange = React.useCallback((domEvt) => {\n    setTextValue(domEvt.target.value);\n  }, []);\n\n  React.useEffect(() => {\n    const timer = setInterval(() => {\n      setClock((prev) => prev + 1);\n    }, 1000);\n\n    return () => {\n      clearInterval(timer);\n    };\n  }, []);\n\n  return (\n    <>\n      <p>time counter: {clock}</p>\n      <input\n        value={textValue}\n        onChange={onTextChange}\n        placeholder=\"text value\"\n      />\n    </>\n  );\n}"}},dependencies:{react:{version:"16.14.0"}},identifier:"ghost-on-react-hooks-demo-1"}},"ghost-on-react-hooks-demo-2":{component:Object(s["dynamic"])({loader:function(){var e=Object(r["default"])(o.a.mark((function e(){var t,r,a,s,u,c,l,d,i,f,p,m;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return m=function(){var e=c.default.useState(i),t=(0,s.default)(e,2),n=t[0],o=t[1],l=c.default.useState(null),d=(0,s.default)(l,2),m=d[0],h=d[1],v=c.default.useState(null),b=(0,s.default)(v,2),g=b[0],y=b[1],x=c.default.useCallback((0,u.default)(r.default.mark((function e(){var t;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("[loadData] get sortBy",m),console.log("[loadData] get orderBy",g),e.next=4,f(m,g);case 4:t=e.sent,o(t);case 6:case"end":return e.stop()}}),e)}))),[m,g]),w=c.default.useCallback(function(){var e=(0,u.default)(r.default.mark((function e(t,n,a){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("[handlePageChange] setSortBy, setOrderBy from sorter",a),h(a.field),y(a.order),x();case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),[x]);return c.default.createElement("div",{className:"App"},c.default.createElement("div",null,"sortBy: ",m||"-"," ",c.default.createElement("br",null),"orderBy: ",g||"-"," ",c.default.createElement("br",null)),c.default.createElement(a.default,{dataSource:n,columns:p,onChange:w}))},t=n("K+nK"),e.t0=t,e.next=5,Promise.resolve().then(n.t.bind(null,"WmNS",7));case 5:return e.t1=e.sent,r=(0,e.t0)(e.t1),e.next=9,n.e(7).then(n.bind(null,"g9YV"));case 9:return e.t2=t,e.next=12,Promise.all([n.e(1),n.e(2),n.e(6),n.e(8)]).then(n.bind(null,"wCAj"));case 12:return e.t3=e.sent,a=(0,e.t2)(e.t3),e.t4=t,e.next=17,n.e(5).then(n.bind(null,"tJVT"));case 17:return e.t5=e.sent,s=(0,e.t4)(e.t5),e.t6=t,e.next=22,Promise.resolve().then(n.bind(null,"9og8"));case 22:return e.t7=e.sent,u=(0,e.t6)(e.t7),e.t8=t,e.next=27,Promise.resolve().then(n.t.bind(null,"cDcd",7));case 27:return e.t9=e.sent,c=(0,e.t8)(e.t9),e.next=31,Promise.resolve().then(n.t.bind(null,"Exp3",7));case 31:return e.sent,l=function(e,t){return e<=t?-1:1},d=function(e,t){return e>t?-1:1},i=Array(100).fill(void 0).map((function(e,t){return{f1:t+1,f2:Math.floor(100*Math.random()),f3:Math.floor(1e3*Math.random())}})).sort((function(e,t){return d(e.f1,t.f1)})),f=function(){var e=(0,u.default)(r.default.mark((function e(t,n){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",i.sort((function(e,r){switch(n){case"ascend":return l(e[t],r[t]);default:return Array.from(i);case"descend":return d(e[t],r[t])}})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=[{title:"f1",dataIndex:"f1",sorter:!0},{title:"f2",dataIndex:"f2",sorter:!0},{title:"f3",dataIndex:"f3",sorter:!0}],e.abrupt("return",m);case 38:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{jsx:"import React from 'react';\nimport { Table } from 'antd';\n\nconst ascOrder = (a, b) => (a <= b ? -1 : 1);\nconst descOrder = (a, b) => (a > b ? -1 : 1);\n\nconst dataSource = Array(100)\n  .fill(undefined)\n  .map((x, idx) => {\n    return {\n      f1: idx + 1,\n      f2: Math.floor(Math.random() * 100),\n      f3: Math.floor(Math.random() * 1000),\n    };\n  })\n  .sort((a, b) => descOrder(a.f1, b.f1));\n\nconst fakeResortByRemote = async (sortBy, order) => {\n  return dataSource.sort((a, b) => {\n    switch (order) {\n      case 'ascend':\n        return ascOrder(a[sortBy], b[sortBy]);\n      default:\n        return Array.from(dataSource);\n      case 'descend':\n        return descOrder(a[sortBy], b[sortBy]);\n    }\n  });\n};\n\nconst columnsConfig = [\n  {\n    title: 'f1',\n    dataIndex: 'f1',\n    sorter: true,\n  },\n  {\n    title: 'f2',\n    dataIndex: 'f2',\n    sorter: true,\n  },\n  {\n    title: 'f3',\n    dataIndex: 'f3',\n    sorter: true,\n  },\n];\n\nexport default function App() {\n  const [listData, setListData] = React.useState(dataSource);\n  const [sortBy, setSortBy] = React.useState(null);\n  const [orderBy, setOrderBy] = React.useState(null);\n\n  const loadData = React.useCallback(async () => {\n    console.log('[loadData] get sortBy', sortBy);\n    console.log('[loadData] get orderBy', orderBy);\n    const newDataSource = await fakeResortByRemote(sortBy, orderBy);\n    setListData(newDataSource);\n  }, [sortBy, orderBy]);\n\n  const handlePageChange = React.useCallback(\n    async (_, _1, sorter) => {\n      console.log(\n        '[handlePageChange] setSortBy, setOrderBy from sorter',\n        sorter,\n      );\n      setSortBy(sorter.field);\n      setOrderBy(sorter.order);\n      loadData();\n    },\n    [loadData],\n  );\n\n  return (\n    <div className=\"App\">\n      <div>\n        sortBy: {sortBy || '-'} <br />\n        orderBy: {orderBy || '-'} <br />\n      </div>\n      <Table\n        dataSource={listData}\n        columns={columnsConfig}\n        onChange={handlePageChange}\n      />\n    </div>\n  );\n}"}},dependencies:{antd:{version:"4.16.13",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"ghost-on-react-hooks-demo-2"}},"ghost-on-react-hooks-demo-3":{component:Object(s["dynamic"])({loader:function(){var e=Object(r["default"])(o.a.mark((function e(){var t,r,a,s,u,c,l,d,i,f,p,m;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return m=function(){var e=c.default.useState(i),t=(0,s.default)(e,2),n=t[0],o=t[1],l=c.default.useState(null),d=(0,s.default)(l,2),m=d[0],h=d[1],v=c.default.useState(null),b=(0,s.default)(v,2),g=b[0],y=b[1],x=c.default.useCallback(function(){var e=(0,u.default)(r.default.mark((function e(t,n){var a;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f(t,n);case 2:a=e.sent,o(a),h(t),y(n);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[]),w=c.default.useCallback(function(){var e=(0,u.default)(r.default.mark((function e(t,n,a){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:x(a.field,a.order);case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),[x]);return c.default.createElement("div",{className:"App"},c.default.createElement("div",null,"sortBy: ",m||"-"," ",c.default.createElement("br",null),"orderBy: ",g||"-"," ",c.default.createElement("br",null)),c.default.createElement(a.default,{dataSource:n,columns:p,onChange:w}))},t=n("K+nK"),e.t0=t,e.next=5,Promise.resolve().then(n.t.bind(null,"WmNS",7));case 5:return e.t1=e.sent,r=(0,e.t0)(e.t1),e.next=9,n.e(7).then(n.bind(null,"g9YV"));case 9:return e.t2=t,e.next=12,Promise.all([n.e(1),n.e(2),n.e(6),n.e(8)]).then(n.bind(null,"wCAj"));case 12:return e.t3=e.sent,a=(0,e.t2)(e.t3),e.t4=t,e.next=17,n.e(5).then(n.bind(null,"tJVT"));case 17:return e.t5=e.sent,s=(0,e.t4)(e.t5),e.t6=t,e.next=22,Promise.resolve().then(n.bind(null,"9og8"));case 22:return e.t7=e.sent,u=(0,e.t6)(e.t7),e.t8=t,e.next=27,Promise.resolve().then(n.t.bind(null,"cDcd",7));case 27:return e.t9=e.sent,c=(0,e.t8)(e.t9),e.next=31,Promise.resolve().then(n.t.bind(null,"Exp3",7));case 31:return e.sent,l=function(e,t){return e<=t?-1:1},d=function(e,t){return e>t?-1:1},i=Array(100).fill(void 0).map((function(e,t){return{f1:t+1,f2:Math.floor(100*Math.random()),f3:Math.floor(1e3*Math.random())}})).sort((function(e,t){return d(e.f1,t.f1)})),f=function(){var e=(0,u.default)(r.default.mark((function e(t,n){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",i.sort((function(e,r){switch(n){case"ascend":return l(e[t],r[t]);default:return Array.from(i);case"descend":return d(e[t],r[t])}})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=[{title:"f1",dataIndex:"f1",sorter:!0},{title:"f2",dataIndex:"f2",sorter:!0},{title:"f3",dataIndex:"f3",sorter:!0}],e.abrupt("return",m);case 38:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{jsx:"import React from 'react';\nimport { Table } from 'antd';\n\nconst ascOrder = (a, b) => (a <= b ? -1 : 1);\nconst descOrder = (a, b) => (a > b ? -1 : 1);\n\nconst dataSource = Array(100)\n  .fill(undefined)\n  .map((x, idx) => {\n    return {\n      f1: idx + 1,\n      f2: Math.floor(Math.random() * 100),\n      f3: Math.floor(Math.random() * 1000),\n    };\n  })\n  .sort((a, b) => descOrder(a.f1, b.f1));\n\nconst fakeResortByRemote = async (sortBy, order) => {\n  return dataSource.sort((a, b) => {\n    switch (order) {\n      case 'ascend':\n        return ascOrder(a[sortBy], b[sortBy]);\n      default:\n        return Array.from(dataSource);\n      case 'descend':\n        return descOrder(a[sortBy], b[sortBy]);\n    }\n  });\n};\n\nconst columnsConfig = [\n  {\n    title: 'f1',\n    dataIndex: 'f1',\n    sorter: true,\n  },\n  {\n    title: 'f2',\n    dataIndex: 'f2',\n    sorter: true,\n  },\n  {\n    title: 'f3',\n    dataIndex: 'f3',\n    sorter: true,\n  },\n];\n\nexport default function App() {\n  const [listData, setListData] = React.useState(dataSource);\n  const [sortBy, setSortBy] = React.useState(null);\n  const [orderBy, setOrderBy] = React.useState(null);\n\n  const loadData = React.useCallback(async (sortField, order) => {\n    const newDataSource = await fakeResortByRemote(sortField, order);\n    setListData(newDataSource);\n    setSortBy(sortField);\n    setOrderBy(order);\n  }, []);\n\n  const handlePageChange = React.useCallback(\n    async (_, _1, sorter) => {\n      loadData(sorter.field, sorter.order);\n    },\n    [loadData],\n  );\n\n  return (\n    <div className=\"App\">\n      <div>\n        sortBy: {sortBy || '-'} <br />\n        orderBy: {orderBy || '-'} <br />\n      </div>\n      <Table\n        dataSource={listData}\n        columns={columnsConfig}\n        onChange={handlePageChange}\n      />\n    </div>\n  );\n}"}},dependencies:{antd:{version:"4.16.13",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"ghost-on-react-hooks-demo-3"}},"useboolean-demo1":{component:Object(s["dynamic"])({loader:function(){var e=Object(r["default"])(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(10).then(n.bind(null,"yoie"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{tsx:u}},dependencies:{react:{version:"^16.8.6 || ^17.0"},"@rangine/richardo2016-hooks":{version:"0.1.1"}},title:"Default usage","title.zh-CN":"\u57fa\u7840\u7528\u6cd5",description:'<div class="markdown"><p>Default as a switch function, or accept a parameter to change state.</p></div>',"description.zh-CN":'<div class="markdown"><p>\u9ed8\u8ba4\u5207\u6362\u5e03\u5c14\u503c\u72b6\u6001\uff0c\u4e5f\u53ef\u4ee5\u63a5\u6536\u4e00\u4e2a\u53c2\u6570\u4f5c\u4e3a\u65b0\u7684\u503c\u3002</p></div>',identifier:"useboolean-demo1"}},"useonclickoutside-demo1":{component:Object(s["dynamic"])({loader:function(){var e=Object(r["default"])(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(10).then(n.bind(null,"CWh3"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{tsx:c}},dependencies:{react:{version:"^16.8.6 || ^17.0"},"@rangine/richardo2016-hooks":{version:"0.1.1"}},title:"Default usage","title.zh-CN":"\u57fa\u7840\u7528\u6cd5",description:"","description.zh-CN":'<div class="markdown"><p>\u70b9\u51fb\u6309\u94ae\u4e4b\u5916, \u89e6\u53d1\u56de\u8c03\u4f7f\u5f97\u8ba1\u6570\u5668\u589e\u52a0; \u70b9\u51fb\u6309\u94ae, \u5c06\u8ba1\u6570\u5668\u6e05\u96f6</p></div>',identifier:"useonclickoutside-demo1"}},"usetoggle-demo1":{component:Object(s["dynamic"])({loader:function(){var e=Object(r["default"])(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(10).then(n.bind(null,"82LI"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{tsx:l}},dependencies:{react:{version:"^16.8.6 || ^17.0"},"@rangine/richardo2016-hooks":{version:"0.1.1"}},title:"Default usage","title.zh-CN":"\u57fa\u7840\u7528\u6cd5",description:'<div class="markdown"><p>use boolean value as default\uff0cuse it as same as useBoolean.</p></div>',"description.zh-CN":'<div class="markdown"><p>\u9ed8\u8ba4\u4e3a boolean \u5207\u6362\uff0c\u57fa\u7840\u7528\u6cd5\u4e0e useBoolean \u4e00\u81f4\u3002</p></div>',identifier:"usetoggle-demo1"}},"usetoggle-demo2":{component:Object(s["dynamic"])({loader:function(){var e=Object(r["default"])(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(10).then(n.bind(null,"Dr+N"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{tsx:d}},dependencies:{react:{version:"^16.8.6 || ^17.0"},"@rangine/richardo2016-hooks":{version:"0.1.1"}},title:"Switch between any two values","title.zh-CN":"\u5728\u4efb\u610f\u4e24\u4e2a\u503c\u4e4b\u95f4\u5207\u6362",description:'<div class="markdown"><p>Accept two parameters, switch between them.</p></div>',"description.zh-CN":'<div class="markdown"><p>\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u5728\u53c2\u6570\u95f4\u8fdb\u884c\u5207\u6362\u3002</p></div>',identifier:"usetoggle-demo2"}}}},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);