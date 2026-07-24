import{s as c,B as h,J as T,K as S,ɵ as W,c as A,b as P,E as w,d as e,g as E,e as a,f as t,G as p,h as b,L as v,j as s,m,x as r,n as x,M as g,D as C,N as O,O as R,z as f,H as q,q as k,I as L}from"./index-DF_F-rLD.js";import{D as z}from"./playground.component--8ZrANRf.js";import{K as M}from"./kind-badge.component-ChkWmHPi.js";import{F}from"./aside-layout.component-CjQeh8HC.js";import{F as D}from"./slider.component-70A6TTxV.js";import"./button.component-_xZ69hru.js";import"./spinner.component-Dz9DDG0U.js";import"./tokens.catalog-DF_6rd51.js";import"./element-title.component-D4TZ9rJk.js";import"./page-section.component-DSGTnTQG.js";import"./input-value-Co_u-z_8.js";const j=["aslWindow"];function B(u,l){if(u&1){const o=w();e(0,"fold-slider",24),b("valueChange",function(d){q(o);const n=f();return k(n.aslRailWidth,d)||(n.aslRailWidth=d),L(d)}),t()}if(u&2){const o=f();m("min",0)("max",360)("step",10)("valueText",o.aslRailWidth()+"px"),x("value",o.aslRailWidth)}}function Q(u,l){if(u&1){const o=w();e(0,"fold-slider",25),b("valueChange",function(d){q(o);const n=f();return k(n.aslSideWidth,d)||(n.aslSideWidth=d),L(d)}),t()}if(u&2){const o=f();m("min",0)("max",400)("step",10)("valueText",o.aslSideWidth()+"px"),x("value",o.aslSideWidth)}}function U(u,l){u&1&&(e(0,"fold-card",16)(1,"span",8),a(2,"On this page"),t(),e(3,"nav",26)(4,"a",27),a(5,"Overview"),t(),e(6,"a"),a(7,"Terms"),t(),e(8,"a"),a(9,"Signatures"),t()()())}class y{aslLeft=c(!1);aslEqual=c(!1);aslOffset=c(8);aslRailWidth=c(220);aslSideWidth=c(300);aslMode=c("desktop");aslWidth=h(()=>this.aslMode()==="mobile"?380:1120);windowEl=T("aslWindow");windowWidth=c(0);aslScale=h(()=>{const l=this.windowWidth();return l===0?1:Math.min(1,l/this.aslWidth())});constructor(){S(l=>{const o=this.windowEl()?.nativeElement;if(!o||typeof ResizeObserver>"u")return;const i=new ResizeObserver(d=>{const n=d[0];n&&this.windowWidth.set(n.contentRect.width)});i.observe(o),l(()=>i.disconnect())})}asideLayoutCode=h(()=>{const l=this.aslLeft(),o=this.aslOffset();return[o===24?"<fold-aside-layout>":`<fold-aside-layout [topOffset]="${o}">`,...l?["  <app-timeline asideLeft />"]:[],"  <!-- untagged elements → centre column -->","  <app-header />",'  <fold-page-section title="…">…</fold-page-section>',"  <!-- tag each rail element -->","  <app-history asideRight />","  <app-actions asideRight />","</fold-aside-layout>"].join(`
`)});static ɵfac=function(o){return new(o||y)};static ɵcmp=W({type:y,selectors:[["gal-aside-layout-page"]],viewQuery:function(o,i){o&1&&O(i.windowEl,j,5),o&2&&R()},decls:96,vars:34,consts:[["aslWindow",""],["title","aside-layout"],["titleBadge","","kind","component"],["description",""],[3,"code"],["preview-actions","",1,"ss-seg"],["type","button",3,"click"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ss-seg"],["params","","label","offset",3,"valueChange","min","max","step","valueText","value"],["params","","label","asideLeft width",3,"min","max","step","valueText","value"],["params","","label","asideRight width",3,"min","max","step","valueText","value"],[1,"asl-window"],[1,"asl-window-inner"],[1,"asl-real",3,"topOffset"],["asideLeft",""],["cardHeader",""],[1,"gal-body"],["asideRight",""],[1,"asl-meta"],[1,"asl-actions","asl-actions--stack"],["type","button",1,"asl-btn","is-primary"],["type","button",1,"asl-btn"],["params","","label","asideLeft width",3,"valueChange","min","max","step","valueText","value"],["params","","label","asideRight width",3,"valueChange","min","max","step","valueText","value"],[1,"asl-nav"],[1,"is-on"]],template:function(o,i){if(o&1){const d=w();e(0,"fold-page-layout",1),E(1,"gal-kind-badge",2),e(2,"p",3),a(3," The detail-page archetype: a centered content column flanked by up to two sticky side rails, collapsing to one column on narrow viewports. Untagged elements are the centre; tag rail elements "),e(4,"code"),a(5,"asideLeft"),t(),a(6," / "),e(7,"code"),a(8,"asideRight"),t(),a(9,". The grid adapts to whichever rails are projected (via "),e(10,"code"),a(11,":has()"),t(),a(12,"). Zero inputs; each track is a CSS var. "),t(),e(13,"dev-playground",4)(14,"div",5)(15,"button",6),p("click",function(){return i.aslMode.set("desktop")}),a(16," desktop "),t(),e(17,"button",6),p("click",function(){return i.aslMode.set("mobile")}),a(18," mobile "),t()(),e(19,"div",7)(20,"span",8),a(21,"left rail"),t(),e(22,"div",9)(23,"button",6),p("click",function(){return i.aslLeft.set(!1)}),a(24," off (2-col) "),t(),e(25,"button",6),p("click",function(){return i.aslLeft.set(!0)}),a(26," on (3-col) "),t()()(),e(27,"div",7)(28,"span",8),a(29,"columns"),t(),e(30,"div",9)(31,"button",6),p("click",function(){return i.aslEqual.set(!1)}),a(32," fixed rails "),t(),e(33,"button",6),p("click",function(){return i.aslEqual.set(!0)}),a(34," equal "),t()()(),e(35,"fold-slider",10),b("valueChange",function(_){return q(d),k(i.aslOffset,_)||(i.aslOffset=_),L(_)}),t(),v(36,B,1,5,"fold-slider",11),v(37,Q,1,5,"fold-slider",12),e(38,"div",13,0)(40,"div",14)(41,"fold-aside-layout",15),v(42,U,10,0,"fold-card",16),e(43,"fold-card")(44,"strong",17),a(45,"Section one"),t(),e(46,"p",18),a(47," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. "),t(),e(48,"p",18),a(49," Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus, eget gravida odio pretium at. "),t()(),e(50,"fold-card")(51,"strong",17),a(52,"Section two"),t(),e(53,"p",18),a(54," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. "),t(),e(55,"p",18),a(56," Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat. "),t()(),e(57,"fold-card")(58,"strong",17),a(59,"Section three"),t(),e(60,"p",18),a(61," Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. "),t(),e(62,"p",18),a(63," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt. "),t()(),e(64,"fold-card",19)(65,"span",8),a(66,"Details"),t(),e(67,"dl",20)(68,"div")(69,"dt"),a(70,"Status"),t(),e(71,"dd"),a(72,"Active"),t()(),e(73,"div")(74,"dt"),a(75,"Owner"),t(),e(76,"dd"),a(77,"Marc Machine"),t()(),e(78,"div")(79,"dt"),a(80,"Signed"),t(),e(81,"dd"),a(82,"12 Jun 2026"),t()(),e(83,"div")(84,"dt"),a(85,"Renews"),t(),e(86,"dd"),a(87,"12 Jun 2027"),t()()()(),e(88,"fold-card",19)(89,"span",8),a(90,"Actions"),t(),e(91,"div",21)(92,"button",22),a(93,"Edit"),t(),e(94,"button",23),a(95,"Archive"),t()()()()()()()()}o&2&&(s(13),m("code",i.asideLayoutCode()),s(2),r("is-on",i.aslMode()==="desktop"),s(2),r("is-on",i.aslMode()==="mobile"),s(6),r("is-on",!i.aslLeft()),s(2),r("is-on",i.aslLeft()),s(6),r("is-on",!i.aslEqual()),s(2),r("is-on",i.aslEqual()),s(2),m("min",0)("max",40)("step",2)("valueText",i.aslOffset()+"px"),x("value",i.aslOffset),s(),g(i.aslLeft()&&!i.aslEqual()?36:-1),s(),g(i.aslEqual()?-1:37),s(3),C("width",i.aslWidth(),"px")("zoom",i.aslScale()),r("is-mobile",i.aslMode()==="mobile"),s(),C("--fold-aside-layout-rail-width",i.aslEqual()?null:i.aslRailWidth()+"px")("--fold-aside-layout-side-width",i.aslEqual()?null:i.aslSideWidth()+"px"),r("is-equal",i.aslEqual()),m("topOffset",i.aslOffset()),s(),g(i.aslLeft()?42:-1))},dependencies:[M,A,F,P,D,z],styles:[`@charset "UTF-8";
/* ── fold-aside-layout demo ────────────────────────────────── */
/* A real window auto-scaled to fit: the layout renders at its real width (desktop
   1120 > the 1040 fold threshold → 3 cols; mobile 380 → 1 col) and is scaled down
   with CSS \`zoom\` to exactly the window width (a ResizeObserver feeds the scale),
   so it fills without horizontal scroll. \`zoom\` scales only the paint — layout,
   the container-query fold and \`position: sticky\` all still resolve at the real
   local width, so the fold stays honest and the rails stick as the (taller than
   the window) centre column scrolls. */
.asl-window {
  height: 340px;
  overflow: auto;
  overscroll-behavior: contain;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-bg-page);
  /* a window simulator: center the rendered "device" on the backdrop */
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.asl-window-inner {
  /* width (desktop 1120 / mobile 380) + auto-fit zoom are bound inline. */
}

.asl-real {
  --fold-aside-layout-max: none;
}

/* Demo rail contents — left rail is a short nav, right rail a taller
   details + actions stack, so the two rails differ in size and purpose. */
.asl-nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 10px;
}

.asl-nav a {
  padding: 6px 10px;
  border-radius: var(--fold-radius-sm);
  color: var(--fold-color-text-secondary);
  font-size: 13px;
  cursor: pointer;
}

.asl-nav a.is-on {
  background: var(--fold-color-surface-sunken);
  color: var(--fold-color-text);
  font-weight: 600;
}

.asl-meta {
  margin: 10px 0 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.asl-meta div {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 13px;
}

.asl-meta dt {
  color: var(--fold-color-text-muted);
}

.asl-meta dd {
  margin: 0;
  color: var(--fold-color-text);
  font-weight: 600;
}

.asl-actions {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}

.asl-actions--stack {
  flex-direction: column;
}

.asl-btn {
  flex: 1;
  padding: 7px 12px;
  border-radius: var(--fold-radius-sm);
  border: 1px solid var(--fold-color-border);
  background: var(--fold-color-surface-raised);
  color: var(--fold-color-text);
  font: inherit;
  font-size: 13px;
  cursor: pointer;
}

.asl-btn.is-primary {
  border-color: var(--fold-color-primary);
  background: var(--fold-color-primary);
  color: var(--fold-color-on-primary);
}`],encapsulation:2})}export{y as default};
