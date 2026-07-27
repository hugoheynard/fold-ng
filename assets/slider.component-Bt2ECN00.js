import{ab as f,u as o,W as v,a1 as x,ac as C,N as a,ɵ as M,y as l,w as u,ai as w,z as s,j as i,x as p,Q as P,aj as _,Z as y,q as c,e as b,H as O,k as h}from"./index-DChvdols.js";import{r as k}from"./input-value-Co_u-z_8.js";function T(r,t){if(r&1&&(l(0,"label",4),b(1),s()),r&2){const e=c(2);_("htmlFor",e.inputId),i(),h(t)}}function I(r,t){if(r&1&&(l(0,"span",5),b(1),s()),r&2){const e=c(2);i(),h(e.display())}}function S(r,t){if(r&1&&(l(0,"div",1),u(1,T,2,2,"label",4),u(2,I,2,1,"span",5),s()),r&2){let e;const n=c();i(),p((e=n.label())?1:-1,e),i(),p(n.showValue()?2:-1)}}function F(r,t){if(r&1&&(l(0,"span",6),b(1),s()),r&2){const e=c();O("is-error",e.errorMessage()),_("id",e.errorMessage()?e.inputId+"-error":e.inputId+"-hint"),i(),h(t)}}class m{value=f(0);min=o(0);max=o(100);step=o(1);label=o();ariaLabel=o();valueText=o();showValue=o(!0,{transform:v});hint=o();disabled=o(!1,{transform:v});touched=f(!1);errors=o([]);inputId=x(C).next("fold-slider");rMin=a(()=>this.min()??0);rMax=a(()=>this.max()??100);rStep=a(()=>this.step()??1);percent=a(()=>{const t=this.rMax()-this.rMin();if(t<=0)return 0;const e=(this.value()-this.rMin())/t*100;return Math.max(0,Math.min(100,e))});display=a(()=>this.valueText()??String(this.value()));errorMessage=a(()=>{if(!this.touched())return;const t=this.errors()[0];return t?t.message??t.kind:void 0});message=a(()=>this.errorMessage()??this.hint()??null);describedBy=a(()=>this.errorMessage()?`${this.inputId}-error`:this.hint()?`${this.inputId}-hint`:null);onInput(t){this.value.set(Number(k(t)))}onBlur(){this.touched.set(!0)}static ɵfac=function(e){return new(e||m)};static ɵcmp=M({type:m,selectors:[["fold-slider"]],inputs:{value:[1,"value"],min:[1,"min"],max:[1,"max"],step:[1,"step"],label:[1,"label"],ariaLabel:[1,"ariaLabel"],valueText:[1,"valueText"],showValue:[1,"showValue"],hint:[1,"hint"],disabled:[1,"disabled"],touched:[1,"touched"],errors:[1,"errors"]},outputs:{value:"valueChange",touched:"touchedChange"},decls:4,vars:14,consts:[[1,"sl"],[1,"sl-head"],["type","range",1,"sl-input",3,"input","blur","id","min","max","step","value","disabled"],[1,"sl-msg",3,"is-error","id"],[1,"sl-label",3,"for"],[1,"sl-value"],[1,"sl-msg",3,"id"]],template:function(e,n){if(e&1&&(l(0,"div",0),u(1,S,3,2,"div",1),l(2,"input",2),w("input",function(g){return n.onInput(g)})("blur",function(){return n.onBlur()}),s(),u(3,F,2,4,"span",3),s()),e&2){let d;i(),p(n.label()||n.showValue()?1:-1),i(),P("--sl-pct",n.percent()+"%"),_("id",n.inputId)("min",n.rMin())("max",n.rMax())("step",n.rStep())("value",n.value())("disabled",n.disabled()),y("aria-label",n.label()?null:n.ariaLabel()??null)("aria-valuetext",n.valueText()??null)("aria-describedby",n.describedBy())("aria-invalid",n.errorMessage()?!0:null),i(),p((d=n.message())?3:-1,d)}},styles:[`[_nghost-%COMP%] {
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
  gap: var(--fold-space-sm);
}

.sl-label[_ngcontent-%COMP%] {
  font-size: var(--fold-text-xs);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--fold-color-text-muted);
}

.sl-value[_ngcontent-%COMP%] {
  font-size: var(--fold-text-sm);
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
  transition: transform var(--fold-motion-fast);
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
.sl-input[_ngcontent-%COMP%]:focus-visible {
  outline: none;
}
.sl-input[_ngcontent-%COMP%]:focus-visible::-webkit-slider-thumb {
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--fold-color-primary) 30%, transparent);
}
.sl-input[_ngcontent-%COMP%]:focus-visible::-moz-range-thumb {
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--fold-color-primary) 30%, transparent);
}
@media (prefers-reduced-motion: reduce) {
  .sl-input[_ngcontent-%COMP%]::-webkit-slider-thumb {
    transition: none;
  }
  .sl-input[_ngcontent-%COMP%]::-webkit-slider-thumb:hover {
    transform: none;
  }
}
@media (forced-colors: active) {
  .sl-input[_ngcontent-%COMP%]::-webkit-slider-thumb {
    background: ButtonText;
    border-color: Canvas;
  }
  .sl-input[_ngcontent-%COMP%]::-moz-range-thumb {
    background: ButtonText;
    border-color: Canvas;
  }
  .sl-input[_ngcontent-%COMP%]:focus-visible::-webkit-slider-thumb {
    box-shadow: 0 0 0 2px CanvasText;
  }
}
.sl-input[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.sl-msg[_ngcontent-%COMP%] {
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
}

.sl-msg.is-error[_ngcontent-%COMP%] {
  color: var(--fold-color-alert);
}`]})}export{m as FoldSliderComponent};
