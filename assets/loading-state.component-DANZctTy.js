import{u as i,ɵ as r,d as l,g as m,w as c,f as d,j as n,m as p,x as _,e as f,q as g,k as x}from"./index-kxEpaZ9_.js";import{FoldSpinnerComponent as u}from"./spinner.component-BSlcnKTo.js";import"./tokens.catalog-DF_6rd51.js";function C(s,a){if(s&1&&(l(0,"span"),f(1),d()),s&2){const e=g();n(),x(e.message())}}class t{message=i("Loading...");size=i("md");static ɵfac=function(e){return new(e||t)};static ɵcmp=r({type:t,selectors:[["fold-loading"]],hostAttrs:["role","status","aria-live","polite"],inputs:{message:[1,"message"],size:[1,"size"]},decls:3,vars:2,consts:[[1,"loading"],["aria-hidden","true",3,"size"]],template:function(e,o){e&1&&(l(0,"div",0),m(1,"fold-spinner",1),c(2,C,2,1,"span"),d()),e&2&&(n(),p("size",o.size()),n(),_(o.message()?2:-1))},dependencies:[u],styles:[`[_nghost-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.loading[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--fold-space-sm);
  color: var(--fold-color-text-muted);
  font-size: var(--fold-text-sm);
}`]})}export{t as FoldLoadingStateComponent};
