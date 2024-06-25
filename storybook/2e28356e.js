System.register(["./23447ac8.js"],(function(){"use strict";var t,i,s,e,o;return{setters:[function(n){t=n._,i=n.a,s=n.m,e=n.c,o=n.d}],execute:function(){!function(){var n=function(t,i){return Math.random()*(i-t)+t},h=[{front:"#52A7DD",back:"#2287BD"},{front:"#f07178",back:"#c04148"},{front:"#ffcb6b",back:"#cf9b3b"}];function a(t,i){var s,e,o,a,c;this.options=i,this.randomModifier=n(0,99),this.color=h[Math.floor(n(0,h.length))],this.dimensions={x:n(8,16),y:n(8,14)},this.position={x:n(t.width/2,t.width/2),y:n(t.height/2,t.height/2)},this.rotation=n(0,2*Math.PI),this.scale={x:1,y:1},this.velocity=(e=[6,11],o=n((s=[-9,9])[0],s[1]),a=e[1]-e[0]+1,(c=e[1]-Math.abs(n(0,a)+n(0,a)-a))>=e[1]-1&&(c+=Math.random()<.25?n(1,3):0),{x:o,y:-c})}function c(t,i){this.options=i,this.color=h[Math.floor(n(0,h.length))].back,this.radius=n(1,2),this.position={x:n(t.width/2,t.width/2),y:n(t.height/2,t.height/2)},this.velocity={x:n(-6,6),y:n(-8,-12)}}a.prototype.update=function(){this.velocity.x-=this.velocity.x*this.options.dragConfetti,this.velocity.y=Math.min(this.velocity.y+this.options.gravityConfetti,this.options.terminalVelocity),this.velocity.x+=Math.random()>.5?Math.random():-Math.random(),this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.scale.y=Math.cos(.09*(this.position.y+this.randomModifier))},c.prototype.update=function(){this.velocity.x-=this.velocity.x*this.options.dragSequins,this.velocity.y=this.velocity.y+this.options.gravitySequins,this.position.x+=this.velocity.x,this.position.y+=this.velocity.y};var r=function(s){function n(){var t;return e(this,n),(t=o(this,n)).canvas=null,t.confetti=[],t.sequins=[],t.options={confettiCount:55,sequinCount:30,gravityConfetti:.25,gravitySequins:.35,dragConfetti:.025,dragSequins:.02,terminalVelocity:4},t}return t(n,s),i(n,[{key:"connectedCallback",value:function(){this.style="display: block; position: relative;",this.canvas=globalThis.document.createElement("canvas"),this.canvas.id="confetti-container-canvas-🎉",this.ctx=this.canvas.getContext("2d"),this.canvas.width=this.offsetWidth,this.canvas.height=this.offsetHeight,this.canvas.style="pointer-events: none; position: absolute; top:0; left: 0; width: 100%; height: 100%; z-index: 1000; image-rendering: crisp-edges;",this.prepend(this.canvas)}},{key:"attributeChangedCallback",value:function(t,i,s){var e=globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches;"popped"===t&&null===i&&!e?this.popConfetti():e&&this.removeAttribute("popped")}},{key:"popConfetti",value:function(){for(var t=0;t<this.options.confettiCount;t++)this.confetti.push(new a(this.canvas,this.options));for(var i=0;i<this.options.sequinCount;i++)this.sequins.push(new c(this.canvas,this.options));this.render()}},{key:"render",value:function(){var t=this;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.confetti.forEach((function(i,s){var e=i.dimensions.x*i.scale.x,o=i.dimensions.y*i.scale.y;t.ctx.translate(i.position.x,i.position.y),t.ctx.rotate(i.rotation),i.update(),t.ctx.fillStyle=i.scale.y>0?i.color.front:i.color.back,t.ctx.fillRect(-e/2,-o/2,e,o),t.ctx.setTransform(1,0,0,1,0,0)})),this.sequins.forEach((function(i,s){t.ctx.translate(i.position.x,i.position.y),i.update(),t.ctx.fillStyle=i.color,t.ctx.beginPath(),t.ctx.arc(0,0,i.radius,0,2*Math.PI),t.ctx.fill(),t.ctx.setTransform(1,0,0,1,0,0)})),this.confetti.forEach((function(i,s){i.position.y-25>=t.canvas.height&&t.confetti.splice(s,1)})),this.sequins.forEach((function(i,s){i.position.y-25>=t.canvas.height&&t.sequins.splice(s,1)})),this.sequins.length||this.confetti.length?globalThis.requestAnimationFrame(this.render.bind(this)):this.removeAttribute("popped")}}],[{key:"observedAttributes",get:function(){return["popped"]}}])}(s(HTMLElement));globalThis.customElements&&globalThis.customElements.define&&customElements.define("confetti-container",r)}()}}}));
