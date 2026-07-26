import{x as i,K as s,az as c,as as f,ɵ as p,F as _,L as m,d,C as u,I as b,N as g,f as C,D as v,m as l,j as P,J as x,at as y,au as M,g as O}from"./index-pWDKkeGF.js";const h=["btn"],w=["*"];function k(r,t){r&1&&O(0,"fold-icon",2),r&2&&l("name",t)}class a{disabled=i(!1,{transform:s});tone=i("default");icon=i();selected=c();btn=f("btn");get button(){return this.btn()?.nativeElement}focus(){this.btn()?.nativeElement.focus()}onClick(){this.disabled()||this.selected.emit()}static ɵfac=function(n){return new(n||a)};static ɵcmp=p({type:a,selectors:[["fold-dropdown-item"]],viewQuery:function(n,e){n&1&&y(e.btn,h,5),n&2&&M()},inputs:{disabled:[1,"disabled"],tone:[1,"tone"],icon:[1,"icon"]},outputs:{selected:"selected"},ngContentSelectors:w,decls:5,vars:4,consts:[["btn",""],["type","button","role","menuitem","tabindex","-1",1,"fdrop-item",3,"click","disabled"],["size","sm",1,"fdrop-item-icon",3,"name"],[1,"fdrop-item-label"]],template:function(n,e){if(n&1&&(m(),d(0,"button",1,0),u("click",function(){return e.onClick()}),b(2,k,1,1,"fold-icon",2),d(3,"span",3),g(4),C()()),n&2){let o;v("is-danger",e.tone()==="danger"),l("disabled",e.disabled()),P(2),x((o=e.icon())?2:-1,o)}},dependencies:[_],styles:[`[_nghost-%COMP%] {
  display: contents;
}

.fdrop-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--fold-space-sm);
  width: 100%;
  padding: 7px 10px;
  border: 0;
  border-radius: var(--fold-radius-sm);
  background: transparent;
  color: var(--fold-color-text);
  font: inherit;
  font-size: var(--fold-text-sm);
  text-align: left;
  cursor: pointer;
}
.fdrop-item[_ngcontent-%COMP%]:hover:not(:disabled), .fdrop-item[_ngcontent-%COMP%]:focus-visible {
  background: var(--fold-color-surface-hover);
}
.fdrop-item[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: -2px;
}
.fdrop-item[_ngcontent-%COMP%]:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
.fdrop-item.is-danger[_ngcontent-%COMP%] {
  color: var(--fold-color-alert-text);
}
.fdrop-item.is-danger[_ngcontent-%COMP%]:hover:not(:disabled), .fdrop-item.is-danger[_ngcontent-%COMP%]:focus-visible {
  background: var(--fold-color-alert-surface);
}

.fdrop-item-icon[_ngcontent-%COMP%] {
  flex: none;
  color: var(--fold-color-text-muted);
}

.is-danger[_ngcontent-%COMP%]   .fdrop-item-icon[_ngcontent-%COMP%] {
  color: var(--fold-color-alert-text);
}

.fdrop-item-label[_ngcontent-%COMP%] {
  flex: 1 1 auto;
  min-width: 0;
}`]})}export{a as FoldDropdownItemComponent};
