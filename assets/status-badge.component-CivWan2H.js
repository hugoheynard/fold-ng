import{x as e,y as r,ɵ as s,M as d,e as l,O as c,P as u,j as i,k as f}from"./index-BEIV9PYb.js";class o{status=e.required();label=e("");normalizedStatus=r(()=>{const t=this.status();return t==="connected"?"active":t==="error"?"suspended":t==="not_connected"?"coming-soon":t});static ɵfac=function(n){return new(n||o)};static ɵcmp=s({type:o,selectors:[["fold-status-badge"]],inputs:{status:[1,"status"],label:[1,"label"]},decls:2,vars:2,consts:[[1,"badge"]],template:function(n,a){n&1&&(d(0,"span",0),l(1),c()),n&2&&(u("data-status",a.normalizedStatus()),i(),f(a.label()||a.status()))},styles:[`@charset "UTF-8";
.badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  user-select: none;
  padding: 2px 10px;
  border-radius: var(--fold-radius-pill);
  font-size: var(--fold-text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

.badge[data-status=active][_ngcontent-%COMP%] {
  background: var(--fold-color-success-surface);
  color: var(--fold-color-success-text);
  border: 1px solid var(--fold-color-success-border);
}

.badge[data-status=draft][_ngcontent-%COMP%], 
.badge[data-status=pending][_ngcontent-%COMP%] {
  background: var(--fold-color-warning-surface);
  color: var(--fold-color-warning-text);
  border: 1px solid var(--fold-color-warning-border);
}

.badge[data-status=suspended][_ngcontent-%COMP%] {
  background: var(--fold-color-alert-surface);
  color: var(--fold-color-alert-text);
  border: 1px solid var(--fold-color-alert-border);
}

.badge[data-status=coming-soon][_ngcontent-%COMP%] {
  background: var(--fold-color-surface-raised);
  color: var(--fold-color-text-muted);
  border: 1px solid var(--fold-color-border);
}


.badge[_ngcontent-%COMP%]:not([data-status=active]):not([data-status=draft]):not([data-status=pending]):not([data-status=suspended]):not([data-status=coming-soon]) {
  background: var(--fold-color-surface-raised);
  color: var(--fold-color-text-secondary);
  border: 1px solid var(--fold-color-border);
}`]})}export{o as FoldStatusBadgeComponent};
