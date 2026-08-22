import{s as r,ɵ as d,aK as p,g as v,d as t,B as _,f as i,e as o,j as l,m,k as f}from"./index-Bbfm_eFW.js";import{FoldViewNavComponent as y}from"./view-nav.component-DYnTsce7.js";class a{tabs=[{key:"overview",label:"Overview"},{key:"members",label:"Members",badge:3},{key:"activity",label:"Activity"}];active=r("overview");static ɵfac=function(e){return new(e||a)};static ɵcmp=d({type:a,selectors:[["app-tab-panel"]],decls:7,vars:3,consts:[["title","Panel with tabs","subtitle","an fold-view-nav inside a side panel"],[1,"pnl-body"],["direction","horizontal","background","surface","activeStyle","underline",3,"activeKeyChange","items","activeKey"],[1,"pnl-content"]],template:function(e,n){e&1&&(v(0,"fold-panel-header",0),t(1,"div",1)(2,"fold-view-nav",2),_("activeKeyChange",function(c){return n.active.set(c)}),i(),t(3,"div",3),o(4," Active tab: "),t(5,"strong"),o(6),i()()()),e&2&&(l(2),m("items",n.tabs)("activeKey",n.active()),l(4),f(n.active()))},dependencies:[p,y],styles:[`[_nghost-%COMP%] {
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
