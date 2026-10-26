import{K as A}from"./kind-badge.component-6yEpN4n4.js";import{C as S}from"./composed-of.component-D6mfCRHZ.js";import{s as f,ɵ as I,c as B,bA as O,bB as $,bC as M,d as n,e,f as o,g as q,B as h,h as y,w as T,j as d,m as p,U as z,n as w,k as F,x,i as g,q as r,o as u,E as b,N as m,O as v,r as k}from"./index-D_pnbZx1.js";import{FoldPageSectionComponent as E}from"./page-section.component-DsRPghvV.js";import{FoldButtonComponent as W}from"./button.component-DzasXVyx.js";import{FoldCalloutComponent as U}from"./callout.component-BYtXycEP.js";import{FoldCheckboxComponent as V}from"./checkbox.component-BFqIlav0.js";import{FoldNavSectionComponent as D}from"./nav-section.component-D38aPtZj.js";const R=()=>["icons"],_=(i,l)=>l.id;function j(i,l){if(i&1){const t=b();n(0,"button",31),h("click",function(){const c=m(t).$implicit,s=r(5);return v(s.pick(c.id))}),o()}if(i&2){const t=l.$implicit,a=r(5);p("icon",t.icon)("label",t.label)("hint",t.hint)("tone",t.tone??"neutral")("active",a.active()===t.id)}}function G(i,l){if(i&1&&(n(0,"fold-nav-group",28),g(1,j,1,5,"button",30,_),o()),i&2){const t=r().$implicit;p("icon",t.icon)("label",t.label)("badge",t.badge)("badgeTone",t.badgeTone??"follow"),d(),u(l)}}function K(i,l){if(i&1){const t=b();n(0,"button",32),h("click",function(){m(t);const c=r().$implicit,s=r(3);return v(s.pick(c.id))}),o()}if(i&2){const t=r().$implicit,a=r(3);p("icon",t.icon)("label",t.label)("badge",t.badge)("badgeTone",t.badgeTone??"follow")("active",a.active()===t.id)}}function H(i,l){if(i&1&&T(0,G,3,4,"fold-nav-group",28)(1,K,1,5,"button",29),i&2){let t;const a=l.$implicit;x((t=a.entries)?0:1,t)}}function J(i,l){if(i&1&&(n(0,"fold-nav-section",27),g(1,H,2,1,null,null,_),o()),i&2){const t=l.$implicit;p("label",t.label)("color",t.color)("icon",t.icon),d(),u(t.items)}}function Q(i,l){if(i&1&&g(0,J,3,3,"fold-nav-section",27,_),i&2){const t=r();u(t.categories)}}function X(i,l){if(i&1){const t=b();n(0,"button",31),h("click",function(){const c=m(t).$implicit,s=r(4);return v(s.pick(c.id))}),o()}if(i&2){const t=l.$implicit,a=r(4);p("icon",t.icon)("label",t.label)("hint",t.hint)("tone",t.tone??"neutral")("active",a.active()===t.id)}}function Y(i,l){if(i&1&&(n(0,"fold-nav-group",28),g(1,X,1,5,"button",30,_),o()),i&2){const t=r().$implicit;p("icon",t.icon)("label",t.label)("badge",t.badge)("badgeTone",t.badgeTone??"follow"),d(),u(l)}}function Z(i,l){if(i&1){const t=b();n(0,"button",32),h("click",function(){m(t);const c=r().$implicit,s=r(2);return v(s.pick(c.id))}),o()}if(i&2){const t=r().$implicit,a=r(2);p("icon",t.icon)("label",t.label)("badge",t.badge)("badgeTone",t.badgeTone??"follow")("active",a.active()===t.id)}}function ee(i,l){if(i&1&&T(0,Y,3,4,"fold-nav-group",28)(1,Z,1,5,"button",29),i&2){let t;const a=l.$implicit;x((t=a.entries)?0:1,t)}}function te(i,l){if(i&1&&g(0,ee,2,1,null,null,_),i&2){const t=r();u(t.sections)}}class C{open=f(!1);glass=f(!1);sectioned=f(!1);active=f("cockpit");sections=[{id:"commercial",label:"Sales",icon:"calendar",badge:12,badgeTone:"accent",entries:[{id:"cockpit",label:"Dashboard",icon:"stats",hint:"today"},{id:"accounts",label:"Customer accounts",icon:"company",hint:"412 accounts"},{id:"leads",label:"Leads",icon:"team",hint:"5 to qualify",tone:"warning"},{id:"agenda",label:"Calendar",icon:"calendar",hint:"meetings"},{id:"price-lists",label:"Price-list templates",hint:"9 grids"}]},{id:"production",label:"Production",icon:"wrench",entries:[{id:"recap",label:"Summary",icon:"list",hint:"of the day"},{id:"orders",label:"Purchase orders",icon:"receipt",hint:"18 to raise"}]},{id:"delivery",label:"Delivery",icon:"truck"},{id:"pim",label:"PIM",icon:"library",entries:[{id:"products",label:"Products",icon:"package",hint:"128 sheets"},{id:"categories",label:"Categories",icon:"folder",hint:"14 families"},{id:"vat",label:"VAT rates",icon:"percent",hint:"4 regimes"},{id:"collections",label:"Collections",icon:"grid",hint:"Shopify"},{id:"publishing",label:"Publishing",icon:"upload",hint:"3 waiting",tone:"warning"},{id:"places",label:"Locations",icon:"map-pin",hint:"6 shops"},{id:"integrations",label:"Integrations",icon:"globe",hint:"Shopify · B2B"}]},{id:"admin",label:"Admin",icon:"shield",badge:2,badgeTone:"warning",entries:[{id:"access",label:"Access to grant",icon:"shield",hint:"2 requests",tone:"warning"},{id:"users",label:"Users",icon:"user",hint:"23 accounts"},{id:"journal",label:"Activity log",icon:"timeline",hint:"7 days"}]},{id:"analytics",label:"Analytics",icon:"stats"},{id:"ops",label:"OPS",icon:"lightning"},{id:"settings",label:"Settings",icon:"settings",entries:[{id:"s-sales",label:"Sales",icon:"briefcase",hint:"meetings"},{id:"s-catalog",label:"Catalogue",icon:"package",hint:"rules"},{id:"s-pricing",label:"Pricing",icon:"tag",hint:"3 scales"},{id:"s-alerts",label:"Alerts",icon:"bell",hint:"4 rules"}]}];categories=[this.category("sell","Sell","#06a4a4","briefcase",["commercial","delivery","analytics"]),this.category("make","Make","#d08a2e","package",["production","pim"]),this.category("run","Run","#7c5bbf","settings",["admin","ops","settings"])];category(l,t,a,c,s){const P=s.flatMap(L=>this.sections.filter(N=>N.id===L));return{id:l,label:t,color:a,icon:c,items:P}}pick(l){this.active.set(l),this.open.set(!1)}usageCode=`<!-- The shell renders no built-in drawer; the launcher owns the mobile nav. -->
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

  <!-- Sections file level-1 items under a coloured header — categories, not
       levels: a group inside one still opens its sheet. -->
  <fold-nav-section label="Make" color="#d08a2e" icon="package">
    <fold-nav-group icon="wrench" label="Production">…</fold-nav-group>
  </fold-nav-section>

  <!-- Anything the app owns: the account, sign-out, a support link. -->
  <div footer>…</div>
</fold-nav-launcher>`;static ɵfac=function(t){return new(t||C)};static ɵcmp=I({type:C,selectors:[["gal-nav-launcher-page"]],decls:149,vars:9,consts:[["title","nav-launcher","icon","grid"],["description",""],["titleBadge","","kind","component"],[3,"ids"],["title","Live","icon","play","description","Open it — it takes over the screen, exactly as it would on a phone. Tiles with a chevron open a level; come back with the arrow, the section pastille, Escape, or a swipe to the right."],[1,"nlp-live"],["foldButton","","icon","menu",3,"click"],["label","sections","hint","File the tiles under coloured categories",3,"checkedChange","checked"],["label","glass","hint","Translucent planes — off by default",3,"checkedChange","checked"],[1,"gal-body"],["title","The transition is the wayfinding","icon","lightning","description","There is no breadcrumb, and that is the design — not an omission."],[1,"nlp-steps"],["title","The API","icon","code","description","No level to drive and no mode to switch: a tile that contains tiles is a group."],[1,"code-pre"],["variant","info"],["title","What it owes assistive tech","icon","eye","description","Motion tells a sighted user where they went, and nothing at all to anyone else."],[1,"nlp-a11y"],["title","Sections","icon","grid","description","Categories, not levels — the way a phone's app library files its apps."],["title","The glass option","icon","theme-dark","description","Off by default, and that is a position rather than an oversight."],["variant","warning"],["label","Go to","eyebrow","LFC B2B","heading","Admin",3,"openChange","open","glass"],["footer","",1,"nlp-foot"],["aria-hidden","true",1,"nlp-avatar"],[1,"nlp-who"],[1,"nlp-name"],[1,"nlp-role"],["type","button",1,"nlp-signout"],[3,"label","color","icon"],[3,"icon","label","badge","badgeTone"],["fold-nav-tile","",3,"icon","label","badge","badgeTone","active"],["fold-nav-tile","",3,"icon","label","hint","tone","active"],["fold-nav-tile","",3,"click","icon","label","hint","tone","active"],["fold-nav-tile","",3,"click","icon","label","badge","badgeTone","active"]],template:function(t,a){t&1&&(n(0,"fold-page-layout",0)(1,"p",1),e(2," The full-screen mobile navigation, in "),n(3,"strong"),e(4,"two levels"),o(),e(5,". A grid of large tiles; a tile that "),n(6,"em"),e(7,"contains"),o(),e(8," tiles opens a second level instead of going somewhere. It owns the whole overlay contract: scrim, "),n(9,"code"),e(10,"Escape"),o(),e(11," / close-button dismissal, focus-trap, body scroll-lock — and the descent itself. "),o(),q(12,"gal-kind-badge",2)(13,"gal-composed-of",3),n(14,"fold-page-section",4)(15,"div",5)(16,"button",6),h("click",function(){return a.open.set(!0)}),e(17," Open the launcher "),o(),n(18,"fold-checkbox",7),y("checkedChange",function(s){return k(a.sectioned,s)||(a.sectioned=s),s}),o(),n(19,"fold-checkbox",8),y("checkedChange",function(s){return k(a.glass,s)||(a.glass=s),s}),o(),n(20,"span",9),e(21," Current destination: "),n(22,"strong"),e(23),o()()()(),n(24,"fold-page-section",10)(25,"ol",11)(26,"li")(27,"strong"),e(28,"The tile you touch becomes the anchor."),o(),e(29," It does not disappear: it climbs into the level-2 header at pastille size. It is the only element that survives the transition, so it is the only landmark the eye needs. "),o(),n(30,"li")(31,"strong"),e(32,"Its sisters leave in a wave that starts under your finger"),o(),e(33," — 26 ms per step of "),n(34,"em"),e(35,"distance"),o(),e(36,", not per position in the list. They rise as they blur, upward, where the finger is not going. "),o(),n(37,"li")(38,"strong"),e(39,"Level 2 arrives as a list from below"),o(),e(40,", on the tone of the "),n(41,"em"),e(42,"secondary rail"),o(),e(43,`, one seam away from the primary. That is the desktop's own relation: descending into a section is moving from rail 1 to rail 2, not from furniture to content. A list and not a grid — "Price-list templates" does not fit in a square, and a list is read with the thumb. `),o(),n(44,"li")(45,"strong"),e(46,"A row with no icon falls back to a status dot"),o(),e(47,", in the same gutter. A silent row must not shift its neighbour. "),o(),n(48,"li")(49,"strong"),e(50,"The way back is the exact inverse"),o(),e(51,", not another animation. Same curve, same cascade, opposite direction — which is what makes the depth understood without thinking about it. "),o()()(),n(52,"fold-page-section",12)(53,"pre",13)(54,"code"),e(55),o()(),n(56,"fold-callout",14),e(57," The launcher finds the depth by "),n(58,"strong"),e(59,"content query"),o(),e(60,", exactly as "),n(61,"code"),e(62,"fold-multiselect"),o(),e(63," finds its "),n(64,"code"),e(65,"fold-optgroup"),o(),e(66,". Two levels and no more — at a third this stops being a launcher and becomes a tree. The entry count in the header is "),n(67,"strong"),e(68,"derived"),o(),e(69,", never passed: a count declared beside the list it counts starts lying the first time someone adds a tile without touching it. "),o()(),n(70,"fold-page-section",15)(71,"ul",16)(72,"li")(73,"strong"),e(74,"Focus follows the level"),o(),e(75,` — down to the sheet's first entry, back to the tile it came from. It moves only once the new level is actually painted; taken a frame early it failed silently and the trap fell back to the close button, so the caret landed on "dismiss" every time. `),o(),n(76,"li")(77,"strong")(78,"code"),e(79,"Escape"),o(),e(80," is contextual"),o(),e(81," — at level 2 it climbs, at level 1 it closes. Two gestures, one key, in that order. "),o(),n(82,"li")(83,"strong"),e(84,"The level is announced"),o(),e(85,' — a polite live region says "PIM, 7 entries". '),o(),n(86,"li")(87,"strong"),e(88,"The swipe is a bonus, not the path."),o(),e(89," It doubles the back button; it never replaces it. "),o()()(),n(90,"fold-page-section",17)(91,"p",9)(92,"code"),e(93,"fold-nav-section"),o(),e(94," files level-1 tiles under a header — a pastille of the section "),n(95,"code"),e(96,"color"),o(),e(97," with its "),n(98,"code"),e(99,"icon"),o(),e(100,", then the label — and tints its tiles with that colour. It says what "),n(101,"code"),e(102,"fold-menu-section"),o(),e(103," says on the desktop rail, with the same "),n(104,"code"),e(105,"label"),o(),e(106," / "),n(107,"code"),e(108,"color"),o(),e(109," / "),n(110,"code"),e(111,"icon"),o(),e(112,". A section is not a level: its tiles keep the wave, the focus order and the density count, and a group inside it still opens its sheet. Each section is a "),n(113,"code"),e(114,'role="group"'),o(),e(115," named by its header. Tick "),n(116,"strong"),e(117,"sections"),o(),e(118," above and open the launcher. "),o()(),n(119,"fold-page-section",18)(120,"p",9),e(121," The launcher stays "),n(122,"strong"),e(123,"dark"),o(),e(124,": glass does not brighten the surfaces, it brightens the "),n(125,"em"),e(126,"light that crosses them"),o(),e(127,". The ground drops a step, a veil of three haloes appears behind, and every plane trades opacity for translucency. Without the veil the blur has nothing to blur and you get darker panels, nothing more. "),o(),n(128,"fold-callout",19),e(129," Two things to know before switching it on in production: text contrast drops about a step on a 50 % plane, so "),n(130,"code"),e(131,"text-faded"),o(),e(132," stops being usable as a UI role; and "),n(133,"code"),e(134,"backdrop-filter"),o(),e(135," costs a compositing layer per plane — eight blurred tiles plus a sheet is noticeable when scrolling on a low-end phone. "),o()()(),n(136,"fold-nav-launcher",20),y("openChange",function(s){return k(a.open,s)||(a.open=s),s}),T(137,Q,2,0)(138,te,2,0),n(139,"div",21)(140,"span",22),e(141,"CR"),o(),n(142,"span",23)(143,"span",24),e(144,"Camille Roux"),o(),n(145,"span",25),e(146,"Administrator · LFC"),o()(),n(147,"button",26),e(148,"Sign out"),o()()()),t&2&&(d(13),p("ids",z(8,R)),d(5),w("checked",a.sectioned),d(),w("checked",a.glass),d(4),F(a.active()),d(32),F(a.usageCode),d(81),w("open",a.open),p("glass",a.glass()),d(),x(a.sectioned()?137:138))},dependencies:[A,S,B,E,W,U,V,O,$,D,M],styles:[`@charset "UTF-8";
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
}`],encapsulation:2})}export{C as default};
