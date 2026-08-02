import{u as e,X as _,ɵ as C,Y as g,w as f,Z as h,x as c,j as i,g as q,q as s,m as L,d,e as m,f as u,D as b,l as x}from"./index-B6Le7PBg.js";import{FoldLabelComponent as v}from"./label.component-CCnK_2pk.js";const F=["*"];function y(t,n){if(t&1&&q(0,"fold-label",0),t&2){const o=s();L("text",n)("for",o.for())("required",o.required())("optional",o.optional())("optionalLabel",o.optionalLabel())}}function I(t,n){if(t&1&&(d(0,"p",1),m(1),u()),t&2){const o=s();b("id",o.for()?o.for()+"-error":null),i(),x(" ",n," ")}}function B(t,n){if(t&1&&(d(0,"p",2),m(1),u()),t&2){const o=s();b("id",o.for()?o.for()+"-hint":null),i(),x(" ",n," ")}}class r{label=e();for=e();required=e(!1,{transform:_});optional=e(!1,{transform:_});optionalLabel=e("optional");hint=e();error=e();static ɵfac=function(o){return new(o||r)};static ɵcmp=C({type:r,selectors:[["fold-input-base"]],inputs:{label:[1,"label"],for:[1,"for"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"],hint:[1,"hint"],error:[1,"error"]},ngContentSelectors:F,decls:4,vars:2,consts:[[3,"text","for","required","optional","optionalLabel"],["role","alert",1,"ib-msg","ib-error"],[1,"ib-msg","ib-hint"]],template:function(o,a){if(o&1&&(g(),f(0,y,1,5,"fold-label",0),h(1),f(2,I,2,2,"p",1)(3,B,2,2,"p",2)),o&2){let p,l;c((p=a.label())?0:-1,p),i(2),c((l=a.error())?2:(l=a.hint())?3:-1,l)}},dependencies:[v],styles:[`[_nghost-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--fold-space-xs);
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
}`]})}export{r as FoldInputBaseComponent};
