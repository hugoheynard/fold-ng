import{s as r,ɵ as c,b9 as d,g as _,d as t,G as b,f as l,e as o,j as i,m as v,k as m}from"./index-CQReWx9B.js";import{F as f}from"./tab-nav.component-Bnkr_j3K.js";class a{tabs=[{key:"overview",label:"Overview"},{key:"members",label:"Members",badge:3},{key:"activity",label:"Activity"}];active=r("overview");static ɵfac=function(e){return new(e||a)};static ɵcmp=c({type:a,selectors:[["app-tab-panel"]],decls:7,vars:3,consts:[["title","Panel with tabs","subtitle","an fold-tab-nav inside a side panel"],[1,"pnl-body"],["activeStyle","underline",3,"tabChange","tabs","activeKey"],[1,"pnl-content"]],template:function(e,n){e&1&&(_(0,"fold-panel-header",0),t(1,"div",1)(2,"fold-tab-nav",2),b("tabChange",function(p){return n.active.set(p)}),l(),t(3,"div",3),o(4," Active tab: "),t(5,"strong"),o(6),l()()()),e&2&&(i(2),v("tabs",n.tabs)("activeKey",n.active()),i(4),m(n.active()))},dependencies:[d,f],styles:[`[_nghost-%COMP%] {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  min-height: 0;
}
.pnl-body[_ngcontent-%COMP%] {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.pnl-content[_ngcontent-%COMP%] {
  font-size: 13px;
  color: var(--fold-color-text-secondary);
}`]})}export{a as T};
