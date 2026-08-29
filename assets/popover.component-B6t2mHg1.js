import{X as u,aL as y,Y as b,u as l,a0 as x,af as C,ag as P,a4 as h,aA as k,a5 as E,aM as S,ɵ as T,a1 as A,a2 as m,y as g,w as F,z as M,j as v,an as O,x as H,B,a8 as L,a9 as $,aN as D}from"./index-CrZoBIgg.js";import{c as U,a as R}from"./auto-update-_srfpL1Q.js";const j=["panel"],I=["inner"],N=["arrow"],W=["*",[["","foldPopoverPanel",""]]],q=["*","[foldPopoverPanel]"];function Q(w,t){w&1&&D(0,"div",4,2)}class f{renderer=u(y);host=u(b);placement=l("bottom-start");fallbackPlacements=l();offset=l(8);padding=l(8);autoFocus=l(!0);arrow=l(!1,{transform:x});open=C(!1);panelId=u(P).next("fold-popover");ariaControls=l();panel=h("panel");inner=h("inner");arrowEl=h("arrow");markedTrigger(){return this.host.nativeElement.querySelector("[foldPopoverTrigger]")}static FOCUSABLE="button, a[href], input, select, textarea, [tabindex]";focusableTrigger(){const t=this.markedTrigger();return t?t.matches(f.FOCUSABLE)?t:t.querySelector(f.FOCUSABLE):null}constructor(){k(()=>{const t=this.open(),e=this.focusableTrigger(),n=this.markedTrigger();if(!e||!n)return;const o=n.getAttribute("foldpopovertrigger"),r=o==="menu"||o==="listbox"||o==="true"?o:"dialog";this.renderer.setAttribute(e,"aria-haspopup",r),this.renderer.setAttribute(e,"aria-controls",this.ariaControls()??this.panelId),this.renderer.setAttribute(e,"aria-expanded",String(t))}),E(t=>{const e=this.panel()?.nativeElement;if(!e||typeof document>"u")return;const n=typeof e.showPopover=="function";if(this.open()){n&&!e.matches(":popover-open")&&e.showPopover(),this.reposition(),this.autoFocus()&&e.focus({preventScroll:!0});const o=i=>{const a=i.target;if(!(a instanceof Node))return;const d=e.contains(a),p=this.markedTrigger()?.contains(a)??!1;!d&&!p&&this.open.set(!1)},r=i=>{i.key==="Escape"&&this.open.set(!1)};document.addEventListener("pointerdown",o,!0),document.addEventListener("keydown",r,!0);const c=R(this.markedTrigger(),e,()=>this.reposition());t(()=>{document.removeEventListener("pointerdown",o,!0),document.removeEventListener("keydown",r,!0),c()})}else if(n&&e.matches(":popover-open")){const o=document.activeElement,r=!o||o===document.body||e.contains(o);e.hidePopover(),r&&this.focusableTrigger()?.focus({preventScroll:!0})}})}reposition(){const t=this.panel()?.nativeElement,e=this.markedTrigger();if(!t||!e)return;const n=e.getBoundingClientRect(),o=U({anchor:n,floating:{width:t.offsetWidth,height:t.offsetHeight},placement:this.placement(),fallbackPlacements:this.fallbackPlacements(),offset:this.offset(),viewport:{width:window.innerWidth,height:window.innerHeight},padding:this.padding()});this.renderer.setStyle(t,"position","fixed"),this.renderer.setStyle(t,"left",`${o.x}px`),this.renderer.setStyle(t,"top",`${o.y}px`),this.renderer.setStyle(t,"margin","0"),this.renderer.setStyle(t,"--fold-popover-anchor-width",`${n.width}px`,S.DashCase),this.renderer.setAttribute(t,"data-placement",o.placement),this.applyCap(t,"max-width",o.maxWidth),this.applyCap(this.inner()?.nativeElement,"max-height",o.maxHeight),this.positionArrow(o.placement,n,o.x,o.y)}applyCap(t,e,n){t&&(n>0?this.renderer.setStyle(t,e,`${n}px`):this.renderer.removeStyle(t,e))}positionArrow(t,e,n,o){const r=this.arrowEl()?.nativeElement,c=this.panel()?.nativeElement;if(!r||!c)return;const i=t.split("-")[0],a=11,d=6,p=(s,_)=>this.renderer.setStyle(r,s,_);for(const s of["top","bottom","left","right"])this.renderer.removeStyle(r,s);if(i==="top"||i==="bottom"){const s=e.x+e.width/2-n-a/2;p("left",`${Math.max(d,Math.min(s,c.offsetWidth-a-d))}px`),p(i==="bottom"?"top":"bottom",`${-a/2}px`)}else{const s=e.y+e.height/2-o-a/2;p("top",`${Math.max(d,Math.min(s,c.offsetHeight-a-d))}px`),p(i==="right"?"left":"right",`${-a/2}px`)}}onHostClick(t){const e=t.target;e instanceof Node&&(this.markedTrigger()?.contains(e)??!1)&&this.open.update(n=>!n)}onArrowDown(t){const e=t.target;e instanceof Node&&(this.markedTrigger()?.contains(e)??!1)&&(t.preventDefault(),this.open.set(!0))}static ɵfac=function(e){return new(e||f)};static ɵcmp=T({type:f,selectors:[["fold-popover"]],viewQuery:function(e,n){e&1&&L(n.panel,j,5)(n.inner,I,5)(n.arrowEl,N,5),e&2&&$(3)},hostAttrs:[1,"fold-popover"],hostBindings:function(e,n){e&1&&B("click",function(r){return n.onHostClick(r)})("keydown.arrowdown",function(r){return n.onArrowDown(r)})},inputs:{placement:[1,"placement"],fallbackPlacements:[1,"fallbackPlacements"],offset:[1,"offset"],padding:[1,"padding"],autoFocus:[1,"autoFocus"],arrow:[1,"arrow"],open:[1,"open"],ariaControls:[1,"ariaControls"]},outputs:{open:"openChange"},ngContentSelectors:q,decls:7,vars:2,consts:[["panel",""],["inner",""],["arrow",""],["popover","manual","tabindex","-1",1,"fpop-panel",3,"id"],["aria-hidden","true",1,"fpop-arrow"],[1,"fpop-inner"]],template:function(e,n){e&1&&(A(W),m(0),g(1,"div",3,0),F(3,Q,2,0,"div",4),g(4,"div",5,1),m(6,1),M()()),e&2&&(v(),O("id",n.panelId),v(2),H(n.arrow()?3:-1))},styles:[`@charset "UTF-8";
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
}`]})}export{f as FoldPopoverComponent};
