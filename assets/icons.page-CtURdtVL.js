import{X as x,aX as z,aY as F,s as u,aZ as P,ɵ as S,c as R,b as N,a as B,F as E,d as e,g as c,f as n,e as o,B as v,w as b,j as r,l as w,m as p,x as k,i as m,q as g,o as f,T as _,k as d,E as C,W as O,L,N as T,O as I}from"./index-Dm7NIW0i.js";import{K as V}from"./kind-badge.component-DK33NVyt.js";import{FoldPageSectionComponent as $}from"./page-section.component-B2ZZDtjr.js";import{FoldHeroSectionComponent as j}from"./hero-section.component-0SBSFU_4.js";import{FoldNavLayoutComponent as A}from"./nav-layout.component-BFYse2QG.js";import{FoldViewNavComponent as D}from"./view-nav.component-HTSaAr8m.js";import{FoldCalloutComponent as K}from"./callout.component-Bkoj6zhm.js";import{FoldButtonComponent as G}from"./button.component-CSVQycLG.js";import"./fold-at-BNkbvp9n.js";import"./breakpoints-J4fapboB.js";import"./nav-layout.context-wbXoELsE.js";import"./tab-tooltip.directive-exSfc_PJ.js";import"./auto-update-_srfpL1Q.js";const M=(t,i)=>i.key,U=(t,i)=>i.title;function H(t,i){if(t&1){const a=C();e(0,"button",22),v("click",function(){const s=T(a).$implicit,h=g(3);return I(h.copyIconName(s))}),c(1,"fold-icon",23),e(2,"span",24),o(3),n()()}if(t&2){const a=i.$implicit,l=g(3);L("is-copied",l.copiedIcon()===a),r(),p("name",a)("title",a),r(2),d(l.copiedIcon()===a?"copied!":a)}}function W(t,i){if(t&1&&(e(0,"div",15)(1,"div",16)(2,"h3",17),o(3),n(),c(4,"fold-badge",18),e(5,"span",19),o(6),n()(),e(7,"div",20),m(8,H,4,5,"button",21,_),n()()),t&2){const a=i.$implicit;r(3),d(a.label),r(),p("content",a.names.length.toString()),r(2),d(a.desc),r(2),f(a.names)}}function Y(t,i){if(t&1&&(e(0,"fold-page-section",11),m(1,W,10,3,"div",15,M),n()),t&2){const a=g();p("description",a.totalCount+" glyphs across "+a.categories.length+" categories — click a tile to copy its name."),r(),f(a.categories)}}function X(t,i){if(t&1&&(e(0,"div",31),c(1,"fold-icon",32),e(2,"span"),o(3),n()()),t&2){const a=i.$implicit;r(),p("size",a),r(2),d(a)}}function q(t,i){if(t&1&&(e(0,"span",35),c(1,"fold-icon",36),n()),t&2){const a=i.$implicit;O("color","var(--fold-color-"+a+")")}}function Z(t,i){if(t&1&&(e(0,"fold-page-section",12)(1,"fold-card",25)(2,"pre",26)(3,"code"),o(4),n()()(),e(5,"div",27)(6,"div",28)(7,"span",29),o(8,"size · xs / sm / md / lg / xl · or a pixel number"),n(),e(9,"div",30),m(10,X,4,2,"div",31,_),e(12,"div",31),c(13,"fold-icon",32),e(14,"span"),o(15,"40px"),n()()()(),e(16,"div",28)(17,"span",29),o(18,"color · inherits currentColor"),n(),e(19,"div",33),m(20,q,2,2,"span",34,_),n()()()()),t&2){const a=g();r(4),d(a.usageCode),r(6),f(a.iconSizeSteps),r(3),p("size",40),r(7),f(a.iconColorTokens)}}function J(t,i){t&1&&(c(0,"fold-icon",46),e(1,"code"),o(2,'name="demo-sparkle"'),n()),t&2&&p("size",48)}function Q(t,i){t&1&&(e(0,"span",45),o(1,"nothing registered yet"),n())}function ee(t,i){if(t&1){const a=C();e(0,"fold-page-section",13)(1,"div",37)(2,"fold-card",25)(3,"span",29),o(4,"at bootstrap — idiomatic, like provideRouter"),n(),e(5,"pre",26)(6,"code"),o(7),n()()(),e(8,"fold-card",25)(9,"span",29),o(10,"at runtime — resolves reactively"),n(),e(11,"pre",26)(12,"code"),o(13),n()()()(),e(14,"fold-callout",38)(15,"strong"),o(16,"Trust contract:"),n(),o(17," icon markup is injected unsanitised, so every registered value must be a static, authored "),e(18,"code"),o(19,"<svg>"),n(),o(20," string — never user input. The registry throws on a non-"),e(21,"code"),o(22,"<svg>"),n(),o(23," root or a "),e(24,"code"),o(25,"<script>"),n(),o(26," / "),e(27,"code"),o(28,"on*="),n(),o(29," handler. "),n(),e(30,"fold-card",39)(31,"div",40)(32,"h3",41),o(33,"See it resolve, live"),n(),e(34,"p",42),o(35," Registering an icon updates the sprite reactively — no reload. Click to register "),e(36,"code"),o(37,"demo-sparkle"),n(),o(38,", then it renders on the right. "),n(),e(39,"button",43),v("click",function(){T(a);const s=g();return I(s.registerDemoIcon())}),o(40),n()(),e(41,"div",44),b(42,J,3,1)(43,Q,2,0,"span",45),n()()()}if(t&2){const a=g();r(7),d(a.provideCode),r(6),d(a.runtimeCode),r(26),p("disabled",a.demoRegistered()),r(),w(" ",a.demoRegistered()?"Registered ✓":"Register demo-sparkle"," "),r(2),k(a.demoRegistered()?42:43)}}function oe(t,i){if(t&1&&(e(0,"fold-card",49)(1,"span",50),c(2,"fold-icon",51),n(),e(3,"h3",41),o(4),n(),e(5,"p",42),o(6),n()()),t&2){const a=i.$implicit;r(2),p("name",a.icon),r(2),d(a.title),r(2),d(a.body)}}function ne(t,i){if(t&1&&(e(0,"fold-page-section",14)(1,"fold-callout",47),o(2," Every icon renders through a "),e(3,"strong"),o(4,"shared SVG sprite"),n(),o(5," — one "),e(6,"code"),o(7,"<symbol>"),n(),o(8," per icon, a lightweight "),e(9,"code"),o(10,"<use>"),n(),o(11," per instance — so a 500-row table with three icons each is 1500 tiny references over 3 symbols, not 1500 copies of the markup. "),n(),e(12,"div",48),m(13,oe,7,3,"fold-card",49,U),n()()),t&2){const a=g();r(13),f(a.features)}}const ae='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.5 6.9L21.5 11l-6.9 2.5L12 20l-2.5-6.5L2.5 11l7-2.1z"/></svg>';class y{registry=x(z);devtools=x(F);tabs=[{key:"catalog",label:"Catalogue",icon:"grid"},{key:"usage",label:"Usage",icon:"code"},{key:"extend",label:"Registry",icon:"plus"},{key:"why",label:"Why it holds up",icon:"lightning"}];tab=u("catalog");iconSizeSteps=["xs","sm","md","lg","xl"];iconColorTokens=["text","text-secondary","primary","info","warning","alert","success"];features=[{icon:"code",title:"Typed names",body:"name autocompletes every built-in and compile-errors on a typo — a missing icon is caught before runtime, not after."},{icon:"copy",title:"Shared sprite",body:"Each icon is one <symbol> in a hidden sprite; every instance is a tiny <use>. 1500 renders cost 3 symbols, not 1500 copies."},{icon:"palette",title:"currentColor",body:"Colour is inherited — set color on any ancestor and the icon follows. No colour prop, no theme fork."},{icon:"sliders",title:"Token sizes",body:"xs…xl map to the --fold-icon-size-* scale (or pass a pixel number). A dense theme can rescale every icon at once."},{icon:"shield",title:"Trust-guarded",body:"The registry rejects <script> and inline on*= handlers at registration — the unsanitised inject can't become an XSS sink."},{icon:"lightning",title:"Self-contained",body:"SVGs are inlined into the package — no HTTP fetch, no .svg loader config, no network on first paint."}];descriptions={ui:"Actions, editing, files, view chrome — the everyday verbs.",nav:"The app's destinations — roughly one per rail entry.",commerce:"Cart, catalogue, payment, fulfilment — the e-commerce domain.",music:"Playback, waveforms, the audio domain.",status:"State, severity, achievement.",people:"Members, leads, rights, roles.",brands:"Third-party marks — kept apart from the single-glyph sets."};categories=P.map(i=>({key:i.id,label:i.label,desc:this.descriptions[i.id],names:i.names}));totalCount=this.categories.reduce((i,a)=>i+a.names.length,0);usageCode=`<fold-icon name="search" />
<fold-icon name="bin" size="lg" />
<fold-icon name="heart" [size]="18" />
<fold-icon name="edit" title="Edit track" />`;provideCode=`// app.config.ts — register once at bootstrap
providers: [
  provideFoldIcons({
    "my-logo": "<svg viewBox='0 0 24 24'>…</svg>",
  }),
];`;runtimeCode=`// …or at runtime — resolves reactively
const icons = inject(FoldIconRegistry);
icons.register("my-logo", svgMarkup);
icons.registerMany({ … });`;copiedIcon=u("");demoRegistered=u(!1);copyIconName(i){navigator.clipboard.writeText(i).then(()=>{this.copiedIcon.set(i),setTimeout(()=>this.copiedIcon.set(""),1200)})}registerDemoIcon(){this.registry.register("demo-sparkle",ae),this.demoRegistered.set(!0)}static ɵfac=function(a){return new(a||y)};static ɵcmp=S({type:y,selectors:[["gal-icons-page"]],decls:29,vars:4,consts:[["align","start"],["heroBackdrop","",1,"ic-hero-bg"],["name","grid"],["kind","component"],[1,"ic-hero-title"],[1,"ic-hero-lede"],[1,"ic-hero-cta"],["foldButton","","size","lg","icon","sliders",3,"click"],[1,"ic-hero-hint"],["placement","side"],["tabNav","","direction","vertical","activeStyle","fill","background","transparent","size","comfortable",3,"activeKeyChange","items","activeKey"],["title","The catalogue",3,"description"],["title","Usage","description","A name, an optional size, an optional accessible label."],["title","Adding your own — the registry","description","The built-in set is the shared core; an app extends it through the root FoldIconRegistry."],["title","Why it holds up","description","The decisions behind the one-liner."],[1,"cat"],[1,"cat-head"],[1,"cat-title"],["variant","neutral","radius","square",3,"content"],[1,"cat-desc"],[1,"icon-grid"],["type","button",1,"icon-cell",3,"is-copied"],["type","button",1,"icon-cell",3,"click"],["size","lg",3,"name","title"],[1,"icon-cell-name"],["surface","sunken","padding","sm"],[1,"code-pre"],[1,"demo-row"],[1,"gal-cell"],[1,"gal-tag"],[1,"icon-sizes"],[1,"isz"],["name","bell",3,"size"],[1,"icon-colors"],[1,"icol",3,"color"],[1,"icol"],["name","fire","size","lg"],[1,"reg-grid"],["variant","warning","icon","shield"],[1,"live"],[1,"live-copy"],[1,"feat-title"],[1,"feat-body"],["foldButton","","icon","plus",3,"click","disabled"],[1,"live-stage"],[1,"live-empty"],["name","demo-sparkle",3,"size"],["variant","accent","icon","lightning",1,"pitch"],[1,"feat-grid"],[1,"feat"],[1,"feat-ico"],["size","lg",3,"name"]],template:function(a,l){if(a&1&&(e(0,"fold-page-layout")(1,"fold-hero-section",0)(2,"span",1),c(3,"fold-icon",2),n(),c(4,"gal-kind-badge",3),e(5,"h1",4),o(6,"icon"),n(),e(7,"p",5),o(8," One typed component for every SVG icon. "),e(9,"code"),o(10,"name"),n(),o(11," is a compile-checked built-in (or any registered string); colour and size come from CSS, so an icon inherits "),e(12,"code"),o(13,"currentColor"),n(),o(14),n(),e(15,"div",6)(16,"button",7),v("click",function(){return l.devtools.openIconTool()}),o(17," Découvre FoldDevTool-ICON "),n(),e(18,"span",8),o(19," A dev-only overlay to search the registry & copy a "),e(20,"code"),o(21,"<fold-icon>"),n(),o(22," snippet — draggable, minimisable. "),n()()(),e(23,"fold-nav-layout",9)(24,"fold-view-nav",10),v("activeKeyChange",function(h){return l.tab.set(h)}),n(),b(25,Y,3,1,"fold-page-section",11)(26,Z,22,2,"fold-page-section",12)(27,ee,44,5,"fold-page-section",13)(28,ne,15,0,"fold-page-section",14),n()()),a&2){let s;r(14),w(" and scales with a token. ",l.totalCount," glyphs ship inlined — no HTTP, no loader config. "),r(10),p("items",l.tabs)("activeKey",l.tab()),r(),k((s=l.tab())==="catalog"?25:s==="usage"?26:s==="extend"?27:s==="why"?28:-1)}},dependencies:[V,R,$,j,A,D,N,K,B,G,E],styles:[`@charset "UTF-8";
/* ── icons page — the fold-icon system: pitch, registry, full catalogue ────
   Premium, airy layout: the page retunes its own vertical rhythm and every
   band breathes. Scoped under \`gal-icons-page\` (the page is ViewEncapsulation
   .None), so nothing here leaks to other gallery pages. */
gal-icons-page {
  /* Airier band-to-band rhythm than the default 32px — the page reads spacious,
     not dense. One knob, inherited by the fold-page-layout below. */
  --fold-page-gap: 56px;
  display: block;
}

/* The section-leading pitch reads like a statement, not a notice. */
/* ── Hero (full-bleed top band) ─────────────────────────────────────── */
gal-icons-page .ic-hero-title {
  margin: 0.4rem 0 0;
  font-size: clamp(2.2rem, 6vw, 3.4rem);
  font-weight: var(--fold-weight-bold);
  letter-spacing: var(--fold-tracking-tighter);
}

gal-icons-page .ic-hero-lede {
  margin: 0.75rem 0 0;
  max-width: 44rem;
  font-size: var(--fold-text-base);
  line-height: var(--fold-leading-relaxed);
  color: var(--fold-color-text-secondary);
}

gal-icons-page .ic-hero-cta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--fold-space-md);
  margin-top: var(--fold-space-lg);
}

gal-icons-page .ic-hero-hint {
  max-width: 22rem;
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-muted);
  line-height: var(--fold-leading-normal);
}

/* The decorative backdrop glyph — oversized, faint, behind the text. */
gal-icons-page .ic-hero-bg {
  position: absolute;
  top: 50%;
  right: 4%;
  transform: translateY(-50%);
  color: var(--fold-color-primary);
  opacity: 0.06;
  pointer-events: none;
}

gal-icons-page .ic-hero-bg :is(svg, fold-icon) {
  display: block;
  width: clamp(9rem, 22vw, 16rem);
  height: clamp(9rem, 22vw, 16rem);
}

/* The section-leading pitch reads like a statement, not a notice. */
gal-icons-page .pitch {
  display: block;
  margin-bottom: var(--fold-space-lg);
  font-size: var(--fold-text-base);
  line-height: var(--fold-leading-relaxed);
}

/* ── Why it holds up — feature cards ─────────────────────────────────────── */
gal-icons-page .feat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--fold-space-xl);
}

@media (max-width: 880px) {
  gal-icons-page .feat-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 560px) {
  gal-icons-page .feat-grid {
    grid-template-columns: 1fr;
  }
}
gal-icons-page .feat {
  display: flex;
  flex-direction: column;
  gap: var(--fold-space-md);
  transition: transform var(--fold-motion-base), box-shadow var(--fold-motion-base), border-color var(--fold-motion-base);
}

gal-icons-page .feat:hover {
  transform: translateY(-3px);
  box-shadow: var(--fold-shadow-md);
  border-color: var(--fold-color-primary-border);
}

gal-icons-page .feat-ico {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: var(--fold-radius-md);
  border: 1px solid var(--fold-color-primary-border);
  color: var(--fold-color-primary-text);
  background: linear-gradient(150deg, var(--fold-color-primary-surface), transparent 130%);
}

gal-icons-page .feat-title {
  margin: 0;
  font-size: var(--fold-text-base);
  font-weight: var(--fold-weight-semibold);
  letter-spacing: var(--fold-tracking-tight);
  color: var(--fold-color-text);
}

gal-icons-page .feat-body {
  margin: 0;
  font-size: var(--fold-text-sm);
  line-height: var(--fold-leading-relaxed);
  color: var(--fold-color-text-secondary);
}

/* ── Usage — size + colour demos ─────────────────────────────────────────── */
gal-icons-page .demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fold-space-xl);
  margin-top: var(--fold-space-lg);
}

gal-icons-page .demo-row .gal-cell {
  flex: 1 1 260px;
  padding: var(--fold-space-lg);
  border-radius: var(--fold-radius-lg);
  border: 1px solid var(--fold-color-border-subtle);
  background: var(--fold-color-surface-sunken);
}

gal-icons-page .icon-sizes {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 26px;
  margin-top: var(--fold-space-md);
  color: var(--fold-color-text);
}

gal-icons-page .isz {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

gal-icons-page .isz span {
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
  font-variant-numeric: tabular-nums;
}

gal-icons-page .icon-colors {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--fold-space-lg);
  margin-top: var(--fold-space-md);
}

/* ── Registry — code cards + live demo ───────────────────────────────────── */
gal-icons-page .reg-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--fold-space-md);
}

gal-icons-page .reg-grid .gal-tag {
  margin-bottom: var(--fold-space-sm);
}

gal-icons-page .live {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--fold-space-xl);
  margin-top: var(--fold-space-md);
}

gal-icons-page .live-copy {
  flex: 1 1 320px;
  display: flex;
  flex-direction: column;
  gap: var(--fold-space-md);
  align-items: flex-start;
}

gal-icons-page .live-stage {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--fold-space-sm);
  min-width: 200px;
  min-height: 160px;
  padding: var(--fold-space-xl);
  border-radius: var(--fold-radius-lg);
  border: 1px dashed var(--fold-color-primary-border);
  color: var(--fold-color-primary);
  background: radial-gradient(120% 120% at 50% 0%, var(--fold-color-primary-surface), transparent 70%);
}

gal-icons-page .live-stage code {
  color: var(--fold-color-text-muted);
  font-size: var(--fold-text-xs);
}

gal-icons-page .live-empty {
  color: var(--fold-color-text-faded);
  font-size: var(--fold-text-sm);
}

/* ── Catalogue — one titled block per category ───────────────────────────── */
gal-icons-page .cat {
  margin-top: var(--fold-space-xl);
}

gal-icons-page .cat:first-child {
  margin-top: 0;
}

gal-icons-page .cat-head {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: var(--fold-space-sm);
  margin-bottom: var(--fold-space-md);
}

gal-icons-page .cat-title {
  margin: 0;
  font-size: var(--fold-text-lg);
  font-weight: var(--fold-weight-semibold);
  letter-spacing: var(--fold-tracking-tight);
  color: var(--fold-color-text);
}

gal-icons-page .cat-desc {
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-muted);
}

gal-icons-page .icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(104px, 1fr));
  gap: var(--fold-space-md);
  width: 100%;
}

gal-icons-page .icon-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 18px 8px;
  border-radius: var(--fold-radius-md);
  border: 1px solid var(--fold-color-border-subtle);
  background: var(--fold-color-surface-card);
  color: var(--fold-color-text);
  font: inherit;
  cursor: pointer;
  overflow: hidden;
  transition: transform var(--fold-motion-fast), border-color var(--fold-motion-fast), color var(--fold-motion-fast);
}

gal-icons-page .icon-cell:hover {
  transform: translateY(-2px);
  border-color: var(--fold-color-primary);
  color: var(--fold-color-primary-text);
}

gal-icons-page .icon-cell.is-copied {
  border-color: var(--fold-color-success);
  color: var(--fold-color-success-text);
}

gal-icons-page .icon-cell-name {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: var(--fold-font-mono);
  font-size: var(--fold-text-2xs);
  color: var(--fold-color-text-muted);
}`],encapsulation:2})}export{y as default};
