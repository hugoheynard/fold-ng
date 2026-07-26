import{w as r,av as f,x as s,ɵ as b,L as a,e as m,N as i,ai as _,af as p,j as o,k as v,z as x,ag as d,O as h,v as M}from"./index-Dbcb4g4H.js";import{r as c}from"./input-value-Co_u-z_8.js";class u{label=r.required();min=r(0);max=r(100);step=r(1);value=r(void 0);unit=r("number");valueChange=f();currentMin=s(()=>this.value()?.min??this.min());currentMax=s(()=>this.value()?.max??this.max());fillLeft=s(()=>{const t=this.max()-this.min();return t===0?0:(this.currentMin()-this.min())/t*100});fillWidth=s(()=>{const t=this.max()-this.min();return t===0?100:(this.currentMax()-this.currentMin())/t*100});formatValue(t){if(this.unit()==="duration"){const e=Math.floor(t/60),n=t%60;return`${e}:${n.toString().padStart(2,"0")}`}return String(t)}onMinChange(t){const e=Number(c(t));this.valueChange.emit({min:Math.min(e,this.currentMax()),max:this.currentMax()})}onMaxChange(t){const e=Number(c(t));this.valueChange.emit({min:this.currentMin(),max:Math.max(e,this.currentMin())})}static ɵfac=function(e){return new(e||u)};static ɵcmp=b({type:u,selectors:[["fold-range-slider"]],inputs:{label:[1,"label"],min:[1,"min"],max:[1,"max"],step:[1,"step"],value:[1,"value"],unit:[1,"unit"]},outputs:{valueChange:"valueChange"},decls:10,vars:17,consts:[[1,"rs"],[1,"rs-label"],[1,"rs-track-wrap"],[1,"rs-track"],[1,"rs-fill"],["type","range",1,"rs-thumb","rs-thumb--min",3,"input","min","max","step","value"],["type","range",1,"rs-thumb","rs-thumb--max",3,"input","min","max","step","value"],[1,"rs-values"]],template:function(e,n){e&1&&(a(0,"div",0)(1,"span",1),m(2),i(),a(3,"div",2)(4,"div",3),_(5,"div",4),i(),a(6,"input",5),p("input",function(l){return n.onMinChange(l)}),i(),a(7,"input",6),p("input",function(l){return n.onMaxChange(l)}),i()(),a(8,"span",7),m(9),i()()),e&2&&(o(2),v(n.label()),o(3),x("left",n.fillLeft(),"%")("width",n.fillWidth(),"%"),o(),d("min",n.min())("max",n.max())("step",n.step())("value",n.currentMin()),h("aria-label",n.label()+" minimum"),o(),d("min",n.min())("max",n.max())("step",n.step())("value",n.currentMax()),h("aria-label",n.label()+" maximum"),o(2),M("",n.formatValue(n.currentMin())," – ",n.formatValue(n.currentMax())))},styles:[`[_nghost-%COMP%] {
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
  transition: transform 0.1s ease;
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

.rs-values[_ngcontent-%COMP%] {
  font-size: 10px;
  font-weight: 500;
  color: var(--fold-color-text-muted);
  text-align: center;
  font-variant-numeric: tabular-nums;
}`]})}export{u as FoldRangeSliderComponent};
