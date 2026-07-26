import{a5 as u,w as t,J as p,S as M,a6 as x,x as d,ar as k,ɵ as P,L as a,aj as O,N as i,al as y,am as m,H as b,C as f,j as c,ak as C,O as z,I as _,af as w,e as h,q as v,l as I,k as T}from"./index-RSTDnPfX.js";function q(r,o){r&1&&(a(0,"span",10),h(1," *"),i())}function F(r,o){if(r&1&&(a(0,"span",8),h(1),b(2,q,2,0,"span",10),i()),r&2){const n=v();c(),I("",o," "),c(),_(n.required()?2:-1)}}function B(r,o){if(r&1&&(a(0,"span",11),h(1),i()),r&2){const n=v();f("is-error",n.errorMessage()),C("id",n.errorMessage()?n.inputId+"-error":n.inputId+"-hint"),c(),T(o)}}class g{checked=u(!1);disabled=t(!1);touched=u(!1);errors=t([]);indeterminate=t(!1,{transform:p});label=t();ariaLabel=t();hint=t();required=t(!1,{transform:p});size=t("md");inputId=M(x).next("fold-checkbox");errorMessage=d(()=>{if(!this.touched())return;const o=this.errors()[0];return o?o.message??o.kind:void 0});message=d(()=>this.errorMessage()??this.hint()??null);describedBy=d(()=>this.errorMessage()?`${this.inputId}-error`:this.hint()?`${this.inputId}-hint`:null);constructor(){k(()=>{})}onChange(o){const n=o.target;n instanceof HTMLInputElement&&this.checked.set(n.checked)}onBlur(){this.touched.set(!0)}static ɵfac=function(n){return new(n||g)};static ɵcmp=P({type:g,selectors:[["fold-checkbox"]],hostVars:2,hostBindings:function(n,e){n&2&&w(e.size())},inputs:{checked:[1,"checked"],disabled:[1,"disabled"],touched:[1,"touched"],errors:[1,"errors"],indeterminate:[1,"indeterminate"],label:[1,"label"],ariaLabel:[1,"ariaLabel"],hint:[1,"hint"],required:[1,"required"],size:[1,"size"]},outputs:{checked:"checkedChange",touched:"touchedChange"},decls:10,vars:12,consts:[["native",""],[1,"cb"],["type","checkbox",1,"cb-native",3,"change","blur","id","checked","indeterminate","disabled","required"],["aria-hidden","true",1,"cb-box"],["viewBox","0 0 16 16","fill","none",1,"cb-mark","cb-check"],["d","M3.5 8.5l3 3 6-6.5","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["viewBox","0 0 16 16","fill","none",1,"cb-mark","cb-dash"],["d","M4 8h8","stroke","currentColor","stroke-width","2","stroke-linecap","round"],[1,"cb-label"],[1,"cb-msg",3,"is-error","id"],["aria-hidden","true",1,"cb-req"],[1,"cb-msg",3,"id"]],template:function(n,e){if(n&1&&(a(0,"label",1)(1,"input",2,0),O("change",function(l){return e.onChange(l)})("blur",function(){return e.onBlur()}),i(),a(3,"span",3),y(),a(4,"svg",4),m(5,"path",5),i(),a(6,"svg",6),m(7,"path",7),i()(),b(8,F,3,2,"span",8),i(),b(9,B,2,4,"span",9)),n&2){let s,l;f("is-disabled",e.disabled()),c(),C("id",e.inputId)("checked",e.checked())("indeterminate",e.indeterminate())("disabled",e.disabled())("required",e.required()),z("aria-label",e.label()?null:e.ariaLabel()??null)("aria-describedby",e.describedBy())("aria-invalid",e.errorMessage()?!0:null),c(7),_((s=e.label())?8:-1,s),c(),_((l=e.message())?9:-1,l)}},styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  --cb-size: 18px;
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
}

.sm[_nghost-%COMP%] {
  --cb-size: 15px;
}

.cb[_ngcontent-%COMP%] {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
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
  border: 1.5px solid var(--fold-color-border);
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
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--fold-color-primary) 35%, transparent);
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
  line-height: 1.3;
}

.cb-req[_ngcontent-%COMP%] {
  color: var(--fold-color-alert);
}

.cb-msg[_ngcontent-%COMP%] {
  padding-left: calc(var(--cb-size) + 8px);
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
}`]})}export{g as FoldCheckboxComponent};
