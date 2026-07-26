import{T as h,ad as E,x as l,z as S,P as F,b6 as T,a4 as k,a5 as A,as as H,aH as O,a0 as M,aG as L,ɵ as j,L as B,N as w,M as D,O as z,j as Q,aj as I,C as N,at as R,au as _,aJ as $}from"./index-Ci6yhgBI.js";const V={top:"bottom",bottom:"top",left:"right",right:"left"};function W(o){return o==="top"||o==="bottom"||o==="left"||o==="right"}function q(o){return o==="start"||o==="center"||o==="end"}function G(o){const[t,e]=o.split("-"),n=t!==void 0&&W(t)?t:"bottom",i=e!==void 0&&q(e)?e:"center";return{side:n,align:i}}function m(o){return o==="top"||o==="bottom"}function y(o,t,e){switch(o){case"top":return t.y;case"bottom":return e.height-(t.y+t.height);case"left":return t.x;case"right":return e.width-(t.x+t.width)}}function P(o,t,e,n){switch(o){case"top":return t.y-e.height-n;case"bottom":return t.y+t.height+n;case"left":return t.x-e.width-n;case"right":return t.x+t.width+n}}function b(o,t,e,n){const i=m(o),s=i?e.x:e.y,a=i?e.width:e.height,r=i?n.width:n.height;switch(t){case"start":return s;case"end":return s+a-r;case"center":return s+a/2-r/2}}function x(o,t,e){return e<t?t:Math.min(Math.max(o,t),e)}function J(o){const{anchor:t,floating:e,offset:n,viewport:i,padding:s}=o,a=G(o.placement);let r=a.side;const c=m(r)?e.height:e.width;if(y(r,t,i)<c+n){const v=V[r];y(v,t,i)>=c+n&&(r=v)}const g=m(r);let p,d;g?(d=P(r,t,e,n),p=b(r,a.align,t,e),p=x(p,s,i.width-e.width-s)):(p=P(r,t,e,n),d=b(r,a.align,t,e),d=x(d,s,i.height-e.height-s));const C=a.align==="center"?r:`${r}-${a.align}`;return{x:p,y:d,placement:C}}class f{el=h(E);haspopup=l("dialog",{alias:"foldPopoverTrigger",transform:t=>t==="menu"||t==="listbox"||t==="true"?t:"dialog"});static ɵfac=function(e){return new(e||f)};static ɵdir=S({type:f,selectors:[["","foldPopoverTrigger",""]],hostVars:1,hostBindings:function(e,n){e&2&&F("aria-haspopup",n.haspopup())},inputs:{haspopup:[1,"foldPopoverTrigger","haspopup"]}})}const K=["panel"],Y=[[["","foldPopoverTrigger",""]],"*"],U=["[foldPopoverTrigger]","*"];class u{renderer=h(T);placement=l("bottom-start");offset=l(8);padding=l(8);autoFocus=l(!0);open=k(!1);panelId=h(A).next("fold-popover");panel=H("panel");trigger=O(f);constructor(){M(()=>{const t=this.trigger();if(!t)return;const e=t.el.nativeElement;this.renderer.setAttribute(e,"aria-controls",this.panelId),this.renderer.setAttribute(e,"aria-expanded",String(this.open()))}),L(t=>{const e=this.panel()?.nativeElement;if(!e||typeof document>"u")return;const n=typeof e.showPopover=="function";if(this.open()){n&&!e.matches(":popover-open")&&e.showPopover(),this.reposition(),this.autoFocus()&&e.focus({preventScroll:!0});const i=r=>{const c=r.target;if(!(c instanceof Node))return;const g=e.contains(c),p=this.trigger()?.el.nativeElement.contains(c)??!1;!g&&!p&&this.open.set(!1)},s=r=>{r.key==="Escape"&&this.open.set(!1)},a=()=>this.reposition();document.addEventListener("pointerdown",i,!0),document.addEventListener("keydown",s,!0),window.addEventListener("scroll",a,!0),window.addEventListener("resize",a),t(()=>{document.removeEventListener("pointerdown",i,!0),document.removeEventListener("keydown",s,!0),window.removeEventListener("scroll",a,!0),window.removeEventListener("resize",a)})}else n&&e.matches(":popover-open")&&(e.hidePopover(),this.trigger()?.el.nativeElement.focus({preventScroll:!0}))})}reposition(){const t=this.panel()?.nativeElement,e=this.trigger()?.el.nativeElement;if(!t||!e)return;const n=e.getBoundingClientRect(),i=J({anchor:n,floating:{width:t.offsetWidth,height:t.offsetHeight},placement:this.placement(),offset:this.offset(),viewport:{width:window.innerWidth,height:window.innerHeight},padding:this.padding()});this.renderer.setStyle(t,"position","fixed"),this.renderer.setStyle(t,"left",`${i.x}px`),this.renderer.setStyle(t,"top",`${i.y}px`),this.renderer.setStyle(t,"margin","0"),this.renderer.setAttribute(t,"data-placement",i.placement)}onHostClick(t){const e=t.target;e instanceof Node&&(this.trigger()?.el.nativeElement.contains(e)??!1)&&this.open.update(n=>!n)}onArrowDown(t){const e=t.target;e instanceof Node&&(this.trigger()?.el.nativeElement.contains(e)??!1)&&(t.preventDefault(),this.open.set(!0))}static ɵfac=function(e){return new(e||u)};static ɵcmp=j({type:u,selectors:[["fold-popover"]],contentQueries:function(e,n,i){e&1&&$(i,n.trigger,f,5),e&2&&_()},viewQuery:function(e,n){e&1&&R(n.panel,K,5),e&2&&_()},hostAttrs:[1,"fold-popover"],hostBindings:function(e,n){e&1&&N("click",function(s){return n.onHostClick(s)})("keydown.arrowdown",function(s){return n.onArrowDown(s)})},inputs:{placement:[1,"placement"],offset:[1,"offset"],padding:[1,"padding"],autoFocus:[1,"autoFocus"],open:[1,"open"]},outputs:{open:"openChange"},ngContentSelectors:U,decls:4,vars:1,consts:[["panel",""],["popover","manual","tabindex","-1",1,"fpop-panel",3,"id"]],template:function(e,n){e&1&&(B(Y),w(0),D(1,"div",1,0),w(3,1),z()),e&2&&(Q(),I("id",n.panelId))},styles:[`[_nghost-%COMP%] {
  display: contents;
}

.fpop-panel[_ngcontent-%COMP%] {
  
  inset: auto;
  margin: 0;
  padding: 0;
  border: 0;
  overflow: visible;
  max-width: calc(100vw - 2 * var(--fold-space-md));
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
.fpop-panel[_ngcontent-%COMP%]:not(:popover-open) {
  display: none;
}

@media (prefers-reduced-motion: no-preference) {
  .fpop-panel[_ngcontent-%COMP%]:popover-open {
    animation: fpop-in var(--fold-motion-fast);
  }
  @keyframes fpop-in {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
}
@media (forced-colors: active) {
  .fpop-panel[_ngcontent-%COMP%] {
    outline: 1px solid CanvasText;
  }
}`]})}const Z=Object.freeze(Object.defineProperty({__proto__:null,FoldPopoverComponent:u},Symbol.toStringTag,{value:"Module"}));export{u as F,f as a,Z as p};
