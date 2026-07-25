import{p as x,s as f,ɵ as w,R as k,F as _,a as F,b as C,c as z,d as e,e as o,f as t,g as a,h as u,i as g,j as n,k as p,l as S,m,n as b,o as y,q as T,r as v,t as A}from"./index-CheKRm5v.js";import{F as B}from"./aside-layout.component-CFFAAf8U.js";import{F as H}from"./avatar-detail.component-zX4Dmv_v.js";import{F as L}from"./disclosure.component-DFHyma_2.js";import{F as O}from"./element-title.component-DxaCe8rP.js";import{F as I}from"./button.component-lldnsmRG.js";import{F as P}from"./callout.component-DxZruyg-.js";import{F as N}from"./hero-section.component-Bt83Y2_D.js";import{F as R}from"./page-section.component-BEVmrNeh.js";import"./avatar.component-DzAcY9ZB.js";import"./spinner.component-DPVRVwus.js";import"./tokens.catalog-DF_6rd51.js";const U=(s,l)=>l.label,j=(s,l)=>l.title;function $(s,l){if(s&1&&(e(0,"div",28)(1,"span",57),o(2),t(),e(3,"span",58),o(4),t()()),s&2){const i=l.$implicit;n(2),p(i.value),n(2),p(i.label)}}function E(s,l){if(s&1&&(e(0,"fold-card",30),a(1,"fold-element-title",59),e(2,"p",36),o(3),t()()),s&2){const i=l.$implicit,r=l.$index,h=T();m("surface",h.accentCards.has(r)?"accent":"card"),n(),m("icon",i.icon)("title",i.title),n(2),p(i.body)}}class c{version=x.version;accentCards=new Set([0,3,4]);startNowOpen=f(!1);supportOpen=f(!1);shareUrl="https://x.com/intent/post?text="+encodeURIComponent("Fold — a signals-first Angular design system, themeable to the bone.")+"&url="+encodeURIComponent("https://github.com/hugoheynard/fold-ng");stats=[{value:"26",label:"components"},{value:"4",label:"themes"},{value:"400",label:"tests"},{value:"0",label:"runtime theming cost"}];features=[{icon:"grid",title:"Themeable to the bone",body:"Four themes, and not one touches a component. A theme re-points semantic roles at different primitives — the swatch, not the widget. Add a fifth in one CSS block."},{icon:"lightning",title:"Signals-first, zoneless",body:"Angular 22, standalone, no zone.js. Inputs and state are signals; forms are Signal Forms. Nothing subscribes, nothing leaks."},{icon:"completed",title:"Accessible by default",body:"Roles resolve from intent, focus is trapped where it should be, and a callout only interrupts a screen reader when it actually appears. Not an afterthought."},{icon:"org-chart",title:"Layouts that fold",body:"app-shell, nav-layout, aside-layout, sticky-column — the structural pieces every app hand-rolls, responsive on their own width, yours in one binding."},{icon:"shield",title:"Tested to a contract",body:"400 specs, and a token contract that fails the build if a theme drops a role, a colour goes literal, or a primitive dies. The design system cannot rot quietly."},{icon:"diamond",title:"Self-contained",body:"Icons inline as currentColor SVG, styles ship with the component, tokens are plain CSS variables. Drop it into any Angular app — no loader config, no asset pipeline."}];static ɵfac=function(i){return new(i||c)};static ɵcmp=w({type:c,selectors:[["gal-home-page"]],decls:119,vars:7,consts:[[1,"home"],["heroBackdrop","",1,"home-version-bg"],["heroBackdrop","",1,"home-version"],[1,"home-mark"],["name","fold","title","Fold",3,"size"],["content","Angular 22 · responsive · accessible","variant","accent","radius","pill",1,"home-eyebrow"],[1,"home-title"],[1,"home-lede"],[1,"home-cta"],["foldButton","","routerLink","/app-shell","size","lg"],["foldButton","","routerLink","/themes","emphasis","outline","intent","neutral","size","lg"],[1,"home-startnow",3,"openChange","open"],["summary","",1,"home-startnow-summary"],["name","lightning","size","sm"],[1,"home-startnow-hint"],[1,"home-terminal"],[1,"home-terminal-bar"],[1,"home-terminal-dot"],[1,"home-terminal-title"],[1,"home-terminal-body"],[1,"home-terminal-line"],[1,"home-terminal-prompt"],[1,"home-terminal-out"],[1,"home-terminal-comment"],["asideLeftLabel","Fold in numbers",1,"home-layout"],["asideLeft","","separators","both","raisedBands","both",1,"home-figures"],["cardHeader","","variant","title","icon","stats","title","By the numbers"],[1,"home-figures-body"],[1,"home-figure"],[1,"home-features"],["separators","both","raisedBands","both",1,"home-feature",3,"surface"],["variant","accent",1,"home-close"],["foldButton","","actions","","routerLink","/card","size","sm","emphasis","outline","intent","neutral"],["asideRight","","separators","both","raisedBands","both",1,"home-support"],["cardHeader","","variant","title","icon","heart","title","Support Fold"],[1,"home-support-body"],[1,"gal-body"],[1,"home-support-menu",3,"openChange","open"],["summary","",1,"home-support-summary"],["name","heart","size","sm"],[1,"home-support-options"],["href","https://github.com/hugoheynard/fold-ng","target","_blank","rel","noopener noreferrer",1,"home-link"],["name","star","size","sm"],["target","_blank","rel","noopener noreferrer",1,"home-link",3,"href"],["name","x","size","sm"],["href","https://github.com/sponsors/hugoheynard","target","_blank","rel","noopener noreferrer",1,"home-link"],["asideRight","","separators","both","raisedBands","both",1,"home-author"],["cardHeader","","variant","title","icon","user","title","About the author"],[1,"home-author-body"],["primary","Hugo Heynard","secondary","Built Fold solo"],[1,"home-links"],["href","https://github.com/hugoheynard","target","_blank","rel","noopener noreferrer",1,"home-link"],["name","github","size","sm"],["href","https://www.linkedin.com/in/hugoheynard","target","_blank","rel","noopener noreferrer",1,"home-link"],["name","linkedin","size","sm"],["href","mailto:hheynard@gmail.com",1,"home-link"],["name","mail","size","sm"],[1,"home-figure-value"],[1,"home-figure-label"],["cardHeader","","variant","title","iconTone","primary",3,"icon","title"]],template:function(i,r){i&1&&(e(0,"fold-page-layout",0)(1,"fold-hero-section")(2,"span",1),o(3),t(),e(4,"span",2),o(5),t(),e(6,"div",3),a(7,"fold-icon",4),t(),a(8,"fold-badge",5),e(9,"h1",6),o(10,"Fold"),t(),e(11,"p",7),o(12," A signals-first, zoneless design system for "),e(13,"strong"),o(14,"Angular 22"),t(),o(15,". Every component is "),e(16,"strong"),o(17,"responsive"),t(),o(18," on its own container width and "),e(19,"strong"),o(20,"accessible"),t(),o(21," by default — roles, focus management and live regions baked in — and the whole system re-themes by re-pointing tokens, never by touching a component. "),t(),e(22,"div",8)(23,"a",9),o(24," Browse the library "),t(),e(25,"a",10),o(26," See the themes "),t()(),e(27,"fold-disclosure",11),u("openChange",function(d){return v(r.startNowOpen,d)||(r.startNowOpen=d),d}),e(28,"span",12),a(29,"fold-icon",13),e(30,"span"),o(31,"Start now"),t(),e(32,"span",14),o(33),t()(),e(34,"div",15)(35,"div",16),a(36,"span",17)(37,"span",17)(38,"span",17),e(39,"span",18),o(40,"bash"),t()(),e(41,"pre",19)(42,"code")(43,"span",20)(44,"span",21),o(45,"$"),t(),o(46," npm install fold-ng"),t(),o(47,`
`),e(48,"span",22),o(49,"added 1 package in 1.4s"),t(),o(50,`
`),e(51,"span",20)(52,"span",21),o(53,"$"),t(),o(54," "),e(55,"span",23),o(56,"# then import the tokens once, at your root"),t()(),o(57,`
`),e(58,"span",20)(59,"span",21),o(60,"$"),t(),o(61,` echo '@import "fold-ng/tokens.css";' >> styles.css`),t()()()()()(),e(62,"fold-page-section")(63,"fold-aside-layout",24)(64,"fold-card",25),a(65,"fold-element-title",26),e(66,"div",27),g(67,$,5,2,"div",28,U),t()(),e(69,"section",29),g(70,E,4,4,"fold-card",30,j),t(),e(72,"fold-callout",31),o(73," Everything on this page — the cards, the buttons, this callout, the rails beside it — is Fold rendering itself. "),e(74,"a",32),o(75," Open a component "),t()(),e(76,"fold-card",33),a(77,"fold-element-title",34),e(78,"div",35)(79,"p",36),o(80," Fold is "),e(81,"strong"),o(82,"donationware"),t(),o(83," — free to use, built in the open. If it saves you an afternoon, star it, sponsor it, or just say hi. "),t(),e(84,"fold-disclosure",37),u("openChange",function(d){return v(r.supportOpen,d)||(r.supportOpen=d),d}),e(85,"span",38),a(86,"fold-icon",39),e(87,"span"),o(88,"Support"),t()(),e(89,"div",40)(90,"a",41),a(91,"fold-icon",42),e(92,"span"),o(93,"Give it a star"),t()(),e(94,"a",43),a(95,"fold-icon",44),e(96,"span"),o(97,"Share on X"),t()(),e(98,"a",45),a(99,"fold-icon",39),e(100,"span"),o(101,"Make a donation"),t()()()()()(),e(102,"fold-card",46),a(103,"fold-element-title",47),e(104,"div",48),a(105,"fold-avatar-detail",49),e(106,"div",50)(107,"a",51),a(108,"fold-icon",52),e(109,"span"),o(110,"GitHub"),t()(),e(111,"a",53),a(112,"fold-icon",54),e(113,"span"),o(114,"LinkedIn"),t()(),e(115,"a",55),a(116,"fold-icon",56),e(117,"span"),o(118,"hheynard@gmail.com"),t()()()()()()()()),i&2&&(n(3),p(r.version),n(2),S("v",r.version),n(2),m("size",52),n(20),b("open",r.startNowOpen),n(6),p(r.startNowOpen()?"hide":"one command"),n(34),y(r.stats),n(3),y(r.features),n(14),b("open",r.supportOpen),n(10),m("href",r.shareUrl,A))},dependencies:[k,B,H,L,O,_,I,F,C,P,N,z,R],styles:[`@charset "UTF-8";
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
  /* sits in the hero, below the CTAs: a small gap + a readable, centred width */
  margin-top: 20px;
  width: 100%;
  max-width: 440px;
  text-align: left;
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

.home-close {
  margin-top: 4px;
}`],encapsulation:2})}export{c as default};
