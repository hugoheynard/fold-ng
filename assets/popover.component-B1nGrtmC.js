import{T as v,b6 as H,ad as k,x as g,K as L,a4 as T,a5 as $,as as _,a0 as z,aG as I,ɵ as R,L as j,N as E,M as P,I as B,O as D,j as S,aj as W,J as N,C as Q,at as q,au as K,al as V}from"./index-89CG8o_m.js";const G={top:"bottom",bottom:"top",left:"right",right:"left"};function J(o){return o==="top"||o==="bottom"||o==="left"||o==="right"}function U(o){return o==="start"||o==="center"||o==="end"}function X(o){const[e,t]=o.split("-"),n=e!==void 0&&J(e)?e:"bottom",r=t!==void 0&&U(t)?t:"center";return{side:n,align:r}}function h(o){return o==="top"||o==="bottom"}function y(o,e,t){switch(o){case"top":return e.y;case"bottom":return t.height-(e.y+e.height);case"left":return e.x;case"right":return t.width-(e.x+e.width)}}function M(o,e,t,n){switch(o){case"top":return e.y-t.height-n;case"bottom":return e.y+e.height+n;case"left":return e.x-t.width-n;case"right":return e.x+e.width+n}}function O(o,e,t,n){const r=h(o),i=r?t.x:t.y,s=r?t.width:t.height,c=r?n.width:n.height;switch(e){case"start":return i;case"end":return i+s-c;case"center":return i+s/2-c/2}}function A(o,e,t){return t<e?e:Math.min(Math.max(o,e),t)}function Y(o,e,t,n,r){const i=y(o,t,n);if(i>=e+r)return o;const s=G[o],c=y(s,t,n);return c>=e+r||c>i?s:o}function Z(o){const{anchor:e,floating:t,offset:n,viewport:r,padding:i}=o,s=X(o.placement),l=h(s.side)?t.height:t.width,a=Y(s.side,l,e,r,n),p=Math.max(0,y(a,e,r)-n-i),d=h(a)?r.width:r.height,w=Math.max(0,d-2*i),b=h(a)?p:w,C=h(a)?w:p,f={width:Math.min(t.width,C),height:Math.min(t.height,b)};let u,m;h(a)?(m=M(a,e,f,n),u=O(a,s.align,e,f),u=A(u,i,r.width-f.width-i)):(u=M(a,e,f,n),m=O(a,s.align,e,f),m=A(m,i,r.height-f.height-i));const F=s.align==="center"?a:`${a}-${s.align}`;return{x:u,y:m,placement:F,maxWidth:C,maxHeight:b}}const tt=["panel"],et=["inner"],nt=["arrow"],ot=["*",[["","foldPopoverPanel",""]]],rt=["*","[foldPopoverPanel]"];function it(o,e){o&1&&V(0,"div",4,2)}class x{renderer=v(H);host=v(k);placement=g("bottom-start");offset=g(8);padding=g(8);autoFocus=g(!0);arrow=g(!1,{transform:L});open=T(!1);panelId=v($).next("fold-popover");panel=_("panel");inner=_("inner");arrowEl=_("arrow");triggerEl(){return this.host.nativeElement.querySelector("[foldPopoverTrigger]")}constructor(){z(()=>{const e=this.open(),t=this.triggerEl();t&&(this.renderer.setAttribute(t,"aria-controls",this.panelId),this.renderer.setAttribute(t,"aria-expanded",String(e)))}),I(e=>{const t=this.panel()?.nativeElement;if(!t||typeof document>"u")return;const n=typeof t.showPopover=="function";if(this.open()){n&&!t.matches(":popover-open")&&t.showPopover(),this.reposition(),this.autoFocus()&&t.focus({preventScroll:!0});const r=l=>{const a=l.target;if(!(a instanceof Node))return;const p=t.contains(a),d=this.triggerEl()?.contains(a)??!1;!p&&!d&&this.open.set(!1)},i=l=>{l.key==="Escape"&&this.open.set(!1)},s=()=>this.reposition();document.addEventListener("pointerdown",r,!0),document.addEventListener("keydown",i,!0),window.addEventListener("scroll",s,!0),window.addEventListener("resize",s);const c=typeof ResizeObserver>"u"?null:new ResizeObserver(s);if(c){const l=this.triggerEl();l&&c.observe(l),c.observe(t)}e(()=>{document.removeEventListener("pointerdown",r,!0),document.removeEventListener("keydown",i,!0),window.removeEventListener("scroll",s,!0),window.removeEventListener("resize",s),c?.disconnect()})}else n&&t.matches(":popover-open")&&(t.hidePopover(),this.triggerEl()?.focus({preventScroll:!0}))})}reposition(){const e=this.panel()?.nativeElement,t=this.triggerEl();if(!e||!t)return;const n=t.getBoundingClientRect(),r=Z({anchor:n,floating:{width:e.offsetWidth,height:e.offsetHeight},placement:this.placement(),offset:this.offset(),viewport:{width:window.innerWidth,height:window.innerHeight},padding:this.padding()});this.renderer.setStyle(e,"position","fixed"),this.renderer.setStyle(e,"left",`${r.x}px`),this.renderer.setStyle(e,"top",`${r.y}px`),this.renderer.setStyle(e,"margin","0"),this.renderer.setAttribute(e,"data-placement",r.placement),this.applyCap(e,"max-width",r.maxWidth),this.applyCap(this.inner()?.nativeElement,"max-height",r.maxHeight),this.positionArrow(r.placement,n,r.x,r.y)}applyCap(e,t,n){e&&(n>0?this.renderer.setStyle(e,t,`${n}px`):this.renderer.removeStyle(e,t))}positionArrow(e,t,n,r){const i=this.arrowEl()?.nativeElement,s=this.panel()?.nativeElement;if(!i||!s)return;const c=e.split("-")[0],l=10,a=6,p=(d,w)=>this.renderer.setStyle(i,d,w);for(const d of["top","bottom","left","right"])this.renderer.removeStyle(i,d);if(c==="top"||c==="bottom"){const d=t.x+t.width/2-n-l/2;p("left",`${Math.max(a,Math.min(d,s.offsetWidth-l-a))}px`),p(c==="bottom"?"top":"bottom",`${-l/2}px`)}else{const d=t.y+t.height/2-r-l/2;p("top",`${Math.max(a,Math.min(d,s.offsetHeight-l-a))}px`),p(c==="right"?"left":"right",`${-l/2}px`)}}onHostClick(e){const t=e.target;t instanceof Node&&(this.triggerEl()?.contains(t)??!1)&&this.open.update(n=>!n)}onArrowDown(e){const t=e.target;t instanceof Node&&(this.triggerEl()?.contains(t)??!1)&&(e.preventDefault(),this.open.set(!0))}static ɵfac=function(t){return new(t||x)};static ɵcmp=R({type:x,selectors:[["fold-popover"]],viewQuery:function(t,n){t&1&&q(n.panel,tt,5)(n.inner,et,5)(n.arrowEl,nt,5),t&2&&K(3)},hostAttrs:[1,"fold-popover"],hostBindings:function(t,n){t&1&&Q("click",function(i){return n.onHostClick(i)})("keydown.arrowdown",function(i){return n.onArrowDown(i)})},inputs:{placement:[1,"placement"],offset:[1,"offset"],padding:[1,"padding"],autoFocus:[1,"autoFocus"],arrow:[1,"arrow"],open:[1,"open"]},outputs:{open:"openChange"},ngContentSelectors:rt,decls:7,vars:2,consts:[["panel",""],["inner",""],["arrow",""],["popover","manual","tabindex","-1",1,"fpop-panel",3,"id"],["aria-hidden","true",1,"fpop-arrow"],[1,"fpop-inner"]],template:function(t,n){t&1&&(j(ot),E(0),P(1,"div",3,0),B(3,it,2,0,"div",4),P(4,"div",5,1),E(6,1),D()()),t&2&&(S(),W("id",n.panelId),S(2),N(n.arrow()?3:-1))},styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  display: contents;
}

.fpop-panel[_ngcontent-%COMP%] {
  
  inset: auto;
  margin: 0;
  padding: 0;
  border: 0;
  overflow: visible; 
  

  width: max-content;
  background: var(--fold-color-surface-raised);
  color: var(--fold-color-text);
  border-radius: var(--fold-radius-md);
  box-shadow: var(--fold-shadow-lg);
  outline: 1px solid var(--fold-color-border-subtle);
}
.fpop-panel[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: 1px;
}



.fpop-inner[_ngcontent-%COMP%] {
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
  border-radius: inherit;
}

.fpop-arrow[_ngcontent-%COMP%] {
  position: absolute;
  width: 10px;
  height: 10px;
  background: var(--fold-color-surface-raised);
  transform: rotate(45deg);
}




@media (prefers-reduced-motion: no-preference) {
  .fpop-panel[_ngcontent-%COMP%] {
    opacity: 0;
    transform: scale(0.96);
    transition: opacity var(--fold-motion-fast), transform var(--fold-motion-fast), overlay var(--fold-motion-fast) allow-discrete, display var(--fold-motion-fast) allow-discrete;
  }
  .fpop-panel[_ngcontent-%COMP%]:popover-open {
    opacity: 1;
    transform: none;
  }
  @starting-style {
    .fpop-panel[_ngcontent-%COMP%]:popover-open {
      opacity: 0;
      transform: scale(0.96);
    }
  }
}
@media (forced-colors: active) {
  .fpop-panel[_ngcontent-%COMP%] {
    outline: 1px solid CanvasText;
  }
  .fpop-arrow[_ngcontent-%COMP%] {
    border: 1px solid CanvasText;
  }
}`]})}export{x as FoldPopoverComponent};
