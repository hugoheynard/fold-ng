import{K as b}from"./kind-badge.component-DMrOnzjr.js";import{ɵ as _,v as h,L as c,w as y,M as p,t as m,u as x,e as n,J as C,j as a,k as v,K as F,z as w,c as k,a as T,F as M,d as t,g as d,f as l,m as g}from"./index-BhGKemIF.js";import{F as P}from"./status-badge.component-BCa5t8Xz.js";import{F as S}from"./link.component-W768xmLz.js";const O=["*"];class r{static ɵfac=function(e){return new(e||r)};static ɵcmp=_({type:r,selectors:[["fold-field-list"]],ngContentSelectors:O,decls:2,vars:0,consts:[[1,"fl"]],template:function(e,s){e&1&&(h(),c(0,"dl",0),y(1),p())},styles:[`@charset "UTF-8";





[_nghost-%COMP%] {
  display: contents;
}

.fl[_ngcontent-%COMP%] {
  margin: 0;
  display: grid;
  grid-template-columns: var(--fold-field-list-label-width, 160px) minmax(0, 1fr);
  column-gap: var(--fold-field-list-col-gap, 16px);
  row-gap: var(--fold-field-list-row-gap, 10px);
  align-items: baseline;
  min-width: 0;
}`]})}const z=["*"];function E(i,o){if(i&1&&(c(0,"dd",1),n(1),p()),i&2){const e=w();a(),v(e.placeholder())}}function B(i,o){i&1&&(c(0,"dd",2),y(1),p())}class f{label=m.required();empty=m(!1,{transform:x});placeholder=m("—");static ɵfac=function(e){return new(e||f)};static ɵcmp=_({type:f,selectors:[["fold-field"]],inputs:{label:[1,"label"],empty:[1,"empty"],placeholder:[1,"placeholder"]},ngContentSelectors:z,decls:4,vars:2,consts:[[1,"fl-key"],[1,"fl-val","fl-empty"],[1,"fl-val"]],template:function(e,s){e&1&&(h(),c(0,"dt",0),n(1),p(),C(2,E,2,1,"dd",1)(3,B,2,0,"dd",2)),e&2&&(a(),v(s.label()),a(),F(s.empty()?2:3))},styles:[`@charset "UTF-8";



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
}`]})}class u{static ɵfac=function(e){return new(e||u)};static ɵcmp=_({type:u,selectors:[["gal-field-page"]],decls:37,vars:3,consts:[["fluid","","title","field · field-list","description","The read-only half of a record — a dl/dt/dd list of label/value pairs. The display counterpart of fold-input."],["titleBadge","","kind","component"],[1,"gal-stack"],[1,"gal-cell"],[1,"gal-tag"],[1,"fld-demo"],["label","Contract type"],["label","Job title"],["label","End date",3,"empty"],["label","Notice","placeholder","Non renseigné",3,"empty"],["label","Status"],["status","active","label","Actif"],["label","Tags"],["content","lead","variant","info"],["content","urgent","variant","warning"],["label","Contact"],["name","team",3,"size"],["href","#field"],[1,"fld-narrow"],["label","Type"],["label","Start"]],template:function(e,s){e&1&&(t(0,"fold-page-layout",0),d(1,"gal-kind-badge",1),t(2,"div",2)(3,"div",3)(4,"span",4),n(5,"basic recap · [empty] placeholder"),l(),t(6,"div",5)(7,"fold-field-list")(8,"fold-field",6),n(9,"CDI"),l(),t(10,"fold-field",7),n(11,"Sound engineer"),l(),d(12,"fold-field",8)(13,"fold-field",9),l()()(),t(14,"div",3)(15,"span",4),n(16,"rich values · chips, links, icons"),l(),t(17,"div",5)(18,"fold-field-list")(19,"fold-field",10),d(20,"fold-status-badge",11),l(),t(21,"fold-field",12),d(22,"fold-badge",13)(23,"fold-badge",14),l(),t(24,"fold-field",15),d(25,"fold-icon",16),t(26,"fold-link",17),n(27,"Marc Machine"),l()()()()(),t(28,"div",3)(29,"span",4),n(30,"narrow rail · shrink the label column"),l(),t(31,"div",5)(32,"fold-field-list",18)(33,"fold-field",19),n(34,"CDI"),l(),t(35,"fold-field",20),n(36,"12 Mar 2026"),l()()()()()()),e&2&&(a(12),g("empty",!0),a(),g("empty",!0),a(12),g("size",16))},dependencies:[b,k,f,r,P,T,M,S],styles:[`/* fold-field-list demos: a light surface framing (the list host is
   display:contents, so the frame lives on this wrapper, not the component). */
.fld-demo {
  max-width: 420px;
  padding: 16px 18px;
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-card);
  border: 1px solid var(--fold-color-border-subtle);
}

/* Custom props inherit through the display:contents host down to the <dl>. */
.fld-narrow {
  --fold-field-list-label-width: 72px;
}`],encapsulation:2})}export{u as default};
