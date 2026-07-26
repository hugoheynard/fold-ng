import{x as c,az as g,ɵ as h,M as r,i as v,O as a,D as d,P as _,j as i,o as C,B as b,ai as y,E as x,q as s,H as w,e as p,I as P,k as u,J as M}from"./index-C6d6dpeo.js";const O=(e,t)=>t.key;function k(e,t){if(e&1&&(r(0,"span",3),p(1),a()),e&2){const o=s().$implicit;i(),u(o.count)}}function F(e,t){if(e&1){const o=b();r(0,"button",2),y("click",function(){const f=x(o).$implicit,m=s();return w(m.selected.emit(f.key))}),r(1,"span"),p(2),a(),P(3,k,2,1,"span",3),a()}if(e&2){const o=t.$implicit,n=s();d("is-active",n.activeKey()===o.key),_("aria-pressed",n.activeKey()===o.key),i(2),u(o.label),i(),M(o.count!==void 0?3:-1)}}class l{options=c.required();activeKey=c.required();layout=c("segmented");ariaLabel=c("");selected=g();static ɵfac=function(o){return new(o||l)};static ɵcmp=h({type:l,selectors:[["fold-choice-row"]],inputs:{options:[1,"options"],activeKey:[1,"activeKey"],layout:[1,"layout"],ariaLabel:[1,"ariaLabel"]},outputs:{selected:"selected"},decls:3,vars:5,consts:[["role","group",1,"choice-row"],["type","button",1,"choice",3,"is-active"],["type","button",1,"choice",3,"click"],[1,"choice-count"]],template:function(o,n){o&1&&(r(0,"div",0),v(1,F,4,5,"button",1,O),a()),o&2&&(d("segmented",n.layout()==="segmented")("chips",n.layout()==="chips"),_("aria-label",n.ariaLabel()||null),i(),C(n.options()))},styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  display: block;
}

.choice-row[_ngcontent-%COMP%] {
  display: flex;
  gap: 4px;
  user-select: none;
}

.choice-row.chips[_ngcontent-%COMP%] {
  flex-wrap: wrap;
}

.choice[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  cursor: pointer;
  border: 1px solid var(--fold-color-border);
  color: var(--fold-color-text-muted);
  transition: color 0.1s ease, background 0.1s ease, border-color 0.1s ease;
}

.choice-count[_ngcontent-%COMP%] {
  color: var(--fold-color-text-faded);
  font-variant-numeric: tabular-nums;
}

.choice.is-active[_ngcontent-%COMP%]   .choice-count[_ngcontent-%COMP%] {
  color: var(--fold-color-primary-text);
}


.choice-row.segmented[_ngcontent-%COMP%]   .choice[_ngcontent-%COMP%] {
  flex: 1;
  padding: 5px 0;
  text-align: center;
  text-transform: capitalize;
  background: var(--fold-color-surface-subtle);
  border-radius: var(--fold-radius-sm);
  font-size: var(--fold-text-xs);
  font-weight: 600;
}

.choice-row.segmented[_ngcontent-%COMP%]   .choice[_ngcontent-%COMP%]:hover:not(.is-active) {
  background: var(--fold-color-surface-raised);
}

.choice-row.segmented[_ngcontent-%COMP%]   .choice.is-active[_ngcontent-%COMP%] {
  background: var(--fold-color-primary-surface);
  border-color: var(--fold-color-primary-border);
  color: var(--fold-color-primary);
}


.choice-row.chips[_ngcontent-%COMP%]   .choice[_ngcontent-%COMP%] {
  padding: 4px 12px;
  background: transparent;
  border-radius: var(--fold-radius-pill);
  color: var(--fold-color-text-secondary);
  font-size: var(--fold-text-sm);
}

.choice-row.chips[_ngcontent-%COMP%]   .choice[_ngcontent-%COMP%]:hover:not(.is-active) {
  color: var(--fold-color-text);
  border-color: var(--fold-color-primary-border);
}

.choice-row.chips[_ngcontent-%COMP%]   .choice.is-active[_ngcontent-%COMP%] {
  background: var(--fold-color-primary-surface);
  border-color: var(--fold-color-primary-border);
  color: var(--fold-color-primary-text);
  font-weight: 600;
}`]})}export{l as FoldChoiceRowComponent};
