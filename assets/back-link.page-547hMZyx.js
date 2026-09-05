import{K as d}from"./kind-badge.component-DMWmo4eK.js";import{C as s}from"./composed-of.component-BklV5_yR.js";import{FoldBackLinkComponent as p}from"./back-link.component-DfsF1PzV.js";import{ɵ as k,c as m,d as o,e,f as n,g as r,j as i,m as f,U as b,k as u}from"./index-BUdcCUHG.js";import{FoldPageSectionComponent as g}from"./page-section.component-6d-bY57u.js";const h=()=>["icons"];class a{code=`<!-- in-app route -->
<fold-back-link routerLink="/contrats" label="Tous les contrats" />

<!-- plain / external URL -->
<fold-back-link href="/dashboard" />

<!-- history back (Location.back) — needs no router -->
<fold-back-link label="Retour" />`;static ɵfac=function(t){return new(t||a)};static ɵcmp=k({type:a,selectors:[["gal-back-link-page"]],decls:33,vars:3,consts:[["title","back-link"],["description",""],["titleBadge","","kind","component"],[3,"ids"],["title","Modes","description","routerLink (in-app), href (external / non-router), or a history-back button."],[1,"bl-row"],["routerLink","/menu","label","routerLink → /menu"],["href","https://example.com","label","href → example.com"],["label","history back"],["title","Usage","icon","code"],[1,"code-block"],[1,"code-top"],[1,"code-lang"],[1,"code-pre"]],template:function(t,c){t&1&&(o(0,"fold-page-layout",0)(1,"p",1),e(2," The “← Back” affordance for a detail page. Three modes, picked by which input is set: an in-app "),o(3,"code"),e(4,"routerLink"),n(),e(5,", a plain "),o(6,"code"),e(7,"href"),n(),e(8,", or — with neither — a "),o(9,"strong"),e(10,"history-back"),n(),e(11," button ("),o(12,"code"),e(13,"Location.back()"),n(),e(14,"). Router-coupled but degradable: the history mode needs no router, and importing it never forces "),o(15,"code"),e(16,"@angular/router"),n(),e(17,". "),n(),r(18,"gal-kind-badge",2)(19,"gal-composed-of",3),o(20,"fold-page-section",4)(21,"div",5),r(22,"fold-back-link",6)(23,"fold-back-link",7)(24,"fold-back-link",8),n()(),o(25,"fold-page-section",9)(26,"div",10)(27,"div",11)(28,"span",12),e(29,"html"),n()(),o(30,"pre",13)(31,"code"),e(32),n()()()()()),t&2&&(i(19),f("ids",b(2,h)),i(13),u(c.code))},dependencies:[d,s,p,m,g],styles:[`
[_nghost-%COMP%] {
  display: block;
}

.bl-row[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fold-space-lg);
  align-items: center;
}`]})}export{a as default};
