import{u as o,a0 as d,X as f,A as _,ɵ as m,y as r,e as s,w as u,z as p,D as x,j as l,l as c,x as b,q as C}from"./index-CVAlbNew.js";import{F as g}from"./common-labels-Cz4X0o6H.js";function L(n,a){n&1&&(r(0,"span",0),s(1,"*"),p())}function v(n,a){if(n&1&&(r(0,"span",1),s(1),p()),n&2){const t=C();l(),c("(",t.optionalWord(),")")}}class i{text=o.required();for=o();required=o(!1,{transform:d});optional=o(!1,{transform:d});optionalLabel=o();common=f(g);optionalWord=_(()=>this.optionalLabel()??this.common.optional);static ɵfac=function(t){return new(t||i)};static ɵcmp=m({type:i,selectors:[["fold-label"]],inputs:{text:[1,"text"],for:[1,"for"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"]},decls:4,vars:3,consts:[["aria-hidden","true",1,"req"],[1,"opt"]],template:function(t,e){t&1&&(r(0,"label"),s(1),u(2,L,2,0,"span",0)(3,v,2,1,"span",1),p()),t&2&&(x("for",e.for()),l(),c("",e.text()," "),l(),b(e.required()?2:e.optional()?3:-1))},styles:[`[_nghost-%COMP%] {
  display: block;
}

label[_ngcontent-%COMP%] {
  font-size: var(--fold-text-xs);
  font-weight: var(--fold-weight-semibold);
  color: var(--fold-color-text-secondary);
}

.req[_ngcontent-%COMP%] {
  color: var(--fold-color-alert-text);
  margin-left: 2px;
}

.opt[_ngcontent-%COMP%] {
  margin-left: var(--fold-space-xs);
  font-weight: var(--fold-weight-medium);
  color: var(--fold-color-text-muted);
}`]})}export{i as FoldLabelComponent};
