import{s as c,A as L,ɵ as C,c as T,b as k,d as a,g as A,e,f as t,B as p,i as P,T as S,h as v,w as _,j as l,m as f,L as u,o as W,n as b,x as g,W as B,E as y,q as m,l as E,N as x,O as q,r as w}from"./index-BUdcCUHG.js";import{D as O}from"./playground.component-D2JzwadT.js";import{K as R}from"./kind-badge.component-DMWmo4eK.js";import{FoldAsideLayoutComponent as F}from"./aside-layout.component-BXfc9Mty.js";import{FoldSliderComponent as z}from"./slider.component-CbrE8E-A.js";import"./button.component-CrxYIbN9.js";import"./element-title.component-xZTYpSTe.js";import"./page-section.component-6d-bY57u.js";import"./input-value-DCGlOvqF.js";function D(r,d){if(r&1){const o=y();a(0,"button",7),p("click",function(){const s=x(o).$implicit,n=m();return q(n.aslBand.set(s))}),e(1),t()}if(r&2){const o=d.$implicit,i=m();u("is-on",i.aslBand()===o),l(),E(" ",o," ")}}function j(r,d){if(r&1){const o=y();a(0,"fold-slider",22),v("valueChange",function(s){x(o);const n=m();return w(n.aslRailWidth,s)||(n.aslRailWidth=s),q(s)}),t()}if(r&2){const o=m();f("min",0)("max",360)("step",10)("valueText",o.aslRailWidth()+"px"),b("value",o.aslRailWidth)}}function U(r,d){if(r&1){const o=y();a(0,"fold-slider",23),v("valueChange",function(s){x(o);const n=m();return w(n.aslSideWidth,s)||(n.aslSideWidth=s),q(s)}),t()}if(r&2){const o=m();f("min",0)("max",400)("step",10)("valueText",o.aslSideWidth()+"px"),b("value",o.aslSideWidth)}}function I(r,d){r&1&&(a(0,"fold-card",14)(1,"span",5),e(2,"On this page"),t(),a(3,"nav",24)(4,"a",25),e(5,"Overview"),t(),a(6,"a"),e(7,"Terms"),t(),a(8,"a"),e(9,"Signatures"),t()()())}class h{aslLeft=c(!1);aslEqual=c(!1);aslOffset=c(8);aslBleed=c(!1);aslBand=c("none");bands=["none","left","right","both"];aslRailWidth=c(220);aslSideWidth=c(300);asideLayoutCode=L(()=>{const d=this.aslLeft(),o=this.aslOffset();return[o===24?"<fold-aside-layout>":`<fold-aside-layout [topOffset]="${o}">`,...d?["  <app-timeline asideLeft />"]:[],"  <!-- untagged elements → centre column -->","  <app-header />",'  <fold-page-section title="…">…</fold-page-section>',"  <!-- tag each rail element -->","  <app-history asideRight />","  <app-actions asideRight />","</fold-aside-layout>"].join(`
`)});static ɵfac=function(o){return new(o||h)};static ɵcmp=C({type:h,selectors:[["gal-aside-layout-page"]],decls:124,vars:31,consts:[["title","aside-layout"],["titleBadge","","kind","component"],["description",""],[3,"code","initialWidth"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ss-seg"],["type","button",3,"click"],[1,"asl-hint"],["type","button",3,"is-on"],["params","","label","offset",3,"valueChange","min","max","step","valueText","value"],["params","","label","asideLeft width",3,"min","max","step","valueText","value"],["params","","label","asideRight width",3,"min","max","step","valueText","value"],[1,"asl-real",3,"topOffset","band","bleed"],["asideLeft",""],["cardHeader",""],[1,"gal-body"],["asideRight",""],[1,"asl-meta"],[1,"asl-actions","asl-actions--stack"],["type","button",1,"asl-btn","is-primary"],["type","button",1,"asl-btn"],["params","","label","asideLeft width",3,"valueChange","min","max","step","valueText","value"],["params","","label","asideRight width",3,"valueChange","min","max","step","valueText","value"],[1,"asl-nav"],[1,"is-on"]],template:function(o,i){o&1&&(a(0,"fold-page-layout",0),A(1,"gal-kind-badge",1),a(2,"p",2),e(3," The detail-page archetype: a centered content column flanked by up to two sticky side rails, collapsing to one column on narrow viewports. Untagged elements are the centre; tag rail elements "),a(4,"code"),e(5,"asideLeft"),t(),e(6," / "),a(7,"code"),e(8,"asideRight"),t(),e(9,". The grid adapts to whichever rails are projected (via "),a(10,"code"),e(11,":has()"),t(),e(12,"). Zero inputs; each track is a CSS var. "),t(),a(13,"dev-playground",3)(14,"div",4)(15,"span",5),e(16,"left rail"),t(),a(17,"div",6)(18,"button",7),p("click",function(){return i.aslLeft.set(!1)}),e(19," off (2-col) "),t(),a(20,"button",7),p("click",function(){return i.aslLeft.set(!0)}),e(21," on (3-col) "),t()()(),a(22,"div",4)(23,"span",5),e(24,"columns"),t(),a(25,"div",6)(26,"button",7),p("click",function(){return i.aslEqual.set(!1)}),e(27," fixed rails "),t(),a(28,"button",7),p("click",function(){return i.aslEqual.set(!0)}),e(29," equal "),t()()(),a(30,"div",4)(31,"span",5),e(32,"bleed"),t(),a(33,"div",6)(34,"button",7),p("click",function(){return i.aslBleed.set(!1)}),e(35," in the gutter "),t(),a(36,"button",7),p("click",function(){return i.aslBleed.set(!0)}),e(37," bleed "),t()(),a(38,"p",8),e(39," Cancels "),a(40,"code"),e(41,"--fold-page-gutter-effective"),t(),e(42," — the gutter a "),a(43,"code"),e(44,"fold-page-layout"),t(),e(45," actually "),a(46,"em"),e(47,"pays"),t(),e(48,", which is half the authored token below 640px. Pair it with "),a(49,"code"),e(50,"band"),t(),e(51,": a banded rail held off the page edge by a gutter is the floating card the band exists to replace. "),t()(),a(52,"div",4)(53,"span",5),e(54,"band"),t(),a(55,"div",6),P(56,D,2,3,"button",9,S),t(),a(58,"p",8),e(59," A banded rail sits on "),a(60,"code"),e(61,"--fold-color-surface-band"),t(),e(62," — one step away from the page, in whichever direction the theme's polarity dictates. It "),a(63,"strong"),e(64,"closes the column gutter"),t(),e(65," and separates with a hairline: a ground held 28px from the content it accompanies reads as a floating card, not as a band. The space moves inside, so the centre reads the same width either way. "),t()(),a(66,"fold-slider",10),v("valueChange",function(n){return w(i.aslOffset,n)||(i.aslOffset=n),n}),t(),_(67,j,1,5,"fold-slider",11),_(68,U,1,5,"fold-slider",12),a(69,"fold-aside-layout",13),_(70,I,10,0,"fold-card",14),a(71,"fold-card")(72,"strong",15),e(73,"Section one"),t(),a(74,"p",16),e(75," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. "),t(),a(76,"p",16),e(77," Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus, eget gravida odio pretium at. "),t()(),a(78,"fold-card")(79,"strong",15),e(80,"Section two"),t(),a(81,"p",16),e(82," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. "),t(),a(83,"p",16),e(84," Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat. "),t()(),a(85,"fold-card")(86,"strong",15),e(87,"Section three"),t(),a(88,"p",16),e(89," Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. "),t(),a(90,"p",16),e(91," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt. "),t()(),a(92,"fold-card",17)(93,"span",5),e(94,"Details"),t(),a(95,"dl",18)(96,"div")(97,"dt"),e(98,"Status"),t(),a(99,"dd"),e(100,"Active"),t()(),a(101,"div")(102,"dt"),e(103,"Owner"),t(),a(104,"dd"),e(105,"Marc Machine"),t()(),a(106,"div")(107,"dt"),e(108,"Signed"),t(),a(109,"dd"),e(110,"12 Jun 2026"),t()(),a(111,"div")(112,"dt"),e(113,"Renews"),t(),a(114,"dd"),e(115,"12 Jun 2027"),t()()()(),a(116,"fold-card",17)(117,"span",5),e(118,"Actions"),t(),a(119,"div",19)(120,"button",20),e(121,"Edit"),t(),a(122,"button",21),e(123,"Archive"),t()()()()()()),o&2&&(l(13),f("code",i.asideLayoutCode())("initialWidth",1280),l(5),u("is-on",!i.aslLeft()),l(2),u("is-on",i.aslLeft()),l(6),u("is-on",!i.aslEqual()),l(2),u("is-on",i.aslEqual()),l(6),u("is-on",!i.aslBleed()),l(2),u("is-on",i.aslBleed()),l(20),W(i.bands),l(10),f("min",0)("max",40)("step",2)("valueText",i.aslOffset()+"px"),b("value",i.aslOffset),l(),g(i.aslLeft()&&!i.aslEqual()?67:-1),l(),g(i.aslEqual()?-1:68),l(),B("--fold-aside-layout-rail-width",i.aslEqual()?null:i.aslRailWidth()+"px")("--fold-aside-layout-side-width",i.aslEqual()?null:i.aslSideWidth()+"px"),u("is-equal",i.aslEqual()),f("topOffset",i.aslOffset())("band",i.aslBand())("bleed",i.aslBleed()),l(),g(i.aslLeft()?70:-1))},dependencies:[R,T,F,k,z,O],styles:[`@charset "UTF-8";
/* ── fold-aside-layout demo ────────────────────────────────── */
/* Rendered straight in the playground's responsive frame: the component folds on
   its own width (container queries → 3 cols > 1040, rails merge, 1 col < 700), so
   dragging the preview device is what folds it — no window simulator here. */
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
  font-size: var(--fold-text-md);
  cursor: pointer;
}

.asl-nav a.is-on {
  background: var(--fold-color-surface-sunken);
  color: var(--fold-color-text);
  font-weight: var(--fold-weight-semibold);
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
  font-size: var(--fold-text-md);
}

.asl-meta dt {
  color: var(--fold-color-text-muted);
}

.asl-meta dd {
  margin: 0;
  color: var(--fold-color-text);
  font-weight: var(--fold-weight-semibold);
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
  font-size: var(--fold-text-md);
  cursor: pointer;
}

.asl-btn.is-primary {
  border-color: var(--fold-color-primary);
  background: var(--fold-color-primary);
  color: var(--fold-color-on-primary);
}

/* The band control's explainer — same register as the other playground hints. */
.asl-hint {
  margin: var(--fold-space-sm) 0 0;
  font-size: var(--fold-text-sm);
  line-height: var(--fold-leading-normal);
  color: var(--fold-color-text-muted);
}`],encapsulation:2})}export{h as default};
