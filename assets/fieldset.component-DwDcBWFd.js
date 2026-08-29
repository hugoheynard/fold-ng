import{X as m,ag as C,u as o,a0 as b,A as p,ɵ as u,a1 as v,y as l,w as s,a2 as P,z as d,ai as w,aU as M,an as g,D as O,j as i,x as r,e as c,q as f,l as h,k as x}from"./index-CLSi-FzM.js";import{F}from"./common-labels-DfybcD8W.js";const y=["*"],L=(e,a,n)=>[e,a,n];function I(e,a){if(e&1&&(l(0,"span",3),c(1),d()),e&2){const n=f(2);i(),h("(",n.optionalWord(),")")}}function T(e,a){if(e&1&&(l(0,"span",4),c(1),d()),e&2){const n=f(2);g("id",n.hintId),i(),x(n.hint())}}function k(e,a){if(e&1&&(l(0,"legend",1),c(1),s(2,I,2,1,"span",3),s(3,T,2,2,"span",4),d()),e&2){const n=f();i(),h(" ",n.legend()," "),i(),r(n.optional()?2:-1),i(),r(n.hint()!==""&&n.hintPosition()==="inline"?3:-1)}}function z(e,a){if(e&1&&(l(0,"p",2),c(1),d()),e&2){const n=f();g("id",n.hintId),i(),x(n.hint())}}class _{ids=m(C);legend=o("");ariaLabel=o("");hint=o("");optional=o(!1,{transform:b});optionalLabel=o();hintPosition=o("under");disabled=o(!1,{transform:b});legendVariant=o("eyebrow");direction=o("vertical");appearance=o("plain");common=m(F);optionalWord=p(()=>this.optionalLabel()??this.common.optional);hintId=this.ids.next("fold-fieldset-hint");describedBy=p(()=>this.hint()===""?null:this.hintId);label=p(()=>this.legend()!==""||this.ariaLabel()===""?null:this.ariaLabel());static ɵfac=function(n){return new(n||_)};static ɵcmp=u({type:_,selectors:[["fold-fieldset"]],inputs:{legend:[1,"legend"],ariaLabel:[1,"ariaLabel"],hint:[1,"hint"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"],hintPosition:[1,"hintPosition"],disabled:[1,"disabled"],legendVariant:[1,"legendVariant"],direction:[1,"direction"],appearance:[1,"appearance"]},ngContentSelectors:y,decls:4,vars:11,consts:[[1,"fs-box",3,"disabled"],[1,"fs-legend"],[1,"fs-hint",3,"id"],[1,"fs-opt"],[1,"fs-hint-inline",3,"id"]],template:function(n,t){n&1&&(v(),l(0,"fieldset",0),s(1,k,4,3,"legend",1),s(2,z,2,2,"p",2),P(3),d()),n&2&&(w(M(7,L,t.direction(),t.appearance(),t.legendVariant())),g("disabled",t.disabled()),O("aria-label",t.label())("aria-describedby",t.describedBy()),i(),r(t.legend()!==""?1:-1),i(),r(t.hint()!==""&&(t.hintPosition()==="under"||t.legend()==="")?2:-1))},styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  display: block;
  min-width: 0;
}




.fs-box[_ngcontent-%COMP%] {
  display: flex;
  min-width: 0;
  




  gap: var(--fold-fieldset-gap, var(--fold-space-md));
  margin: 0;
  padding: 0;
  border: 0;
}

.fs-box.vertical[_ngcontent-%COMP%] {
  flex-direction: column;
}

.fs-box.horizontal[_ngcontent-%COMP%] {
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}





.fs-legend[_ngcontent-%COMP%] {
  padding: 0;
  margin-block-end: var(--fold-space-xs);
}




.fs-box.eyebrow[_ngcontent-%COMP%]   .fs-legend[_ngcontent-%COMP%] {
  font-family: var(--fold-font-label);
  font-size: var(--fold-text-xs);
  font-weight: var(--fold-weight-semibold);
  letter-spacing: var(--fold-tracking-wide);
  text-transform: uppercase;
  color: var(--fold-color-text-muted);
}




.fs-box.heading[_ngcontent-%COMP%]   .fs-legend[_ngcontent-%COMP%] {
  font-size: var(--fold-text-sm);
  font-weight: var(--fold-weight-semibold);
  color: var(--fold-color-text);
}









.fs-hint-inline[_ngcontent-%COMP%] {
  margin-inline-start: var(--fold-space-xs);
  font-weight: var(--fold-weight-regular);
  text-transform: none;
  letter-spacing: normal;
  color: var(--fold-color-text-muted);
}




.fs-opt[_ngcontent-%COMP%] {
  margin-inline-start: var(--fold-space-xs);
  font-weight: var(--fold-weight-medium);
  text-transform: none;
  letter-spacing: normal;
  color: var(--fold-color-text-faded);
}



.fs-hint[_ngcontent-%COMP%] {
  margin: 0;
  font-size: var(--fold-text-sm);
  line-height: var(--fold-leading-snug);
  color: var(--fold-color-text-muted);
}





.fs-box[_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
}

.fs-box.border[_ngcontent-%COMP%] {
  padding: var(--fold-space-md);
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-md);
}





.fs-box.border[_ngcontent-%COMP%]   .fs-legend[_ngcontent-%COMP%] {
  padding-inline: var(--fold-space-xs);
  margin-block-end: 0;
}`]})}export{_ as FoldFieldsetComponent};
