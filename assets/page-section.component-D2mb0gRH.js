import{u as i,a0 as p,af as v,X as x,ag as P,ɵ as O,F as M,a1 as y,d as l,w as r,a2 as g,f as c,D as f,j as s,x as _,m,L as w,q as a,e as b,k as u,E as k,B as F,g as h,N as S,O as T}from"./index-V3gWgabJ.js";const I=[[["","sectionHeader",""]],"*",[["","sectionSubtitle",""]],[["","sectionActions",""]]],V=["[sectionHeader]","*","[sectionSubtitle]","[sectionActions]"];function z(e,o){if(e&1&&h(0,"fold-icon",11),e&2){const n=a(4);m("name",o)("tone",n.iconTone())}}function L(e,o){if(e&1){const n=k();l(0,"button",9),F("click",function(){S(n);const d=a(3);return T(d.toggle())}),h(1,"fold-icon",10),r(2,z,1,2,"fold-icon",11),l(3,"span",12),b(4),c()()}if(e&2){let n;const t=a(),d=a(2);f("aria-expanded",d.open())("aria-controls",d.bodyId),s(2),_((n=d.icon())?2:-1,n),s(2),u(t)}}function j(e,o){if(e&1&&h(0,"fold-icon",11),e&2){const n=a(4);m("name",o)("tone",n.iconTone())}}function A(e,o){if(e&1&&(r(0,j,1,2,"fold-icon",11),l(1,"span",12),b(2),c()),e&2){let n;const t=a(),d=a(2);_((n=d.icon())?0:-1,n),s(2),u(t)}}function B(e,o){if(e&1&&(l(0,"div",3)(1,"h2",6),r(2,L,5,4,"button",7)(3,A,3,2),c(),l(4,"div",8),g(5,3),c()()),e&2){const n=a(2);s(),m("id",n.headingId),f("aria-level",n.headingLevel()===2?null:n.headingLevel()),s(),_(n.collapsible()?2:3)}}function H(e,o){if(e&1&&(l(0,"p",5),b(1),c()),e&2){const n=a(2);s(),u(n.description())}}function D(e,o){if(e&1&&(l(0,"div",1),r(1,B,6,3,"div",3),l(2,"div",4),g(3,2),c(),r(4,H,2,1,"p",5),c()),e&2){let n;const t=a();s(),_((n=t.title())?1:-1,n),s(3),_(t.description()?4:-1)}}class C{title=i();icon=i();iconTone=i("secondary");description=i();titleVariant=i("eyebrow");separator=i(!1,{transform:p});collapsible=i(!1,{transform:p});open=v(!0);toggle(){this.open.update(o=>!o)}headingLevel=i(2);stack=i(!1,{transform:p});bleed=i(!1,{transform:p});headingId=x(P).next("fold-page-section");bodyId=`${this.headingId}-body`;static ɵfac=function(n){return new(n||C)};static ɵcmp=O({type:C,selectors:[["fold-page-section"]],hostVars:9,hostBindings:function(n,t){n&2&&(f("data-title-variant",t.titleVariant())("data-separator",t.separator()?"":null)("data-collapsible",t.collapsible()?"":null)("data-open",t.collapsible()&&!t.open()?null:"")("title",null),w("stack",t.stack())("is-bleed",t.bleed()))},inputs:{title:[1,"title"],icon:[1,"icon"],iconTone:[1,"iconTone"],description:[1,"description"],titleVariant:[1,"titleVariant"],separator:[1,"separator"],collapsible:[1,"collapsible"],open:[1,"open"],headingLevel:[1,"headingLevel"],stack:[1,"stack"],bleed:[1,"bleed"]},outputs:{open:"openChange"},ngContentSelectors:V,decls:5,vars:4,consts:[[1,"ps-root"],[1,"section-head"],[1,"section-body",3,"id","hidden"],[1,"section-head-row"],[1,"section-subtitle"],[1,"section-desc"],[1,"section-title",3,"id"],["type","button",1,"section-toggle"],[1,"section-actions"],["type","button",1,"section-toggle",3,"click"],["name","chevron-down","size","sm","aria-hidden","true",1,"section-chevron"],["size","sm",3,"name","tone"],[1,"section-title-text"]],template:function(n,t){n&1&&(y(I),l(0,"section",0),r(1,D,5,2,"div",1),g(2),l(3,"div",2),g(4,1),c()()),n&2&&(f("aria-labelledby",t.title()?t.headingId:null),s(),_(t.title()||t.description()?1:-1),s(2),m("id",t.bodyId)("hidden",t.collapsible()&&!t.open()))},dependencies:[M],styles:[`@charset "UTF-8";


[_nghost-%COMP%] {
  display: block;
}









.is-bleed[_nghost-%COMP%] {
  margin-inline: calc(-1 * var(--fold-page-gutter-effective, var(--fold-page-gutter, 32px)));
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
  line-height: var(--fold-leading-snug);
}





[data-title-variant=eyebrow][_nghost-%COMP%]   .section-title[_ngcontent-%COMP%] {
  font-family: var(--fold-font-label);
  font-size: var(--fold-text-2xs);
  font-weight: var(--fold-weight-bold);
  letter-spacing: var(--fold-tracking-caps);
  text-transform: uppercase;
  color: var(--fold-color-text-muted);
}


[data-title-variant=heading][_nghost-%COMP%]   .section-title[_ngcontent-%COMP%] {
  font-size: var(--fold-text-base);
  font-weight: var(--fold-weight-semibold);
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





.section-subtitle[_ngcontent-%COMP%] {
  font-size: var(--fold-text-sm);
  line-height: var(--fold-leading-snug);
  color: var(--fold-color-text-muted);
  

  margin-block-start: calc(-1 * var(--fold-space-xs));
}

.section-subtitle[_ngcontent-%COMP%]:empty {
  display: none;
}

.section-subtitle[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  margin: 0;
}




[data-separator][_nghost-%COMP%]   .section-head[_ngcontent-%COMP%] {
  padding-block-end: var(--fold-space-sm);
  border-block-end: 1px solid var(--fold-color-border);
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
}





.section-toggle[_ngcontent-%COMP%] {
  all: unset;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  gap: var(--fold-space-sm);
  min-width: 0;
  cursor: pointer;
  border-radius: var(--fold-radius-sm);
}

.section-toggle[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary-border);
  outline-offset: 2px;
}



.section-chevron[_ngcontent-%COMP%] {
  flex: none;
  transition: transform var(--fold-motion-fast);
}

[data-collapsible][_nghost-%COMP%]:not([data-open])   .section-chevron[_ngcontent-%COMP%] {
  transform: rotate(-90deg);
}

@media (prefers-reduced-motion: reduce) {
  .section-chevron[_ngcontent-%COMP%] {
    transition: none;
  }
}


[data-separator][data-collapsible][_nghost-%COMP%]:not([data-open])   .section-head[_ngcontent-%COMP%] {
  padding-block-end: 0;
  border-block-end: 0;
}`]})}export{C as FoldPageSectionComponent};
