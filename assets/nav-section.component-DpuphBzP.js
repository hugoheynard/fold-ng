import{u as a,X as p,ag as f,ɵ as _,F as m,a1 as g,d as l,w as v,e as u,f as d,a2 as b,j as t,x as h,m as c,k as x,D as C,W as w,g as y}from"./index-CVAlbNew.js";const P=["*"];function F(i,e){i&1&&(l(0,"span",1),y(1,"fold-icon",3),d()),i&2&&(t(),c("name",e)("size",14))}class s{label=a.required();color=a();icon=a();headId=p(f).next("fold-nav-section");static ɵfac=function(o){return new(o||s)};static ɵcmp=_({type:s,selectors:[["fold-nav-section"]],hostAttrs:["role","group",1,"fold-nav-section"],hostVars:4,hostBindings:function(o,n){o&2&&(C("aria-labelledby",n.headId)("data-tinted",n.color()?"":null),w("--fold-nav-section-color",n.color()??null))},inputs:{label:[1,"label"],color:[1,"color"],icon:[1,"icon"]},ngContentSelectors:P,decls:5,vars:3,consts:[[1,"ns-head"],["aria-hidden","true",1,"ns-pastille"],[1,"ns-label",3,"id"],[3,"name","size"]],template:function(o,n){if(o&1&&(g(),l(0,"div",0),v(1,F,2,2,"span",1),l(2,"span",2),u(3),d()(),b(4)),o&2){let r;t(),h((r=n.icon())?1:-1,r),t(),c("id",n.headId),t(),x(n.label())}},dependencies:[m],styles:[`@charset "UTF-8";








[_nghost-%COMP%] {
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: subgrid;
  grid-auto-rows: max-content;
  gap: var(--fold-space-sm);
  padding-block-start: var(--fold-space-sm);
}



[data-tinted][_nghost-%COMP%] {
  --fold-nl-section-tint: color-mix(
    in srgb,
    var(--fold-nav-section-color) 14%,
    transparent
  );
  --fold-nl-section-border: color-mix(
    in srgb,
    var(--fold-nav-section-color) 40%,
    var(--fold-color-border)
  );
}

.ns-head[_ngcontent-%COMP%] {
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  gap: var(--fold-space-sm);
  min-width: 0;
}

.ns-pastille[_ngcontent-%COMP%] {
  flex: none;
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-raised);
  color: var(--fold-color-text-secondary);
}

[data-tinted][_nghost-%COMP%]   .ns-pastille[_ngcontent-%COMP%] {
  

  background: color-mix(in srgb, var(--fold-nav-section-color) 22%, transparent);
  color: var(--fold-nav-section-color);
}

.ns-label[_ngcontent-%COMP%] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: var(--fold-text-xs);
  font-weight: var(--fold-weight-bold);
  letter-spacing: var(--fold-tracking-caps);
  text-transform: uppercase;
  color: var(--fold-color-text-muted);
}

@media (forced-colors: active) {
  .ns-pastille[_ngcontent-%COMP%] {
    border: 1px solid CanvasText;
  }
}`]})}export{s as FoldNavSectionComponent};
