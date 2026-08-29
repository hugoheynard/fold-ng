import{s as h,A as N,ɵ as O,c as B,bt as W,bu as E,bv as z,bw as R,F as $,bx as I,E as F,d as t,e as a,f as o,g as v,B as s,h as y,i as w,w as L,T as H,a3 as g,j as l,m,U as j,L as u,n as k,o as P,D,l as C,x as A,q as b,N as c,O as f,r as S}from"./index-qfVwsMqT.js";import{P as x}from"./panel-scope.directive-CNSumdhH.js";import{T as M}from"./tab-panel.component-DiRG-f1t.js";import{K as q}from"./kind-badge.component-C3NFGyeE.js";import{C as K}from"./composed-of.component-BSOe-yPe.js";import{D as V}from"./playground.component-Dkl79q-X.js";import{FoldSliderComponent as U}from"./slider.component-8YCZlB6N.js";import"./view-nav.component-CKgHb-v8.js";import"./tab-tooltip.directive-DwBXwkrB.js";import"./auto-update-_srfpL1Q.js";import"./nav-layout.context-BTNqZoEq.js";import"./breakpoints-J4fapboB.js";import"./button.component-B5aIlmBZ.js";import"./element-title.component-DPcMelU2.js";import"./page-section.component-zPSKFEds.js";import"./input-value-DCGlOvqF.js";const G=()=>["nav-launcher"],J=(_,i)=>i.id;function Q(_,i){if(_&1){const n=F();t(0,"button",33),s("click",function(){const d=c(n).$implicit,r=b();return r.previewNav.set(d.id),f(r.previewNavOpen.set(!1))}),o()}if(_&2){const n=i.$implicit,e=b();m("icon",n.icon)("label",n.label)("active",e.previewNav()===n.id)}}function X(_,i){if(_&1){const n=F();t(0,"button",10),s("click",function(){const d=c(n).$implicit,r=b(2);return f(r.subNavActive.set(d))}),a(1),o()}if(_&2){const n=i.$implicit,e=b(2);u("is-on",e.subNavActive()===n),l(),C(" ",n," ")}}function Y(_,i){if(_&1&&(t(0,"nav",29),w(1,X,2,3,"button",34,H),o()),_&2){const n=b();l(),P(n.subNav)}}function Z(_,i){_&1&&v(0,"div",31)}function ee(_,i){_&1&&(t(0,"div",32),v(1,"fold-icon",35),t(2,"span",36),a(3,"Now playing — Track 03"),o(),t(4,"span",37),a(5,"1:24 / 3:57"),o()())}class T{theme=h("dark");elevatedPrimary=h(!1);elevatedSecondary=h(!1);elevatedHeader=h(!1);shellHeaderLayout=h("inset");shellSubheaderLayout=h("inset");shellSubheader=h(!0);shellFooterLayout=h("full");shellFooterBehavior=h("pinned");shellFooter=h(!0);shellRailWidth=h(64);shellHeaderHeight=h(56);setHeaderLayout(i){this.shellHeaderLayout.set(i)}setSubheaderLayout(i){this.shellSubheaderLayout.set(i)}setFooterLayout(i){this.shellFooterLayout.set(i)}setFooterBehavior(i){this.shellFooterBehavior.set(i)}shellCode=N(()=>["<fold-app-shell",`  headerLayout="${this.shellHeaderLayout()}"`,...this.shellSubheader()?[`  subheaderLayout="${this.shellSubheaderLayout()}"`]:[],...this.shellFooter()?[`  footerLayout="${this.shellFooterLayout()}"`,`  footerBehavior="${this.shellFooterBehavior()}"`]:[],`  [railWidth]="${this.shellRailWidth()}"`,`  [headerHeight]="${this.shellHeaderHeight()}"`,">",`  <fold-menu railPrimary${this.elevatedPrimary()?" foldElevated":""}>…</fold-menu>`,`  <fold-menu railSecondary${this.elevatedSecondary()?" foldElevated":""}>…</fold-menu>`,`  <header header${this.elevatedHeader()?" foldElevated":""}>…</header>`,...this.shellSubheader()?["  <nav subheader>…</nav>"]:["  <!-- no subheader → the band collapses -->"],"  <!-- untagged content → the main area -->","  <main>…</main>",...this.shellFooter()?["  <app-player footer>…</app-player>"]:["  <!-- no footer → the footer row collapses -->"],"</fold-app-shell>"].join(`
`));toggleTheme(){this.theme.update(i=>i==="dark"?"light":"dark")}openPreviewPanel(i,n={}){i.open(M,{side:"right",width:260,...n})}railNav=[{id:"home",icon:"home",label:"Home"},{id:"contracts",icon:"contracts",label:"Contracts"},{id:"music",icon:"music",label:"Music"}];subNav=["Overview","Activity","Members","Settings"];subNavActive=h("Overview");previewNav=h("home");previewNavOpen=h(!1);previewBlocks=Array.from({length:8},(i,n)=>n);static ɵfac=function(n){return new(n||T)};static ɵcmp=O({type:T,selectors:[["gal-app-shell-page"]],decls:97,vars:58,consts:[["sph","panelScope"],["previewShell","foldAppShell"],["title","app-shell","icon","grid"],["description",""],["titleBadge","","kind","component"],[3,"ids"],[3,"code","initialWidth"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ss-seg"],["type","button",3,"click"],["params","","label","railWidth",3,"valueChange","min","max","valueText","value"],["params","","label","headerHeight",3,"valueChange","min","max","valueText","value"],["panelScope","",1,"shell-preview"],[3,"mobileNavOpenChange","headerLayout","subheaderLayout","footerLayout","footerBehavior","railWidth","headerHeight","mobileNavOpen"],["railPrimary","","tint","primary",3,"expanded","foldElevated"],["header","",1,"rail-brand"],["fold-menu-item","",3,"icon","label","active"],["footer","","fold-menu-item","","icon","settings","label","Settings"],["railSecondary","","level","secondary",3,"expanded","foldElevated"],["header","",1,"lib-head"],["fold-menu-item","","icon","grid","label","Overview",3,"active"],["fold-menu-item","","icon","contracts","label","Contracts"],["fold-menu-item","","icon","music","label","Library"],["header","",1,"sp-header",3,"foldElevated"],["type","button","aria-haspopup","dialog","aria-label","Toggle navigation",1,"sp-hamburger",3,"click"],["size","sm",3,"name"],[1,"sp-actions"],["name","contracts","size","sm"],["subheader","","aria-label","Section",1,"sp-subbar"],[1,"sp-content"],[1,"sp-block"],["footer","",1,"sp-footer"],["fold-menu-item","",3,"click","icon","label","active"],["type","button",3,"is-on"],["name","play","size","sm"],[1,"sp-footer-track"],[1,"sp-footer-time"]],template:function(n,e){if(n&1){const d=F();t(0,"fold-page-layout",2)(1,"p",3),a(2," The application frame: a primary icon rail, an optional secondary rail, a header band, a self-collapsing sub-bar under it, the content area and a self-collapsing footer, wired as one responsive scaffold. It folds on its own width via container queries — the secondary rail collapses first, then the primary — so the same markup serves desktop, tablet and mobile. Header + footer layout (inset or full), footer behaviour (pinned player-bar or scroll-to-reveal legal footer), rail width and header height are inputs; everything else is a design token you can override. Regions float per-surface with "),t(3,"code"),a(4,"foldElevated"),o(),a(5," — the shell owns structure, not skin. "),o(),v(6,"gal-kind-badge",4)(7,"gal-composed-of",5),t(8,"dev-playground",6)(9,"div",7)(10,"span",8),a(11,"foldElevated (per region)"),o(),t(12,"div",9)(13,"button",10),s("click",function(){return e.elevatedPrimary.set(!e.elevatedPrimary())}),a(14," rail 1 "),o(),t(15,"button",10),s("click",function(){return e.elevatedSecondary.set(!e.elevatedSecondary())}),a(16," rail 2 "),o(),t(17,"button",10),s("click",function(){return e.elevatedHeader.set(!e.elevatedHeader())}),a(18," header "),o()()(),t(19,"div",7)(20,"span",8),a(21,"headerLayout"),o(),t(22,"div",9)(23,"button",10),s("click",function(){return e.setHeaderLayout("inset")}),a(24," inset "),o(),t(25,"button",10),s("click",function(){return e.setHeaderLayout("full")}),a(26," full "),o()()(),t(27,"div",7)(28,"span",8),a(29,"subheaderLayout"),o(),t(30,"div",9)(31,"button",10),s("click",function(){return c(d),e.shellSubheader.set(!0),f(e.setSubheaderLayout("inset"))}),a(32," inset "),o(),t(33,"button",10),s("click",function(){return c(d),e.shellSubheader.set(!0),f(e.setSubheaderLayout("full"))}),a(34," full "),o(),t(35,"button",10),s("click",function(){return e.shellSubheader.set(!1)}),a(36," none "),o()()(),t(37,"div",7)(38,"span",8),a(39,"footerLayout"),o(),t(40,"div",9)(41,"button",10),s("click",function(){return c(d),e.shellFooter.set(!0),f(e.setFooterLayout("inset"))}),a(42," inset "),o(),t(43,"button",10),s("click",function(){return c(d),e.shellFooter.set(!0),f(e.setFooterLayout("full"))}),a(44," full "),o(),t(45,"button",10),s("click",function(){return e.shellFooter.set(!1)}),a(46," none "),o()()(),t(47,"div",7)(48,"span",8),a(49,"footerBehavior"),o(),t(50,"div",9)(51,"button",10),s("click",function(){return c(d),e.shellFooter.set(!0),f(e.setFooterBehavior("pinned"))}),a(52," pinned "),o(),t(53,"button",10),s("click",function(){return c(d),e.shellFooter.set(!0),f(e.setFooterBehavior("scroll"))}),a(54," scroll "),o()()(),t(55,"fold-slider",11),y("valueChange",function(p){return c(d),S(e.shellRailWidth,p)||(e.shellRailWidth=p),f(p)}),o(),t(56,"fold-slider",12),y("valueChange",function(p){return c(d),S(e.shellHeaderHeight,p)||(e.shellHeaderHeight=p),f(p)}),o(),t(57,"div",13,0)(59,"fold-app-shell",14,1),y("mobileNavOpenChange",function(p){return c(d),S(e.previewNavOpen,p)||(e.previewNavOpen=p),f(p)}),t(61,"fold-menu",15)(62,"div",16),a(63,"S3"),o(),w(64,Q,1,3,"button",17,J),v(66,"button",18),o(),t(67,"fold-menu",19)(68,"div",20),a(69,"Workspace"),o(),v(70,"button",21)(71,"button",22)(72,"button",23),o(),t(73,"div",24)(74,"button",25),s("click",function(){return e.previewNavOpen.set(!e.previewNavOpen())}),v(75,"fold-icon",26),o(),t(76,"span"),a(77,"Header"),o(),t(78,"div",27)(79,"button",10),s("click",function(){c(d);const p=g(58);return f(e.openPreviewPanel(p.service))}),v(80,"fold-icon",28),a(81," Open panel "),o(),t(82,"button",10),s("click",function(){c(d);const p=g(58);return f(e.openPreviewPanel(p.service,{modal:!1}))}),v(83,"fold-icon",28),a(84," Non-modal "),o(),t(85,"button",10),s("click",function(){c(d);const p=g(58);return f(e.openPreviewPanel(p.service,{surface:"solid"}))}),v(86,"fold-icon",28),a(87," Solid "),o(),t(88,"button",10),s("click",function(){return e.toggleTheme()}),v(89,"fold-icon",26),a(90),o()()(),L(91,Y,3,0,"nav",29),t(92,"div",30),w(93,Z,1,0,"div",31,H),o(),L(95,ee,6,0,"div",32),v(96,"fold-panel-host"),o()()()()}if(n&2){const d=g(60);l(7),m("ids",j(57,G)),l(),m("code",e.shellCode())("initialWidth",1280),l(5),u("is-on",e.elevatedPrimary()),l(2),u("is-on",e.elevatedSecondary()),l(2),u("is-on",e.elevatedHeader()),l(6),u("is-on",e.shellHeaderLayout()==="inset"),l(2),u("is-on",e.shellHeaderLayout()==="full"),l(6),u("is-on",e.shellSubheader()&&e.shellSubheaderLayout()==="inset"),l(2),u("is-on",e.shellSubheader()&&e.shellSubheaderLayout()==="full"),l(2),u("is-on",!e.shellSubheader()),l(6),u("is-on",e.shellFooter()&&e.shellFooterLayout()==="inset"),l(2),u("is-on",e.shellFooter()&&e.shellFooterLayout()==="full"),l(2),u("is-on",!e.shellFooter()),l(6),u("is-on",e.shellFooterBehavior()==="pinned"),l(2),u("is-on",e.shellFooterBehavior()==="scroll"),l(2),m("min",48)("max",120)("valueText",e.shellRailWidth()+"px"),k("value",e.shellRailWidth),l(),m("min",44)("max",88)("valueText",e.shellHeaderHeight()+"px"),k("value",e.shellHeaderHeight),l(3),m("headerLayout",e.shellHeaderLayout())("subheaderLayout",e.shellSubheaderLayout())("footerLayout",e.shellFooterLayout())("footerBehavior",e.shellFooterBehavior())("railWidth",e.shellRailWidth())("headerHeight",e.shellHeaderHeight()),k("mobileNavOpen",e.previewNavOpen),l(2),m("expanded",e.previewNavOpen())("foldElevated",e.elevatedPrimary()),l(3),P(e.railNav),l(3),m("expanded",!0)("foldElevated",e.elevatedSecondary()),l(3),m("active",!0),l(3),m("foldElevated",e.elevatedHeader()),l(),D("aria-expanded",e.previewNavOpen())("aria-controls",d.drawerId),l(),m("name",e.previewNavOpen()?"close":"menu"),l(14),m("name",e.theme()==="dark"?"theme-light":"theme-dark"),l(),C(" ",e.theme()==="dark"?"Light":"Dark"," "),l(),A(e.shellSubheader()?91:-1),l(2),P(e.previewBlocks),l(2),A(e.shellFooter()?95:-1)}},dependencies:[q,K,B,W,E,z,R,$,U,I,x,V],styles:[`@charset "UTF-8";
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
}

/* The sub-bar projected into the shell's \`subheader\` slot — a second register of
   navigation under the header. It paints its own ground over the band's chrome
   default, which is exactly what a projected band is expected to do. */
.sp-subbar {
  display: flex;
  align-items: stretch;
  gap: var(--fold-space-xs);
  height: 100%;
  padding: 0 var(--fold-space-lg);
  background: var(--fold-color-bg-header);
  border-bottom: 1px solid var(--fold-color-border);
  overflow-x: auto;
}

.sp-subbar button {
  flex: none;
  border: 0;
  border-bottom: 2px solid transparent;
  padding: 0 var(--fold-space-md);
  background: none;
  color: var(--fold-color-text-muted);
  font-size: var(--fold-text-sm);
  font-weight: var(--fold-weight-semibold);
  cursor: pointer;
}

.sp-subbar button.is-on {
  border-bottom-color: var(--fold-color-primary);
  color: var(--fold-color-text);
}`],encapsulation:2})}export{T as default};
