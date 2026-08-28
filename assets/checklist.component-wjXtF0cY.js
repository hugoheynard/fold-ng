import{u as c,ɵ as p,F as m,d as o,i as _,f as s,j as l,o as g,g as f,e as r,q as h,ai as x,m as C,k as d}from"./index-JouYLep9.js";const u=(a,t)=>t.label;function y(a,t){if(a&1&&(o(0,"li",2),f(1,"fold-icon",3),o(2,"span",4),r(3),s(),o(4,"span",5),r(5),s()()),a&2){const n=t.$implicit,e=h();x(n.state),l(),C("name",e.glyph[n.state]),l(2),d(e.stateLabels()[n.state]),l(2),d(n.label)}}class i{items=c.required();glyph={done:"check",todo:"alert",optional:"minus"};stateLabels=c({done:"Done:",todo:"Missing:",optional:"Optional:"});static ɵfac=function(n){return new(n||i)};static ɵcmp=p({type:i,selectors:[["fold-checklist"]],inputs:{items:[1,"items"],stateLabels:[1,"stateLabels"]},decls:3,vars:0,consts:[["role","list",1,"cl-list"],[1,"cl-item",3,"class"],[1,"cl-item"],["aria-hidden","true","size","sm",1,"cl-glyph",3,"name"],[1,"cl-sr"],[1,"cl-label"]],template:function(n,e){n&1&&(o(0,"ul",0),_(1,y,6,5,"li",1,u),s()),n&2&&(l(),g(e.items()))},dependencies:[m],styles:[`@charset "UTF-8";
.cl-list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--fold-space-sm);
  margin: 0;
  padding: 0;
  

  list-style: none;
}

.cl-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  gap: var(--fold-space-sm);
  min-width: 0;
  color: var(--fold-color-text-secondary);
  font-size: var(--fold-text-sm);
  line-height: var(--fold-leading-snug);
}

.cl-glyph[_ngcontent-%COMP%] {
  flex: none;
  

  margin-block-start: 1px;
}

.cl-item.done[_ngcontent-%COMP%]   .cl-glyph[_ngcontent-%COMP%] {
  color: var(--fold-color-success-text);
}

.cl-item.todo[_ngcontent-%COMP%] {
  color: var(--fold-color-warning-text);
  font-weight: var(--fold-weight-medium);
}

.cl-item.todo[_ngcontent-%COMP%]   .cl-glyph[_ngcontent-%COMP%] {
  color: var(--fold-color-warning-text);
}

.cl-item.optional[_ngcontent-%COMP%] {
  color: var(--fold-color-text-muted);
}

.cl-item.optional[_ngcontent-%COMP%]   .cl-glyph[_ngcontent-%COMP%] {
  color: var(--fold-color-text-faded);
}



.cl-sr[_ngcontent-%COMP%] {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}`]})}export{i as FoldChecklistComponent};
