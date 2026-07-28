import{ai as M,u as i,X as m,a2 as F,aj as I,A as a,ae as N,ɵ as S,F as z,au as D,d as u,H as b,w as f,B as x,f as p,m as d,j as l,L as B,x as g,D as w,ak as y,E as q,M as v,q as c,N as P,g as L,e as R,k as A,$ as O,ay as k,aJ as T,ax as h,O as j}from"./index-CQebbVEP.js";import{F as V}from"./repeat-press.directive-Bf1pdlI8.js";import{FoldInputBaseComponent as E}from"./input-base.component-DrRtAKIP.js";import{r as H}from"./input-value-Co_u-z_8.js";import"./label.component-DBxoIRpX.js";function U(o){if(!Number.isFinite(o))return 0;const n=o.toString(),e=n.indexOf("e-");if(e!==-1){const s=n.slice(0,e),r=s.indexOf("."),_=r===-1?0:s.length-r-1;return Number(n.slice(e+2))+_}const t=n.indexOf(".");return t===-1?0:n.length-t-1}function $(o,n){const e=n.min??0;return e+Math.round((o-e)/n.step)*n.step}function W(o,n){const e=n.decimals??U(n.step),t=Math.min(100,Math.max(0,e));return Number(o.toFixed(t))}function G(o,n){let e=o;return n.min!==void 0&&(e=Math.max(n.min,e)),n.max!==void 0&&(e=Math.min(n.max,e)),e}function J(o,n){const e=n.snapToStep?$(o,n):o;return G(W(e,n),n)}function X(o){if(o.max===void 0)return!0;const n=(o.max-(o.min??0))/o.step;return Math.abs(n-Math.round(n))<1e-9}const Y=(o,n)=>({dir:o,size:"sm",cls:"ni-btn ni-dec",off:n}),K=o=>({dir:1,size:"xs",cls:"ni-stack-btn ni-inc",off:o}),Q=(o,n)=>({dir:o,size:"xs",cls:"ni-stack-btn ni-dec",off:n}),Z=o=>({dir:1,size:"sm",cls:"ni-btn ni-inc",off:o});function nn(o,n){if(o&1){const e=q();u(0,"button",7),x("foldRepeatPress",function(){const s=v(e).dir,r=c();return P(r.stepBy(s))})("click",function(s){const r=v(e).dir,_=c();return P(_.onButtonClick(r,s))}),L(1,"fold-icon",8),p()}if(o&2){const e=n.dir,t=n.size,s=n.cls,r=n.off,_=c();y(s),d("disabled",r)("foldRepeatPressDisabled",r),w("aria-label",e===1?"Increment":"Decrement"),l(),d("name",_.iconFor(e))("size",t)}}function tn(o,n){o&1&&h(0)}function en(o,n){if(o&1&&b(0,tn,1,0,"ng-container",9),o&2){const e=c(),t=O(2);d("ngTemplateOutlet",t)("ngTemplateOutletContext",T(2,Y,-1,e.decDisabled()))}}function on(o,n){if(o&1&&(u(0,"span",5),R(1),p()),o&2){const e=c();l(),A(e.step())}}function rn(o,n){o&1&&h(0)}function sn(o,n){o&1&&h(0)}function an(o,n){if(o&1&&(u(0,"span",6),b(1,rn,1,0,"ng-container",9)(2,sn,1,0,"ng-container",9),p()),o&2){const e=c(),t=O(2);l(),d("ngTemplateOutlet",t)("ngTemplateOutletContext",k(4,K,e.incDisabled())),l(),d("ngTemplateOutlet",t)("ngTemplateOutletContext",T(6,Q,-1,e.decDisabled()))}}function ln(o,n){o&1&&h(0)}function dn(o,n){if(o&1&&b(0,ln,1,0,"ng-container",9),o&2){const e=c(),t=O(2);d("ngTemplateOutlet",t)("ngTemplateOutletContext",k(2,Z,e.incDisabled()))}}class C{value=M(null);disabled=i(!1);touched=M(!1);errors=i([]);size=i("md");align=i("start");variant=i("default");label=i();required=i(!1,{transform:m});optional=i(!1,{transform:m});optionalLabel=i("optional");hint=i();placeholder=i("");readOnly=i(!1);min=i(void 0);max=i(void 0);step=i(void 0);spinner=i("plusminus");controls=i("inside");showStep=i(!1,{transform:m});snapToStep=i(!1,{transform:m});decimals=i(void 0);integer=i(!1,{transform:m});inputId=F(I).next("fold-number-input");effectiveStep=a(()=>this.step()??1);maxDecimals=a(()=>this.integer()?0:this.decimals());constraints=a(()=>({step:this.effectiveStep(),min:this.min(),max:this.max(),decimals:this.maxDecimals(),snapToStep:this.snapToStep()}));nativeStep=a(()=>this.step()??(this.integer()?1:void 0));atMin=a(()=>{const n=this.min(),e=this.value();return n!==void 0&&e!==null&&e<=n});atMax=a(()=>{const n=this.max(),e=this.value();return n!==void 0&&e!==null&&e>=n});hasControls=a(()=>this.spinner()!=="none");frozen=a(()=>this.disabled()||this.readOnly());incDisabled=a(()=>this.frozen()||this.atMax());decDisabled=a(()=>this.frozen()||this.atMin());errorMessage=a(()=>{if(!this.touched())return;const n=this.errors()[0];return n?n.message??n.kind:void 0});describedBy=a(()=>this.errorMessage()?`${this.inputId}-error`:this.hint()?`${this.inputId}-hint`:null);constructor(){N(()=>{this.snapToStep()&&!X(this.constraints())&&this.warnStepMisaligned()})}onInputChange(n){const e=H(n);if(e===""){this.value.set(null);return}const t=Number(e);this.value.set(Number.isNaN(t)?null:t)}onBlur(){this.touched.set(!0);const n=this.value();n===null||!Number.isFinite(n)||(this.snapToStep()||this.maxDecimals()!==void 0)&&this.value.set(this.settle(n))}onButtonClick(n,e){e.detail===0&&this.stepBy(n)}onArrow(n,e){e.preventDefault(),this.stepBy(n)}onWheel(n){n.target instanceof HTMLElement&&n.target.blur()}iconFor(n){return this.spinner()==="arrows"?n===1?"chevron-up":"chevron-down":n===1?"plus":"minus"}stepBy(n){if(this.disabled()||this.readOnly())return;const e=(this.value()??0)+n*this.effectiveStep();this.value.set(this.settle(e)),this.touched.set(!0)}settle(n){return J(n,this.constraints())}warnStepMisaligned(){}static ɵfac=function(e){return new(e||C)};static ɵcmp=S({type:C,selectors:[["fold-number-input"]],hostVars:2,hostBindings:function(e,t){e&2&&y(t.size()+" "+t.align()+" "+t.variant())},inputs:{value:[1,"value"],disabled:[1,"disabled"],touched:[1,"touched"],errors:[1,"errors"],size:[1,"size"],align:[1,"align"],variant:[1,"variant"],label:[1,"label"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"],hint:[1,"hint"],placeholder:[1,"placeholder"],readOnly:[1,"readOnly"],min:[1,"min"],max:[1,"max"],step:[1,"step"],spinner:[1,"spinner"],controls:[1,"controls"],showStep:[1,"showStep"],snapToStep:[1,"snapToStep"],decimals:[1,"decimals"],integer:[1,"integer"]},outputs:{value:"valueChange",touched:"touchedChange"},decls:10,vars:26,consts:[["stepBtn",""],[3,"label","for","required","optional","optionalLabel","hint","error"],[1,"ni-field"],[1,"ni-box"],["type","number",3,"input","blur","keydown.arrowUp","keydown.arrowDown","wheel","id","value"],["aria-hidden","true",1,"ni-step"],[1,"ni-stack"],["type","button","tabindex","-1","aria-hidden","true","foldRepeatPress","",3,"foldRepeatPress","click","disabled","foldRepeatPressDisabled"],[3,"name","size"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(e,t){e&1&&(u(0,"fold-input-base",1),b(1,nn,2,7,"ng-template",null,0,j),u(3,"div",2),f(4,en,1,5,"ng-container"),u(5,"div",3)(6,"input",4),x("input",function(r){return t.onInputChange(r)})("blur",function(){return t.onBlur()})("keydown.arrowUp",function(r){return t.onArrow(1,r)})("keydown.arrowDown",function(r){return t.onArrow(-1,r)})("wheel",function(r){return t.onWheel(r)}),p(),f(7,on,2,1,"span",5),f(8,an,3,9,"span",6),p(),f(9,dn,1,4,"ng-container"),p()()),e&2&&(d("label",t.label())("for",t.inputId)("required",t.required())("optional",t.optional())("optionalLabel",t.optionalLabel())("hint",t.hint())("error",t.errorMessage()),l(3),B("ni-inside",t.controls()==="inside")("ni-outside",t.controls()==="outside"),l(),g(t.hasControls()&&t.controls()==="outside"?4:-1),l(2),d("id",t.inputId)("value",t.value()),w("min",t.min())("max",t.max())("step",t.nativeStep())("placeholder",t.placeholder())("readonly",t.readOnly()||null)("disabled",t.disabled()||null)("required",t.required()||null)("aria-invalid",t.errorMessage()?!0:null)("aria-describedby",t.describedBy()),l(),g(t.showStep()&&t.step()!=null?7:-1),l(),g(t.hasControls()&&t.controls()==="inside"?8:-1),l(),g(t.hasControls()&&t.controls()==="outside"?9:-1))},dependencies:[E,z,V,D],styles:[`


[_nghost-%COMP%] {
  display: block;
}

input[_ngcontent-%COMP%], 
select[_ngcontent-%COMP%] {
  all: unset;
  box-sizing: border-box;
  width: 100%;
  font-family: inherit;
  color: var(--fold-color-text);
  background: var(--fold-color-surface-card);
  border: 1px solid var(--fold-color-border-subtle);
  transition: border-color var(--fold-motion-fast), box-shadow var(--fold-motion-fast);
}
input[_ngcontent-%COMP%]::placeholder, 
select[_ngcontent-%COMP%]::placeholder {
  color: var(--fold-color-text-faded);
}
input[_ngcontent-%COMP%]:hover:not(:disabled):not(:read-only):not(:focus), 
select[_ngcontent-%COMP%]:hover:not(:disabled):not(:read-only):not(:focus) {
  border-color: var(--fold-color-border);
}
input[_ngcontent-%COMP%]:focus, 
select[_ngcontent-%COMP%]:focus {
  border-color: var(--fold-color-primary);
  box-shadow: 0 0 0 2px var(--fold-color-primary-border);
}
input[_ngcontent-%COMP%]:disabled, 
select[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
input[_ngcontent-%COMP%]:read-only, 
select[_ngcontent-%COMP%]:read-only {
  opacity: 0.6;
  cursor: default;
}
input[type=number][_ngcontent-%COMP%], 
select[type=number][_ngcontent-%COMP%] {
  appearance: textfield;
  -moz-appearance: textfield;
}
input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button, 
select[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, 
select[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.sm[_nghost-%COMP%]   input[_ngcontent-%COMP%], 
.sm[_nghost-%COMP%]   select[_ngcontent-%COMP%] {
  height: 1.75rem;
  font-size: var(--fold-text-sm);
  padding: 0.25rem 0.5rem;
  border-radius: var(--fold-radius-xs);
}

.md[_nghost-%COMP%]   input[_ngcontent-%COMP%], 
.md[_nghost-%COMP%]   select[_ngcontent-%COMP%] {
  height: 2.25rem;
  font-size: var(--fold-text-md);
  padding: 0.4rem 0.65rem;
  border-radius: var(--fold-radius-sm);
}

.lg[_nghost-%COMP%]   input[_ngcontent-%COMP%], 
.lg[_nghost-%COMP%]   select[_ngcontent-%COMP%] {
  height: 2.75rem;
  font-size: var(--fold-text-lg);
  padding: 0.5rem 0.75rem;
  border-radius: var(--fold-radius-sm);
}

.center[_nghost-%COMP%]   input[_ngcontent-%COMP%] {
  text-align: center;
}

.panel[_nghost-%COMP%]   input[_ngcontent-%COMP%], 
.panel[_nghost-%COMP%]   select[_ngcontent-%COMP%] {
  height: auto;
  padding: var(--fold-space-sm) var(--fold-space-sm);
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-raised);
}
.panel[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus, 
.panel[_nghost-%COMP%]   select[_ngcontent-%COMP%]:focus {
  box-shadow: none;
}

.ni-field.ni-inside[_ngcontent-%COMP%] {
  display: block;
}

.ni-field.ni-outside[_ngcontent-%COMP%] {
  display: flex;
  align-items: stretch;
  gap: var(--fold-space-sm);
}

.ni-box[_ngcontent-%COMP%] {
  position: relative;
  min-width: 0;
}

.ni-outside[_ngcontent-%COMP%]   .ni-box[_ngcontent-%COMP%] {
  flex: 1 1 auto;
}

.ni-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  width: 100%;
}

.ni-inside[_ngcontent-%COMP%]   .ni-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  padding-right: 1.7rem;
}

.ni-stack[_ngcontent-%COMP%] {
  position: absolute;
  top: 1px;
  right: 1px;
  bottom: 1px;
  width: 1.5rem;
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--fold-color-border-subtle);
}

.ni-stack-btn[_ngcontent-%COMP%] {
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--fold-color-text-muted);
  cursor: pointer;
  transition: color var(--fold-motion-fast), background var(--fold-motion-fast);
}
.ni-stack-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  color: var(--fold-color-text);
  background: var(--fold-color-surface-hover);
}
.ni-stack-btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
.ni-stack-btn[_ngcontent-%COMP%]:first-child {
  border-top-right-radius: var(--fold-radius-sm);
}
.ni-stack-btn[_ngcontent-%COMP%]:last-child {
  border-bottom-right-radius: var(--fold-radius-sm);
}

.ni-btn[_ngcontent-%COMP%] {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--fold-color-border-subtle);
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-card);
  color: var(--fold-color-text);
  cursor: pointer;
  transition: border-color var(--fold-motion-fast), background var(--fold-motion-fast);
}
.ni-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  border-color: var(--fold-color-border);
  background: var(--fold-color-surface-hover);
}
.ni-btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.sm[_nghost-%COMP%]   .ni-btn[_ngcontent-%COMP%] {
  width: 1.75rem;
}

.md[_nghost-%COMP%]   .ni-btn[_ngcontent-%COMP%] {
  width: 2.25rem;
}

.lg[_nghost-%COMP%]   .ni-btn[_ngcontent-%COMP%] {
  width: 2.75rem;
}

.ni-step[_ngcontent-%COMP%] {
  position: absolute;
  top: 50%;
  right: 0.6rem;
  transform: translateY(-50%);
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-faded);
  pointer-events: none;
}

.ni-box[_ngcontent-%COMP%]:has(.ni-step)   input[_ngcontent-%COMP%] {
  padding-right: 2.2rem;
}

.ni-inside[_ngcontent-%COMP%]   .ni-box[_ngcontent-%COMP%]:has(.ni-step)   input[_ngcontent-%COMP%] {
  padding-right: 3.4rem;
}

.ni-inside[_ngcontent-%COMP%]   .ni-step[_ngcontent-%COMP%] {
  right: 2rem;
}`]})}export{C as FoldNumberInputComponent};
