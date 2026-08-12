import{K as d}from"./kind-badge.component-CykTP7wP.js";import{C as m}from"./composed-of.component-CW7viUyv.js";import{FoldBreadcrumbComponent as p}from"./breadcrumb.component-C592j6e_.js";import{ɵ as u,c as b,d as a,e,f as t,g as l,j as r,m as i,U as g,k as f}from"./index-pNbL1-Op.js";import{FoldPageSectionComponent as h}from"./page-section.component-C4GoGkeF.js";const k=()=>["icons"];class s{routed=[{label:"Home",routerLink:"/home"},{label:"Navigation",routerLink:"/menu"},{label:"Breadcrumb"}];linked=[{label:"example.com",href:"https://example.com"},{label:"Docs",href:"https://example.com/docs"},{label:"Breadcrumb"}];code=`<fold-breadcrumb
  [items]="[
    { label: 'Accueil', routerLink: '/' },
    { label: 'Catalogue', routerLink: '/catalogue' },
    { label: 'Café d’Isère' },        // last = current page (no link)
  ]"
/>

<!-- href crumbs work without the router (external / non-router apps) -->
<fold-breadcrumb [items]="[{ label: 'Docs', href: '/docs' }, { label: 'Here' }]" />`;static ɵfac=function(o){return new(o||s)};static ɵcmp=u({type:s,selectors:[["gal-breadcrumb-page"]],decls:37,vars:5,consts:[["title","breadcrumb"],["description",""],["titleBadge","","kind","component"],[3,"ids"],["title","routerLink","description","In-app crumbs via Angular routerLink — the last item is the current page."],["ariaLabel","Example breadcrumb",3,"items"],["title","href","description","Plain-URL crumbs — for external links or an app that doesn't use the router."],["ariaLabel","Linked breadcrumb",3,"items"],["title","Usage","icon","code"],[1,"code-block"],[1,"code-top"],[1,"code-lang"],[1,"code-pre"]],template:function(o,n){o&1&&(a(0,"fold-page-layout",0)(1,"p",1),e(2," A hierarchical "),a(3,"strong"),e(4,"trail"),t(),e(5," of links to the current page. Data driven — pass "),a(6,"code"),e(7,"[items]"),t(),e(8,"; each crumb links by an Angular "),a(9,"code"),e(10,"routerLink"),t(),a(11,"strong"),e(12,"or"),t(),e(13," a plain "),a(14,"code"),e(15,"href"),t(),e(16,", so it works in a router app and degrades to anchors without one. The last item is the current page ("),a(17,"code"),e(18,'aria-current="page"'),t(),e(19,"), never a link. It's a "),a(20,"code"),e(21,"navigation"),t(),e(22," landmark; chevrons are decorative. "),t(),l(23,"gal-kind-badge",2)(24,"gal-composed-of",3),a(25,"fold-page-section",4),l(26,"fold-breadcrumb",5),t(),a(27,"fold-page-section",6),l(28,"fold-breadcrumb",7),t(),a(29,"fold-page-section",8)(30,"div",9)(31,"div",10)(32,"span",11),e(33,"html"),t()(),a(34,"pre",12)(35,"code"),e(36),t()()()()()),o&2&&(r(24),i("ids",g(4,k)),r(2),i("items",n.routed),r(2),i("items",n.linked),r(8),f(n.code))},dependencies:[d,m,p,b,h],styles:[`@charset "UTF-8";

[_nghost-%COMP%] {
  display: block;
}`]})}export{s as default};
