import{p as x,s as c,ɵ as w,R as k,F as _,a as F,b as z,c as C,d as e,e as o,f as t,g as a,h as u,i as f,j as r,k as p,l as S,m,n as g,o as y,q as b,r as T}from"./index-SxNeY3lN.js";import{F as A}from"./aside-layout.component-QFrbO_vL.js";import{F as B}from"./avatar-detail.component-1jMeNpMh.js";import{F as L}from"./disclosure.component-bCFAEoIg.js";import{F as H}from"./button.component-Duqv0Z-n.js";import{F as O}from"./callout.component-8Es_fX5a.js";import{F as I}from"./hero-section.component-Cgn7yiYd.js";import{F as P}from"./page-section.component-C9h3raWe.js";import"./avatar.component-CP1ZueyW.js";import"./spinner.component-CrxWhUXX.js";import"./tokens.catalog-DF_6rd51.js";import"./element-title.component-9Tsav4pt.js";const N=(s,l)=>l.label,R=(s,l)=>l.title;function U(s,l){if(s&1&&(e(0,"div",29)(1,"span",56),o(2),t(),e(3,"span",57),o(4),t()()),s&2){const i=l.$implicit;r(2),p(i.value),r(2),p(i.label)}}function j(s,l){if(s&1&&(e(0,"fold-card",31)(1,"div",58)(2,"span",59),a(3,"fold-icon",60),t(),e(4,"strong"),o(5),t()(),e(6,"p",36),o(7),t()()),s&2){const i=l.$implicit;r(3),m("name",i.icon),r(2),p(i.title),r(2),p(i.body)}}class h{version=x.version;startNowOpen=c(!1);supportOpen=c(!1);shareUrl="https://x.com/intent/post?text="+encodeURIComponent("Fold — a signals-first Angular design system, themeable to the bone.")+"&url="+encodeURIComponent("https://github.com/hugoheynard/fold-ng");stats=[{value:"26",label:"components"},{value:"4",label:"themes"},{value:"400",label:"tests"},{value:"0",label:"runtime theming cost"}];features=[{icon:"grid",title:"Themeable to the bone",body:"Four themes, and not one touches a component. A theme re-points semantic roles at different primitives — the swatch, not the widget. Add a fifth in one CSS block."},{icon:"lightning",title:"Signals-first, zoneless",body:"Angular 22, standalone, no zone.js. Inputs and state are signals; forms are Signal Forms. Nothing subscribes, nothing leaks."},{icon:"shield",title:"Tested to a contract",body:"400 specs, and a token contract that fails the build if a theme drops a role, a colour goes literal, or a primitive dies. The design system cannot rot quietly."},{icon:"diamond",title:"Self-contained",body:"Icons inline as currentColor SVG, styles ship with the component, tokens are plain CSS variables. Drop it into any Angular app — no loader config, no asset pipeline."},{icon:"org-chart",title:"Layouts that fold",body:"app-shell, tab-layout, aside-layout, sticky-column — the structural pieces every app hand-rolls, responsive on their own width, yours in one binding."},{icon:"completed",title:"Accessible by default",body:"Roles resolve from intent, focus is trapped where it should be, and a callout only interrupts a screen reader when it actually appears. Not an afterthought."}];static ɵfac=function(i){return new(i||h)};static ɵcmp=w({type:h,selectors:[["gal-home-page"]],decls:123,vars:7,consts:[[1,"home"],["heroBackdrop","",1,"home-version-bg"],["heroBackdrop","",1,"home-version"],[1,"home-mark"],["name","fold","title","Fold",3,"size"],["content","Angular 22 · responsive · accessible","variant","accent","radius","pill",1,"home-eyebrow"],[1,"home-title"],[1,"home-lede"],[1,"home-cta"],["foldButton","","routerLink","/app-shell","size","lg"],["foldButton","","routerLink","/themes","emphasis","outline","intent","neutral","size","lg"],[1,"home-startnow-row"],[1,"home-startnow",3,"openChange","open"],["summary","",1,"home-startnow-summary"],["name","lightning","size","sm"],[1,"home-startnow-hint"],[1,"home-terminal"],[1,"home-terminal-bar"],[1,"home-terminal-dot"],[1,"home-terminal-title"],[1,"home-terminal-body"],[1,"home-terminal-line"],[1,"home-terminal-prompt"],[1,"home-terminal-out"],[1,"home-terminal-comment"],["asideLeftLabel","Fold in numbers",1,"home-layout"],["asideLeft","","separators","","raisedBands","",1,"home-figures"],["cardHeader",""],[1,"home-figures-body"],[1,"home-figure"],[1,"home-features"],["separators","","raisedBands","",1,"home-feature"],["variant","accent",1,"home-close"],["foldButton","","actions","","routerLink","/card","size","sm","emphasis","outline","intent","neutral"],["asideRight","","separators","","raisedBands","",1,"home-support"],[1,"home-support-body"],[1,"gal-body"],[1,"home-support-menu",3,"openChange","open"],["summary","",1,"home-support-summary"],["name","heart","size","sm"],[1,"home-support-options"],["href","https://github.com/hugoheynard/fold-ng","target","_blank","rel","noopener noreferrer",1,"home-link"],["name","star","size","sm"],["target","_blank","rel","noopener noreferrer",1,"home-link",3,"href"],["name","x","size","sm"],["href","https://github.com/sponsors/hugoheynard","target","_blank","rel","noopener noreferrer",1,"home-link"],["asideRight","","separators","","raisedBands","",1,"home-author"],[1,"home-author-body"],["primary","Hugo Heynard","secondary","Built Fold solo"],[1,"home-links"],["href","https://github.com/hugoheynard","target","_blank","rel","noopener noreferrer",1,"home-link"],["name","github","size","sm"],["href","https://www.linkedin.com/in/hugoheynard","target","_blank","rel","noopener noreferrer",1,"home-link"],["name","linkedin","size","sm"],["href","mailto:hheynard@gmail.com",1,"home-link"],["name","mail","size","sm"],[1,"home-figure-value"],[1,"home-figure-label"],["cardHeader","",1,"home-feature-head"],[1,"home-feature-icon"],["size","md",3,"name"]],template:function(i,n){i&1&&(e(0,"fold-page-layout",0)(1,"fold-hero-section")(2,"span",1),o(3),t(),e(4,"span",2),o(5),t(),e(6,"div",3),a(7,"fold-icon",4),t(),a(8,"fold-badge",5),e(9,"h1",6),o(10,"Fold"),t(),e(11,"p",7),o(12," A signals-first, zoneless design system for "),e(13,"strong"),o(14,"Angular 22"),t(),o(15,". Every component is "),e(16,"strong"),o(17,"responsive"),t(),o(18," on its own container width and "),e(19,"strong"),o(20,"accessible"),t(),o(21," by default — roles, focus management and live regions baked in — and the whole system re-themes by re-pointing tokens, never by touching a component. "),t(),e(22,"div",8)(23,"a",9),o(24," Browse the library "),t(),e(25,"a",10),o(26," See the themes "),t()()(),e(27,"div",11)(28,"fold-disclosure",12),u("openChange",function(d){return b(n.startNowOpen,d)||(n.startNowOpen=d),d}),e(29,"span",13),a(30,"fold-icon",14),e(31,"span"),o(32,"Start now"),t(),e(33,"span",15),o(34),t()(),e(35,"div",16)(36,"div",17),a(37,"span",18)(38,"span",18)(39,"span",18),e(40,"span",19),o(41,"bash"),t()(),e(42,"pre",20)(43,"code")(44,"span",21)(45,"span",22),o(46,"$"),t(),o(47," npm install fold-ng"),t(),o(48,`
`),e(49,"span",23),o(50,"added 1 package in 1.4s"),t(),o(51,`
`),e(52,"span",21)(53,"span",22),o(54,"$"),t(),o(55," "),e(56,"span",24),o(57,"# then import the tokens once, at your root"),t()(),o(58,`
`),e(59,"span",21)(60,"span",22),o(61,"$"),t(),o(62,` echo '@import "fold-ng/tokens.css";' >> styles.css`),t()()()()()(),e(63,"fold-page-section")(64,"fold-aside-layout",25)(65,"fold-card",26)(66,"strong",27),o(67,"By the numbers"),t(),e(68,"div",28),f(69,U,5,2,"div",29,N),t()(),e(71,"section",30),f(72,j,8,3,"fold-card",31,R),t(),e(74,"fold-callout",32),o(75," Everything on this page — the cards, the buttons, this callout, the rails beside it — is Fold rendering itself. "),e(76,"a",33),o(77," Open a component "),t()(),e(78,"fold-card",34)(79,"strong",27),o(80,"Support Fold"),t(),e(81,"div",35)(82,"p",36),o(83," Fold is "),e(84,"strong"),o(85,"donationware"),t(),o(86," — free to use, built in the open. If it saves you an afternoon, star it, sponsor it, or just say hi. "),t(),e(87,"fold-disclosure",37),u("openChange",function(d){return b(n.supportOpen,d)||(n.supportOpen=d),d}),e(88,"span",38),a(89,"fold-icon",39),e(90,"span"),o(91,"Support"),t()(),e(92,"div",40)(93,"a",41),a(94,"fold-icon",42),e(95,"span"),o(96,"Give it a star"),t()(),e(97,"a",43),a(98,"fold-icon",44),e(99,"span"),o(100,"Share on X"),t()(),e(101,"a",45),a(102,"fold-icon",39),e(103,"span"),o(104,"Make a donation"),t()()()()()(),e(105,"fold-card",46)(106,"strong",27),o(107,"About the author"),t(),e(108,"div",47),a(109,"fold-avatar-detail",48),e(110,"div",49)(111,"a",50),a(112,"fold-icon",51),e(113,"span"),o(114,"GitHub"),t()(),e(115,"a",52),a(116,"fold-icon",53),e(117,"span"),o(118,"LinkedIn"),t()(),e(119,"a",54),a(120,"fold-icon",55),e(121,"span"),o(122,"hheynard@gmail.com"),t()()()()()()()()),i&2&&(r(3),p(n.version),r(2),S("v",n.version),r(2),m("size",52),r(21),g("open",n.startNowOpen),r(6),p(n.startNowOpen()?"hide":"one command"),r(35),y(n.stats),r(3),y(n.features),r(15),g("open",n.supportOpen),r(10),m("href",n.shareUrl,T))},dependencies:[k,A,B,L,_,H,F,z,O,I,C,P],styles:[`@charset "UTF-8";
/* The two rails flank the feature cards; the shell already owns the side gutter,
   so the layout adds only top/bottom. */
.home-layout {
  --fold-aside-layout-rail-width: var(--home-rail);
  --fold-aside-layout-side-width: var(--home-side);
  --fold-aside-layout-gap: var(--home-gap);
  --fold-aside-layout-max: var(--home-max);
  --fold-aside-layout-pad: 0 0 56px;
  --fold-aside-layout-pad-sm: 0 0 40px;
  --fold-aside-layout-top: 16px;
  --fold-aside-layout-stack: 24px;
}

/* Start-now row: the aside-layout's grid, mirrored, so the disclosure lands in
   column 2 — aligned with the feature cards below, rails empty above it. */
.home-startnow-row {
  display: grid;
  grid-template-columns: var(--home-rail) minmax(0, 1fr) var(--home-side);
  gap: var(--home-gap);
  max-width: var(--home-max);
  margin-inline: auto;
  width: 100%;
}

.home-startnow-row .home-startnow {
  grid-column: 2;
}

/* ── left rail: the numbers, one card ─────────────────────────── */
.home-figures-body {
  display: flex;
  flex-direction: column;
}

.home-figure {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  padding: 12px 16px;
}

.home-figure + .home-figure {
  border-top: 1px solid var(--fold-color-border-subtle);
}

.home-figure-value {
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--fold-color-primary-text);
  font-variant-numeric: tabular-nums;
}

.home-figure-label {
  text-align: right;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--fold-color-text-muted);
}

/* ── right rail: support ──────────────────────────────────────── */
.home-support-body,
.home-author-body {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 14px 16px;
}

/* Support menu — a disclosure that reads as a button, opening onto three links. */
.home-support-menu {
  --fold-disclosure-summary-bg: var(--fold-color-primary-surface);
  --fold-disclosure-summary-color: var(--fold-color-primary-text);
  border-color: var(--fold-color-primary-border);
}

.home-support-summary {
  display: flex;
  align-items: center;
  gap: 8px;
}

.home-support-options {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* The email link can be long; let it shrink and ellipsize rather than push the
   rail wider. */
.home-author .home-link {
  min-width: 0;
}

.home-author .home-link span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.home-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.home-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-sunken);
  color: var(--fold-color-text);
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: border-color 0.12s ease, color 0.12s ease;
}

.home-link:hover {
  border-color: var(--fold-color-primary-border);
  color: var(--fold-color-primary-text);
}

.home-link fold-icon {
  color: var(--fold-color-text-muted);
}

.home-link:hover fold-icon {
  color: var(--fold-color-primary-text);
}

/* ── hero: content styling for the fold-hero-section band. The band chrome
   (bleed, wash, hairline, centred column) lives in fold-hero-section; only the
   home-specific pieces — watermark, mark, title, lede, CTAs — stay here. ── */
/* The big version, behind everything: a huge number filled with the brand
   gradient and blurred, so it reads as a soft coloured glow the shape of the
   version — the hero's gradient, made into a thing. */
.home-version-bg {
  position: absolute;
  z-index: 0;
  left: 50%;
  top: 46%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  font-size: clamp(140px, 24vw, 300px);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
  background: linear-gradient(175deg, var(--fold-color-primary), transparent 82%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: blur(5px);
  opacity: 0.28;
  pointer-events: none;
  user-select: none;
}

/* The small version stamp, top-right — the header wordmark's size, in primary. */
.home-version {
  position: absolute;
  top: 16px;
  right: 20px;
  z-index: 2;
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--fold-color-primary-text);
  font-variant-numeric: tabular-nums;
}

.home-mark {
  display: grid;
  place-items: center;
  width: 92px;
  height: 92px;
  border-radius: var(--fold-radius-lg);
  background: var(--fold-color-primary-surface);
  border: 1px solid var(--fold-color-primary-border);
  color: var(--fold-color-primary-text);
}

.home-eyebrow {
  margin-top: 2px;
}

.home-title {
  margin: 0;
  font-size: clamp(44px, 8vw, 72px);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
  color: var(--fold-color-text);
}

.home-lede {
  margin: 0;
  max-width: 56ch;
  font-size: var(--fold-text-lg);
  line-height: 1.6;
  color: var(--fold-color-text-secondary);
}

/* The three pillars — Angular 22 · responsive · accessible — lift out of the
   muted lede in full-strength text. */
.home-lede strong {
  font-weight: 700;
  color: var(--fold-color-text);
}

.home-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-top: 6px;
}

/* ── start now: a primary disclosure above the layout, a terminal inside.
   Spacing between the page's bands is the page-layout body gap now. ── */
.home-startnow {
  --fold-disclosure-summary-bg: var(--fold-color-primary);
  --fold-disclosure-summary-color: var(--fold-color-on-primary);
  border-color: var(--fold-color-primary);
}

.home-startnow-summary {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
}

.home-startnow-hint {
  margin-left: auto;
  font-size: 12px;
  font-weight: 600;
  opacity: 0.85;
}

/* A terminal window: a title bar with traffic-light dots, then the session. */
.home-terminal {
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-md);
  overflow: clip;
  background: var(--fold-color-surface-sunken);
}

.home-terminal-bar {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 9px 12px;
  border-bottom: 1px solid var(--fold-color-border-subtle);
  background: var(--fold-color-surface-subtle);
}

.home-terminal-dot {
  width: 10px;
  height: 10px;
  border-radius: var(--fold-radius-round);
  background: var(--fold-color-border);
}

.home-terminal-title {
  margin-left: 6px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--fold-color-text-muted);
}

.home-terminal-body {
  margin: 0;
  padding: 14px 16px;
  font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  color: var(--fold-color-text);
  overflow-x: auto;
}

.home-terminal-line {
  display: block;
  white-space: pre;
}

.home-terminal-prompt {
  color: var(--fold-color-primary-text);
  user-select: none;
}

.home-terminal-out {
  display: block;
  color: var(--fold-color-text-muted);
}

.home-terminal-comment {
  color: var(--fold-color-text-muted);
}

/* ── features ─────────────────────────────────────────────────── */
.home-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.home-feature-head {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
}

.home-feature-icon {
  display: inline-flex;
  padding: 6px;
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-primary-surface);
  color: var(--fold-color-primary-text);
}

.home-close {
  margin-top: 4px;
}`],encapsulation:2})}export{h as default};
