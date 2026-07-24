import{t as i,u as r,U as f,a7 as m,ɵ as h,v as C,d as a,L as c,w as g,f as s,S as v,j as l,M as d,x,z as p,m as b,e as u,k as P}from"./index-2SvTd3I-.js";import{F as y}from"./element-title.component-C_YDoh8n.js";const F=["*",[["","sectionActions",""]]],M=["*","[sectionActions]"],O=["titleAction",""];function S(t,o){if(t&1&&(a(0,"fold-element-title",3),g(1,1,O),s()),t&2){const n=p(2);b("title",o)("icon",n.icon())("headingId",n.headingId)("level",n.headingLevel())}}function k(t,o){if(t&1&&(a(0,"p",4),u(1),s()),t&2){const n=p(2);l(),P(n.description())}}function I(t,o){if(t&1&&(a(0,"div",1),c(1,S,2,4,"fold-element-title",3),c(2,k,2,1,"p",4),s()),t&2){let n;const e=p();l(),d((n=e.title())?1:-1,n),l(),d(e.description()?2:-1)}}class _{title=i();icon=i();description=i();headingLevel=i(2);stack=i(!1,{transform:r});bleed=i(!1,{transform:r});headingId=f(m).next("fold-page-section");static ɵfac=function(n){return new(n||_)};static ɵcmp=h({type:_,selectors:[["fold-page-section"]],hostVars:4,hostBindings:function(n,e){n&2&&x("stack",e.stack())("is-bleed",e.bleed())},inputs:{title:[1,"title"],icon:[1,"icon"],description:[1,"description"],headingLevel:[1,"headingLevel"],stack:[1,"stack"],bleed:[1,"bleed"]},ngContentSelectors:M,decls:4,vars:2,consts:[[1,"ps-root"],[1,"section-head"],[1,"section-body"],[3,"title","icon","headingId","level"],[1,"section-desc"]],template:function(n,e){n&1&&(C(F),a(0,"section",0),c(1,I,3,2,"div",1),a(2,"div",2),g(3),s()()),n&2&&(v("aria-labelledby",e.title()?e.headingId:null),l(),d(e.title()||e.description()?1:-1))},dependencies:[y],styles:[`@charset "UTF-8";


[_nghost-%COMP%] {
  display: block;
}






.is-bleed[_nghost-%COMP%] {
  margin-inline: calc(-1 * var(--fold-page-gutter, 32px));
}





.is-bleed[_nghost-%COMP%]:first-child {
  margin-top: calc(-1 * var(--fold-page-pad-top, 28px));
}

.is-bleed[_nghost-%COMP%]:last-child {
  margin-bottom: calc(-1 * var(--fold-page-pad-bottom, 40px));
}


.ps-root[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--fold-space-lg);
}



.section-head[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--fold-space-sm);
  min-width: 0;
}

.section-desc[_ngcontent-%COMP%] {
  margin: 0;
  font-size: var(--fold-text-sm);
  line-height: 1.5;
  max-width: 62ch;
  color: var(--fold-color-text-secondary);
}

.section-body[_ngcontent-%COMP%] {
  min-width: 0;
}


.stack[_nghost-%COMP%]   .section-body[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--fold-space-lg);
}`]})}export{_ as F};
