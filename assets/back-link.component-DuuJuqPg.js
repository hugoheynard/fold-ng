import{X as u,bD as b,u as l,ɵ as k,R as C,F as x,w as g,x as h,d as t,g as d,e as f,f as m,q as c,m as r,j as i,k as p,E as v,B as L,t as O,N as M,O as P}from"./index-Bm0v4t0h.js";function y(e,o){if(e&1&&(t(0,"a",0),d(1,"fold-icon",3),t(2,"span"),f(3),m()()),e&2){const n=c();r("routerLink",o),i(),r("name",n.icon()),i(2),p(n.label())}}function B(e,o){if(e&1&&(t(0,"a",1),d(1,"fold-icon",3),t(2,"span"),f(3),m()()),e&2){const n=c();r("href",o,O),i(),r("name",n.icon()),i(2),p(n.label())}}function F(e,o){if(e&1){const n=v();t(0,"button",4),L("click",function(){M(n);const a=c();return P(a.goBack())}),d(1,"fold-icon",3),t(2,"span"),f(3),m()()}if(e&2){const n=c();i(),r("name",n.icon()),i(2),p(n.label())}}class _{location=u(b);label=l("Back");routerLink=l();href=l();icon=l("chevron-left");goBack(){this.location.back()}static ɵfac=function(n){return new(n||_)};static ɵcmp=k({type:_,selectors:[["fold-back-link"]],inputs:{label:[1,"label"],routerLink:[1,"routerLink"],href:[1,"href"],icon:[1,"icon"]},decls:3,vars:1,consts:[[1,"bl",3,"routerLink"],[1,"bl",3,"href"],["type","button",1,"bl"],["size","sm","aria-hidden","true",1,"bl-icon",3,"name"],["type","button",1,"bl",3,"click"]],template:function(n,s){if(n&1&&g(0,y,4,3,"a",0)(1,B,4,3,"a",1)(2,F,4,2,"button",2),n&2){let a;h((a=s.routerLink())?0:(a=s.href())?1:2,a)}},dependencies:[C,x],styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  display: inline-flex;
}

.bl[_ngcontent-%COMP%] {
  all: unset;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.25rem 0.4rem 0.25rem 0.25rem;
  border-radius: var(--fold-radius-sm, 8px);
  color: var(--fold-color-text-muted);
  font-size: var(--fold-text-sm, 0.875rem);
  cursor: pointer;
  transition: color var(--fold-motion-fast);
}
.bl[_ngcontent-%COMP%]:hover {
  color: var(--fold-color-text);
}
.bl[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary-border);
  outline-offset: 0;
}
@media (prefers-reduced-motion: reduce) {
  .bl[_ngcontent-%COMP%] {
    transition: none;
  }
}


.bl-icon[_ngcontent-%COMP%] {
  flex: none;
  transition: transform var(--fold-motion-fast);
}

.bl[_ngcontent-%COMP%]:hover   .bl-icon[_ngcontent-%COMP%] {
  transform: translateX(-2px);
}

@media (prefers-reduced-motion: reduce) {
  .bl[_ngcontent-%COMP%]:hover   .bl-icon[_ngcontent-%COMP%] {
    transform: none;
  }
}`]})}export{_ as FoldBackLinkComponent};
