"use strict";(self.webpackChunkyuanyp_8_dochub=self.webpackChunkyuanyp_8_dochub||[]).push([[3025],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,h=m["".concat(i,".").concat(c)]||m[c]||u[c]||l;return a?r.createElement(h,o(o({ref:t},d),{},{components:a})):r.createElement(h,o({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(7462),n=a(7294),l=a(6010),o=a(2389),s=a(7392),i=a(7094),p=a(2466);const d="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,a;const{lazy:o,block:m,defaultValue:c,values:h,groupId:b,className:f}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:g.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),N=(0,s.l)(k,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===c?c:null!=(t=null!=c?c:null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)?t:g[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:T}=(0,i.U)(),[O,P]=(0,n.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=b){const e=v[b];null!=e&&e!==O&&k.some((t=>t.value===e))&&P(e)}const w=e=>{const t=e.currentTarget,a=E.indexOf(t),r=k[a].value;r!==O&&(C(t),P(r),null!=b&&T(b,String(r)))},H=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var r;const t=E.indexOf(e.currentTarget)+1;a=null!=(r=E[t])?r:E[0];break}case"ArrowLeft":{var n;const t=E.indexOf(e.currentTarget)-1;a=null!=(n=E[t])?n:E[E.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",d)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},f)},k.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>E.push(e),onKeyDown:H,onFocus:w,onClick:w},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=a?a:t)}))),o?(0,n.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function c(e){const t=(0,o.Z)();return n.createElement(m,(0,r.Z)({key:String(t)},e))}},8929:(e,t,a)=>{a.d(t,{y:()=>n});var r=a(7294);function n(e){let{children:t,color:a}=e;return r.createElement("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}},8082:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));a(8929),a(5488),a(5162);const l={sidebar_position:1,slug:"OPTIONS",id:"OPTIONS",title:"OPTIONS",authors:["yuanyp8"],tags:["HTTP","protocol","request_methods","OPTIONS"]},o=void 0,s={unversionedId:"http/request_methods/OPTIONS",id:"http/request_methods/OPTIONS",title:"OPTIONS",description:"&nbsp;",source:"@site/docs/http/21-request_methods/OPTIONS.md",sourceDirName:"http/21-request_methods",slug:"/http/request_methods/OPTIONS",permalink:"/docs/http/request_methods/OPTIONS",draft:!1,editUrl:"https://github.com/yuanyp8/yuanyp8.github.io/tree/master/docs/http/21-request_methods/OPTIONS.md",tags:[{label:"HTTP",permalink:"/docs/tags/http"},{label:"protocol",permalink:"/docs/tags/protocol"},{label:"request_methods",permalink:"/docs/tags/request-methods"},{label:"OPTIONS",permalink:"/docs/tags/options"}],version:"current",lastUpdatedBy:"yuanyp8",lastUpdatedAt:1658484189,formattedLastUpdatedAt:"2022\u5e747\u670822\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"OPTIONS",id:"OPTIONS",title:"OPTIONS",authors:["yuanyp8"],tags:["HTTP","protocol","request_methods","OPTIONS"]},sidebar:"tutorialSidebar",previous:{title:"HEAD",permalink:"/docs/http/request_methods/HEAD"},next:{title:"PATCH",permalink:"/docs/http/request_methods/PATCH"}},i={},p=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u89c4\u8303",id:"\u89c4\u8303",level:2},{value:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027",id:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027",level:2}],d={toc:p};function u(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("img",{className:"Badges",src:"https://img.shields.io/badge/author-yuanyp8-yellowgreen"}),"\xa0",(0,n.kt)("img",{className:"Badges",src:"https://img.shields.io/badge/reference-mozilla-lightgrey"}),(0,n.kt)("br",null),"\xa0",(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"HTTP ",(0,n.kt)("inlineCode",{parentName:"strong"},"HEAD")," \u65b9\u6cd5")," \u8bf7\u6c42\u8d44\u6e90\u7684\u5934\u90e8\u4fe1\u606f\uff0c\u5e76\u4e14\u8fd9\u4e9b\u5934\u90e8\u4e0e HTTP ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET"},(0,n.kt)("inlineCode",{parentName:"a"},"GET"))," \u65b9\u6cd5\u8bf7\u6c42\u65f6\u8fd4\u56de\u7684\u4e00\u81f4\u3002\u8be5\u8bf7\u6c42\u65b9\u6cd5\u7684\u4e00\u4e2a\u4f7f\u7528\u573a\u666f\u662f\u5728\u4e0b\u8f7d\u4e00\u4e2a\u5927\u6587\u4ef6\u524d\u5148\u83b7\u53d6\u5176\u5927\u5c0f\u518d\u51b3\u5b9a\u662f\u5426\u8981\u4e0b\u8f7d\uff0c\u4ee5\u6b64\u53ef\u4ee5\u8282\u7ea6\u5e26\u5bbd\u8d44\u6e90\u3002"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"HEAD")," \u65b9\u6cd5\u7684\u54cd\u5e94\u4e0d\u5e94\u5305\u542b\u54cd\u5e94\u6b63\u6587\u3002\u5373\u4f7f\u5305\u542b\u4e86\u6b63\u6587\u4e5f\u5fc5\u987b\u5ffd\u7565\u6389. \u867d\u7136\u63cf\u8ff0\u6b63\u6587\u4fe1\u606f\u7684 ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Entity_header"},"entity headers"),", \u4f8b\u5982 ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Length"},(0,n.kt)("inlineCode",{parentName:"a"},"Content-Length"))," \u53ef\u80fd\u4f1a\u5305\u542b\u5728\u54cd\u5e94\u4e2d\uff0c\u4f46\u5b83\u4eec\u5e76\u4e0d\u662f\u7528\u6765\u63cf\u8ff0 ",(0,n.kt)("inlineCode",{parentName:"p"},"HEAD")," \u54cd\u5e94\u672c\u8eab\u7684\uff0c\u800c\u662f\u7528\u6765\u63cf\u8ff0\u540c\u6837\u60c5\u51b5\u4e0b\u7684 ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET"},(0,n.kt)("inlineCode",{parentName:"a"},"GET"))," \u8bf7\u6c42\u5e94\u8be5\u8fd4\u56de\u7684\u54cd\u5e94\u3002"),(0,n.kt)("p",null,"\u5982\u679c ",(0,n.kt)("inlineCode",{parentName:"p"},"HEAD")," \u8bf7\u6c42\u7684\u7ed3\u679c\u663e\u793a\u5728\u4e0a\u4e00\u6b21 ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET"},(0,n.kt)("inlineCode",{parentName:"a"},"GET"))," \u8bf7\u6c42\u540e\u7f13\u5b58\u7684\u8d44\u6e90\u5df2\u7ecf\u8fc7\u671f\u4e86\uff0c\u5373\u4f7f\u6ca1\u6709\u53d1\u51fa",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET"},(0,n.kt)("inlineCode",{parentName:"a"},"GET")),"\u8bf7\u6c42\uff0c\u7f13\u5b58\u4e5f\u4f1a\u5931\u6548"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf7\u6c42\u662f\u5426\u6709\u6b63\u6587"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5426"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6210\u529f\u7684\u54cd\u5e94\u662f\u5426\u6709\u6b63\u6587"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5b89\u5168"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Idempotent"},"\u5e42\u7b49")),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u7f13\u5b58"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Learn/Forms"},"HTML \u8868\u5355")," \u662f\u5426\u652f\u6301"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,n.kt)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"HEAD /index.html\n")),(0,n.kt)("h2",{id:"\u89c4\u8303"},"\u89c4\u8303"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u89c4\u8303"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u6807\u9898"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc7231#section-4.3.2"},"RFC 7231, section 4.3.2: HEAD")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content")))),(0,n.kt)("h2",{id:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027"},"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027"),(0,n.kt)("p",null,"[Report problems with this compatibility data on GitHub]","(",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mdn/browser-compat-data/issues/new?mdn-url=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FHTTP%2FMethods%2FGET&metadata="},"https://github.com/mdn/browser-compat-data/issues/new?mdn-url=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FHTTP%2FMethods%2FGET&metadata=")," MDN+page+report+details<%2Fsummary> ",(0,n.kt)("em",{parentName:"p"},"+Query%3A+",(0,n.kt)("inlineCode",{parentName:"em"},"http.methods.GET")," "),"+Report+started%3A+2022-07-22T09%3A38%3A59.149Z <%2Fdetails>&title=http.methods.GET+-+&template=data-problem.yml)"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image-20220722174134759",src:a(6547).Z,width:"786",height:"305"})))}u.isMDXComponent=!0},6547:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20220722174134759-3ac6616b39d605d91ac2ebb87af921c7.png"}}]);