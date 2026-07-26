import{x as i,K as r,T as m,a5 as h,ɵ as C,L as v,d as a,I as c,N as f,f as s,P as g,j as l,J as d,D as x,q as p,m as b,e as u,k as P}from"./index-BXLv4jWP.js";import{FoldElementTitleComponent as y}from"./element-title.component-BvhyfL7M.js";const M=["*",[["","sectionActions",""]]],O=["*","[sectionActions]"],F=["titleAction",""];function k(t,o){if(t&1&&(a(0,"fold-element-title",3),f(1,1,F),s()),t&2){const n=p(2);b("title",o)("icon",n.icon())("headingId",n.headingId)("level",n.headingLevel())}}function I(t,o){if(t&1&&(a(0,"p",4),u(1),s()),t&2){const n=p(2);l(),P(n.description())}}function S(t,o){if(t&1&&(a(0,"div",1),c(1,k,2,4,"fold-element-title",3),c(2,I,2,1,"p",4),s()),t&2){let n;const e=p();l(),d((n=e.title())?1:-1,n),l(),d(e.description()?2:-1)}}class _{title=i();icon=i();description=i();headingLevel=i(2);stack=i(!1,{transform:r});bleed=i(!1,{transform:r});headingId=m(h).next("fold-page-section");static ɵfac=function(n){return new(n||_)};static ɵcmp=C({type:_,selectors:[["fold-page-section"]],hostVars:5,hostBindings:function(n,e){n&2&&(g("title",null),x("stack",e.stack())("is-bleed",e.bleed()))},inputs:{title:[1,"title"],icon:[1,"icon"],description:[1,"description"],headingLevel:[1,"headingLevel"],stack:[1,"stack"],bleed:[1,"bleed"]},ngContentSelectors:O,decls:4,vars:2,consts:[[1,"ps-root"],[1,"section-head"],[1,"section-body"],[3,"title","icon","headingId","level"],[1,"section-desc"]],template:function(n,e){n&1&&(v(M),a(0,"section",0),c(1,S,3,2,"div",1),a(2,"div",2),f(3),s()()),n&2&&(g("aria-labelledby",e.title()?e.headingId:null),l(),d(e.title()||e.description()?1:-1))},dependencies:[y],styles:[`@charset "UTF-8";


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
}`]})}export{_ as FoldPageSectionComponent};
