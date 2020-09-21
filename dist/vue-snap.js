var VueSnap=function(t){"use strict";const e=t=>.5*(1-Math.cos(Math.PI*t)),n={_elementScroll:void 0,get elementScroll(){return this._elementScroll||(this._elementScroll=HTMLElement.prototype.scroll||HTMLElement.prototype.scrollTo||function(t,e){this.scrollLeft=t,this.scrollTop=e})},_elementScrollIntoView:void 0,get elementScrollIntoView(){return this._elementScrollIntoView||(this._elementScrollIntoView=HTMLElement.prototype.scrollIntoView)},_windowScroll:void 0,get windowScroll(){return this._windowScroll||(this._windowScroll=window.scroll||window.scrollTo)}},r=()=>{var t,e,n;return null!==(n=null===(e=null===(t=window.performance)||void 0===t?void 0:t.now)||void 0===e?void 0:e.call(t))&&void 0!==n?n:Date.now()},o=t=>{const n=(r()-t.timeStamp)/(t.duration||500);if(n>1)return t.method(t.targetX,t.targetY),void t.callback();const i=(t.timingFunc||e)(n),c=t.startX+(t.targetX-t.startX)*i,u=t.startY+(t.targetY-t.startY)*i;t.method(c,u),t.rafId=requestAnimationFrame(()=>{o(t)})},i=t=>Number.isNaN(t)||t===1/0||t===-1/0?0:t,c=(t,e)=>{const c=i(e.left||0)+t.scrollLeft,u=i(e.top||0)+t.scrollTop;return((t,e)=>{const c=n.elementScroll.bind(t);if(void 0===e.left&&void 0===e.top)return;const u=t.scrollLeft,a=t.scrollTop,s=i(e.left||u),l=i(e.top||a);if("smooth"!==e.behavior)return c(s,l);const f=()=>{window.removeEventListener("wheel",p),window.removeEventListener("touchmove",p)},d={timeStamp:r(),duration:e.duration,startX:u,startY:a,targetX:s,targetY:l,rafId:0,method:c,timingFunc:e.timingFunc,callback:f},p=()=>{cancelAnimationFrame(d.rafId),f()};window.addEventListener("wheel",p,{passive:!0,once:!0}),window.addEventListener("touchmove",p,{passive:!0,once:!0}),o(d)})(t,{...e,left:c,top:u})};var u=function(t,e,n){return Math.abs(t-e)<=n},a="undefined"==typeof window,s=!a;a||"scrollBehavior"in document.documentElement.style||c();var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function f(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}var d=function(t){return t&&t.Math==Math&&t},p=d("object"==typeof globalThis&&globalThis)||d("object"==typeof window&&window)||d("object"==typeof self&&self)||d("object"==typeof l&&l)||Function("return this")(),h=function(t){try{return!!t()}catch(t){return!0}},v=!h((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),m={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,b={f:y&&!m.call({1:2},1)?function(t){var e=y(this,t);return!!e&&e.enumerable}:m},g=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},w={}.toString,S=function(t){return w.call(t).slice(8,-1)},O="".split,_=h((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==S(t)?O.call(t,""):Object(t)}:Object,j=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},W=function(t){return _(j(t))},E=function(t){return"object"==typeof t?null!==t:"function"==typeof t},P=function(t,e){if(!E(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!E(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!E(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!E(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},T={}.hasOwnProperty,I=function(t,e){return T.call(t,e)},L=p.document,x=E(L)&&E(L.createElement),A=function(t){return x?L.createElement(t):{}},C=!v&&!h((function(){return 7!=Object.defineProperty(A("div"),"a",{get:function(){return 7}}).a})),$=Object.getOwnPropertyDescriptor,F={f:v?$:function(t,e){if(t=W(t),e=P(e,!0),C)try{return $(t,e)}catch(t){}if(I(t,e))return g(!b.f.call(t,e),t[e])}},M=function(t){if(!E(t))throw TypeError(String(t)+" is not an object");return t},R=Object.defineProperty,N={f:v?R:function(t,e,n){if(M(t),e=P(e,!0),M(n),C)try{return R(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},B=v?function(t,e,n){return N.f(t,e,g(1,n))}:function(t,e,n){return t[e]=n,t},V=function(t,e){try{B(p,t,e)}catch(n){p[t]=e}return e},k="__core-js_shared__",z=p[k]||V(k,{}),X=Function.toString;"function"!=typeof z.inspectSource&&(z.inspectSource=function(t){return X.call(t)});var D,Y,q,U=z.inspectSource,H=p.WeakMap,G="function"==typeof H&&/native code/.test(U(H)),K=f((function(t){(t.exports=function(t,e){return z[t]||(z[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),J=0,Q=Math.random(),Z=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++J+Q).toString(36)},tt=K("keys"),et=function(t){return tt[t]||(tt[t]=Z(t))},nt={},rt=p.WeakMap;if(G){var ot=new rt,it=ot.get,ct=ot.has,ut=ot.set;D=function(t,e){return ut.call(ot,t,e),e},Y=function(t){return it.call(ot,t)||{}},q=function(t){return ct.call(ot,t)}}else{var at=et("state");nt[at]=!0,D=function(t,e){return B(t,at,e),e},Y=function(t){return I(t,at)?t[at]:{}},q=function(t){return I(t,at)}}var st,lt={set:D,get:Y,has:q,enforce:function(t){return q(t)?Y(t):D(t,{})},getterFor:function(t){return function(e){var n;if(!E(e)||(n=Y(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},ft=f((function(t){var e=lt.get,n=lt.enforce,r=String(String).split("String");(t.exports=function(t,e,o,i){var c=!!i&&!!i.unsafe,u=!!i&&!!i.enumerable,a=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof e||I(o,"name")||B(o,"name",e),n(o).source=r.join("string"==typeof e?e:"")),t!==p?(c?!a&&t[e]&&(u=!0):delete t[e],u?t[e]=o:B(t,e,o)):u?t[e]=o:V(e,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||U(this)}))})),dt=p,pt=function(t){return"function"==typeof t?t:void 0},ht=function(t,e){return arguments.length<2?pt(dt[t])||pt(p[t]):dt[t]&&dt[t][e]||p[t]&&p[t][e]},vt=Math.ceil,mt=Math.floor,yt=function(t){return isNaN(t=+t)?0:(t>0?mt:vt)(t)},bt=Math.min,gt=function(t){return t>0?bt(yt(t),9007199254740991):0},wt=Math.max,St=Math.min,Ot=function(t){return function(e,n,r){var o,i=W(e),c=gt(i.length),u=function(t,e){var n=yt(t);return n<0?wt(n+e,0):St(n,e)}(r,c);if(t&&n!=n){for(;c>u;)if((o=i[u++])!=o)return!0}else for(;c>u;u++)if((t||u in i)&&i[u]===n)return t||u||0;return!t&&-1}},_t={includes:Ot(!0),indexOf:Ot(!1)}.indexOf,jt=function(t,e){var n,r=W(t),o=0,i=[];for(n in r)!I(nt,n)&&I(r,n)&&i.push(n);for(;e.length>o;)I(r,n=e[o++])&&(~_t(i,n)||i.push(n));return i},Wt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Et=Wt.concat("length","prototype"),Pt={f:Object.getOwnPropertyNames||function(t){return jt(t,Et)}},Tt={f:Object.getOwnPropertySymbols},It=ht("Reflect","ownKeys")||function(t){var e=Pt.f(M(t)),n=Tt.f;return n?e.concat(n(t)):e},Lt=function(t,e){for(var n=It(e),r=N.f,o=F.f,i=0;i<n.length;i++){var c=n[i];I(t,c)||r(t,c,o(e,c))}},xt=/#|\.prototype\./,At=function(t,e){var n=$t[Ct(t)];return n==Mt||n!=Ft&&("function"==typeof e?h(e):!!e)},Ct=At.normalize=function(t){return String(t).replace(xt,".").toLowerCase()},$t=At.data={},Ft=At.NATIVE="N",Mt=At.POLYFILL="P",Rt=At,Nt=F.f,Bt=function(t,e){var n,r,o,i,c,u=t.target,a=t.global,s=t.stat;if(n=a?p:s?p[u]||V(u,{}):(p[u]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(c=Nt(n,r))&&c.value:n[r],!Rt(a?r:u+(s?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Lt(i,o)}(t.sham||o&&o.sham)&&B(i,"sham",!0),ft(n,r,i,t)}},Vt=function(t,e,n){if(function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function")}(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},kt=Array.isArray||function(t){return"Array"==S(t)},zt=!!Object.getOwnPropertySymbols&&!h((function(){return!String(Symbol())})),Xt=zt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Dt=K("wks"),Yt=p.Symbol,qt=Xt?Yt:Yt&&Yt.withoutSetter||Z,Ut=function(t){return I(Dt,t)||(zt&&I(Yt,t)?Dt[t]=Yt[t]:Dt[t]=qt("Symbol."+t)),Dt[t]},Ht=Ut("species"),Gt=function(t,e){var n;return kt(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!kt(n.prototype)?E(n)&&null===(n=n[Ht])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},Kt=[].push,Jt=function(t){var e=1==t,n=2==t,r=3==t,o=4==t,i=6==t,c=5==t||i;return function(u,a,s,l){for(var f,d,p=Object(j(u)),h=_(p),v=Vt(a,s,3),m=gt(h.length),y=0,b=l||Gt,g=e?b(u,m):n?b(u,0):void 0;m>y;y++)if((c||y in h)&&(d=v(f=h[y],y,p),t))if(e)g[y]=d;else if(d)switch(t){case 3:return!0;case 5:return f;case 6:return y;case 2:Kt.call(g,f)}else if(o)return!1;return i?-1:r||o?o:g}},Qt={forEach:Jt(0),map:Jt(1),filter:Jt(2),some:Jt(3),every:Jt(4),find:Jt(5),findIndex:Jt(6)},Zt=Object.keys||function(t){return jt(t,Wt)},te=v?Object.defineProperties:function(t,e){M(t);for(var n,r=Zt(e),o=r.length,i=0;o>i;)N.f(t,n=r[i++],e[n]);return t},ee=ht("document","documentElement"),ne=et("IE_PROTO"),re=function(){},oe=function(t){return"<script>"+t+"</"+"script>"},ie=function(){try{st=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;ie=st?function(t){t.write(oe("")),t.close();var e=t.parentWindow.Object;return t=null,e}(st):((e=A("iframe")).style.display="none",ee.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(oe("document.F=Object")),t.close(),t.F);for(var n=Wt.length;n--;)delete ie.prototype[Wt[n]];return ie()};nt[ne]=!0;var ce=Object.create||function(t,e){var n;return null!==t?(re.prototype=M(t),n=new re,re.prototype=null,n[ne]=t):n=ie(),void 0===e?n:te(n,e)},ue=Ut("unscopables"),ae=Array.prototype;null==ae[ue]&&N.f(ae,ue,{configurable:!0,value:ce(null)});var se,le=Object.defineProperty,fe={},de=function(t){throw t},pe=function(t,e){if(I(fe,t))return fe[t];e||(e={});var n=[][t],r=!!I(e,"ACCESSORS")&&e.ACCESSORS,o=I(e,0)?e[0]:de,i=I(e,1)?e[1]:void 0;return fe[t]=!!n&&!h((function(){if(r&&!v)return!0;var t={length:-1};r?le(t,1,{enumerable:!0,get:de}):t[1]=1,n.call(t,o,i)}))},he=Qt.findIndex,ve="findIndex",me=!0,ye=pe(ve);ve in[]&&Array(1).findIndex((function(){me=!1})),Bt({target:"Array",proto:!0,forced:me||!ye},{findIndex:function(t){return he(this,t,arguments.length>1?arguments[1]:void 0)}}),se=ve,ae[ue][se]=!0;var be,ge,we=ht("navigator","userAgent")||"",Se=p.process,Oe=Se&&Se.versions,_e=Oe&&Oe.v8;_e?ge=(be=_e.split("."))[0]+be[1]:we&&(!(be=we.match(/Edge\/(\d+)/))||be[1]>=74)&&(be=we.match(/Chrome\/(\d+)/))&&(ge=be[1]);var je,We=ge&&+ge,Ee=Ut("species"),Pe=Qt.map,Te=(je="map",We>=51||!h((function(){var t=[];return(t.constructor={})[Ee]=function(){return{foo:1}},1!==t[je](Boolean).foo}))),Ie=pe("map");function Le(t){return function(t){if(Array.isArray(t))return xe(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return xe(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xe(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function xe(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}Bt({target:"Array",proto:!0,forced:!Te||!Ie},{map:function(t){return Pe(this,t,arguments.length>1?arguments[1]:void 0)}});var Ae=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},Ce="object"==typeof l&&l&&l.Object===Object&&l,$e="object"==typeof self&&self&&self.Object===Object&&self,Fe=Ce||$e||Function("return this")(),Me=function(){return Fe.Date.now()},Re=Fe.Symbol,Ne=Object.prototype,Be=Ne.hasOwnProperty,Ve=Ne.toString,ke=Re?Re.toStringTag:void 0;var ze=function(t){var e=Be.call(t,ke),n=t[ke];try{t[ke]=void 0;var r=!0}catch(t){}var o=Ve.call(t);return r&&(e?t[ke]=n:delete t[ke]),o},Xe=Object.prototype.toString;var De=function(t){return Xe.call(t)},Ye=Re?Re.toStringTag:void 0;var qe=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Ye&&Ye in Object(t)?ze(t):De(t)};var Ue=function(t){return null!=t&&"object"==typeof t};var He=function(t){return"symbol"==typeof t||Ue(t)&&"[object Symbol]"==qe(t)},Ge=/^\s+|\s+$/g,Ke=/^[-+]0x[0-9a-f]+$/i,Je=/^0b[01]+$/i,Qe=/^0o[0-7]+$/i,Ze=parseInt;var tn=function(t){if("number"==typeof t)return t;if(He(t))return NaN;if(Ae(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Ae(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Ge,"");var n=Je.test(t);return n||Qe.test(t)?Ze(t.slice(2),n?2:8):Ke.test(t)?NaN:+t},en=Math.max,nn=Math.min;var rn=function(t,e,n){var r,o,i,c,u,a,s=0,l=!1,f=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var n=r,i=o;return r=o=void 0,s=e,c=t.apply(i,n)}function h(t){return s=t,u=setTimeout(m,e),l?p(t):c}function v(t){var n=t-a;return void 0===a||n>=e||n<0||f&&t-s>=i}function m(){var t=Me();if(v(t))return y(t);u=setTimeout(m,function(t){var n=e-(t-a);return f?nn(n,i-(t-s)):n}(t))}function y(t){return u=void 0,d&&r?p(t):(r=o=void 0,c)}function b(){var t=Me(),n=v(t);if(r=arguments,o=this,a=t,n){if(void 0===u)return h(a);if(f)return clearTimeout(u),u=setTimeout(m,e),p(a)}return void 0===u&&(u=setTimeout(m,e)),c}return e=tn(e)||0,Ae(n)&&(l=!!n.leading,i=(f="maxWait"in n)?en(tn(n.maxWait)||0,e):i,d="trailing"in n?!!n.trailing:d),b.cancel=function(){void 0!==u&&clearTimeout(u),s=0,r=a=o=u=void 0},b.flush=function(){return void 0===u?c:y(Me())},b};function on(t,e,n,r,o,i,c,u,a,s){"boolean"!=typeof c&&(a=u,u=c,c=!1);const l="function"==typeof n?n.options:n;let f;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),r&&(l._scopeId=r),i?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,a(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=f):e&&(f=c?function(t){e.call(this,s(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,u(t))}),f)if(l.functional){const t=l.render;l.render=function(e,n){return f.call(n),t(e,n)}}else{const t=l.beforeCreate;l.beforeCreate=t?[].concat(t,f):[f]}return n}const cn={props:{hideArrows:{type:Boolean,default:!1},hideArrowsOnBound:{type:Boolean,default:!1}},data:function(){return{boundLeft:!0,boundRight:!1,slidesWidth:[],wrapperScrollWidth:0,wrapperVisibleWidth:0,currentPage:0,currentPos:0,maxPages:0,step:1,observer:null,onResizeFn:null,onScrollFn:null}},watch:{currentPage:function(t,e){t!==e&&this.$emit("page",{current:t,previous:e})}},mounted:function(){this.calcOnInit(),s&&(this.onResizeFn=rn(this.calcOnInit,410),this.onScrollFn=rn(this.calcOnScroll,100),this.attachMutationObserver(),this.$refs.vsWrapper.addEventListener("scroll",this.onScrollFn),window.addEventListener("resize",this.onResizeFn,!1))},beforeDestroy:function(){s&&(this.observer.disconnect(),this.$refs.vsWrapper.removeEventListener("scroll",this.onScrollFn),window.removeEventListener("resize",this.onResizeFn,!1))},methods:{calcOnInit:function(){this.$refs.vsWrapper&&(this.calcWrapperWidth(),this.calcSlidesWidth(),this.calcCurrentPosition(),this.calcCurrentPage(),this.calcBounds(),this.calcMaxPages())},calcOnScroll:function(){this.$refs.vsWrapper&&(this.calcCurrentPosition(),this.calcCurrentPage(),this.calcBounds())},calcBounds:function(){var t=u(this.currentPos,0,5),e=u(this.wrapperScrollWidth-this.wrapperVisibleWidth,this.currentPos,5);t?(this.$emit("bound-left",!0),this.boundLeft=!0):this.boundLeft=!1,e?(this.$emit("bound-right",!0),this.boundRight=!0):this.boundRight=!1},calcWrapperWidth:function(){this.wrapperScrollWidth=this.$refs.vsWrapper.scrollWidth,this.wrapperVisibleWidth=this.$refs.vsWrapper.offsetWidth},calcSlidesWidth:function(){var t=Le(this.$refs.vsWrapper.childNodes);this.slidesWidth=t.map((function(t){return{offsetLeft:t.offsetLeft,width:t.offsetWidth}}))},calcCurrentPage:function(){var t=this,e=this.slidesWidth.findIndex((function(e){return u(e.offsetLeft,t.currentPos,5)}));-1!==e&&-2!==e&&(this.currentPage=e||0)},calcCurrentPosition:function(){this.currentPos=this.$refs.vsWrapper.scrollLeft||0},calcMaxPages:function(){var t=this.wrapperScrollWidth-this.wrapperVisibleWidth;this.maxPages=this.slidesWidth.findIndex((function(e){return e.offsetLeft>t}))-1},calcNextWidth:function(t){var e=t>0?this.currentPage:this.currentPage+t,n=this.slidesWidth[e].width||0;if(n)return n*t},attachMutationObserver:function(){var t=this;this.observer=new MutationObserver((function(){t.calcOnInit()})),this.observer.observe(this.$refs.vsWrapper,{attributes:!0,childList:!0,characterData:!0,subtree:!0})},changeSlide:function(t){var e=-1===t&&this.boundLeft,n=1===t&&this.boundRight;if(!e&&!n){var r=this.calcNextWidth(t);r&&this.scrollTo(r)}},scrollTo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.$refs.vsWrapper.scrollBy({left:t,behavior:"smooth"})}}};var un=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vs-carousel"},[n("div",{ref:"vsWrapper",staticClass:"vs-carousel__wrapper"},[t._t("default")],2),t._v(" "),t.hideArrows?t._e():t._t("arrows",[n("button",{directives:[{name:"show",rawName:"v-show",value:!t.hideArrowsOnBound||!t.boundLeft,expression:"hideArrowsOnBound ? !boundLeft : true"}],staticClass:"\n        vs-carousel__arrows\n        vs-carousel__arrows--left\n      ",attrs:{type:"button","aria-label":"Slide left",disabled:t.boundLeft},on:{click:function(e){return t.changeSlide(-1)}}},[t._v("\n      ←\n    ")]),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:!t.hideArrowsOnBound||!t.boundRight,expression:"hideArrowsOnBound ? !boundRight : true"}],staticClass:"\n        vs-carousel__arrows\n        vs-carousel__arrows--right\n      ",attrs:{type:"button","aria-label":"Slide right",disabled:t.boundRight},on:{click:function(e){return t.changeSlide(1)}}},[t._v("\n      →\n    ")])])],2)};un._withStripped=!0;const an=on({render:un,staticRenderFns:[]},undefined,cn,undefined,false,undefined,!1,void 0,void 0,void 0);var sn=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"vsSlide",staticClass:"vs-carousel__slide",attrs:{tabindex:"0"}},[t._t("default")],2)};sn._withStripped=!0;const ln=on({render:sn,staticRenderFns:[]},undefined,{},undefined,false,undefined,!1,void 0,void 0,void 0);var fn={install:function(t){t.component("carousel",an),t.component("slide",ln)}};return t.Carousel=an,t.Slide=ln,t.default=fn,t}({});
