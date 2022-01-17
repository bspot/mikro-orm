"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96876],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81904:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],l={title:"Serializing"},s=void 0,p={unversionedId:"serializing",id:"version-2.7/serializing",title:"Serializing",description:"By default, all entities are monkey patched with toObject() and toJSON methods:",source:"@site/versioned_docs/version-2.7/serializing.md",sourceDirName:".",slug:"/serializing",permalink:"/docs/2.7/serializing",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/serializing.md",tags:[],version:"2.7",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1642408438,formattedLastUpdatedAt:"1/17/2022",frontMatter:{title:"Serializing"},sidebar:"version-2.7/docs",previous:{title:"Using QueryBuilder",permalink:"/docs/2.7/query-builder"},next:{title:"Updating Entity Values",permalink:"/docs/2.7/entity-helper"}},c=[{value:"Hidden properties",id:"hidden-properties",children:[],level:2},{value:"Shadow properties",id:"shadow-properties",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By default, all entities are monkey patched with ",(0,i.kt)("inlineCode",{parentName:"p"},"toObject()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"toJSON")," methods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface IEntity<K = number | string> {\n  toObject(parent?: IEntity, isCollection?: boolean): Record<string, any>;\n  toJSON(...args: any[]): Record<string, any>;\n  // ...\n}\n")),(0,i.kt)("p",null,"When you serialize your entity via ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON.stringify(entity)"),", its ",(0,i.kt)("inlineCode",{parentName:"p"},"toJSON")," method will be\ncalled automatically. You can provide custom implementation for ",(0,i.kt)("inlineCode",{parentName:"p"},"toJSON"),", while using\n",(0,i.kt)("inlineCode",{parentName:"p"},"toObject")," for initial serialization:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  // ...\n\n  toJSON(strict = true, strip = ['id', 'email'], ...args: any[]): { [p: string]: any } {\n    const o = this.toObject(...args); // do not forget to pass rest params here\n\n    if (strict) {\n      strip.forEach(k => delete o[k]);\n    }\n\n    return o;\n  }\n\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Do not forget to pass rest params when calling ",(0,i.kt)("inlineCode",{parentName:"p"},"toObject(...args)"),", otherwise the results\nmight not be stable.")),(0,i.kt)("h2",{id:"hidden-properties"},"Hidden properties"),(0,i.kt)("p",null,"If you want to omit some properties from serialized result, you can mark them with ",(0,i.kt)("inlineCode",{parentName:"p"},"hidden"),"\nflag on ",(0,i.kt)("inlineCode",{parentName:"p"},"@Property()")," decorator:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @Property({ hidden: true })\n  hiddenField = Date.now();\n\n}\n\nconst book = new Book(...);\nconsole.log(book.toObject().hiddenField); // undefined\nconsole.log(book.toJSON().hiddenField); // undefined\n")),(0,i.kt)("h2",{id:"shadow-properties"},"Shadow properties"),(0,i.kt)("p",null,"The opposite situation where you want to define a property that lives only in memory (is\nnot persisted into database) can be solved by defining your property as ",(0,i.kt)("inlineCode",{parentName:"p"},"persist: false"),".\nSuch property can be assigned via one of ",(0,i.kt)("inlineCode",{parentName:"p"},"IEntity.assign()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager.create()")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager.merge()"),". It will be also part of serialized result. "),(0,i.kt)("p",null,"This can be handle when dealing with additional values selected via ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," or\nMongoDB's aggregations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @Property({ persist: false })\n  count: number;\n\n}\n\nconst book = new Book(...);\nbook.assign({ count: 123 });\nconsole.log(book.toObject().count); // 123\nconsole.log(book.toJSON().count); // 123\n")))}u.isMDXComponent=!0}}]);