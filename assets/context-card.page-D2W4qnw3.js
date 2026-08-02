import{K as d}from"./kind-badge.component-CqigNCAO.js";import{C as c}from"./composed-of.component-YZCuaBpL.js";import{ɵ as m,c as f,d as n,g as _,i as g,T as C,f as t,j as l,m as s,U as u,o as x,e as o,aa as y}from"./index-9YeDDZTb.js";import{FoldContextCardComponent as v}from"./context-card.component-BuLydi_c.js";import{FoldLinkComponent as k}from"./link.component-CIJSdjx1.js";import"./element-title.component-BMl-YnCE.js";const b=()=>["card","element-title"];function T(i,a){if(i&1&&(n(0,"fold-context-card",4)(1,"div",5)(2,"span",6),o(3,"Créée le"),t(),n(4,"span",7),o(5,"14 mars 2024"),t()(),n(6,"div",5)(7,"span",6),o(8,"Propriétaire"),t(),n(9,"span",7),o(10,"Clément Aubry"),t()(),n(11,"fold-link",8),o(12,"Voir l'organigramme"),t()()),i&2){const e=a.$implicit;s("subtitle",y("iconTone = ",e))("iconTone",e)}}class r{iconTones=["primary","neutral","faded"];static ɵfac=function(e){return new(e||r)};static ɵcmp=m({type:r,selectors:[["gal-context-card-page"]],decls:6,vars:2,consts:[["title","context-card"],["titleBadge","","kind","component"],[3,"ids"],[1,"gal-row","gal-row--wide"],["icon","company","title","Contexte",3,"iconTone","subtitle"],[1,"gal-kv"],[1,"gal-k"],[1,"gal-v"],["footer","","icon","company"]],template:function(e,p){e&1&&(n(0,"fold-page-layout",0),_(1,"gal-kind-badge",1)(2,"gal-composed-of",2),n(3,"div",3),g(4,T,13,3,"fold-context-card",4,C),t()()),e&2&&(l(2),s("ids",u(1,b)),l(2),x(p.iconTones))},dependencies:[d,c,f,v,k],styles:[`.gal-kv {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  border-top: 1px solid var(--fold-color-border-subtle);
}

.gal-kv:first-child {
  border-top: none;
}

.gal-k {
  font-size: 12px;
  color: var(--fold-color-text-muted);
}

.gal-v {
  font-size: 12px;
  font-weight: 600;
}`],encapsulation:2})}export{r as default};
