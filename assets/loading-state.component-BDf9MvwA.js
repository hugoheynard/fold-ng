import{u as l,X as c,A as p,ɵ as r,ah as _,d,g as f,w as g,f as m,j as n,m as u,x,e as C,k as v}from"./index-qfVwsMqT.js";import{F as y}from"./common-labels-DeAcNQhl.js";function z(a,t){a&1&&(d(0,"span"),C(1),m()),a&2&&(n(),v(t))}class s{message=l();size=l("md");common=c(y);text=p(()=>this.message()??this.common.loading);static ɵfac=function(e){return new(e||s)};static ɵcmp=r({type:s,selectors:[["fold-loading"]],hostAttrs:["role","status","aria-live","polite"],inputs:{message:[1,"message"],size:[1,"size"]},decls:3,vars:2,consts:[[1,"loading"],["aria-hidden","true",3,"size"]],template:function(e,o){if(e&1&&(d(0,"div",0),f(1,"fold-spinner",1),g(2,z,2,1,"span"),m()),e&2){let i;n(),u("size",o.size()),n(),x((i=o.text())?2:-1,i)}},dependencies:[_],styles:[`[_nghost-%COMP%] {
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
}`]})}export{s as FoldLoadingStateComponent};
