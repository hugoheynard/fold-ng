import{x as i,K as k,az as b,y as x,ɵ as h,aA as O,F as v,L as w,W as y,I as s,j as _,J as c,D as P,d as p,N as F,f as m,q as r,aC as f,Q as u,m as a,P as T,B as M,C as L,g,t as I,E as z,H as V,Z as j}from"./index-DmFeHmC3.js";const B=["*"];function E(t,o){t&1&&g(0,"fold-icon",3),t&2&&a("name",o)}function R(t,o){t&1&&g(0,"fold-icon",3),t&2&&a("name",o)}function A(t,o){if(t&1&&(s(0,E,1,1,"fold-icon",3),p(1,"span",4),F(2),m(),s(3,R,1,1,"fold-icon",3)),t&2){let n,e;const l=r();c((n=l.icon())?0:-1,n),_(3),c((e=l.trailingIcon())?3:-1,e)}}function D(t,o){if(t&1&&(p(0,"a",1),f(1,5),m()),t&2){const n=r(),e=u(1);a("href",o,I),T("target",n.target()??null)("rel",n.resolvedRel()),_(),a("ngTemplateOutlet",e)}}function H(t,o){if(t&1){const n=M();p(0,"button",6),L("click",function(l){z(n);const C=r();return V(C.clicked.emit(l))}),f(1,5),m()}if(t&2){const n=r(),e=u(1);a("disabled",n.disabled()),_(),a("ngTemplateOutlet",e)}}class d{icon=i();trailingIcon=i();tone=i("accent");href=i();target=i();rel=i();disabled=i(!1,{transform:k});clicked=b();resolvedRel=x(()=>this.rel()??(this.target()==="_blank"?"noopener noreferrer":null));static ɵfac=function(n){return new(n||d)};static ɵcmp=h({type:d,selectors:[["fold-link"]],hostVars:2,hostBindings:function(n,e){n&2&&P("tone-muted",e.tone()==="muted")},inputs:{icon:[1,"icon"],trailingIcon:[1,"trailingIcon"],tone:[1,"tone"],href:[1,"href"],target:[1,"target"],rel:[1,"rel"],disabled:[1,"disabled"]},outputs:{clicked:"clicked"},ngContentSelectors:B,decls:4,vars:1,consts:[["inner",""],[1,"lnk",3,"href"],["type","button",1,"lnk",3,"disabled"],["size","sm",3,"name"],[1,"lnk-label"],[3,"ngTemplateOutlet"],["type","button",1,"lnk",3,"click","disabled"]],template:function(n,e){if(n&1&&(w(),y(0,A,4,2,"ng-template",null,0,j),s(2,D,2,4,"a",1)(3,H,2,2,"button",2)),n&2){let l;_(2),c((l=e.href())?2:3,l)}},dependencies:[O,v],styles:[`[_nghost-%COMP%] {
  display: inline-flex;
  min-width: 0;
}

.lnk[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  padding: 0;
  border: 0;
  background: none;
  font-family: inherit;
  font-size: var(--fold-text-xs);
  font-weight: 600;
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
