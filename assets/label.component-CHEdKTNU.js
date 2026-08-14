import{u as o,a0 as c,X as _,A as f,ɵ as m,y as i,e as s,w as u,z as p,D as x,j as l,l as d,x as b,q as C}from"./index-BpnHZqq2.js";import{F as L}from"./common-labels-DmS0M1H_.js";function g(n,a){n&1&&(i(0,"span",0),s(1,"*"),p())}function q(n,a){if(n&1&&(i(0,"span",1),s(1),p()),n&2){const t=C();l(),d("(",t.optionalWord(),")")}}class r{text=o.required();for=o();required=o(!1,{transform:c});optional=o(!1,{transform:c});optionalLabel=o();common=_(L);optionalWord=f(()=>this.optionalLabel()??this.common.optional);static ɵfac=function(t){return new(t||r)};static ɵcmp=m({type:r,selectors:[["fold-label"]],inputs:{text:[1,"text"],for:[1,"for"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"]},decls:4,vars:3,consts:[["aria-hidden","true",1,"req"],[1,"opt"]],template:function(t,e){t&1&&(i(0,"label"),s(1),u(2,g,2,0,"span",0)(3,q,2,1,"span",1),p()),t&2&&(x("for",e.for()),l(),d("",e.text()," "),l(),b(e.required()?2:e.optional()?3:-1))},styles:[`[_nghost-%COMP%] {
  display: block;
}

label[_ngcontent-%COMP%] {
  font-size: var(--fold-text-xs);
  font-weight: 600;
  color: var(--fold-color-text-secondary);
}

.req[_ngcontent-%COMP%] {
  color: var(--fold-color-alert-text);
  margin-left: 2px;
}

.opt[_ngcontent-%COMP%] {
  margin-left: var(--fold-space-xs);
  font-weight: 500;
  color: var(--fold-color-text-faded);
}`]})}export{r as FoldLabelComponent};
