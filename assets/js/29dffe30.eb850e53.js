"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1302],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1770:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],l={title:"Entity Generator"},s=void 0,c={unversionedId:"entity-generator",id:"version-5.0/entity-generator",title:"Entity Generator",description:"To generate entities from existing database schema, you can use EntityGenerator helper.",source:"@site/versioned_docs/version-5.0/entity-generator.md",sourceDirName:".",slug:"/entity-generator",permalink:"/docs/entity-generator",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.0/entity-generator.md",tags:[],version:"5.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1644654440,formattedLastUpdatedAt:"2/12/2022",frontMatter:{title:"Entity Generator"},sidebar:"docs",previous:{title:"Schema Generator",permalink:"/docs/schema-generator"},next:{title:"Naming Strategy",permalink:"/docs/naming-strategy"}},p=[{value:"Current limitations",id:"current-limitations",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To generate entities from existing database schema, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityGenerator")," helper. "),(0,i.kt)("p",null,"You can use it via CLI: "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To work with the CLI, first install ",(0,i.kt)("inlineCode",{parentName:"p"},"@mikro-orm/cli")," package locally.\nThe version needs to be aligned with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@mikro-orm/core")," package.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npx mikro-orm generate-entities --dump  # Dumps all generated entities\nnpx mikro-orm generate-entities --save --path=./my-entities  # Saves entities into given directory\n")),(0,i.kt)("p",null,"Or you can create simple script where you initialize MikroORM like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./generate-entities.ts"',title:'"./generate-entities.ts"'},"import { MikroORM } from '@mikro-orm/core';\n\n(async () => {\n  const orm = await MikroORM.init({\n    discovery: {\n      // we need to disable validation for no entities \n      warnWhenNoEntities: false,\n    },\n    dbName: 'your-db-name',\n    // ...\n  });\n  const generator = orm.getEntityGenerator();\n  const dump = await generator.generate({ \n    save: true,\n    baseDir: process.cwd() + '/my-entities',\n  });\n  console.log(dump);\n  await orm.close(true);\n})();\n")),(0,i.kt)("p",null,"Then run this script via ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-node")," (or compile it to plain JS and use ",(0,i.kt)("inlineCode",{parentName:"p"},"node"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ ts-node generate-entities\n")),(0,i.kt)("h2",{id:"current-limitations"},"Current limitations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"in mysql, tinyint columns will be defined as boolean properties")))}m.isMDXComponent=!0}}]);