System.register(["./23447ac8.js","./1b3958bb.js"],(function(t){"use strict";var a,e,s,n,i,o,l,c,r,h;return{setters:[function(t){a=t._,e=t.a,s=t.f,n=t.g,i=t.c,o=t.d,l=t.o,c=t.t,r=t.h},function(t){h=t.R}],execute:function(){var d=t("AppHaxToast",function(t){function h(){var t;return i(this,h),(t=o(this,h)).windowControllers=new AbortController,l((function(){t.userName=c(r.user.name)})),l((function(){t.darkMode=c(r.darkMode)})),t}return a(h,t),e(h,[{key:"connectedCallback",value:function(){s(n(h.prototype),"connectedCallback",this).call(this),globalThis.addEventListener("haxcms-toast-hide",this.hideSimpleToast.bind(this),{signal:this.windowControllers.signal}),globalThis.addEventListener("haxcms-toast-show",this.showSimpleToast.bind(this),{signal:this.windowControllers.signal})}},{key:"hideSimpleToast",value:function(t){this.hide()}},{key:"disconnectedCallback",value:function(){this.windowControllers.abort(),s(n(h.prototype),"disconnectedCallback",this).call(this)}}],[{key:"tag",get:function(){return"app-hax-toast"}}])}(h));customElements.define(d.tag,d),globalThis.AppHaxToast=globalThis.AppHaxToast||{},globalThis.AppHaxToast.requestAvailability=function(){return globalThis.AppHaxToast.instance||(globalThis.AppHaxToast.instance=globalThis.document.createElement(d.tag),globalThis.document.body.appendChild(globalThis.AppHaxToast.instance)),globalThis.AppHaxToast.instance};t("AppHaxToastInstance",globalThis.AppHaxToast.requestAvailability())}}}));
