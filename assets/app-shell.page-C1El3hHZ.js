import{V as C,W as F,C as A,aK as N,s as h,B,ɵ as W,c as O,ba as E,bb as x,bc as z,bd as R,F as I,be as j,E as L,d as t,e as a,f as o,g as _,G as d,h as b,i as T,y as D,L as K,T as S,j as l,m as c,x as u,n as y,o as P,S as M,l as V,M as q,z as H,H as f,I as m,q as k}from"./index-SxNeY3lN.js";import{T as $}from"./tab-panel.component-BB3xxV9W.js";import{K as G}from"./kind-badge.component-zeG66IfW.js";import{D as U}from"./playground.component-D1YK4L8A.js";import{F as J}from"./slider.component-BP5n7tVV.js";import"./view-nav.component--m1ZHyKc.js";import"./nav-layout.context--h8MOz-v.js";import"./button.component-Duqv0Z-n.js";import"./spinner.component-CrxWhUXX.js";import"./tokens.catalog-DF_6rd51.js";import"./element-title.component-9Tsav4pt.js";import"./page-section.component-C9h3raWe.js";import"./input-value-Co_u-z_8.js";class g{service=C(F);static ɵfac=function(n){return new(n||g)};static ɵdir=A({type:g,selectors:[["","panelScope",""]],exportAs:["panelScope"],features:[N([F])]})}const Q=(v,r)=>r.id;function X(v,r){if(v&1){const n=L();t(0,"button",31),d("click",function(){const p=f(n).$implicit,i=H();return i.previewNav.set(p.id),m(i.previewNavOpen.set(!1))}),o()}if(v&2){const n=r.$implicit,e=H();c("icon",n.icon)("label",n.label)("active",e.previewNav()===n.id)}}function Y(v,r){v&1&&_(0,"div",29)}function Z(v,r){v&1&&(t(0,"div",30),_(1,"fold-icon",32),t(2,"span",33),a(3,"Now playing — Track 03"),o(),t(4,"span",34),a(5,"1:24 / 3:57"),o()())}class w{theme=h("dark");railElevated=h(!1);shellHeaderLayout=h("inset");shellFooterLayout=h("full");shellFooterBehavior=h("pinned");shellFooter=h(!0);shellRailWidth=h(64);shellHeaderHeight=h(56);setHeaderLayout(r){this.shellHeaderLayout.set(r)}setFooterLayout(r){this.shellFooterLayout.set(r)}setFooterBehavior(r){this.shellFooterBehavior.set(r)}shellCode=B(()=>["<fold-app-shell",`  headerLayout="${this.shellHeaderLayout()}"`,...this.shellFooter()?[`  footerLayout="${this.shellFooterLayout()}"`,`  footerBehavior="${this.shellFooterBehavior()}"`]:[],`  [railWidth]="${this.shellRailWidth()}"`,`  [headerHeight]="${this.shellHeaderHeight()}"`,">",`  <fold-menu railPrimary${this.railElevated()?" foldElevated":""}>…</fold-menu>`,"  <fold-menu railSecondary>…</fold-menu>","  <header header>…</header>","  <!-- untagged content → the main area -->","  <main>…</main>",...this.shellFooter()?["  <app-player footer>…</app-player>"]:["  <!-- no footer → the footer row collapses -->"],"</fold-app-shell>"].join(`
`));toggleTheme(){this.theme.update(r=>r==="dark"?"light":"dark")}openPreviewPanel(r){r.open($,{side:"right",width:260})}railNav=[{id:"home",icon:"home",label:"Home"},{id:"contracts",icon:"contracts",label:"Contracts"},{id:"music",icon:"music",label:"Music"}];previewNav=h("home");previewNavOpen=h(!1);previewBlocks=Array.from({length:8},(r,n)=>n);static ɵfac=function(n){return new(n||w)};static ɵcmp=W({type:w,selectors:[["gal-app-shell-page"]],decls:77,vars:44,consts:[["sph","panelScope"],["previewShell","foldAppShell"],["title","app-shell","icon","grid"],["description",""],["titleBadge","","kind","component"],[3,"code","initialWidth"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ss-seg"],["type","button",3,"click"],["params","","label","railWidth",3,"valueChange","min","max","valueText","value"],["params","","label","headerHeight",3,"valueChange","min","max","valueText","value"],["panelScope","",1,"shell-preview"],[3,"mobileNavOpenChange","headerLayout","footerLayout","footerBehavior","railWidth","headerHeight","mobileNavOpen"],["railPrimary","","tint","primary",3,"expanded","foldElevated"],["header","",1,"rail-brand"],["fold-menu-item","",3,"icon","label","active"],["footer","","fold-menu-item","","icon","settings","label","Settings"],["railSecondary","","level","secondary",3,"expanded"],["header","",1,"lib-head"],["fold-menu-item","","icon","grid","label","Overview",3,"active"],["fold-menu-item","","icon","contracts","label","Contracts"],["fold-menu-item","","icon","music","label","Library"],["header","",1,"sp-header"],["type","button","aria-haspopup","dialog","aria-label","Toggle navigation",1,"sp-hamburger",3,"click"],["size","sm",3,"name"],[1,"sp-actions"],["name","contracts","size","sm"],[1,"sp-content"],[1,"sp-block"],["footer","",1,"sp-footer"],["fold-menu-item","",3,"click","icon","label","active"],["name","play","size","sm"],[1,"sp-footer-track"],[1,"sp-footer-time"]],template:function(n,e){if(n&1){const p=L();t(0,"fold-page-layout",2)(1,"p",3),a(2," The application frame: a primary icon rail, an optional secondary rail, a header band, the content area and a self-collapsing footer, wired as one responsive scaffold. It folds on its own width via container queries — the secondary rail collapses first, then the primary — so the same markup serves desktop, tablet and mobile. Header + footer layout (inset or full), footer behaviour (pinned player-bar or scroll-to-reveal legal footer), rail width and header height are inputs; everything else is a design token you can override. Regions float per-surface with "),t(3,"code"),a(4,"foldElevated"),o(),a(5," — the shell owns structure, not skin. "),o(),_(6,"gal-kind-badge",4),t(7,"dev-playground",5)(8,"div",6)(9,"span",7),a(10,"rail foldElevated"),o(),t(11,"div",8)(12,"button",9),d("click",function(){return e.railElevated.set(!1)}),a(13," flat "),o(),t(14,"button",9),d("click",function(){return e.railElevated.set(!0)}),a(15," elevated "),o()()(),t(16,"div",6)(17,"span",7),a(18,"headerLayout"),o(),t(19,"div",8)(20,"button",9),d("click",function(){return e.setHeaderLayout("inset")}),a(21," inset "),o(),t(22,"button",9),d("click",function(){return e.setHeaderLayout("full")}),a(23," full "),o()()(),t(24,"div",6)(25,"span",7),a(26,"footerLayout"),o(),t(27,"div",8)(28,"button",9),d("click",function(){return f(p),e.shellFooter.set(!0),m(e.setFooterLayout("inset"))}),a(29," inset "),o(),t(30,"button",9),d("click",function(){return f(p),e.shellFooter.set(!0),m(e.setFooterLayout("full"))}),a(31," full "),o(),t(32,"button",9),d("click",function(){return e.shellFooter.set(!1)}),a(33," none "),o()()(),t(34,"div",6)(35,"span",7),a(36,"footerBehavior"),o(),t(37,"div",8)(38,"button",9),d("click",function(){return f(p),e.shellFooter.set(!0),m(e.setFooterBehavior("pinned"))}),a(39," pinned "),o(),t(40,"button",9),d("click",function(){return f(p),e.shellFooter.set(!0),m(e.setFooterBehavior("scroll"))}),a(41," scroll "),o()()(),t(42,"fold-slider",10),b("valueChange",function(s){return f(p),k(e.shellRailWidth,s)||(e.shellRailWidth=s),m(s)}),o(),t(43,"fold-slider",11),b("valueChange",function(s){return f(p),k(e.shellHeaderHeight,s)||(e.shellHeaderHeight=s),m(s)}),o(),t(44,"div",12,0)(46,"fold-app-shell",13,1),b("mobileNavOpenChange",function(s){return f(p),k(e.previewNavOpen,s)||(e.previewNavOpen=s),m(s)}),t(48,"fold-menu",14)(49,"div",15),a(50,"S3"),o(),T(51,X,1,3,"button",16,Q),_(53,"button",17),o(),t(54,"fold-menu",18)(55,"div",19),a(56,"Workspace"),o(),_(57,"button",20)(58,"button",21)(59,"button",22),o(),t(60,"div",23)(61,"button",24),d("click",function(){return e.previewNavOpen.set(!e.previewNavOpen())}),_(62,"fold-icon",25),o(),t(63,"span"),a(64,"Header"),o(),t(65,"div",26)(66,"button",9),d("click",function(){f(p);const s=S(45);return m(e.openPreviewPanel(s.service))}),_(67,"fold-icon",27),a(68," Open panel "),o(),t(69,"button",9),d("click",function(){return e.toggleTheme()}),_(70,"fold-icon",25),a(71),o()()(),t(72,"div",28),T(73,Y,1,0,"div",29,D),o(),K(75,Z,6,0,"div",30),_(76,"fold-panel-host"),o()()()()}if(n&2){const p=S(47);l(7),c("code",e.shellCode())("initialWidth",1280),l(5),u("is-on",!e.railElevated()),l(2),u("is-on",e.railElevated()),l(6),u("is-on",e.shellHeaderLayout()==="inset"),l(2),u("is-on",e.shellHeaderLayout()==="full"),l(6),u("is-on",e.shellFooter()&&e.shellFooterLayout()==="inset"),l(2),u("is-on",e.shellFooter()&&e.shellFooterLayout()==="full"),l(2),u("is-on",!e.shellFooter()),l(6),u("is-on",e.shellFooterBehavior()==="pinned"),l(2),u("is-on",e.shellFooterBehavior()==="scroll"),l(2),c("min",48)("max",120)("valueText",e.shellRailWidth()+"px"),y("value",e.shellRailWidth),l(),c("min",44)("max",88)("valueText",e.shellHeaderHeight()+"px"),y("value",e.shellHeaderHeight),l(3),c("headerLayout",e.shellHeaderLayout())("footerLayout",e.shellFooterLayout())("footerBehavior",e.shellFooterBehavior())("railWidth",e.shellRailWidth())("headerHeight",e.shellHeaderHeight()),y("mobileNavOpen",e.previewNavOpen),l(2),c("expanded",e.previewNavOpen())("foldElevated",e.railElevated()),l(3),P(e.railNav),l(3),c("expanded",!0),l(3),c("active",!0),l(4),M("aria-expanded",e.previewNavOpen())("aria-controls",p.drawerId),l(),c("name",e.previewNavOpen()?"close":"menu"),l(8),c("name",e.theme()==="dark"?"theme-light":"theme-dark"),l(),V(" ",e.theme()==="dark"?"Light":"Dark"," "),l(2),P(e.previewBlocks),l(2),q(e.shellFooter()?75:-1)}},dependencies:[G,O,E,x,z,R,I,J,j,g,U],styles:[`@charset "UTF-8";
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
