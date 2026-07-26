import{T as h,ad as I,x as s,K as v,a5 as P,y as a,ɵ as O,L as k,N as M,aj as A,P as y,D as T,a4 as g,aN as B,as as z,s as D,aG as q,F as E,B as S,d as p,h as j,C as w,I as K,g as V,f as m,m as f,j as l,n as Q,v as H,J as W,ae as J,at as N,au as x,aJ as R,e as F,k as L,q as U,E as $,r as G,H as X}from"./index-DMBHCi-V.js";import{FoldPopoverComponent as Y}from"./popover.component-BiQGviTw.js";import{F as Z}from"./popover-trigger.directive-B5wwbbdQ.js";import{FoldInputBaseComponent as ee}from"./input-base.component-CeETjThe.js";const te=["*"];class d{host=h(I);listbox=h(u);value=s.required();disabled=s(!1,{transform:v});id=h(P).next("fold-option");selected=a(()=>this.listbox.value()===this.value());active=a(()=>this.listbox.activeId()===this.id);get label(){return this.host.nativeElement.textContent?.trim()??""}scrollIntoView(){this.host.nativeElement.scrollIntoView?.({block:"nearest"})}static ɵfac=function(n){return new(n||d)};static ɵcmp=O({type:d,selectors:[["fold-option"]],hostAttrs:["role","option"],hostVars:9,hostBindings:function(n,t){n&2&&(A("id",t.id),y("aria-selected",t.selected())("aria-disabled",t.disabled()||null),T("is-active",t.active())("is-selected",t.selected())("is-disabled",t.disabled()))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},ngContentSelectors:te,decls:1,vars:0,template:function(n,t){n&1&&(k(),M(0))},styles:[`[_nghost-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.5rem 0.7rem;
  border-radius: var(--fold-radius-sm);
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text);
  cursor: pointer;
  user-select: none;
  scroll-margin: 0.35rem;
}

.is-active[_nghost-%COMP%] {
  background: var(--fold-color-surface-hover);
}

.is-selected[_nghost-%COMP%] {
  font-weight: 600;
  color: var(--fold-color-text);
}

.is-selected[_nghost-%COMP%]::after {
  content: "";
  margin-inline-start: auto;
  width: 0.36rem;
  height: 0.66rem;
  margin-bottom: 0.15rem;
  border: solid var(--fold-color-primary);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.is-disabled[_nghost-%COMP%] {
  color: var(--fold-color-text-muted);
  cursor: not-allowed;
}`]})}const pe=Object.freeze(Object.defineProperty({__proto__:null,FoldOptionComponent:d},Symbol.toStringTag,{value:"Module"})),ne=["list"],oe=["*"],ie=()=>["top-start","bottom-end","top-end"];function se(c,e){c&1&&(p(0,"span",4),F(1),m()),c&2&&(l(),L(e))}function re(c,e){if(c&1&&(p(0,"span",5),F(1),m()),c&2){const n=U();l(),L(n.placeholder())}}class u{value=g("");disabled=s(!1);touched=g(!1);errors=s([]);open=g(!1);size=s("md");variant=s("default");label=s();required=s(!1,{transform:v});optional=s(!1,{transform:v});optionalLabel=s("optional");hint=s();placeholder=s();placement=s("bottom-start");inputId=h(P).next("fold-listbox");listId=`${this.inputId}-list`;options=B(d);list=z("list");activeIndex=D(-1);selectedLabel=a(()=>this.options().find(e=>e.value()===this.value())?.label);activeId=a(()=>this.options()[this.activeIndex()]?.id??null);errorMessage=a(()=>{if(!this.touched())return;const e=this.errors()[0];return e?e.message??e.kind:void 0});describedBy=a(()=>this.errorMessage()?`${this.inputId}-error`:this.hint()?`${this.inputId}-hint`:null);constructor(){q(()=>{this.open()?queueMicrotask(()=>{this.open()&&(this.list()?.nativeElement.focus(),this.armActive())}):this.activeIndex.set(-1)})}onTriggerKeydown(e){this.open()||["ArrowDown","ArrowUp","Enter"," "].includes(e.key)&&(e.preventDefault(),this.open.set(!0))}onListKeydown(e){switch(e.key){case"ArrowDown":e.preventDefault(),this.move(1);break;case"ArrowUp":e.preventDefault(),this.move(-1);break;case"Home":e.preventDefault(),this.setActive(this.edge(1));break;case"End":e.preventDefault(),this.setActive(this.edge(-1));break;case"Enter":case" ":e.preventDefault(),this.selectActive();break;case"Tab":this.open.set(!1);break;default:this.typeahead(e)}}onListClick(e){const n=this.enabledOptionFrom(e.target);n&&this.commit(n)}onListPointermove(e){const n=this.enabledOptionFrom(e.target);n&&this.setActive(this.options().indexOf(n))}enabledOptionFrom(e){if(!(e instanceof Element))return null;const n=e.closest("[role='option']"),t=this.options().find(o=>o.id===n?.id);return t&&!t.disabled()?t:null}edge(e){const n=this.options(),t=[...n.keys()];for(const o of e===1?t:t.reverse())if(!n[o]?.disabled())return o;return-1}armActive(){const e=this.options().findIndex(n=>n.value()===this.value()&&!n.disabled());this.setActive(e>=0?e:this.edge(1))}move(e){const n=this.options();let t=this.activeIndex(),o=n.length;for(;o>0;){if(t=(t+e+n.length)%n.length,!n[t]?.disabled()){this.setActive(t);return}o-=1}}setActive(e){e<0||(this.activeIndex.set(e),this.options()[e]?.scrollIntoView())}selectActive(){const e=this.options()[this.activeIndex()];e&&!e.disabled()&&this.commit(e)}commit(e){this.value.set(e.value()),this.touched.set(!0),this.open.set(!1)}typeBuffer="";typeAt=0;typeahead(e){if(e.key.length!==1||e.ctrlKey||e.metaKey||e.altKey)return;const n=Date.now();this.typeBuffer=n-this.typeAt>500?e.key:this.typeBuffer+e.key,this.typeAt=n;const t=this.typeBuffer.toLowerCase(),o=this.options(),r=t.length===1?1:0,i=Math.max(this.activeIndex(),0);for(let b=0;b<o.length;b+=1){const C=(i+r+b)%o.length,_=o[C];if(_&&!_.disabled()&&_.label.toLowerCase().startsWith(t)){this.setActive(C);return}}}static ɵfac=function(n){return new(n||u)};static ɵcmp=O({type:u,selectors:[["fold-listbox"]],contentQueries:function(n,t,o){n&1&&R(o,t.options,d,4),n&2&&x()},viewQuery:function(n,t){n&1&&N(t.list,ne,5),n&2&&x()},hostVars:2,hostBindings:function(n,t){n&2&&J(t.size()+" "+t.variant())},inputs:{value:[1,"value"],disabled:[1,"disabled"],touched:[1,"touched"],errors:[1,"errors"],open:[1,"open"],size:[1,"size"],variant:[1,"variant"],label:[1,"label"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"],hint:[1,"hint"],placeholder:[1,"placeholder"],placement:[1,"placement"]},outputs:{value:"valueChange",touched:"touchedChange",open:"openChange"},ngContentSelectors:oe,decls:9,vars:20,consts:[["list",""],[3,"label","for","required","optional","optionalLabel","hint","error"],[3,"openChange","open","autoFocus","placement","fallbackPlacements"],["type","button","foldPopoverTrigger","listbox",1,"lb-trigger",3,"keydown","id","disabled"],[1,"lb-value"],[1,"lb-placeholder"],["name","chevron-down","size","sm","aria-hidden","true",1,"lb-caret"],["foldPopoverPanel","","role","listbox","tabindex","-1",1,"lb-list",3,"keydown","click","pointermove","id"]],template:function(n,t){if(n&1){const o=S();k(),p(0,"fold-input-base",1)(1,"fold-popover",2),j("openChange",function(i){return $(o),G(t.open,i)||(t.open=i),X(i)}),p(2,"button",3),w("keydown",function(i){return t.onTriggerKeydown(i)}),K(3,se,2,1,"span",4)(4,re,2,1,"span",5),V(5,"fold-icon",6),m(),p(6,"div",7,0),w("keydown",function(i){return t.onListKeydown(i)})("click",function(i){return t.onListClick(i)})("pointermove",function(i){return t.onListPointermove(i)}),M(8),m()()()}if(n&2){let o;f("label",t.label())("for",t.inputId)("required",t.required())("optional",t.optional())("optionalLabel",t.optionalLabel())("hint",t.hint())("error",t.errorMessage()),l(),Q("open",t.open),f("autoFocus",!1)("placement",t.placement())("fallbackPlacements",H(19,ie)),l(),f("id",t.inputId)("disabled",t.disabled()),y("aria-invalid",t.errorMessage()?!0:null)("aria-describedby",t.describedBy()),l(),W((o=t.selectedLabel())?3:4,o),l(3),f("id",t.listId),y("aria-label",t.label())("aria-activedescendant",t.activeId())}},dependencies:[ee,E,Y,Z],styles:[`[_nghost-%COMP%] {
  display: block;
}

.lb-trigger[_ngcontent-%COMP%] {
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  font-family: inherit;
  color: var(--fold-color-text);
  background: var(--fold-color-surface-card);
  border: 1px solid var(--fold-color-border-subtle);
  cursor: pointer;
  transition: border-color var(--fold-motion-fast), box-shadow var(--fold-motion-fast);
}
.lb-trigger[_ngcontent-%COMP%]:hover:not(:disabled) {
  border-color: var(--fold-color-border);
}
.lb-trigger[_ngcontent-%COMP%]:focus-visible {
  border-color: var(--fold-color-primary);
  box-shadow: 0 0 0 2px var(--fold-color-primary-border);
}
.lb-trigger[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.lb-value[_ngcontent-%COMP%] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.lb-placeholder[_ngcontent-%COMP%] {
  color: var(--fold-color-text-faded);
}

.lb-caret[_ngcontent-%COMP%] {
  margin-inline-start: auto;
  color: var(--fold-color-text-muted);
}

.sm[_nghost-%COMP%]   .lb-trigger[_ngcontent-%COMP%] {
  height: 1.75rem;
  font-size: var(--fold-text-sm);
  padding: 0.25rem 0.5rem;
  border-radius: var(--fold-radius-xs);
}

.md[_nghost-%COMP%]   .lb-trigger[_ngcontent-%COMP%] {
  height: 2.25rem;
  font-size: var(--fold-text-md);
  padding: 0.4rem 0.65rem;
  border-radius: var(--fold-radius-sm);
}

.lg[_nghost-%COMP%]   .lb-trigger[_ngcontent-%COMP%] {
  height: 2.75rem;
  font-size: var(--fold-text-lg);
  padding: 0.5rem 0.75rem;
  border-radius: var(--fold-radius-sm);
}

.panel[_nghost-%COMP%]   .lb-trigger[_ngcontent-%COMP%] {
  height: auto;
  padding: 7px 10px;
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-raised);
}
.panel[_nghost-%COMP%]   .lb-trigger[_ngcontent-%COMP%]:focus-visible {
  box-shadow: none;
}

.lb-list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: var(--fold-popover-anchor-width, 11rem);
  outline: none;
}`]})}const ue=Object.freeze(Object.defineProperty({__proto__:null,FoldListboxComponent:u},Symbol.toStringTag,{value:"Module"}));export{u as F,d as a,ue as l,pe as o};
