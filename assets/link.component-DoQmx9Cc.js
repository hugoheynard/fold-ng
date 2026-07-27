import{u as i,W as C,am as b,N as x,ɵ as h,ao as O,F as w,X as v,A as T,w as _,j as s,x as c,H as y,d as p,Y as F,f as m,q as r,as as f,$ as u,m as a,Z as P,S as M,T as L,g,t as I,U as V,V as j,I as z}from"./index-CkL4IWB-.js";const R=["*"];function S(t,o){t&1&&g(0,"fold-icon",3),t&2&&a("name",o)}function A(t,o){t&1&&g(0,"fold-icon",3),t&2&&a("name",o)}function B(t,o){if(t&1&&(_(0,S,1,1,"fold-icon",3),p(1,"span",4),F(2),m(),_(3,A,1,1,"fold-icon",3)),t&2){let n,e;const l=r();c((n=l.icon())?0:-1,n),s(3),c((e=l.trailingIcon())?3:-1,e)}}function E(t,o){if(t&1&&(p(0,"a",1),f(1,5),m()),t&2){const n=r(),e=u(1);a("href",o,I),P("target",n.target()??null)("rel",n.resolvedRel()),s(),a("ngTemplateOutlet",e)}}function H(t,o){if(t&1){const n=M();p(0,"button",6),L("click",function(l){V(n);const k=r();return j(k.clicked.emit(l))}),f(1,5),m()}if(t&2){const n=r(),e=u(1);a("disabled",n.disabled()),s(),a("ngTemplateOutlet",e)}}class d{icon=i();trailingIcon=i();tone=i("accent");href=i();target=i();rel=i();disabled=i(!1,{transform:C});clicked=b();resolvedRel=x(()=>this.rel()??(this.target()==="_blank"?"noopener noreferrer":null));static ɵfac=function(n){return new(n||d)};static ɵcmp=h({type:d,selectors:[["fold-link"]],hostVars:2,hostBindings:function(n,e){n&2&&y("tone-muted",e.tone()==="muted")},inputs:{icon:[1,"icon"],trailingIcon:[1,"trailingIcon"],tone:[1,"tone"],href:[1,"href"],target:[1,"target"],rel:[1,"rel"],disabled:[1,"disabled"]},outputs:{clicked:"clicked"},ngContentSelectors:R,decls:4,vars:1,consts:[["inner",""],[1,"lnk",3,"href"],["type","button",1,"lnk",3,"disabled"],["size","sm",3,"name"],[1,"lnk-label"],[3,"ngTemplateOutlet"],["type","button",1,"lnk",3,"click","disabled"]],template:function(n,e){if(n&1&&(v(),T(0,B,4,2,"ng-template",null,0,z),_(2,E,2,4,"a",1)(3,H,2,2,"button",2)),n&2){let l;s(2),c((l=e.href())?2:3,l)}},dependencies:[O,w],styles:[`[_nghost-%COMP%] {
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
