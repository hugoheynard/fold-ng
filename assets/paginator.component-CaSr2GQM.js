import{w as g,b0 as P,x as d,ɵ as F,F as T,bp as I,d as r,H as b,f as s,B as m,g as C,i as x,bd as G,bq as q,j as o,I as h,m as l,o as z,A as M,u as N,e as _,q as c,br as j,bs as B,k as E,C as L,O as $,l as A,D as O,P as V,E as y}from"./index-UW4on9BG.js";function D(a,t){if(a&1&&(r(0,"option",11),_(1),s()),a&2){const e=t.$implicit;l("value",e),o(),E(e)}}function H(a,t){if(a&1){const e=M();r(0,"label",2)(1,"select",10,0),m("change",function(){O(e);const i=V(2),p=c();return y(p.onPageSizeChange(i.value))}),x(3,D,2,2,"option",11,N),s(),r(5,"span",12),_(6,"par page"),s()()}if(a&2){const e=c(),n=j(0);o(),l("value",e.pageSize())("disabled",e.disabled()),o(2),z(n)}}function R(a,t){if(a&1&&(r(0,"span",3),_(1),s()),a&2){const e=c();o(),B("",e.rangeStart(),"–",e.rangeEnd()," sur ",e.totalItems())}}function U(a,t){a&1&&(r(0,"span",4),_(1,"Aucun élément"),s())}function J(a,t){if(a&1){const e=M();r(0,"button",15),m("click",function(){O(e);const i=c().$implicit,p=c();return y(p.goToPage(i.page))}),_(1),s()}if(a&2){const e=c().$implicit,n=c();L("is-active",e.page===n.currentPage()),l("disabled",n.disabled()),$("aria-current",e.page===n.currentPage()?"page":null)("aria-label","Page "+e.page),o(),A(" ",e.page," ")}}function K(a,t){a&1&&(r(0,"span",14),_(1,"…"),s())}function Q(a,t){if(a&1&&b(0,J,2,6,"button",13)(1,K,2,0,"span",14),a&2){const e=t.$implicit;h(e.kind==="page"?0:1)}}class v{currentPage=g.required();totalItems=g.required();pageSize=g.required();pageSizeOptions=g([10,25,50,100]);siblingCount=g(1);disabled=g(!1);pageChange=P();pageSizeChange=P();totalPages=d(()=>{const t=this.pageSize(),e=this.totalItems();return t<=0||e<=0?1:Math.ceil(e/t)});rangeStart=d(()=>this.totalItems()===0?0:(this.currentPage()-1)*this.pageSize()+1);rangeEnd=d(()=>Math.min(this.currentPage()*this.pageSize(),this.totalItems()));canGoPrev=d(()=>!this.disabled()&&this.currentPage()>1);canGoNext=d(()=>!this.disabled()&&this.currentPage()<this.totalPages());pageItems=d(()=>{const t=this.totalPages(),e=this.currentPage(),n=Math.max(0,this.siblingCount());if(t<=5+2*n)return Array.from({length:t},(f,w)=>({kind:"page",page:w+1}));const i=Math.max(e-n,2),p=Math.min(e+n,t-1),k=i>2,S=p<t-1,u=[{kind:"page",page:1}];k&&u.push({kind:"gap"});for(let f=i;f<=p;f++)u.push({kind:"page",page:f});return S&&u.push({kind:"gap"}),u.push({kind:"page",page:t}),u});goToPage(t){if(this.disabled())return;const e=Math.max(1,Math.min(t,this.totalPages()));e!==this.currentPage()&&this.pageChange.emit(e)}prev(){this.canGoPrev()&&this.goToPage(this.currentPage()-1)}next(){this.canGoNext()&&this.goToPage(this.currentPage()+1)}onPageSizeChange(t){const e=Number(t);Number.isFinite(e)&&e>0&&e!==this.pageSize()&&this.pageSizeChange.emit(e)}static ɵfac=function(e){return new(e||v)};static ɵcmp=F({type:v,selectors:[["fold-paginator"]],inputs:{currentPage:[1,"currentPage"],totalItems:[1,"totalItems"],pageSize:[1,"pageSize"],pageSizeOptions:[1,"pageSizeOptions"],siblingCount:[1,"siblingCount"],disabled:[1,"disabled"]},outputs:{pageChange:"pageChange",pageSizeChange:"pageSizeChange"},decls:12,vars:7,consts:[["pageSizeSelect",""],[1,"paginator-left"],[1,"page-size"],[1,"range"],[1,"range","range--empty"],["aria-label","Pagination",1,"pages"],["type","button","aria-label","Page précédente",1,"nav-btn",3,"click","disabled"],["name","chevron-left",3,"size"],["type","button","aria-label","Page suivante",1,"nav-btn",3,"click","disabled"],["name","chevron-right",3,"size"],["aria-label","Éléments par page",1,"page-size__select",3,"change","value","disabled"],[3,"value"],[1,"page-size__label"],["type","button",1,"page-btn",3,"is-active","disabled"],["aria-hidden","true",1,"gap"],["type","button",1,"page-btn",3,"click","disabled"]],template:function(e,n){if(e&1&&(I(0),r(1,"div",1),b(2,H,7,2,"label",2),b(3,R,2,3,"span",3)(4,U,2,0,"span",4),s(),r(5,"nav",5)(6,"button",6),m("click",function(){return n.prev()}),C(7,"fold-icon",7),s(),x(8,Q,2,1,null,null,G),r(10,"button",8),m("click",function(){return n.next()}),C(11,"fold-icon",9),s()()),e&2){const i=q(n.pageSizeOptions());o(2),h(i.length>0?2:-1),o(),h(n.totalItems()>0?3:4),o(3),l("disabled",!n.canGoPrev()),o(),l("size",15),o(),z(n.pageItems()),o(2),l("disabled",!n.canGoNext()),o(),l("size",15)}},dependencies:[T],styles:[`@charset "UTF-8";


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
  padding: 0 26px 0 10px;
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
  padding: 0 8px;
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
}`]})}export{v as FoldPaginatorComponent};
