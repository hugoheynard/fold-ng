import{Q as L,S as F,C as A,aK as N,s as h,B,ɵ as O,c as W,bc as E,bd as z,be as R,bf as I,F as j,bg as D,E as C,d as l,e as a,f as o,g as v,G as s,h as b,i as S,y as K,J as $,O as P,j as t,m as c,x as u,n as y,o as H,N as x,l as q,K as M,z as T,H as f,I as m,q as k}from"./index-DgKL0_pU.js";import{T as V}from"./tab-panel.component-CREkBn7m.js";import{K as G}from"./kind-badge.component-CRaG0Xmz.js";import{D as J}from"./playground.component-DLlx9atW.js";import{F as Q}from"./slider.component-DFHq4Hs-.js";import"./view-nav.component-oan4HnCr.js";import"./nav-layout.context-EddOtpfV.js";import"./button.component-iR_LRaLX.js";import"./spinner.component-CRpow2Fj.js";import"./tokens.catalog-DF_6rd51.js";import"./element-title.component-95xFBi7k.js";import"./page-section.component-BnmvKvyZ.js";import"./input-value-Co_u-z_8.js";class g{service=L(F);static ɵfac=function(n){return new(n||g)};static ɵdir=A({type:g,selectors:[["","panelScope",""]],exportAs:["panelScope"],features:[N([F])]})}const U=(_,r)=>r.id;function X(_,r){if(_&1){const n=C();l(0,"button",31),s("click",function(){const p=f(n).$implicit,i=T();return i.previewNav.set(p.id),m(i.previewNavOpen.set(!1))}),o()}if(_&2){const n=r.$implicit,e=T();c("icon",n.icon)("label",n.label)("active",e.previewNav()===n.id)}}function Y(_,r){_&1&&v(0,"div",29)}function Z(_,r){_&1&&(l(0,"div",30),v(1,"fold-icon",32),l(2,"span",33),a(3,"Now playing — Track 03"),o(),l(4,"span",34),a(5,"1:24 / 3:57"),o()())}class w{theme=h("dark");elevatedPrimary=h(!1);elevatedSecondary=h(!1);elevatedHeader=h(!1);shellHeaderLayout=h("inset");shellFooterLayout=h("full");shellFooterBehavior=h("pinned");shellFooter=h(!0);shellRailWidth=h(64);shellHeaderHeight=h(56);setHeaderLayout(r){this.shellHeaderLayout.set(r)}setFooterLayout(r){this.shellFooterLayout.set(r)}setFooterBehavior(r){this.shellFooterBehavior.set(r)}shellCode=B(()=>["<fold-app-shell",`  headerLayout="${this.shellHeaderLayout()}"`,...this.shellFooter()?[`  footerLayout="${this.shellFooterLayout()}"`,`  footerBehavior="${this.shellFooterBehavior()}"`]:[],`  [railWidth]="${this.shellRailWidth()}"`,`  [headerHeight]="${this.shellHeaderHeight()}"`,">",`  <fold-menu railPrimary${this.elevatedPrimary()?" foldElevated":""}>…</fold-menu>`,`  <fold-menu railSecondary${this.elevatedSecondary()?" foldElevated":""}>…</fold-menu>`,`  <header header${this.elevatedHeader()?" foldElevated":""}>…</header>`,"  <!-- untagged content → the main area -->","  <main>…</main>",...this.shellFooter()?["  <app-player footer>…</app-player>"]:["  <!-- no footer → the footer row collapses -->"],"</fold-app-shell>"].join(`
`));toggleTheme(){this.theme.update(r=>r==="dark"?"light":"dark")}openPreviewPanel(r){r.open(V,{side:"right",width:260})}railNav=[{id:"home",icon:"home",label:"Home"},{id:"contracts",icon:"contracts",label:"Contracts"},{id:"music",icon:"music",label:"Music"}];previewNav=h("home");previewNavOpen=h(!1);previewBlocks=Array.from({length:8},(r,n)=>n);static ɵfac=function(n){return new(n||w)};static ɵcmp=O({type:w,selectors:[["gal-app-shell-page"]],decls:79,vars:48,consts:[["sph","panelScope"],["previewShell","foldAppShell"],["title","app-shell","icon","grid"],["description",""],["titleBadge","","kind","component"],[3,"code","initialWidth"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ss-seg"],["type","button",3,"click"],["params","","label","railWidth",3,"valueChange","min","max","valueText","value"],["params","","label","headerHeight",3,"valueChange","min","max","valueText","value"],["panelScope","",1,"shell-preview"],[3,"mobileNavOpenChange","headerLayout","footerLayout","footerBehavior","railWidth","headerHeight","mobileNavOpen"],["railPrimary","","tint","primary",3,"expanded","foldElevated"],["header","",1,"rail-brand"],["fold-menu-item","",3,"icon","label","active"],["footer","","fold-menu-item","","icon","settings","label","Settings"],["railSecondary","","level","secondary",3,"expanded","foldElevated"],["header","",1,"lib-head"],["fold-menu-item","","icon","grid","label","Overview",3,"active"],["fold-menu-item","","icon","contracts","label","Contracts"],["fold-menu-item","","icon","music","label","Library"],["header","",1,"sp-header",3,"foldElevated"],["type","button","aria-haspopup","dialog","aria-label","Toggle navigation",1,"sp-hamburger",3,"click"],["size","sm",3,"name"],[1,"sp-actions"],["name","contracts","size","sm"],[1,"sp-content"],[1,"sp-block"],["footer","",1,"sp-footer"],["fold-menu-item","",3,"click","icon","label","active"],["name","play","size","sm"],[1,"sp-footer-track"],[1,"sp-footer-time"]],template:function(n,e){if(n&1){const p=C();l(0,"fold-page-layout",2)(1,"p",3),a(2," The application frame: a primary icon rail, an optional secondary rail, a header band, the content area and a self-collapsing footer, wired as one responsive scaffold. It folds on its own width via container queries — the secondary rail collapses first, then the primary — so the same markup serves desktop, tablet and mobile. Header + footer layout (inset or full), footer behaviour (pinned player-bar or scroll-to-reveal legal footer), rail width and header height are inputs; everything else is a design token you can override. Regions float per-surface with "),l(3,"code"),a(4,"foldElevated"),o(),a(5," — the shell owns structure, not skin. "),o(),v(6,"gal-kind-badge",4),l(7,"dev-playground",5)(8,"div",6)(9,"span",7),a(10,"foldElevated (per region)"),o(),l(11,"div",8)(12,"button",9),s("click",function(){return e.elevatedPrimary.set(!e.elevatedPrimary())}),a(13," rail 1 "),o(),l(14,"button",9),s("click",function(){return e.elevatedSecondary.set(!e.elevatedSecondary())}),a(15," rail 2 "),o(),l(16,"button",9),s("click",function(){return e.elevatedHeader.set(!e.elevatedHeader())}),a(17," header "),o()()(),l(18,"div",6)(19,"span",7),a(20,"headerLayout"),o(),l(21,"div",8)(22,"button",9),s("click",function(){return e.setHeaderLayout("inset")}),a(23," inset "),o(),l(24,"button",9),s("click",function(){return e.setHeaderLayout("full")}),a(25," full "),o()()(),l(26,"div",6)(27,"span",7),a(28,"footerLayout"),o(),l(29,"div",8)(30,"button",9),s("click",function(){return f(p),e.shellFooter.set(!0),m(e.setFooterLayout("inset"))}),a(31," inset "),o(),l(32,"button",9),s("click",function(){return f(p),e.shellFooter.set(!0),m(e.setFooterLayout("full"))}),a(33," full "),o(),l(34,"button",9),s("click",function(){return e.shellFooter.set(!1)}),a(35," none "),o()()(),l(36,"div",6)(37,"span",7),a(38,"footerBehavior"),o(),l(39,"div",8)(40,"button",9),s("click",function(){return f(p),e.shellFooter.set(!0),m(e.setFooterBehavior("pinned"))}),a(41," pinned "),o(),l(42,"button",9),s("click",function(){return f(p),e.shellFooter.set(!0),m(e.setFooterBehavior("scroll"))}),a(43," scroll "),o()()(),l(44,"fold-slider",10),b("valueChange",function(d){return f(p),k(e.shellRailWidth,d)||(e.shellRailWidth=d),m(d)}),o(),l(45,"fold-slider",11),b("valueChange",function(d){return f(p),k(e.shellHeaderHeight,d)||(e.shellHeaderHeight=d),m(d)}),o(),l(46,"div",12,0)(48,"fold-app-shell",13,1),b("mobileNavOpenChange",function(d){return f(p),k(e.previewNavOpen,d)||(e.previewNavOpen=d),m(d)}),l(50,"fold-menu",14)(51,"div",15),a(52,"S3"),o(),S(53,X,1,3,"button",16,U),v(55,"button",17),o(),l(56,"fold-menu",18)(57,"div",19),a(58,"Workspace"),o(),v(59,"button",20)(60,"button",21)(61,"button",22),o(),l(62,"div",23)(63,"button",24),s("click",function(){return e.previewNavOpen.set(!e.previewNavOpen())}),v(64,"fold-icon",25),o(),l(65,"span"),a(66,"Header"),o(),l(67,"div",26)(68,"button",9),s("click",function(){f(p);const d=P(47);return m(e.openPreviewPanel(d.service))}),v(69,"fold-icon",27),a(70," Open panel "),o(),l(71,"button",9),s("click",function(){return e.toggleTheme()}),v(72,"fold-icon",25),a(73),o()()(),l(74,"div",28),S(75,Y,1,0,"div",29,K),o(),$(77,Z,6,0,"div",30),v(78,"fold-panel-host"),o()()()()}if(n&2){const p=P(49);t(7),c("code",e.shellCode())("initialWidth",1280),t(5),u("is-on",e.elevatedPrimary()),t(2),u("is-on",e.elevatedSecondary()),t(2),u("is-on",e.elevatedHeader()),t(6),u("is-on",e.shellHeaderLayout()==="inset"),t(2),u("is-on",e.shellHeaderLayout()==="full"),t(6),u("is-on",e.shellFooter()&&e.shellFooterLayout()==="inset"),t(2),u("is-on",e.shellFooter()&&e.shellFooterLayout()==="full"),t(2),u("is-on",!e.shellFooter()),t(6),u("is-on",e.shellFooterBehavior()==="pinned"),t(2),u("is-on",e.shellFooterBehavior()==="scroll"),t(2),c("min",48)("max",120)("valueText",e.shellRailWidth()+"px"),y("value",e.shellRailWidth),t(),c("min",44)("max",88)("valueText",e.shellHeaderHeight()+"px"),y("value",e.shellHeaderHeight),t(3),c("headerLayout",e.shellHeaderLayout())("footerLayout",e.shellFooterLayout())("footerBehavior",e.shellFooterBehavior())("railWidth",e.shellRailWidth())("headerHeight",e.shellHeaderHeight()),y("mobileNavOpen",e.previewNavOpen),t(2),c("expanded",e.previewNavOpen())("foldElevated",e.elevatedPrimary()),t(3),H(e.railNav),t(3),c("expanded",!0)("foldElevated",e.elevatedSecondary()),t(3),c("active",!0),t(3),c("foldElevated",e.elevatedHeader()),t(),x("aria-expanded",e.previewNavOpen())("aria-controls",p.drawerId),t(),c("name",e.previewNavOpen()?"close":"menu"),t(8),c("name",e.theme()==="dark"?"theme-light":"theme-dark"),t(),q(" ",e.theme()==="dark"?"Light":"Dark"," "),t(2),H(e.previewBlocks),t(2),M(e.shellFooter()?77:-1)}},dependencies:[G,W,E,z,R,I,j,Q,D,g,J],styles:[`@charset "UTF-8";
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
