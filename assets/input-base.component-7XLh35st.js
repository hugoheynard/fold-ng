import{x as e,K as _,ɵ as C,L as g,I as f,N as h,J as c,j as r,g as L,q as p,m as q,d,e as m,f as u,P as b,l as x}from"./index-D-lQL22u.js";import{FoldLabelComponent as F}from"./label.component-B3hqBSxZ.js";const I=["*"];function v(o,n){if(o&1&&L(0,"fold-label",0),o&2){const t=p();q("text",n)("for",t.for())("required",t.required())("optional",t.optional())("optionalLabel",t.optionalLabel())}}function y(o,n){if(o&1&&(d(0,"p",1),m(1),u()),o&2){const t=p();b("id",t.for()?t.for()+"-error":null),r(),x(" ",n," ")}}function P(o,n){if(o&1&&(d(0,"p",2),m(1),u()),o&2){const t=p();b("id",t.for()?t.for()+"-hint":null),r(),x(" ",n," ")}}class i{label=e();for=e();required=e(!1,{transform:_});optional=e(!1,{transform:_});optionalLabel=e("optional");hint=e();error=e();static ɵfac=function(t){return new(t||i)};static ɵcmp=C({type:i,selectors:[["fold-input-base"]],inputs:{label:[1,"label"],for:[1,"for"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"],hint:[1,"hint"],error:[1,"error"]},ngContentSelectors:I,decls:4,vars:2,consts:[[3,"text","for","required","optional","optionalLabel"],["role","alert",1,"ib-msg","ib-error"],[1,"ib-msg","ib-hint"]],template:function(t,l){if(t&1&&(g(),f(0,v,1,5,"fold-label",0),h(1),f(2,y,2,2,"p",1)(3,P,2,2,"p",2)),t&2){let s,a;c((s=l.label())?0:-1,s),r(2),c((a=l.error())?2:(a=l.hint())?3:-1,a)}},dependencies:[F],styles:[`[_nghost-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
}

.ib-msg[_ngcontent-%COMP%] {
  margin: 0;
  font-size: var(--fold-text-xs);
}

.ib-hint[_ngcontent-%COMP%] {
  color: var(--fold-color-text-muted);
}

.ib-error[_ngcontent-%COMP%] {
  color: var(--fold-color-alert-text);
}`]})}export{i as FoldInputBaseComponent};
