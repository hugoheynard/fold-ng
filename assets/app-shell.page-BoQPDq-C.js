import{s as h,A as H,ɵ as C,c as L,bs as A,bt as N,bu as B,bv as O,F as W,bw as E,E as T,d as l,e as a,f as o,g as m,B as s,h as b,i as P,T as z,w as R,a3 as g,j as t,m as c,U as D,L as v,n as y,o as F,D as I,l as $,x as j,q as S,N as u,O as f,r as k}from"./index-OcjkwYLg.js";import{P as q}from"./panel-scope.directive-Dd1LZbCk.js";import{T as K}from"./tab-panel.component-yC-8qqCx.js";import{K as M}from"./kind-badge.component-CIhkTADE.js";import{C as V}from"./composed-of.component-x5ZEMQ04.js";import{D as U}from"./playground.component-Bu6kfrZ0.js";import{FoldSliderComponent as x}from"./slider.component-DafArxZz.js";import"./view-nav.component-Bto5smIS.js";import"./tab-tooltip.directive-CzY4AB2C.js";import"./auto-update-_srfpL1Q.js";import"./nav-layout.context-BFDffCAQ.js";import"./breakpoints-J4fapboB.js";import"./button.component-CLHJW524.js";import"./element-title.component-GmQ9UVfg.js";import"./page-section.component-CJZquaF_.js";import"./input-value-DCGlOvqF.js";const G=()=>["nav-launcher"],J=(_,i)=>i.id;function Q(_,i){if(_&1){const d=T();l(0,"button",32),s("click",function(){const p=u(d).$implicit,r=S();return r.previewNav.set(p.id),f(r.previewNavOpen.set(!1))}),o()}if(_&2){const d=i.$implicit,e=S();c("icon",d.icon)("label",d.label)("active",e.previewNav()===d.id)}}function X(_,i){_&1&&m(0,"div",30)}function Y(_,i){_&1&&(l(0,"div",31),m(1,"fold-icon",33),l(2,"span",34),a(3,"Now playing — Track 03"),o(),l(4,"span",35),a(5,"1:24 / 3:57"),o()())}class w{theme=h("dark");elevatedPrimary=h(!1);elevatedSecondary=h(!1);elevatedHeader=h(!1);shellHeaderLayout=h("inset");shellFooterLayout=h("full");shellFooterBehavior=h("pinned");shellFooter=h(!0);shellRailWidth=h(64);shellHeaderHeight=h(56);setHeaderLayout(i){this.shellHeaderLayout.set(i)}setFooterLayout(i){this.shellFooterLayout.set(i)}setFooterBehavior(i){this.shellFooterBehavior.set(i)}shellCode=H(()=>["<fold-app-shell",`  headerLayout="${this.shellHeaderLayout()}"`,...this.shellFooter()?[`  footerLayout="${this.shellFooterLayout()}"`,`  footerBehavior="${this.shellFooterBehavior()}"`]:[],`  [railWidth]="${this.shellRailWidth()}"`,`  [headerHeight]="${this.shellHeaderHeight()}"`,">",`  <fold-menu railPrimary${this.elevatedPrimary()?" foldElevated":""}>…</fold-menu>`,`  <fold-menu railSecondary${this.elevatedSecondary()?" foldElevated":""}>…</fold-menu>`,`  <header header${this.elevatedHeader()?" foldElevated":""}>…</header>`,"  <!-- untagged content → the main area -->","  <main>…</main>",...this.shellFooter()?["  <app-player footer>…</app-player>"]:["  <!-- no footer → the footer row collapses -->"],"</fold-app-shell>"].join(`
`));toggleTheme(){this.theme.update(i=>i==="dark"?"light":"dark")}openPreviewPanel(i,d={}){i.open(K,{side:"right",width:260,...d})}railNav=[{id:"home",icon:"home",label:"Home"},{id:"contracts",icon:"contracts",label:"Contracts"},{id:"music",icon:"music",label:"Music"}];previewNav=h("home");previewNavOpen=h(!1);previewBlocks=Array.from({length:8},(i,d)=>d);static ɵfac=function(d){return new(d||w)};static ɵcmp=C({type:w,selectors:[["gal-app-shell-page"]],decls:86,vars:50,consts:[["sph","panelScope"],["previewShell","foldAppShell"],["title","app-shell","icon","grid"],["description",""],["titleBadge","","kind","component"],[3,"ids"],[3,"code","initialWidth"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ss-seg"],["type","button",3,"click"],["params","","label","railWidth",3,"valueChange","min","max","valueText","value"],["params","","label","headerHeight",3,"valueChange","min","max","valueText","value"],["panelScope","",1,"shell-preview"],[3,"mobileNavOpenChange","headerLayout","footerLayout","footerBehavior","railWidth","headerHeight","mobileNavOpen"],["railPrimary","","tint","primary",3,"expanded","foldElevated"],["header","",1,"rail-brand"],["fold-menu-item","",3,"icon","label","active"],["footer","","fold-menu-item","","icon","settings","label","Settings"],["railSecondary","","level","secondary",3,"expanded","foldElevated"],["header","",1,"lib-head"],["fold-menu-item","","icon","grid","label","Overview",3,"active"],["fold-menu-item","","icon","contracts","label","Contracts"],["fold-menu-item","","icon","music","label","Library"],["header","",1,"sp-header",3,"foldElevated"],["type","button","aria-haspopup","dialog","aria-label","Toggle navigation",1,"sp-hamburger",3,"click"],["size","sm",3,"name"],[1,"sp-actions"],["name","contracts","size","sm"],[1,"sp-content"],[1,"sp-block"],["footer","",1,"sp-footer"],["fold-menu-item","",3,"click","icon","label","active"],["name","play","size","sm"],[1,"sp-footer-track"],[1,"sp-footer-time"]],template:function(d,e){if(d&1){const p=T();l(0,"fold-page-layout",2)(1,"p",3),a(2," The application frame: a primary icon rail, an optional secondary rail, a header band, the content area and a self-collapsing footer, wired as one responsive scaffold. It folds on its own width via container queries — the secondary rail collapses first, then the primary — so the same markup serves desktop, tablet and mobile. Header + footer layout (inset or full), footer behaviour (pinned player-bar or scroll-to-reveal legal footer), rail width and header height are inputs; everything else is a design token you can override. Regions float per-surface with "),l(3,"code"),a(4,"foldElevated"),o(),a(5," — the shell owns structure, not skin. "),o(),m(6,"gal-kind-badge",4)(7,"gal-composed-of",5),l(8,"dev-playground",6)(9,"div",7)(10,"span",8),a(11,"foldElevated (per region)"),o(),l(12,"div",9)(13,"button",10),s("click",function(){return e.elevatedPrimary.set(!e.elevatedPrimary())}),a(14," rail 1 "),o(),l(15,"button",10),s("click",function(){return e.elevatedSecondary.set(!e.elevatedSecondary())}),a(16," rail 2 "),o(),l(17,"button",10),s("click",function(){return e.elevatedHeader.set(!e.elevatedHeader())}),a(18," header "),o()()(),l(19,"div",7)(20,"span",8),a(21,"headerLayout"),o(),l(22,"div",9)(23,"button",10),s("click",function(){return e.setHeaderLayout("inset")}),a(24," inset "),o(),l(25,"button",10),s("click",function(){return e.setHeaderLayout("full")}),a(26," full "),o()()(),l(27,"div",7)(28,"span",8),a(29,"footerLayout"),o(),l(30,"div",9)(31,"button",10),s("click",function(){return u(p),e.shellFooter.set(!0),f(e.setFooterLayout("inset"))}),a(32," inset "),o(),l(33,"button",10),s("click",function(){return u(p),e.shellFooter.set(!0),f(e.setFooterLayout("full"))}),a(34," full "),o(),l(35,"button",10),s("click",function(){return e.shellFooter.set(!1)}),a(36," none "),o()()(),l(37,"div",7)(38,"span",8),a(39,"footerBehavior"),o(),l(40,"div",9)(41,"button",10),s("click",function(){return u(p),e.shellFooter.set(!0),f(e.setFooterBehavior("pinned"))}),a(42," pinned "),o(),l(43,"button",10),s("click",function(){return u(p),e.shellFooter.set(!0),f(e.setFooterBehavior("scroll"))}),a(44," scroll "),o()()(),l(45,"fold-slider",11),b("valueChange",function(n){return u(p),k(e.shellRailWidth,n)||(e.shellRailWidth=n),f(n)}),o(),l(46,"fold-slider",12),b("valueChange",function(n){return u(p),k(e.shellHeaderHeight,n)||(e.shellHeaderHeight=n),f(n)}),o(),l(47,"div",13,0)(49,"fold-app-shell",14,1),b("mobileNavOpenChange",function(n){return u(p),k(e.previewNavOpen,n)||(e.previewNavOpen=n),f(n)}),l(51,"fold-menu",15)(52,"div",16),a(53,"S3"),o(),P(54,Q,1,3,"button",17,J),m(56,"button",18),o(),l(57,"fold-menu",19)(58,"div",20),a(59,"Workspace"),o(),m(60,"button",21)(61,"button",22)(62,"button",23),o(),l(63,"div",24)(64,"button",25),s("click",function(){return e.previewNavOpen.set(!e.previewNavOpen())}),m(65,"fold-icon",26),o(),l(66,"span"),a(67,"Header"),o(),l(68,"div",27)(69,"button",10),s("click",function(){u(p);const n=g(48);return f(e.openPreviewPanel(n.service))}),m(70,"fold-icon",28),a(71," Open panel "),o(),l(72,"button",10),s("click",function(){u(p);const n=g(48);return f(e.openPreviewPanel(n.service,{modal:!1}))}),m(73,"fold-icon",28),a(74," Non-modal "),o(),l(75,"button",10),s("click",function(){u(p);const n=g(48);return f(e.openPreviewPanel(n.service,{surface:"solid"}))}),m(76,"fold-icon",28),a(77," Solid "),o(),l(78,"button",10),s("click",function(){return e.toggleTheme()}),m(79,"fold-icon",26),a(80),o()()(),l(81,"div",29),P(82,X,1,0,"div",30,z),o(),R(84,Y,6,0,"div",31),m(85,"fold-panel-host"),o()()()()}if(d&2){const p=g(50);t(7),c("ids",D(49,G)),t(),c("code",e.shellCode())("initialWidth",1280),t(5),v("is-on",e.elevatedPrimary()),t(2),v("is-on",e.elevatedSecondary()),t(2),v("is-on",e.elevatedHeader()),t(6),v("is-on",e.shellHeaderLayout()==="inset"),t(2),v("is-on",e.shellHeaderLayout()==="full"),t(6),v("is-on",e.shellFooter()&&e.shellFooterLayout()==="inset"),t(2),v("is-on",e.shellFooter()&&e.shellFooterLayout()==="full"),t(2),v("is-on",!e.shellFooter()),t(6),v("is-on",e.shellFooterBehavior()==="pinned"),t(2),v("is-on",e.shellFooterBehavior()==="scroll"),t(2),c("min",48)("max",120)("valueText",e.shellRailWidth()+"px"),y("value",e.shellRailWidth),t(),c("min",44)("max",88)("valueText",e.shellHeaderHeight()+"px"),y("value",e.shellHeaderHeight),t(3),c("headerLayout",e.shellHeaderLayout())("footerLayout",e.shellFooterLayout())("footerBehavior",e.shellFooterBehavior())("railWidth",e.shellRailWidth())("headerHeight",e.shellHeaderHeight()),y("mobileNavOpen",e.previewNavOpen),t(2),c("expanded",e.previewNavOpen())("foldElevated",e.elevatedPrimary()),t(3),F(e.railNav),t(3),c("expanded",!0)("foldElevated",e.elevatedSecondary()),t(3),c("active",!0),t(3),c("foldElevated",e.elevatedHeader()),t(),I("aria-expanded",e.previewNavOpen())("aria-controls",p.drawerId),t(),c("name",e.previewNavOpen()?"close":"menu"),t(14),c("name",e.theme()==="dark"?"theme-light":"theme-dark"),t(),$(" ",e.theme()==="dark"?"Light":"Dark"," "),t(2),F(e.previewBlocks),t(2),j(e.shellFooter()?84:-1)}},dependencies:[M,V,L,A,N,B,O,W,x,E,q,U],styles:[`@charset "UTF-8";
.shell-preview {
  /* The container the shell's container queries key off. The playground's
     responsive controller sets the real width + zoom on its frame; this fills
     it (100%), so the shell folds at the true width (secondary at ≤1024, both
     at ≤768). A definite height gives the shell room. */
  container-type: inline-size;
  width: 100%;
  height: 640px;
}

/* The rails are real fold-menu instances — they size + round themselves. */
.sp-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  height: 100%;
  padding: 0 16px;
  background: var(--fold-color-bg-header);
  border-bottom: 1px solid var(--fold-color-border);
  font-weight: var(--fold-weight-bold);
  font-size: var(--fold-text-md);
}

/* Preview drawer toggle — shown only once the shell folds to one column, keyed
   off the shell-preview container's real width (matches the shell's own ≤768
   fold). Keeps the "Header" label hugging it, actions pushed to the right. */
.sp-hamburger {
  display: none;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-left: -4px;
  border: 0;
  border-radius: var(--fold-radius-sm);
  background: transparent;
  color: var(--fold-color-text-secondary);
  cursor: pointer;
}

@container (max-width: 768px) {
  .sp-hamburger {
    display: inline-flex;
  }
}
.sp-hamburger:hover {
  background: var(--fold-color-surface-hover);
  color: var(--fold-color-text);
}

.sp-header > span {
  margin-right: auto;
}

.sp-actions {
  display: flex;
  gap: 8px;
}

.sp-actions button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  border-radius: var(--fold-radius-sm);
  border: 1px solid var(--fold-color-border);
  background: var(--fold-color-surface-card);
  color: var(--fold-color-text);
  font: inherit;
  font-size: var(--fold-text-sm);
  font-weight: var(--fold-weight-semibold);
  cursor: pointer;
}

.sp-actions button:hover {
  border-color: var(--fold-color-primary);
  color: var(--fold-color-primary-text);
}

.sp-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
}

.sp-block {
  height: 64px;
  border-radius: var(--fold-radius-md);
  border: 1px solid var(--fold-color-border-subtle);
  background: var(--fold-color-surface-card);
}

/* A mini player bar in the shell's footer slot — shows the region live. */
.sp-footer {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 100%;
  padding: 10px 16px;
  background: var(--fold-color-bg-header);
  border-top: 1px solid var(--fold-color-border);
  font-size: var(--fold-text-sm);
  font-weight: var(--fold-weight-semibold);
}

.sp-footer-time {
  margin-left: auto;
  color: var(--fold-color-text-muted);
  font-variant-numeric: tabular-nums;
}`],encapsulation:2})}export{w as default};
