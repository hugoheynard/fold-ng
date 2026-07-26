import{af as a,T as o,ad as l,x as r,K as d,a5 as c,y as i,ɵ as m,L as p,N as f,aj as g,P as h,D as _}from"./index-C-AW9i1K.js";const u=new a("FOLD_LISTBOX_OWNER"),b=["*"];class n{host=o(l);owner=o(u);value=r.required();disabled=r(!1,{transform:d});id=o(c).next("fold-option");selected=i(()=>this.owner.isSelected(this.value()));active=i(()=>this.owner.activeId()===this.id);get label(){return this.host.nativeElement.textContent?.trim()??""}scrollIntoView(){this.host.nativeElement.scrollIntoView?.({block:"nearest"})}static ɵfac=function(t){return new(t||n)};static ɵcmp=m({type:n,selectors:[["fold-option"]],hostAttrs:["role","option"],hostVars:9,hostBindings:function(t,e){t&2&&(g("id",e.id),h("aria-selected",e.selected())("aria-disabled",e.disabled()||null),_("is-active",e.active())("is-selected",e.selected())("is-disabled",e.disabled()))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},ngContentSelectors:b,decls:1,vars:0,template:function(t,e){t&1&&(p(),f(0))},styles:[`[_nghost-%COMP%] {
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

.is-selected[_nghost-%COMP%] {
  font-weight: 600;
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

.is-active[_nghost-%COMP%] {
  background: var(--fold-color-primary-surface);
  color: var(--fold-color-primary-text);
}

.is-disabled[_nghost-%COMP%] {
  color: var(--fold-color-text-muted);
  cursor: not-allowed;
}

@media (forced-colors: active) {
  .is-active[_nghost-%COMP%] {
    background: Highlight;
    color: HighlightText;
  }
  .is-selected[_nghost-%COMP%]::after {
    border-color: CanvasText;
  }
  .is-active.is-selected[_nghost-%COMP%]::after {
    border-color: HighlightText;
  }
  .is-disabled[_nghost-%COMP%] {
    color: GrayText;
  }
}`]})}const O=Object.freeze(Object.defineProperty({__proto__:null,FoldOptionComponent:n},Symbol.toStringTag,{value:"Module"}));export{n as F,u as a,O as o};
