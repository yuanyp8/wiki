"use strict";(self.webpackChunkyuanyp_8_dochub=self.webpackChunkyuanyp_8_dochub||[]).push([[4636],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(a),c=r,h=u["".concat(i,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),r=a(7294),l=a(6010),o=a(2389),p=a(7392),i=a(7094),s=a(2466);const d="tabList__CuJ",m="tabItem_LNqP";function u(e){var t,a;const{lazy:o,block:u,defaultValue:c,values:h,groupId:b,className:f}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,p.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===c?c:null!=(t=null!=c?c:null==(a=k.find((e=>e.props.default)))?void 0:a.props.value)?t:k[0].props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:v}=(0,i.U)(),[P,O]=(0,r.useState)(N),C=[],{blockElementScrollPositionUntilNextRender:w}=(0,s.o5)();if(null!=b){const e=T[b];null!=e&&e!==P&&g.some((t=>t.value===e))&&O(e)}const S=e=>{const t=e.currentTarget,a=C.indexOf(t),n=g[a].value;n!==P&&(w(t),O(n),null!=b&&v(b,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=C.indexOf(e.currentTarget)+1;a=null!=(n=C[t])?n:C[0];break}case"ArrowLeft":{var r;const t=C.indexOf(e.currentTarget)-1;a=null!=(r=C[t])?r:C[C.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},f)},g.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:e=>C.push(e),onKeyDown:E,onFocus:S,onClick:S},o,{className:(0,l.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":P===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(k.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function c(e){const t=(0,o.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},8929:(e,t,a)=>{a.d(t,{y:()=>r});var n=a(7294);function r(e){let{children:t,color:a}=e;return n.createElement("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}},6077:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));a(8929),a(5488),a(5162);const l={sidebar_position:1,slug:"POST",id:"POST",title:"POST",authors:["yuanyp8"],tags:["HTTP","protocol","request_methods","POST"]},o=void 0,p={unversionedId:"http/request_methods/POST",id:"http/request_methods/POST",title:"POST",description:"&nbsp",source:"@site/docs/http/21-request_methods/POST.md",sourceDirName:"http/21-request_methods",slug:"/http/request_methods/POST",permalink:"/docs/http/request_methods/POST",draft:!1,editUrl:"https://github.com/yuanyp8/yuanyp8.github.io/tree/master/docs/http/21-request_methods/POST.md",tags:[{label:"HTTP",permalink:"/docs/tags/http"},{label:"protocol",permalink:"/docs/tags/protocol"},{label:"request_methods",permalink:"/docs/tags/request-methods"},{label:"POST",permalink:"/docs/tags/post"}],version:"current",lastUpdatedBy:"yuanyp8",lastUpdatedAt:1658485406,formattedLastUpdatedAt:"2022\u5e747\u670822\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"POST",id:"POST",title:"POST",authors:["yuanyp8"],tags:["HTTP","protocol","request_methods","POST"]},sidebar:"tutorialSidebar",previous:{title:"PATCH",permalink:"/docs/http/request_methods/PATCH"},next:{title:"PUT",permalink:"/docs/http/request_methods/PUT"}},i={},s=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u89c4\u8303",id:"\u89c4\u8303",level:2},{value:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027",id:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027",level:2}],d={toc:s};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("img",{className:"Badges",src:"https://img.shields.io/badge/author-yuanyp8-yellowgreen"}),"&nbsp",(0,r.kt)("img",{className:"Badges",src:"https://img.shields.io/badge/reference-mozilla-lightgrey"}),(0,r.kt)("br",null),"&nbsp",(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HTTP ",(0,r.kt)("inlineCode",{parentName:"strong"},"POST")," \u65b9\u6cd5")," \u53d1\u9001\u6570\u636e\u7ed9\u670d\u52a1\u5668\u3002\u8bf7\u6c42\u4e3b\u4f53\u7684\u7c7b\u578b\u7531 ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Type"},(0,r.kt)("inlineCode",{parentName:"a"},"Content-Type"))," \u9996\u90e8\u6307\u5b9a\u3002"),(0,r.kt)("p",null,"PUT \u548c",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/POST"},(0,r.kt)("inlineCode",{parentName:"a"},"POST")),"\u65b9\u6cd5\u7684\u533a\u522b\u662f\uff0cPUT \u65b9\u6cd5\u662f\u5e42\u7b49\u7684\uff1a\u8fde\u7eed\u8c03\u7528\u4e00\u6b21\u6216\u8005\u591a\u6b21\u7684\u6548\u679c\u76f8\u540c\uff08\u65e0\u526f\u4f5c\u7528\uff09\u3002\u8fde\u7eed\u8c03\u7528\u540c\u4e00\u4e2a POST \u53ef\u80fd\u4f1a\u5e26\u6765\u989d\u5916\u7684\u5f71\u54cd\uff0c\u6bd4\u5982\u591a\u6b21\u63d0\u4ea4\u8ba2\u5355\u3002"),(0,r.kt)("p",null,"\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," \u8bf7\u6c42\u901a\u5e38\u662f\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/Forms"},"HTML \u8868\u5355"),"\u53d1\u9001\uff0c\u5e76\u8fd4\u56de\u670d\u52a1\u5668\u7684\u4fee\u6539\u7ed3\u679c\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0ccontent type \u662f\u901a\u8fc7\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/form"},"``")," \u5143\u7d20\u4e2d\u8bbe\u7f6e\u6b63\u786e\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/form#attr-enctype"},(0,r.kt)("inlineCode",{parentName:"a"},"enctype"))," \u5c5e\u6027\uff0c\u6216\u662f\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input"},"``")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button"},"``")," \u5143\u7d20\u4e2d\u8bbe\u7f6e ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-formenctype"},(0,r.kt)("inlineCode",{parentName:"a"},"formenctype"))," \u5c5e\u6027\u6765\u9009\u62e9\u7684:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"application/``x-www-form-urlencoded"),": \u6570\u636e\u88ab\u7f16\u7801\u6210\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"li"},"'&'")," \u5206\u9694\u7684\u952e - \u503c\u5bf9\uff0c\u540c\u65f6\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"li"},"'='")," \u5206\u9694\u952e\u548c\u503c\u3002\u975e\u5b57\u6bcd\u6216\u6570\u5b57\u7684\u5b57\u7b26\u4f1a\u88ab ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Glossary/percent-encoding"},"percent-encoding"),": \u8fd9\u4e5f\u5c31\u662f\u4e3a\u4ec0\u4e48\u8fd9\u79cd\u7c7b\u578b\u4e0d\u652f\u6301\u4e8c\u8fdb\u5236\u6570\u636e (\u5e94\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"multipart/form-data")," \u4ee3\u66ff)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"multipart/form-data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"text/plain"))),(0,r.kt)("p",null,"\u5f53 POST \u8bf7\u6c42\u662f\u901a\u8fc7\u9664 HTML \u8868\u5355\u4e4b\u5916\u7684\u65b9\u5f0f\u53d1\u9001\u65f6\uff0c\u4f8b\u5982\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest"},(0,r.kt)("inlineCode",{parentName:"a"},"XMLHttpRequest")),", \u90a3\u4e48\u8bf7\u6c42\u4e3b\u4f53\u53ef\u4ee5\u662f\u4efb\u4f55\u7c7b\u578b\u3002\u6309 HTTP 1.1 \u89c4\u8303\u4e2d\u63cf\u8ff0\uff0cPOST \u4e3a\u4e86\u4ee5\u7edf\u4e00\u7684\u65b9\u6cd5\u6765\u6db5\u76d6\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u91ca\u5df2\u6709\u7684\u8d44\u6e90"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u516c\u544a\u677f\uff0c\u65b0\u95fb\u7ec4\uff0c\u90ae\u4ef6\u5217\u8868\u6216\u7c7b\u4f3c\u7684\u6587\u7ae0\u7ec4\u4e2d\u53d1\u5e03\u6d88\u606f;"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u6ce8\u518c\u65b0\u589e\u7528\u6237;"),(0,r.kt)("li",{parentName:"ul"},"\u5411\u6570\u636e\u5904\u7406\u7a0b\u5e8f\u63d0\u4f9b\u4e00\u6279\u6570\u636e\uff0c\u4f8b\u5982\u63d0\u4ea4\u4e00\u4e2a\u8868\u5355;"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u8ffd\u52a0\u64cd\u4f5c\uff0c\u6269\u5c55\u6570\u636e\u5e93\u6570\u636e\u3002")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf7\u6c42\u662f\u5426\u6709\u4e3b\u4f53"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6210\u529f\u7684\u54cd\u5e94\u662f\u5426\u6709\u4e3b\u4f53"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5b89\u5168"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Idempotent"},"\u5e42\u7b49")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u7f13\u5b58"),(0,r.kt)("td",{parentName:"tr",align:null},"Only if freshness information is included")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"HTML \u8868\u5355\u662f\u5426\u652f\u6301"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")))),(0,r.kt)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST /index.html\n")),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("p",null,"\u4f7f\u7528\u9ed8\u8ba4\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," \u505a\u4e3a content type \u7684\u7b80\u5355\u8868\u5355\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"POST / HTTP/1.1\nHost: foo.com\nContent-Type: application/x-www-form-urlencoded\nContent-Length: 13\n\nsay=Hi&to=Mom\n")),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," \u4f5c\u4e3a content type \u7684\u8868\u5355\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'POST /test.html HTTP/1.1\nHost: example.org\nContent-Type: multipart/form-data;boundary="boundary"\n\n--boundary\nContent-Disposition: form-data; name="field1"\n\nvalue1\n--boundary\nContent-Disposition: form-data; name="field2"; filename="example.txt"\n\nvalue2\n')),(0,r.kt)("h2",{id:"\u89c4\u8303"},"\u89c4\u8303"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u89c4\u8303"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u6807\u9898"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc7231#section-4.3.3"},"RFC 7231, section 4.3.3: POST")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content")))),(0,r.kt)("h2",{id:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027"},"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027"),(0,r.kt)("p",null,"[Report problems with this compatibility data on GitHub]","(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mdn/browser-compat-data/issues/new?mdn-url=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FHTTP%2FMethods%2FPOST&metadata="},"https://github.com/mdn/browser-compat-data/issues/new?mdn-url=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FHTTP%2FMethods%2FPOST&metadata=")," MDN+page+report+details<%2Fsummary> ",(0,r.kt)("em",{parentName:"p"},"+Query%3A+",(0,r.kt)("inlineCode",{parentName:"em"},"http.methods.POST")," "),"+Report+started%3A+2022-07-22T09%3A50%3A19.198Z <%2Fdetails>&title=http.methods.POST+-+&template=data-problem.yml)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220722175252435",src:a(2700).Z,width:"779",height:"310"})))}m.isMDXComponent=!0},2700:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220722175252435-b0286c6b4f6731f78bbb827eef73d583.png"}}]);