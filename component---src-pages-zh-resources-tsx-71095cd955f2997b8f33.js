(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{CRmZ:function(t,e,a){"use strict";var n=a("wx14"),i=a("zLVn"),o=(a("q1tI"),a("NPyL")),j=a("q4O+"),M=a("qKvR"),c=["component","size","children"],s=function(t){var e={desktop:24,mobile:24};return"large"===t&&(e={desktop:28,mobile:28}),"small"===t&&(e={desktop:24,mobile:20}),e},O=function(t,e){var a="h3";return"large"===t&&(a="h2"),"small"===t&&(a="h4"),e||a};e.a=function(t){var e=t.component,a=t.size,r=void 0===a?"standard":a,g=t.children,l=Object(i.a)(t,c);return Object(M.jsx)(j.a,Object(n.a)({component:O(r,e),textSize:s(r),weight:o.a.Weight.Bold},l),g)}},LOor:function(t,e,a){"use strict";var n,i,o,j,M,c=a("q1tI"),s=a("GaFH"),O=a("JMPC"),r=a("EvNZ"),g=a("WIPX"),l=a("1Oda"),D=a("RtJw"),b=a("Ns4d"),u=a("lhtC"),x=a("CRmZ"),m=a("NPyL"),T=a("MxF9"),I={root:{marginBottom:Object(r.a)(1)},linkContainer:((n={display:"flex",flexDirection:"column",alignItems:"center",marginBottom:Object(r.a)(3)})[T.a.DesktopTablet]={marginBottom:Object(r.a)(4),":hover":{fontWeight:m.a.Weight.Bold,"> div:first-of-type":{transform:"scale(1.1)"}}},n),logoContainer:((i={display:"flex",justifyContent:"center",width:Object(r.a)(7),height:Object(r.a)(7),marginBottom:Object(r.a)(1.5),transition:"transform 0.2s ease"})[T.a.DesktopTablet]={width:Object(r.a)(9),height:Object(r.a)(9)},i),logo:{objectFit:"contain",width:"100%",height:"100%"},label:((o={maxWidth:Object(r.a)(14),lineHeight:"22px",textAlign:"center"})[T.a.DesktopTablet]={lineHeight:"22px"},o)},d=a("qKvR"),A=function(t){var e=t.heading,a=t.links,n=c.useContext(l.a).isDarkMode;return Object(d.jsx)("section",{css:I.root},Object(d.jsx)(x.a,{component:"h2",size:"small",textAlign:"center",margin:{desktop:{bottom:Object(r.a)(5)},mobile:{bottom:Object(r.a)(4)}}},e),Object(d.jsx)(b.a,null,a.map((function(t){return Object(d.jsx)(D.a,{key:t.url,spanLg:3,spanMd:3,spanSm:4,spanXs:6,isNoMarginBottom:!0},Object(d.jsx)("a",{href:t.url,css:I.linkContainer,target:"_blank",rel:"noreferrer"},Object(d.jsx)("div",{css:I.logoContainer},Object(d.jsx)(u.a,{src:n?t.iconWhite:t.iconBlack,css:I.logo,alt:t.displayLabel})),Object(d.jsx)("div",{css:I.label,dangerouslySetInnerHTML:{__html:t.displayLabel}})))}))))},w=a("LCtf"),N=[w.a.telegram,w.a.twitter,w.a.discord,w.a.drcFoundation,w.a.youtube,w.a.communityArt,w.b.medium,w.b.github],L=(w.d.bloomberg,w.d.yahoo,w.d.forbes,w.d.businessInsider,w.d.investing,w.d.hackernoon,w.d.benzinga,w.d.coinTelegraph,[w.c.etherscan,w.c.coingecko,w.c.coinMarketCap]),p=a("T/u/"),h=a.n(p),y=a("TSXr"),k=a.n(y),z={logoContainer:((j={display:"flex",justifyContent:"center",marginBottom:Object(r.a)(4)})[T.a.DesktopTablet]={marginBottom:Object(r.a)(5)},j),logo:((M={width:70,height:70})[T.a.DesktopTablet]={width:115,height:115},M)},f=function(){var t=c.useContext(l.a).isDarkMode?h.a:k.a;return Object(d.jsx)("div",{css:z.logoContainer},Object(d.jsx)(u.a,{src:t,css:z.logo,alt:"DIGITAL RESERVE CURRENCY",turnOffLazyLoading:!0}))},S={community:{en:"Discussion and Community",zh:"讨论 - 社区"},media:{en:"Press and Media",zh:"媒体 - 新闻"},market:{en:"Marketplace and Data",zh:"市场 - 数据"},information:{en:"Information and Media",zh:"信息媒体"}};e.a=function(t){var e=t.lang,a=void 0===e?"en":e;return Object(d.jsx)(O.a,null,Object(d.jsx)(g.a,{margin:{desktop:{bottom:Object(r.a)(5)},mobile:{bottom:Object(r.a)(4)}}},Object(d.jsx)(s.a,null)),Object(d.jsx)(f,null),Object(d.jsx)(g.a,{margin:{bottom:Object(r.a)(3)}},Object(d.jsx)(A,{heading:S.community[a],links:N})),Object(d.jsx)(g.a,{margin:{bottom:Object(r.a)(3)}},Object(d.jsx)(A,{heading:S.market[a],links:L})))}},RPSz:function(t,e,a){"use strict";a.r(e);a("q1tI");var n=a("eIJk"),i=a("B7F5"),o=a("LOor"),j=a("H8eV"),M=a("qKvR");e.default=function(){return Object(M.jsx)(i.a,{activeTab:n.a.Resources,lang:"zh"},Object(M.jsx)(j.a,{title:"相关链接",description:"数字储备货币（DRC）社区，市场，媒体和其他信息",lang:"zh"}),Object(M.jsx)(o.a,{lang:"zh"}))}},"T/u/":function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05OS41OTg5IDUwLjA0ODFMMTA4Ljc0OCAzOS4wMzI0TDE0OS45MjQgODguNjA5OUwxOTEuMTAxIDM5LjAzMjRMMjAwLjI1IDUwLjA0ODFMMTE3Ljg2NCAxNDkuMjQzTDE0OS45MjQgMTg3Ljg0NUwxODEuOTg1IDE0OS4yNDNMMTU3LjY4OCAxMTkuOTg4TDE2Ni44MzcgMTA4Ljk3M0wxOTUuNjY0IDE0My42ODFDMTk1Ljg1MSAxNDMuOTA2IDE5Ni4wMjQgMTQ0LjE0MiAxOTYuMTg0IDE0NC4zODdMMjAwLjI1IDE0OS4yODNMMTU5LjA3MyAxOTguODZMMjAwLjIzOCAyNDguNDI0TDE5MS4wODkgMjU5LjQzOUw5OS41OTg5IDE0OS4yODNMMTAxLjI3MSAxNDcuMjdDMTAxLjM2NyAxNDcuMTAxIDEwMS40NzcgMTQ2Ljk0MSAxMDEuNjAxIDE0Ni43OTJMMTQwLjc3NSA5OS42MjU2TDk5LjU5ODkgNTAuMDQ4MVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik05OS42MTA4IDI0OC40MjNMMTM0LjAzNSAyMDYuOTc1TDE0My4xODQgMjE3Ljk5MUwxMDguNzYgMjU5LjQzOUw5OS42MTA4IDI0OC40MjNaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"},TSXr:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05OS41OTg5IDUwLjA0ODFMMTA4Ljc0OCAzOS4wMzI0TDE0OS45MjQgODguNjA5OUwxOTEuMTAxIDM5LjAzMjRMMjAwLjI1IDUwLjA0ODFMMTE3Ljg2NCAxNDkuMjQzTDE0OS45MjQgMTg3Ljg0NUwxODEuOTg1IDE0OS4yNDNMMTU3LjY4OCAxMTkuOTg4TDE2Ni44MzcgMTA4Ljk3M0wxOTUuNjY0IDE0My42ODFDMTk1Ljg1MSAxNDMuOTA2IDE5Ni4wMjQgMTQ0LjE0MiAxOTYuMTg0IDE0NC4zODdMMjAwLjI1IDE0OS4yODNMMTU5LjA3MyAxOTguODZMMjAwLjIzOCAyNDguNDI0TDE5MS4wODkgMjU5LjQzOUw5OS41OTg5IDE0OS4yODNMMTAxLjI3MSAxNDcuMjdDMTAxLjM2NyAxNDcuMTAxIDEwMS40NzcgMTQ2Ljk0MSAxMDEuNjAxIDE0Ni43OTJMMTQwLjc3NSA5OS42MjU2TDk5LjU5ODkgNTAuMDQ4MVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik05OS42MTA4IDI0OC40MjNMMTM0LjAzNSAyMDYuOTc1TDE0My4xODQgMjE3Ljk5MUwxMDguNzYgMjU5LjQzOUw5OS42MTA4IDI0OC40MjNaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K"},"q4O+":function(t,e,a){"use strict";var n=a("wx14"),i=a("qKvR"),o=a("zLVn"),j=a("wLTh"),M=a("q1tI"),c=a("1UwH"),s=a("MxF9"),O=function(t){var e=1.5;t>16&&(e=1.4),t>18&&(e=1.3),t>20&&(e=1.25),t>28&&(e=1.2),t>34&&(e=1.1),t>40&&(e=1.05);var a=t*e;return 2*Math.round(a/2)+"px"},r=["component"],g=["textSize","textAlign","type","weight","margin","className","component"],l=function(t){var e=t.component,a=Object(o.a)(t,r);return M.createElement(e||"span",a)};e.a=function(t){var e=t.textSize,a=t.textAlign,M=t.type,r=void 0===M?"primary":M,D=t.weight,b=t.margin,u=t.className,x=t.component,m=Object(o.a)(t,g),T=Object(j.b)(),I=function t(e){var a={};if(e)if("number"==typeof e)a.fontSize=e+"px",a.lineHeight=O(e);else if("object"==typeof e){var n,i=e,o=i.size,j=i.desktop,M=i.mobile,c=t(o),r=j&&t(j),g=M&&t(M);a=Object.assign({},c,((n={})[s.a.Mobile]=g,n[s.a.DesktopTablet]=r,n))}return a}(e),d=function(t){var e={};if(t)if("string"==typeof t)e.textAlign=t;else if("object"==typeof t){var a,n=t,i=n.desktop,o=n.mobile;(a={})[s.a.Mobile]={textAlign:o},a[s.a.DesktopTablet]={textAlign:i},e=a}return e}(a),A=Object(c.a)(b);return Object(i.jsx)(l,Object(n.a)({css:Object(i.css)([I,"secondary"===r&&{color:T.text},d,A,!!D&&{fontWeight:D}],""),className:u,component:x},m))}}}]);
//# sourceMappingURL=component---src-pages-zh-resources-tsx-71095cd955f2997b8f33.js.map