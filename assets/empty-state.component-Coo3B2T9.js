import{x as a,ɵ as _,L as d,M as e,N as p,O as o,e as m,I as y,j as l,k as r,J as f,P as g,D as x,q as u}from"./index-D3jBNkAy.js";const C=[[["","empty-icon",""]],"*"],P=["[empty-icon]","*"];function M(c,i){if(c&1&&(e(0,"p",3),m(1),o()),c&2){const t=u();l(),r(t.subtitle())}}class s{title=a.required();subtitle=a("");tone=a("neutral");static ɵfac=function(t){return new(t||s)};static ɵcmp=_({type:s,selectors:[["fold-empty-state"]],hostVars:3,hostBindings:function(t,n){t&2&&(g("title",null),x("alert",n.tone()==="alert"))},inputs:{title:[1,"title"],subtitle:[1,"subtitle"],tone:[1,"tone"]},ngContentSelectors:P,decls:8,vars:2,consts:[[1,"empty"],[1,"empty-icon"],[1,"empty-title"],[1,"empty-sub"],[1,"empty-action"]],template:function(t,n){t&1&&(d(C),e(0,"div",0)(1,"div",1),p(2),o(),e(3,"p",2),m(4),o(),y(5,M,2,1,"p",3),e(6,"div",4),p(7,1),o()()),t&2&&(l(4),r(n.title()),l(),f(n.subtitle()?5:-1))},styles:[`[_nghost-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.empty[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 40px 24px;
}

.empty-icon[_ngcontent-%COMP%] {
  color: var(--fold-color-text-faded);
  margin-bottom: 4px;
}

.empty-icon[_ngcontent-%COMP%]:empty {
  display: none;
}

.empty-title[_ngcontent-%COMP%] {
  font-size: var(--fold-text-sm);
  font-weight: 600;
  color: var(--fold-color-text);
  margin: 0;
}

.empty-sub[_ngcontent-%COMP%] {
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
  margin: 0;
  text-align: center;
  max-width: 320px;
  line-height: 1.6;
}

.empty-action[_ngcontent-%COMP%] {
  margin-top: 4px;
}

.empty-action[_ngcontent-%COMP%]:empty {
  display: none;
}

.alert[_nghost-%COMP%]   .empty-icon[_ngcontent-%COMP%], 
.alert[_nghost-%COMP%]   .empty-title[_ngcontent-%COMP%] {
  color: var(--fold-color-alert-text);
}`]})}export{s as FoldEmptyStateComponent};
