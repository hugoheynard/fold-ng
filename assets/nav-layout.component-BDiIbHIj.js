import{t as s,a$ as d,s as r,B as c,b3 as f,K as p,ɵ as m,v as u,P as a,w as l,Q as i,x as _}from"./index-B8uaTEx_.js";const h=[[["","tabNav",""]],"*"],v=["[tabNav]","*"],y=32;class o{placement=s("top");foldAt=s(720,{transform:d});folded=r(!1);stacked=c(()=>this.placement()==="top"||this.folded());width=f();constructor(){p(()=>this.measure(this.width()))}measure(n){if(n===0)return;const t=this.foldAt();!this.folded()&&n<=t?this.folded.set(!0):this.folded()&&n>t+y&&this.folded.set(!1)}static ɵfac=function(t){return new(t||o)};static ɵcmp=m({type:o,selectors:[["fold-nav-layout"]],hostVars:2,hostBindings:function(t,e){t&2&&_("is-row",!e.stacked())},inputs:{placement:[1,"placement"],foldAt:[1,"foldAt"]},exportAs:["foldNavLayout"],ngContentSelectors:v,decls:4,vars:0,consts:[[1,"tl-nav"],[1,"tl-body"]],template:function(t,e){t&1&&(u(h),a(0,"div",0),l(1),i(),a(2,"div",1),l(3,1),i())},styles:[`@charset "UTF-8";


[_nghost-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--fold-nav-layout-gap, 16px);
  min-width: 0;
}





.is-row[_nghost-%COMP%] {
  flex-direction: row;
}





.tl-nav[_ngcontent-%COMP%] {
  display: grid;
  min-width: 0;
}


.is-row[_nghost-%COMP%]   .tl-nav[_ngcontent-%COMP%] {
  flex: 0 0 var(--fold-nav-layout-rail-width, var(--fold-rail-tertiary, 200px));
}

.tl-body[_ngcontent-%COMP%] {
  flex: 1 1 auto;
  min-width: 0;
}`]})}export{o as F};
