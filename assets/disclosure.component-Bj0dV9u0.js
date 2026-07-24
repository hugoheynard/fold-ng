import{X as d,U as c,a9 as l,ɵ as p,F as m,v as _,d as t,G as u,w as i,f as s,g as f,S as a,j as g,m as v,x as h}from"./index-DF_F-rLD.js";const C=[[["","summary",""]],"*"],b=["[summary]","*"];class r{open=d(!1);panelId=c(l).next("fold-disclosure");toggle(){this.open.update(o=>!o)}static ɵfac=function(e){return new(e||r)};static ɵcmp=p({type:r,selectors:[["fold-disclosure"]],hostVars:2,hostBindings:function(e,n){e&2&&h("is-open",n.open())},inputs:{open:[1,"open"]},outputs:{open:"openChange"},exportAs:["foldDisclosure"],ngContentSelectors:b,decls:8,vars:4,consts:[["type","button",1,"disc-summary",3,"click"],[1,"disc-label"],["name","chevron-down","size","sm",1,"disc-chevron"],["role","region",1,"disc-panel",3,"id"],[1,"disc-panel-clip"],[1,"disc-panel-content"]],template:function(e,n){e&1&&(_(C),t(0,"button",0),u("click",function(){return n.toggle()}),t(1,"span",1),i(2),s(),f(3,"fold-icon",2),s(),t(4,"div",3)(5,"div",4)(6,"div",5),i(7,1),s()()()),e&2&&(a("aria-expanded",n.open())("aria-controls",n.panelId),g(4),v("id",n.panelId),a("aria-hidden",!n.open()))},dependencies:[m],styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  display: block;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-card);
  
  overflow: clip;
}

.disc-summary[_ngcontent-%COMP%] {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px;
  border: none;
  background: var(--fold-disclosure-summary-bg, transparent);
  color: var(--fold-disclosure-summary-color, var(--fold-color-text));
  font: inherit;
  font-weight: 700;
  text-align: left;
  cursor: pointer;
}

.disc-summary[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: -2px;
}

.disc-label[_ngcontent-%COMP%] {
  min-width: 0;
}

.disc-chevron[_ngcontent-%COMP%] {
  flex: none;
  transition: transform 0.2s ease;
}

.is-open[_nghost-%COMP%]   .disc-chevron[_ngcontent-%COMP%] {
  transform: rotate(180deg);
}




.disc-panel[_ngcontent-%COMP%] {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.22s ease;
}

.is-open[_nghost-%COMP%]   .disc-panel[_ngcontent-%COMP%] {
  grid-template-rows: 1fr;
}

.disc-panel-clip[_ngcontent-%COMP%] {
  min-height: 0;
  overflow: hidden;
}

.disc-panel-content[_ngcontent-%COMP%] {
  padding: 16px;
  border-top: 1px solid var(--fold-color-border-subtle);
}


@media (prefers-reduced-motion: reduce) {
  .disc-panel[_ngcontent-%COMP%], 
   .disc-chevron[_ngcontent-%COMP%] {
    transition: none;
  }
}`]})}export{r as F};
