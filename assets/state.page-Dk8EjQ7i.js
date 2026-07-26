import{K as c}from"./kind-badge.component-DWEkWp60.js";import{s as p,ɵ as g,c as m,b as f,F as _,d as e,g as o,e as t,f as n,B as u,j as l,m as d,l as h}from"./index-CtivJ5eo.js";import{FoldPageSectionComponent as y}from"./page-section.component-C62gJwH_.js";import{FoldButtonComponent as C}from"./button.component-BhwuDnRP.js";import{FoldLoadingStateComponent as w}from"./loading-state.component-a_pcEcfE.js";import{FoldEmptyStateComponent as v}from"./empty-state.component-eWVb5oXK.js";import"./element-title.component-BSioDnCO.js";import"./spinner.component-BfoDqze5.js";import"./tokens.catalog-DF_6rd51.js";class i{created=p(0);static ɵfac=function(a){return new(a||i)};static ɵcmp=g({type:i,selectors:[["gal-state-page"]],decls:53,vars:3,consts:[["title","state views"],["titleBadge","","kind","component"],["description",""],["title","fold-loading","description","Spinner + message, announced politely. Stretches to fill (flex: 1)."],[1,"demo-row"],[1,"gal-cell"],[1,"gal-tag"],["surface","sunken",1,"stage"],["message","Loading contracts…"],["size","lg","message","Crunching numbers…"],["title","fold-empty-state","description","Icon + title + subtitle + optional action; tone=alert for errors."],["title","No contracts yet","subtitle","Draft one to start tracking signatures and addenda."],["empty-icon","","name","add-doc",3,"size"],["foldButton","","size","sm",3,"click"],["tone","alert","title","Failed to load","subtitle","Something went wrong fetching this list."],["empty-icon","","name","x-circle",3,"size"],["foldButton","","emphasis","outline","intent","neutral","size","sm"]],template:function(a,s){a&1&&(e(0,"fold-page-layout",0),o(1,"gal-kind-badge",1),e(2,"p",2),t(3," The two placeholders a section shows while it waits on data. "),e(4,"code"),t(5,"fold-loading"),n(),t(6," spins (over the new "),e(7,"code"),t(8,"fold-spinner"),n(),t(9,") as a "),e(10,"code"),t(11,'role="status"'),n(),t(12," region; "),e(13,"code"),t(14,"fold-empty-state"),n(),t(15," is the calm landing when there's nothing — or an error — to show. "),n(),e(16,"fold-page-section",3)(17,"div",4)(18,"div",5)(19,"span",6),t(20,"default"),n(),e(21,"fold-card",7),o(22,"fold-loading"),n()(),e(23,"div",5)(24,"span",6),t(25,"custom message"),n(),e(26,"fold-card",7),o(27,"fold-loading",8),n()(),e(28,"div",5)(29,"span",6),t(30,"size · lg"),n(),e(31,"fold-card",7),o(32,"fold-loading",9),n()()()(),e(33,"fold-page-section",10)(34,"div",4)(35,"div",5)(36,"span",6),t(37,"empty · with an action"),n(),e(38,"fold-card",7)(39,"fold-empty-state",11),o(40,"fold-icon",12),e(41,"button",13),u("click",function(){return s.created.set(s.created()+1)}),t(42," + New contract "),n()()()(),e(43,"div",5)(44,"span",6),t(45,"tone=alert · error state"),n(),e(46,"fold-card",7)(47,"fold-empty-state",14),o(48,"fold-icon",15),e(49,"button",16),t(50," Retry "),n()()()()(),e(51,"span",6),t(52),n()()()),a&2&&(l(40),d("size",40),l(8),d("size",40),l(4),h("created ",s.created(),"×"))},dependencies:[c,m,y,f,C,_,w,v],styles:[`@charset "UTF-8";


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
}`]})}export{i as default};
