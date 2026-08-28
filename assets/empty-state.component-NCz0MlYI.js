import{u as i,ɵ as g,F as x,a1 as C,d as a,a2 as r,w as m,f as l,e as d,j as c,x as _,k as f,D as u,L as v,g as P,q as y,m as M}from"./index-CK_dhrcT.js";const O=[[["","empty-icon",""]],"*"],h=["[empty-icon]","*"];function b(t,e){if(t&1&&P(0,"fold-icon",2),t&2){const n=y();M("name",e)("size",n.iconSize())}}function S(t,e){if(t&1&&(a(0,"p",4),d(1),l()),t&2){const n=y();c(),f(n.subtitle())}}class s{title=i.required();subtitle=i("");icon=i();iconSize=i("xl");tone=i("neutral");static ɵfac=function(n){return new(n||s)};static ɵcmp=g({type:s,selectors:[["fold-empty-state"]],hostVars:3,hostBindings:function(n,o){n&2&&(u("title",null),v("alert",o.tone()==="alert"))},inputs:{title:[1,"title"],subtitle:[1,"subtitle"],icon:[1,"icon"],iconSize:[1,"iconSize"],tone:[1,"tone"]},ngContentSelectors:h,decls:9,vars:3,consts:[[1,"empty"],[1,"empty-icon"],[3,"name","size"],[1,"empty-title"],[1,"empty-sub"],[1,"empty-action"]],template:function(n,o){if(n&1&&(C(O),a(0,"div",0)(1,"div",1),r(2),m(3,b,1,2,"fold-icon",2),l(),a(4,"p",3),d(5),l(),m(6,S,2,1,"p",4),a(7,"div",5),r(8,1),l()()),n&2){let p;c(3),_((p=o.icon())?3:-1,p),c(2),f(o.title()),c(),_(o.subtitle()?6:-1)}},dependencies:[x],styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.empty[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--fold-space-sm);
  padding: var(--fold-space-4xl) var(--fold-space-2xl);
}

.empty-icon[_ngcontent-%COMP%] {
  color: var(--fold-color-text-faded);
  margin-bottom: var(--fold-space-xs);
}



.empty-icon[_ngcontent-%COMP%]:not(:has(*)) {
  display: none;
}



.empty-icon[_ngcontent-%COMP%]:has([empty-icon])   fold-icon[_ngcontent-%COMP%] {
  display: none;
}

.empty-title[_ngcontent-%COMP%] {
  font-size: var(--fold-text-sm);
  font-weight: var(--fold-weight-semibold);
  color: var(--fold-color-text);
  margin: 0;
}

.empty-sub[_ngcontent-%COMP%] {
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
  margin: 0;
  text-align: center;
  max-width: 320px;
  line-height: var(--fold-leading-relaxed);
}

.empty-action[_ngcontent-%COMP%] {
  margin-top: var(--fold-space-xs);
}

.empty-action[_ngcontent-%COMP%]:empty {
  display: none;
}

.alert[_nghost-%COMP%]   .empty-icon[_ngcontent-%COMP%], 
.alert[_nghost-%COMP%]   .empty-title[_ngcontent-%COMP%] {
  color: var(--fold-color-alert-text);
}`]})}export{s as FoldEmptyStateComponent};
