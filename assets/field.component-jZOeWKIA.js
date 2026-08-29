import{u as o,a0 as p,ɵ as f,a1 as _,y as s,e as i,z as c,w as m,j as a,k as d,x,q as y,a2 as u}from"./index-WRKFRWtx.js";const C=["*"];function v(n,e){if(n&1&&(s(0,"dd",1),i(1),c()),n&2){const t=y();a(),d(t.placeholder())}}function g(n,e){n&1&&(s(0,"dd",2),u(1),c())}class l{label=o.required();empty=o(!1,{transform:p});placeholder=o("—");static ɵfac=function(t){return new(t||l)};static ɵcmp=f({type:l,selectors:[["fold-field"]],inputs:{label:[1,"label"],empty:[1,"empty"],placeholder:[1,"placeholder"]},ngContentSelectors:C,decls:4,vars:2,consts:[[1,"fl-key"],[1,"fl-val","fl-empty"],[1,"fl-val"]],template:function(t,r){t&1&&(_(),s(0,"dt",0),i(1),c(),m(2,v,2,1,"dd",1)(3,g,2,0,"dd",2)),t&2&&(a(),d(r.label()),a(),x(r.empty()?2:3))},styles:[`@charset "UTF-8";



[_nghost-%COMP%] {
  display: contents;
}

.fl-key[_ngcontent-%COMP%] {
  margin: 0;
  font-size: var(--fold-text-xs);
  text-transform: uppercase;
  letter-spacing: var(--fold-tracking-caps);
  color: var(--fold-color-text-muted);
}

.fl-val[_ngcontent-%COMP%] {
  margin: 0;
  min-width: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--fold-space-xs);
  font-size: var(--fold-text-base);
  color: var(--fold-color-text);
}

.fl-empty[_ngcontent-%COMP%] {
  color: var(--fold-color-text-muted);
  font-style: italic;
}`]})}export{l as FoldFieldComponent};
