import{u as a,X as c,ɵ as l,Y as d,y as r,Z as s,z as i,L as p}from"./index-FWo1_vlb.js";const g=[[["","heroBackdrop",""]],"*"],f=["[heroBackdrop]","*"];class t{align=a("center");wash=a(!0,{transform:c});static ɵfac=function(n){return new(n||t)};static ɵcmp=l({type:t,selectors:[["fold-hero-section"]],hostVars:4,hostBindings:function(n,o){n&2&&p("align-start",o.align()==="start")("no-wash",!o.wash())},inputs:{align:[1,"align"],wash:[1,"wash"]},ngContentSelectors:f,decls:4,vars:0,consts:[["aria-hidden","true",1,"hs-backdrop"],[1,"hs-content"]],template:function(n,o){n&1&&(d(g),r(0,"div",0),s(1),i(),r(2,"div",1),s(3,1),i())},styles:[`@charset "UTF-8";


[_nghost-%COMP%] {
  display: block;
  position: relative;
  overflow: clip; 
  


  margin-inline: calc(-1 * var(--fold-page-gutter, 32px));
  padding: var(--fold-hero-section-pad-top, 56px) var(--fold-hero-section-pad-inline, 24px) var(--fold-hero-section-pad-bottom, 52px);
  border-bottom: 1px solid var(--fold-color-border);
  

  background: radial-gradient(120% 140% at 50% 0%, var(--fold-color-primary-surface), transparent 60%), var(--fold-color-surface-card);
}

[_nghost-%COMP%]:first-child {
  margin-top: calc(-1 * var(--fold-page-pad-top, 28px));
}

.no-wash[_nghost-%COMP%] {
  background: var(--fold-color-surface-card);
}


.hs-backdrop[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  user-select: none;
}


.hs-content[_ngcontent-%COMP%] {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--fold-hero-section-gap, 18px);
}

.align-start[_nghost-%COMP%]   .hs-content[_ngcontent-%COMP%] {
  align-items: flex-start;
  text-align: start;
}`]})}export{t as FoldHeroSectionComponent};
