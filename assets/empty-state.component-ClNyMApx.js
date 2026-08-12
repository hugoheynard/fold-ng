import{u as i,ɵ as _,a1 as d,y as e,a2 as p,z as o,e as r,w as f,j as l,k as m,x as y,D as g,L as x,q as u}from"./index-DBdQCP3z.js";const C=[[["","empty-icon",""]],"*"],v=["[empty-icon]","*"];function P(c,a){if(c&1&&(e(0,"p",3),r(1),o()),c&2){const t=u();l(),m(t.subtitle())}}class s{title=i.required();subtitle=i("");tone=i("neutral");static ɵfac=function(t){return new(t||s)};static ɵcmp=_({type:s,selectors:[["fold-empty-state"]],hostVars:3,hostBindings:function(t,n){t&2&&(g("title",null),x("alert",n.tone()==="alert"))},inputs:{title:[1,"title"],subtitle:[1,"subtitle"],tone:[1,"tone"]},ngContentSelectors:v,decls:8,vars:2,consts:[[1,"empty"],[1,"empty-icon"],[1,"empty-title"],[1,"empty-sub"],[1,"empty-action"]],template:function(t,n){t&1&&(d(C),e(0,"div",0)(1,"div",1),p(2),o(),e(3,"p",2),r(4),o(),f(5,P,2,1,"p",3),e(6,"div",4),p(7,1),o()()),t&2&&(l(4),m(n.title()),l(),y(n.subtitle()?5:-1))},styles:[`[_nghost-%COMP%] {
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
  margin-top: var(--fold-space-xs);
}

.empty-action[_ngcontent-%COMP%]:empty {
  display: none;
}

.alert[_nghost-%COMP%]   .empty-icon[_ngcontent-%COMP%], 
.alert[_nghost-%COMP%]   .empty-title[_ngcontent-%COMP%] {
  color: var(--fold-color-alert-text);
}`]})}export{s as FoldEmptyStateComponent};
