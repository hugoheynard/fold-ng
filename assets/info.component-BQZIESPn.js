import{u as t,X as c,A as d,ɵ as f,d as r,e as i,f as a,m as p,j as l,D as m,k as g}from"./index-ysy8dM_Z.js";import{F as _}from"./common-labels-DIxRyxEd.js";import{FoldPopoverComponent as h}from"./popover.component-BR552kCm.js";import{F as v}from"./popover-trigger.directive-CPw_sKUN.js";class o{text=t.required();label=t();placement=t("bottom-end");common=c(_);triggerLabel=d(()=>this.label()??this.common.info);static ɵfac=function(n){return new(n||o)};static ɵcmp=f({type:o,selectors:[["fold-info"]],inputs:{text:[1,"text"],label:[1,"label"],placement:[1,"placement"]},decls:6,vars:3,consts:[["arrow","",3,"placement"],["foldPopoverTrigger","","type","button",1,"fi-trigger"],["aria-hidden","true"],["foldPopoverPanel","",1,"fi-panel"]],template:function(n,e){n&1&&(r(0,"fold-popover",0)(1,"button",1)(2,"span",2),i(3,"i"),a()(),r(4,"div",3),i(5),a()()),n&2&&(p("placement",e.placement()),l(),m("aria-label",e.triggerLabel()),l(4),g(e.text()))},dependencies:[h,v],styles:[`[_nghost-%COMP%] {
  

  display: inline-flex;
  flex: 0 0 auto;
}

.fi-trigger[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.125rem;
  height: 1.125rem;
  padding: 0;
  border: 1px solid var(--fold-color-border);
  border-radius: 50%;
  background: transparent;
  color: var(--fold-color-text-muted);
  font: inherit;
  font-size: 0.6875rem;
  font-style: italic;
  font-weight: 700;
  line-height: 1;
  
  cursor: help;
  transition: border-color var(--fold-motion-fast, 120ms) ease, color var(--fold-motion-fast, 120ms) ease;
}

.fi-trigger[_ngcontent-%COMP%]:hover, 
.fi-trigger[_ngcontent-%COMP%]:focus-visible {
  border-color: var(--fold-color-primary);
  color: var(--fold-color-primary);
}


.fi-panel[_ngcontent-%COMP%] {
  max-width: 17rem;
  padding: var(--fold-space-sm) var(--fold-space-md);
  font-size: var(--fold-text-xs);
  font-weight: 400;
  line-height: 1.45;
  text-align: start;
  white-space: normal;
}



@media (forced-colors: active) {
  .fi-trigger[_ngcontent-%COMP%] {
    border-color: ButtonText;
    color: ButtonText;
  }
  .fi-trigger[_ngcontent-%COMP%]:hover, 
   .fi-trigger[_ngcontent-%COMP%]:focus-visible {
    border-color: Highlight;
    color: Highlight;
  }
}`]})}export{o as FoldInfoComponent};
