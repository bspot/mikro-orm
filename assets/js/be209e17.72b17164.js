"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91124],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1661:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=["components"],p={id:"core.updateoptions",title:"Interface: UpdateOptions<T>",sidebar_label:"UpdateOptions",custom_edit_url:null,hide_title:!0},c="Interface: UpdateOptions<T>",l={unversionedId:"api/interfaces/core.updateoptions",id:"version-4.5/api/interfaces/core.updateoptions",title:"Interface: UpdateOptions<T>",description:"core.UpdateOptions",source:"@site/versioned_docs/version-4.5/api/interfaces/core.updateoptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.updateoptions",permalink:"/docs/api/interfaces/core.updateoptions",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Adlan Arif Zakaria",lastUpdatedAt:1643016335,formattedLastUpdatedAt:"1/24/2022",frontMatter:{id:"core.updateoptions",title:"Interface: UpdateOptions<T>",sidebar_label:"UpdateOptions",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"UniqueOptions",permalink:"/docs/api/interfaces/core.uniqueoptions"},next:{title:"AliasDict",permalink:"/docs/api/interfaces/knex.knex-1.aliasdict"}},s=[{value:"Type parameters",id:"type-parameters",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"filters",id:"filters",children:[],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-updateoptionst"},"Interface: UpdateOptions<T",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".UpdateOptions"),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"filters"},"filters"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"filters"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")," ","|"," ",(0,i.kt)("em",{parentName:"p"},"string"),"[] ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,i.kt)("em",{parentName:"a"},"Dictionary")),"<boolean ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,i.kt)("em",{parentName:"a"},"Dictionary")),"<any",">",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/drivers/IDatabaseDriver.ts#L118"},"packages/core/src/drivers/IDatabaseDriver.ts:118")))}d.isMDXComponent=!0}}]);