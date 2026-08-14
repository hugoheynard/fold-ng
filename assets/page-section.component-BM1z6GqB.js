import{u as i,a0 as f,X as x,ah as v,ɵ as u,F as P,a1 as b,d as a,w as l,a2 as p,f as s,D as r,j as c,x as d,L as y,q as _,e as m,m as h,k as C,g as M}from"./index-BpnHZqq2.js";const O=[[["","sectionHeader",""]],"*",[["","sectionActions",""]]],w=["[sectionHeader]","*","[sectionActions]"];function F(t,o){if(t&1&&M(0,"fold-icon",6),t&2){const n=_(3);h("name",o)("tone",n.iconTone())}}function T(t,o){if(t&1&&(a(0,"div",3)(1,"h2",5),l(2,F,1,2,"fold-icon",6),a(3,"span",7),m(4),s()(),a(5,"div",8),p(6,2),s()()),t&2){let n;const e=_(2);c(),h("id",e.headingId),r("aria-level",e.headingLevel()===2?null:e.headingLevel()),c(),d((n=e.icon())?2:-1,n),c(2),C(o)}}function S(t,o){if(t&1&&(a(0,"p",4),m(1),s()),t&2){const n=_(2);c(),C(n.description())}}function k(t,o){if(t&1&&(a(0,"div",1),l(1,T,7,4,"div",3),l(2,S,2,1,"p",4),s()),t&2){let n;const e=_();c(),d((n=e.title())?1:-1,n),c(),d(e.description()?2:-1)}}class g{title=i();icon=i();iconTone=i("secondary");description=i();headingLevel=i(2);stack=i(!1,{transform:f});bleed=i(!1,{transform:f});headingId=x(v).next("fold-page-section");static ɵfac=function(n){return new(n||g)};static ɵcmp=u({type:g,selectors:[["fold-page-section"]],hostVars:5,hostBindings:function(n,e){n&2&&(r("title",null),y("stack",e.stack())("is-bleed",e.bleed()))},inputs:{title:[1,"title"],icon:[1,"icon"],iconTone:[1,"iconTone"],description:[1,"description"],headingLevel:[1,"headingLevel"],stack:[1,"stack"],bleed:[1,"bleed"]},ngContentSelectors:w,decls:5,vars:2,consts:[[1,"ps-root"],[1,"section-head"],[1,"section-body"],[1,"section-head-row"],[1,"section-desc"],[1,"section-title",3,"id"],["size","sm",3,"name","tone"],[1,"section-title-text"],[1,"section-actions"]],template:function(n,e){n&1&&(b(O),a(0,"section",0),l(1,k,3,2,"div",1),p(2),a(3,"div",2),p(4,1),s()()),n&2&&(r("aria-labelledby",e.title()?e.headingId:null),c(),d(e.title()||e.description()?1:-1))},dependencies:[P],styles:[`@charset "UTF-8";


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
  font-size: var(--fold-text-md);
  font-weight: 600;
  line-height: 1.3;
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
  gap: var(--fold-page-section-gap, var(--fold-space-lg));
}`]})}export{g as FoldPageSectionComponent};
