import{u as t,A as v,ɵ as u,F as b,a1 as C,w as p,d as r,e as m,f as l,a2 as x,x as f,j as i,D as _,k as g,L as h,g as y,q as P,m as M}from"./index-HUDWVz6A.js";const O=[[["","titleAction",""]]],T=["[titleAction]"];function w(a,o){if(a&1&&(r(0,"span",0),y(1,"fold-icon",6),l()),a&2){const e=P();i(),M("name",o)("size",e.iconSize())}}function z(a,o){a&1&&(r(0,"span",5),m(1),l()),a&2&&(i(),g(o))}class s{icon=t();iconTone=t("neutral");title=t.required();subtitle=t();variant=t("eyebrow");level=t(2);headingId=t();iconSize=v(()=>this.variant()==="title"?"md":"sm");static ɵfac=function(e){return new(e||s)};static ɵcmp=u({type:s,selectors:[["fold-element-title"]],hostVars:9,hostBindings:function(e,n){e&2&&(_("title",null),h("v-bar",n.variant()==="bar")("v-title",n.variant()==="title")("it-primary",n.iconTone()==="primary")("it-faded",n.iconTone()==="faded"))},inputs:{icon:[1,"icon"],iconTone:[1,"iconTone"],title:[1,"title"],subtitle:[1,"subtitle"],variant:[1,"variant"],level:[1,"level"],headingId:[1,"headingId"]},ngContentSelectors:T,decls:8,vars:5,consts:[[1,"et-icon"],[1,"et-main"],[1,"et-row"],["role","heading",1,"et-label"],[1,"et-action"],[1,"et-sub"],[3,"name","size"]],template:function(e,n){if(e&1&&(C(O),p(0,w,2,2,"span",0),r(1,"span",1)(2,"span",2)(3,"span",3),m(4),l(),r(5,"span",4),x(6),l()(),p(7,z,2,1,"span",5),l()),e&2){let c,d;f((c=n.icon())?0:-1,c),i(3),_("id",n.headingId())("aria-level",n.level()),i(),g(n.title()),i(3),f((d=n.subtitle())?7:-1,d)}},dependencies:[b],styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--fold-space-md);
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
  gap: var(--fold-space-sm);
}

.et-label[_ngcontent-%COMP%] {
  min-width: 0;
  font-family: var(--fold-font-label);
  font-size: var(--fold-text-2xs);
  font-weight: var(--fold-weight-bold);
  letter-spacing: var(--fold-tracking-caps);
  text-transform: uppercase;
  color: var(--fold-color-text-muted);
}

.v-bar[_nghost-%COMP%]   .et-label[_ngcontent-%COMP%] {
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-secondary);
}

.v-title[_nghost-%COMP%]   .et-label[_ngcontent-%COMP%] {
  font-size: var(--fold-text-base);
  letter-spacing: var(--fold-tracking-normal);
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
  gap: var(--fold-space-sm);
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
}`]})}export{s as FoldElementTitleComponent};
