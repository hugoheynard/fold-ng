import{X as v,t as o,u as c,U as h,a9 as x,B as m,ɵ as g,P as i,L as r,ad as C,Q as s,j as l,M as p,D as w,aa as y,S as M,z as u,e as _,k as b}from"./index-DF_F-rLD.js";import{r as P}from"./input-value-Co_u-z_8.js";function O(a,t){if(a&1&&(i(0,"span",3),_(1),s()),a&2){const n=u(2);l(),b(n.label())}}function k(a,t){if(a&1&&(i(0,"span",4),_(1),s()),a&2){const n=u(2);l(),b(n.display())}}function S(a,t){if(a&1&&(i(0,"div",1),r(1,O,2,1,"span",3),r(2,k,2,1,"span",4),s()),a&2){const n=u();l(),p(n.label()?1:-1),l(),p(n.showValue()?2:-1)}}class d{value=v(0);min=o(0);max=o(100);step=o(1);label=o();valueText=o();showValue=o(!0,{transform:c});disabled=o(!1,{transform:c});inputId=h(x).next("fold-slider");percent=m(()=>{const t=this.max()-this.min();if(t<=0)return 0;const n=(this.value()-this.min())/t*100;return Math.max(0,Math.min(100,n))});display=m(()=>this.valueText()??String(this.value()));onInput(t){this.value.set(Number(P(t)))}static ɵfac=function(n){return new(n||d)};static ɵcmp=g({type:d,selectors:[["fold-slider"]],inputs:{value:[1,"value"],min:[1,"min"],max:[1,"max"],step:[1,"step"],label:[1,"label"],valueText:[1,"valueText"],showValue:[1,"showValue"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},decls:3,vars:10,consts:[[1,"sl"],[1,"sl-head"],["type","range",1,"sl-input",3,"input","id","min","max","step","value","disabled"],[1,"sl-label"],[1,"sl-value"]],template:function(n,e){n&1&&(i(0,"div",0),r(1,S,3,2,"div",1),i(2,"input",2),C("input",function(f){return e.onInput(f)}),s()()),n&2&&(l(),p(e.label()||e.showValue()?1:-1),l(),w("--sl-pct",e.percent()+"%"),y("id",e.inputId)("min",e.min())("max",e.max())("step",e.step())("value",e.value())("disabled",e.disabled()),M("aria-label",e.label()))},styles:[`[_nghost-%COMP%] {
  display: block;
}

.sl[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.sl-head[_ngcontent-%COMP%] {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
}

.sl-label[_ngcontent-%COMP%] {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--fold-color-text-muted);
}

.sl-value[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 600;
  color: var(--fold-color-text);
  font-variant-numeric: tabular-nums;
}

.sl-input[_ngcontent-%COMP%] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  cursor: pointer;
  background: linear-gradient(to right, var(--fold-color-primary) 0 var(--sl-pct, 0%), var(--fold-color-border-subtle) var(--sl-pct, 0%) 100%);
}
.sl-input[_ngcontent-%COMP%]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--fold-color-primary);
  border: 2px solid var(--fold-color-surface-card);
  cursor: pointer;
  pointer-events: auto;
  transition: transform 0.1s ease;
}
.sl-input[_ngcontent-%COMP%]::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}
.sl-input[_ngcontent-%COMP%]::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--fold-color-primary);
  border: 2px solid var(--fold-color-surface-card);
  cursor: pointer;
  pointer-events: auto;
}
.sl-input[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}`]})}export{d as F};
