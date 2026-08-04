import{ak as N,u as p,A as s,a0 as E,ap as z,X as O,Y as j,a5 as R,ɵ as $,F as B,I as q,d as r,w as v,f as l,B as h,g as M,i as y,v as D,J as S,j as i,x as P,D as u,m as g,o as k,E as F,T as V,e as _,q as c,K as m,k as x,l as w,L as H,N as T,a3 as U,O as I}from"./index-F5cuq_px.js";const J={pageSize:"Items per page",perPage:"per page",nav:"Pagination",previous:"Previous page",next:"Next page",empty:"No items",page:n=>`Page ${n}`,range:(n,t,e)=>`${n}–${t} of ${e}`},K=new N("FOLD_PAGINATOR_LABELS",{factory:()=>J});function X(n,t){if(n&1&&(r(0,"option",11),_(1),l()),n&2){const e=t.$implicit,a=c(2);g("value",e)("selected",e===a.effectivePageSize()),i(),w(" ",e," ")}}function Y(n,t){if(n&1){const e=F();r(0,"label",2)(1,"select",10,0),h("change",function(){T(e);const o=U(2),d=c();return I(d.onPageSizeChange(o.value))}),y(3,X,2,3,"option",11,V),l(),r(5,"span",12),_(6),l()()}if(n&2){const e=c(),a=m(0),o=m(1);i(),g("value",e.effectivePageSize())("disabled",e.disabled()),u("aria-label",a.pageSize),i(2),k(o),i(3),x(a.perPage)}}function Q(n,t){if(n&1&&(r(0,"span",3),_(1),l()),n&2){const e=c(),a=m(0);i(),x(a.range(e.rangeStart(),e.rangeEnd(),e.totalItems()))}}function W(n,t){if(n&1&&(r(0,"span",4),_(1),l()),n&2){c();const e=m(0);i(),x(e.empty)}}function Z(n,t){if(n&1){const e=F();r(0,"button",15),h("click",function(){T(e);const o=c().$implicit,d=c();return I(d.goToPage(o.page))}),_(1),l()}if(n&2){const e=c().$implicit,a=c(),o=m(0);H("is-active",e.page===a.page()),g("disabled",a.disabled()),u("aria-current",e.page===a.page()?"page":null)("aria-label",o.page(e.page)),i(),w(" ",e.page," ")}}function ee(n,t){n&1&&(r(0,"span",14),_(1,"…"),l())}function te(n,t){if(n&1&&v(0,Z,2,6,"button",13)(1,ee,2,0,"span",14),n&2){const e=t.$implicit;P(e.kind==="page"?0:1)}}class C{currentPage=p.required();totalItems=p.required();pageSize=p();pageSizeOptions=p([10,25,50,100]);effectivePageSize=s(()=>{const t=this.pageSize();return t!==void 0&&t>0?t:this.pageSizeOptions()[0]??10});siblingCount=p(1);disabled=p(!1,{transform:E});labels=p();pageChange=z();pageSizeChange=z();host=O(j);injectedLabels=O(K);l=s(()=>({...this.injectedLabels,...this.labels()}));totalPages=s(()=>{const t=this.effectivePageSize(),e=this.totalItems();return t<=0||e<=0?1:Math.ceil(e/t)});page=s(()=>Math.min(Math.max(this.currentPage(),1),this.totalPages()));siblings=s(()=>Math.max(0,Math.floor(this.siblingCount())));sizeOptions=s(()=>{const t=this.pageSizeOptions(),e=this.effectivePageSize();return t.includes(e)?t:[...t,e].sort((a,o)=>a-o)});rangeStart=s(()=>this.totalItems()===0?0:(this.page()-1)*this.effectivePageSize()+1);rangeEnd=s(()=>Math.min(this.page()*this.effectivePageSize(),this.totalItems()));canGoPrev=s(()=>!this.disabled()&&this.page()>1);canGoNext=s(()=>!this.disabled()&&this.page()<this.totalPages());pageItems=s(()=>{const t=this.totalPages(),e=this.page(),a=this.siblings();if(t<=5+2*a)return Array.from({length:t},(b,G)=>({kind:"page",page:G+1}));const o=Math.max(e-a,2),d=Math.min(e+a,t-1),L=o>2,A=d<t-1,f=[{kind:"page",page:1}];L&&f.push({kind:"gap"});for(let b=o;b<=d;b++)f.push({kind:"page",page:b});return A&&f.push({kind:"gap"}),f.push({kind:"page",page:t}),f});refocus=null;lastFocusedPage=-1;constructor(){R(()=>{const t=this.page();this.refocus!==null&&t!==this.lastFocusedPage&&(this.applyRefocus(this.refocus),this.refocus=null),this.lastFocusedPage=t})}applyRefocus(t){const e=this.host.nativeElement;let o=e.querySelector(".page-btn.is-active");t==="prev"&&this.canGoPrev()?o=e.querySelector(".nav-btn--prev"):t==="next"&&this.canGoNext()&&(o=e.querySelector(".nav-btn--next")),o?.focus()}goToPage(t,e="active"){if(this.disabled())return;const a=Math.max(1,Math.min(t,this.totalPages()));a!==this.page()&&(this.refocus=e,this.pageChange.emit(a))}prev(){this.canGoPrev()&&this.goToPage(this.page()-1,"prev")}next(){this.canGoNext()&&this.goToPage(this.page()+1,"next")}onPageSizeChange(t){const e=Number(t);Number.isFinite(e)&&e>0&&e!==this.effectivePageSize()&&this.pageSizeChange.emit(e)}static ɵfac=function(e){return new(e||C)};static ɵcmp=$({type:C,selectors:[["fold-paginator"]],inputs:{currentPage:[1,"currentPage"],totalItems:[1,"totalItems"],pageSize:[1,"pageSize"],pageSizeOptions:[1,"pageSizeOptions"],siblingCount:[1,"siblingCount"],disabled:[1,"disabled"],labels:[1,"labels"]},outputs:{pageChange:"pageChange",pageSizeChange:"pageSizeChange"},decls:13,vars:11,consts:[["pageSizeSelect",""],[1,"paginator-left"],[1,"page-size"],[1,"range"],[1,"range","range--empty"],[1,"pages"],["type","button",1,"nav-btn","nav-btn--prev",3,"click","disabled"],["name","chevron-left",3,"size"],["type","button",1,"nav-btn","nav-btn--next",3,"click","disabled"],["name","chevron-right",3,"size"],[1,"page-size__select",3,"change","value","disabled"],[3,"value","selected"],[1,"page-size__label"],["type","button",1,"page-btn",3,"is-active","disabled"],["aria-hidden","true",1,"gap"],["type","button",1,"page-btn",3,"click","disabled"]],template:function(e,a){if(e&1&&(q(0)(1),r(2,"div",1),v(3,Y,7,4,"label",2),v(4,Q,2,1,"span",3)(5,W,2,1,"span",4),l(),r(6,"nav",5)(7,"button",6),h("click",function(){return a.prev()}),M(8,"fold-icon",7),l(),y(9,te,2,1,null,null,D),r(11,"button",8),h("click",function(){return a.next()}),M(12,"fold-icon",9),l()()),e&2){const o=S(a.l());i(),S(a.sizeOptions()),i(2),P(a.pageSizeOptions().length>0?3:-1),i(),P(a.totalItems()>0?4:5),i(2),u("aria-label",o.nav),i(),g("disabled",!a.canGoPrev()),u("aria-label",o.previous),i(),g("size",15),i(),k(a.pageItems()),i(2),g("disabled",!a.canGoNext()),u("aria-label",o.next),i(),g("size",15)}},dependencies:[B],styles:[`@charset "UTF-8";


[_nghost-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--fold-space-lg);
  flex-wrap: wrap;
  padding: var(--fold-space-sm) 0 0;
  color: var(--fold-color-text);
  font-size: var(--fold-text-sm);
}


.paginator-left[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--fold-space-md);
}

.range[_ngcontent-%COMP%] {
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
  font-variant-numeric: tabular-nums;
}

.range--empty[_ngcontent-%COMP%] {
  font-style: italic;
}


.page-size[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: var(--fold-space-sm);
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
}

.page-size__select[_ngcontent-%COMP%] {
  height: 30px;
  padding: 0 var(--fold-space-2xl) 0 var(--fold-space-sm);
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-card) url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%237a7670' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'><path d='M6 9l6 6 6-6'/></svg>") no-repeat right 9px center;
  color: var(--fold-color-text);
  font: inherit;
  font-size: var(--fold-text-sm);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  appearance: none;
  cursor: pointer;
  transition: border-color var(--fold-motion-fast);
}

.page-size__select[_ngcontent-%COMP%]:hover:not(:disabled) {
  border-color: var(--fold-color-border);
}

.page-size__select[_ngcontent-%COMP%]:focus-visible {
  outline: none;
  border-color: var(--fold-color-primary-border);
}

.page-size__select[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-size__select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {
  background: var(--fold-color-surface-card);
}

.page-size__label[_ngcontent-%COMP%] {
  color: var(--fold-color-text-muted);
}


.pages[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: var(--fold-space-xs);
}

.nav-btn[_ngcontent-%COMP%], 
.page-btn[_ngcontent-%COMP%] {
  height: 30px;
  min-width: 30px;
  padding: 0 var(--fold-space-sm);
  display: inline-grid;
  place-items: center;
  border: 1px solid transparent;
  border-radius: var(--fold-radius-sm);
  background: transparent;
  color: var(--fold-color-text-secondary);
  font: inherit;
  font-size: var(--fold-text-sm);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  cursor: pointer;
  transition: background var(--fold-motion-fast), border-color var(--fold-motion-fast), color var(--fold-motion-fast);
}

.nav-btn[_ngcontent-%COMP%]:hover:not(:disabled), 
.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: var(--fold-color-surface-raised);
  color: var(--fold-color-text);
}

.nav-btn[_ngcontent-%COMP%]:focus-visible, 
.page-btn[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: 1px;
}

.nav-btn[_ngcontent-%COMP%]:disabled, 
.page-btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.nav-btn[_ngcontent-%COMP%] {
  color: var(--fold-color-text-muted);
}

.page-btn.is-active[_ngcontent-%COMP%], 
.page-btn.is-active[_ngcontent-%COMP%]:hover {
  background: var(--fold-color-primary-surface);
  border-color: var(--fold-color-primary-border);
  color: var(--fold-color-primary-text);
  cursor: default;
}

.gap[_ngcontent-%COMP%] {
  min-width: 18px;
  text-align: center;
  color: var(--fold-color-text-faded);
  font-size: var(--fold-text-sm);
  user-select: none;
}


@media (max-width: 480px) {
  [_nghost-%COMP%] {
    justify-content: center;
  }
  .page-size__label[_ngcontent-%COMP%] {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .page-btn[_ngcontent-%COMP%], 
   .page-size__select[_ngcontent-%COMP%] {
    transition: none;
  }
}



@media (forced-colors: active) {
  .page-btn.is-active[_ngcontent-%COMP%], 
   .page-btn.is-active[_ngcontent-%COMP%]:hover {
    border-color: Highlight;
    color: Highlight;
  }
}`]})}export{C as FoldPaginatorComponent};
