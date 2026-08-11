import{u as i,ɵ as c,ai as r,d as l,g as _,w as m,f as d,j as n,m as p,x as f,e as g,q as x,k as u}from"./index-CrYE53GN.js";function C(s,a){if(s&1&&(l(0,"span"),g(1),d()),s&2){const e=x();n(),u(e.message())}}class t{message=i("Loading...");size=i("md");static ɵfac=function(e){return new(e||t)};static ɵcmp=c({type:t,selectors:[["fold-loading"]],hostAttrs:["role","status","aria-live","polite"],inputs:{message:[1,"message"],size:[1,"size"]},decls:3,vars:2,consts:[[1,"loading"],["aria-hidden","true",3,"size"]],template:function(e,o){e&1&&(l(0,"div",0),_(1,"fold-spinner",1),m(2,C,2,1,"span"),d()),e&2&&(n(),p("size",o.size()),n(),f(o.message()?2:-1))},dependencies:[r],styles:[`[_nghost-%COMP%] {
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
