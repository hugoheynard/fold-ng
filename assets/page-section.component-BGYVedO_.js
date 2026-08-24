import{u as i,a0 as f,X as v,ah as x,ɵ as u,F as P,a1 as b,d as a,w as c,a2 as _,f as s,D as p,j as l,x as d,L as y,q as r,e as m,m as h,k as C,g as M}from"./index-4XDcEdxi.js";const O=[[["","sectionHeader",""]],"*",[["","sectionActions",""]]],w=["[sectionHeader]","*","[sectionActions]"];function F(t,o){if(t&1&&M(0,"fold-icon",6),t&2){const n=r(3);h("name",o)("tone",n.iconTone())}}function T(t,o){if(t&1&&(a(0,"div",3)(1,"h2",5),c(2,F,1,2,"fold-icon",6),a(3,"span",7),m(4),s()(),a(5,"div",8),_(6,2),s()()),t&2){let n;const e=r(2);l(),h("id",e.headingId),p("aria-level",e.headingLevel()===2?null:e.headingLevel()),l(),d((n=e.icon())?2:-1,n),l(2),C(o)}}function S(t,o){if(t&1&&(a(0,"p",4),m(1),s()),t&2){const n=r(2);l(),C(n.description())}}function k(t,o){if(t&1&&(a(0,"div",1),c(1,T,7,4,"div",3),c(2,S,2,1,"p",4),s()),t&2){let n;const e=r();l(),d((n=e.title())?1:-1,n),l(),d(e.description()?2:-1)}}class g{title=i();icon=i();iconTone=i("secondary");description=i();headingLevel=i(2);stack=i(!1,{transform:f});bleed=i(!1,{transform:f});headingId=v(x).next("fold-page-section");static ɵfac=function(n){return new(n||g)};static ɵcmp=u({type:g,selectors:[["fold-page-section"]],hostVars:5,hostBindings:function(n,e){n&2&&(p("title",null),y("stack",e.stack())("is-bleed",e.bleed()))},inputs:{title:[1,"title"],icon:[1,"icon"],iconTone:[1,"iconTone"],description:[1,"description"],headingLevel:[1,"headingLevel"],stack:[1,"stack"],bleed:[1,"bleed"]},ngContentSelectors:w,decls:5,vars:2,consts:[[1,"ps-root"],[1,"section-head"],[1,"section-body"],[1,"section-head-row"],[1,"section-desc"],[1,"section-title",3,"id"],["size","sm",3,"name","tone"],[1,"section-title-text"],[1,"section-actions"]],template:function(n,e){n&1&&(b(O),a(0,"section",0),c(1,k,3,2,"div",1),_(2),a(3,"div",2),_(4,1),s()()),n&2&&(p("aria-labelledby",e.title()?e.headingId:null),l(),d(e.title()||e.description()?1:-1))},dependencies:[P],styles:[`@charset "UTF-8";


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
  gap: var(--fold-page-section-gap, var(--fold-space-lg));
}



.section-head[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--fold-space-sm);
  min-width: 0;
}


.section-head-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--fold-space-md);
  min-width: 0;
}



.section-title[_ngcontent-%COMP%] {
  margin: 0;
  display: inline-flex;
  align-items: center;
  gap: var(--fold-space-sm);
  min-width: 0;
  font-size: var(--fold-text-base);
  font-weight: var(--fold-weight-semibold);
  line-height: var(--fold-leading-snug);
  color: var(--fold-color-text);
}




.section-title[_ngcontent-%COMP%]   fold-icon[_ngcontent-%COMP%] {
  flex: 0 0 auto;
}

.section-title-text[_ngcontent-%COMP%] {
  min-width: 0;
}


.section-actions[_ngcontent-%COMP%] {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: var(--fold-space-sm);
}

.section-desc[_ngcontent-%COMP%] {
  margin: 0;
  font-size: var(--fold-text-sm);
  line-height: var(--fold-leading-normal);
  max-width: 62ch;
  color: var(--fold-color-text-secondary);
}

.section-body[_ngcontent-%COMP%] {
  min-width: 0;
}


.stack[_nghost-%COMP%]   .section-body[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--fold-page-section-gap, var(--fold-space-lg));
}`]})}export{g as FoldPageSectionComponent};
