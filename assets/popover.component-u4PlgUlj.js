import{X as b,aM as F,Y as H,u as f,a0 as $,ag as L,ah as B,a4 as y,aB as z,a5 as R,aN as D,ɵ as I,a1 as U,a2 as _,y as C,w as W,z as j,j as P,ao as N,x as q,B as Q,a8 as V,a9 as K,aO as X}from"./index-CDteuWEx.js";const k={top:"bottom",bottom:"top",left:"right",right:"left"};function Y(o){return o==="top"||o==="bottom"||o==="left"||o==="right"}function G(o){return o==="start"||o==="center"||o==="end"}function E(o){const[e,t]=o.split("-"),n=e!==void 0&&Y(e)?e:"bottom",r=t!==void 0&&G(t)?t:"center";return{side:n,align:r}}function u(o){return o==="top"||o==="bottom"}function T(o,e,t){switch(o){case"top":return e.y;case"bottom":return t.height-(e.y+e.height);case"left":return e.x;case"right":return t.width-(e.x+e.width)}}function S(o,e,t,n){switch(o){case"top":return e.y-t.height-n;case"bottom":return e.y+e.height+n;case"left":return e.x-t.width-n;case"right":return e.x+e.width+n}}function M(o,e,t,n){const r=u(o),i=r?t.x:t.y,c=r?t.width:t.height,s=r?n.width:n.height;switch(e){case"start":return i;case"end":return i+c-s;case"center":return i+c/2-s/2}}function A(o,e,t){return t<e?e:Math.min(Math.max(o,e),t)}function J(o,e){return u(o)?e.height:e.width}function Z(o){const e=E(o.placement),t=e.align==="center"?k[e.side]:`${k[e.side]}-${e.align}`,n=o.fallbackPlacements??[t],r=[o.placement,...n];let i=e,c=-1/0;for(const s of r){const a=E(s),d=T(a.side,o.anchor,o.viewport);if(d>=J(a.side,o.floating)+o.offset)return a;d>c&&(c=d,i=a)}return i}function ee(o){const{anchor:e,floating:t,offset:n,viewport:r,padding:i}=o,c=Z(o),s=c.side,a=c.align,d=Math.max(0,T(s,e,r)-n-i),p=u(s)?r.width:r.height,l=Math.max(0,p-2*i),v=u(s)?d:l,x=u(s)?l:d,h={width:Math.min(t.width,x),height:Math.min(t.height,v)};let m,g;u(s)?(g=S(s,e,h,n),m=M(s,a,e,h),m=A(m,i,r.width-h.width-i)):(m=S(s,e,h,n),g=M(s,a,e,h),g=A(g,i,r.height-h.height-i));const O=a==="center"?s:`${s}-${a}`;return{x:m,y:g,placement:O,maxWidth:x,maxHeight:v}}function te(o,e,t){if(typeof window>"u")return()=>{};window.addEventListener("scroll",t,!0),window.addEventListener("resize",t);const n=typeof ResizeObserver>"u"?null:new ResizeObserver(t);return n&&(o&&n.observe(o),n.observe(e)),()=>{window.removeEventListener("scroll",t,!0),window.removeEventListener("resize",t),n?.disconnect()}}const ne=["panel"],oe=["inner"],re=["arrow"],ie=["*",[["","foldPopoverPanel",""]]],se=["*","[foldPopoverPanel]"];function ae(o,e){o&1&&X(0,"div",4,2)}class w{renderer=b(F);host=b(H);placement=f("bottom-start");fallbackPlacements=f();offset=f(8);padding=f(8);autoFocus=f(!0);arrow=f(!1,{transform:$});open=L(!1);panelId=b(B).next("fold-popover");ariaControls=f();panel=y("panel");inner=y("inner");arrowEl=y("arrow");markedTrigger(){return this.host.nativeElement.querySelector("[foldPopoverTrigger]")}static FOCUSABLE="button, a[href], input, select, textarea, [tabindex]";focusableTrigger(){const e=this.markedTrigger();return e?e.matches(w.FOCUSABLE)?e:e.querySelector(w.FOCUSABLE):null}constructor(){z(()=>{const e=this.open(),t=this.focusableTrigger(),n=this.markedTrigger();if(!t||!n)return;const r=n.getAttribute("foldpopovertrigger"),i=r==="menu"||r==="listbox"||r==="true"?r:"dialog";this.renderer.setAttribute(t,"aria-haspopup",i),this.renderer.setAttribute(t,"aria-controls",this.ariaControls()??this.panelId),this.renderer.setAttribute(t,"aria-expanded",String(e))}),R(e=>{const t=this.panel()?.nativeElement;if(!t||typeof document>"u")return;const n=typeof t.showPopover=="function";if(this.open()){n&&!t.matches(":popover-open")&&t.showPopover(),this.reposition(),this.autoFocus()&&t.focus({preventScroll:!0});const r=s=>{const a=s.target;if(!(a instanceof Node))return;const d=t.contains(a),p=this.markedTrigger()?.contains(a)??!1;!d&&!p&&this.open.set(!1)},i=s=>{s.key==="Escape"&&this.open.set(!1)};document.addEventListener("pointerdown",r,!0),document.addEventListener("keydown",i,!0);const c=te(this.markedTrigger(),t,()=>this.reposition());e(()=>{document.removeEventListener("pointerdown",r,!0),document.removeEventListener("keydown",i,!0),c()})}else if(n&&t.matches(":popover-open")){const r=document.activeElement,i=!r||r===document.body||t.contains(r);t.hidePopover(),i&&this.focusableTrigger()?.focus({preventScroll:!0})}})}reposition(){const e=this.panel()?.nativeElement,t=this.markedTrigger();if(!e||!t)return;const n=t.getBoundingClientRect(),r=ee({anchor:n,floating:{width:e.offsetWidth,height:e.offsetHeight},placement:this.placement(),fallbackPlacements:this.fallbackPlacements(),offset:this.offset(),viewport:{width:window.innerWidth,height:window.innerHeight},padding:this.padding()});this.renderer.setStyle(e,"position","fixed"),this.renderer.setStyle(e,"left",`${r.x}px`),this.renderer.setStyle(e,"top",`${r.y}px`),this.renderer.setStyle(e,"margin","0"),this.renderer.setStyle(e,"--fold-popover-anchor-width",`${n.width}px`,D.DashCase),this.renderer.setAttribute(e,"data-placement",r.placement),this.applyCap(e,"max-width",r.maxWidth),this.applyCap(this.inner()?.nativeElement,"max-height",r.maxHeight),this.positionArrow(r.placement,n,r.x,r.y)}applyCap(e,t,n){e&&(n>0?this.renderer.setStyle(e,t,`${n}px`):this.renderer.removeStyle(e,t))}positionArrow(e,t,n,r){const i=this.arrowEl()?.nativeElement,c=this.panel()?.nativeElement;if(!i||!c)return;const s=e.split("-")[0],a=11,d=6,p=(l,v)=>this.renderer.setStyle(i,l,v);for(const l of["top","bottom","left","right"])this.renderer.removeStyle(i,l);if(s==="top"||s==="bottom"){const l=t.x+t.width/2-n-a/2;p("left",`${Math.max(d,Math.min(l,c.offsetWidth-a-d))}px`),p(s==="bottom"?"top":"bottom",`${-a/2}px`)}else{const l=t.y+t.height/2-r-a/2;p("top",`${Math.max(d,Math.min(l,c.offsetHeight-a-d))}px`),p(s==="right"?"left":"right",`${-a/2}px`)}}onHostClick(e){const t=e.target;t instanceof Node&&(this.markedTrigger()?.contains(t)??!1)&&this.open.update(n=>!n)}onArrowDown(e){const t=e.target;t instanceof Node&&(this.markedTrigger()?.contains(t)??!1)&&(e.preventDefault(),this.open.set(!0))}static ɵfac=function(t){return new(t||w)};static ɵcmp=I({type:w,selectors:[["fold-popover"]],viewQuery:function(t,n){t&1&&V(n.panel,ne,5)(n.inner,oe,5)(n.arrowEl,re,5),t&2&&K(3)},hostAttrs:[1,"fold-popover"],hostBindings:function(t,n){t&1&&Q("click",function(i){return n.onHostClick(i)})("keydown.arrowdown",function(i){return n.onArrowDown(i)})},inputs:{placement:[1,"placement"],fallbackPlacements:[1,"fallbackPlacements"],offset:[1,"offset"],padding:[1,"padding"],autoFocus:[1,"autoFocus"],arrow:[1,"arrow"],open:[1,"open"],ariaControls:[1,"ariaControls"]},outputs:{open:"openChange"},ngContentSelectors:se,decls:7,vars:2,consts:[["panel",""],["inner",""],["arrow",""],["popover","manual","tabindex","-1",1,"fpop-panel",3,"id"],["aria-hidden","true",1,"fpop-arrow"],[1,"fpop-inner"]],template:function(t,n){t&1&&(U(ie),_(0),C(1,"div",3,0),W(3,ae,2,0,"div",4),C(4,"div",5,1),_(6,1),j()()),t&2&&(P(),N("id",n.panelId),P(2),q(n.arrow()?3:-1))},styles:[`@charset "UTF-8";
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
  



  background-color: var(--fold-color-surface-card);
  background-image: linear-gradient(var(--fold-color-surface-raised), var(--fold-color-surface-raised));
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
  background-color: var(--fold-color-surface-card);
  background-image: linear-gradient(var(--fold-color-surface-raised), var(--fold-color-surface-raised));
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
