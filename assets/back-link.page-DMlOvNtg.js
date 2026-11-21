import{K as p}from"./kind-badge.component-Cvhyyed0.js";import{C as m}from"./composed-of.component-9y4cE65_.js";import{FoldBackLinkComponent as k}from"./back-link.component-BuExyxdG.js";import{ɵ as u,c as f,d as o,e,f as n,g as t,j as r,m as l,U as s,k as g}from"./index-BbL9HsBT.js";import{FoldPageSectionComponent as b}from"./page-section.component-TlVspRjV.js";const h=()=>["icons"],y=()=>({from:"/orders"});class i{code=`<!-- in-app route -->
<fold-back-link routerLink="/contrats" label="Tous les contrats" />

<!-- plain / external URL -->
<fold-back-link href="/dashboard" />

<!-- history back (Location.back) — needs no router -->
<fold-back-link label="Retour" />`;static ɵfac=function(a){return new(a||i)};static ɵcmp=u({type:i,selectors:[["gal-back-link-page"]],decls:37,vars:5,consts:[["title","back-link"],["description",""],["titleBadge","","kind","component"],[3,"ids"],["title","Modes","description","routerLink (in-app), href (external / non-router), or a history-back button."],[1,"bl-row"],["routerLink","/menu","label","routerLink → /menu"],["href","https://example.com","label","href → example.com"],["label","history back"],["title","Carrying the query string","description",'In router mode, queryParams, queryParamsHandling and state go straight to RouterLink. A flow opened with ?from=… keeps it on its way back with queryParamsHandling="preserve".'],["routerLink","/menu","label","routerLink → /menu?from=/orders",3,"queryParams"],["routerLink","/menu","queryParamsHandling","preserve","label","keeps this page's query string"],["title","Usage","icon","code"],[1,"code-block"],[1,"code-top"],[1,"code-lang"],[1,"code-pre"]],template:function(a,d){a&1&&(o(0,"fold-page-layout",0)(1,"p",1),e(2," The “← Back” affordance for a detail page. Three modes, picked by which input is set: an in-app "),o(3,"code"),e(4,"routerLink"),n(),e(5,", a plain "),o(6,"code"),e(7,"href"),n(),e(8,", or — with neither — a "),o(9,"strong"),e(10,"history-back"),n(),e(11," button ("),o(12,"code"),e(13,"Location.back()"),n(),e(14,"). Router-coupled but degradable: the history mode needs no router, and importing it never forces "),o(15,"code"),e(16,"@angular/router"),n(),e(17,". "),n(),t(18,"gal-kind-badge",2)(19,"gal-composed-of",3),o(20,"fold-page-section",4)(21,"div",5),t(22,"fold-back-link",6)(23,"fold-back-link",7)(24,"fold-back-link",8),n()(),o(25,"fold-page-section",9)(26,"div",5),t(27,"fold-back-link",10)(28,"fold-back-link",11),n()(),o(29,"fold-page-section",12)(30,"div",13)(31,"div",14)(32,"span",15),e(33,"html"),n()(),o(34,"pre",16)(35,"code"),e(36),n()()()()()),a&2&&(r(19),l("ids",s(3,h)),r(8),l("queryParams",s(4,y)),r(9),g(d.code))},dependencies:[p,m,k,f,b],styles:[`
[_nghost-%COMP%] {
  display: block;
}

.bl-row[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fold-space-lg);
  align-items: center;
}`]})}export{i as default};
