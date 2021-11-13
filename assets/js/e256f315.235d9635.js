"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81962],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),y=a,d=m["".concat(l,".").concat(y)]||m[y]||u[y]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67805:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],s={title:"Defining Entities via EntitySchema"},l=void 0,p={unversionedId:"entity-schema",id:"version-4.3/entity-schema",isDocsHomePage:!1,title:"Defining Entities via EntitySchema",description:"With EntitySchema helper you define the schema programmatically.",source:"@site/versioned_docs/version-4.3/entity-schema.md",sourceDirName:".",slug:"/entity-schema",permalink:"/docs/4.3/entity-schema",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/entity-schema.md",tags:[],version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1636765765,formattedLastUpdatedAt:"11/13/2021",frontMatter:{title:"Defining Entities via EntitySchema"},sidebar:"version-4.3/docs",previous:{title:"Embeddables",permalink:"/docs/4.3/embeddables"},next:{title:"Metadata Providers",permalink:"/docs/4.3/metadata-providers"}},c=[{value:"Using custom entity classes",id:"using-custom-entity-classes",children:[],level:2},{value:"Using BaseEntity",id:"using-baseentity",children:[],level:2},{value:"Configuration Reference",id:"configuration-reference",children:[],level:2},{value:"MongoDB example",id:"mongodb-example",children:[],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"EntitySchema")," helper you define the schema programmatically. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"export interface Book extends BaseEntity {\n  title: string;\n  author: Author;\n  publisher: Publisher;\n  tags: Collection<BookTag>;\n}\n\nexport const schema = new EntitySchema<Book, BaseEntity>({\n  name: 'Book',\n  extends: 'BaseEntity',\n  properties: {\n    title: { type: 'string' },\n    author: { reference: 'm:1', entity: 'Author', inversedBy: 'books' },\n    publisher: { reference: 'm:1', entity: 'Publisher', inversedBy: 'books' },\n    tags: { reference: 'm:n', entity: 'BookTag', inversedBy: 'books', fixedOrder: true },\n  },\n});\n")),(0,o.kt)("p",null,"When creating new entity instances, you will need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"em.create()")," method that will\ncreate instance of internally created class. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const repo = em.getRepository<Author>('Author');\nconst author = repo.create('Author', { name: 'name', email: 'email' }); // instance of internal Author class\nawait repo.persistAndFlush(author);\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Using this approach, metadata caching is automatically disabled as it is not needed.")),(0,o.kt)("h2",{id:"using-custom-entity-classes"},"Using custom entity classes"),(0,o.kt)("p",null,"You can optionally use custom class for entity instances.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./entities/Author.ts"',title:'"./entities/Author.ts"'},"export class Author extends BaseEntity {\n  name: string;\n  email: string;\n  age?: number;\n  termsAccepted?: boolean;\n  identities?: string[];\n  born?: Date;\n  books = new Collection<Book>(this);\n  favouriteBook?: Book;\n  version?: number;\n  \n  constructor(name: string, email: string) {\n    this.name = name;\n    this.email = email;\n  }\n}\n\nexport const schema = new EntitySchema<Author, BaseEntity>({\n  class: Author,\n  properties: {\n    name: { type: 'string' },\n    email: { type: 'string', unique: true },\n    age: { type: 'number', nullable: true },\n    termsAccepted: { type: 'boolean', default: 0, onCreate: () => false },\n    identities: { type: 'string[]', nullable: true },\n    born: { type: DateType, nullable: true, length: 3 },\n    books: { reference: '1:m', entity: () => 'Book', mappedBy: book => book.author },\n    favouriteBook: { reference: 'm:1', type: 'Book' },\n    version: { type: 'number', persist: false },\n  },\n});\n")),(0,o.kt)("p",null,"Then you can use the entity class as usual:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const repo = em.getRepository(Author);\nconst author = new Author('name', 'email');\nawait repo.persistAndFlush(author);\n")),(0,o.kt)("h2",{id:"using-baseentity"},"Using BaseEntity"),(0,o.kt)("p",null,"Do not forget that base entities needs to be discovered just like normal entities. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./entities/BaseEntity.ts"',title:'"./entities/BaseEntity.ts"'},"export interface BaseEntity {\n  id: number;\n  createdAt: Date;\n  updatedAt: Date;\n}\n\nexport const schema = new EntitySchema<BaseEntity>({\n  name: 'BaseEntity',\n  abstract: true,\n  properties: {\n    id: { type: 'number', primary: true },\n    createdAt: { type: 'Date', onCreate: () => new Date(), nullable: true },\n    updatedAt: { type: 'Date', onCreate: () => new Date(), onUpdate: () => new Date(), nullable: true },\n  },\n});\n")),(0,o.kt)("h2",{id:"configuration-reference"},"Configuration Reference"),(0,o.kt)("p",null,"The parameter of ",(0,o.kt)("inlineCode",{parentName:"p"},"EntitySchema")," requires to provide either ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"class")," parameters.\nWhen using ",(0,o.kt)("inlineCode",{parentName:"p"},"class"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"extends")," will be automatically inferred. You can optionally pass\nthese additional parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"name: string;\nclass: Constructor<T>;\nextends: string;\ntableName: string; // alias for `collection: string`\nproperties: { [K in keyof T & string]: EntityProperty<T[K]> };\nindexes: { properties: string | string[]; name?: string; type?: string }[];\nuniques: { properties: string | string[]; name?: string }[];\ncustomRepository: () => Constructor<EntityRepository<T>>;\nhooks: Partial<Record<HookType, (string & keyof T)[]>>;\nabstract: boolean;\n")),(0,o.kt)("p",null,"Every property then needs to contain a type specification - one of ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"customType"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),".\nHere are some examples of various property types:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export enum MyEnum {\n  LOCAL = 'local',\n  GLOBAL = 'global',\n}\n\nexport const schema = new EntitySchema<FooBar>({\n  name: 'FooBar',\n  tableName: 'tbl_foo_bar',\n  indexes: [{ name: 'idx1', properties: 'name' }],\n  uniques: [{ name: 'unq1', properties: ['name', 'email'] }],\n  customRepository: () => FooBarRepository,\n  properties: {\n    id: { type: 'number', primary: true },\n    name: { type: 'string' },\n    baz: { reference: '1:1', entity: 'FooBaz', orphanRemoval: true, nullable: true },\n    fooBar: { reference: '1:1', entity: 'FooBar', nullable: true },\n    publisher: { reference: 'm:1', entity: 'Publisher', inversedBy: 'books' },\n    books: { reference: '1:m', entity: () => 'Book', mappedBy: book => book.author },\n    tags: { reference: 'm:n', entity: 'BookTag', inversedBy: 'books', fixedOrder: true },\n    version: { type: 'Date', version: true, length: 0 },\n    type: { enum: true, items: () => MyEnum, default: MyEnum.LOCAL },\n  },\n});\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"As a value for ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," you can also use one of ",(0,o.kt)("inlineCode",{parentName:"p"},"String"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"Number"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"Date"),".")),(0,o.kt)("h2",{id:"mongodb-example"},"MongoDB example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export class BookTag {\n  _id!: ObjectId;\n  id!: string;\n  name: string;\n  books = new Collection<Book>(this);\n\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n\nexport const schema = new EntitySchema<BookTag>({\n  class: BookTag,\n  properties: {\n    _id: { type: 'ObjectId', primary: true },\n    id: { type: 'string', serializedPrimaryKey: true },\n    name: { type: 'string' },\n    books: { reference: 'm:n', entity: () => Book, mappedBy: book => book.tags },\n  },\n});\n")))}m.isMDXComponent=!0}}]);