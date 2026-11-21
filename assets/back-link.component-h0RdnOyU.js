import{X as p,bD as b,u as t,ɵ as k,R as g,F as C,w as P,x,d as a,g as m,e as d,f as u,q as s,m as l,j as r,k as f,E as y,B as h,t as v,N as q,O as L}from"./index-BDc134jy.js";function O(e,o){if(e&1&&(a(0,"a",0),m(1,"fold-icon",3),a(2,"span"),d(3),u()()),e&2){const n=s();l("routerLink",o)("queryParams",n.queryParams())("queryParamsHandling",n.queryParamsHandling())("state",n.state()),r(),l("name",n.icon()),r(2),f(n.label())}}function M(e,o){if(e&1&&(a(0,"a",1),m(1,"fold-icon",3),a(2,"span"),d(3),u()()),e&2){const n=s();l("href",o,v),r(),l("name",n.icon()),r(2),f(n.label())}}function B(e,o){if(e&1){const n=y();a(0,"button",4),h("click",function(){q(n);const i=s();return L(i.goBack())}),m(1,"fold-icon",3),a(2,"span"),d(3),u()()}if(e&2){const n=s();r(),l("name",n.icon()),r(2),f(n.label())}}class _{location=p(b);label=t("Back");routerLink=t();queryParams=t();queryParamsHandling=t();state=t();href=t();icon=t("chevron-left");goBack(){this.location.back()}static ɵfac=function(n){return new(n||_)};static ɵcmp=k({type:_,selectors:[["fold-back-link"]],inputs:{label:[1,"label"],routerLink:[1,"routerLink"],queryParams:[1,"queryParams"],queryParamsHandling:[1,"queryParamsHandling"],state:[1,"state"],href:[1,"href"],icon:[1,"icon"]},decls:3,vars:1,consts:[[1,"bl",3,"routerLink","queryParams","queryParamsHandling","state"],[1,"bl",3,"href"],["type","button",1,"bl"],["size","sm","aria-hidden","true",1,"bl-icon",3,"name"],["type","button",1,"bl",3,"click"]],template:function(n,c){if(n&1&&P(0,O,4,6,"a",0)(1,M,4,3,"a",1)(2,B,4,2,"button",2),n&2){let i;x((i=c.routerLink())?0:(i=c.href())?1:2,i)}},dependencies:[g,C],styles:[`@charset "UTF-8";
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
  outline: 2px solid var(--fold-color-primary);
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
