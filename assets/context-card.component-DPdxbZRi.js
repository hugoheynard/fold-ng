import{u as e,ɵ as d,b as a,Y as r,d as o,g as p,f as i,Z as s,j as f,m as _,D as m}from"./index-kxEpaZ9_.js";import{FoldElementTitleComponent as u}from"./element-title.component-Ckb1iYCo.js";const b=["*",[["","footer",""]]],g=["*","[footer]"];class c{icon=e();iconTone=e("primary");title=e.required();subtitle=e();static ɵfac=function(n){return new(n||c)};static ɵcmp=d({type:c,selectors:[["fold-context-card"]],hostVars:1,hostBindings:function(n,t){n&2&&m("title",null)},inputs:{icon:[1,"icon"],iconTone:[1,"iconTone"],title:[1,"title"],subtitle:[1,"subtitle"]},ngContentSelectors:g,decls:7,vars:5,consts:[["padding","none"],[1,"cc-head"],["variant","title",3,"level","icon","iconTone","title","subtitle"],[1,"cc-body"],[1,"cc-foot"]],template:function(n,t){n&1&&(r(b),o(0,"fold-card",0)(1,"div",1),p(2,"fold-element-title",2),i(),o(3,"div",3),s(4),i(),o(5,"div",4),s(6,1),i()()),n&2&&(f(2),_("level",3)("icon",t.icon())("iconTone",t.iconTone())("title",t.title())("subtitle",t.subtitle()))},dependencies:[a,u],styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  display: block;
}


.cc-head[_ngcontent-%COMP%] {
  padding: var(--fold-space-lg);
  border-bottom: 1px solid var(--fold-color-border-subtle);
}


.cc-body[_ngcontent-%COMP%] {
  padding: 2px var(--fold-space-lg);
}


.cc-foot[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  padding: var(--fold-space-md) var(--fold-space-lg);
  border-top: 1px solid var(--fold-color-border-subtle);
}

.cc-foot[_ngcontent-%COMP%]:empty {
  display: none;
}`]})}export{c as FoldContextCardComponent};
