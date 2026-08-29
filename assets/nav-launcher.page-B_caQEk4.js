import{K as x}from"./kind-badge.component-D1e_HydR.js";import{C as P}from"./composed-of.component-Dvy8FwzV.js";import{s as h,ɵ as F,c as L,bA as N,bB as A,bC as I,d as o,e,f as t,g as B,B as u,h as f,i as _,j as r,m as p,U as S,n as b,k as m,o as w,w as O,x as q,q as c,E as y,N as k,O as T,r as v}from"./index-CqQ00H1C.js";import{FoldPageSectionComponent as z}from"./page-section.component-CEIt49pf.js";import{FoldButtonComponent as E}from"./button.component-D1LVoOkt.js";import{FoldCalloutComponent as W}from"./callout.component-IW_cjqW7.js";import{FoldCheckboxComponent as M}from"./checkbox.component-B9Uq9NN5.js";const U=()=>["icons"],C=(a,l)=>l.id;function V(a,l){if(a&1){const n=y();o(0,"button",28),u("click",function(){const d=k(n).$implicit,s=c(3);return T(s.pick(d.id))}),t()}if(a&2){const n=l.$implicit,i=c(3);p("icon",n.icon)("label",n.label)("hint",n.hint)("tone",n.tone??"neutral")("active",i.active()===n.id)}}function D(a,l){if(a&1&&(o(0,"fold-nav-group",25),_(1,V,1,5,"button",27,C),t()),a&2){const n=c().$implicit;p("icon",n.icon)("label",n.label)("badge",n.badge)("badgeTone",n.badgeTone??"follow"),r(),w(l)}}function $(a,l){if(a&1){const n=y();o(0,"button",29),u("click",function(){k(n);const d=c().$implicit,s=c();return T(s.pick(d.id))}),t()}if(a&2){const n=c().$implicit,i=c();p("icon",n.icon)("label",n.label)("badge",n.badge)("badgeTone",n.badgeTone??"follow")("active",i.active()===n.id)}}function j(a,l){if(a&1&&O(0,D,3,4,"fold-nav-group",25)(1,$,1,5,"button",26),a&2){let n;const i=l.$implicit;q((n=i.entries)?0:1,n)}}class g{open=h(!1);glass=h(!1);active=h("cockpit");sections=[{id:"commercial",label:"Sales",icon:"calendar",badge:12,badgeTone:"accent",entries:[{id:"cockpit",label:"Dashboard",icon:"stats",hint:"today"},{id:"accounts",label:"Customer accounts",icon:"company",hint:"412 accounts"},{id:"leads",label:"Leads",icon:"team",hint:"5 to qualify",tone:"warning"},{id:"agenda",label:"Calendar",icon:"calendar",hint:"meetings"},{id:"price-lists",label:"Price-list templates",hint:"9 grids"}]},{id:"production",label:"Production",icon:"wrench",entries:[{id:"recap",label:"Summary",icon:"list",hint:"of the day"},{id:"orders",label:"Purchase orders",icon:"receipt",hint:"18 to raise"}]},{id:"delivery",label:"Delivery",icon:"truck"},{id:"pim",label:"PIM",icon:"library",entries:[{id:"products",label:"Products",icon:"package",hint:"128 sheets"},{id:"categories",label:"Categories",icon:"folder",hint:"14 families"},{id:"vat",label:"VAT rates",icon:"percent",hint:"4 regimes"},{id:"collections",label:"Collections",icon:"grid",hint:"Shopify"},{id:"publishing",label:"Publishing",icon:"upload",hint:"3 waiting",tone:"warning"},{id:"places",label:"Locations",icon:"map-pin",hint:"6 shops"},{id:"integrations",label:"Integrations",icon:"globe",hint:"Shopify · B2B"}]},{id:"admin",label:"Admin",icon:"shield",badge:2,badgeTone:"warning",entries:[{id:"access",label:"Access to grant",icon:"shield",hint:"2 requests",tone:"warning"},{id:"users",label:"Users",icon:"user",hint:"23 accounts"},{id:"journal",label:"Activity log",icon:"timeline",hint:"7 days"}]},{id:"analytics",label:"Analytics",icon:"stats"},{id:"ops",label:"OPS",icon:"lightning"},{id:"settings",label:"Settings",icon:"settings",entries:[{id:"s-sales",label:"Sales",icon:"briefcase",hint:"meetings"},{id:"s-catalog",label:"Catalogue",icon:"package",hint:"rules"},{id:"s-pricing",label:"Pricing",icon:"tag",hint:"3 scales"},{id:"s-alerts",label:"Alerts",icon:"bell",hint:"4 rules"}]}];pick(l){this.active.set(l),this.open.set(!1)}usageCode=`<!-- The shell renders no built-in drawer; the launcher owns the mobile nav. -->
<fold-app-shell mobileNav="none" [(mobileNavOpen)]="navOpen">…</fold-app-shell>

<fold-nav-launcher [(open)]="navOpen" eyebrow="LFC B2B" heading="Admin">
  <!-- A tile that goes somewhere. -->
  <a fold-nav-tile icon="truck" label="Delivery" routerLink="/delivery"></a>

  <!-- A tile that CONTAINS tiles is a group: it opens a second level. No
       \`level\` to drive, no mode to switch — the launcher finds the depth by
       content query, exactly as fold-multiselect finds its fold-optgroup. -->
  <fold-nav-group icon="library" label="PIM">
    <a fold-nav-tile icon="package" label="Products" hint="128 sheets"
       routerLink="/pim/products"></a>
    <a fold-nav-tile icon="upload" label="Publishing" hint="3 waiting"
       tone="warning" routerLink="/pim/publishing"></a>
  </fold-nav-group>

  <!-- Anything the app owns: the account, sign-out, a support link. -->
  <div footer>…</div>
</fold-nav-launcher>`;static ɵfac=function(n){return new(n||g)};static ɵcmp=F({type:g,selectors:[["gal-nav-launcher-page"]],decls:119,vars:7,consts:[["title","nav-launcher","icon","grid"],["description",""],["titleBadge","","kind","component"],[3,"ids"],["title","Live","icon","play","description","Open it — it takes over the screen, exactly as it would on a phone. Tiles with a chevron open a level; come back with the arrow, the section pastille, Escape, or a swipe to the right."],[1,"nlp-live"],["foldButton","","icon","menu",3,"click"],["label","glass","hint","Translucent planes — off by default",3,"checkedChange","checked"],[1,"gal-body"],["title","The transition is the wayfinding","icon","lightning","description","There is no breadcrumb, and that is the design — not an omission."],[1,"nlp-steps"],["title","The API","icon","code","description","No level to drive and no mode to switch: a tile that contains tiles is a group."],[1,"code-pre"],["variant","info"],["title","What it owes assistive tech","icon","eye","description","Motion tells a sighted user where they went, and nothing at all to anyone else."],[1,"nlp-a11y"],["title","The glass option","icon","theme-dark","description","Off by default, and that is a position rather than an oversight."],["variant","warning"],["label","Go to","eyebrow","LFC B2B","heading","Admin",3,"openChange","open","glass"],["footer","",1,"nlp-foot"],["aria-hidden","true",1,"nlp-avatar"],[1,"nlp-who"],[1,"nlp-name"],[1,"nlp-role"],["type","button",1,"nlp-signout"],[3,"icon","label","badge","badgeTone"],["fold-nav-tile","",3,"icon","label","badge","badgeTone","active"],["fold-nav-tile","",3,"icon","label","hint","tone","active"],["fold-nav-tile","",3,"click","icon","label","hint","tone","active"],["fold-nav-tile","",3,"click","icon","label","badge","badgeTone","active"]],template:function(n,i){n&1&&(o(0,"fold-page-layout",0)(1,"p",1),e(2," The full-screen mobile navigation, in "),o(3,"strong"),e(4,"two levels"),t(),e(5,". A grid of large tiles; a tile that "),o(6,"em"),e(7,"contains"),t(),e(8," tiles opens a second level instead of going somewhere. It owns the whole overlay contract: scrim, "),o(9,"code"),e(10,"Escape"),t(),e(11," / close-button dismissal, focus-trap, body scroll-lock — and the descent itself. "),t(),B(12,"gal-kind-badge",2)(13,"gal-composed-of",3),o(14,"fold-page-section",4)(15,"div",5)(16,"button",6),u("click",function(){return i.open.set(!0)}),e(17," Open the launcher "),t(),o(18,"fold-checkbox",7),f("checkedChange",function(s){return v(i.glass,s)||(i.glass=s),s}),t(),o(19,"span",8),e(20," Current destination: "),o(21,"strong"),e(22),t()()()(),o(23,"fold-page-section",9)(24,"ol",10)(25,"li")(26,"strong"),e(27,"The tile you touch becomes the anchor."),t(),e(28," It does not disappear: it climbs into the level-2 header at pastille size. It is the only element that survives the transition, so it is the only landmark the eye needs. "),t(),o(29,"li")(30,"strong"),e(31,"Its sisters leave in a wave that starts under your finger"),t(),e(32," — 26 ms per step of "),o(33,"em"),e(34,"distance"),t(),e(35,", not per position in the list. They rise as they blur, upward, where the finger is not going. "),t(),o(36,"li")(37,"strong"),e(38,"Level 2 arrives as a list from below"),t(),e(39,", on the tone of the "),o(40,"em"),e(41,"secondary rail"),t(),e(42,`, one seam away from the primary. That is the desktop's own relation: descending into a section is moving from rail 1 to rail 2, not from furniture to content. A list and not a grid — "Price-list templates" does not fit in a square, and a list is read with the thumb. `),t(),o(43,"li")(44,"strong"),e(45,"A row with no icon falls back to a status dot"),t(),e(46,", in the same gutter. A silent row must not shift its neighbour. "),t(),o(47,"li")(48,"strong"),e(49,"The way back is the exact inverse"),t(),e(50,", not another animation. Same curve, same cascade, opposite direction — which is what makes the depth understood without thinking about it. "),t()()(),o(51,"fold-page-section",11)(52,"pre",12)(53,"code"),e(54),t()(),o(55,"fold-callout",13),e(56," The launcher finds the depth by "),o(57,"strong"),e(58,"content query"),t(),e(59,", exactly as "),o(60,"code"),e(61,"fold-multiselect"),t(),e(62," finds its "),o(63,"code"),e(64,"fold-optgroup"),t(),e(65,". Two levels and no more — at a third this stops being a launcher and becomes a tree. The entry count in the header is "),o(66,"strong"),e(67,"derived"),t(),e(68,", never passed: a count declared beside the list it counts starts lying the first time someone adds a tile without touching it. "),t()(),o(69,"fold-page-section",14)(70,"ul",15)(71,"li")(72,"strong"),e(73,"Focus follows the level"),t(),e(74,` — down to the sheet's first entry, back to the tile it came from. It moves only once the new level is actually painted; taken a frame early it failed silently and the trap fell back to the close button, so the caret landed on "dismiss" every time. `),t(),o(75,"li")(76,"strong")(77,"code"),e(78,"Escape"),t(),e(79," is contextual"),t(),e(80," — at level 2 it climbs, at level 1 it closes. Two gestures, one key, in that order. "),t(),o(81,"li")(82,"strong"),e(83,"The level is announced"),t(),e(84,' — a polite live region says "PIM, 7 entries". '),t(),o(85,"li")(86,"strong"),e(87,"The swipe is a bonus, not the path."),t(),e(88," It doubles the back button; it never replaces it. "),t()()(),o(89,"fold-page-section",16)(90,"p",8),e(91," The launcher stays "),o(92,"strong"),e(93,"dark"),t(),e(94,": glass does not brighten the surfaces, it brightens the "),o(95,"em"),e(96,"light that crosses them"),t(),e(97,". The ground drops a step, a veil of three haloes appears behind, and every plane trades opacity for translucency. Without the veil the blur has nothing to blur and you get darker panels, nothing more. "),t(),o(98,"fold-callout",17),e(99," Two things to know before switching it on in production: text contrast drops about a step on a 50 % plane, so "),o(100,"code"),e(101,"text-faded"),t(),e(102," stops being usable as a UI role; and "),o(103,"code"),e(104,"backdrop-filter"),t(),e(105," costs a compositing layer per plane — eight blurred tiles plus a sheet is noticeable when scrolling on a low-end phone. "),t()()(),o(106,"fold-nav-launcher",18),f("openChange",function(s){return v(i.open,s)||(i.open=s),s}),_(107,j,2,1,null,null,C),o(109,"div",19)(110,"span",20),e(111,"CR"),t(),o(112,"span",21)(113,"span",22),e(114,"Camille Roux"),t(),o(115,"span",23),e(116,"Administrator · LFC"),t()(),o(117,"button",24),e(118,"Sign out"),t()()()),n&2&&(r(13),p("ids",S(6,U)),r(5),b("checked",i.glass),r(4),m(i.active()),r(32),m(i.usageCode),r(52),b("open",i.open),p("glass",i.glass()),r(),w(i.sections))},dependencies:[x,P,L,z,E,W,M,N,A,I],styles:[`@charset "UTF-8";
/* nav-launcher page — the live "open it" row. */
.nlp-live {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.nlp-steps,
.nlp-a11y {
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--fold-color-text-secondary);
  font-size: var(--fold-text-base);
  line-height: var(--fold-leading-relaxed);
}

.nlp-steps strong,
.nlp-a11y strong {
  color: var(--fold-color-text);
}

/* The launcher's footer slot — app-owned content, styled by the app. */
.nlp-foot {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nlp-avatar {
  flex: none;
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: var(--fold-radius-pill);
  background: var(--fold-color-primary);
  color: var(--fold-color-on-primary);
  font-size: var(--fold-text-2xs);
  font-weight: var(--fold-weight-bold);
}

.nlp-who {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.nlp-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: var(--fold-text-sm);
  font-weight: var(--fold-weight-semibold);
  color: var(--fold-color-text);
}

.nlp-role {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: var(--fold-text-2xs);
  color: var(--fold-color-text-muted);
}

.nlp-signout {
  flex: none;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  white-space: nowrap;
  font-size: var(--fold-text-sm);
  font-weight: var(--fold-weight-semibold);
  color: var(--fold-color-alert-text);
}`],encapsulation:2})}export{g as default};
