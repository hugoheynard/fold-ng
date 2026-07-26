import{x as r,a4 as f,K as g,T as _,a5 as v,y as s,ɵ as M,M as o,e as b,O as i,al as x,ai as p,P as u,j as a,aj as m,k as C,A as w,w as P}from"./index-DAeoSv5l.js";import{r as c}from"./input-value-Co_u-z_8.js";class d{label=r.required();min=r(0);max=r(100);step=r(1);value=f(void 0);unit=r("number");disabled=r(!1,{transform:g});minLabel=r("minimum");maxLabel=r("maximum");labelId=_(v).next("fold-range");currentMin=s(()=>this.value()?.min??this.min());currentMax=s(()=>this.value()?.max??this.max());fillLeft=s(()=>{const e=this.max()-this.min();return e===0?0:(this.currentMin()-this.min())/e*100});fillWidth=s(()=>{const e=this.max()-this.min();return e===0?100:(this.currentMax()-this.currentMin())/e*100});formatValue(e){if(this.unit()==="duration"){const t=Math.floor(e/60),n=e%60;return`${t}:${n.toString().padStart(2,"0")}`}return String(e)}onMinChange(e){const t=Number(c(e));this.value.set({min:Math.min(t,this.currentMax()),max:this.currentMax()})}onMaxChange(e){const t=Number(c(e));this.value.set({min:this.currentMin(),max:Math.max(t,this.currentMin())})}static ɵfac=function(t){return new(t||d)};static ɵcmp=M({type:d,selectors:[["fold-range-slider"]],inputs:{label:[1,"label"],min:[1,"min"],max:[1,"max"],step:[1,"step"],value:[1,"value"],unit:[1,"unit"],disabled:[1,"disabled"],minLabel:[1,"minLabel"],maxLabel:[1,"maxLabel"]},outputs:{value:"valueChange"},decls:10,vars:23,consts:[["role","group",1,"rs"],[1,"rs-label",3,"id"],[1,"rs-track-wrap"],[1,"rs-track"],[1,"rs-fill"],["type","range",1,"rs-thumb","rs-thumb--min",3,"input","min","max","step","value","disabled"],["type","range",1,"rs-thumb","rs-thumb--max",3,"input","min","max","step","value","disabled"],[1,"rs-values"]],template:function(t,n){t&1&&(o(0,"div",0)(1,"span",1),b(2),i(),o(3,"div",2)(4,"div",3),x(5,"div",4),i(),o(6,"input",5),p("input",function(l){return n.onMinChange(l)}),i(),o(7,"input",6),p("input",function(l){return n.onMaxChange(l)}),i()(),o(8,"span",7),b(9),i()()),t&2&&(u("aria-labelledby",n.labelId),a(),m("id",n.labelId),a(),C(n.label()),a(3),w("left",n.fillLeft(),"%")("width",n.fillWidth(),"%"),a(),m("min",n.min())("max",n.max())("step",n.step())("value",n.currentMin())("disabled",n.disabled()),u("aria-label",n.label()+" "+n.minLabel())("aria-valuetext",n.formatValue(n.currentMin())),a(),m("min",n.min())("max",n.max())("step",n.step())("value",n.currentMax())("disabled",n.disabled()),u("aria-label",n.label()+" "+n.maxLabel())("aria-valuetext",n.formatValue(n.currentMax())),a(2),P("",n.formatValue(n.currentMin())," – ",n.formatValue(n.currentMax())))},styles:[`[_nghost-%COMP%] {
  display: block;
}

.rs[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.rs-label[_ngcontent-%COMP%] {
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--fold-color-text-muted);
}

.rs-track-wrap[_ngcontent-%COMP%] {
  position: relative;
  height: 20px;
}

.rs-track[_ngcontent-%COMP%] {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 4px;
  transform: translateY(-50%);
  background: var(--fold-color-border-subtle);
  border-radius: 2px;
}

.rs-fill[_ngcontent-%COMP%] {
  position: absolute;
  height: 100%;
  background: var(--fold-color-primary);
  border-radius: 2px;
}

.rs-thumb[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  pointer-events: none;
  outline: none;
}
.rs-thumb[_ngcontent-%COMP%]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--fold-color-primary);
  border: 2px solid var(--fold-color-surface-card);
  cursor: pointer;
  pointer-events: auto;
  transition: transform var(--fold-motion-fast);
}
.rs-thumb[_ngcontent-%COMP%]::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}
.rs-thumb[_ngcontent-%COMP%]::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--fold-color-primary);
  border: 2px solid var(--fold-color-surface-card);
  cursor: pointer;
  pointer-events: auto;
}
.rs-thumb[_ngcontent-%COMP%]:focus-visible {
  outline: none;
}
.rs-thumb[_ngcontent-%COMP%]:focus-visible::-webkit-slider-thumb {
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--fold-color-primary) 30%, transparent);
}
.rs-thumb[_ngcontent-%COMP%]:focus-visible::-moz-range-thumb {
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--fold-color-primary) 30%, transparent);
}
@media (prefers-reduced-motion: reduce) {
  .rs-thumb[_ngcontent-%COMP%]::-webkit-slider-thumb {
    transition: none;
  }
  .rs-thumb[_ngcontent-%COMP%]::-webkit-slider-thumb:hover {
    transform: none;
  }
}
@media (forced-colors: active) {
  .rs-thumb[_ngcontent-%COMP%]::-webkit-slider-thumb {
    background: ButtonText;
    border-color: Canvas;
  }
  .rs-thumb[_ngcontent-%COMP%]::-moz-range-thumb {
    background: ButtonText;
    border-color: Canvas;
  }
  .rs-thumb[_ngcontent-%COMP%]:focus-visible::-webkit-slider-thumb {
    box-shadow: 0 0 0 2px CanvasText;
  }
}

.rs-thumb[_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
}


.rs-track-wrap[_ngcontent-%COMP%]:has(.rs-thumb:disabled) {
  opacity: 0.5;
}

.rs-values[_ngcontent-%COMP%] {
  font-size: 10px;
  font-weight: 500;
  color: var(--fold-color-text-muted);
  text-align: center;
  font-variant-numeric: tabular-nums;
}`]})}export{d as FoldRangeSliderComponent};
