import{u as a,v as C,T as k,ɵ as b,a1 as x,F as h,w as O,a3 as w,K as s,j as c,L as r,z as F,d as p,x as T,f as m,q as _,a6 as f,O as u,m as l,G as v,H as y,g,t as P,I as M,J as L,a4 as I}from"./index-CheKRm5v.js";const z=["*"];function V(t,e){t&1&&g(0,"fold-icon",3),t&2&&l("name",e)}function j(t,e){t&1&&g(0,"fold-icon",3),t&2&&l("name",e)}function B(t,e){if(t&1&&(s(0,V,1,1,"fold-icon",3),p(1,"span",4),T(2),m(),s(3,j,1,1,"fold-icon",3)),t&2){let n,o;const i=_();r((n=i.icon())?0:-1,n),c(3),r((o=i.trailingIcon())?3:-1,o)}}function E(t,e){if(t&1&&(p(0,"a",1),f(1,5),m()),t&2){_();const n=u(1);l("href",e,P),c(),l("ngTemplateOutlet",n)}}function H(t,e){if(t&1){const n=v();p(0,"button",6),y("click",function(){M(n);const i=_();return L(i.clicked.emit())}),f(1,5),m()}if(t&2){const n=_(),o=u(1);l("disabled",n.disabled()),c(),l("ngTemplateOutlet",o)}}class d{icon=a();trailingIcon=a();tone=a("accent");href=a();disabled=a(!1,{transform:C});clicked=k();static ɵfac=function(n){return new(n||d)};static ɵcmp=b({type:d,selectors:[["fold-link"]],hostVars:2,hostBindings:function(n,o){n&2&&F("tone-muted",o.tone()==="muted")},inputs:{icon:[1,"icon"],trailingIcon:[1,"trailingIcon"],tone:[1,"tone"],href:[1,"href"],disabled:[1,"disabled"]},outputs:{clicked:"clicked"},ngContentSelectors:z,decls:4,vars:1,consts:[["inner",""],[1,"lnk",3,"href"],["type","button",1,"lnk",3,"disabled"],["size","sm",3,"name"],[1,"lnk-label"],[3,"ngTemplateOutlet"],["type","button",1,"lnk",3,"click","disabled"]],template:function(n,o){if(n&1&&(O(),w(0,B,4,2,"ng-template",null,0,I),s(2,E,2,2,"a",1)(3,H,2,2,"button",2)),n&2){let i;c(2),r((i=o.href())?2:3,i)}},dependencies:[x,h],styles:[`[_nghost-%COMP%] {
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
}`]})}export{d as F};
