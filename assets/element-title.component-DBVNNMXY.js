import{t,B as g,ɵ as v,F as u,v as C,L as p,d as r,e as m,f as a,w as x,M as _,j as l,S as b,k as f,x as h,g as y,z as M,m as P}from"./index-BIvCnllB.js";const O=[[["","titleAction",""]]],T=["[titleAction]"];function w(i,o){if(i&1&&(r(0,"span",0),y(1,"fold-icon",6),a()),i&2){const e=M();l(),P("name",o)("size",e.iconSize())}}function z(i,o){i&1&&(r(0,"span",5),m(1),a()),i&2&&(l(),f(o))}class s{icon=t();iconTone=t("neutral");title=t.required();subtitle=t();variant=t("eyebrow");level=t(2);headingId=t();iconSize=g(()=>this.variant()==="title"?"md":"sm");static ɵfac=function(e){return new(e||s)};static ɵcmp=v({type:s,selectors:[["fold-element-title"]],hostVars:8,hostBindings:function(e,n){e&2&&h("v-bar",n.variant()==="bar")("v-title",n.variant()==="title")("it-primary",n.iconTone()==="primary")("it-faded",n.iconTone()==="faded")},inputs:{icon:[1,"icon"],iconTone:[1,"iconTone"],title:[1,"title"],subtitle:[1,"subtitle"],variant:[1,"variant"],level:[1,"level"],headingId:[1,"headingId"]},ngContentSelectors:T,decls:8,vars:5,consts:[[1,"et-icon"],[1,"et-main"],[1,"et-row"],["role","heading",1,"et-label"],[1,"et-action"],[1,"et-sub"],[3,"name","size"]],template:function(e,n){if(e&1&&(C(O),p(0,w,2,2,"span",0),r(1,"span",1)(2,"span",2)(3,"span",3),m(4),a(),r(5,"span",4),x(6),a()(),p(7,z,2,1,"span",5),a()),e&2){let c,d;_((c=n.icon())?0:-1,c),l(3),b("id",n.headingId())("aria-level",n.level()),l(),f(n.title()),l(3),_((d=n.subtitle())?7:-1,d)}},dependencies:[u],styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
}

.et-main[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.et-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.et-label[_ngcontent-%COMP%] {
  min-width: 0;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--fold-color-text-muted);
}

.v-bar[_nghost-%COMP%]   .et-label[_ngcontent-%COMP%] {
  font-size: 11px;
  color: var(--fold-color-text-secondary);
}

.v-title[_nghost-%COMP%]   .et-label[_ngcontent-%COMP%] {
  font-size: var(--fold-text-md);
  letter-spacing: normal;
  text-transform: none;
  color: var(--fold-color-text);
}

.et-sub[_ngcontent-%COMP%] {
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
}

.et-action[_ngcontent-%COMP%] {
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.et-action[_ngcontent-%COMP%]:empty {
  display: none;
}


.et-icon[_ngcontent-%COMP%] {
  flex: none;
  display: grid;
  place-items: center;
  color: var(--fold-color-primary);
}

.v-title[_nghost-%COMP%]   .et-icon[_ngcontent-%COMP%] {
  width: 40px;
  height: 40px;
  border-radius: var(--fold-radius-md);
  border: 1px solid var(--fold-color-border);
  background: var(--fold-color-surface-raised);
}


.v-title.it-primary[_nghost-%COMP%]   .et-icon[_ngcontent-%COMP%] {
  background: var(--fold-color-primary);
  border-color: var(--fold-color-primary);
  color: var(--fold-color-on-primary);
}

.v-title.it-faded[_nghost-%COMP%]   .et-icon[_ngcontent-%COMP%] {
  background: var(--fold-color-surface-sunken);
  border-color: var(--fold-color-border-subtle);
  color: var(--fold-color-text-muted);
}`]})}export{s as F};
