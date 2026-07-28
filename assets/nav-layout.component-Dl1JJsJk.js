import{u as s,aF as d,s as r,A as c,aG as f,ae as p,ɵ as m,Y as u,y as a,Z as i,z as l,aH as _,L as h}from"./index-FWo1_vlb.js";import{F as v}from"./nav-layout.context-W_7aECNJ.js";const g=[[["","tabNav",""]],"*"],y=["[tabNav]","*"],x=32;class e{placement=s("top");foldAt=s(720,{transform:d});folded=r(!1);stacked=c(()=>this.placement()==="top"||this.folded());width=f();constructor(){p(()=>this.measure(this.width()))}measure(n){if(n===0)return;const t=this.foldAt();!this.folded()&&n<=t?this.folded.set(!0):this.folded()&&n>t+x&&this.folded.set(!1)}static ɵfac=function(t){return new(t||e)};static ɵcmp=m({type:e,selectors:[["fold-nav-layout"]],hostVars:2,hostBindings:function(t,o){t&2&&h("is-row",!o.stacked())},inputs:{placement:[1,"placement"],foldAt:[1,"foldAt"]},exportAs:["foldNavLayout"],features:[_([{provide:v,useExisting:e}])],ngContentSelectors:y,decls:4,vars:0,consts:[[1,"tl-nav"],[1,"tl-body"]],template:function(t,o){t&1&&(u(g),a(0,"div",0),i(1),l(),a(2,"div",1),i(3,1),l())},styles:[`@charset "UTF-8";


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
}`]})}export{e as FoldNavLayoutComponent};
