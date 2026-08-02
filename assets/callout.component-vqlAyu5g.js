import{u as a,X as i,A as r,ɵ as f,F as d,Y as u,g as v,d as l,Z as s,f as c,m as _,D as p,L as g}from"./index-C9jep9BN.js";const m=["*",[["","actions",""]]],h=["*","[actions]"],b={neutral:"info",accent:"lightning",info:"info",success:"completed",warning:"warning",alert:"warning"};class e{variant=a("neutral");appearance=a("inset");icon=a();announce=a(!1,{transform:i});iconName=r(()=>this.icon()??b[this.variant()]);role=r(()=>this.announce()?this.variant()==="alert"?"alert":"status":"note");ariaLive=r(()=>this.announce()?this.variant()==="alert"?"assertive":"polite":null);static ɵfac=function(o){return new(o||e)};static ɵcmp=f({type:e,selectors:[["fold-callout"]],hostVars:16,hostBindings:function(o,n){o&2&&(p("role",n.role())("aria-live",n.ariaLive()),g("v-neutral",n.variant()==="neutral")("v-accent",n.variant()==="accent")("v-info",n.variant()==="info")("v-success",n.variant()==="success")("v-warning",n.variant()==="warning")("v-alert",n.variant()==="alert")("is-flat",n.appearance()==="flat"))},inputs:{variant:[1,"variant"],appearance:[1,"appearance"],icon:[1,"icon"],announce:[1,"announce"]},exportAs:["foldCallout"],ngContentSelectors:h,decls:5,vars:2,consts:[[1,"callout-icon",3,"name","size"],[1,"callout-body"],[1,"callout-actions"]],template:function(o,n){o&1&&(u(m),v(0,"fold-icon",0),l(1,"span",1),s(2),c(),l(3,"span",2),s(4,1),c()),o&2&&_("name",n.iconName())("size",15)},dependencies:[d],styles:[`@charset "UTF-8";


[_nghost-%COMP%] {
  --_surface: var(--fold-color-surface-subtle);
  --_border: var(--fold-color-border-subtle);
  --_text: var(--fold-color-text-secondary);
  --_glyph: var(--fold-color-text-muted);
  display: flex;
  


  align-items: center;
  gap: var(--fold-space-sm);
  padding: var(--fold-space-sm) var(--fold-space-md);
  border: 1px solid var(--_border);
  border-radius: var(--fold-radius-md);
  background: var(--_surface);
  color: var(--_text);
  font-size: var(--fold-text-sm);
  font-weight: 500;
  line-height: 1.45;
}




.is-flat[_nghost-%COMP%] {
  border-radius: 0;
  border-left: none;
  border-right: none;
}

.callout-icon[_ngcontent-%COMP%] {
  flex: none;
  color: var(--_glyph);
}

.callout-body[_ngcontent-%COMP%] {
  flex: 1 1 auto;
  min-width: 0;
}


.callout-actions[_ngcontent-%COMP%] {
  flex: none;
  display: flex;
  align-items: center;
  gap: var(--fold-space-xs);
  margin-left: var(--fold-space-sm);
}

.callout-actions[_ngcontent-%COMP%]:empty {
  display: none;
}



.v-accent[_nghost-%COMP%] {
  --_surface: var(--fold-color-primary-surface);
  --_border: var(--fold-color-primary-border);
  --_text: var(--fold-color-primary-text);
  --_glyph: var(--fold-color-primary-text);
}

.v-info[_nghost-%COMP%] {
  --_surface: var(--fold-color-info-surface);
  --_border: var(--fold-color-info-border);
  --_text: var(--fold-color-info-text);
  --_glyph: var(--fold-color-info-text);
}

.v-success[_nghost-%COMP%] {
  --_surface: var(--fold-color-success-surface);
  --_border: var(--fold-color-success-border);
  --_text: var(--fold-color-success-text);
  --_glyph: var(--fold-color-success-text);
}

.v-warning[_nghost-%COMP%] {
  --_surface: var(--fold-color-warning-surface);
  --_border: var(--fold-color-warning-border);
  --_text: var(--fold-color-warning-text);
  --_glyph: var(--fold-color-warning-text);
}

.v-alert[_nghost-%COMP%] {
  --_surface: var(--fold-color-alert-surface);
  --_border: var(--fold-color-alert-border);
  --_text: var(--fold-color-alert-text);
  --_glyph: var(--fold-color-alert-text);
}`]})}export{e as FoldCalloutComponent};
