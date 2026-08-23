import{u as s,aF as d,aG as p,A as e,s as c,ɵ as f,a1 as m,y as l,a2 as r,z as i,aH as _,L as v}from"./index-B3oY-3F-.js";import{f as h}from"./fold-at-DTngLCMP.js";import{F as u}from"./breakpoints-J4fapboB.js";import{F as g}from"./nav-layout.context-D-7oedhE.js";const w=[[["","tabNav",""]],"*"],y=["[tabNav]","*"];class a{placement=s("top");foldAt=s(720,{transform:d});width=p();folded=h(this.width,this.foldAt);stacked=e(()=>this.placement()==="top"||this.folded());barCollapsed=c(!1);narrow=e(()=>this.width()>0&&this.width()<=u);static ɵfac=function(n){return new(n||a)};static ɵcmp=f({type:a,selectors:[["fold-nav-layout"]],hostVars:6,hostBindings:function(n,t){n&2&&v("is-row",!t.stacked())("bar-collapsed",t.barCollapsed())("is-narrow",t.narrow())},inputs:{placement:[1,"placement"],foldAt:[1,"foldAt"]},exportAs:["foldNavLayout"],features:[_([{provide:g,useExisting:a}])],ngContentSelectors:y,decls:4,vars:0,consts:[[1,"tl-nav"],[1,"tl-body"]],template:function(n,t){n&1&&(m(w),l(0,"div",0),r(1),i(),l(2,"div",1),r(3,1),i())},styles:[`@charset "UTF-8";





























[_nghost-%COMP%] {
  display: flex;
  flex-direction: column;
  

  gap: var(--fold-nav-layout-gap, var(--fold-space-lg, 16px));
  min-width: 0;
}



.is-narrow[_nghost-%COMP%] {
  gap: var(--fold-nav-layout-gap, var(--fold-space-xs, 4px));
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






.is-row.bar-collapsed[_nghost-%COMP%]   .tl-nav[_ngcontent-%COMP%] {
  flex: 0 0 var(--fold-nav-layout-rail-width, auto);
}

.tl-body[_ngcontent-%COMP%] {
  flex: 1 1 auto;
  min-width: 0;
}

















.tl-body[_ngcontent-%COMP%] {
  --fold-page-gutter: 0px;
}`]})}export{a as FoldNavLayoutComponent};
