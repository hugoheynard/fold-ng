import{x as n,K as _,ɵ as d,M as i,e as s,I as c,O as p,P as m,j as l,l as f,J as x,q as u}from"./index-CyC2HW3E.js";function b(o,a){o&1&&(i(0,"span",0),s(1,"*"),p())}function C(o,a){if(o&1&&(i(0,"span",1),s(1),p()),o&2){const t=u();l(),f("(",t.optionalLabel(),")")}}class r{text=n.required();for=n();required=n(!1,{transform:_});optional=n(!1,{transform:_});optionalLabel=n("optional");static ɵfac=function(t){return new(t||r)};static ɵcmp=d({type:r,selectors:[["fold-label"]],inputs:{text:[1,"text"],for:[1,"for"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"]},decls:4,vars:3,consts:[["aria-hidden","true",1,"req"],[1,"opt"]],template:function(t,e){t&1&&(i(0,"label"),s(1),c(2,b,2,0,"span",0)(3,C,2,1,"span",1),p()),t&2&&(m("for",e.for()),l(),f("",e.text()," "),l(),x(e.required()?2:e.optional()?3:-1))},styles:[`[_nghost-%COMP%] {
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
  margin-left: 4px;
  font-weight: 500;
  color: var(--fold-color-text-faded);
}`]})}export{r as FoldLabelComponent};
