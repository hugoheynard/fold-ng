import{s as r,ɵ as c,b9 as d,g as v,d as t,G as _,f as l,e as i,j as o,m,k as b}from"./index-B8uaTEx_.js";import{F as f}from"./view-nav.component-B64ftKNQ.js";class a{tabs=[{key:"overview",label:"Overview"},{key:"members",label:"Members",badge:3},{key:"activity",label:"Activity"}];active=r("overview");static ɵfac=function(e){return new(e||a)};static ɵcmp=c({type:a,selectors:[["app-tab-panel"]],decls:7,vars:3,consts:[["title","Panel with tabs","subtitle","an fold-view-nav inside a side panel"],[1,"pnl-body"],["activeStyle","underline",3,"tabChange","tabs","activeKey"],[1,"pnl-content"]],template:function(e,n){e&1&&(v(0,"fold-panel-header",0),t(1,"div",1)(2,"fold-view-nav",2),_("tabChange",function(p){return n.active.set(p)}),l(),t(3,"div",3),i(4," Active tab: "),t(5,"strong"),i(6),l()()()),e&2&&(o(2),m("tabs",n.tabs)("activeKey",n.active()),o(4),b(n.active()))},dependencies:[d,f],styles:[`[_nghost-%COMP%] {
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
