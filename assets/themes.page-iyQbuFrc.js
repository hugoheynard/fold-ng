import{K as x}from"./kind-badge.component-DHbayY-O.js";import{s as _,ɵ as w,c as k,b as T,d as a,g as u,e,f as t,i as h,T as g,j as o,o as c,k as l,E as C,B as F,w as p,q as d,m as P,l as y,x as m,D as z,W as A,N as S,O as E}from"./index-B4ar3yeD.js";import{FoldPageSectionComponent as $}from"./page-section.component-CLmuDVRz.js";import{FoldCalloutComponent as I}from"./callout.component-BBsXWU5i.js";import{FoldButtonComponent as M}from"./button.component-9UEJbFPq.js";const B=[{title:"Start from the closest base, not from zero",body:'A theme is a diff. Copy the block whose light/dark polarity you already want — :root (umbra) or [data-theme="lumen"] — and change what must differ. Writing 40 roles from scratch guarantees you forget three.',example:"bubbly is the lumen block with two families swapped (cloud→bubble, teal→grape) and two reused (slate for text, azure for info). It invented no role."},{title:"Re-point families, not roles",body:"Roles come in families (chrome, brand, text, one per status). Decide the family, then substitute it everywhere — the role-by-role pass is where inconsistencies enter.",example:"bubbly's brand move, in full: teal→grape across every primary role, not one at a time.",code:`/* the whole brand move, not one role at a time */
--fold-color-primary:        var(--fold-ref-grape-500);
--fold-color-primary-strong: var(--fold-ref-grape-600);
--fold-color-primary-text:   var(--fold-ref-grape-700);
--fold-color-primary-surface: color-mix(in srgb, var(--fold-ref-grape-500) 12%, transparent);`},{title:"Keep the chrome descent short",body:"Header, rail 2, rail 1 should read as one colour at three depths. Push the darkest too far and the hue drains out — the rails go black and only the lightest surface still looks like your brand.",example:"navi first shipped rails at 950/975: they read as charcoal, and the header looked like a different colour rather than the same navy, lighter. 900/850 under an 800 header fixed it."},{title:"Check the brand twice — on the page and on the chrome",body:"A brand colour chosen against the page can be invisible against the rails. If your theme mixes a light page with dark chrome, the chrome needs its own values for the whole brand — the solid included, not just its tints.",example:"navi's active menu icon tints with `primary` directly. The page's navy-500 on a near-black rail was dark on dark; the chrome flips primary/strong/text to 400/300. It targets [data-surface=\"chrome\"] — the contract the shell opts into — not the shell's class names.",code:`[data-theme="navi"] [data-surface="chrome"] {
  --fold-color-primary: var(--fold-ref-navy-400);
  --fold-color-primary-strong: var(--fold-ref-navy-300);
  --fold-color-primary-text: var(--fold-ref-navy-300);
}`},{title:"Move a status family that collides with the brand",body:"Status colours must stay distinguishable from the brand at a glance. If the brand lands on a status family's hue, move the status — never the meaning.",example:"bubbly's violet grape brand would have sat on top of the purple info family, so info moved to cyan (azure). Warning stayed amber, alert stayed red: only the collision moved."},{title:"Re-tune the text ramp for the new ground",body:"Text values are relative to what they sit on. A lighter or more saturated background makes the same greys read dimmer — borrowed ramps land wrong even when the hex is identical.",example:"navi borrowed umbra's ramp; on navy (lighter and bluer than ink) `text-faded` fell near 2:1 on the expanded rail. The whole ramp moved up one step, keeping four distinct levels."},{title:"Change shape only if it means something",body:"Radius is the one scale a theme may re-declare, because corner softness is a brand axis and the only scale that moves no box. Type, space, motion and elevation stay invariant — retheming must never re-flow a page.",example:"navi squares its corners (1–4px) to read institutional. pill and round stay: they are shapes, not steps — flattening them turns avatars into squares.",code:`[data-theme="navi"] {
  --fold-radius-xs: 1px;
  --fold-radius-sm: 2px;
  --fold-radius-md: 3px;
  --fold-radius-lg: 4px;
}`},{title:"Mix flat and elevated on purpose",body:"Elevation is a per-region choice, not a theme-wide switch. Decide which surfaces earn a shadow and which stay flat — answering uniformly either floats everything into soup or flattens the hierarchy away. Borders are the same call: an alpha hairline whispers, a solid line shouts. And the strongest depth cue is free — a light ground under a bright surface lifts it on the shared shadow, no per-theme shadow (which the contract forbids anyway).",example:"titan keeps the header flat at the page tint (a frameless top) but floats both rails (foldElevated) into brushed-steel plates over the light ground. Its borders re-point to a SOLID steel primitive, not the alpha hairline the light themes share, so every panel edge reads as a machined seam.",code:`titan: { elevated: ["railPrimary", "railSecondary"] } /* rails float */
--fold-color-border: var(--fold-ref-steel-300);      /* solid seam, not alpha */`},{title:"Let the contract test finish the job",body:"Three failures are caught for you: a theme missing any catalogue role, a semantic value carrying a literal hex, and a primitive declared but never used. Run the suite before judging the result by eye.",example:"The dead-primitive check is the useful one in practice — it caught navy-975 the moment navi's rails moved up and left it with no consumer.",code:"pnpm --filter fold-ng test"}],R=["A surface you cannot name a role for — you are painting, not theming.","Two chrome surfaces you cannot tell apart side by side: cut one.","A status chip that reads as the brand, or vice versa.","Muted text you have to lean in to read: the ramp is borrowed, not tuned.","A component that looks right only in your theme — it is naming a primitive."],j=(r,i)=>i.name,H=(r,i)=>i.title,L=(r,i)=>i.label;function D(r,i){if(r&1&&(a(0,"fold-callout",29),e(1),t()),r&2){const n=d().$implicit;o(),l(n.note)}}function O(r,i){if(r&1&&(a(0,"span",33),u(1,"span",34),a(2,"code"),e(3),t()()),r&2){const n=i.$implicit;o(),A("background","var(--fold-color-"+n+")"),o(2),l(n)}}function W(r,i){if(r&1&&(a(0,"div",31)(1,"span",18),e(2),t(),a(3,"div",32),h(4,O,4,3,"span",33,g),t()()),r&2){const n=i.$implicit;o(2),l(n.label),o(2),c(n.roles)}}function q(r,i){if(r&1&&(a(0,"div",30),h(1,W,6,1,"div",31,L),t()),r&2){const n=d().$implicit,s=d();z("data-theme",n.attr),o(),c(s.roleGroups)}}function V(r,i){if(r&1){const n=C();a(0,"fold-card",4)(1,"div",21)(2,"div",22)(3,"span",23),e(4),t(),a(5,"code",24),e(6),t()(),a(7,"button",25),F("click",function(){const b=S(n).$implicit,v=d();return E(v.toggle(b.name))}),e(8),t()(),a(9,"div",26)(10,"p",27),e(11),t(),a(12,"p",28)(13,"span",18),e(14,"palette"),t(),a(15,"span"),e(16),t()(),p(17,D,2,1,"fold-callout",29),p(18,q,3,1,"div",30),t()()}if(r&2){const n=i.$implicit,s=d();o(4),l(n.name),o(2),l(n.attr?'[data-theme="'+n.attr+'"]':":root · default"),o(),P("icon",s.open()===n.name?"chevron-up":"chevron-down"),o(),y(" ",s.open()===n.name?"Hide":"Palette"," "),o(3),l(n.summary),o(5),l(n.palette),o(),m(n.note?17:-1),o(),m(s.open()===n.name?18:-1)}}function K(r,i){if(r&1&&(a(0,"pre",19)(1,"code"),e(2),t()()),r&2){const n=d().$implicit;o(2),l(n.code)}}function N(r,i){if(r&1&&(a(0,"li",7)(1,"span",35),e(2),t(),a(3,"div",36)(4,"h3",37),e(5),t(),a(6,"p",38),e(7),t(),a(8,"p",39)(9,"span",18),e(10,"in practice"),t(),e(11),t(),p(12,K,3,1,"pre",19),t()()),r&2){const n=i.$implicit,s=i.$index;o(2),l(s+1),o(3),l(n.title),o(2),l(n.body),o(4),y("",n.example," "),o(),m(n.code?12:-1)}}function U(r,i){if(r&1&&(a(0,"li"),e(1),t()),r&2){const n=i.$implicit;o(),l(n)}}class f{themes=[{attr:null,name:"umbra",summary:"The base. It lives on :root, so an app that sets no attribute renders umbra — deep blue-black chrome, teal brand, the product's default skin.",palette:"ink (chrome) · teal (brand) · slate (text)"},{attr:"lumen",name:"lumen",summary:"The daylight counterpart to umbra: cloud-grey surfaces, the same teal muted so it holds up on white, and the text ramp inverted.",palette:"cloud + white (chrome) · teal (brand) · slate (text)"},{attr:"bubbly",name:"bubbly",summary:"Festive light: soft lavender chrome, a joyful violet brand, corners rounded right up. White cards float on the lavender page. Info moves to cyan so it never blurs into the violet brand.",palette:"bubble (chrome) · grape (brand) · slate (text) · azure (info)"},{attr:"navi",name:"navi",summary:"Dark chrome, light page — the back-office frame. One navy family serves both the brand on the page and the rails behind it, and the corners square off: radius is themeable, because corner softness is a brand axis that moves no box.",palette:"navy (chrome + brand) · ivory (page) · slate (text)",note:'Mixing chrome and page needs text/surface/brand to differ per region, which one set of roles cannot express — so navi re-declares them on [data-surface="chrome"], a contract the shell (and any element) opts into via the foldSurface directive. Variables only, no reaching into a component.'},{attr:"titan",name:"titan",summary:"Brushed titanium — light and warm. A cool brushed-steel ground with the header + rails at the page's own tint (a frameless top), bright polished cards floating off it, and a heat-anodized copper-orange brand. Corners softened, solid steel borders instead of hairlines.",palette:"steel (ground + surfaces + text) · titanium (copper-orange brand)",note:"Uniform-polarity, so no chrome override — one steel ground at a few tints. The elevation is the shared shadow: on the light ground the floating rails and cards genuinely lift, no per-theme shadow needed. The brand is warm on purpose — heat-anodized titanium goes copper, not blue."}];roleGroups=[{label:"surfaces",roles:["bg-page","bg-header","bg-rail-primary","bg-rail-secondary","surface-card","surface-sunken"]},{label:"brand",roles:["primary","primary-strong","primary-text","primary-surface"]},{label:"text",roles:["text","text-secondary","text-muted","text-faded"]},{label:"status",roles:["info","success","warning","alert"]}];steps=B;smells=R;open=_("navi");toggle(i){this.open.update(n=>n===i?"":i)}overrideCode=`/* 1 · One role, everywhere. Any ancestor will do — :root themes the app. */
:root {
  --fold-color-primary: var(--fold-ref-teal-400);
}

/* 2 · A whole theme: re-point the roles, never edit a hex. Every theme block
      must declare the FULL catalogue — the contract test fails on a gap. */
[data-theme="brandx"] {
  --fold-color-bg-page: var(--fold-ref-cloud-100);
  --fold-color-primary: var(--fold-ref-teal-550);
  /* …the other 38 roles… */
}

/* 3 · A subtree. Themes are just custom properties, so any element can carry
      one — a dark hero on a light page, a preview pane in another theme. */
<section data-theme="navi">…</section>

/* 4 · Shape. Radius is the one scale a theme may re-declare. */
[data-theme="brandx"] {
  --fold-radius-md: 3px;
}`;consumeCode=`<!-- The app picks a theme; umbra needs no attribute. -->
<html data-theme="navi">

<!-- Components never name a colour — they read roles, so they follow. -->
<div class="panel">…</div>`;consumeCss=`.panel {
  background: var(--fold-color-surface-card);
  border: 1px solid var(--fold-color-border);
  color: var(--fold-color-text);
}`;static ɵfac=function(n){return new(n||f)};static ɵcmp=w({type:f,selectors:[["gal-themes-page"]],decls:71,vars:3,consts:[["title","themes"],["titleBadge","","kind","foundation"],["description",""],["title","The themes","icon","grid","description","Open one to see the roles it actually resolves to — every swatch below is live, rendered inside that theme rather than listed from a table."],["padding","none","separators","both",1,"th-card"],["title","How to design a theme","icon","edit","description","Eight steps, in order. Every example below is a decision taken — or a bug hit — while building bubbly and navi."],[1,"th-steps"],[1,"th-step"],["separators","both","raisedBands","both",1,"th-smells"],["cardHeader",""],[1,"th-smell-list"],["title","Overriding","icon","code","description","Four scopes, same mechanism — a custom property declared on an ancestor."],[1,"code-pre","th-code"],[1,"th-rules"],["variant","warning"],["variant","neutral"],["title","Consuming","icon","play","description","What an app writes — and what it must never write."],[1,"th-consume"],[1,"gal-tag"],[1,"code-pre"],["variant","alert"],["cardHeader","",1,"th-head"],[1,"th-id"],[1,"th-name"],[1,"th-attr"],["foldButton","","size","sm","emphasis","outline","intent","neutral",3,"click","icon"],[1,"th-body"],[1,"gal-body","th-summary"],[1,"th-palette"],["variant","info"],[1,"th-swatches"],[1,"th-group"],[1,"th-chips"],[1,"th-chip"],[1,"th-swatch"],[1,"th-step-n"],[1,"th-step-body"],[1,"th-step-title"],[1,"gal-body"],[1,"th-step-ex"]],template:function(n,s){n&1&&(a(0,"fold-page-layout",0),u(1,"gal-kind-badge",1),a(2,"p",2),e(3," Five themes, and not one of them touches a component. A theme re-points the "),a(4,"em"),e(5,"semantic roles"),t(),e(6," ("),a(7,"code"),e(8,"--fold-color-*"),t(),e(9,") at different "),a(10,"em"),e(11,"primitives"),t(),e(12," ("),a(13,"code"),e(14,"--fold-ref-*"),t(),e(15,") — the only place a hex is allowed to live. Components name roles, never colours, so they follow wherever a theme goes. "),t(),a(16,"fold-page-section",3),h(17,V,19,8,"fold-card",4,j),t(),a(19,"fold-page-section",5)(20,"ol",6),h(21,N,13,5,"li",7,H),t(),a(23,"fold-card",8)(24,"strong",9),e(25,"Then look at it, and distrust these"),t(),a(26,"ul",10),h(27,U,2,1,"li",null,g),t()()(),a(29,"fold-page-section",11)(30,"pre",12)(31,"code"),e(32),t()(),a(33,"div",13)(34,"fold-callout",14),e(35," A theme block must declare the "),a(36,"strong"),e(37,"whole"),t(),e(38," catalogue. A missing role silently falls back to the base theme's value — a light surface with dark-theme text, one token at a time. The contract test fails on any gap, in every theme. "),t(),a(39,"fold-callout",15),e(40," Re-point, never re-hex. "),a(41,"code"),e(42,"--fold-color-*"),t(),e(43," may only reference a "),a(44,"code"),e(45,"--fold-ref-*"),t(),e(46," primitive (or a "),a(47,"code"),e(48,"color-mix()"),t(),e(49," of one). A literal in the semantic layer is a colour no other theme can follow — also enforced. "),t(),a(50,"fold-callout",15),e(51," Radius is the only scale a theme may re-declare: corner softness is a brand axis, and the one scale that changes without moving a box. Type, space, motion and elevation stay theme-invariant — retheming must never re-flow a page. "),t()()(),a(52,"fold-page-section",16)(53,"div",17)(54,"div")(55,"span",18),e(56,"pick a theme"),t(),a(57,"pre",19)(58,"code"),e(59),t()()(),a(60,"div")(61,"span",18),e(62,"style against roles"),t(),a(63,"pre",19)(64,"code"),e(65),t()()()(),a(66,"fold-callout",20),e(67," Never read a "),a(68,"code"),e(69,"--fold-ref-*"),t(),e(70," primitive from a component: it is theme-invariant by design, so a component that names one keeps umbra's teal in every theme. That is the whole failure the two tiers exist to prevent. "),t()()()),n&2&&(o(17),c(s.themes),o(4),c(s.steps),o(6),c(s.smells),o(5),l(s.overrideCode),o(27),l(s.consumeCode),o(6),l(s.consumeCss))},dependencies:[x,k,$,T,I,M],styles:[`@charset "UTF-8";
/* ── themes page: theme cards + live swatch grids ─────────────── */
.th-card + .th-card {
  margin-top: 16px;
}

.th-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.th-id {
  display: flex;
  align-items: baseline;
  gap: 10px;
  min-width: 0;
}

.th-name {
  font-size: 15px;
  font-weight: 700;
  color: var(--fold-color-text);
}

.th-attr {
  font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  font-size: 11px;
  color: var(--fold-color-text-muted);
}

.th-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
}

.th-summary {
  max-width: 80ch;
}

.th-palette {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin: 0;
  font-size: 12px;
  color: var(--fold-color-text-secondary);
}

/* The swatch grid renders INSIDE the theme it documents (data-theme on the
   wrapper), so it paints itself: page background, card surface, text ramp. */
.th-swatches {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
  padding: 16px;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-bg-page);
  color: var(--fold-color-text);
}

.th-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

.th-chips {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.th-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  font-size: 11px;
  color: var(--fold-color-text-secondary);
}

.th-swatch {
  flex: none;
  width: 22px;
  height: 22px;
  border-radius: var(--fold-radius-sm);
  border: 1px solid var(--fold-color-border);
}

.th-code {
  max-width: none;
}

.th-rules {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 16px;
}

.th-consume {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
}

.th-consume > div {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
}

/* themes page · the authoring guide */
.th-steps {
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: none;
}

.th-step {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.th-step-n {
  flex: none;
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border-radius: var(--fold-radius-pill);
  background: var(--fold-color-primary-surface);
  border: 1px solid var(--fold-color-primary-border);
  color: var(--fold-color-primary-text);
  font-size: 12px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.th-step-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
  max-width: 90ch;
}

.th-step-title {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  color: var(--fold-color-text);
}

/* The example carries the weight of the step, so it gets a rule rather than
   sitting as one more grey paragraph. */
.th-step-ex {
  display: flex;
  gap: 10px;
  margin: 0;
  padding-left: 12px;
  border-left: 2px solid var(--fold-color-border);
  font-size: 12.5px;
  line-height: 1.55;
  color: var(--fold-color-text-secondary);
}

.th-smells {
  margin-top: 26px;
}

.th-smell-list {
  margin: 0;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  font-size: 13px;
  line-height: 1.5;
  color: var(--fold-color-text-secondary);
}`],encapsulation:2})}export{f as default};
