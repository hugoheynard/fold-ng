import{af as m,u as i,a0 as C,X as M,ag as x,A as p,a4 as k,s as P,a6 as O,ɵ as y,a1 as j,y as r,am as w,z as a,aC as z,aN as v,w as d,L as g,j as c,an as f,D as F,x as b,ai as L,a8 as T,a9 as q,e as _,q as h,l as I,a2 as B,k as E}from"./index-BQvjHhzq.js";const H=["projected"],S=["*"];function A(t,o){t&1&&(r(0,"span",12),_(1," *"),a())}function Q(t,o){if(t&1&&(r(0,"span",9),_(1),d(2,A,2,0,"span",12),a()),t&2){const n=h();c(),I("",o," "),c(),b(n.required()?2:-1)}}function D(t,o){t&1&&(r(0,"span",12),_(1," *"),a())}function N(t,o){if(t&1&&(r(0,"span",13,1),B(2),d(3,D,2,0,"span",12),a()),t&2){const n=h();g("is-empty",!n.projectedLabel()),f("id",n.inputId+"-label"),c(3),b(n.required()&&n.projectedLabel()?3:-1)}}function V(t,o){if(t&1&&(r(0,"span",14),_(1),a()),t&2){const n=h();g("is-error",n.errorMessage()),f("id",n.errorMessage()?n.inputId+"-error":n.inputId+"-hint"),c(),E(o)}}class u{checked=m(!1);disabled=i(!1);touched=m(!1);errors=i([]);indeterminate=i(!1,{transform:C});label=i();ariaLabel=i();hint=i();required=i(!1,{transform:C});size=i("md");inputId=M(x).next("fold-checkbox");errorMessage=p(()=>{if(!this.touched())return;const o=this.errors()[0];return o?o.message??o.kind:void 0});message=p(()=>this.errorMessage()??this.hint()??null);describedBy=p(()=>this.errorMessage()?`${this.inputId}-error`:this.hint()?`${this.inputId}-hint`:null);projected=k("projected");projectedLabel=P(!1);constructor(){O(()=>{const o=this.projected()?.nativeElement.textContent?.trim()??"";this.projectedLabel.set(o.length>0)})}onChange(o){const n=o.target;n instanceof HTMLInputElement&&this.checked.set(n.checked)}onBlur(){this.touched.set(!0)}static ɵfac=function(n){return new(n||u)};static ɵcmp=y({type:u,selectors:[["fold-checkbox"]],viewQuery:function(n,e){n&1&&T(e.projected,H,5),n&2&&q()},hostVars:2,hostBindings:function(n,e){n&2&&L(e.size())},inputs:{checked:[1,"checked"],disabled:[1,"disabled"],touched:[1,"touched"],errors:[1,"errors"],indeterminate:[1,"indeterminate"],label:[1,"label"],ariaLabel:[1,"ariaLabel"],hint:[1,"hint"],required:[1,"required"],size:[1,"size"]},outputs:{checked:"checkedChange",touched:"touchedChange"},ngContentSelectors:S,decls:11,vars:13,consts:[["native",""],["projected",""],[1,"cb"],["type","checkbox",1,"cb-native",3,"change","blur","id","checked","indeterminate","disabled","required"],["aria-hidden","true",1,"cb-box"],["viewBox","0 0 16 16","fill","none",1,"cb-mark","cb-check"],["d","M3.5 8.5l3 3 6-6.5","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["viewBox","0 0 16 16","fill","none",1,"cb-mark","cb-dash"],["d","M4 8h8","stroke","currentColor","stroke-width","2","stroke-linecap","round"],[1,"cb-label"],[1,"cb-label",3,"is-empty","id"],[1,"cb-msg",3,"is-error","id"],["aria-hidden","true",1,"cb-req"],[1,"cb-label",3,"id"],[1,"cb-msg",3,"id"]],template:function(n,e){if(n&1&&(j(),r(0,"label",2)(1,"input",3,0),w("change",function(s){return e.onChange(s)})("blur",function(){return e.onBlur()}),a(),r(3,"span",4),z(),r(4,"svg",5),v(5,"path",6),a(),r(6,"svg",7),v(7,"path",8),a()(),d(8,Q,3,2,"span",9)(9,N,4,4,"span",10),a(),d(10,V,2,4,"span",11)),n&2){let l,s;g("is-disabled",e.disabled()),c(),f("id",e.inputId)("checked",e.checked())("indeterminate",e.indeterminate())("disabled",e.disabled())("required",e.required()),F("aria-label",e.label()||e.projectedLabel()?null:e.ariaLabel()??null)("aria-labelledby",!e.label()&&e.projectedLabel()?e.inputId+"-label":null)("aria-describedby",e.describedBy())("aria-invalid",e.errorMessage()?!0:null),c(7),b((l=e.label())?8:9,l),c(2),b((s=e.message())?10:-1,s)}},styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  --cb-size: 18px;
  display: inline-flex;
  flex-direction: column;
  gap: var(--fold-space-xs);
}

.sm[_nghost-%COMP%] {
  --cb-size: 15px;
}

.cb[_ngcontent-%COMP%] {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--fold-space-sm);
  cursor: pointer;
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text);
  user-select: none;
}

.cb.is-disabled[_ngcontent-%COMP%] {
  cursor: not-allowed;
  color: var(--fold-color-text-muted);
}



.cb-native[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  left: 0;
  width: var(--cb-size);
  height: var(--cb-size);
  margin: 0;
  opacity: 0;
  cursor: inherit;
}

.cb-box[_ngcontent-%COMP%] {
  position: relative;
  flex-shrink: 0;
  display: inline-grid;
  place-items: center;
  width: var(--cb-size);
  height: var(--cb-size);
  border: 1.5px solid var(--fold-color-border-field);
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-card);
  color: var(--fold-color-on-primary);
  transition: background var(--fold-motion-fast), border-color var(--fold-motion-fast), box-shadow var(--fold-motion-fast);
}

.cb[_ngcontent-%COMP%]:hover   .cb-native[_ngcontent-%COMP%]:not(:disabled)    ~ .cb-box[_ngcontent-%COMP%] {
  border-color: var(--fold-color-primary);
}


.cb-native[_ngcontent-%COMP%]:checked    ~ .cb-box[_ngcontent-%COMP%], 
.cb-native[_ngcontent-%COMP%]:indeterminate    ~ .cb-box[_ngcontent-%COMP%] {
  background: var(--fold-color-primary);
  border-color: var(--fold-color-primary);
}



.cb-native[_ngcontent-%COMP%]:focus-visible    ~ .cb-box[_ngcontent-%COMP%] {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: 2px;
}


.cb-mark[_ngcontent-%COMP%] {
  grid-area: 1/1;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: scale(0.6);
  transition: opacity var(--fold-motion-fast), transform var(--fold-motion-fast);
}

.cb-native[_ngcontent-%COMP%]:checked    ~ .cb-box[_ngcontent-%COMP%]   .cb-check[_ngcontent-%COMP%] {
  opacity: 1;
  transform: none;
}

.cb-native[_ngcontent-%COMP%]:indeterminate    ~ .cb-box[_ngcontent-%COMP%]   .cb-check[_ngcontent-%COMP%] {
  opacity: 0;
}

.cb-native[_ngcontent-%COMP%]:indeterminate    ~ .cb-box[_ngcontent-%COMP%]   .cb-dash[_ngcontent-%COMP%] {
  opacity: 1;
  transform: none;
}


.cb-native[_ngcontent-%COMP%]:disabled    ~ .cb-box[_ngcontent-%COMP%] {
  background: var(--fold-color-surface-raised);
  border-color: var(--fold-color-border-subtle);
}

.cb-native[_ngcontent-%COMP%]:checked:disabled    ~ .cb-box[_ngcontent-%COMP%], 
.cb-native[_ngcontent-%COMP%]:indeterminate:disabled    ~ .cb-box[_ngcontent-%COMP%] {
  background: color-mix(in srgb, var(--fold-color-primary) 45%, var(--fold-color-surface-sunken));
  border-color: transparent;
}

.cb-label[_ngcontent-%COMP%] {
  line-height: var(--fold-leading-snug);
}

.cb-label.is-empty[_ngcontent-%COMP%] {
  display: none;
}


.cb-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: var(--fold-color-primary-text);
  text-decoration: underline;
  cursor: pointer;
}

.cb-req[_ngcontent-%COMP%] {
  color: var(--fold-color-alert);
}

.cb-msg[_ngcontent-%COMP%] {
  padding-left: calc(var(--cb-size) + var(--fold-space-sm));
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
}

.cb-msg.is-error[_ngcontent-%COMP%] {
  color: var(--fold-color-alert);
}

@media (prefers-reduced-motion: reduce) {
  .cb-box[_ngcontent-%COMP%], 
   .cb-mark[_ngcontent-%COMP%] {
    transition: none;
  }
}

@media (forced-colors: active) {
  .cb-box[_ngcontent-%COMP%] {
    border-color: CanvasText;
  }
  .cb-native[_ngcontent-%COMP%]:checked    ~ .cb-box[_ngcontent-%COMP%], 
   .cb-native[_ngcontent-%COMP%]:indeterminate    ~ .cb-box[_ngcontent-%COMP%] {
    background: Highlight;
    border-color: Highlight;
  }
  .cb-mark[_ngcontent-%COMP%] {
    color: HighlightText;
  }
  .cb-native[_ngcontent-%COMP%]:focus-visible    ~ .cb-box[_ngcontent-%COMP%] {
    outline: 2px solid CanvasText;
    outline-offset: 2px;
  }
}`]})}export{u as FoldCheckboxComponent};
