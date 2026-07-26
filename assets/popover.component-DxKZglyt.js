import{T as u,b6 as P,ad as C,x as l,a4 as b,a5 as S,as as F,a0 as k,aG as A,ɵ as H,L,N as w,M,O,j as T,aj as j,C as B,at as D,au as I}from"./index-DYVJ62_Q.js";const z={top:"bottom",bottom:"top",left:"right",right:"left"};function N(o){return o==="top"||o==="bottom"||o==="left"||o==="right"}function R(o){return o==="start"||o==="center"||o==="end"}function $(o){const[t,e]=o.split("-"),n=t!==void 0&&N(t)?t:"bottom",r=e!==void 0&&R(e)?e:"center";return{side:n,align:r}}function h(o){return o==="top"||o==="bottom"}function v(o,t,e){switch(o){case"top":return t.y;case"bottom":return e.height-(t.y+t.height);case"left":return t.x;case"right":return e.width-(t.x+t.width)}}function _(o,t,e,n){switch(o){case"top":return t.y-e.height-n;case"bottom":return t.y+t.height+n;case"left":return t.x-e.width-n;case"right":return t.x+t.width+n}}function y(o,t,e,n){const r=h(o),s=r?e.x:e.y,a=r?e.width:e.height,i=r?n.width:n.height;switch(t){case"start":return s;case"end":return s+a-i;case"center":return s+a/2-i/2}}function x(o,t,e){return e<t?t:Math.min(Math.max(o,t),e)}function Q(o){const{anchor:t,floating:e,offset:n,viewport:r,padding:s}=o,a=$(o.placement);let i=a.side;const c=h(i)?e.height:e.width;if(v(i,t,r)<c+n){const m=z[i];v(m,t,r)>=c+n&&(i=m)}const f=h(i);let d,p;f?(p=_(i,t,e,n),d=y(i,a.align,t,e),d=x(d,s,r.width-e.width-s)):(d=_(i,t,e,n),p=y(i,a.align,t,e),p=x(p,s,r.height-e.height-s));const E=a.align==="center"?i:`${i}-${a.align}`;return{x:d,y:p,placement:E}}const q=["panel"],W=["*",[["","foldPopoverPanel",""]]],G=["*","[foldPopoverPanel]"];class g{renderer=u(P);host=u(C);placement=l("bottom-start");offset=l(8);padding=l(8);autoFocus=l(!0);open=b(!1);panelId=u(S).next("fold-popover");panel=F("panel");triggerEl(){return this.host.nativeElement.querySelector("[foldPopoverTrigger]")}constructor(){k(()=>{const t=this.open(),e=this.triggerEl();e&&(this.renderer.setAttribute(e,"aria-controls",this.panelId),this.renderer.setAttribute(e,"aria-expanded",String(t)))}),A(t=>{const e=this.panel()?.nativeElement;if(!e||typeof document>"u")return;const n=typeof e.showPopover=="function";if(this.open()){n&&!e.matches(":popover-open")&&e.showPopover(),this.reposition(),this.autoFocus()&&e.focus({preventScroll:!0});const r=i=>{const c=i.target;if(!(c instanceof Node))return;const f=e.contains(c),d=this.triggerEl()?.contains(c)??!1;!f&&!d&&this.open.set(!1)},s=i=>{i.key==="Escape"&&this.open.set(!1)},a=()=>this.reposition();document.addEventListener("pointerdown",r,!0),document.addEventListener("keydown",s,!0),window.addEventListener("scroll",a,!0),window.addEventListener("resize",a),t(()=>{document.removeEventListener("pointerdown",r,!0),document.removeEventListener("keydown",s,!0),window.removeEventListener("scroll",a,!0),window.removeEventListener("resize",a)})}else n&&e.matches(":popover-open")&&(e.hidePopover(),this.triggerEl()?.focus({preventScroll:!0}))})}reposition(){const t=this.panel()?.nativeElement,e=this.triggerEl();if(!t||!e)return;const n=e.getBoundingClientRect(),r=Q({anchor:n,floating:{width:t.offsetWidth,height:t.offsetHeight},placement:this.placement(),offset:this.offset(),viewport:{width:window.innerWidth,height:window.innerHeight},padding:this.padding()});this.renderer.setStyle(t,"position","fixed"),this.renderer.setStyle(t,"left",`${r.x}px`),this.renderer.setStyle(t,"top",`${r.y}px`),this.renderer.setStyle(t,"margin","0"),this.renderer.setAttribute(t,"data-placement",r.placement)}onHostClick(t){const e=t.target;e instanceof Node&&(this.triggerEl()?.contains(e)??!1)&&this.open.update(n=>!n)}onArrowDown(t){const e=t.target;e instanceof Node&&(this.triggerEl()?.contains(e)??!1)&&(t.preventDefault(),this.open.set(!0))}static ɵfac=function(e){return new(e||g)};static ɵcmp=H({type:g,selectors:[["fold-popover"]],viewQuery:function(e,n){e&1&&D(n.panel,q,5),e&2&&I()},hostAttrs:[1,"fold-popover"],hostBindings:function(e,n){e&1&&B("click",function(s){return n.onHostClick(s)})("keydown.arrowdown",function(s){return n.onArrowDown(s)})},inputs:{placement:[1,"placement"],offset:[1,"offset"],padding:[1,"padding"],autoFocus:[1,"autoFocus"],open:[1,"open"]},outputs:{open:"openChange"},ngContentSelectors:G,decls:4,vars:1,consts:[["panel",""],["popover","manual","tabindex","-1",1,"fpop-panel",3,"id"]],template:function(e,n){e&1&&(L(W),w(0),M(1,"div",1,0),w(3,1),O()),e&2&&(T(),j("id",n.panelId))},styles:[`@charset "UTF-8";
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
  max-width: 22rem;
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
}`]})}export{g as FoldPopoverComponent};
