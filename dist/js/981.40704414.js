(self["webpackChunkepidemiologia"]=self["webpackChunkepidemiologia"]||[]).push([[981],{6077:function(e,t,r){var a=r(614),o=String,n=TypeError;e.exports=function(e){if("object"==typeof e||a(e))return e;throw n("Can't set "+o(e)+" as a prototype")}},3013:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,r){"use strict";var a,o,n,l=r(3013),s=r(9781),i=r(7854),u=r(614),d=r(111),c=r(2597),p=r(648),f=r(6330),m=r(8880),y=r(8052),v=r(7045),w=r(7976),g=r(9518),b=r(7674),x=r(5112),h=r(9711),_=r(9909),W=_.enforce,k=_.get,A=i.Int8Array,S=A&&A.prototype,C=i.Uint8ClampedArray,V=C&&C.prototype,U=A&&g(A),D=S&&g(S),T=Object.prototype,I=i.TypeError,F=x("toStringTag"),q=h("TYPED_ARRAY_TAG"),E="TypedArrayConstructor",j=l&&!!b&&"Opera"!==p(i.opera),P=!1,Y={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},z={BigInt64Array:8,BigUint64Array:8},B=function(e){if(!d(e))return!1;var t=p(e);return"DataView"===t||c(Y,t)||c(z,t)},O=function(e){var t=g(e);if(d(t)){var r=k(t);return r&&c(r,E)?r[E]:O(t)}},H=function(e){if(!d(e))return!1;var t=p(e);return c(Y,t)||c(z,t)},R=function(e){if(H(e))return e;throw I("Target is not a typed array")},M=function(e){if(u(e)&&(!b||w(U,e)))return e;throw I(f(e)+" is not a typed array constructor")},Z=function(e,t,r,a){if(s){if(r)for(var o in Y){var n=i[o];if(n&&c(n.prototype,e))try{delete n.prototype[e]}catch(l){try{n.prototype[e]=t}catch(u){}}}D[e]&&!r||y(D,e,r?t:j&&S[e]||t,a)}},L=function(e,t,r){var a,o;if(s){if(b){if(r)for(a in Y)if(o=i[a],o&&c(o,e))try{delete o[e]}catch(n){}if(U[e]&&!r)return;try{return y(U,e,r?t:j&&U[e]||t)}catch(n){}}for(a in Y)o=i[a],!o||o[e]&&!r||y(o,e,t)}};for(a in Y)o=i[a],n=o&&o.prototype,n?W(n)[E]=o:j=!1;for(a in z)o=i[a],n=o&&o.prototype,n&&(W(n)[E]=o);if((!j||!u(U)||U===Function.prototype)&&(U=function(){throw I("Incorrect invocation")},j))for(a in Y)i[a]&&b(i[a],U);if((!j||!D||D===T)&&(D=U.prototype,j))for(a in Y)i[a]&&b(i[a].prototype,D);if(j&&g(V)!==D&&b(V,D),s&&!c(D,F))for(a in P=!0,v(D,F,{configurable:!0,get:function(){return d(this)?this[q]:void 0}}),Y)i[a]&&m(i[a],q,a);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:j,TYPED_ARRAY_TAG:P&&q,aTypedArray:R,aTypedArrayConstructor:M,exportTypedArrayMethod:Z,exportTypedArrayStaticMethod:L,getTypedArrayConstructor:O,isView:B,isTypedArray:H,TypedArray:U,TypedArrayPrototype:D}},7745:function(e,t,r){var a=r(6244);e.exports=function(e,t){var r=0,o=a(t),n=new e(o);while(o>r)n[r]=t[r++];return n}},1843:function(e,t,r){var a=r(6244);e.exports=function(e,t){for(var r=a(e),o=new t(r),n=0;n<r;n++)o[n]=e[r-n-1];return o}},1572:function(e,t,r){var a=r(6244),o=r(9303),n=RangeError;e.exports=function(e,t,r,l){var s=a(e),i=o(r),u=i<0?s+i:i;if(u>=s||u<0)throw n("Incorrect index");for(var d=new t(s),c=0;c<s;c++)d[c]=c===u?l:e[c];return d}},648:function(e,t,r){var a=r(1694),o=r(614),n=r(4326),l=r(5112),s=l("toStringTag"),i=Object,u="Arguments"==n(function(){return arguments}()),d=function(e,t){try{return e[t]}catch(r){}};e.exports=a?n:function(e){var t,r,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=d(t=i(e),s))?r:u?n(t):"Object"==(a=n(t))&&o(t.callee)?"Arguments":a}},8544:function(e,t,r){var a=r(7293);e.exports=!a((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},7045:function(e,t,r){var a=r(6339),o=r(3070);e.exports=function(e,t,r){return r.get&&a(r.get,t,{getter:!0}),r.set&&a(r.set,t,{setter:!0}),o.f(e,t,r)}},5668:function(e,t,r){var a=r(1702),o=r(9662);e.exports=function(e,t,r){try{return a(o(Object.getOwnPropertyDescriptor(e,t)[r]))}catch(n){}}},4067:function(e,t,r){var a=r(648);e.exports=function(e){var t=a(e);return"BigInt64Array"==t||"BigUint64Array"==t}},9518:function(e,t,r){var a=r(2597),o=r(614),n=r(7908),l=r(6200),s=r(8544),i=l("IE_PROTO"),u=Object,d=u.prototype;e.exports=s?u.getPrototypeOf:function(e){var t=n(e);if(a(t,i))return t[i];var r=t.constructor;return o(r)&&t instanceof r?r.prototype:t instanceof u?d:null}},7674:function(e,t,r){var a=r(5668),o=r(9670),n=r(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{e=a(Object.prototype,"__proto__","set"),e(r,[]),t=r instanceof Array}catch(l){}return function(r,a){return o(r),n(a),t?e(r,a):r.__proto__=a,r}}():void 0)},4599:function(e,t,r){var a=r(7593),o=TypeError;e.exports=function(e){var t=a(e,"number");if("number"==typeof t)throw o("Can't convert number to bigint");return BigInt(t)}},1694:function(e,t,r){var a=r(5112),o=a("toStringTag"),n={};n[o]="z",e.exports="[object z]"===String(n)},1439:function(e,t,r){"use strict";var a=r(1843),o=r(260),n=o.aTypedArray,l=o.exportTypedArrayMethod,s=o.getTypedArrayConstructor;l("toReversed",(function(){return a(n(this),s(this))}))},7585:function(e,t,r){"use strict";var a=r(260),o=r(1702),n=r(9662),l=r(7745),s=a.aTypedArray,i=a.getTypedArrayConstructor,u=a.exportTypedArrayMethod,d=o(a.TypedArrayPrototype.sort);u("toSorted",(function(e){void 0!==e&&n(e);var t=s(this),r=l(i(t),t);return d(r,e)}))},5315:function(e,t,r){"use strict";var a=r(1572),o=r(260),n=r(4067),l=r(9303),s=r(4599),i=o.aTypedArray,u=o.getTypedArrayConstructor,d=o.exportTypedArrayMethod,c=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();d("with",{with:function(e,t){var r=i(this),o=l(e),d=n(r)?s(t):+t;return a(r,u(r),o,d)}}["with"],!c)},3767:function(e,t,r){r(1439)},8585:function(e,t,r){r(7585)},8696:function(e,t,r){r(5315)},4981:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return vt}});var a=r(3396),o=r(7139),n=r(870),l=r(1489),s=r(1888),i=r(6824),u=r(8521),d=r(2718),c=r(4544),p=r(2465),f=r(5180),m=r(489),y=r(4231),v=r(1138),w=r(7041),g=r(2370),b=r(3766),x=r(320),h=r(9888),_=r(4870);const W=(0,b.U)({color:String,...(0,d.m)(),...(0,c.x)(),...(0,p.c)(),...(0,f.y)(),...(0,m.F)(),...(0,y.I)(),...(0,v.Q)(),...(0,w.x$)()},"v-sheet"),k=(0,x.ev)()({name:"VSheet",props:{...W()},setup(e,t){let{slots:r}=t;const{themeClasses:o}=(0,w.ER)(e),{backgroundColorClasses:n,backgroundColorStyles:l}=(0,g.Y5)((0,_.Vh)(e,"color")),{borderClasses:s}=(0,d.P)(e),{dimensionStyles:i}=(0,c.$)(e),{elevationClasses:u}=(0,p.Y)(e),{locationStyles:v}=(0,f.T)(e),{positionClasses:b}=(0,m.K)(e),{roundedClasses:x}=(0,y.b)(e);return(0,h.L)((()=>(0,a.Wm)(e.tag,{class:["v-sheet",o.value,n.value,s.value,u.value,b.value,x.value],style:[l.value,i.value,v.value]},r))),{}}});function A(e,t,r,d,c,p){const f=(0,a.up)("list-box"),m=(0,a.up)("table-data-up-del"),y=(0,a.up)("frm-section");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(l._,{class:"mx-auto",variant:"outlined",style:"border: 1px solid #1D62A1;",density:"compact",elevation:"0"},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{outlined:"",color:"blue"},{default:(0,a.w5)((()=>[(0,a.Wm)(i.o,{dense:"","no-gutters":""},{default:(0,a.w5)((()=>[(0,a.Wm)(u.D,{cols:"6",xs:"5",sm:"5",xl:"6",md:"6",lg:"6"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Seleccione un grupo y un formulario o cree su formulario en el grupo ")])),_:1}),(0,a.Wm)(u.D,{cols:"6",xs:"5",sm:"5",xl:"6",md:"6",lg:"6"},{default:(0,a.w5)((()=>[(0,a.Wm)(i.o,{dense:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u.D,{cols:"8"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{label:"Seleccione un Grupo - Formulario",items:e.secItems,selected:e.secSelected,onChange:p.onChangeSec},null,8,["items","selected","onChange"])])),_:1}),(0,a.Wm)(u.D,{cols:"4"},{default:(0,a.w5)((()=>[(0,a.Wm)(n.T,{color:"success",variant:"flat",size:"small"},{default:(0,a.w5)((()=>[(0,a.Uk)("Nuevo Grupo")])),_:1})])),_:1})])),_:1}),(0,a.Wm)(i.o,{dense:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u.D,{cols:"8"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{label:"Seleccione Formulario",items:e.frmItems,selected:e.frmSelected,onChange:p.onChangeFrm},null,8,["items","selected","onChange"])])),_:1}),(0,a.Wm)(u.D,{cols:"4"},{default:(0,a.w5)((()=>[(0,a.Wm)(n.T,{color:"success",variant:"flat",size:"small"},{default:(0,a.w5)((()=>[(0,a.Uk)("Nuevo Formulario")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,a.Wm)(s.Z,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.frmSelected.title)+" ",1),(0,a.Wm)(m,{items:e.items,titles:["Name","calorias"],fmodify:p.modifySecFrm,fdelete:p.deleteSecFrm},null,8,["items","fmodify","fdelete"]),(0,a.Uk)(" "+(0,o.zw)(e.secSelected)+" "+(0,o.zw)(e.frmSelected),1)])),_:1})])),_:1}),(0,a.Wm)(s.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(y,{sections:e.datosFrm.sections},null,8,["sections"])])),_:1})],64)}var S=r(652),C=r(7103),V=r(7768);function U(e,t,r,n,l,s){return(0,a.wg)(),(0,a.j4)(V.E,{variant:"solo",modelValue:e.select,"onUpdate:modelValue":t[0]||(t[0]=t=>e.select=t),items:r.items,label:r.label,density:"compact"},{selection:(0,a.w5)((e=>[((0,a.wg)(),(0,a.j4)(C.v,(0,a.dG)({variant:"text",key:JSON.stringify(e.item)},e.attrs,{"model-value":e.selected,disabled:e.disabled,size:"small","onClick:close":t=>e.parent.selectItem(e.item)}),{prepend:(0,a.w5)((()=>[(0,a.Wm)(S.V,{color:"primary",class:"bg-accent text-uppercase",start:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.item.title.slice(0,1)),1)])),_:2},1024)])),default:(0,a.w5)((()=>[(0,a.Uk)(" "+(0,o.zw)(e.item.title),1)])),_:2},1040,["model-value","disabled","onClick:close"]))])),_:1},8,["modelValue","items","label"])}var D={props:{items:{type:Array,default:[]},selected:{type:Object,default:()=>{}},label:{type:String,default:"Unknow"},onChange:{type:Function,default(){return"Default function"}}},data:()=>({select:{}}),mounted(){this.select=this.selected},methods:{onchangeHere(){this.onChange(this.select)}},watch:{select:{deep:!0,handler:function(){this.onchangeHere()}}}},T=r(89);const I=(0,T.Z)(D,[["render",U]]);var F=I,q=r(9694),E=r(131);const j=(0,x.ev)()({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...(0,q.f)(),...(0,v.Q)(),...(0,w.x$)()},setup(e,t){let{slots:r}=t;const{themeClasses:o}=(0,w.ER)(e),{densityClasses:n}=(0,q.t)(e);return(0,h.L)((()=>(0,a.Wm)(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!r.top,"v-table--has-bottom":!!r.bottom,"v-table--hover":e.hover},o.value,n.value]},{default:()=>[r.top?.(),r.default?(0,a.Wm)("div",{class:"v-table__wrapper",style:{height:(0,E.kb)(e.height)}},[(0,a.Wm)("table",null,[r.default()])]):r.wrapper?.(),r.bottom?.()]}))),{}}}),P=(0,a._)("th",null,"Opciones",-1);function Y(e,t,r,n,l,s){const i=(0,a.up)("btn-update-del");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(j,{density:"compact"},{default:(0,a.w5)((()=>[(0,a._)("thead",null,[(0,a._)("tr",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.titles,(e=>((0,a.wg)(),(0,a.iD)("th",{class:"text-left",key:s.uuid()},(0,o.zw)(e),1)))),128)),P])]),(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.datos,((t,n)=>((0,a.wg)(),(0,a.iD)("tr",{key:s.uuid()},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t,((e,t)=>((0,a.wg)(),(0,a.iD)("td",{key:s.uuid()},(0,o.zw)(e),1)))),128)),(0,a._)("td",null,[(0,a.Wm)(i,{idx:`${e.idCol[n]}`,fmodify:r.fmodify,fdelete:r.fdelete},null,8,["idx","fmodify","fdelete"])])])))),128))])])),_:1}),(0,a.Uk)(" "+(0,o.zw)(e.datos)+" "+(0,o.zw)(e.idCol),1)],64)}const z="undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var B={randomUUID:z};r(3767),r(8585),r(8696);let O;const H=new Uint8Array(16);function R(){if(!O&&(O="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!O))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return O(H)}r(7658);const M=[];for(let wt=0;wt<256;++wt)M.push((wt+256).toString(16).slice(1));function Z(e,t=0){return(M[e[t+0]]+M[e[t+1]]+M[e[t+2]]+M[e[t+3]]+"-"+M[e[t+4]]+M[e[t+5]]+"-"+M[e[t+6]]+M[e[t+7]]+"-"+M[e[t+8]]+M[e[t+9]]+"-"+M[e[t+10]]+M[e[t+11]]+M[e[t+12]]+M[e[t+13]]+M[e[t+14]]+M[e[t+15]]).toLowerCase()}function L(e,t,r){if(B.randomUUID&&!t&&!e)return B.randomUUID();e=e||{};const a=e.random||(e.rng||R)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=a[e];return t}return Z(a)}var G=L;function $(e,t,r,o,l,s){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(n.T,{class:"text-none ms-4 text-white",variant:"flat",size:"small",color:"blue-darken-1",onClick:t[0]||(t[0]=e=>r.fmodify(r.idx)),"prepend-icon":"mdi-image-edit-outline",density:"compact"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Modificar ")])),_:1}),(0,a.Wm)(n.T,{class:"text-none ms-4 text-white",variant:"flat",size:"small",color:"red-darken-1",onClick:t[1]||(t[1]=e=>r.fdelete(r.idx)),"prepend-icon":"mdi-delete-forever-outline",density:"compact"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Eliminar ")])),_:1})],64)}var K={props:{fmodify:{type:Function,default(){return null}},fdelete:{type:Function,default(){return null}},idx:{type:String,default:"-1"}},methods:{}};const N=(0,T.Z)(K,[["render",$]]);var Q=N,J={components:{BtnUpdateDel:Q},props:{items:{type:Array,default:[]},titles:{type:Array,default:[]},fmodify:{type:Function,default(){return null}},fdelete:{type:Function,default(){return null}}},data:()=>({datos:[],idCol:[]}),methods:{changeObjToArray(){this.datos=this.items.map(((e,t)=>{let r=Object.values(e);return this.idCol[t]=r.shift(),r}))},uuid(){return G()}},mounted(){this.changeObjToArray()}};const X=(0,T.Z)(J,[["render",Y]]);var ee=X,te=r(4075),re=r(4108),ae=r(3446),oe=r(6191),ne=r(4580);const le=(0,a._)("h3",null,"Agregar nueva Seccion al formulario (BotonPopup)",-1);function se(e,t,r,d,c,p){const f=(0,a.up)("btn-dialog"),m=(0,a.up)("frm-question");return(0,a.wg)(),(0,a.j4)(l._,{class:"mx-auto text-body-1","max-width":"99%",density:"compact",elevation:"1"},{default:(0,a.w5)((()=>[le,(0,a.Wm)(te.J),(0,a.Wm)(s.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(re.V,{class:"mb-4",variant:"inset"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.sections,((e,t)=>((0,a.wg)(),(0,a.j4)(ae.M,{key:t},{default:(0,a.w5)((()=>[(0,a.Wm)(oe.V,{"expand-icon":"mdi-plus","collapse-icon":"mdi-minus",color:"blue-darken-1"},{default:(0,a.w5)((()=>[(0,a.Wm)(i.o,{"no-gutters":""},{default:(0,a.w5)((()=>[(0,a.Wm)(u.D,{cols:"5",class:"d-flex justify-start"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.name_section),1)])),_:2},1024),(0,a.Wm)(u.D,{cols:"6",class:"d-flex justify-end"},{default:(0,a.w5)((()=>[(0,a.Wm)(n.T,{density:"compact",size:"small",class:"text-subtitle-2"},{default:(0,a.w5)((()=>[(0,a.Uk)("ki cloc")])),_:1})])),_:1}),(0,a.Wm)(u.D,{cols:"1"},{default:(0,a.w5)((()=>[(0,a.Uk)(".")])),_:1})])),_:2},1024)])),_:2},1024),(0,a.Wm)(ne.H,null,{default:(0,a.w5)((()=>[(0,a._)("h3",null,[(0,a.Uk)("Agregar Nueva pregunta "),(0,a.Wm)(f,{type:"P"})]),(0,a.Wm)(m,{questions:e.questions,type:e.type},null,8,["questions","type"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})}var ie=r(6596),ue=r(9234),de=r(7471),ce=r(5030);function pe(e,t,r,i,u,d){const c=(0,a.up)("frm-answer");return(0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.questions,((e,t)=>((0,a.wg)(),(0,a.j4)(l._,{class:"mx-auto",density:"compact"},{default:(0,a.w5)((()=>[(0,a.Wm)(ie._,{class:"text-body-1"},{default:(0,a.w5)((()=>[(0,a.Wm)(de.i,{density:"compact",rounded:""},{default:(0,a.w5)((()=>[(0,a.Wm)(ce.q,{class:"text-subtitle-2"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.question),1)])),_:2},1024),(0,a.Wm)(te.J,{inset:"",vertical:""}),(0,a.Wm)(ue.C),(0,a.Wm)(n.T,{color:"primary",dark:"",class:"text-subtitle-2"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Editar ")])),_:1}),(0,a.Uk)(" | "),(0,a.Wm)(n.T,{color:"primary",dark:"",class:"text-subtitle-2"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Eliminar ")])),_:1})])),_:2},1024)])),_:2},1024),(0,a.Wm)(s.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,{type:e.type,answers:e.answers},null,8,["type","answers"])])),_:2},1024)])),_:2},1024)))),256)}function fe(e,t,r,o,n,i){const u=(0,a.up)("radio-btn-box"),d=(0,a.up)("check-box"),c=(0,a.up)("textfield-box"),p=(0,a.up)("grid-box");return(0,a.wg)(),(0,a.j4)(l._,{class:"text-body-1",density:"compact"},{default:(0,a.w5)((()=>[(0,a.Wm)(s.Z,null,{default:(0,a.w5)((()=>[0==r.type?((0,a.wg)(),(0,a.j4)(u,{key:0,answers:r.answers},null,8,["answers"])):(0,a.kq)("",!0),1==r.type?((0,a.wg)(),(0,a.j4)(d,{key:1,answers:r.answers},null,8,["answers"])):(0,a.kq)("",!0),2==r.type?((0,a.wg)(),(0,a.j4)(c,{key:2,answers:r.answers},null,8,["answers"])):(0,a.kq)("",!0),3==r.type?((0,a.wg)(),(0,a.j4)(p,{key:3,answers:r.answers},null,8,["answers"])):(0,a.kq)("",!0)])),_:1})])),_:1})}var me=r(6233);const ye=(0,x.ev)()({name:"VRadio",props:{...(0,me.$9)({falseIcon:"$radioOff",trueIcon:"$radioOn"})},setup(e,t){let{slots:r}=t;return(0,h.L)((()=>(0,a.Wm)(me.g5,(0,a.dG)(e,{class:"v-radio",type:"radio"}),r))),{}}});var ve=r(8302),we=r(835),ge=r(7302),be=r(4960),xe=r(8717),he=r(7514);const _e=(0,x.ev)()({name:"VRadioGroup",inheritAttrs:!1,props:{height:{type:[Number,String],default:"auto"},...(0,ve.co)(),...(0,E.CE)((0,we.Z1)(),["multiple"]),trueIcon:{type:be.lE,default:"$radioOn"},falseIcon:{type:be.lE,default:"$radioOff"},type:{type:String,default:"radio"}},emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:r,slots:o}=t;const n=(0,he.sq)(),l=(0,a.Fl)((()=>e.id||`radio-group-${n}`)),s=(0,xe.z)(e,"modelValue");return(0,h.L)((()=>{const[t,n]=(0,E.An)(r),[i,u]=(0,ve.PE)(e),[d,c]=me.g5.filterProps(e),p=o.label?o.label({label:e.label,props:{for:l.value}}):e.label;return(0,a.Wm)(ve.q8,(0,a.dG)({class:"v-radio-group"},t,i,{modelValue:s.value,"onUpdate:modelValue":e=>s.value=e,id:l.value}),{...o,default:t=>{let{id:r,messagesId:l,isDisabled:i,isReadonly:u}=t;return(0,a.Wm)(a.HY,null,[p&&(0,a.Wm)(ge.J,{id:r.value},{default:()=>[p]}),(0,a.Wm)(we.Ee,(0,a.dG)(d,{id:r.value,"aria-describedby":l.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:i.value,readonly:u.value,"aria-labelledby":p?r.value:void 0,multiple:!1},n,{modelValue:s.value,"onUpdate:modelValue":e=>s.value=e}),o)])}})})),{}}});function We(e,t,r,n,i,u){return(0,a.wg)(),(0,a.j4)(l._,{class:"mx-auto text-body-1",density:"compact"},{default:(0,a.w5)((()=>[(0,a.Wm)(s.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(_e,{inline:"",modelValue:e.dataModel,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dataModel=t)},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.answers,((e,t)=>((0,a.wg)(),(0,a.j4)(ye,{label:e.answer,color:"orange-darken-3",value:e.answer},null,8,["label","value"])))),256))])),_:1},8,["modelValue"]),(0,a.Uk)(" "+(0,o.zw)(e.dataModel),1)])),_:1})])),_:1})}var ke={props:{answers:{type:Array,default:[]}},data:()=>({dataModel:""})};const Ae=(0,T.Z)(ke,[["render",We]]);var Se=Ae,Ce=r(1959),Ve=r(8969);const Ue=(0,x.ev)()({name:"VCheckbox",inheritAttrs:!1,props:{...(0,ve.co)(),...(0,Ce.w)()},emits:{"update:focused":e=>!0},setup(e,t){let{attrs:r,slots:o}=t;const{isFocused:n,focus:l,blur:s}=(0,Ve.K)(e),i=(0,he.sq)(),u=(0,a.Fl)((()=>e.id||`checkbox-${i}`));return(0,h.L)((()=>{const[t,i]=(0,E.An)(r),[d,c]=(0,ve.PE)(e),[p,f]=Ce.p.filterProps(e);return(0,a.Wm)(ve.q8,(0,a.dG)({class:"v-checkbox"},t,d,{id:u.value,focused:n.value}),{...o,default:e=>{let{id:t,messagesId:r,isDisabled:n,isReadonly:u}=e;return(0,a.Wm)(Ce.p,(0,a.dG)(p,{id:t.value,"aria-describedby":r.value,disabled:n.value,readonly:u.value},i,{onFocus:l,onBlur:s}),o)}})})),{}}});var De=r(3369);function Te(e,t,r,o,n,l){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(De.K,{fluid:""},{default:(0,a.w5)((()=>[(0,a.Wm)(i.o,{"no-gutters":""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.answers,((r,o)=>((0,a.wg)(),(0,a.j4)(u.D,{cols:"12",sm:"4",md:"4"},{default:(0,a.w5)((()=>[(0,a.Wm)(Ue,{modelValue:e.dataModel,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dataModel=t),label:r.answer,color:"orange-darken-3",value:r.answer,"hide-details":""},null,8,["modelValue","label","value"])])),_:2},1024)))),256))])),_:1})])),_:1})])}var Ie={props:{answers:{type:Array,default:[]}},data:()=>({dataModel:[]})};const Fe=(0,T.Z)(Ie,[["render",Te]]);var qe=Fe,Ee=r(4162),je=r(5869);function Pe(e,t,r,n,l,s){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(Ee.t,{class:"mx-auto"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.answers,((r,o)=>((0,a.wg)(),(0,a.j4)(je.h,{modelValue:e.dataModel,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dataModel=t),rules:[e=>!!e||"El valor del campo es requerido"],clearable:"",label:"Respuesta",type:"input",hint:"Digite su Respuesta",variant:"outlined",density:"compact",class:"text-subtitle-2"},null,8,["modelValue","rules"])))),256))])),_:1}),(0,a.Uk)(" "+(0,o.zw)(e.dataModel),1)],64)}var Ye={props:{answers:{type:Array,default:[]}},data:()=>({dataModel:""})};const ze=(0,T.Z)(Ye,[["render",Pe]]);var Be=ze;function Oe(e,t,r,n,l,s){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(De.K,{class:"bg-grey-lighten-2"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.answers,((e,t)=>((0,a.wg)(),(0,a.j4)(i.o,{"no-gutters":""},{default:(0,a.w5)((()=>[(0,a.Wm)(u.D,null,{default:(0,a.w5)((()=>[(0,a.Wm)(k,{class:"pa-2 ma-2"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.question),1)])),_:2},1024)])),_:2},1024),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.answers,((e,r)=>((0,a.wg)(),(0,a.j4)(u.D,null,{default:(0,a.w5)((()=>[(0,a.Wm)(k,{class:"pa-2 ma-2"},{default:(0,a.w5)((()=>[(0,a.Wm)(je.h,{modelValue:n.dataModel[t][r],"onUpdate:modelValue":e=>n.dataModel[t][r]=e,modelModifiers:{number:!0},rules:[e=>!!e||"El valor del campo es requerido"],clearable:"",label:e.answer,type:"number",ref_for:!0,ref:"input",hint:"Digite su Respuesta Solo Numeros",variant:"outlined",density:"compact",class:"text-subtitle-2"},null,8,["modelValue","onUpdate:modelValue","rules","label"])])),_:2},1024)])),_:2},1024)))),256))])),_:2},1024)))),256))])),_:1}),(0,a.Uk)(" "+(0,o.zw)(n.dataModel),1)],64)}var He={props:{answers:{type:Array,default:[]}},setup(e){const t=e.answers.map(((e,t)=>e.answers.map(((e,t)=>0)))),r=(0,_.qj)({...t});return{dataModel:r}}};const Re=(0,T.Z)(He,[["render",Oe]]);var Me=Re,Ze={components:{RadioBtnBox:Se,CheckBox:qe,TextfieldBox:Be,GridBox:Me},props:{type:{type:Number,default:0},answers:{type:Array,default:[]}},data:()=>({ex4:["warning"]})};const Le=(0,T.Z)(Ze,[["render",fe]]);var Ge=Le,$e={components:{FrmAnswer:Ge},props:{questions:{type:Array,default:[]},type:{type:Number,default:0}}};const Ke=(0,T.Z)($e,[["render",pe]]);var Ne=Ke,Qe=r(2583),Je=r(836),Xe=r(8551),et=r(5975),tt=r(3185),rt=r(2385);const at=(0,x.ev)()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...(0,Xe.B)({origin:"center center",scrollStrategy:"block",transition:{component:Qe.v},zIndex:2400})},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:r}=t;const o=(0,xe.z)(e,"modelValue"),{scopeId:n}=(0,et.a)(),l=(0,_.iH)();function s(e){const t=e.relatedTarget,r=e.target;if(t!==r&&l.value?.contentEl&&l.value?.globalTop&&![document,l.value.contentEl].includes(r)&&!l.value.contentEl.contains(r)){const e=[...l.value.contentEl.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter((e=>!e.hasAttribute("disabled")&&!e.matches('[tabindex="-1"]')));if(!e.length)return;const r=e[0],a=e[e.length-1];t===r?a.focus():r.focus()}}rt.BR&&(0,a.YP)((()=>o.value&&e.retainFocus),(e=>{e?document.addEventListener("focusin",s):document.removeEventListener("focusin",s)}),{immediate:!0}),(0,a.YP)(o,(async e=>{await(0,a.Y3)(),e?l.value.contentEl?.focus({preventScroll:!0}):l.value.activatorEl?.focus({preventScroll:!0})}));const i=(0,a.Fl)((()=>(0,a.dG)({"aria-haspopup":"dialog","aria-expanded":String(o.value)},e.activatorProps)));return(0,h.L)((()=>{const[t]=Xe.y.filterProps(e);return(0,a.Wm)(Xe.y,(0,a.dG)({ref:l,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable}]},t,{modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,"aria-role":"dialog","aria-modal":"true",activatorProps:i.value},n),{activator:r.activator,default:function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return(0,a.Wm)(Je.z,{root:!0},{default:()=>[r.default?.(...t)]})}})})),(0,tt.F)({},l)}});var ot=r(3289);function nt(e,t,r,o,s,i){const u=(0,a.up)("question-answer-form");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(n.T,{class:"text-none ms-4 text-white",dark:"",onClick:t[0]||(t[0]=t=>e.dialog=!0),variant:"flat",size:"small",color:"success","prepend-icon":"mdi-newspaper-variant-multiple-outline",density:"compact"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Nuevo ")])),_:1}),(0,a.Wm)(at,{modelValue:e.dialog,"onUpdate:modelValue":t[2]||(t[2]=t=>e.dialog=t),scrollable:!0,persistent:"",fullscreen:!1,scrim:!1},{default:(0,a.w5)((()=>[(0,a.Wm)(l._,null,{default:(0,a.w5)((()=>[(0,a.Wm)(de.i,{dark:"",color:"secondary"},{default:(0,a.w5)((()=>[(0,a.Wm)(ce.q,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Settings")])),_:1}),(0,a.Wm)(ue.C),(0,a.Wm)(n.T,{icon:"",dark:"",onClick:t[1]||(t[1]=t=>e.dialog=!1)},{default:(0,a.w5)((()=>[(0,a.Wm)(ot.t,null,{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-close")])),_:1})])),_:1})])),_:1}),"P"==r.type?((0,a.wg)(),(0,a.j4)(u,{key:0})):(0,a.kq)("",!0),(0,a.Wm)(te.J)])),_:1})])),_:1},8,["modelValue"])],64)}var lt=r(2450),st={components:{QuestionAnswerForm:lt.Z},props:{type:{type:String,default:"P"}},data:()=>({dialog:!1})};const it=(0,T.Z)(st,[["render",nt]]);var ut=it,dt={components:{FrmQuestion:Ne,BtnDialog:ut},props:{sections:{type:Array,default:[]}},mounted(){}};const ct=(0,T.Z)(dt,[["render",se]]);var pt=ct;const ft=()=>({frm_name:"Fromulario uno",frm_cod:"12345",sections:[{name_section:"datos del piolin",questions:[{question:"porque nacen los pajaritos",order:0,type:0,answers:[{answer:"por milagro",order:1,type:0},{answer:"Por caida del arbol",order:2,type:0},{answer:"por movida del aire",order:3,type:0},{answer:"ninguno",order:4,type:0}]},{question:"describir el alamo",order:0,type:2,answers:[{answer:"Open",order:1,type:2}]},{question:"Seleccione su aficiones",order:0,type:1,answers:[{answer:"saltar",order:1,type:1},{answer:"arrastrarse",order:2,type:1},{answer:"llorar",order:3,type:1},{answer:"cantar",order:4,type:1},{answer:"sexo",order:5,type:1}]},{question:"La segunda de opcion Simple",order:0,type:0,answers:[{answer:"por una",order:1,type:0},{answer:"Por Dos",order:2,type:0},{answer:"por Tres",order:3,type:0},{answer:"ninguno",order:4,type:0}]},{question:"Por favor llene la matriz nioja",order:0,type:3,answers:[{question:"f1",order:1,type:3,answers:[{answer:"col1",order:1,type:3},{answer:"col2",order:2,type:3}]},{question:"f2",order:2,type:3,answers:[{answer:"col1",order:1,type:3},{answer:"col2",order:2,type:3}]},{question:"f3",order:3,type:3,answers:[{answer:"col1",order:1,type:3},{answer:"col2",order:2,type:3}]},{question:"f4",order:4,type:3,answers:[{answer:"col1",order:1,type:3},{answer:"col2",order:2,type:3}]},{question:"f5",order:5,type:3,answers:[{answer:"col1",order:1,type:3},{answer:"col2",order:2,type:3}]}]}]},{name_section:"Seccion del Grid",questions:[{question:"Preguntas por Grid",order:0,type:3,answers:[{question:"f1",order:1,type:3,answers:[{answer:"col1",order:1,type:3},{answer:"col2",order:2,type:3}]},{question:"f2",order:2,type:3,answers:[{answer:"col1",order:1,type:3},{answer:"col2",order:2,type:3}]},{question:"f3",order:3,type:3,answers:[{answer:"col1",order:1,type:3},{answer:"col2",order:2,type:3}]},{question:"f4",order:4,type:3,answers:[{answer:"col1",order:1,type:3},{answer:"col2",order:2,type:3}]},{question:"f5",order:5,type:3,answers:[{answer:"col1",order:1,type:3},{answer:"col2",order:2,type:3}]}]}]},{name_section:"Seccion groovy",questions:[{question:"Por que kaliman",order:0,type:0,answers:[{answer:"por milagro",order:1,type:0},{answer:"Por caida del arbol",order:2,type:0},{answer:"por movida del aire",order:3,type:0},{answer:"ninguno",order:4,type:0}]},{question:"Por que gil",order:0,type:2,answers:[{answer:"Open",order:1,type:2}]}]}]});var mt={components:{ListBox:F,TableDataUpDel:ee,FrmSection:pt},data:()=>({secSelected:{value:0,title:"seccion 000"},secItems:[{value:0,title:"seccion 000"},{value:1,title:"seccion 001"},{value:2,title:"seccion 002"},{value:3,title:"seccion 003"}],frmSelected:{value:0,title:"formu 000"},frmItems:[{value:0,title:"formu 000"},{value:1,title:"formu 001"},{value:2,title:"formu 002"},{value:3,title:"formu 003"}],items:[{id:100,name:"Frozen Yogurt",calories:159},{id:101,name:"Ice cream sandwich",calories:237},{id:102,name:"Eclair",calories:262},{id:103,name:"Cupcake",calories:305}],datosFrm:[]}),methods:{onChangeSec(e){this.secSelected=e},onChangeFrm(e){this.frmSelected=e},modifySecFrm(e){alert("idx para moduifcoa:"+e)},deleteSecFrm(e){alert("idx para eliminar:"+e)},initData(){this.datosFrm=ft(),console.log(this.datosFrm)}},mounted(){this.initData()}};const yt=(0,T.Z)(mt,[["render",A]]);var vt=yt},3446:function(e,t,r){"use strict";r.d(t,{M:function(){return y}});r(7658);var a=r(3396),o=r(6191),n=r(4108),l=r(4580),s=r(2465),i=r(1970),u=r(1136),d=r(4231),c=r(1138),p=r(2370),f=r(320),m=r(9888);const y=(0,f.ev)()({name:"VExpansionPanel",props:{title:String,text:String,bgColor:String,...(0,s.c)(),...(0,i.YQ)(),...(0,u.H)(),...(0,d.I)(),...(0,c.Q)(),...(0,o.w)()},emits:{"group:selected":e=>!0},setup(e,t){let{slots:r}=t;const u=(0,i.Yt)(e,n.j),{backgroundColorClasses:c,backgroundColorStyles:f}=(0,p.Y5)(e,"bgColor"),{elevationClasses:y}=(0,s.Y)(e),{roundedClasses:v}=(0,d.b)(e),w=(0,a.Fl)((()=>u?.disabled.value||e.disabled)),g=(0,a.Fl)((()=>u.group.items.value.reduce(((e,t,r)=>(u.group.selected.value.includes(t.id)&&e.push(r),e)),[]))),b=(0,a.Fl)((()=>{const e=u.group.items.value.findIndex((e=>e.id===u.id));return!u.isSelected.value&&g.value.some((t=>t-e===1))})),x=(0,a.Fl)((()=>{const e=u.group.items.value.findIndex((e=>e.id===u.id));return!u.isSelected.value&&g.value.some((t=>t-e===-1))}));return(0,a.JJ)(n.j,u),(0,m.L)((()=>{const t=!(!r.text&&!e.text),n=!(!r.title&&!e.title);return(0,a.Wm)(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":u.isSelected.value,"v-expansion-panel--before-active":b.value,"v-expansion-panel--after-active":x.value,"v-expansion-panel--disabled":w.value},v.value,c.value],style:f.value,"aria-expanded":u.isSelected.value},{default:()=>[(0,a.Wm)("div",{class:["v-expansion-panel__shadow",...y.value]},null),n&&(0,a.Wm)(o.V,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[r.title?r.title():e.title]}),t&&(0,a.Wm)(l.H,{key:"text",eager:e.eager},{default:()=>[r.text?r.text():e.text]}),r.default?.()]})})),{}}})},4580:function(e,t,r){"use strict";r.d(t,{H:function(){return d}});var a=r(3396),o=r(9242),n=r(8952),l=r(4108),s=r(1136),i=r(320),u=r(9888);const d=(0,i.ev)()({name:"VExpansionPanelText",props:{...(0,s.H)()},setup(e,t){let{slots:r}=t;const i=(0,a.f3)(l.j);if(!i)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:d,onAfterLeave:c}=(0,s.l)(e,i.isSelected);return(0,u.L)((()=>(0,a.Wm)(n.Fx,{onAfterLeave:c},{default:()=>[(0,a.wy)((0,a.Wm)("div",{class:"v-expansion-panel-text"},[r.default&&d.value&&(0,a.Wm)("div",{class:"v-expansion-panel-text__wrapper"},[r.default?.()])]),[[o.F8,i.isSelected.value]])]}))),{}}})},6191:function(e,t,r){"use strict";r.d(t,{V:function(){return f},w:function(){return p}});var a=r(3396),o=r(4108),n=r(3289),l=r(3824),s=r(4960),i=r(2370),u=r(3766),d=r(320),c=r(9888);const p=(0,u.U)({color:String,expandIcon:{type:s.lE,default:"$expand"},collapseIcon:{type:s.lE,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean},"v-expansion-panel-title"),f=(0,d.ev)()({name:"VExpansionPanelTitle",directives:{Ripple:l.H},props:{...p()},setup(e,t){let{slots:r}=t;const l=(0,a.f3)(o.j);if(!l)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:s,backgroundColorStyles:u}=(0,i.Y5)(e,"color"),d=(0,a.Fl)((()=>({collapseIcon:e.collapseIcon,disabled:l.disabled.value,expanded:l.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})));return(0,c.L)((()=>(0,a.wy)((0,a.Wm)("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":l.isSelected.value},s.value],style:u.value,type:"button",tabindex:l.disabled.value?-1:void 0,disabled:l.disabled.value,"aria-expanded":l.isSelected.value,onClick:e.readonly?void 0:l.toggle},[(0,a.Wm)("span",{class:"v-expansion-panel-title__overlay"},null),r.default?.(d.value),!e.hideActions&&(0,a.Wm)("span",{class:"v-expansion-panel-title__icon"},[r.actions?r.actions(d.value):(0,a.Wm)(n.t,{icon:l.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[(0,a.Q2)("ripple"),e.ripple]]))),{}}})},4108:function(e,t,r){"use strict";r.d(t,{j:function(){return c},V:function(){return f}});var a=r(3396),o=r(1970),n=r(1138),l=r(7041),s=r(8434),i=r(4870),u=r(320),d=r(9888);const c=Symbol.for("vuetify:v-expansion-panel"),p=["default","accordion","inset","popout"],f=(0,u.ev)()({name:"VExpansionPanels",props:{color:String,variant:{type:String,default:"default",validator:e=>p.includes(e)},readonly:Boolean,...(0,o.k4)(),...(0,n.Q)(),...(0,l.x$)()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:r}=t;(0,o._v)(e,c);const{themeClasses:n}=(0,l.ER)(e),u=(0,a.Fl)((()=>e.variant&&`v-expansion-panels--variant-${e.variant}`));return(0,s.AF)({VExpansionPanel:{color:(0,i.Vh)(e,"color")},VExpansionPanelTitle:{readonly:(0,i.Vh)(e,"readonly")}}),(0,d.L)((()=>(0,a.Wm)(e.tag,{class:["v-expansion-panels",n.value,u.value]},r))),{}}})}}]);
//# sourceMappingURL=981.40704414.js.map