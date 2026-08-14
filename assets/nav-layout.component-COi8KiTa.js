import{u as a,aF as d,s as r,A as f,aG as c,aB as p,ɵ as m,a1 as u,y as s,a2 as i,z as l,aH as _,L as h}from"./index-ysy8dM_Z.js";import{F as v}from"./nav-layout.context-tnmebyXr.js";const g=[[["","tabNav",""]],"*"],x=["[tabNav]","*"],y=32;class e{placement=a("top");foldAt=a(720,{transform:d});folded=r(!1);stacked=f(()=>this.placement()==="top"||this.folded());width=c();constructor(){p(()=>this.measure(this.width()))}measure(t){if(t===0)return;const n=this.foldAt();!this.folded()&&t<=n?this.folded.set(!0):this.folded()&&t>n+y&&this.folded.set(!1)}static ɵfac=function(n){return new(n||e)};static ɵcmp=m({type:e,selectors:[["fold-nav-layout"]],hostVars:2,hostBindings:function(n,o){n&2&&h("is-row",!o.stacked())},inputs:{placement:[1,"placement"],foldAt:[1,"foldAt"]},exportAs:["foldNavLayout"],features:[_([{provide:v,useExisting:e}])],ngContentSelectors:x,decls:4,vars:0,consts:[[1,"tl-nav"],[1,"tl-body"]],template:function(n,o){n&1&&(u(g),s(0,"div",0),i(1),l(),s(2,"div",1),i(3,1),l())},styles:[`@charset "UTF-8";

















[_nghost-%COMP%] {
  display: flex;
  flex-direction: column;
  

  gap: var(--fold-nav-layout-gap, var(--fold-space-lg, 16px));
  




}
@media (max-width: 640px) {
  [_nghost-%COMP%] {
    gap: var(--fold-nav-layout-gap, var(--fold-space-xs, 4px));
  }
}
[_nghost-%COMP%] {
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
}

















.tl-body[_ngcontent-%COMP%] {
  --fold-page-gutter: 0px;
}`]})}export{e as FoldNavLayoutComponent};
