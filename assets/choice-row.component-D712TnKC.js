import{u as r,ap as v,ɵ as g,y as c,i as h,z as a,L as d,D as _,j as i,o as b,E as y,an as C,N as x,q as s,O as w,e as p,w as O,k as u,x as P}from"./index-D0Jqges4.js";const M=(n,t)=>t.key;function k(n,t){if(n&1&&(c(0,"span",3),p(1),a()),n&2){const o=s().$implicit;i(),u(o.count)}}function F(n,t){if(n&1){const o=y();c(0,"button",2),C("click",function(){const f=x(o).$implicit,m=s();return w(m.selected.emit(f.key))}),c(1,"span"),p(2),a(),O(3,k,2,1,"span",3),a()}if(n&2){const o=t.$implicit,e=s();d("is-active",e.activeKey()===o.key),_("aria-pressed",e.activeKey()===o.key),i(2),u(o.label),i(),P(o.count!==void 0?3:-1)}}class l{options=r.required();activeKey=r.required();layout=r("segmented");ariaLabel=r("");selected=v();static ɵfac=function(o){return new(o||l)};static ɵcmp=g({type:l,selectors:[["fold-choice-row"]],inputs:{options:[1,"options"],activeKey:[1,"activeKey"],layout:[1,"layout"],ariaLabel:[1,"ariaLabel"]},outputs:{selected:"selected"},decls:3,vars:5,consts:[["role","group",1,"choice-row"],["type","button",1,"choice",3,"is-active"],["type","button",1,"choice",3,"click"],[1,"choice-count"]],template:function(o,e){o&1&&(c(0,"div",0),h(1,F,4,5,"button",1,M),a()),o&2&&(d("segmented",e.layout()==="segmented")("chips",e.layout()==="chips"),_("aria-label",e.ariaLabel()||null),i(),b(e.options()))},styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  display: block;
}

.choice-row[_ngcontent-%COMP%] {
  display: flex;
  gap: var(--fold-space-xs);
  user-select: none;
}

.choice-row.chips[_ngcontent-%COMP%] {
  flex-wrap: wrap;
}

.choice[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--fold-space-sm);
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
  padding: var(--fold-space-xs) 0;
  text-align: center;
  text-transform: capitalize;
  background: var(--fold-color-surface-subtle);
  border-radius: var(--fold-radius-sm);
  font-size: var(--fold-text-xs);
  font-weight: var(--fold-weight-semibold);
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
  padding: var(--fold-space-xs) var(--fold-space-md);
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
  font-weight: var(--fold-weight-semibold);
}`]})}export{l as FoldChoiceRowComponent};
