import{u as i,a0 as C,ap as b,A as x,ɵ as h,ar as O,F as v,a1 as w,H as y,w as _,j as s,x as c,L as F,d as p,a2 as P,f as m,q as r,au as f,a3 as u,m as a,D as T,E as M,B as L,g,t as I,N as V,O as j,Q as z}from"./index-4XDcEdxi.js";const B=["*"];function E(e,o){e&1&&g(0,"fold-icon",3),e&2&&a("name",o)}function R(e,o){e&1&&g(0,"fold-icon",3),e&2&&a("name",o)}function A(e,o){if(e&1&&(_(0,E,1,1,"fold-icon",3),p(1,"span",4),P(2),m(),_(3,R,1,1,"fold-icon",3)),e&2){let n,t;const l=r();c((n=l.icon())?0:-1,n),s(3),c((t=l.trailingIcon())?3:-1,t)}}function D(e,o){if(e&1&&(p(0,"a",1),f(1,5),m()),e&2){const n=r(),t=u(1);a("href",o,I),T("target",n.target()??null)("rel",n.resolvedRel()),s(),a("ngTemplateOutlet",t)}}function H(e,o){if(e&1){const n=M();p(0,"button",6),L("click",function(l){V(n);const k=r();return j(k.clicked.emit(l))}),f(1,5),m()}if(e&2){const n=r(),t=u(1);a("disabled",n.disabled()),s(),a("ngTemplateOutlet",t)}}class d{icon=i();trailingIcon=i();tone=i("accent");href=i();target=i();rel=i();disabled=i(!1,{transform:C});clicked=b();resolvedRel=x(()=>this.rel()??(this.target()==="_blank"?"noopener noreferrer":null));static ɵfac=function(n){return new(n||d)};static ɵcmp=h({type:d,selectors:[["fold-link"]],hostVars:2,hostBindings:function(n,t){n&2&&F("tone-muted",t.tone()==="muted")},inputs:{icon:[1,"icon"],trailingIcon:[1,"trailingIcon"],tone:[1,"tone"],href:[1,"href"],target:[1,"target"],rel:[1,"rel"],disabled:[1,"disabled"]},outputs:{clicked:"clicked"},ngContentSelectors:B,decls:4,vars:1,consts:[["inner",""],[1,"lnk",3,"href"],["type","button",1,"lnk",3,"disabled"],["size","sm",3,"name"],[1,"lnk-label"],[3,"ngTemplateOutlet"],["type","button",1,"lnk",3,"click","disabled"]],template:function(n,t){if(n&1&&(w(),y(0,A,4,2,"ng-template",null,0,z),_(2,D,2,4,"a",1)(3,H,2,2,"button",2)),n&2){let l;s(2),c((l=t.href())?2:3,l)}},dependencies:[O,v],styles:[`[_nghost-%COMP%] {
  display: inline-flex;
  min-width: 0;
}

.lnk[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: var(--fold-space-sm);
  min-width: 0;
  padding: 0;
  border: 0;
  background: none;
  font-family: inherit;
  font-size: var(--fold-text-xs);
  font-weight: var(--fold-weight-semibold);
  color: var(--fold-color-primary);
  text-decoration: none;
  cursor: pointer;
  transition: color var(--fold-motion-fast);
}

.tone-muted[_nghost-%COMP%]   .lnk[_ngcontent-%COMP%] {
  color: var(--fold-color-text-secondary);
}

.lnk[_ngcontent-%COMP%]:hover   .lnk-label[_ngcontent-%COMP%] {
  text-decoration: underline;
}

.lnk[_ngcontent-%COMP%]:disabled {
  color: var(--fold-color-text-muted);
  cursor: not-allowed;
}

.lnk[_ngcontent-%COMP%]:disabled   .lnk-label[_ngcontent-%COMP%] {
  text-decoration: none;
}

.lnk-label[_ngcontent-%COMP%] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`]})}export{d as FoldLinkComponent};
