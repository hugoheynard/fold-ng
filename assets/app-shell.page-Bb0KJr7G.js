import{a2 as L,a9 as F,V as A,aH as N,s as h,A as B,ɵ as O,c as W,br as E,bs as z,bt as R,bu as D,F as I,bv as $,E as C,d as t,e as l,f as o,g as v,B as s,h as b,i as S,S as j,w as x,$ as P,j as a,m as c,T as M,L as u,n as y,o as H,D as V,l as q,x as K,q as T,M as f,N as m,r as k}from"./index-CQebbVEP.js";import{T as U}from"./tab-panel.component-DFe4ZAML.js";import{K as G}from"./kind-badge.component-BLQ_BIK1.js";import{C as J}from"./composed-of.component-l4sv3hDz.js";import{D as Q}from"./playground.component-TkAgJrIZ.js";import{FoldSliderComponent as X}from"./slider.component-C2fDtXDX.js";import"./view-nav.component-BasxDAHF.js";import"./nav-layout.context-B90o5uyL.js";import"./button.component-CPQFRads.js";import"./spinner.component-Bfoo-Glo.js";import"./tokens.catalog-DF_6rd51.js";import"./element-title.component-DWF6B2eR.js";import"./page-section.component-RbcTHMt_.js";import"./input-value-Co_u-z_8.js";class g{service=L(F);static ɵfac=function(n){return new(n||g)};static ɵdir=A({type:g,selectors:[["","panelScope",""]],exportAs:["panelScope"],features:[N([F])]})}const Y=()=>["nav-launcher"],Z=(_,r)=>r.id;function ee(_,r){if(_&1){const n=C();t(0,"button",32),s("click",function(){const p=f(n).$implicit,i=T();return i.previewNav.set(p.id),m(i.previewNavOpen.set(!1))}),o()}if(_&2){const n=r.$implicit,e=T();c("icon",n.icon)("label",n.label)("active",e.previewNav()===n.id)}}function oe(_,r){_&1&&v(0,"div",30)}function te(_,r){_&1&&(t(0,"div",31),v(1,"fold-icon",33),t(2,"span",34),l(3,"Now playing — Track 03"),o(),t(4,"span",35),l(5,"1:24 / 3:57"),o()())}class w{theme=h("dark");elevatedPrimary=h(!1);elevatedSecondary=h(!1);elevatedHeader=h(!1);shellHeaderLayout=h("inset");shellFooterLayout=h("full");shellFooterBehavior=h("pinned");shellFooter=h(!0);shellRailWidth=h(64);shellHeaderHeight=h(56);setHeaderLayout(r){this.shellHeaderLayout.set(r)}setFooterLayout(r){this.shellFooterLayout.set(r)}setFooterBehavior(r){this.shellFooterBehavior.set(r)}shellCode=B(()=>["<fold-app-shell",`  headerLayout="${this.shellHeaderLayout()}"`,...this.shellFooter()?[`  footerLayout="${this.shellFooterLayout()}"`,`  footerBehavior="${this.shellFooterBehavior()}"`]:[],`  [railWidth]="${this.shellRailWidth()}"`,`  [headerHeight]="${this.shellHeaderHeight()}"`,">",`  <fold-menu railPrimary${this.elevatedPrimary()?" foldElevated":""}>…</fold-menu>`,`  <fold-menu railSecondary${this.elevatedSecondary()?" foldElevated":""}>…</fold-menu>`,`  <header header${this.elevatedHeader()?" foldElevated":""}>…</header>`,"  <!-- untagged content → the main area -->","  <main>…</main>",...this.shellFooter()?["  <app-player footer>…</app-player>"]:["  <!-- no footer → the footer row collapses -->"],"</fold-app-shell>"].join(`
`));toggleTheme(){this.theme.update(r=>r==="dark"?"light":"dark")}openPreviewPanel(r){r.open(U,{side:"right",width:260})}railNav=[{id:"home",icon:"home",label:"Home"},{id:"contracts",icon:"contracts",label:"Contracts"},{id:"music",icon:"music",label:"Music"}];previewNav=h("home");previewNavOpen=h(!1);previewBlocks=Array.from({length:8},(r,n)=>n);static ɵfac=function(n){return new(n||w)};static ɵcmp=O({type:w,selectors:[["gal-app-shell-page"]],decls:80,vars:50,consts:[["sph","panelScope"],["previewShell","foldAppShell"],["title","app-shell","icon","grid"],["description",""],["titleBadge","","kind","component"],[3,"ids"],[3,"code","initialWidth"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ss-seg"],["type","button",3,"click"],["params","","label","railWidth",3,"valueChange","min","max","valueText","value"],["params","","label","headerHeight",3,"valueChange","min","max","valueText","value"],["panelScope","",1,"shell-preview"],[3,"mobileNavOpenChange","headerLayout","footerLayout","footerBehavior","railWidth","headerHeight","mobileNavOpen"],["railPrimary","","tint","primary",3,"expanded","foldElevated"],["header","",1,"rail-brand"],["fold-menu-item","",3,"icon","label","active"],["footer","","fold-menu-item","","icon","settings","label","Settings"],["railSecondary","","level","secondary",3,"expanded","foldElevated"],["header","",1,"lib-head"],["fold-menu-item","","icon","grid","label","Overview",3,"active"],["fold-menu-item","","icon","contracts","label","Contracts"],["fold-menu-item","","icon","music","label","Library"],["header","",1,"sp-header",3,"foldElevated"],["type","button","aria-haspopup","dialog","aria-label","Toggle navigation",1,"sp-hamburger",3,"click"],["size","sm",3,"name"],[1,"sp-actions"],["name","contracts","size","sm"],[1,"sp-content"],[1,"sp-block"],["footer","",1,"sp-footer"],["fold-menu-item","",3,"click","icon","label","active"],["name","play","size","sm"],[1,"sp-footer-track"],[1,"sp-footer-time"]],template:function(n,e){if(n&1){const p=C();t(0,"fold-page-layout",2)(1,"p",3),l(2," The application frame: a primary icon rail, an optional secondary rail, a header band, the content area and a self-collapsing footer, wired as one responsive scaffold. It folds on its own width via container queries — the secondary rail collapses first, then the primary — so the same markup serves desktop, tablet and mobile. Header + footer layout (inset or full), footer behaviour (pinned player-bar or scroll-to-reveal legal footer), rail width and header height are inputs; everything else is a design token you can override. Regions float per-surface with "),t(3,"code"),l(4,"foldElevated"),o(),l(5," — the shell owns structure, not skin. "),o(),v(6,"gal-kind-badge",4)(7,"gal-composed-of",5),t(8,"dev-playground",6)(9,"div",7)(10,"span",8),l(11,"foldElevated (per region)"),o(),t(12,"div",9)(13,"button",10),s("click",function(){return e.elevatedPrimary.set(!e.elevatedPrimary())}),l(14," rail 1 "),o(),t(15,"button",10),s("click",function(){return e.elevatedSecondary.set(!e.elevatedSecondary())}),l(16," rail 2 "),o(),t(17,"button",10),s("click",function(){return e.elevatedHeader.set(!e.elevatedHeader())}),l(18," header "),o()()(),t(19,"div",7)(20,"span",8),l(21,"headerLayout"),o(),t(22,"div",9)(23,"button",10),s("click",function(){return e.setHeaderLayout("inset")}),l(24," inset "),o(),t(25,"button",10),s("click",function(){return e.setHeaderLayout("full")}),l(26," full "),o()()(),t(27,"div",7)(28,"span",8),l(29,"footerLayout"),o(),t(30,"div",9)(31,"button",10),s("click",function(){return f(p),e.shellFooter.set(!0),m(e.setFooterLayout("inset"))}),l(32," inset "),o(),t(33,"button",10),s("click",function(){return f(p),e.shellFooter.set(!0),m(e.setFooterLayout("full"))}),l(34," full "),o(),t(35,"button",10),s("click",function(){return e.shellFooter.set(!1)}),l(36," none "),o()()(),t(37,"div",7)(38,"span",8),l(39,"footerBehavior"),o(),t(40,"div",9)(41,"button",10),s("click",function(){return f(p),e.shellFooter.set(!0),m(e.setFooterBehavior("pinned"))}),l(42," pinned "),o(),t(43,"button",10),s("click",function(){return f(p),e.shellFooter.set(!0),m(e.setFooterBehavior("scroll"))}),l(44," scroll "),o()()(),t(45,"fold-slider",11),b("valueChange",function(d){return f(p),k(e.shellRailWidth,d)||(e.shellRailWidth=d),m(d)}),o(),t(46,"fold-slider",12),b("valueChange",function(d){return f(p),k(e.shellHeaderHeight,d)||(e.shellHeaderHeight=d),m(d)}),o(),t(47,"div",13,0)(49,"fold-app-shell",14,1),b("mobileNavOpenChange",function(d){return f(p),k(e.previewNavOpen,d)||(e.previewNavOpen=d),m(d)}),t(51,"fold-menu",15)(52,"div",16),l(53,"S3"),o(),S(54,ee,1,3,"button",17,Z),v(56,"button",18),o(),t(57,"fold-menu",19)(58,"div",20),l(59,"Workspace"),o(),v(60,"button",21)(61,"button",22)(62,"button",23),o(),t(63,"div",24)(64,"button",25),s("click",function(){return e.previewNavOpen.set(!e.previewNavOpen())}),v(65,"fold-icon",26),o(),t(66,"span"),l(67,"Header"),o(),t(68,"div",27)(69,"button",10),s("click",function(){f(p);const d=P(48);return m(e.openPreviewPanel(d.service))}),v(70,"fold-icon",28),l(71," Open panel "),o(),t(72,"button",10),s("click",function(){return e.toggleTheme()}),v(73,"fold-icon",26),l(74),o()()(),t(75,"div",29),S(76,oe,1,0,"div",30,j),o(),x(78,te,6,0,"div",31),v(79,"fold-panel-host"),o()()()()}if(n&2){const p=P(50);a(7),c("ids",M(49,Y)),a(),c("code",e.shellCode())("initialWidth",1280),a(5),u("is-on",e.elevatedPrimary()),a(2),u("is-on",e.elevatedSecondary()),a(2),u("is-on",e.elevatedHeader()),a(6),u("is-on",e.shellHeaderLayout()==="inset"),a(2),u("is-on",e.shellHeaderLayout()==="full"),a(6),u("is-on",e.shellFooter()&&e.shellFooterLayout()==="inset"),a(2),u("is-on",e.shellFooter()&&e.shellFooterLayout()==="full"),a(2),u("is-on",!e.shellFooter()),a(6),u("is-on",e.shellFooterBehavior()==="pinned"),a(2),u("is-on",e.shellFooterBehavior()==="scroll"),a(2),c("min",48)("max",120)("valueText",e.shellRailWidth()+"px"),y("value",e.shellRailWidth),a(),c("min",44)("max",88)("valueText",e.shellHeaderHeight()+"px"),y("value",e.shellHeaderHeight),a(3),c("headerLayout",e.shellHeaderLayout())("footerLayout",e.shellFooterLayout())("footerBehavior",e.shellFooterBehavior())("railWidth",e.shellRailWidth())("headerHeight",e.shellHeaderHeight()),y("mobileNavOpen",e.previewNavOpen),a(2),c("expanded",e.previewNavOpen())("foldElevated",e.elevatedPrimary()),a(3),H(e.railNav),a(3),c("expanded",!0)("foldElevated",e.elevatedSecondary()),a(3),c("active",!0),a(3),c("foldElevated",e.elevatedHeader()),a(),V("aria-expanded",e.previewNavOpen())("aria-controls",p.drawerId),a(),c("name",e.previewNavOpen()?"close":"menu"),a(8),c("name",e.theme()==="dark"?"theme-light":"theme-dark"),a(),q(" ",e.theme()==="dark"?"Light":"Dark"," "),a(2),H(e.previewBlocks),a(2),K(e.shellFooter()?78:-1)}},dependencies:[G,J,W,E,z,R,D,I,X,$,g,Q],styles:[`@charset "UTF-8";
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
  font-weight: 700;
  font-size: 13px;
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
  font-size: 12px;
  font-weight: 600;
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
  font-size: 12px;
  font-weight: 600;
}

.sp-footer-time {
  margin-left: auto;
  color: var(--fold-color-text-muted);
  font-variant-numeric: tabular-nums;
}`],encapsulation:2})}export{w as default};
