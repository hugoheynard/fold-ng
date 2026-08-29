import{K as c}from"./kind-badge.component-bNGCGBBY.js";import{C as p}from"./composed-of.component-MvlF-vaa.js";import{s as g,ɵ as m,c as f,b as _,F as u,d as e,g as o,e as t,f as n,B as C,j as s,m as i,U as h,l as y}from"./index-DGc0FOpe.js";import{FoldPageSectionComponent as w}from"./page-section.component-BlHxxPLU.js";import{FoldButtonComponent as v}from"./button.component-CGbc86AG.js";import{FoldLoadingStateComponent as F}from"./loading-state.component-B227MCSP.js";import{FoldEmptyStateComponent as P}from"./empty-state.component-DRZLeHgg.js";import"./common-labels-u5gnvND7.js";const b=()=>["spinner"];class d{created=g(0);static ɵfac=function(a){return new(a||d)};static ɵcmp=m({type:d,selectors:[["gal-state-page"]],decls:54,vars:5,consts:[["title","state views"],["titleBadge","","kind","component"],[3,"ids"],["description",""],["title","fold-loading","description","Spinner + message, announced politely. Stretches to fill (flex: 1)."],[1,"demo-row"],[1,"gal-cell"],[1,"gal-tag"],["surface","sunken",1,"stage"],["message","Loading contracts…"],["size","lg","message","Crunching numbers…"],["title","fold-empty-state","description","Icon + title + subtitle + optional action; tone=alert for errors."],["title","No contracts yet","subtitle","Draft one to start tracking signatures and addenda."],["empty-icon","","name","add-doc",3,"size"],["foldButton","","size","sm",3,"click"],["tone","alert","title","Failed to load","subtitle","Something went wrong fetching this list."],["empty-icon","","name","x-circle",3,"size"],["foldButton","","emphasis","outline","intent","neutral","size","sm"]],template:function(a,l){a&1&&(e(0,"fold-page-layout",0),o(1,"gal-kind-badge",1)(2,"gal-composed-of",2),e(3,"p",3),t(4," The two placeholders a section shows while it waits on data. "),e(5,"code"),t(6,"fold-loading"),n(),t(7," spins (over the new "),e(8,"code"),t(9,"fold-spinner"),n(),t(10,") as a "),e(11,"code"),t(12,'role="status"'),n(),t(13," region; "),e(14,"code"),t(15,"fold-empty-state"),n(),t(16," is the calm landing when there's nothing — or an error — to show. "),n(),e(17,"fold-page-section",4)(18,"div",5)(19,"div",6)(20,"span",7),t(21,"default"),n(),e(22,"fold-card",8),o(23,"fold-loading"),n()(),e(24,"div",6)(25,"span",7),t(26,"custom message"),n(),e(27,"fold-card",8),o(28,"fold-loading",9),n()(),e(29,"div",6)(30,"span",7),t(31,"size · lg"),n(),e(32,"fold-card",8),o(33,"fold-loading",10),n()()()(),e(34,"fold-page-section",11)(35,"div",5)(36,"div",6)(37,"span",7),t(38,"empty · with an action"),n(),e(39,"fold-card",8)(40,"fold-empty-state",12),o(41,"fold-icon",13),e(42,"button",14),C("click",function(){return l.created.set(l.created()+1)}),t(43," + New contract "),n()()()(),e(44,"div",6)(45,"span",7),t(46,"tone=alert · error state"),n(),e(47,"fold-card",8)(48,"fold-empty-state",15),o(49,"fold-icon",16),e(50,"button",17),t(51," Retry "),n()()()()(),e(52,"span",7),t(53),n()()()),a&2&&(s(2),i("ids",h(4,b)),s(39),i("size",40),s(8),i("size",40),s(4),y("created ",l.created(),"×"))},dependencies:[c,p,f,w,_,v,u,F,P],styles:[`@charset "UTF-8";


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
}`]})}export{d as default};
