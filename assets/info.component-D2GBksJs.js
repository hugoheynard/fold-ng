import{u as t,X as d,A as c,ɵ as f,d as r,e as i,f as a,m as g,j as l,D as p,k as m}from"./index-C958Tloz.js";import{F as v}from"./common-labels-D6kgNmne.js";import{FoldPopoverComponent as _}from"./popover.component-Czn9RI4B.js";import{F as h}from"./popover-trigger.directive-DjmcWKrH.js";import"./auto-update-_srfpL1Q.js";class o{text=t.required();label=t();placement=t("bottom-end");common=d(v);triggerLabel=c(()=>this.label()??this.common.info);static ɵfac=function(n){return new(n||o)};static ɵcmp=f({type:o,selectors:[["fold-info"]],inputs:{text:[1,"text"],label:[1,"label"],placement:[1,"placement"]},decls:6,vars:3,consts:[["arrow","",3,"placement"],["foldPopoverTrigger","","type","button",1,"fi-trigger"],["aria-hidden","true"],["foldPopoverPanel","",1,"fi-panel"]],template:function(n,e){n&1&&(r(0,"fold-popover",0)(1,"button",1)(2,"span",2),i(3,"i"),a()(),r(4,"div",3),i(5),a()()),n&2&&(g("placement",e.placement()),l(),p("aria-label",e.triggerLabel()),l(4),m(e.text()))},dependencies:[_,h],styles:[`[_nghost-%COMP%] {
  

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
  font-size: var(--fold-text-xs);
  font-style: italic;
  font-weight: var(--fold-weight-bold);
  line-height: var(--fold-leading-none);
  
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
  font-weight: var(--fold-weight-regular);
  line-height: var(--fold-leading-normal);
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
