"use strict";(self.webpackChunkyuanyp_8_dochub=self.webpackChunkyuanyp_8_dochub||[]).push([[9174],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,h=m["".concat(i,".").concat(c)]||m[c]||u[c]||l;return a?r.createElement(h,o(o({ref:t},d),{},{components:a})):r.createElement(h,o({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(7462),n=a(7294),l=a(6010),o=a(2389),s=a(7392),i=a(7094),p=a(2466);const d="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,a;const{lazy:o,block:m,defaultValue:c,values:h,groupId:b,className:f}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:g.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),k=(0,s.l)(y,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===c?c:null!=(t=null!=c?c:null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)?t:g[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:N}=(0,i.U)(),[C,E]=(0,n.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:A}=(0,p.o5)();if(null!=b){const e=T[b];null!=e&&e!==C&&y.some((t=>t.value===e))&&E(e)}const O=e=>{const t=e.currentTarget,a=w.indexOf(t),r=y[a].value;r!==C&&(A(t),E(r),null!=b&&N(b,String(r)))},R=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var r;const t=w.indexOf(e.currentTarget)+1;a=null!=(r=w[t])?r:w[0];break}case"ArrowLeft":{var n;const t=w.indexOf(e.currentTarget)-1;a=null!=(n=w[t])?n:w[w.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",d)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},f)},y.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>w.push(e),onKeyDown:R,onFocus:O,onClick:O},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),o?(0,n.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function c(e){const t=(0,o.Z)();return n.createElement(m,(0,r.Z)({key:String(t)},e))}},8929:(e,t,a)=>{a.d(t,{y:()=>n});var r=a(7294);function n(e){let{children:t,color:a}=e;return r.createElement("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}},4193:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));a(8929),a(5488),a(5162);const l={sidebar_position:1,slug:"TRACE",id:"TRACE",title:"TRACE",authors:["yuanyp8"],tags:["HTTP","protocol","request_methods","TRACE"]},o=void 0,s={unversionedId:"http/request_methods/TRACE",id:"http/request_methods/TRACE",title:"TRACE",description:"&nbsp",source:"@site/docs/http/21-request_methods/TRACE.md",sourceDirName:"http/21-request_methods",slug:"/http/request_methods/TRACE",permalink:"/docs/http/request_methods/TRACE",draft:!1,editUrl:"https://github.com/yuanyp8/yuanyp8.github.io/tree/master/docs/http/21-request_methods/TRACE.md",tags:[{label:"HTTP",permalink:"/docs/tags/http"},{label:"protocol",permalink:"/docs/tags/protocol"},{label:"request_methods",permalink:"/docs/tags/request-methods"},{label:"TRACE",permalink:"/docs/tags/trace"}],version:"current",lastUpdatedBy:"yuanyp8",lastUpdatedAt:1658485406,formattedLastUpdatedAt:"2022\u5e747\u670822\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"TRACE",id:"TRACE",title:"TRACE",authors:["yuanyp8"],tags:["HTTP","protocol","request_methods","TRACE"]},sidebar:"tutorialSidebar",previous:{title:"PUT",permalink:"/docs/http/request_methods/PUT"},next:{title:"\u9644\u5f55 Response Status Code",permalink:"/docs/http/status"}},i={},p=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u89c4\u8303",id:"\u89c4\u8303",level:2},{value:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027",id:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027",level:2}],d={toc:p};function u(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("img",{className:"Badges",src:"https://img.shields.io/badge/author-yuanyp8-yellowgreen"}),"&nbsp",(0,n.kt)("img",{className:"Badges",src:"https://img.shields.io/badge/reference-mozilla-lightgrey"}),(0,n.kt)("br",null),"&nbsp",(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"HTTP ",(0,n.kt)("inlineCode",{parentName:"strong"},"TRACE")," \u65b9\u6cd5")," \u5b9e\u73b0\u6cbf\u901a\u5411\u76ee\u6807\u8d44\u6e90\u7684\u8def\u5f84\u7684\u6d88\u606f\u73af\u56de\uff08loop-back\uff09\u6d4b\u8bd5 \uff0c\u63d0\u4f9b\u4e86\u4e00\u79cd\u5b9e\u7528\u7684 debug \u673a\u5236\u3002"),(0,n.kt)("p",null,"\u8bf7\u6c42\u7684\u6700\u7ec8\u63a5\u6536\u8005\u5e94\u5f53\u539f\u6837\u53cd\u5c04\uff08reflect\uff09\u5b83\u63a5\u6536\u5230\u7684\u6d88\u606f\uff0c\u9664\u4e86\u4ee5\u4e0b\u5b57\u6bb5\u90e8\u5206\uff0c\u4f5c\u4e3a\u4e00\u4e2a",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Type"},(0,n.kt)("inlineCode",{parentName:"a"},"Content-Type"))," \u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"message/http")," \u7684 200\uff08OK\uff09\u54cd\u5e94\u7684\u6d88\u606f\u7684\u4e3b\u4f53\uff08body\uff09\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef \u3002"),(0,n.kt)("p",null,"\u6700\u7ec8\u63a5\u6536\u8005\u662f\u6307\u521d\u59cb\uff08origin\uff09\u670d\u52a1\u5668\uff0c\u6216\u8005\u7b2c\u4e00\u4e2a\u63a5\u6536\u5230 ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Max-Forwards"},(0,n.kt)("inlineCode",{parentName:"a"},"Max-Forwards"))," \u503c\u4e3a 0 \u7684\u8bf7\u6c42\u7684\u670d\u52a1\u5668\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u6709\u4e3b\u4f53\uff08body\uff09\u7684\u8bf7\u6c42\uff08request\uff09"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5426"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5305\u542b\u4e3b\u4f53\uff08body\uff09\u7684\u6210\u529f\u7684\u54cd\u5e94\uff08response\uff09"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Safe"},"Safe")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Idempotent"},"Idempotent")),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Glossary/cacheable"},"Cacheable (en-US)")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5141\u8bb8\u7528\u4e8e HTML \u8868\u5355\uff08form\uff09"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,n.kt)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"TRACE /index.html\n")),(0,n.kt)("h2",{id:"\u89c4\u8303"},"\u89c4\u8303"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u89c4\u8303"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u6807\u9898"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc7231#section-4.3.8"},"RFC 7231, section 4.3.8: TRACE")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content")))),(0,n.kt)("h2",{id:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027"},"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027"),(0,n.kt)("p",null,"[Report problems with this compatibility data on GitHub]","(",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mdn/browser-compat-data/issues/new?mdn-url=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FHTTP%2FMethods%2FTRACE&metadata="},"https://github.com/mdn/browser-compat-data/issues/new?mdn-url=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FHTTP%2FMethods%2FTRACE&metadata=")," MDN+page+report+details<%2Fsummary> ",(0,n.kt)("em",{parentName:"p"},"+Query%3A+",(0,n.kt)("inlineCode",{parentName:"em"},"http.methods.TRACE")," "),"+Report+started%3A+2022-07-22T09%3A54%3A17.464Z <%2Fdetails>&title=http.methods.TRACE+-+&template=data-problem.yml)"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image-20220722175527191",src:a(7252).Z,width:"781",height:"277"})))}u.isMDXComponent=!0},7252:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20220722175527191-0bb8f72667098f2da3561345ba6ea28b.png"}}]);