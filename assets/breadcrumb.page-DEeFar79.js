import{K as d}from"./kind-badge.component-CQy1nnxQ.js";import{C as m}from"./composed-of.component-FVkLJuWn.js";import{FoldBreadcrumbComponent as u}from"./breadcrumb.component-BvWS5QcP.js";import{ɵ as p,c as h,d as a,e,f as t,g as i,j as r,m as s,U as g,k as b}from"./index-Bm0v4t0h.js";import{FoldPageSectionComponent as f}from"./page-section.component-DlzMfByu.js";const k=()=>["icons"];class l{routed=[{label:"Home",routerLink:"/home"},{label:"Navigation",routerLink:"/menu"},{label:"Breadcrumb"}];ancestors=[{label:"Home",routerLink:"/home"},{label:"Navigation",routerLink:"/menu"}];linked=[{label:"example.com",href:"https://example.com"},{label:"Docs",href:"https://example.com/docs"},{label:"Breadcrumb"}];code=`<fold-breadcrumb
  [items]="[
    { label: 'Accueil', routerLink: '/' },
    { label: 'Catalogue', routerLink: '/catalogue' },
    { label: 'Café d’Isère' },        // last = current page (no link)
  ]"
/>

<!-- href crumbs work without the router (external / non-router apps) -->
<fold-breadcrumb [items]="[{ label: 'Docs', href: '/docs' }, { label: 'Here' }]" />

<!-- Above an <h1>: name the ancestors ONLY. The last crumb stays a link and
     nothing claims aria-current — the heading is the current page. -->
<fold-breadcrumb
  [currentPage]="false"
  [items]="[
    { label: 'Produits', routerLink: '/produits' },
    { label: 'Tartes', routerLink: '/produits?famille=tartes' },
  ]"
/>`;static ɵfac=function(o){return new(o||l)};static ɵcmp=p({type:l,selectors:[["gal-breadcrumb-page"]],decls:52,vars:7,consts:[["title","breadcrumb"],["description",""],["titleBadge","","kind","component"],[3,"ids"],["title","routerLink","description","In-app crumbs via Angular routerLink — the last item is the current page."],["ariaLabel","Example breadcrumb",3,"items"],["title","href","description","Plain-URL crumbs — for external links or an app that doesn't use the router."],["ariaLabel","Linked breadcrumb",3,"items"],["title","Ancestors only","description",`[currentPage]="false" — the trail names where the page lives, and the page's own <h1> is the current page. The last crumb keeps linking, and no aria-current is claimed anywhere. This is the shape a trail takes in fold-page-layout's [pageEyebrow].`],["ariaLabel","Ancestor trail",3,"items","currentPage"],[1,"bc-demo-title"],[1,"gal-body"],["title","Usage","icon","code"],[1,"code-block"],[1,"code-top"],[1,"code-lang"],[1,"code-pre"]],template:function(o,n){o&1&&(a(0,"fold-page-layout",0)(1,"p",1),e(2," A hierarchical "),a(3,"strong"),e(4,"trail"),t(),e(5," of links to the current page. Data driven — pass "),a(6,"code"),e(7,"[items]"),t(),e(8,"; each crumb links by an Angular "),a(9,"code"),e(10,"routerLink"),t(),a(11,"strong"),e(12,"or"),t(),e(13," a plain "),a(14,"code"),e(15,"href"),t(),e(16,", so it works in a router app and degrades to anchors without one. The last item is the current page ("),a(17,"code"),e(18,'aria-current="page"'),t(),e(19,"), never a link. It's a "),a(20,"code"),e(21,"navigation"),t(),e(22," landmark; chevrons are decorative. "),t(),i(23,"gal-kind-badge",2)(24,"gal-composed-of",3),a(25,"fold-page-section",4),i(26,"fold-breadcrumb",5),t(),a(27,"fold-page-section",6),i(28,"fold-breadcrumb",7),t(),a(29,"fold-page-section",8),i(30,"fold-breadcrumb",9),a(31,"h2",10),e(32,"Tarte au citron meringuée"),t(),a(33,"p",11),e(34," Read the two together: the trail says "),a(35,"em"),e(36,"where"),t(),e(37,", the heading says "),a(38,"em"),e(39,"what"),t(),e(40,". With the default "),a(41,"code"),e(42,'[currentPage]="true"'),t(),e(43," the product name would appear twice — once as a crumb a screen reader announces as the current page, once as the heading that actually is. "),t()(),a(44,"fold-page-section",12)(45,"div",13)(46,"div",14)(47,"span",15),e(48,"html"),t()(),a(49,"pre",16)(50,"code"),e(51),t()()()()()),o&2&&(r(24),s("ids",g(6,k)),r(2),s("items",n.routed),r(2),s("items",n.linked),r(2),s("items",n.ancestors)("currentPage",!1),r(21),b(n.code))},dependencies:[d,m,u,h,f],styles:[`@charset "UTF-8";

[_nghost-%COMP%] {
  display: block;
}



.bc-demo-title[_ngcontent-%COMP%] {
  margin: var(--fold-space-xs) 0 var(--fold-space-sm);
  font-size: var(--fold-text-lg);
  font-weight: var(--fold-weight-semibold);
  letter-spacing: var(--fold-tracking-tighter);
  color: var(--fold-color-text);
}`]})}export{l as default};
