import{T as _,a6 as k,a7 as w,a8 as C,a9 as I,aa as T,ab as z,ac as S,s as v,ɵ as F,c as P,b as O,a as N,F as R,d as e,g as d,e as n,f as o,i as p,u as m,C as b,I as j,j as t,l as h,o as g,k as l,m as c,J as B,A,B as E,q as y,D as M,E as V,H as $}from"./index-CyC2HW3E.js";import{K as U}from"./kind-badge.component-BjeAtxSk.js";import{FoldPageSectionComponent as D}from"./page-section.component-Da0lZatD.js";import{FoldCalloutComponent as L}from"./callout.component-t8-9WsM1.js";import{FoldButtonComponent as G}from"./button.component-CXTdN1qp.js";import"./element-title.component-BatHnf8w.js";import"./spinner.component-DgOpNSL9.js";import"./tokens.catalog-DF_6rd51.js";const H=(r,i)=>i.title,q=(r,i)=>i.key;function K(r,i){if(r&1&&(e(0,"fold-card",6)(1,"span",30),d(2,"fold-icon",31),o(),e(3,"h3",23),n(4),o(),e(5,"p",24),n(6),o()()),r&2){const a=i.$implicit;t(2),c("name",a.icon),t(2),l(a.title),t(2),l(a.body)}}function W(r,i){if(r&1&&(e(0,"div",14),d(1,"fold-icon",15),e(2,"span"),n(3),o()()),r&2){const a=i.$implicit;t(),c("size",a),t(2),l(a)}}function Y(r,i){if(r&1&&(e(0,"span",32),d(1,"fold-icon",33),o()),r&2){const a=i.$implicit;A("color","var(--fold-color-"+a+")")}}function J(r,i){r&1&&(d(0,"fold-icon",34),e(1,"code"),n(2,'name="demo-sparkle"'),o()),r&2&&c("size",48)}function X(r,i){r&1&&(e(0,"span",27),n(1,"nothing registered yet"),o())}function Q(r,i){if(r&1){const a=E();e(0,"button",41),b("click",function(){const u=V(a).$implicit,x=y(2);return $(x.copyIconName(u))}),d(1,"fold-icon",42),e(2,"span",43),n(3),o()()}if(r&2){const a=i.$implicit,s=y(2);M("is-copied",s.copiedIcon()===a),t(),c("name",a)("title",a),t(2),l(s.copiedIcon()===a?"copied!":a)}}function Z(r,i){if(r&1&&(e(0,"div",29)(1,"div",35)(2,"h3",36),n(3),o(),d(4,"fold-badge",37),e(5,"span",38),n(6),o()(),e(7,"div",39),p(8,Q,4,5,"button",40,m),o()()),r&2){const a=i.$implicit;t(3),l(a.label),t(),c("content",a.names.length.toString()),t(2),l(a.desc),t(2),g(a.names)}}const ee='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.5 6.9L21.5 11l-6.9 2.5L12 20l-2.5-6.5L2.5 11l7-2.1z"/></svg>';class f{registry=_(k);iconSizeSteps=["xs","sm","md","lg","xl"];iconColorTokens=["text","text-secondary","primary","info","warning","alert","success"];features=[{icon:"code",title:"Typed names",body:"name autocompletes every built-in and compile-errors on a typo — a missing icon is caught before runtime, not after."},{icon:"copy",title:"Shared sprite",body:"Each icon is one <symbol> in a hidden sprite; every instance is a tiny <use>. 1500 renders cost 3 symbols, not 1500 copies."},{icon:"palette",title:"currentColor",body:"Colour is inherited — set color on any ancestor and the icon follows. No colour prop, no theme fork."},{icon:"sliders",title:"Token sizes",body:"xs…xl map to the --fold-icon-size-* scale (or pass a pixel number). A dense theme can rescale every icon at once."},{icon:"shield",title:"Trust-guarded",body:"The registry rejects <script> and inline on*= handlers at registration — the unsanitised inject can't become an XSS sink."},{icon:"lightning",title:"Self-contained",body:"SVGs are inlined into the package — no HTTP fetch, no .svg loader config, no network on first paint."}];categories=[{key:"ui",label:"UI",desc:"Actions, editing, files, view chrome — the everyday verbs.",names:Object.keys(w)},{key:"nav",label:"Navigation",desc:"The app's destinations — roughly one per rail entry.",names:Object.keys(C)},{key:"music",label:"Music & transport",desc:"Playback, waveforms, the audio domain.",names:Object.keys(I)},{key:"status",label:"Status",desc:"State, severity, achievement.",names:Object.keys(T)},{key:"people",label:"People & roles",desc:"Members, leads, rights, roles.",names:Object.keys(z)},{key:"brands",label:"Brands",desc:"Third-party marks — kept apart from the single-glyph sets.",names:Object.keys(S)}];totalCount=this.categories.reduce((i,a)=>i+a.names.length,0);usageCode=`<fold-icon name="search" />
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
icons.registerMany({ … });`;copiedIcon=v("");demoRegistered=v(!1);copyIconName(i){navigator.clipboard.writeText(i).then(()=>{this.copiedIcon.set(i),setTimeout(()=>this.copiedIcon.set(""),1200)})}registerDemoIcon(){this.registry.register("demo-sparkle",ee),this.demoRegistered.set(!0)}static ɵfac=function(a){return new(a||f)};static ɵcmp=F({type:f,selectors:[["gal-icons-page"]],decls:94,vars:9,consts:[["title","icon"],["titleBadge","","kind","component"],["description",""],["title","Why it holds up","description","The decisions behind the one-liner."],["variant","accent","icon","lightning",1,"pitch"],[1,"feat-grid"],[1,"feat"],["title","Usage","description","A name, an optional size, an optional accessible label."],["surface","sunken","padding","sm"],[1,"code-pre"],[1,"demo-row"],[1,"gal-cell"],[1,"gal-tag"],[1,"icon-sizes"],[1,"isz"],["name","bell",3,"size"],[1,"icon-colors"],[1,"icol",3,"color"],["title","Adding your own — the registry","description","The built-in set is the shared core; an app extends it through the root FoldIconRegistry."],[1,"reg-grid"],["variant","warning","icon","shield"],[1,"live"],[1,"live-copy"],[1,"feat-title"],[1,"feat-body"],["foldButton","","icon","plus",3,"click","disabled"],[1,"live-stage"],[1,"live-empty"],["title","The catalogue",3,"description"],[1,"cat"],[1,"feat-ico"],["size","lg",3,"name"],[1,"icol"],["name","fire","size","lg"],["name","demo-sparkle",3,"size"],[1,"cat-head"],[1,"cat-title"],["variant","neutral","radius","square",3,"content"],[1,"cat-desc"],[1,"icon-grid"],["type","button",1,"icon-cell",3,"is-copied"],["type","button",1,"icon-cell",3,"click"],["size","lg",3,"name","title"],[1,"icon-cell-name"]],template:function(a,s){a&1&&(e(0,"fold-page-layout",0),d(1,"gal-kind-badge",1),e(2,"p",2),n(3," One typed component for every SVG icon in the app. "),e(4,"code"),n(5,"name"),o(),n(6," is a compile-checked built-in (or any registered string); colour and size come from CSS, so an icon inherits "),e(7,"code"),n(8,"currentColor"),o(),n(9),o(),e(10,"fold-page-section",3)(11,"fold-callout",4),n(12," Every icon renders through a "),e(13,"strong"),n(14,"shared SVG sprite"),o(),n(15," — one "),e(16,"code"),n(17,"<symbol>"),o(),n(18," per icon, a lightweight "),e(19,"code"),n(20,"<use>"),o(),n(21," per instance — so a 500-row table with three icons each is 1500 tiny references over 3 symbols, not 1500 copies of the markup. "),o(),e(22,"div",5),p(23,K,7,3,"fold-card",6,H),o()(),e(25,"fold-page-section",7)(26,"fold-card",8)(27,"pre",9)(28,"code"),n(29),o()()(),e(30,"div",10)(31,"div",11)(32,"span",12),n(33,"size · xs / sm / md / lg / xl · or a pixel number"),o(),e(34,"div",13),p(35,W,4,2,"div",14,m),e(37,"div",14),d(38,"fold-icon",15),e(39,"span"),n(40,"40px"),o()()()(),e(41,"div",11)(42,"span",12),n(43,"color · inherits currentColor"),o(),e(44,"div",16),p(45,Y,2,2,"span",17,m),o()()()(),e(47,"fold-page-section",18)(48,"div",19)(49,"fold-card",8)(50,"span",12),n(51,"at bootstrap — idiomatic, like provideRouter"),o(),e(52,"pre",9)(53,"code"),n(54),o()()(),e(55,"fold-card",8)(56,"span",12),n(57,"at runtime — resolves reactively"),o(),e(58,"pre",9)(59,"code"),n(60),o()()()(),e(61,"fold-callout",20)(62,"strong"),n(63,"Trust contract:"),o(),n(64," icon markup is injected unsanitised, so every registered value must be a static, authored "),e(65,"code"),n(66,"<svg>"),o(),n(67," string — never user input. The registry throws on a non-"),e(68,"code"),n(69,"<svg>"),o(),n(70," root or a "),e(71,"code"),n(72,"<script>"),o(),n(73," / "),e(74,"code"),n(75,"on*="),o(),n(76," handler. "),o(),e(77,"fold-card",21)(78,"div",22)(79,"h3",23),n(80,"See it resolve, live"),o(),e(81,"p",24),n(82," Registering an icon updates the sprite reactively — no reload. Click to register "),e(83,"code"),n(84,"demo-sparkle"),o(),n(85,", then it renders on the right. "),o(),e(86,"button",25),b("click",function(){return s.registerDemoIcon()}),n(87),o()(),e(88,"div",26),j(89,J,3,1)(90,X,2,0,"span",27),o()()(),e(91,"fold-page-section",28),p(92,Z,10,3,"div",29,q),o()()),a&2&&(t(9),h(" and scales with a token. ",s.totalCount," icons ship inlined — no HTTP, no loader config. "),t(14),g(s.features),t(6),l(s.usageCode),t(6),g(s.iconSizeSteps),t(3),c("size",40),t(7),g(s.iconColorTokens),t(9),l(s.provideCode),t(6),l(s.runtimeCode),t(26),c("disabled",s.demoRegistered()),t(),h(" ",s.demoRegistered()?"Registered ✓":"Register demo-sparkle"," "),t(2),B(s.demoRegistered()?89:90),t(2),c("description",s.totalCount+" icons, grouped by category — click a tile to copy its name."),t(),g(s.categories))},dependencies:[U,P,D,O,L,N,G,R],styles:[`@charset "UTF-8";
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
gal-icons-page .pitch {
  display: block;
  margin-bottom: var(--fold-space-lg);
  font-size: var(--fold-text-md);
  line-height: 1.6;
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
  font-size: var(--fold-text-md);
  font-weight: 650;
  letter-spacing: -0.01em;
  color: var(--fold-color-text);
}

gal-icons-page .feat-body {
  margin: 0;
  font-size: var(--fold-text-sm);
  line-height: 1.6;
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
  font-weight: 650;
  letter-spacing: -0.01em;
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
  font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  font-size: 10px;
  color: var(--fold-color-text-muted);
}`],encapsulation:2})}export{f as default};
