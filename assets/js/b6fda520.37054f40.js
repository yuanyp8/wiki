"use strict";(self.webpackChunkyuanyp_8_dochub=self.webpackChunkyuanyp_8_dochub||[]).push([[3105],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,b=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(7462),a=r(7294),l=r(6010),o=r(2389),u=r(7392),i=r(7094),s=r(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,r;const{lazy:o,block:m,defaultValue:d,values:b,groupId:f,className:y}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:g.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),v=(0,u.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(t=null!=d?d:null==(r=g.find((e=>e.props.default)))?void 0:r.props.value)?t:g[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:O}=(0,i.U)(),[E,x]=(0,a.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:j}=(0,s.o5)();if(null!=f){const e=w[f];null!=e&&e!==E&&h.some((t=>t.value===e))&&x(e)}const C=e=>{const t=e.currentTarget,r=T.indexOf(t),n=h[r].value;n!==E&&(j(t),x(n),null!=f&&O(f,String(n)))},N=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var n;const t=T.indexOf(e.currentTarget)+1;r=null!=(n=T[t])?n:T[0];break}case"ArrowLeft":{var a;const t=T.indexOf(e.currentTarget)-1;r=null!=(a=T[t])?a:T[T.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},y)},h.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>T.push(e),onKeyDown:N,onFocus:C,onClick:C},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=r?r:t)}))),o?(0,a.cloneElement)(g.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function d(e){const t=(0,o.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},8929:(e,t,r)=>{r.d(t,{y:()=>a});var n=r(7294);function a(e){let{children:t,color:r}=e;return n.createElement("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}},4812:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));r(8929),r(5488),r(5162);const l={slug:"awk",title:"awk \u7528\u6cd5",authors:["yuanyp8"],tags:["linux","shell","regex","awk"]},o=void 0,u={permalink:"/blog/awk",editUrl:"https://github.com/yuanyp8/yuanyp8.github.io/tree/master/blog/linux/multiCommand.md",source:"@site/blog/linux/multiCommand.md",title:"awk \u7528\u6cd5",description:"awk \u914d\u7f6e prinf \u5b9e\u73b0\u6279\u91cf\u6267\u884c\u547d\u4ee4",date:"2022-07-21T09:15:26.000Z",formattedDate:"2022\u5e747\u670821\u65e5",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"shell",permalink:"/blog/tags/shell"},{label:"regex",permalink:"/blog/tags/regex"},{label:"awk",permalink:"/blog/tags/awk"}],readingTime:2.845,hasTruncateMarker:!0,authors:[{name:"\u5143\u7389\u9e4f",title:"SRE Engineer @ Chinamobile",url:"https://github.com/yuanyp8",imageURL:"https://github.com/yuanyp8.png",key:"yuanyp8"}],frontMatter:{slug:"awk",title:"awk \u7528\u6cd5",authors:["yuanyp8"],tags:["linux","shell","regex","awk"]}},i={authorsImageUrls:[void 0]},s=[],c={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("img",{className:"Badges",src:"https://img.shields.io/badge/author-yuanyp8-yellowgreen"}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"awk \u914d\u7f6e prinf \u5b9e\u73b0\u6279\u91cf\u6267\u884c\u547d\u4ee4"))}p.isMDXComponent=!0}}]);