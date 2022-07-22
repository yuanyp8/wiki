"use strict";(self.webpackChunkyuanyp_8_dochub=self.webpackChunkyuanyp_8_dochub||[]).push([[2262],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=u(a),d=r,m=h["".concat(p,".").concat(d)]||h[d]||c[d]||l;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),l=a(6010),i=a(2389),o=a(7392),p=a(7094),u=a(2466);const s="tabList__CuJ",c="tabItem_LNqP";function h(e){var t,a;const{lazy:i,block:h,defaultValue:d,values:m,groupId:k,className:f}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,o.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===d?d:null!=(t=null!=d?d:null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)?t:g[0].props.value;if(null!==N&&!b.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:T}=(0,p.U)(),[C,A]=(0,r.useState)(N),w=[],{blockElementScrollPositionUntilNextRender:P}=(0,u.o5)();if(null!=k){const e=y[k];null!=e&&e!==C&&b.some((t=>t.value===e))&&A(e)}const x=e=>{const t=e.currentTarget,a=w.indexOf(t),n=b[a].value;n!==C&&(P(t),A(n),null!=k&&T(k,String(n)))},O=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=w.indexOf(e.currentTarget)+1;a=null!=(n=w[t])?n:w[0];break}case"ArrowLeft":{var r;const t=w.indexOf(e.currentTarget)-1;a=null!=(r=w[t])?r:w[w.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":h},f)},b.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>w.push(e),onKeyDown:O,onFocus:x,onClick:x},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function d(e){const t=(0,i.Z)();return r.createElement(h,(0,n.Z)({key:String(t)},e))}},8929:(e,t,a)=>{a.d(t,{y:()=>r});var n=a(7294);function r(e){let{children:t,color:a}=e;return n.createElement("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}},8183:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));a(8929),a(5488),a(5162);const l={},i=void 0,o={unversionedId:"http/auth",id:"http/auth",title:"auth",description:"~~---",source:"@site/docs/http/12-auth.md",sourceDirName:"http",slug:"/http/auth",permalink:"/docs/http/auth",draft:!1,editUrl:"https://github.com/yuanyp8/yuanyp8.github.io/tree/master/docs/http/12-auth.md",tags:[],version:"current",lastUpdatedBy:"yuanyp8",lastUpdatedAt:1658484189,formattedLastUpdatedAt:"2022\u5e747\u670822\u65e5",sidebarPosition:12,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8de8\u6e90\u8d44\u6e90\u5171\u4eab\uff08CORS\uff09",permalink:"/docs/http/cors"},next:{title:"HTTP \u7f13\u5b58",permalink:"/docs/http/caching"}},p={},u=[{value:"tags: HTTP, protocol, Basic_Auth, authentication",id:"tags-http-protocol-basic_auth-authentication",level:2},{value:"\u901a\u7528\u7684 HTTP \u8ba4\u8bc1\u6846\u67b6",id:"\u901a\u7528\u7684-http-\u8ba4\u8bc1\u6846\u67b6",level:2},{value:"\u4ee3\u7406\u8ba4\u8bc1",id:"\u4ee3\u7406\u8ba4\u8bc1",level:3},{value:"\u8bbf\u95ee\u62d2\u7edd",id:"\u8bbf\u95ee\u62d2\u7edd",level:3},{value:"\u8de8\u57df\u56fe\u7247\u8ba4\u8bc1",id:"\u8de8\u57df\u56fe\u7247\u8ba4\u8bc1",level:3},{value:"HTTP \u8ba4\u8bc1\u7684\u5b57\u7b26\u7f16\u7801",id:"http-\u8ba4\u8bc1\u7684\u5b57\u7b26\u7f16\u7801",level:3},{value:"<code>WWW-Authenticate</code> \u4e0e <code>Proxy-Authenticate</code> \u9996\u90e8",id:"www-authenticate-\u4e0e-proxy-authenticate-\u9996\u90e8",level:3},{value:"<code>Authorization</code> \u4e0e <code>Proxy-Authorization</code> \u9996\u90e8",id:"authorization-\u4e0e-proxy-authorization-\u9996\u90e8",level:3},{value:"\u9a8c\u8bc1\u65b9\u6848",id:"\u9a8c\u8bc1\u65b9\u6848",level:3},{value:"\u57fa\u672c\u9a8c\u8bc1\u65b9\u6848",id:"\u57fa\u672c\u9a8c\u8bc1\u65b9\u6848",level:2},{value:"\u57fa\u672c\u9a8c\u8bc1\u65b9\u6848\u7684\u5b89\u5168\u6027",id:"\u57fa\u672c\u9a8c\u8bc1\u65b9\u6848\u7684\u5b89\u5168\u6027",level:3},{value:"\u4f7f\u7528 Apache \u9650\u5236\u8bbf\u95ee\u548c\u57fa\u672c\u8eab\u4efd\u9a8c\u8bc1",id:"\u4f7f\u7528-apache-\u9650\u5236\u8bbf\u95ee\u548c\u57fa\u672c\u8eab\u4efd\u9a8c\u8bc1",level:3},{value:"nginx \u8bbf\u95ee\u9650\u5236\u548c\u57fa\u672c\u8ba4\u8bc1",id:"nginx-\u8bbf\u95ee\u9650\u5236\u548c\u57fa\u672c\u8ba4\u8bc1",level:3}],s={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"~~---\nsidebar_position: 12\nslug: authentication\nid: authentication\ntitle: HTTP \u8eab\u4efd\u9a8c\u8bc1\nauthors: ","[yuanyp8]"),(0,r.kt)("h2",{id:"tags-http-protocol-basic_auth-authentication"},"tags: ","[HTTP, protocol, Basic_Auth, authentication]"),(0,r.kt)("img",{className:"Badges",src:"https://img.shields.io/badge/author-yuanyp8-yellowgreen"}),"\xa0",(0,r.kt)("img",{className:"Badges",src:"https://img.shields.io/badge/reference-mozilla-lightgrey"}),(0,r.kt)("br",null),"\xa0",(0,r.kt)("br",null),"~~",(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"HTTP \u63d0\u4f9b\u4e00\u4e2a\u7528\u4e8e\u6743\u9650\u63a7\u5236\u548c\u8ba4\u8bc1\u7684\u901a\u7528\u6846\u67b6\u3002\u6700\u5e38\u7528\u7684 HTTP \u8ba4\u8bc1\u65b9\u6848\u662f HTTP Basic authentication\u3002\u672c\u9875\u4ecb\u7ecd\u4e86\u901a\u7528\u7684 HTTP \u8ba4\u8bc1\u6846\u67b6\u4ee5\u53ca\u5c55\u793a\u5982\u4f55\u901a\u8fc7 HTTP Basic authentication \u6765\u9650\u5236\u6743\u9650\u8bbf\u95ee\u60a8\u7684\u670d\u52a1\u5668\u3002")),(0,r.kt)("h2",{id:"\u901a\u7528\u7684-http-\u8ba4\u8bc1\u6846\u67b6"},"\u901a\u7528\u7684 HTTP \u8ba4\u8bc1\u6846\u67b6"),(0,r.kt)("p",null," \u5b9a\u4e49\u4e86\u4e00\u4e2a HTTP \u8eab\u4efd\u9a8c\u8bc1\u6846\u67b6\uff0c\u670d\u52a1\u5668\u53ef\u4ee5\u7528\u6765\u9488\u5bf9\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u53d1\u9001 ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Glossary/challenge"},"challenge"),"\uff08\u8d28\u8be2\u4fe1\u606f\uff09\uff0c\u5ba2\u6237\u7aef\u5219\u53ef\u4ee5\u7528\u6765\u63d0\u4f9b\u8eab\u4efd\u9a8c\u8bc1\u51ed\u8bc1\u3002"),(0,r.kt)("p",null,"\u8d28\u8be2\u4e0e\u5e94\u7b54\u7684\u5de5\u4f5c\u6d41\u7a0b\u5982\u4e0b\uff1a\u670d\u52a1\u5668\u7aef\u5411\u5ba2\u6237\u7aef\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"401"),"\uff08Unauthorized\uff0c\u672a\u88ab\u6388\u6743\u7684\uff09\u72b6\u6001\u7801\uff0c\u5e76\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"WWW-Authenticate"),"]\u9996\u90e8\u63d0\u4f9b\u5982\u4f55\u8fdb\u884c\u9a8c\u8bc1\u7684\u4fe1\u606f\uff0c\u5176\u4e2d\u81f3\u5c11\u5305\u542b\u6709\u4e00\u79cd\u8d28\u8be2\u65b9\u5f0f\u3002\u4e4b\u540e\u6709\u610f\u5411\u8bc1\u660e\u81ea\u5df1\u8eab\u4efd\u7684\u5ba2\u6237\u7aef\u53ef\u4ee5\u5728\u65b0\u7684\u8bf7\u6c42\u4e2d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization"),"\u9996\u90e8\u5b57\u6bb5\u8fdb\u884c\u9a8c\u8bc1\uff0c\u5b57\u6bb5\u503c\u4e3a\u8eab\u4efd\u9a8c\u8bc1\u51ed\u8bc1\u4fe1\u606f\u3002\u901a\u5e38\u5ba2\u6237\u7aef\u4f1a\u5f39\u51fa\u4e00\u4e2a\u5bc6\u7801\u6846\u8ba9\u7528\u6237\u586b\u5199\uff0c\u7136\u540e\u53d1\u9001\u5305\u542b\u6709\u6070\u5f53\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," \u9996\u90e8\u7684\u8bf7\u6c42\u3002"),(0,r.kt)("h3",{id:"\u4ee3\u7406\u8ba4\u8bc1"},"\u4ee3\u7406\u8ba4\u8bc1"),(0,r.kt)("p",null,"\u4e0e\u4e0a\u8ff0\u540c\u6837\u7684\u8be2\u95ee\u8d28\u7591\u548c\u54cd\u5e94\u539f\u7406\u4f7f\u7528\u4e8e\u4ee3\u7406\u8ba4\u8bc1\u3002\u4e0b\u9762\u4ecb\u7ecd\u4e00\u4e2a\u4e2d\u95f4\u4ee3\u7406\u9700\u8981\u8ba4\u8bc1\u7684\u4f8b\u5b50\u3002\u8d44\u6e90\u8ba4\u8bc1\u548c\u4ee3\u7406\u8ba4\u8bc1\u53ef\u4ee5\u5e76\u5b58\uff0c\u533a\u522b\u4e8e\u72ec\u7acb\u7684\u5934\u4fe1\u606f\u548c\u54cd\u5e94\u72b6\u6001\u7801\u3002\u4ee3\u7406\u8ba4\u8bc1\uff0c\u8be2\u95ee\u8d28\u7591\u7684\u72b6\u6001\u7801\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"407"),"\uff08\u5fc5\u987b\u63d0\u4f9b\u4ee3\u7406\u8bc1\u4e66\uff09\uff0c\u54cd\u5e94\u5934",(0,r.kt)("inlineCode",{parentName:"p"},"Proxy-Authenticate"),"\u81f3\u5c11\u5305\u542b\u4e00\u4e2a\u53ef\u7528\u7684\u8d28\u5236\uff0c\u5e76\u4e14\u8bf7\u6c42\u5934",(0,r.kt)("inlineCode",{parentName:"p"},"Proxy-Authorization"),"\u7528\u4f5c\u63d0\u4f9b\u8bc1\u4e66\u7ed9\u4ee3\u7406\u670d\u52a1\u5668\u3002"),(0,r.kt)("h3",{id:"\u8bbf\u95ee\u62d2\u7edd"},"\u8bbf\u95ee\u62d2\u7edd"),(0,r.kt)("p",null,"\u5f53\uff08\u4ee3\u7406\uff09\u670d\u52a1\u5668\u6536\u5230\u4e00\u4e2a\u5408\u6cd5\u8ba4\u8bc1\u4fe1\u606f\u65f6\uff0c\u82e5\u8be5\u8ba4\u8bc1\u4e0d\u80fd\u83b7\u53d6\u8bf7\u6c42\u8d44\u6e90\u7684\u6743\u9650\uff0c\uff08\u4ee3\u7406\uff09\u670d\u52a1\u5668\u4f1a\u8fd4\u56de403\u54cd\u5e94\u72b6\u6001\uff0c\u8bf4\u660e\u7528\u6237\u8bc1\u4e66\u6743\u9650\u4e0d\u591f\uff0c\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"401")," \u672a\u8ba4\u8bc1\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"407 "),"\u672a\u4ee3\u7406\u8ba4\u8bc1\u4e0d\u540c\u3002"),(0,r.kt)("h3",{id:"\u8de8\u57df\u56fe\u7247\u8ba4\u8bc1"},"\u8de8\u57df\u56fe\u7247\u8ba4\u8bc1"),(0,r.kt)("p",null,"\u4e00\u4e2a\u88ab\u6d4f\u89c8\u5668\u6700\u8fd1\u4fee\u590d\u4e86\u7684\u6f5c\u5728\u7684\u5b89\u5168\u6f0f\u6d1e\u662f\u8de8\u57df\u56fe\u7247\u7684\u8ba4\u8bc1\u3002\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/Firefox/Releases/59"},"Firefox 59")," \u8d77\uff0c\u6d4f\u89c8\u5668\u5728\u52a0\u8f7d\u4e0d\u540c\u57df\u7684\u56fe\u7247\u8d44\u6e90\u65f6\uff0c\u5c06\u4e0d\u4f1a\u518d\u5f39\u51fa HTTP \u8ba4\u8bc1\u5bf9\u8bdd\u6846\uff08",(0,r.kt)("a",{parentName:"p",href:"https://bugzilla.mozilla.org/show_bug.cgi?id=1423146"},"bug 1423146"),"\uff09\u3002\u5982\u679c\u653b\u51fb\u8005\u53ef\u4ee5\u5c06\u4efb\u610f\u56fe\u7247\u5d4c\u5165\u5230\u7b2c\u4e09\u65b9\u9875\u9762\u4e2d\uff0c\u7981\u6b62\u5f39\u51fa HTTP \u8ba4\u8bc1\u5bf9\u8bdd\u6846\u53ef\u907f\u514d\u7528\u6237\u7684\u8eab\u4efd\u51ed\u8bc1\u88ab\u7a83\u53d6\u3002"),(0,r.kt)("h3",{id:"http-\u8ba4\u8bc1\u7684\u5b57\u7b26\u7f16\u7801"},"HTTP \u8ba4\u8bc1\u7684\u5b57\u7b26\u7f16\u7801"),(0,r.kt)("p",null,"\u6d4f\u89c8\u5668\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"utf-8")," \u7f16\u7801\u7528\u6237\u540d\u548c\u5bc6\u7801\u3002Firefox \u66fe\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"ISO-8859-1"),"\uff0c\u4f46\u4e3a\u4e0e\u5176\u4ed6\u6d4f\u89c8\u5668\u4fdd\u6301\u4e00\u81f4\u6539\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"utf-8"),"\uff0c\u4e5f\u4e3a\u4e86\u907f\u514d ",(0,r.kt)("a",{parentName:"p",href:"https://bugzilla.mozilla.org/show_bug.cgi?id=1419658"},"bug 1419658")," \u4e2d\u6240\u63cf\u8ff0\u7684\u6f5c\u5728\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"www-authenticate-\u4e0e-proxy-authenticate-\u9996\u90e8"},(0,r.kt)("inlineCode",{parentName:"h3"},"WWW-Authenticate")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"h3"},"Proxy-Authenticate")," \u9996\u90e8"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"WWW-Authenticate")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"Proxy-Authenticate")," \u54cd\u5e94\u6d88\u606f\u9996\u90e8\u6307\u5b9a\u4e86\u4e3a\u83b7\u53d6\u8d44\u6e90\u8bbf\u95ee\u6743\u9650\u800c\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u7684\u65b9\u6cd5\u3002\u5b83\u4eec\u9700\u8981\u660e\u786e\u8981\u8fdb\u884c\u9a8c\u8bc1\u7684\u65b9\u6848\uff0c\u8fd9\u6837\u5e0c\u671b\u8fdb\u884c\u6388\u6743\u7684\u5ba2\u6237\u7aef\u5c31\u77e5\u9053\u8be5\u5982\u4f55\u63d0\u4f9b\u51ed\u8bc1\u4fe1\u606f\u3002\u8fd9\u4e24\u4e2a\u9996\u90e8\u7684\u8bed\u6cd5\u5f62\u5f0f\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"WWW-Authenticate: <type> realm=<realm>\nProxy-Authenticate: <type> realm=<realm>\n")),(0,r.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"<type>")," \u6307\u7684\u662f\u9a8c\u8bc1\u7684\u65b9\u6848\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"realm")," \u7528\u6765\u63cf\u8ff0\u8fdb\u884c\u4fdd\u62a4\u7684\u533a\u57df\uff0c\u6216\u8005\u6307\u4ee3\u4fdd\u62a4\u7684\u8303\u56f4\u3002\u5b83\u53ef\u4ee5\u662f\u7c7b\u4f3c\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"Access to the staging site")," \u7684\u6d88\u606f\uff0c\u8fd9\u6837\u7528\u6237\u5c31\u53ef\u4ee5\u77e5\u9053\u4ed6\u4eec\u6b63\u5728\u8bd5\u56fe\u8bbf\u95ee\u54ea\u4e00\u7a7a\u95f4\u3002"),(0,r.kt)("h3",{id:"authorization-\u4e0e-proxy-authorization-\u9996\u90e8"},(0,r.kt)("inlineCode",{parentName:"h3"},"Authorization")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"h3"},"Proxy-Authorization")," \u9996\u90e8"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"Proxy-Authorization")," \u8bf7\u6c42\u6d88\u606f\u9996\u90e8\u5305\u542b\u6709\u7528\u6765\u5411\uff08\u4ee3\u7406\uff09\u670d\u52a1\u5668\u8bc1\u660e\u7528\u6237\u4ee3\u7406\u8eab\u4efd\u7684\u51ed\u8bc1\u3002\u8fd9\u91cc\u540c\u6837\u9700\u8981\u6307\u660e\u9a8c\u8bc1\u7684\u7c7b\u578b\uff0c\u5176\u540e\u8ddf\u6709\u51ed\u8bc1\u4fe1\u606f\uff0c\u8be5\u51ed\u8bc1\u4fe1\u606f\u53ef\u4ee5\u88ab\u7f16\u7801\u6216\u8005\u52a0\u5bc6\uff0c\u53d6\u51b3\u4e8e\u91c7\u7528\u7684\u662f\u54ea\u79cd\u9a8c\u8bc1\u65b9\u6848\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"Authorization: <type> <credentials>\nProxy-Authorization: <type> <credentials>\n")),(0,r.kt)("h3",{id:"\u9a8c\u8bc1\u65b9\u6848"},"\u9a8c\u8bc1\u65b9\u6848"),(0,r.kt)("p",null,"\u901a\u7528 HTTP \u8eab\u4efd\u9a8c\u8bc1\u6846\u67b6\u53ef\u4ee5\u88ab\u591a\u4e2a\u9a8c\u8bc1\u65b9\u6848\u4f7f\u7528\u3002\u4e0d\u540c\u7684\u9a8c\u8bc1\u65b9\u6848\u4f1a\u5728\u5b89\u5168\u5f3a\u5ea6\u4ee5\u53ca\u5728\u5ba2\u6237\u7aef\u6216\u670d\u52a1\u5668\u7aef\u8f6f\u4ef6\u4e2d\u53ef\u83b7\u5f97\u7684\u96be\u6613\u7a0b\u5ea6\u4e0a\u6709\u6240\u4e0d\u540c\u3002"),(0,r.kt)("p",null,'\u6700\u5e38\u89c1\u7684\u9a8c\u8bc1\u65b9\u6848\u662f\u201c\u57fa\u672c\u9a8c\u8bc1\u65b9\u6848\u201d\uff08"Basic"\uff09\uff0c\u8be5\u65b9\u6848\u4f1a\u5728\u4e0b\u9762\u8fdb\u884c\u8be6\u7ec6\u9610\u8ff0\u3002 IANA \u7ef4\u62a4\u4e86',(0,r.kt)("a",{parentName:"p",href:"https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml"},"\u4e00\u7cfb\u5217\u7684\u9a8c\u8bc1\u65b9\u6848"),"\uff0c\u9664\u6b64\u4e4b\u5916\u8fd8\u6709\u5176\u4ed6\u7c7b\u578b\u7684\u9a8c\u8bc1\u65b9\u6848\u7531\u865a\u62df\u4e3b\u673a\u670d\u52a1\u63d0\u4f9b\uff0c\u4f8b\u5982 Amazon AWS \u3002\u5e38\u89c1\u7684\u9a8c\u8bc1\u65b9\u6848\u5305\u62ec\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Basic")," (\u67e5\u770b ",(0,r.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc7617"},"RFC 7617"),"\uff0cbase64 \u7f16\u7801\u51ed\u8bc1\u3002\u8be6\u60c5\u8bf7\u53c2\u9605\u4e0b\u6587.),"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bearer")," (\u67e5\u770b ",(0,r.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc6750"},"RFC 6750"),"\uff0cbearer \u4ee4\u724c\u901a\u8fc7 OAuth 2.0 \u4fdd\u62a4\u8d44\u6e90),"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Digest")," (\u67e5\u770b ",(0,r.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc7616"},"RFC 7616"),"\uff0c\u53ea\u6709 md5 \u6563\u5217 \u5728 Firefox \u4e2d\u652f\u6301\uff0c\u67e5\u770b ",(0,r.kt)("a",{parentName:"li",href:"https://bugzilla.mozilla.org/show_bug.cgi?id=472823"},"bug 472823")," \u7528\u4e8e SHA \u52a0\u5bc6\u652f\u6301),"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"HOBA")," (\u67e5\u770b ",(0,r.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc7486"},"RFC 7486"),"\uff08\u8349\u6848\uff09\uff0c",(0,r.kt)("strong",{parentName:"li"},"H"),"TTP ",(0,r.kt)("strong",{parentName:"li"},"O"),"rigin-",(0,r.kt)("strong",{parentName:"li"},"B"),"ound \u8ba4\u8bc1\uff0c\u57fa\u4e8e\u6570\u5b57\u7b7e\u540d),"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mutual")," (\u67e5\u770b ",(0,r.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/draft-ietf-httpauth-mutual-11"},"draft-ietf-httpauth-mutual"),"),"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AWS4-HMAC-SHA256")," (\u67e5\u770b ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html"},"AWS docs"),").")),(0,r.kt)("h2",{id:"\u57fa\u672c\u9a8c\u8bc1\u65b9\u6848"},"\u57fa\u672c\u9a8c\u8bc1\u65b9\u6848"),(0,r.kt)("p",null,'"Basic" HTTP \u9a8c\u8bc1\u65b9\u6848\u662f\u5728 ',(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7617"},"RFC 7617"),"\u4e2d\u89c4\u5b9a\u7684\uff0c\u5728\u8be5\u65b9\u6848\u4e2d\uff0c\u4f7f\u7528\u7528\u6237\u7684 ID/\u5bc6\u7801\u4f5c\u4e3a\u51ed\u8bc1\u4fe1\u606f\uff0c\u5e76\u4e14\u4f7f\u7528 base64 \u7b97\u6cd5\u8fdb\u884c\u7f16\u7801\u3002"),(0,r.kt)("h3",{id:"\u57fa\u672c\u9a8c\u8bc1\u65b9\u6848\u7684\u5b89\u5168\u6027"},"\u57fa\u672c\u9a8c\u8bc1\u65b9\u6848\u7684\u5b89\u5168\u6027"),(0,r.kt)("p",null,"\u7531\u4e8e\u7528\u6237 ID \u4e0e\u5bc6\u7801\u662f\u662f\u4ee5\u660e\u6587\u7684\u5f62\u5f0f\u5728\u7f51\u7edc\u4e2d\u8fdb\u884c\u4f20\u8f93\u7684\uff08\u5c3d\u7ba1\u91c7\u7528\u4e86 base64 \u7f16\u7801\uff0c\u4f46\u662f base64 \u7b97\u6cd5\u662f\u53ef\u9006\u7684\uff09\uff0c\u6240\u4ee5\u57fa\u672c\u9a8c\u8bc1\u65b9\u6848\u5e76\u4e0d\u5b89\u5168\u3002\u57fa\u672c\u9a8c\u8bc1\u65b9\u6848\u5e94\u4e0e HTTPS / TLS \u534f\u8bae\u642d\u914d\u4f7f\u7528\u3002\u5047\u5982\u6ca1\u6709\u8fd9\u4e9b\u5b89\u5168\u65b9\u9762\u7684\u589e\u5f3a\uff0c\u90a3\u4e48\u57fa\u672c\u9a8c\u8bc1\u65b9\u6848\u4e0d\u5e94\u8be5\u88ab\u6765\u7528\u4fdd\u62a4\u654f\u611f\u6216\u8005\u6781\u5177\u4ef7\u503c\u7684\u4fe1\u606f\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528-apache-\u9650\u5236\u8bbf\u95ee\u548c\u57fa\u672c\u8eab\u4efd\u9a8c\u8bc1"},"\u4f7f\u7528 Apache \u9650\u5236\u8bbf\u95ee\u548c\u57fa\u672c\u8eab\u4efd\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u8981\u5bf9 Apache \u670d\u52a1\u5668\u4e0a\u7684\u76ee\u5f55\u8fdb\u884c\u5bc6\u7801\u4fdd\u62a4\uff0c \u4f60\u9700\u8981\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},".htaccess")," \u548c a ",(0,r.kt)("inlineCode",{parentName:"p"},".htpasswd")," \u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u8be5 ",(0,r.kt)("inlineCode",{parentName:"p"},".htaccess")," \u6587\u4ef6\u683c\u5f0f\u901a\u5e38\u770b\u8d77\u6765\u50cf\u8fd9\u6837\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'AuthType Basic\nAuthName "Access to the staging site"\nAuthUserFile /path/to/.htpasswd\nRequire valid-user\n')),(0,r.kt)("p",null,"\u8be5 ",(0,r.kt)("inlineCode",{parentName:"p"},".htaccess")," \u6587\u4ef6\u5f15\u7528\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},".htpasswd")," \u6587\u4ef6\uff0c\u5176\u4e2d\u6bcf\u884c\u7528\u5192\u53f7\uff08\u201c\uff1a\u201d\uff09\u5206\u9694\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u3002\u4f60\u4e0d\u80fd\u770b\u5230\u771f\u5b9e\u7684\u5bc6\u7801\u56e0\u4e3a\u5b83\u4eec\u662f ",(0,r.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/misc/password_encryptions.html"},"encrypted")," (\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\u662f\u4f7f\u7528\u4e86 MD5). \u4f60\u53ef\u4ee5\u547d\u540d",(0,r.kt)("inlineCode",{parentName:"p"},".htpasswd")," \u6587\u4ef6 \u4e3a\u4f60\u6240\u559c\u6b22\u7684\u540d\u5b57\uff0c\u4f46\u662f\u5e94\u8be5\u4fdd\u8bc1\u8fd9\u4e2a\u6587\u4ef6\u4e0d\u88ab\u5176\u4ed6\u4eba\u8bbf\u95ee. (Apache \u901a\u5e38\u914d\u7f6e\u963b\u6b62\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},".ht*")," \u7c7b\u7684\u6587\u4ef6)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.\nuser2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/\n")),(0,r.kt)("h3",{id:"nginx-\u8bbf\u95ee\u9650\u5236\u548c\u57fa\u672c\u8ba4\u8bc1"},"nginx \u8bbf\u95ee\u9650\u5236\u548c\u57fa\u672c\u8ba4\u8bc1"),(0,r.kt)("p",null,"\u5728 nginx \u914d\u7f6e\u4e2d\uff0c\u5bf9\u9700\u8981\u4fdd\u62a4\u7684 location \u4f60\u9700\u8981\u505a\u5982\u4e0b\u914d\u7f6e\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"auth_basic \u6307\u4ee4\u63d0\u4f9b\u5bc6\u7801\u4fdd\u62a4\u57df\u7684\u540d\u79f0\uff1bauth_basic_user_file \u6307\u4ee4\u6307\u5b9a\u5305\u542b\u7528\u6237\u5bc6\u6587\u7684\u8bc1\u4e66\u7684\u6587\u4ef6\uff08\u4e0e apache \u4f8b\u5b50\u4e2d\u4e00\u81f4\uff09")),(0,r.kt)("p",null,"\u5728 nginx \u4e2d\uff0c\u4f60\u9700\u8981\u6307\u5b9a\u4e00\u4e2a\u4fdd\u62a4\u533a\u57df\u548c\u8be5 ",(0,r.kt)("inlineCode",{parentName:"p"},"auth_basic")," \u6307\u4ee4\u63d0\u4f9b\u7684\u4fdd\u62a4\u533a\u57df\u540d\u5b57\u3002\u7136\u540e\u8be5 ",(0,r.kt)("inlineCode",{parentName:"p"},"auth_basic_user_file")," \u6307\u4ee4\u6307\u5411\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},".htpasswd")," \u5305\u542b\u52a0\u5bc6\u7528\u6237\u51ed\u636e\u7684\u6587\u4ef6\uff0c\u5c31\u50cf\u4e0a\u9762\u7684 apache \u4f8b\u5b50\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'location /status {\n    auth_basic           "Access to the staging site";\n    auth_basic_user_file /etc/apache2/.htpasswd;\n}\n')))}c.isMDXComponent=!0}}]);