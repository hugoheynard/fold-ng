import{u as t,a0 as p,X as c,A as _,ɵ as m,y as r,e as s,w as u,z as d,D as x,j as l,l as f,x as b,q as C}from"./index-CvaVehfM.js";import{F as g}from"./common-labels-BlRTTk3V.js";function L(n,a){n&1&&(r(0,"span",0),s(1,"*"),d())}function v(n,a){if(n&1&&(r(0,"span",1),s(1),d()),n&2){const o=C();l(),f("(",o.optionalWord(),")")}}class i{text=t.required();for=t();required=t(!1,{transform:p});optional=t(!1,{transform:p});optionalLabel=t();common=c(g);optionalWord=_(()=>this.optionalLabel()??this.common.optional);static ɵfac=function(o){return new(o||i)};static ɵcmp=m({type:i,selectors:[["fold-label"]],inputs:{text:[1,"text"],for:[1,"for"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"]},decls:4,vars:3,consts:[["aria-hidden","true",1,"req"],[1,"opt"]],template:function(o,e){o&1&&(r(0,"label"),s(1),u(2,L,2,0,"span",0)(3,v,2,1,"span",1),d()),o&2&&(x("for",e.for()),l(),f("",e.text()," "),l(),b(e.required()?2:e.optional()?3:-1))},styles:[`[_nghost-%COMP%] {
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
  color: var(--fold-color-text-faded);
}`]})}export{i as FoldLabelComponent};
