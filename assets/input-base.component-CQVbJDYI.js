import{u as i,a0 as m,ɵ as L,a1 as h,w as p,a2 as v,x as s,j as l,d as f,g as b,f as d,q as a,m as u,e as x,D as C,l as g}from"./index-CvaVehfM.js";import{FoldInfoComponent as F}from"./info.component-BLq1dAUq.js";import{FoldLabelComponent as q}from"./label.component-Bsm4VPGn.js";import"./common-labels-BlRTTk3V.js";import"./popover.component-CU7aRmmu.js";import"./auto-update-_srfpL1Q.js";import"./popover-trigger.directive-BNHRqLEx.js";const w=["*"];function y(o,t){if(o&1&&b(0,"fold-info",4),o&2){const n=a(2);u("text",t)("label",n.infoLabel())}}function I(o,t){if(o&1&&(f(0,"div",0),b(1,"fold-label",3),p(2,y,1,2,"fold-info",4),d()),o&2){let n;const e=a();l(),u("text",t)("for",e.for())("required",e.required())("optional",e.optional())("optionalLabel",e.optionalLabel()),l(),s((n=e.info())?2:-1,n)}}function B(o,t){if(o&1&&(f(0,"p",1),x(1),d()),o&2){const n=a();C("id",n.for()?n.for()+"-error":null),l(),g(" ",t," ")}}function M(o,t){if(o&1&&(f(0,"p",2),x(1),d()),o&2){const n=a();C("id",n.for()?n.for()+"-hint":null),l(),g(" ",t," ")}}class _{label=i();for=i();required=i(!1,{transform:m});optional=i(!1,{transform:m});optionalLabel=i();hint=i();error=i();info=i();infoLabel=i();static ɵfac=function(n){return new(n||_)};static ɵcmp=L({type:_,selectors:[["fold-input-base"]],inputs:{label:[1,"label"],for:[1,"for"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"],hint:[1,"hint"],error:[1,"error"],info:[1,"info"],infoLabel:[1,"infoLabel"]},ngContentSelectors:w,decls:4,vars:2,consts:[[1,"ib-label-row"],["role","alert",1,"ib-msg","ib-error"],[1,"ib-msg","ib-hint"],[3,"text","for","required","optional","optionalLabel"],[3,"text","label"]],template:function(n,e){if(n&1&&(h(),p(0,I,3,6,"div",0),v(1),p(2,B,2,2,"p",1)(3,M,2,2,"p",2)),n&2){let c,r;s((c=e.label())?0:-1,c),l(2),s((r=e.error())?2:(r=e.hint())?3:-1,r)}},dependencies:[q,F],styles:[`[_nghost-%COMP%] {
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
}

.ib-label-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--fold-space-xs);
  min-width: 0;
}`]})}export{_ as FoldInputBaseComponent};
