import{K as P}from"./kind-badge.component-C-akTEWd.js";import{t as d,ɵ as u,d as t,g as l,L as x,f as o,j as s,m as f,M as h,e as n,z as v,k as y,v as w,P as r,w as C,Q as p,x as M,s as O,c as F,b,F as z,G as S,l as k}from"./index-0jzTNXCk.js";import{F as T}from"./page-section.component-CvYgh4Vg.js";import{F as B}from"./button.component-BzKSMREV.js";import{F as E}from"./spinner.component-Ce5nTO5p.js";import"./element-title.component-9vdrQjKf.js";import"./tokens.catalog-DF_6rd51.js";function L(c,i){if(c&1&&(t(0,"span"),n(1),o()),c&2){const e=v();s(),y(e.message())}}class m{message=d("Loading...");size=d("md");static ɵfac=function(e){return new(e||m)};static ɵcmp=u({type:m,selectors:[["fold-loading"]],hostAttrs:["role","status","aria-live","polite"],inputs:{message:[1,"message"],size:[1,"size"]},decls:3,vars:2,consts:[[1,"loading"],["aria-hidden","true",3,"size"]],template:function(e,a){e&1&&(t(0,"div",0),l(1,"fold-spinner",1),x(2,L,2,1,"span"),o()),e&2&&(s(),f("size",a.size()),s(),h(a.message()?2:-1))},dependencies:[E],styles:[`[_nghost-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.loading[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--fold-space-sm);
  color: var(--fold-color-text-muted);
  font-size: var(--fold-text-sm);
}`]})}const j=[[["","empty-icon",""]],"*"],I=["[empty-icon]","*"];function D(c,i){if(c&1&&(r(0,"p",3),n(1),p()),c&2){const e=v();s(),y(e.subtitle())}}class g{title=d.required();subtitle=d("");tone=d("neutral");static ɵfac=function(e){return new(e||g)};static ɵcmp=u({type:g,selectors:[["fold-empty-state"]],hostVars:2,hostBindings:function(e,a){e&2&&M("alert",a.tone()==="alert")},inputs:{title:[1,"title"],subtitle:[1,"subtitle"],tone:[1,"tone"]},ngContentSelectors:I,decls:8,vars:2,consts:[[1,"empty"],[1,"empty-icon"],[1,"empty-title"],[1,"empty-sub"],[1,"empty-action"]],template:function(e,a){e&1&&(w(j),r(0,"div",0)(1,"div",1),C(2),p(),r(3,"p",2),n(4),p(),x(5,D,2,1,"p",3),r(6,"div",4),C(7,1),p()()),e&2&&(s(4),y(a.title()),s(),h(a.subtitle()?5:-1))},styles:[`[_nghost-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.empty[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 40px 24px;
}

.empty-icon[_ngcontent-%COMP%] {
  color: var(--fold-color-text-faded);
  margin-bottom: 4px;
}

.empty-icon[_ngcontent-%COMP%]:empty {
  display: none;
}

.empty-title[_ngcontent-%COMP%] {
  font-size: var(--fold-text-sm);
  font-weight: 600;
  color: var(--fold-color-text);
  margin: 0;
}

.empty-sub[_ngcontent-%COMP%] {
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
  margin: 0;
  text-align: center;
  max-width: 320px;
  line-height: 1.6;
}

.empty-action[_ngcontent-%COMP%] {
  margin-top: 4px;
}

.empty-action[_ngcontent-%COMP%]:empty {
  display: none;
}

.alert[_nghost-%COMP%]   .empty-icon[_ngcontent-%COMP%], 
.alert[_nghost-%COMP%]   .empty-title[_ngcontent-%COMP%] {
  color: var(--fold-color-alert-text);
}`]})}class _{created=O(0);static ɵfac=function(e){return new(e||_)};static ɵcmp=u({type:_,selectors:[["gal-state-page"]],decls:53,vars:3,consts:[["title","state views"],["titleBadge","","kind","component"],["description",""],["title","fold-loading","description","Spinner + message, announced politely. Stretches to fill (flex: 1)."],[1,"demo-row"],[1,"gal-cell"],[1,"gal-tag"],["surface","sunken",1,"stage"],["message","Loading contracts…"],["size","lg","message","Crunching numbers…"],["title","fold-empty-state","description","Icon + title + subtitle + optional action; tone=alert for errors."],["title","No contracts yet","subtitle","Draft one to start tracking signatures and addenda."],["empty-icon","","name","add-doc",3,"size"],["foldButton","","size","sm",3,"click"],["tone","alert","title","Failed to load","subtitle","Something went wrong fetching this list."],["empty-icon","","name","x-circle",3,"size"],["foldButton","","emphasis","outline","intent","neutral","size","sm"]],template:function(e,a){e&1&&(t(0,"fold-page-layout",0),l(1,"gal-kind-badge",1),t(2,"p",2),n(3," The two placeholders a section shows while it waits on data. "),t(4,"code"),n(5,"fold-loading"),o(),n(6," spins (over the new "),t(7,"code"),n(8,"fold-spinner"),o(),n(9,") as a "),t(10,"code"),n(11,'role="status"'),o(),n(12," region; "),t(13,"code"),n(14,"fold-empty-state"),o(),n(15," is the calm landing when there's nothing — or an error — to show. "),o(),t(16,"fold-page-section",3)(17,"div",4)(18,"div",5)(19,"span",6),n(20,"default"),o(),t(21,"fold-card",7),l(22,"fold-loading"),o()(),t(23,"div",5)(24,"span",6),n(25,"custom message"),o(),t(26,"fold-card",7),l(27,"fold-loading",8),o()(),t(28,"div",5)(29,"span",6),n(30,"size · lg"),o(),t(31,"fold-card",7),l(32,"fold-loading",9),o()()()(),t(33,"fold-page-section",10)(34,"div",4)(35,"div",5)(36,"span",6),n(37,"empty · with an action"),o(),t(38,"fold-card",7)(39,"fold-empty-state",11),l(40,"fold-icon",12),t(41,"button",13),S("click",function(){return a.created.set(a.created()+1)}),n(42," + New contract "),o()()()(),t(43,"div",5)(44,"span",6),n(45,"tone=alert · error state"),o(),t(46,"fold-card",7)(47,"fold-empty-state",14),l(48,"fold-icon",15),t(49,"button",16),n(50," Retry "),o()()()()(),t(51,"span",6),n(52),o()()()),e&2&&(s(40),f("size",40),s(8),f("size",40),s(4),k("created ",a.created(),"×"))},dependencies:[P,F,T,b,B,z,m,g],styles:[`@charset "UTF-8";


gal-state-page[_ngcontent-%COMP%] {
  --fold-page-gap: 48px;
  display: block;
}

gal-state-page[_ngcontent-%COMP%]   .demo-row[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fold-space-lg);
  margin-top: var(--fold-space-md);
}

gal-state-page[_ngcontent-%COMP%]   .demo-row[_ngcontent-%COMP%]   .gal-cell[_ngcontent-%COMP%] {
  flex: 1 1 260px;
}


gal-state-page[_ngcontent-%COMP%]   .stage[_ngcontent-%COMP%] {
  display: flex;
  min-height: 180px;
  margin-top: var(--fold-space-sm);
}`]})}export{_ as default};
