import{U as N,V as L,C as B,aI as x,s as c,B as w,J as z,K as M,ɵ as R,c as D,b4 as I,b5 as j,b6 as $,b7 as q,F as K,b8 as V,E as y,d as t,e as i,f as o,g as v,G as d,h as k,i as F,y as C,L as A,j as a,m,x as f,n as S,o as T,D as Q,M as W,l as E,N as U,O as G,z as g,T as O,S as J,H as u,I as _,q as P}from"./index-DF_F-rLD.js";import{T as X}from"./tab-panel.component-CwA2u9NJ.js";import{K as Y}from"./kind-badge.component-ChkWmHPi.js";import{D as Z}from"./playground.component--8ZrANRf.js";import{F as ee}from"./slider.component-70A6TTxV.js";import"./tab-nav.component-CoXnQ8J3.js";import"./button.component-_xZ69hru.js";import"./spinner.component-Dz9DDG0U.js";import"./tokens.catalog-DF_6rd51.js";import"./element-title.component-D4TZ9rJk.js";import"./page-section.component-DSGTnTQG.js";import"./input-value-Co_u-z_8.js";class b{service=N(L);static ɵfac=function(l){return new(l||b)};static ɵdir=B({type:b,selectors:[["","panelScope",""]],exportAs:["panelScope"],features:[x([L])]})}const oe=["shellWindow"],te=(p,n)=>n.id;function le(p,n){if(p&1){const l=y();t(0,"button",10),d("click",function(){const s=u(l).$implicit,r=g();return _(r.shellMode.set(s))}),i(1),o()}if(p&2){const l=n.$implicit,e=g();f("is-on",e.shellMode()===l),a(),E(" ",l," ")}}function ne(p,n){if(p&1){const l=y();t(0,"button",35),d("click",function(){const s=u(l).$implicit,r=g();return r.previewNav.set(s.id),_(r.previewNavOpen.set(!1))}),o()}if(p&2){const l=n.$implicit,e=g();m("icon",l.icon)("label",l.label)("active",e.previewNav()===l.id)}}function ae(p,n){if(p&1){const l=y();t(0,"button",36),d("click",function(){u(l);const s=g();return _(s.previewNavOpen.set(!s.previewNavOpen()))}),v(1,"fold-icon",31),o()}if(p&2){const l=g(),e=O(52);J("aria-expanded",l.previewNavOpen())("aria-controls",e.drawerId),a(),m("name",l.previewNavOpen()?"close":"menu")}}function ie(p,n){p&1&&v(0,"div",33)}function re(p,n){p&1&&(t(0,"div",34),v(1,"fold-icon",37),t(2,"span",38),i(3,"Now playing — Track 03"),o(),t(4,"span",39),i(5,"1:24 / 3:57"),o()())}class H{theme=c("dark");railElevated=c(!1);shellHeaderLayout=c("inset");shellFooterLayout=c("full");shellFooterBehavior=c("pinned");shellFooter=c(!0);shellRailWidth=c(64);shellHeaderHeight=c(56);shellModes=["desktop","tablet","mobile"];shellMode=c("desktop");SHELL_MODE_WIDTH={desktop:1200,tablet:880,mobile:380};shellWidth=w(()=>this.SHELL_MODE_WIDTH[this.shellMode()]);windowEl=z("shellWindow");windowWidth=c(0);shellScale=w(()=>{const n=this.windowWidth();return n===0?1:Math.min(1,n/this.shellWidth())});constructor(){M(n=>{const l=this.windowEl()?.nativeElement;if(!l||typeof ResizeObserver>"u")return;const e=new ResizeObserver(s=>{const r=s[0];r&&this.windowWidth.set(r.contentRect.width)});e.observe(l),n(()=>e.disconnect())})}setHeaderLayout(n){this.shellHeaderLayout.set(n)}setFooterLayout(n){this.shellFooterLayout.set(n)}setFooterBehavior(n){this.shellFooterBehavior.set(n)}shellCode=w(()=>["<fold-app-shell",`  headerLayout="${this.shellHeaderLayout()}"`,...this.shellFooter()?[`  footerLayout="${this.shellFooterLayout()}"`,`  footerBehavior="${this.shellFooterBehavior()}"`]:[],`  [railWidth]="${this.shellRailWidth()}"`,`  [headerHeight]="${this.shellHeaderHeight()}"`,">",`  <fold-menu railPrimary${this.railElevated()?" foldElevated":""}>…</fold-menu>`,"  <fold-menu railSecondary>…</fold-menu>","  <header header>…</header>","  <!-- untagged content → the main area -->","  <main>…</main>",...this.shellFooter()?["  <app-player footer>…</app-player>"]:["  <!-- no footer → the footer row collapses -->"],"</fold-app-shell>"].join(`
`));toggleTheme(){this.theme.update(n=>n==="dark"?"light":"dark")}openPreviewPanel(n){n.open(X,{side:"right",width:260})}railNav=[{id:"home",icon:"home",label:"Home"},{id:"contracts",icon:"contracts",label:"Contracts"},{id:"music",icon:"music",label:"Music"}];previewNav=c("home");previewNavOpen=c(!1);previewBlocks=Array.from({length:8},(n,l)=>l);static ɵfac=function(l){return new(l||H)};static ɵcmp=R({type:H,selectors:[["gal-app-shell-page"]],viewQuery:function(l,e){l&1&&U(e.windowEl,oe,5),l&2&&G()},decls:81,vars:45,consts:[["shellWindow",""],["sph","panelScope"],["previewShell","foldAppShell"],["title","app-shell","icon","grid"],["description",""],["titleBadge","","kind","component"],[3,"code"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ss-seg"],["type","button",3,"click"],["params","","label","railWidth",3,"valueChange","min","max","valueText","value"],["params","","label","headerHeight",3,"valueChange","min","max","valueText","value"],["preview-actions","",1,"ss-seg"],["type","button",3,"is-on"],[1,"shell-window"],["panelScope","",1,"shell-preview"],[3,"mobileNavOpenChange","headerLayout","footerLayout","footerBehavior","railWidth","headerHeight","mobileNavOpen"],["railPrimary","","tint","primary",3,"expanded","foldElevated"],["header","",1,"rail-brand"],["fold-menu-item","",3,"icon","label","active"],["footer","","fold-menu-item","","icon","settings","label","Settings"],["railSecondary","","level","secondary",3,"expanded"],["header","",1,"lib-head"],["fold-menu-item","","icon","grid","label","Overview",3,"active"],["fold-menu-item","","icon","contracts","label","Contracts"],["fold-menu-item","","icon","music","label","Library"],["header","",1,"sp-header"],["type","button","aria-haspopup","dialog","aria-label","Toggle navigation",1,"sp-hamburger"],[1,"sp-actions"],["name","contracts","size","sm"],["size","sm",3,"name"],[1,"sp-content"],[1,"sp-block"],["footer","",1,"sp-footer"],["fold-menu-item","",3,"click","icon","label","active"],["type","button","aria-haspopup","dialog","aria-label","Toggle navigation",1,"sp-hamburger",3,"click"],["name","play","size","sm"],[1,"sp-footer-track"],[1,"sp-footer-time"]],template:function(l,e){if(l&1){const s=y();t(0,"fold-page-layout",3)(1,"p",4),i(2," The application frame: a primary icon rail, an optional secondary rail, a header band, the content area and a self-collapsing footer, wired as one responsive scaffold. It folds on its own width via container queries — the secondary rail collapses first, then the primary — so the same markup serves desktop, tablet and mobile. Header + footer layout (inset or full), footer behaviour (pinned player-bar or scroll-to-reveal legal footer), rail width and header height are inputs; everything else is a design token you can override. Regions float per-surface with "),t(3,"code"),i(4,"foldElevated"),o(),i(5," — the shell owns structure, not skin. "),o(),v(6,"gal-kind-badge",5),t(7,"dev-playground",6)(8,"div",7)(9,"span",8),i(10,"rail foldElevated"),o(),t(11,"div",9)(12,"button",10),d("click",function(){return e.railElevated.set(!1)}),i(13," flat "),o(),t(14,"button",10),d("click",function(){return e.railElevated.set(!0)}),i(15," elevated "),o()()(),t(16,"div",7)(17,"span",8),i(18,"headerLayout"),o(),t(19,"div",9)(20,"button",10),d("click",function(){return e.setHeaderLayout("inset")}),i(21," inset "),o(),t(22,"button",10),d("click",function(){return e.setHeaderLayout("full")}),i(23," full "),o()()(),t(24,"div",7)(25,"span",8),i(26,"footerLayout"),o(),t(27,"div",9)(28,"button",10),d("click",function(){return u(s),e.shellFooter.set(!0),_(e.setFooterLayout("inset"))}),i(29," inset "),o(),t(30,"button",10),d("click",function(){return u(s),e.shellFooter.set(!0),_(e.setFooterLayout("full"))}),i(31," full "),o(),t(32,"button",10),d("click",function(){return e.shellFooter.set(!1)}),i(33," none "),o()()(),t(34,"div",7)(35,"span",8),i(36,"footerBehavior"),o(),t(37,"div",9)(38,"button",10),d("click",function(){return u(s),e.shellFooter.set(!0),_(e.setFooterBehavior("pinned"))}),i(39," pinned "),o(),t(40,"button",10),d("click",function(){return u(s),e.shellFooter.set(!0),_(e.setFooterBehavior("scroll"))}),i(41," scroll "),o()()(),t(42,"fold-slider",11),k("valueChange",function(h){return u(s),P(e.shellRailWidth,h)||(e.shellRailWidth=h),_(h)}),o(),t(43,"fold-slider",12),k("valueChange",function(h){return u(s),P(e.shellHeaderHeight,h)||(e.shellHeaderHeight=h),_(h)}),o(),t(44,"div",13),F(45,le,2,3,"button",14,C),o(),t(47,"div",15,0)(49,"div",16,1)(51,"fold-app-shell",17,2),k("mobileNavOpenChange",function(h){return u(s),P(e.previewNavOpen,h)||(e.previewNavOpen=h),_(h)}),t(53,"fold-menu",18)(54,"div",19),i(55,"S3"),o(),F(56,ne,1,3,"button",20,te),v(58,"button",21),o(),t(59,"fold-menu",22)(60,"div",23),i(61,"Workspace"),o(),v(62,"button",24)(63,"button",25)(64,"button",26),o(),t(65,"div",27),A(66,ae,2,3,"button",28),t(67,"span"),i(68,"Header"),o(),t(69,"div",29)(70,"button",10),d("click",function(){u(s);const h=O(50);return _(e.openPreviewPanel(h.service))}),v(71,"fold-icon",30),i(72," Open panel "),o(),t(73,"button",10),d("click",function(){return e.toggleTheme()}),v(74,"fold-icon",31),i(75),o()()(),t(76,"div",32),F(77,ie,1,0,"div",33,C),o(),A(79,re,6,0,"div",34),v(80,"fold-panel-host"),o()()()()()}l&2&&(a(7),m("code",e.shellCode()),a(5),f("is-on",!e.railElevated()),a(2),f("is-on",e.railElevated()),a(6),f("is-on",e.shellHeaderLayout()==="inset"),a(2),f("is-on",e.shellHeaderLayout()==="full"),a(6),f("is-on",e.shellFooter()&&e.shellFooterLayout()==="inset"),a(2),f("is-on",e.shellFooter()&&e.shellFooterLayout()==="full"),a(2),f("is-on",!e.shellFooter()),a(6),f("is-on",e.shellFooterBehavior()==="pinned"),a(2),f("is-on",e.shellFooterBehavior()==="scroll"),a(2),m("min",48)("max",120)("valueText",e.shellRailWidth()+"px"),S("value",e.shellRailWidth),a(),m("min",44)("max",88)("valueText",e.shellHeaderHeight()+"px"),S("value",e.shellHeaderHeight),a(2),T(e.shellModes),a(4),Q("width",e.shellWidth(),"px")("zoom",e.shellScale()),a(2),m("headerLayout",e.shellHeaderLayout())("footerLayout",e.shellFooterLayout())("footerBehavior",e.shellFooterBehavior())("railWidth",e.shellRailWidth())("headerHeight",e.shellHeaderHeight()),S("mobileNavOpen",e.previewNavOpen),a(2),m("expanded",e.previewNavOpen())("foldElevated",e.railElevated()),a(3),T(e.railNav),a(3),m("expanded",!0),a(3),m("active",!0),a(4),W(e.shellMode()==="mobile"?66:-1),a(8),m("name",e.theme()==="dark"?"theme-light":"theme-dark"),a(),E(" ",e.theme()==="dark"?"Light":"Dark"," "),a(2),T(e.previewBlocks),a(2),W(e.shellFooter()?79:-1))},dependencies:[Y,D,I,j,$,q,K,ee,V,b,Z],styles:[`@charset "UTF-8";
/* The preview window: a real-width shell scaled down with CSS \`zoom\` (auto-fit
   via a ResizeObserver), centered on the backdrop; scrolls if it overflows. */
.shell-window {
  height: 460px;
  overflow: auto;
  overscroll-behavior: contain;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-lg);
  background: var(--fold-color-bg-page);
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.shell-preview {
  /* The container the shell's container queries key off — the mode switch sets
     its width so the shell folds (secondary at ≤1024, both at ≤768). A definite
     height gives the shell room; \`zoom\` (bound inline) scales the whole thing. */
  container-type: inline-size;
  height: 640px;
  transition: width var(--fold-motion-base);
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

/* Preview drawer toggle — only rendered in mobile mode (see the page). Keeps the
   "Header" label hugging it, actions pushed to the right. */
.sp-hamburger {
  display: inline-flex;
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
}`],encapsulation:2})}export{H as default};
