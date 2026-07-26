import{T as b,b6 as F,ad as H,x as h,K as L,a4 as $,a5 as B,as as x,a0 as z,aG as I,ɵ as R,L as U,N as _,M as P,I as j,O as D,j as C,aj as W,J as N,C as q,at as Q,au as K,al as V}from"./index-BUJ3msiF.js";const E={top:"bottom",bottom:"top",left:"right",right:"left"};function G(o){return o==="top"||o==="bottom"||o==="left"||o==="right"}function J(o){return o==="start"||o==="center"||o==="end"}function k(o){const[e,t]=o.split("-"),n=e!==void 0&&G(e)?e:"bottom",r=t!==void 0&&J(t)?t:"center";return{side:n,align:r}}function u(o){return o==="top"||o==="bottom"}function T(o,e,t){switch(o){case"top":return e.y;case"bottom":return t.height-(e.y+e.height);case"left":return e.x;case"right":return t.width-(e.x+e.width)}}function S(o,e,t,n){switch(o){case"top":return e.y-t.height-n;case"bottom":return e.y+e.height+n;case"left":return e.x-t.width-n;case"right":return e.x+e.width+n}}function M(o,e,t,n){const r=u(o),i=r?t.x:t.y,c=r?t.width:t.height,s=r?n.width:n.height;switch(e){case"start":return i;case"end":return i+c-s;case"center":return i+c/2-s/2}}function A(o,e,t){return t<e?e:Math.min(Math.max(o,e),t)}function X(o,e){return u(o)?e.height:e.width}function Y(o){const e=k(o.placement),t=e.align==="center"?E[e.side]:`${E[e.side]}-${e.align}`,n=o.fallbackPlacements??[t],r=[o.placement,...n];let i=e,c=-1/0;for(const s of r){const a=k(s),d=T(a.side,o.anchor,o.viewport);if(d>=X(a.side,o.floating)+o.offset)return a;d>c&&(c=d,i=a)}return i}function Z(o){const{anchor:e,floating:t,offset:n,viewport:r,padding:i}=o,c=Y(o),s=c.side,a=c.align,d=Math.max(0,T(s,e,r)-n-i),p=u(s)?r.width:r.height,l=Math.max(0,p-2*i),v=u(s)?d:l,y=u(s)?l:d,f={width:Math.min(t.width,y),height:Math.min(t.height,v)};let m,g;u(s)?(g=S(s,e,f,n),m=M(s,a,e,f),m=A(m,i,r.width-f.width-i)):(m=S(s,e,f,n),g=M(s,a,e,f),g=A(g,i,r.height-f.height-i));const O=a==="center"?s:`${s}-${a}`;return{x:m,y:g,placement:O,maxWidth:y,maxHeight:v}}function ee(o,e,t){if(typeof window>"u")return()=>{};window.addEventListener("scroll",t,!0),window.addEventListener("resize",t);const n=typeof ResizeObserver>"u"?null:new ResizeObserver(t);return n&&(o&&n.observe(o),n.observe(e)),()=>{window.removeEventListener("scroll",t,!0),window.removeEventListener("resize",t),n?.disconnect()}}const te=["panel"],ne=["inner"],oe=["arrow"],re=["*",[["","foldPopoverPanel",""]]],ie=["*","[foldPopoverPanel]"];function se(o,e){o&1&&V(0,"div",4,2)}class w{renderer=b(F);host=b(H);placement=h("bottom-start");fallbackPlacements=h();offset=h(8);padding=h(8);autoFocus=h(!0);arrow=h(!1,{transform:L});open=$(!1);panelId=b(B).next("fold-popover");panel=x("panel");inner=x("inner");arrowEl=x("arrow");markedTrigger(){return this.host.nativeElement.querySelector("[foldPopoverTrigger]")}static FOCUSABLE="button, a[href], input, select, textarea, [tabindex]";focusableTrigger(){const e=this.markedTrigger();return e?e.matches(w.FOCUSABLE)?e:e.querySelector(w.FOCUSABLE):null}constructor(){z(()=>{const e=this.open(),t=this.focusableTrigger(),n=this.markedTrigger();if(!t||!n)return;const r=n.getAttribute("foldpopovertrigger"),i=r==="menu"||r==="listbox"||r==="true"?r:"dialog";this.renderer.setAttribute(t,"aria-haspopup",i),this.renderer.setAttribute(t,"aria-controls",this.panelId),this.renderer.setAttribute(t,"aria-expanded",String(e))}),I(e=>{const t=this.panel()?.nativeElement;if(!t||typeof document>"u")return;const n=typeof t.showPopover=="function";if(this.open()){n&&!t.matches(":popover-open")&&t.showPopover(),this.reposition(),this.autoFocus()&&t.focus({preventScroll:!0});const r=s=>{const a=s.target;if(!(a instanceof Node))return;const d=t.contains(a),p=this.markedTrigger()?.contains(a)??!1;!d&&!p&&this.open.set(!1)},i=s=>{s.key==="Escape"&&this.open.set(!1)};document.addEventListener("pointerdown",r,!0),document.addEventListener("keydown",i,!0);const c=ee(this.markedTrigger(),t,()=>this.reposition());e(()=>{document.removeEventListener("pointerdown",r,!0),document.removeEventListener("keydown",i,!0),c()})}else n&&t.matches(":popover-open")&&(t.hidePopover(),this.focusableTrigger()?.focus({preventScroll:!0}))})}reposition(){const e=this.panel()?.nativeElement,t=this.markedTrigger();if(!e||!t)return;const n=t.getBoundingClientRect(),r=Z({anchor:n,floating:{width:e.offsetWidth,height:e.offsetHeight},placement:this.placement(),fallbackPlacements:this.fallbackPlacements(),offset:this.offset(),viewport:{width:window.innerWidth,height:window.innerHeight},padding:this.padding()});this.renderer.setStyle(e,"position","fixed"),this.renderer.setStyle(e,"left",`${r.x}px`),this.renderer.setStyle(e,"top",`${r.y}px`),this.renderer.setStyle(e,"margin","0"),this.renderer.setAttribute(e,"data-placement",r.placement),this.applyCap(e,"max-width",r.maxWidth),this.applyCap(this.inner()?.nativeElement,"max-height",r.maxHeight),this.positionArrow(r.placement,n,r.x,r.y)}applyCap(e,t,n){e&&(n>0?this.renderer.setStyle(e,t,`${n}px`):this.renderer.removeStyle(e,t))}positionArrow(e,t,n,r){const i=this.arrowEl()?.nativeElement,c=this.panel()?.nativeElement;if(!i||!c)return;const s=e.split("-")[0],a=11,d=6,p=(l,v)=>this.renderer.setStyle(i,l,v);for(const l of["top","bottom","left","right"])this.renderer.removeStyle(i,l);if(s==="top"||s==="bottom"){const l=t.x+t.width/2-n-a/2;p("left",`${Math.max(d,Math.min(l,c.offsetWidth-a-d))}px`),p(s==="bottom"?"top":"bottom",`${-a/2}px`)}else{const l=t.y+t.height/2-r-a/2;p("top",`${Math.max(d,Math.min(l,c.offsetHeight-a-d))}px`),p(s==="right"?"left":"right",`${-a/2}px`)}}onHostClick(e){const t=e.target;t instanceof Node&&(this.markedTrigger()?.contains(t)??!1)&&this.open.update(n=>!n)}onArrowDown(e){const t=e.target;t instanceof Node&&(this.markedTrigger()?.contains(t)??!1)&&(e.preventDefault(),this.open.set(!0))}static ɵfac=function(t){return new(t||w)};static ɵcmp=R({type:w,selectors:[["fold-popover"]],viewQuery:function(t,n){t&1&&Q(n.panel,te,5)(n.inner,ne,5)(n.arrowEl,oe,5),t&2&&K(3)},hostAttrs:[1,"fold-popover"],hostBindings:function(t,n){t&1&&q("click",function(i){return n.onHostClick(i)})("keydown.arrowdown",function(i){return n.onArrowDown(i)})},inputs:{placement:[1,"placement"],fallbackPlacements:[1,"fallbackPlacements"],offset:[1,"offset"],padding:[1,"padding"],autoFocus:[1,"autoFocus"],arrow:[1,"arrow"],open:[1,"open"]},outputs:{open:"openChange"},ngContentSelectors:ie,decls:7,vars:2,consts:[["panel",""],["inner",""],["arrow",""],["popover","manual","tabindex","-1",1,"fpop-panel",3,"id"],["aria-hidden","true",1,"fpop-arrow"],[1,"fpop-inner"]],template:function(t,n){t&1&&(U(re),_(0),P(1,"div",3,0),j(3,se,2,0,"div",4),P(4,"div",5,1),_(6,1),D()()),t&2&&(C(),W("id",n.panelId),C(2),N(n.arrow()?3:-1))},styles:[`@charset "UTF-8";
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
  z-index: -1;
  width: 11px;
  height: 11px;
  background: var(--fold-color-surface-raised);
  border: 1px solid var(--fold-color-border-subtle);
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
}`]})}export{w as FoldPopoverComponent};
