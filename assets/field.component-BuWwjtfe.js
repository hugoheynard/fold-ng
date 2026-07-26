import{x as o,K as p,ɵ as f,L as _,M as s,e as i,O as c,I as m,j as l,k as r,J as x,q as y,N as C}from"./index-BrMmc-uQ.js";const u=["*"];function v(e,n){if(e&1&&(s(0,"dd",1),i(1),c()),e&2){const t=y();l(),r(t.placeholder())}}function g(e,n){e&1&&(s(0,"dd",2),C(1),c())}class a{label=o.required();empty=o(!1,{transform:p});placeholder=o("—");static ɵfac=function(t){return new(t||a)};static ɵcmp=f({type:a,selectors:[["fold-field"]],inputs:{label:[1,"label"],empty:[1,"empty"],placeholder:[1,"placeholder"]},ngContentSelectors:u,decls:4,vars:2,consts:[[1,"fl-key"],[1,"fl-val","fl-empty"],[1,"fl-val"]],template:function(t,d){t&1&&(_(),s(0,"dt",0),i(1),c(),m(2,v,2,1,"dd",1)(3,g,2,0,"dd",2)),t&2&&(l(),r(d.label()),l(),x(d.empty()?2:3))},styles:[`@charset "UTF-8";



[_nghost-%COMP%] {
  display: contents;
}

.fl-key[_ngcontent-%COMP%] {
  margin: 0;
  font-size: var(--fold-text-xs);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--fold-color-text-muted);
}

.fl-val[_ngcontent-%COMP%] {
  margin: 0;
  min-width: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--fold-space-xs);
  font-size: var(--fold-text-md);
  color: var(--fold-color-text);
}

.fl-empty[_ngcontent-%COMP%] {
  color: var(--fold-color-text-muted);
  font-style: italic;
}`]})}export{a as FoldFieldComponent};
