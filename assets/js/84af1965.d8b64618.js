"use strict";(self.webpackChunkyuanyp_8_dochub=self.webpackChunkyuanyp_8_dochub||[]).push([[2562],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>h});var r=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,l=function(e,a){if(null==e)return{};var t,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),d=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},s=function(e){var a=d(e.components);return r.createElement(p.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},N=r.forwardRef((function(e,a){var t=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),N=d(t),h=l,c=N["".concat(p,".").concat(h)]||N[h]||m[h]||n;return t?r.createElement(c,o(o({ref:a},s),{},{components:t})):r.createElement(c,o({ref:a},s))}));function h(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var n=t.length,o=new Array(n);o[0]=N;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var d=2;d<n;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}N.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>o});var r=t(7294),l=t(6010);const n="tabItem_Ymn6";function o(e){let{children:a,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(n,o),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>h});var r=t(7462),l=t(7294),n=t(6010),o=t(2389),i=t(7392),p=t(7094),d=t(2466);const s="tabList__CuJ",m="tabItem_LNqP";function N(e){var a,t;const{lazy:o,block:N,defaultValue:h,values:c,groupId:k,className:C}=e,u=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),T=null!=c?c:u.map((e=>{let{props:{value:a,label:t,attributes:r}}=e;return{value:a,label:t,attributes:r}})),H=(0,i.l)(T,((e,a)=>e.value===a.value));if(H.length>0)throw new Error('Docusaurus error: Duplicate values "'+H.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const z=null===h?h:null!=(a=null!=h?h:null==(t=u.find((e=>e.props.default)))?void 0:t.props.value)?a:u[0].props.value;if(null!==z&&!T.some((e=>e.value===z)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+z+'" but none of its children has the corresponding value. Available values are: '+T.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:f}=(0,p.U)(),[b,v]=(0,l.useState)(z),P=[],{blockElementScrollPositionUntilNextRender:W}=(0,d.o5)();if(null!=k){const e=g[k];null!=e&&e!==b&&T.some((a=>a.value===e))&&v(e)}const y=e=>{const a=e.currentTarget,t=P.indexOf(a),r=T[t].value;r!==b&&(W(a),v(r),null!=k&&f(k,String(r)))},A=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{var r;const a=P.indexOf(e.currentTarget)+1;t=null!=(r=P[a])?r:P[0];break}case"ArrowLeft":{var l;const a=P.indexOf(e.currentTarget)-1;t=null!=(l=P[a])?l:P[P.length-1];break}}null==(a=t)||a.focus()};return l.createElement("div",{className:(0,n.Z)("tabs-container",s)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":N},C)},T.map((e=>{let{value:a,label:t,attributes:o}=e;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:b===a?0:-1,"aria-selected":b===a,key:a,ref:e=>P.push(e),onKeyDown:A,onFocus:y,onClick:y},o,{className:(0,n.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":b===a})}),null!=t?t:a)}))),o?(0,l.cloneElement)(u.filter((e=>e.props.value===b))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},u.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==b})))))}function h(e){const a=(0,o.Z)();return l.createElement(N,(0,r.Z)({key:String(a)},e))}},8929:(e,a,t)=>{t.d(a,{y:()=>l});var r=t(7294);function l(e){let{children:a,color:t}=e;return r.createElement("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},a)}},9846:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var r=t(7462),l=(t(7294),t(3905));t(8929),t(5488),t(5162);const n={sidebar_position:20,slug:"headers",id:"headers",title:"\u9644\u5f55 headers",authors:["yuanyp8"],tags:["HTTP","protocol","headers"]},o=void 0,i={unversionedId:"http/headers",id:"http/headers",title:"\u9644\u5f55 headers",description:"&nbsp;",source:"@site/docs/http/20-header.md.md",sourceDirName:"http",slug:"/http/headers",permalink:"/docs/http/headers",draft:!1,editUrl:"https://github.com/yuanyp8/yuanyp8.github.io/tree/master/docs/http/20-header.md.md",tags:[{label:"HTTP",permalink:"/docs/tags/http"},{label:"protocol",permalink:"/docs/tags/protocol"},{label:"headers",permalink:"/docs/tags/headers"}],version:"current",lastUpdatedBy:"yuanyp8",lastUpdatedAt:1658485406,formattedLastUpdatedAt:"2022\u5e747\u670822\u65e5",sidebarPosition:20,frontMatter:{sidebar_position:20,slug:"headers",id:"headers",title:"\u9644\u5f55 headers",authors:["yuanyp8"],tags:["HTTP","protocol","headers"]},sidebar:"tutorialSidebar",previous:{title:"HTTP \u7684\u91cd\u5b9a\u5411",permalink:"/docs/http/redirections"},next:{title:"\u9644\u5f55: request methods",permalink:"/docs/category/\u9644\u5f55-request-methods"}},p={},d=[],s={toc:d};function m(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("img",{className:"Badges",src:"https://img.shields.io/badge/author-yuanyp8-yellowgreen"}),"\xa0",(0,l.kt)("img",{className:"Badges",src:"https://img.shields.io/badge/reference-mozilla-lightgrey"}),(0,l.kt)("br",null),"\xa0",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept"},(0,l.kt)("inlineCode",{parentName:"a"},"Accept"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-CH"},(0,l.kt)("inlineCode",{parentName:"a"},"Accept-CH"))),(0,l.kt)("li",{parentName:"ul"},"ExperimentalNon-StandardDeprecated",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-CH-Lifetime"},(0,l.kt)("inlineCode",{parentName:"a"},"Accept-CH-Lifetime"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Charset"},(0,l.kt)("inlineCode",{parentName:"a"},"Accept-Charset"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Encoding"},(0,l.kt)("inlineCode",{parentName:"a"},"Accept-Encoding"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Language"},(0,l.kt)("inlineCode",{parentName:"a"},"Accept-Language"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Patch"},(0,l.kt)("inlineCode",{parentName:"a"},"Accept-Patch"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Post"},(0,l.kt)("inlineCode",{parentName:"a"},"Accept-Post"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Ranges"},(0,l.kt)("inlineCode",{parentName:"a"},"Accept-Ranges"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials"},(0,l.kt)("inlineCode",{parentName:"a"},"Access-Control-Allow-Credentials"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Headers"},(0,l.kt)("inlineCode",{parentName:"a"},"Access-Control-Allow-Headers"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Methods"},(0,l.kt)("inlineCode",{parentName:"a"},"Access-Control-Allow-Methods"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Origin"},(0,l.kt)("inlineCode",{parentName:"a"},"Access-Control-Allow-Origin"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Expose-Headers"},(0,l.kt)("inlineCode",{parentName:"a"},"Access-Control-Expose-Headers"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Max-Age"},(0,l.kt)("inlineCode",{parentName:"a"},"Access-Control-Max-Age"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Request-Headers"},(0,l.kt)("inlineCode",{parentName:"a"},"Access-Control-Request-Headers"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Request-Method"},(0,l.kt)("inlineCode",{parentName:"a"},"Access-Control-Request-Method"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Age"},(0,l.kt)("inlineCode",{parentName:"a"},"Age"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Allow"},(0,l.kt)("inlineCode",{parentName:"a"},"Allow"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Alt-Svc"},(0,l.kt)("inlineCode",{parentName:"a"},"Alt-Svc"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Authorization"},(0,l.kt)("inlineCode",{parentName:"a"},"Authorization"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control"},(0,l.kt)("inlineCode",{parentName:"a"},"Cache-Control"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Clear-Site-Data"},(0,l.kt)("inlineCode",{parentName:"a"},"Clear-Site-Data"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Connection"},(0,l.kt)("inlineCode",{parentName:"a"},"Connection"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Disposition"},(0,l.kt)("inlineCode",{parentName:"a"},"Content-Disposition"))),(0,l.kt)("li",{parentName:"ul"},"ExperimentalNon-StandardDeprecated",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-DPR"},(0,l.kt)("inlineCode",{parentName:"a"},"Content-DPR"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Encoding"},(0,l.kt)("inlineCode",{parentName:"a"},"Content-Encoding"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Language"},(0,l.kt)("inlineCode",{parentName:"a"},"Content-Language"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Length"},(0,l.kt)("inlineCode",{parentName:"a"},"Content-Length"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Location"},(0,l.kt)("inlineCode",{parentName:"a"},"Content-Location"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Range"},(0,l.kt)("inlineCode",{parentName:"a"},"Content-Range"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy"},(0,l.kt)("inlineCode",{parentName:"a"},"Content-Security-Policy"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only"},(0,l.kt)("inlineCode",{parentName:"a"},"Content-Security-Policy-Report-Only"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Type"},(0,l.kt)("inlineCode",{parentName:"a"},"Content-Type"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cookie"},(0,l.kt)("inlineCode",{parentName:"a"},"Cookie"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy"},(0,l.kt)("inlineCode",{parentName:"a"},"Cross-Origin-Embedder-Policy"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy"},(0,l.kt)("inlineCode",{parentName:"a"},"Cross-Origin-Opener-Policy"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy"},(0,l.kt)("inlineCode",{parentName:"a"},"Cross-Origin-Resource-Policy"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Date"},(0,l.kt)("inlineCode",{parentName:"a"},"Date"))),(0,l.kt)("li",{parentName:"ul"},"Experimental",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Device-Memory"},(0,l.kt)("inlineCode",{parentName:"a"},"Device-Memory"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Digest"},(0,l.kt)("inlineCode",{parentName:"a"},"Digest"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/DNT"},(0,l.kt)("inlineCode",{parentName:"a"},"DNT"))),(0,l.kt)("li",{parentName:"ul"},"Experimental",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Downlink"},(0,l.kt)("inlineCode",{parentName:"a"},"Downlink"))),(0,l.kt)("li",{parentName:"ul"},"ExperimentalNon-StandardDeprecated",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/DPR"},(0,l.kt)("inlineCode",{parentName:"a"},"DPR"))),(0,l.kt)("li",{parentName:"ul"},"Experimental",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Early-Data"},(0,l.kt)("inlineCode",{parentName:"a"},"Early-Data"))),(0,l.kt)("li",{parentName:"ul"},"Experimental",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ECT"},(0,l.kt)("inlineCode",{parentName:"a"},"ECT"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ETag"},(0,l.kt)("inlineCode",{parentName:"a"},"ETag"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Expect"},(0,l.kt)("inlineCode",{parentName:"a"},"Expect"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Expect-CT"},(0,l.kt)("inlineCode",{parentName:"a"},"Expect-CT"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Expires"},(0,l.kt)("inlineCode",{parentName:"a"},"Expires"))),(0,l.kt)("li",{parentName:"ul"},"Experimental",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Feature-Policy"},(0,l.kt)("inlineCode",{parentName:"a"},"Feature-Policy"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Forwarded"},(0,l.kt)("inlineCode",{parentName:"a"},"Forwarded"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/From"},(0,l.kt)("inlineCode",{parentName:"a"},"From"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Host"},(0,l.kt)("inlineCode",{parentName:"a"},"Host"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Match"},(0,l.kt)("inlineCode",{parentName:"a"},"If-Match"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Modified-Since"},(0,l.kt)("inlineCode",{parentName:"a"},"If-Modified-Since"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-None-Match"},(0,l.kt)("inlineCode",{parentName:"a"},"If-None-Match"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Range"},(0,l.kt)("inlineCode",{parentName:"a"},"If-Range"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Unmodified-Since"},(0,l.kt)("inlineCode",{parentName:"a"},"If-Unmodified-Since"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Keep-Alive"},(0,l.kt)("inlineCode",{parentName:"a"},"Keep-Alive"))),(0,l.kt)("li",{parentName:"ul"},"Non-StandardDeprecated",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Large-Allocation"},(0,l.kt)("inlineCode",{parentName:"a"},"Large-Allocation"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Last-Modified"},(0,l.kt)("inlineCode",{parentName:"a"},"Last-Modified"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Link"},(0,l.kt)("inlineCode",{parentName:"a"},"Link"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Location"},(0,l.kt)("inlineCode",{parentName:"a"},"Location"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/NEL"},(0,l.kt)("inlineCode",{parentName:"a"},"NEL"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Origin"},(0,l.kt)("inlineCode",{parentName:"a"},"Origin"))),(0,l.kt)("li",{parentName:"ul"},"Deprecated",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Pragma"},(0,l.kt)("inlineCode",{parentName:"a"},"Pragma"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Proxy-Authenticate"},(0,l.kt)("inlineCode",{parentName:"a"},"Proxy-Authenticate"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Proxy-Authorization"},(0,l.kt)("inlineCode",{parentName:"a"},"Proxy-Authorization"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Range"},(0,l.kt)("inlineCode",{parentName:"a"},"Range"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Referer"},(0,l.kt)("inlineCode",{parentName:"a"},"Referer"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Referrer-Policy"},(0,l.kt)("inlineCode",{parentName:"a"},"Referrer-Policy"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Retry-After"},(0,l.kt)("inlineCode",{parentName:"a"},"Retry-After"))),(0,l.kt)("li",{parentName:"ul"},"Experimental",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/RTT"},(0,l.kt)("inlineCode",{parentName:"a"},"RTT"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Save-Data"},(0,l.kt)("inlineCode",{parentName:"a"},"Save-Data"))),(0,l.kt)("li",{parentName:"ul"},"Experimental",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-UA"},(0,l.kt)("inlineCode",{parentName:"a"},"Sec-CH-UA"))),(0,l.kt)("li",{parentName:"ul"},"Experimental",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-UA-Arch"},(0,l.kt)("inlineCode",{parentName:"a"},"Sec-CH-UA-Arch"))),(0,l.kt)("li",{parentName:"ul"},"Experimental",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-UA-Bitness"},(0,l.kt)("inlineCode",{parentName:"a"},"Sec-CH-UA-Bitness"))),(0,l.kt)("li",{parentName:"ul"},"Experimental",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-UA-Full-Version"},(0,l.kt)("inlineCode",{parentName:"a"},"Sec-CH-UA-Full-Version"))),(0,l.kt)("li",{parentName:"ul"},"Experimental",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-UA-Full-Version-List"},(0,l.kt)("inlineCode",{parentName:"a"},"Sec-CH-UA-Full-Version-List"))),(0,l.kt)("li",{parentName:"ul"},"Experimental",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-UA-Mobile"},(0,l.kt)("inlineCode",{parentName:"a"},"Sec-CH-UA-Mobile"))),(0,l.kt)("li",{parentName:"ul"},"Experimental",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-UA-Model"},(0,l.kt)("inlineCode",{parentName:"a"},"Sec-CH-UA-Model"))),(0,l.kt)("li",{parentName:"ul"},"Experimental",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-UA-Platform"},(0,l.kt)("inlineCode",{parentName:"a"},"Sec-CH-UA-Platform"))),(0,l.kt)("li",{parentName:"ul"},"Experimental",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-UA-Platform-Version"},(0,l.kt)("inlineCode",{parentName:"a"},"Sec-CH-UA-Platform-Version"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-Fetch-Dest"},(0,l.kt)("inlineCode",{parentName:"a"},"Sec-Fetch-Dest"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-Fetch-Mode"},(0,l.kt)("inlineCode",{parentName:"a"},"Sec-Fetch-Mode"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-Fetch-Site"},(0,l.kt)("inlineCode",{parentName:"a"},"Sec-Fetch-Site"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-Fetch-User"},(0,l.kt)("inlineCode",{parentName:"a"},"Sec-Fetch-User"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-WebSocket-Accept"},(0,l.kt)("inlineCode",{parentName:"a"},"Sec-WebSocket-Accept"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Server"},(0,l.kt)("inlineCode",{parentName:"a"},"Server"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Server-Timing"},(0,l.kt)("inlineCode",{parentName:"a"},"Server-Timing"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Service-Worker-Navigation-Preload"},(0,l.kt)("inlineCode",{parentName:"a"},"Service-Worker-Navigation-Preload"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie"},(0,l.kt)("inlineCode",{parentName:"a"},"Set-Cookie"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/SourceMap"},(0,l.kt)("inlineCode",{parentName:"a"},"SourceMap"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security"},(0,l.kt)("inlineCode",{parentName:"a"},"Strict-Transport-Security"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/TE"},(0,l.kt)("inlineCode",{parentName:"a"},"TE"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Timing-Allow-Origin"},(0,l.kt)("inlineCode",{parentName:"a"},"Timing-Allow-Origin"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Tk"},(0,l.kt)("inlineCode",{parentName:"a"},"Tk"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Trailer"},(0,l.kt)("inlineCode",{parentName:"a"},"Trailer"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Transfer-Encoding"},(0,l.kt)("inlineCode",{parentName:"a"},"Transfer-Encoding"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Upgrade"},(0,l.kt)("inlineCode",{parentName:"a"},"Upgrade"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Upgrade-Insecure-Requests"},(0,l.kt)("inlineCode",{parentName:"a"},"Upgrade-Insecure-Requests"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent"},(0,l.kt)("inlineCode",{parentName:"a"},"User-Agent"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Vary"},(0,l.kt)("inlineCode",{parentName:"a"},"Vary"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Via"},(0,l.kt)("inlineCode",{parentName:"a"},"Via"))),(0,l.kt)("li",{parentName:"ul"},"ExperimentalNon-StandardDeprecated",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Viewport-Width"},(0,l.kt)("inlineCode",{parentName:"a"},"Viewport-Width"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Want-Digest"},(0,l.kt)("inlineCode",{parentName:"a"},"Want-Digest"))),(0,l.kt)("li",{parentName:"ul"},"Deprecated",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Warning"},(0,l.kt)("inlineCode",{parentName:"a"},"Warning"))),(0,l.kt)("li",{parentName:"ul"},"ExperimentalDeprecated",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Width"},(0,l.kt)("inlineCode",{parentName:"a"},"Width"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/WWW-Authenticate"},(0,l.kt)("inlineCode",{parentName:"a"},"WWW-Authenticate"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Content-Type-Options"},(0,l.kt)("inlineCode",{parentName:"a"},"X-Content-Type-Options"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control"},(0,l.kt)("inlineCode",{parentName:"a"},"X-DNS-Prefetch-Control"))),(0,l.kt)("li",{parentName:"ul"},"Non-Standard",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Forwarded-For"},(0,l.kt)("inlineCode",{parentName:"a"},"X-Forwarded-For"))),(0,l.kt)("li",{parentName:"ul"},"Non-Standard",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Forwarded-Host"},(0,l.kt)("inlineCode",{parentName:"a"},"X-Forwarded-Host"))),(0,l.kt)("li",{parentName:"ul"},"Non-Standard",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Forwarded-Proto"},(0,l.kt)("inlineCode",{parentName:"a"},"X-Forwarded-Proto"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Frame-Options"},(0,l.kt)("inlineCode",{parentName:"a"},"X-Frame-Options"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-XSS-Protection"},(0,l.kt)("inlineCode",{parentName:"a"},"X-XSS-Protection")))))}m.isMDXComponent=!0}}]);