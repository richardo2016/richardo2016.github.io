(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{CJNn:function(e,n,t){"use strict";t.r(n);var a=t("cDcd"),l=t.n(a),r=t("dEAq"),o=t("H1Ra"),c=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("p",null,"\u4e00\u5929, \u5728\u67d0\u4e2a\u516b\u5366\u7fa4\u91cc, E \u541b\u7a81\u7136\u629b\u51fa\u8fd9\u6837\u4e00\u4e2a\u95ee\u9898:"),l.a.createElement("img",{style:{maxHeight:"30vh",margin:"0 auto",display:"block"},src:"https://user-images.githubusercontent.com/6339390/131245739-d8b84a49-e7ea-4159-8883-6d297d8bc150.png"}),l.a.createElement("p",null,"\u6253\u5f00",l.a.createElement(r["Link"],{to:"https://www.typescriptlang.org/play/#code/C4TwDgpgBAogNhAthAdsACgJwPZgM5QC8UA3gFBRQBGArsMNigFykWVQAmAlngIZUIOLKtmwJeKANxsAvtMpcUYOi3LtOPfoOGjxUtpQBuvODQgs8wTIoDm8qHLZdEN1Qah5MAYwtXb9x0cyUEhYBGQ0LFw8AFleMCJWSgAiWnpGADpuPgEIDmSdMQgJe2TFZWAszVz8wr1S8roM41MIAo8-FDs2MpcMzy92y2su6SCgA"},"\u6e90\u9898\u76ee"),"\u8fd9\u4e2a\u94fe\u63a5, \u770b\u4e00\u4e0b\u9700\u6c42:"),l.a.createElement(o["a"],{code:"// \u7b14\u8005: \u4e3a\u4e86\u4fbf\u4e8e\u8bb2\u89e3, \u4e0b\u6587\u5c06\u8be5\u7c7b\u578b\u79f0\u4e3a \"original type\"/\"\u6e90\u7c7b\u578b\"\ntype ElementProps = {\n  button: {\n    disabled: boolean;\n  };\n  input: {\n    disabled: boolean;\n    value: string;\n  };\n  img: {\n    src: string;\n  };\n};\n\n// \u7b14\u8005: \u4e3a\u4e86\u4fbf\u4e8e\u8bb2\u89e3, \u4e0b\u6587\u5c06\u8be5\u7c7b\u578b\u79f0\u4e3a \"target type\"/\"\u76ee\u6807\u7c7b\u578b\"\ntype ElementPropsMap = {\n  'button.disabled': boolean;\n  'input.disabled': boolean;\n  'input.value': string;\n  'img.src': string;\n};",lang:"ts"}),l.a.createElement("p",null,"\u7fa4\u53cb\u4eec\u7eb7\u7eb7\u5efa\u8a00\u732e\u7b56, \u6700\u540e\u5927\u81f4\u7ed9\u51fa\u4e86\u4ee5\u4e0b\u51e0\u7c7b\u7b54\u6848. \u7b14\u8005\u8bb0\u5f55\u5230\u672c\u6587, \u5e76\u7ed9\u51fa\u89e3\u6790."),l.a.createElement("p",null,"\u4e3a\u4f18\u5316\u9605\u8bfb\u4f53\u9a8c, \u6211\u4eec\u7ea6\u5b9a:"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u7b14\u8005\u4f1a\u5728\u7684 ts \u4ee3\u7801\u4e2d\u6dfb\u52a0\u6ce8\u91ca\u7528\u4e8e\u89e3\u91ca, \u8fd9\u7c7b\u6ce8\u91ca\u4f1a\u4ee5 ",l.a.createElement("code",null,"// \u7b14\u8005:")," \u5f00\u5934"),l.a.createElement("li",null,l.a.createElement("code",null,"NESTED-PROPERTY-NAME")," \u6307\u4ee3(means) ",l.a.createElement("code",null,"a.b.c.d")," \u8fd9\u7c7b\u7528\u4e8e\u591a\u7ea7\u8bbf\u95ee\u7684\u7684\u5c5e\u6027 key"),l.a.createElement("li",null,"\u7531 ",l.a.createElement("code",null,"NESTED-PROPERTY-NAME")," \u6307\u5411(refer to)\u7684 type \u79f0\u4e3a ",l.a.createElement("code",null,"NESTED-PROPERTY-TYPEVALUE"),", \u5982\u5bf9\u4e8e ",l.a.createElement("code",null,"{","a: ","{","b: c: ","{","d: string","}","}","}"),", ",l.a.createElement("code",null,"a.b.c.d")," \u6307\u5411 ",l.a.createElement("code",null,"string"))),l.a.createElement("p",null,l.a.createElement("strong",null,"\u6ce8\u610f")," \u8fd9\u4e2a\u9700\u6c42\u5f88\u663e\u7136\u53ef\u4ee5\u7528",l.a.createElement("strong",null,"\u9012\u5f52"),"\u7684\u601d\u60f3\u6765\u89e3\u51b3, \u8bf7\u6ce8\u610f\u89e3\u6790\u4e2d\u5173\u4e8e",l.a.createElement("strong",null,"\u9012\u5f52"),"\u7684\u90e8\u5206"),l.a.createElement("h2",{id:"\u7b2c\u4e00\u7c7b-\u4ee5-nested-key-\u9a71\u52a8"},l.a.createElement(r["AnchorLink"],{to:"#\u7b2c\u4e00\u7c7b-\u4ee5-nested-key-\u9a71\u52a8","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u7b2c\u4e00\u7c7b: \u4ee5 Nested Key \u9a71\u52a8"),l.a.createElement("h3",{id:"\u65b9\u6848\u4e00\u7684\u539f\u7406"},l.a.createElement(r["AnchorLink"],{to:"#\u65b9\u6848\u4e00\u7684\u539f\u7406","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u65b9\u6848\u4e00\u7684\u539f\u7406"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u5148\u7f16\u5199\u4e00\u4e2a\u7c7b\u578b ",l.a.createElement("code",null,"IGetNestedKeys<TSRC>"),", \u7528\u4e8e\u63d0\u53d6\u51fa\u6240\u6709\u53ef\u80fd\u7684\u7531 nested key \u7ec4\u6210\u7684\u6df1\u5ea6\u8bbf\u95ee NESTED-PROPERTY-NAME"),l.a.createElement("li",null,"\u7136\u540e\u7f16\u5199\u53e6\u4e00\u4e2a\u7c7b\u578b ",l.a.createElement("code",null,"IGetNestedValues<TSRC, NESTED-PROPERTY-NAME>"),", \u6d88\u8d39 NESTED-PROPERTY-NAME, \u7528\u6bcf\u4e00\u4e2a NESTED-PROPERTY-NAME \u63d0\u53d6\u6e90\u7c7b\u578b\u5bf9\u5e94\u7684 value"),l.a.createElement("li",null,l.a.createElement("strong",null,"\u7ec4\u5408"),"\u4e3a:")),l.a.createElement(o["a"],{code:"{\n  [P in IGetNestedKeys<TSRC>]: IGetNestedValues<TSRC, P>\n}",lang:"ts"}),l.a.createElement("h3",{id:"ver1"},l.a.createElement(r["AnchorLink"],{to:"#ver1","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Ver.1"),l.a.createElement("p",null,"Skyline \u541b\u8f6c\u8f7d\u4e86",l.a.createElement(r["Link"],{to:"https://www.typescriptlang.org/play?#code/C4TwDgpgBAogNhAthAdsACgJwPZgM5QC8UA3gFBRQBGArsMNigFykWVQAmAlngIZUIOLKtmwJeKANxsAvtMpcUYOi3LtOPfoOGjxUtpQBuvODQgs8wTIoDm89h17BeeCMFUH2AM1EsUNRCoITHt1Kl5MCytbUKgZWXsuRBsPdTxMAGMo6xQ7BLI5MjJQSFgEZDQsXDwAWV4wIigAMTgneCRUDBx8AB52iq7qgD4ikugWpyqwAGkIEDwegBUhxsWoCAAPYFQOAgAlCAzsTA4eyxybABooGhQAaxRsAHcUFYB+VkoAbXQoRSg7nNsF4oIsALosX6bbYoXZQc62KAfAAGABISOgZAA6dETQYzOYLRY-MFDGTIqB+CCGYLSGRfQEgYGgsGUqAAcnZ0mK4Ggi2siAAMi5gAARbDAJYrYhraE7AhokiKLzBKAAVWxFI+arZKGptNGvKgAHE3FNFryltdptKoNN1lt5VBFcrVZicUqUCrMFA9uSkVAoY7YQRGcy1h9TfiLZAliTrnsVlSaT6WItuWNmq1gP1OlMiba1FAfn8UFnJt1ZvMpVAXKCBcLLOLJeghhCTWbujGIFbA0M6UA"},"\u4e00\u4f4d\u670b\u53cb\u7684\u89e3\u6cd5")),l.a.createElement("img",{style:{margin:"0 auto",display:"block"},src:"https://user-images.githubusercontent.com/6339390/131254498-20f46ea2-62d3-4b67-a952-b3ef43cbdf51.png"}),l.a.createElement(o["a"],{code:"type ElementProps = {\n  button: {\n    disabled: boolean;\n  };\n  input: {\n    disabled: boolean;\n    value: string;\n    dataset: {\n      foo: number;\n      bar: string;\n    };\n  };\n  img: {\n    src: string;\n  };\n};\n\ntype ElementPropsMap = FlatElementProps<ElementProps>;\n\n// \u7b14\u8005: \u4ee5\u4e0b\u5f00\u59cb\u5b9e\u73b0 FlatElementProps\n\n// \u7b14\u8005: FlatPropKeys \u7528\u4e8e\u5c06 nested object \u7684\u6240\u6709 property-chain \u63d0\u53d6\u51fa\u6765, \u7ec4\u6210\u4e00\u4e2a\n// Literal String Union.\ntype FlatPropKeys<T> = T extends Record<string, unknown>\n  ? {\n      [P in keyof T]: P extends string ? `${P}.${FlatPropKeys<T[P]>}` : never;\n    }[keyof T]\n  : '';\n\ntype TrimLastDot<T> = T extends `${infer U}.` ? U : never;\n\n// \u7b14\u8005: \u9700\u8981\u6ce8\u610f\u7684\u662f, \u5728\u8be5\u7248\u672c\u7684\u5b9e\u73b0\u4e2d,\n// \u5982\u679c\u4f60\u5e0c\u671b\u51c6\u786e\u8bbf\u95ee\u5230 nested object \u4e2d\u7684 leaf property key, \u5219 K \u5e94\u8be5\u662f\u6709\u4e00\u4e2a '.' \u7ed3\u5c3e\u7684\ntype GetPropType<T, K> = K extends `${infer P}.${infer R}`\n  ? P extends keyof T\n    ? GetPropType<T[P], R>\n    : never\n  : T;\n\ntype FlatElementProps<T> = {\n  [P in FlatPropKeys<T> as TrimLastDot<P>]: GetPropType<T, P>;\n};",lang:"ts"}),l.a.createElement("h3",{id:"ver1-\u7684-igetnestedkeys"},l.a.createElement(r["AnchorLink"],{to:"#ver1-\u7684-igetnestedkeys","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Ver.1 \u7684 IGetNestedKeys"),l.a.createElement("p",null,l.a.createElement("strong",null,l.a.createElement("code",null,"type FlatPropKeys<T>"))),l.a.createElement("p",null,"\u7528\u4e8e\u5148\u63d0\u53d6\u51fa\u6240\u6709\u53ef\u80fd\u7684\u7531 nested key \u7ec4\u6210\u7684\u6df1\u5ea6\u8bbf\u95ee NESTED-PROPERTY-NAME"),l.a.createElement("p",null,"\u5982\u6e90\u7c7b\u578b ",l.a.createElement("code",null,"ElementProps")," \u6709 ",l.a.createElement("code",null,"input.dataset.foo")," \u8fd9\u6837\u7684\u8bbf\u95ee\u8def\u5f84, \u901a\u8fc7 ",l.a.createElement("code",null,"FlatPropKeys<ElementProps>"),", \u5219\u8fd4\u56de\u7684 string union type \u4e2d\u5219\u4f1a\u5305\u542b ",l.a.createElement("code",null,"'input.dataset.foo.'")),l.a.createElement("p",null,l.a.createElement("img",{src:"https://user-images.githubusercontent.com/6339390/131246172-e76dea6c-e007-4c1c-bc18-a5827a394d34.png",alt:"image"})),l.a.createElement("h3",{id:"ver1-\u7684-igetnestedvalues"},l.a.createElement(r["AnchorLink"],{to:"#ver1-\u7684-igetnestedvalues","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Ver.1 \u7684 IGetNestedValues"),l.a.createElement("p",null,l.a.createElement("strong",null,l.a.createElement("code",null,"type GetPropType<T, K>"))),l.a.createElement("p",null,"\u5b83\u63a5\u53d7 NESTED-PROPERTY-NAME \u4e3a\u53c2\u6570, \u53bb\u6e90\u7c7b\u578b\u4e2d\u63d0\u53d6 nested value. \u4f8b\u5982, \u540c\u6837\u5bf9\u4e8e\u7c7b\u578b"),l.a.createElement(o["a"],{code:"type Foo = {\n  foo1: {\n    foo2: {\n      foo3: string;\n    };\n  };\n};",lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"GetPropType<Foo, 'foo1.'>")," \u7b49\u4ef7\u4e8e ",l.a.createElement("code",null,"Foo['foo1']")),l.a.createElement("li",null,l.a.createElement("code",null,"GetPropType<Foo, 'foo1.foo2.'>")," \u7b49\u4ef7\u4e8e ",l.a.createElement("code",null,"Foo['foo1']['foo2']"))),l.a.createElement("p",null,"\u6211\u4eec\u7ec6\u81f4\u5730\u5206\u6790\u4e0b\u5176\u5b9e\u73b0"),l.a.createElement(o["a"],{code:"type GetPropType<T, K> = K extends `${infer P}.${infer R}`\n  ? P extends keyof T\n    ? GetPropType<T[P], R>\n    : never\n  : T;",lang:"ts"}),l.a.createElement("p",null,"\u8be5\u5b9e\u73b0\u89e3\u91ca\u4e3a, \u5bf9\u4e8e\u4e00\u4e2a nested object \u7684\u5165\u53c2 ",l.a.createElement("code",null,"T")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5982\u679c K \u4e0d\u662f NESTED-PROPERTY-NAME, \u90a3\u4e48, \u76f4\u63a5\u8fd4\u56de T \u672c\u8eab"),l.a.createElement("li",null,"\u5982\u679c K \u662f NESTED-PROPERTY-NAME, \u90a3\u4e48, \u4ece\u5176",l.a.createElement("strong",null,"\u7b2c\u4e00\u4e2a")," ",l.a.createElement("code",null,".")," \u5206\u5272\u4e3a\u4e24\u90e8\u5206 ",l.a.createElement("code",null,"P"),", ",l.a.createElement("code",null,"R"),"; \u8fd4\u56de ",l.a.createElement("code",null,"GetPropType<T[P], R>"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5982 P \u521a\u597d\u662f T \u7684 property name, ",l.a.createElement("code",null,"T[P]")," \u4f5c\u4e3a ",l.a.createElement("code",null,"GetPropType")," \u5165\u53c2"),l.a.createElement("li",null,"\u5982\u679c ",l.a.createElement("code",null,"T[P]")," \u6b64\u65f6\u672c\u8eab\u4e5f\u662f\u4e00\u4e2a nested object, \u90a3\u4e48 ",l.a.createElement("code",null,"GetPropType<T[P], R>")," \u4f1a\u5bfc\u81f4\u8fdb\u4e00\u6b65\u63d0\u53d6 ",l.a.createElement("code",null,"T")," \u4e2d\u518d\u4e0b\u4e00\u5c42\u7ea7\u7684\u503c")))),l.a.createElement("p",null,"\u5f88\u663e\u7136\u8fd9\u662f\u4e00\u4e2a\u6709\u4e2d\u6b62\u6761\u4ef6\u7684\u9012\u5f52, \u4ee5\u4e0b\u60c5\u5f62\u90fd\u662f\u53ef\u80fd\u7684\u9012\u5f52\u7ec8\u6b62:"),l.a.createElement("ol",null,l.a.createElement("li",null,"K \u4e2d\u4e0d\u5305\u542b ",l.a.createElement("code",null,".")),l.a.createElement("li",null,"K \u4e2d\u5305\u542b ",l.a.createElement("code",null,"."),", \u4f46 ",l.a.createElement("code",null,"R")," \u7b49\u4ef7\u4e8e ",l.a.createElement("code",null,'""'),", \u89e6\u53d1 ",l.a.createElement("code",null,"GetPropType<T[P], R>"),", \u5230\u4e0b\u4e00\u7ea7\u65f6, \u56de\u5230\u4e0a\u4e00\u79cd\u60c5\u51b5, \u9012\u5f52\u7ec8\u6b62")),l.a.createElement("p",null,"\u5982\u4f55\u7406\u89e3\u60c5\u5f62 2? \u4ee5 ",l.a.createElement("code",null,"GetPropType<Foo, 'foo1.foo2.foo3.'>")," \u4e3a\u4f8b, \u89e3\u6790\u8fc7\u7a0b\u5982\u4e0b:"),l.a.createElement(o["a"],{code:"--- `GetPropType<Foo, 'foo1.foo2.foo3.'>`\n--- \u2192 `GetPropType<Foo['foo1'], 'foo2.foo3.'>`\n--- \u2192 `GetPropType<Foo['foo1']['foo2'], 'foo3.'>` (\u60c5\u5f62 2)\n--- \u2192 `GetPropType<Foo['foo1']['foo2']['foo3'], ''>`\n--- \u2192 `Foo['foo1']['foo2']['foo3']`",lang:"unknown"}),l.a.createElement("h3",{id:"ver1-\u7684\u7ec4\u5408"},l.a.createElement(r["AnchorLink"],{to:"#ver1-\u7684\u7ec4\u5408","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Ver.1 \u7684\u7ec4\u5408"),l.a.createElement("p",null,"\u73b0\u5728, \u7ed3\u5408 ",l.a.createElement("code",null,"FlatPropKeys<T>")," \u548c ",l.a.createElement("code",null,"GetPropType<T, P>"),", \u53ef\u4ee5\u5199\u51fa"),l.a.createElement(o["a"],{code:"type FlatElementProps<T> = {\n  [P in FlatPropKeys<T> as TrimLastDot<P>]: GetPropType<T, P>;\n};",lang:"ts"}),l.a.createElement("p",null,l.a.createElement("strong",null,"\u6ce8\u610f")," \u76f4\u63a5\u4f7f\u7528 ",l.a.createElement("code",null,"FlatPropKeys<T>")," \u5f97\u5230\u7684 NESTED-PROPERTY-NAME \u672b\u5c3e\u4f1a\u591a\u4e00\u4e2a ",l.a.createElement("code",null,"."),", \u56e0\u6b64\u5f53\u5c06\u5176\u4f5c\u4e3a interface key \u65f6, \u6211\u4eec\u9700\u8981\u4f7f\u7528 ",l.a.createElement("code",null,"as TrimLastDot<P>")," \u5bf9\u5176\u505a\u4e00\u6b21 remap"),l.a.createElement("p",null,l.a.createElement("img",{src:"https://user-images.githubusercontent.com/6339390/131246250-1d312256-4b1c-4ac3-9e1b-b9b0b1d19a84.png",alt:"image"})),l.a.createElement("h3",{id:"ver1-\u603b\u7ed3"},l.a.createElement(r["AnchorLink"],{to:"#ver1-\u603b\u7ed3","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Ver1. \u603b\u7ed3"),l.a.createElement("p",null,"\u8be5\u7248\u672c\u80fd\u591f\u5b9e\u73b0\u9700\u6c42, \u4e0d\u8fc7, \u6211\u4eec\u6ce8\u610f\u5230:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"FlatPropKeys<T>")," \u672b\u5c3e\u7684 ",l.a.createElement("code",null,".")," \u7ed9\u4eba\u611f\u89c9\u4e0d\u591f\u5e72\u51c0\u5229\u843d"),l.a.createElement("li",null,l.a.createElement("code",null,"GetPropType<T, K>")," \u4e2d, \u8981\u51c6\u786e\u7684\u83b7\u53d6 ",l.a.createElement("code",null,"T")," \u4e2d\u7684 leaf property, \u5219 ",l.a.createElement("code",null,"K")," \u88ab\u9884\u671f\u4ee5 ",l.a.createElement("code",null,".")," \u7ed3\u5c3e")),l.a.createElement("p",null,'\u8fd9\u4e24\u70b9\u662f\u4e92\u76f8\u914d\u5408\u7684. \u4f46\u6211\u4eec\u80fd\u5c1d\u8bd5\u53bb\u6389"\u672b\u5c3e',l.a.createElement("code",null,"."),'"\u4e48? \u6765\u770b\u4e00\u4e0b Ver.2'),l.a.createElement("h3",{id:"ver2"},l.a.createElement(r["AnchorLink"],{to:"#ver2","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Ver.2"),l.a.createElement("p",null,"\u5f88\u5feb, M \u541b\u63d0\u51fa\u4e00\u4e2a Ver.1 \u7684",l.a.createElement(r["Link"],{to:"https://www.typescriptlang.org/play?#code/C4TwDgpgBAogNhAthAdsACgJwPZgM5QC8UA3gFBRQBGArsMNigFykWVQAmAlngIZUIOLKtmwJeKANxsAvtMpcUYOi3LtOPfoOGjxUtpQBuvODQgs8wTIoDm89h17BeeCMFUH2AM1EsUNRCoITHt1Kl5MCytbUKgZWXsuRBsPdTxMAGMo6xQ7BLI5MjJQSFgEZDQsXDwAWV4wIlZKACJaekYAOm4+AQgOZp0xCAl7ZsVlYC7NXv7BvVHxug7jUwgBqEscvJbFycdnV0mfbHX-QOCFpSX9lzcO8Mx1zZi2MeSO9Iyn6NzpQuLwNAAOJuAByEEsfSqYAAKoCADwwgA0UAAqlAIAAPYCoDgEZ65AB8jRhGOxuIIACUIBlsJgOPCCTYUTQUABrFDYADuKGJAH42OisTiUHioAADAAkJEUXmCUAAMhAvMAZB1pbL5ZSuDYABaq8WePlQEHAcGQjjQuGQREAbSVKoAuijtXrgITPCwYbbUY62H4IIZgkUSsCwRCcZacPhQbxkIjicRScKKVBqbT6YyfsyoKyOdzeVBjWooLaANJQRRQNkQEDYLxQGGOr3lx1kkVi9N0hlMlESED8iXSplQABkUDLaulpvNkeheFj8e9ZcdhJk4qgLDLBVtNbrDabm6gKEDwYBpQAYnAnPPrRBEe3U13M72oP3CYmmqWK1WR+OZxGULRgucb3jChLNia4YWlaCLIhOHrxOe0DUngNBwMAjRXjewF3vC8BIKgGDAR6QA"},"\u6539\u8fdb\u7248\u672c")),l.a.createElement(o["a"],{code:"type ElementProps = {\n  button: {\n    disabled: boolean;\n  };\n  input: {\n    disabled: boolean;\n    value: string;\n    dataset: {\n      foo: number;\n      bar: string;\n    };\n  };\n  img: {\n    src: string;\n  };\n};\n\ntype ElementPropsMap = {\n  'button.disabled': boolean;\n  'input.disabled': boolean;\n  'input.value': string;\n  'input.dataset.foo': number;\n  'input.dataset.bar': string;\n  'img.src': string;\n};\n\ntype GetNestedPropType<T, U extends string> = T extends Record<string, unknown>\n  ? U extends `${infer Left}.${infer Right}`\n    ? GetNestedPropType<T[Left], Right>\n    : T[U]\n  : never;\n\ntype GetNestedPropsName<T> = T extends Record<string, unknown>\n  ? {\n      [K in keyof T]: T[K] extends Record<string, any>\n        ? `${string & K}.${GetNestedPropsName<T[K]>}`\n        : K;\n    }[keyof T]\n  : never;\n\ntype FlatPropsType<T extends Record<string, any>> = {\n  [K in string & GetNestedPropsName<T>]: GetNestedPropType<T, K>;\n};\n\ntype Result = FlatPropsType<ElementProps>;",lang:"ts"}),l.a.createElement("p",null,'\u8be5\u7248\u672c\u6539\u8fdb\u4e86 Ver.1 "\u5c3e ',l.a.createElement("code",null,"."),' \u4e0d\u6389"\u7684\u95ee\u9898.'),l.a.createElement("h3",{id:"ver2-\u7684-igetnestedkeys"},l.a.createElement(r["AnchorLink"],{to:"#ver2-\u7684-igetnestedkeys","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Ver.2 \u7684 IGetNestedKeys"),l.a.createElement("p",null,"\u548c Ver.1 \u7684 ",l.a.createElement("code",null,"FlatPropKeys<T>")," \u76f8\u6bd4, ",l.a.createElement("code",null,"GetNestedPropsName<T>")," \u6c42\u51fa\u7684 NESTED-PROPERTY-NAME \u672b\u5c3e\u6ca1\u6709 ",l.a.createElement("code",null,".")),l.a.createElement("p",null,l.a.createElement("img",{src:"https://user-images.githubusercontent.com/6339390/131252491-af069f97-d581-4e52-828d-d765e46179af.png",alt:"image"})),l.a.createElement("h3",{id:"ver2-\u7684-igetnestedvalues"},l.a.createElement(r["AnchorLink"],{to:"#ver2-\u7684-igetnestedvalues","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Ver.2 \u7684 IGetNestedValues"),l.a.createElement("p",null,"\u76f8\u5e94\u7684, ",l.a.createElement("code",null,"GetNestedPropType<T, K>")," \u548c Ver.1 \u4e2d ",l.a.createElement("code",null,"GetPropType<T, K>")," \u7684\u5de5\u4f5c\u65b9\u5f0f\u6ca1\u6709\u533a\u522b, \u53ea\u662f\u9002\u914d\u4e86 ",l.a.createElement("code",null,"GetNestedPropsName<T>")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"GetPropType<T, K>"),": ",l.a.createElement("code",null,"K")," \u6765\u81ea\u4e8e ",l.a.createElement("code",null,"FlatPropKeys<T>")),l.a.createElement("li",null,l.a.createElement("code",null,"GetNestedPropType<T, K>"),": ",l.a.createElement("code",null,"K")," \u6765\u81ea\u4e8e ",l.a.createElement("code",null,"GetNestedPropsName<T>"))),l.a.createElement("h3",{id:"ver2-\u7684\u7ec4\u5408"},l.a.createElement(r["AnchorLink"],{to:"#ver2-\u7684\u7ec4\u5408","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Ver.2 \u7684\u7ec4\u5408"),l.a.createElement(o["a"],{code:"type FlatPropsType<T extends Record<string, any>> = {\n  [K in string & GetNestedPropsName<T>]: GetNestedPropType<T, K>;\n};",lang:"ts"}),l.a.createElement("p",null,"\u7531\u4e8e\u5728\u53d6 ",l.a.createElement("code",null,"K")," \u65f6\u4e0d\u5fc5\u518d\u7279\u610f\u4e3a\u4e86\u5c3e\u90e8\u7684 ",l.a.createElement("code",null,".")," \u505a\u4e00\u6b21 remmap, \u8fd9\u4e2a\u7ec4\u5408\u770b\u8d77\u6765\u6bd4 Ver.1 \u66f4\u5e72\u51c0"),l.a.createElement("h2",{id:"\u7b2c\u4e8c\u7c7b-key-value-\u540c\u65f6\u9012\u5f52"},l.a.createElement(r["AnchorLink"],{to:"#\u7b2c\u4e8c\u7c7b-key-value-\u540c\u65f6\u9012\u5f52","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u7b2c\u4e8c\u7c7b: Key-Value \u540c\u65f6\u9012\u5f52"),l.a.createElement("p",null,"\u7b2c\u4e00\u7c7b\u65b9\u6848\u7684\u601d\u60f3\u5728\u4e8e\u8ba9 NESTED-PROPERTY-NAME \u9a71\u52a8\u6c42\u51fa\u76ee\u6807\u7c7b\u578b\u5404\u4e2a value \u7684\u8fc7\u7a0b, \u8fd9\u4e2a\u8fc7\u7a0b\u4e2d, ",l.a.createElement("strong",null,"\u9012\u5f52\u5148\u53d1\u751f\u5728\u6c42 nested key \u65f6"),", \u5c14\u540e",l.a.createElement("strong",null,"\u53d1\u751f\u5728\u901a\u8fc7 nested key \u6c42 nested value")," \u65f6. \u8fd9\u4e24\u4e2a\u8fc7\u7a0b\u662f\u4e32\u884c\u7684."),l.a.createElement("p",null,"\u53e6\u4e00\u7c7b\u65b9\u6848\u662f, \u5c06\u8fd9\u4e24\u4e2a\u8fc7\u7a0b\u5728\u4e00\u6b21\u9012\u5f52\u4e2d\u5b8c\u6210: ",l.a.createElement("strong",null,"\u540c\u65f6\u6c42 nested key \u548c nested value"),"."),l.a.createElement("p",null,"\u8fd9\u7c7b\u65b9\u6848\u6709\u4e24\u4e2a\u5b9e\u73b0\u7248\u672c:"),l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement(r["Link"],{to:"https://www.typescriptlang.org/play?#code/C4TwDgpgBAogNhAthAdsACgJwPZgM5QC8UA3gFBRQBGArsMNigFykWVQAmAlngIZUIOLKtmwJeKANxsAvtMpcUYOi3LtOPfoOGjxUtpQBuvODQgs8wTIoDm8qHLZdEN1Qah5MAYwtXb9x0dQSCgAVRQuRgAVbABJNAhMPAgvYEiUAB5QqAgAD2BUDgIJEAA+Iig2AApsvIKUIqgSqAB+KCqAaxZQgEpCUsNsLg4oFhQIQ0SenPzCgirOlkUAM0SoWL6BoY5pltjR8cnMMmDoGPD0jKiAGixoOrmPPxQbQgAiN+uAaUIOiBBsMsoFFysQvjN6o0-gCgVEWmwogBtL4AXQhjwASilsJgOBlLNYXtcSqU2u5zhFGFdkSjbph7rMGgQPi0vkwAAYAEhIdxkADpuV8AGQE2wydmldyUJgkREdKCKJ6EmxC8G8Ahcnn0-ncjrilFMJGomRMQ6JMgncDQeBIVAYHD4ACyvDAFQA8oguMAspSUDF4gUkik0lSKZcbcg0FhcHhSqVrmbMKUgA"},"Y \u541b\u7684\u7248\u672c")),l.a.createElement("li",null,l.a.createElement(r["Link"],{to:"https://www.typescriptlang.org/play?#code/C4TwDgpgBA0hIBkCWBraBeKBnYAnJAdgOZQA+UBArgLYBGEuA3AFCiRQCqWEciqEAHgAqAPiiYAogA88AQwDGwYQBpY8ZGhEtW4aBwBMASWFjMACiFQIMiAQAmWKLIIgoAfihmpALihCAlOJizq6+BBAAbgyB1sC2DsxQSZ4+UIQAZgxQAEqB6MEu7jlQYZEMzDrsAAq4EJD2VTACMFY29o68GhCqja1x7Wp8muJQvbHxjgDkk0UABgAkAN4wAL6zJVALi40rAHRLq7OV0ABiADaywP28wn0TUItQANoovjj4xAC6viFQKz0tcYDTr8EbTUycIwCRLJMyLGHJZJPKppAicbggtACNAgAD26T8Im+fmRnzuA1xtAAVhBFAjEUVzpdrvBhKSerV6nZGgIqgCRCJ6YjfPCGWLni1CKNOfEeXzRjAib4hKShckVvSVk8uDx1PxsfB8YTPv5mFoKgB6C1QShYWRECBYY5QCRnCDUWzAGq4sCOTCi5K0ShXXEEEVqpJ2JB22huuy+Wi43Fu5wsRErNPJQhgYPh8VQKMxuMJpMpgiZsURWRnSgQN54QhECt-ZtIahEPPirC4eT1j5NzUsDMVeShnBQdJJ3xMq62G6u92e72+iEBpIAIjbRF23fk698kwAjJNlPTJkGQwRdoXZLGIHZJr48LXT4jJtng9fo7e44+J9XuFfZJ3wIHNgF2KsawgP8QLAgA1atJmYDU2GgBcPQIL1cB9LAAFlZDAEY1ygdcL2AUMvyLe99ygRNkwgVN6U3UDPxvO87Bouiy2bZiwIg6taxo95Gx4rcdx7ISG2IIdtCtG07QdRx9GddCl2w319CI+kzjOAAWTsxR0gBmAz8ygHT9FMszkh0w83hAOhkwjBl-mcxELLsh43PFWz7Mcs4gOsjV82C9VtJMrz8zOSzIus8zPKwBzEzOZzh3TekyNDKzkjY4taNLBjy0HekP2AbLI2-diS3oxj80g2s+xE4rES3crsB7RrpOa5JyLATqiGQ7RRwIcdJ1xGKZxZEABFUzDlywfRVzPHTdN2Yy1uiw8NuPXwAGUkuTMxD38QKoEmFaNqMjb9G2v99v8o6TuWq7orWnaoHu5LHtO3qD2PU7N3bcS9z+k8z0yq9cvvP9n26M9Sson9od8dIALht8Efq6CD1KhCziQjUVLdDCsJw-CwE0-1lr0y7rq22y-0S-zTvOmn1os26-OSlmzhem6znepnuaY3rJP7JiIcR9jOIK2rkl41jKrjGWaqKxEFfArGxaa9WxN3bWuozIA"},"\u7b14\u8005\u7684\u7248\u672c"),"\u4e24\u4e2a\u65b9\u6848\u5199\u6cd5\u7565\u5076\u6709\u5dee\u5f02, \u8fd9\u91cc\u8bf7\u8bfb\u8005\u4e3b\u8981\u53c2\u8003 ",l.a.createElement(r["AnchorLink"],{to:"#y-%E5%90%9B%E7%9A%84%E7%89%88%E6%9C%AC"},"Y \u541b\u7684\u7248\u672c")," \u6765\u7406\u89e3\u8be5\u65b9\u6848, \u7b14\u8005\u8ba4\u4e3a\u8fd9\u4e2a\u7248\u672c\u66f4\u52a0\u7b80\u6d01, \u4e14\u66f4\u6709\u52a9\u4e8e\u8bfb\u8005\u4f53\u4f1a TS inference \u4e2d type Union, type Intersection \u7684\u5947\u5999\u4e4b\u5904")),l.a.createElement("h3",{id:"\u65b9\u6848\u4e8c\u7684\u539f\u7406"},l.a.createElement(r["AnchorLink"],{to:"#\u65b9\u6848\u4e8c\u7684\u539f\u7406","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u65b9\u6848\u4e8c\u7684\u539f\u7406"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u9884\u671f\u4e00\u4e2a\u9012\u5f52\u8fc7\u7a0b ",l.a.createElement("code",null,'Flatten<T, Prefix = "">'),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"T"),": nested value"),l.a.createElement("li",null,l.a.createElement("code",null,"Prefix"),": \u6307\u8be5\u9012\u5f52\u5c42\u7ea7\u7684\u7236\u5c42\u7ea7\u7684 property name, \u5982\u679c ",l.a.createElement("code",null,"Prefix")," \u4e3a ",l.a.createElement("code",null,'""'),", \u5f53\u524d\u5c42\u7ea7",l.a.createElement("strong",null,"\u5fc5\u7136"),"\u4e3a\u9876\u5c42,"),l.a.createElement("li",null,l.a.createElement("code",null,"K"),": \u9012\u5f52\u6bcf\u4e00\u5c42\u4e2d, \u5e0c\u671b\u5904\u7406\u7684\u5f53\u524d\u5c42\u7ea7\u7684\u6240\u6709 property name, \u4e00\u822c\u6765\u8bf4",l.a.createElement("strong",null,"\u5c31\u662f keyof T")))),l.a.createElement("li",null,"\u6c42 ",l.a.createElement("code",null,'type Ret = Flatten<T, Prefix = "">'),", \u5bf9\u4e8e ",l.a.createElement("code",null,"K = keyof T"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5982\u679c ",l.a.createElement("code",null,"T[K]")," \u662f\u5bf9\u8c61, \u8bf4\u660e\u53ef\u4ee5\u7ee7\u7eed\u5f80\u4e0b\u9012\u5f52, \u8fd4\u56de ",l.a.createElement("code",null,"type Ret = Flatten<T[K], `$","{","Prefix","}","$","{","K","}","`>")),l.a.createElement("li",null,"\u5982\u679c ",l.a.createElement("code",null,"T[K]")," \u975e\u5bf9\u8c61, \u8bf4\u660e\u5df2\u7ecf\u5230\u4e86 leaf of nested value, \u8fd4\u56de ",l.a.createElement("code",null,"type Ret = ","{"," [P in K as `$","{","Prefix","}",".$","{","k","}","`]: T[K] ","}"))))),l.a.createElement("p",null,"\u663e\u7136, \u8fd9\u662f\u6700\u5e38\u89c1\u7684",l.a.createElement("strong",null,"\u9012\u5f52"),"\u8fc7\u7a0b."),l.a.createElement("h3",{id:"y-\u541b\u7684\u7248\u672c"},l.a.createElement(r["AnchorLink"],{to:"#y-\u541b\u7684\u7248\u672c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Y \u541b\u7684\u7248\u672c"),l.a.createElement(o["a"],{code:"type ElementProps = {\n  button: {\n    disabled: boolean;\n  };\n  input: {\n    disabled: boolean;\n    value: string;\n  };\n  img: {\n    src: string;\n  };\n};\ntype ElementPropsMap = Omit<UnionToIntersection<ToUnion<ElementProps>>, never>;\n\ntype UnionToIntersection<U extends any> = (U extends any ? (k: U) => void : never) extends (\n  k: infer I,\n) => void\n  ? I\n  : never;\n\n// \u7b14\u8005\u6ce8: \u5982\u679c\u8981\u547d\u540d\u5f97\u66f4\u5b8c\u6574, \u4e5f\u8bb8\u53ef\u4ee5\u4f7f\u7528 \"FlattenToNestedUnion\" :)\ntype ToUnion<T, Pre extends string = '', K = keyof T> = K extends keyof T\n  ? T[K] extends Record<string, any>\n    ? ToUnion<T[K], Pre extends '' ? K : `${Pre}.${K & string}`>\n    : { [k in string & K as `${Pre}.${k}`]: T[K] }\n  : never;",lang:"ts"}),l.a.createElement("p",null,l.a.createElement("code",null,"ToUnion")," \u662f\u8fd9\u4e2a\u65b9\u6848\u7684\u6838\u5fc3, ",l.a.createElement("strong",null,"\u8bf7\u8bfb\u8005\u53c2\u7167",l.a.createElement(r["AnchorLink"],{to:"#%E6%96%B9%E6%A1%88%E4%BA%8C%E7%9A%84%E5%8E%9F%E7%90%86"},"\u539f\u7406"),"\u6765\u7406\u89e3\u5176\u89e3\u6790\u8fc7\u7a0b"),"."),l.a.createElement("p",null,l.a.createElement("strong",null,"\u6ce8\u610f")," ",l.a.createElement("code",null,"ToUnion<ElementProps>")," \u4f1a\u5f97\u5230 ",l.a.createElement("code",null,"{"," [NESTED-PROPERTY-NAME]: [NESTED-PROPERTY-TYPEVALUE] ","}")," \u7684 Union, \u5982\u56fe\u6240\u793a:"),l.a.createElement("p",null,l.a.createElement("img",{src:"https://user-images.githubusercontent.com/6339390/131253866-4575fa21-6dc1-48af-ae87-6238e935c2b7.png",alt:"image"})),l.a.createElement("p",null,"\u56e0\u6b64, \u6211\u4eec\u9700\u8981\u5bf9 ",l.a.createElement("code",null,"ToUnion<ElementProps>")," \u518d\u505a\u4e00\u6b21\u5c06 Union \u5230 Intersection \u7684\u8f6c\u6362, \u8fd9\u662f\u8001\u751f\u5e38\u8c08\u4e86, \u6700\u7ec8\u5f97\u5230"),l.a.createElement("p",null,l.a.createElement("img",{src:"https://user-images.githubusercontent.com/6339390/131254036-56d5fa86-bce7-4230-8936-c6ed093e7ec2.png",alt:"image"})),l.a.createElement("h3",{id:"\u7b14\u8005\u7684\u7248\u672c"},l.a.createElement(r["AnchorLink"],{to:"#\u7b14\u8005\u7684\u7248\u672c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u7b14\u8005\u7684\u7248\u672c"),l.a.createElement(o["a"],{code:"type ElementProps = {\n  button: {\n    disabled: boolean;\n  };\n  input: {\n    disabled: boolean;\n    value: string;\n  };\n  img: {\n    src: string;\n  };\n};\ntype ElementPropsMap = Omit<UnionToIntersection<ToUnion<ElementProps>>, never>;\n\ntype KeyLike = string | number;\ntype UseKeyLike<T> = Extract<T, KeyLike>;\n\ntype U2I<T> = (T extends any ? (x: T) => any : never) extends (x: infer R) => any ? R : never;\n\ntype PrependPK<K extends KeyLike, PK extends KeyLike> = PK extends '' ? `${K}` : `${PK}.${K}`;\ntype FlattenKey<T extends { [k: string]: any }, PK extends KeyLike = ''> = U2I<\n  {\n    [P in UseKeyLike<keyof T>]: T[P] extends object\n      ? FlattenKey<T[P], PrependPK<P, PK>>\n      : {\n          [K in PrependPK<P, PK>]: T[P];\n        };\n  }[UseKeyLike<keyof T>]\n>;",lang:"ts"}),l.a.createElement("p",null,"\u663e\u7136, ",l.a.createElement(r["Link"],{to:"https://www.typescriptlang.org/play?#code/C4TwDgpgBA0hIBkCWBraBeKBnYAnJAdgOZQA+UBArgLYBGEuA3AFCiRQCqWEciqEAHgAqAPiiYAogA88AQwDGwYQBpY8ZGhEtW4aBwBMASWFjMACiFQIMiAQAmWKLIIgoAfihmpALihCAlOJizq6+BBAAbgyB1sC2DsxQSZ4+UIQAZgxQAEqB6MEu7jlQYZEMzDrsAAq4EJD2VTACMFY29o68GhCqja1x7Wp8muJQvbHxjgDkk0UABgAkAN4wAL6zJVALi40rAHRLq7OV0ABiADaywP28wn0TUItQANoovjj4xAC6viFQKz0tcYDTr8EbTUycIwCRLJMyLGHJZJPKppAicbggtACNAgAD26T8Im+fmRnzuA1xtAAVhBFAjEUVzpdrvBhKSerV6nZGgIqgCRCJ6YjfPCGWLni1CKNOfEeXzRjAib4hKShckVvSVk8uDx1PxsfB8YTPv5mFoKgB6C1QShYWRECBYY5QCRnCDUWzAGq4sCOTCi5K0ShXXEEEVqpJ2JB22huuy+Wi43Fu5wsRErNPJQhgYPh8VQKMxuMJpMpgiZsURWRnSgQN54QhECt-ZtIahEPPirC4eT1j5NzUsDMVeShnBQdJJ3xMq62G6u92e72+iEBpIAIjbRF23fk698kwAjJNlPTJkGQwRdoXZLGIHZJr48LXT4jJtng9fo7e44+J9XuFfZJ3wIHNgF2KsawgP8QLAgA1atJmYDU2GgBcPQIL1cB9LAAFlZDAEY1ygdcL2AUMvyLe99ygRNkwgVN6U3UDPxvO87Bouiy2bZiwIg6taxo95Gx4rcdx7ISG2IIdtCtG07QdRx9GddCl2w319CI+kzjOAAWTsxR0gBmAz8ygHT9FMszkh0w83hAOhkwjBl-mcxELLsh43PFWz7Mcs4gOsjV82C9VtJMrz8zOSzIus8zPKwBzEzOZzh3TekyNDKzkjY4taNLBjy0HekP2AbLI2-diS3oxj80g2s+xE4rES3crsB7RrpOa5JyLATqiGQ7RRwIcdJ1xGKZxZEABFUzDlywfRVzPHTdN2Yy1uiw8NuPXwAGUkuTMxD38QKoEmFaNqMjb9G2v99v8o6TuWq7orWnaoHu5LHtO3qD2PU7N3bcS9z+k8z0yq9cvvP9n26M9Sson9od8dIALht8Efq6CD1KhCziQjUVLdDCsJw-CwE0-1lr0y7rq22y-0S-zTvOmn1os26-OSlmzhem6znepnuaY3rJP7JiIcR9jOIK2rkl41jKrjGWaqKxEFfArGxaa9WxN3bWuozIA"},"\u7b14\u8005\u7684\u7248\u672c")," \u548c ",l.a.createElement(r["Link"],{to:"https://www.typescriptlang.org/play?#code/C4TwDgpgBAogNhAthAdsACgJwPZgM5QC8UA3gFBRQBGArsMNigFykWVQAmAlngIZUIOLKtmwJeKANxsAvtMpcUYOi3LtOPfoOGjxUtpQBuvODQgs8wTIoDm8qHLZdEN1Qah5MAYwtXb9x0dQSCgAVRQuRgAVbABJNAhMPAgvYEiUAB5QqAgAD2BUDgIJEAA+Iig2AApsvIKUIqgSqAB+KCqAaxZQgEpCUsNsLg4oFhQIQ0SenPzCgirOlkUAM0SoWL6BoY5pltjR8cnMMmDoGPD0jKiAGixoOrmPPxQbQgAiN+uAaUIOiBBsMsoFFysQvjN6o0-gCgVEWmwogBtL4AXQhjwASilsJgOBlLNYXtcSqU2u5zhFGFdkSjbph7rMGgQPi0vkwAAYAEhIdxkADpuV8AGQE2wydmldyUJgkREdKCKJ6EmxC8G8Ahcnn0-ncjrilFMJGomRMQ6JMgncDQeBIVAYHD4ACyvDAFQA8oguMAspSUDF4gUkik0lSKZcbcg0FhcHhSqVrmbMKUgA"},"Y \u541b\u7684\u7248\u672c")," \u6ca1\u6709\u672c\u8d28\u7684\u533a\u522b. \u5728\u5199\u6cd5\u4e0a\u7684\u533a\u522b:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(r["Link"],{to:"https://www.typescriptlang.org/play?#code/C4TwDgpgBA0hIBkCWBraBeKBnYAnJAdgOZQA+UBArgLYBGEuA3AFCiRQCqWEciqEAHgAqAPiiYAogA88AQwDGwYQBpY8ZGhEtW4aBwBMASWFjMACiFQIMiAQAmWKLIIgoAfihmpALihCAlOJizq6+BBAAbgyB1sC2DsxQSZ4+UIQAZgxQAEqB6MEu7jlQYZEMzDrsAAq4EJD2VTACMFY29o68GhCqja1x7Wp8muJQvbHxjgDkk0UABgAkAN4wAL6zJVALi40rAHRLq7OV0ABiADaywP28wn0TUItQANoovjj4xAC6viFQKz0tcYDTr8EbTUycIwCRLJMyLGHJZJPKppAicbggtACNAgAD26T8Im+fmRnzuA1xtAAVhBFAjEUVzpdrvBhKSerV6nZGgIqgCRCJ6YjfPCGWLni1CKNOfEeXzRjAib4hKShckVvSVk8uDx1PxsfB8YTPv5mFoKgB6C1QShYWRECBYY5QCRnCDUWzAGq4sCOTCi5K0ShXXEEEVqpJ2JB22huuy+Wi43Fu5wsRErNPJQhgYPh8VQKMxuMJpMpgiZsURWRnSgQN54QhECt-ZtIahEPPirC4eT1j5NzUsDMVeShnBQdJJ3xMq62G6u92e72+iEBpIAIjbRF23fk698kwAjJNlPTJkGQwRdoXZLGIHZJr48LXT4jJtng9fo7e44+J9XuFfZJ3wIHNgF2KsawgP8QLAgA1atJmYDU2GgBcPQIL1cB9LAAFlZDAEY1ygdcL2AUMvyLe99ygRNkwgVN6U3UDPxvO87Bouiy2bZiwIg6taxo95Gx4rcdx7ISG2IIdtCtG07QdRx9GddCl2w319CI+kzjOAAWTsxR0gBmAz8ygHT9FMszkh0w83hAOhkwjBl-mcxELLsh43PFWz7Mcs4gOsjV82C9VtJMrz8zOSzIus8zPKwBzEzOZzh3TekyNDKzkjY4taNLBjy0HekP2AbLI2-diS3oxj80g2s+xE4rES3crsB7RrpOa5JyLATqiGQ7RRwIcdJ1xGKZxZEABFUzDlywfRVzPHTdN2Yy1uiw8NuPXwAGUkuTMxD38QKoEmFaNqMjb9G2v99v8o6TuWq7orWnaoHu5LHtO3qD2PU7N3bcS9z+k8z0yq9cvvP9n26M9Sson9od8dIALht8Efq6CD1KhCziQjUVLdDCsJw-CwE0-1lr0y7rq22y-0S-zTvOmn1os26-OSlmzhem6znepnuaY3rJP7JiIcR9jOIK2rkl41jKrjGWaqKxEFfArGxaa9WxN3bWuozIA"},"\u7b14\u8005\u7684\u7248\u672c")," \u5728\u9012\u5f52\u7684\u8fc7\u7a0b\u4e2d\u4f7f\u7528 ",l.a.createElement("code",null,"UseKeyLike<T>")," \u63d0\u524d\u6392\u9664\u4e86 ",l.a.createElement("code",null,"string | number")," \u4ee5\u5916\u7684 property (\u6bd4\u5982 ",l.a.createElement("code",null,"symbol"),")"),l.a.createElement("li",null,l.a.createElement(r["Link"],{to:"https://www.typescriptlang.org/play?#code/C4TwDgpgBA0hIBkCWBraBeKBnYAnJAdgOZQA+UBArgLYBGEuA3AFCiRQCqWEciqEAHgAqAPiiYAogA88AQwDGwYQBpY8ZGhEtW4aBwBMASWFjMACiFQIMiAQAmWKLIIgoAfihmpALihCAlOJizq6+BBAAbgyB1sC2DsxQSZ4+UIQAZgxQAEqB6MEu7jlQYZEMzDrsAAq4EJD2VTACMFY29o68GhCqja1x7Wp8muJQvbHxjgDkk0UABgAkAN4wAL6zJVALi40rAHRLq7OV0ABiADaywP28wn0TUItQANoovjj4xAC6viFQKz0tcYDTr8EbTUycIwCRLJMyLGHJZJPKppAicbggtACNAgAD26T8Im+fmRnzuA1xtAAVhBFAjEUVzpdrvBhKSerV6nZGgIqgCRCJ6YjfPCGWLni1CKNOfEeXzRjAib4hKShckVvSVk8uDx1PxsfB8YTPv5mFoKgB6C1QShYWRECBYY5QCRnCDUWzAGq4sCOTCi5K0ShXXEEEVqpJ2JB22huuy+Wi43Fu5wsRErNPJQhgYPh8VQKMxuMJpMpgiZsURWRnSgQN54QhECt-ZtIahEPPirC4eT1j5NzUsDMVeShnBQdJJ3xMq62G6u92e72+iEBpIAIjbRF23fk698kwAjJNlPTJkGQwRdoXZLGIHZJr48LXT4jJtng9fo7e44+J9XuFfZJ3wIHNgF2KsawgP8QLAgA1atJmYDU2GgBcPQIL1cB9LAAFlZDAEY1ygdcL2AUMvyLe99ygRNkwgVN6U3UDPxvO87Bouiy2bZiwIg6taxo95Gx4rcdx7ISG2IIdtCtG07QdRx9GddCl2w319CI+kzjOAAWTsxR0gBmAz8ygHT9FMszkh0w83hAOhkwjBl-mcxELLsh43PFWz7Mcs4gOsjV82C9VtJMrz8zOSzIus8zPKwBzEzOZzh3TekyNDKzkjY4taNLBjy0HekP2AbLI2-diS3oxj80g2s+xE4rES3crsB7RrpOa5JyLATqiGQ7RRwIcdJ1xGKZxZEABFUzDlywfRVzPHTdN2Yy1uiw8NuPXwAGUkuTMxD38QKoEmFaNqMjb9G2v99v8o6TuWq7orWnaoHu5LHtO3qD2PU7N3bcS9z+k8z0yq9cvvP9n26M9Sson9od8dIALht8Efq6CD1KhCziQjUVLdDCsJw-CwE0-1lr0y7rq22y-0S-zTvOmn1os26-OSlmzhem6znepnuaY3rJP7JiIcR9jOIK2rkl41jKrjGWaqKxEFfArGxaa9WxN3bWuozIA"},"\u7b14\u8005\u7684\u7248\u672c")," \u4e2d\u5c06 prepend ",l.a.createElement("code",null,"Prefix")," \u7684\u8d23\u4efb\u5355\u72ec\u4ea4\u7ed9\u4e86 ",l.a.createElement("code",null,"PrependPK<K, PK>"),"(\u73b0\u5728\u56de\u8fc7\u5934\u770b\u5176\u5b9e\u5927\u53ef\u4e0d\u5fc5 :P")),l.a.createElement("h2",{id:"\u603b\u7ed3"},l.a.createElement(r["AnchorLink"],{to:"#\u603b\u7ed3","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u603b\u7ed3"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u65b9\u6848\u4e00\u7684\u601d\u8def\u66f4\u76f4\u89c2, \u66f4\u6613\u4e8e\u7406\u89e3"),l.a.createElement("li",null,"\u65b9\u6848\u4e8c\u601d\u8def\u66f4\u7b80\u5355\u4f46\u4e5f\u62bd\u8c61, \u80fd\u6307\u5bfc\u5199\u51fa\u66f4\u7b80\u6d01\u7684\u5b9e\u73b0")),l.a.createElement("p",null,"\u7b14\u8005\u8ba4\u4e3a, \u5982\u679c\u5c06\u8be5\u9898\u76ee\u7528\u4e8e\u9762\u8bd5. \u5982\u679c\u9762\u8bd5\u8005\u5bf9\u6b64\u9898\u5b8c\u5168\u6ca1\u6709\u601d\u8def, \u51fa\u4e8e\u4ea4\u6d41\u7684\u76ee\u7684, \u4f7f\u7528 ",l.a.createElement(r["AnchorLink"],{to:"#ver2"},"Ver.2")," \u4f5c\u4e3a\u7b54\u6848, \u5c06 ",l.a.createElement(r["AnchorLink"],{to:"(#%E6%96%B9%E6%A1%88%E4%B8%80%E7%9A%84%E5%8E%9F%E7%90%86)"},"\u65b9\u6848\u4e00\u7684\u539f\u7406")," \u7528\u6765\u8bb2\u7ed9\u9762\u8bd5\u8005\u542c\u8f83\u4e3a\u5408\u9002."),l.a.createElement("h2",{id:"\u5176\u5b83"},l.a.createElement(r["AnchorLink"],{to:"#\u5176\u5b83","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5176\u5b83"),l.a.createElement("h3",{id:"\u5ef6\u4f38\u601d\u8003"},l.a.createElement(r["AnchorLink"],{to:"#\u5ef6\u4f38\u601d\u8003","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5ef6\u4f38\u601d\u8003"),l.a.createElement("p",null,"\u5982\u679c\u5c06\u9898\u76ee\u6539\u4e3a\u8fd9\u6837, \u8be5\u5982\u4f55\u5b9e\u73b0?"),l.a.createElement(o["a"],{code:"type ElementProps = {\n  button: {\n    disabled: boolean;\n  };\n  input: {\n    disabled: boolean;\n    value: string;\n  };\n  img: {\n    src: string;\n  };\n};\n\ntype ElementPropsMap = {\n  button: {\n    disabled: boolean;\n  };\n  input: {\n    disabled: boolean;\n    value: string;\n  };\n  img: {\n    src: string;\n  };\n  'button.disabled': boolean;\n  'input.disabled': boolean;\n  'input.value': string;\n  'img.src': string;\n};",lang:"ts"}),l.a.createElement("p",null,"\u5b9e\u9645\u4e0a, \u5982\u679c\u5b9e\u73b0\u4e86\u8fd9\u4e00\u7c7b\u578b, \u5c31\u5b9e\u73b0\u4e86 ",l.a.createElement("code",null,"lodash.get(target, path)")," \u5f53 ",l.a.createElement("code",null,"target")," \u4e3a ",l.a.createElement("code",null,"Exclude<object, Array | Function>")," \u65f6\u7684\u7c7b\u578b."),l.a.createElement("h3",{id:"ts-template-literals-\u7684\u524d\u5411\u5339\u914d"},l.a.createElement(r["AnchorLink"],{to:"#ts-template-literals-\u7684\u524d\u5411\u5339\u914d","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"TS template literals \u7684\u524d\u5411\u5339\u914d"),l.a.createElement("p",null,"\u5bf9"),l.a.createElement(o["a"],{code:"T extends `${infer P}.${infer R}`? ... : never",lang:"ts"}),l.a.createElement("p",null,"\u8fd9\u6837\u7684\u8868\u8fbe\u5f0f\u800c\u8a00, Condition \u4e2d\u7684 inference \u91c7\u53d6\u7684\u662f\u524d\u5411\u5339\u914d, \u5373,"),l.a.createElement("p",null,"\u82e5 T \u4e3a ",l.a.createElement("code",null,"a.b.c.d"),", \u5219 ",l.a.createElement("code",null,"P")," \u4e3a ",l.a.createElement("code",null,"a"),", R \u4e3a ",l.a.createElement("code",null,"b.c.d")),l.a.createElement("h3",{id:"\u5173\u952e\u7279\u6027\u5f15\u5165\u70b9"},l.a.createElement(r["AnchorLink"],{to:"#\u5173\u952e\u7279\u6027\u5f15\u5165\u70b9","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5173\u952e\u7279\u6027\u5f15\u5165\u70b9"),l.a.createElement("ul",null,l.a.createElement("li",null,"Conditional Types ",l.a.createElement(r["Link"],{to:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html"},"\u5f15\u5165"),"\u4e8e TS 2.8"),l.a.createElement("li",null,"Template Literals ",l.a.createElement(r["Link"],{to:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html"},"\u5f15\u5165"),"\u4e8e TS 4.1"))))}));n["default"]=e=>{var n=l.a.useContext(r["context"]),t=n.demos;return l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(c,{demos:t})}}}]);