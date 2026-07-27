import{s as u,N as L,ɵ as C,c as T,b as k,d as e,g as S,e as a,f as t,T as m,h,w as _,j as l,m as c,H as p,n as y,x as g,Q as W,S as b,q as f,U as q,r as x,V as w}from"./index-CkL4IWB-.js";import{D as A}from"./playground.component-BcehyDi9.js";import{K as P}from"./kind-badge.component-DbDfsiI-.js";import{FoldAsideLayoutComponent as R}from"./aside-layout.component-aTx4518k.js";import{FoldSliderComponent as E}from"./slider.component-CI0Vwb-Y.js";import"./button.component-DXLT1nG5.js";import"./spinner.component-65SfrVWR.js";import"./tokens.catalog-DF_6rd51.js";import"./element-title.component-C8eHUCwK.js";import"./page-section.component-C0z11J_Y.js";import"./input-value-Co_u-z_8.js";function O(r,d){if(r&1){const o=b();e(0,"fold-slider",20),h("valueChange",function(s){q(o);const n=f();return x(n.aslRailWidth,s)||(n.aslRailWidth=s),w(s)}),t()}if(r&2){const o=f();c("min",0)("max",360)("step",10)("valueText",o.aslRailWidth()+"px"),y("value",o.aslRailWidth)}}function F(r,d){if(r&1){const o=b();e(0,"fold-slider",21),h("valueChange",function(s){q(o);const n=f();return x(n.aslSideWidth,s)||(n.aslSideWidth=s),w(s)}),t()}if(r&2){const o=f();c("min",0)("max",400)("step",10)("valueText",o.aslSideWidth()+"px"),y("value",o.aslSideWidth)}}function D(r,d){r&1&&(e(0,"fold-card",12)(1,"span",5),a(2,"On this page"),t(),e(3,"nav",22)(4,"a",23),a(5,"Overview"),t(),e(6,"a"),a(7,"Terms"),t(),e(8,"a"),a(9,"Signatures"),t()()())}class v{aslLeft=u(!1);aslEqual=u(!1);aslOffset=u(8);aslRailWidth=u(220);aslSideWidth=u(300);asideLayoutCode=L(()=>{const d=this.aslLeft(),o=this.aslOffset();return[o===24?"<fold-aside-layout>":`<fold-aside-layout [topOffset]="${o}">`,...d?["  <app-timeline asideLeft />"]:[],"  <!-- untagged elements → centre column -->","  <app-header />",'  <fold-page-section title="…">…</fold-page-section>',"  <!-- tag each rail element -->","  <app-history asideRight />","  <app-actions asideRight />","</fold-aside-layout>"].join(`
`)});static ɵfac=function(o){return new(o||v)};static ɵcmp=C({type:v,selectors:[["gal-aside-layout-page"]],decls:88,vars:25,consts:[["title","aside-layout"],["titleBadge","","kind","component"],["description",""],[3,"code","initialWidth"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ss-seg"],["type","button",3,"click"],["params","","label","offset",3,"valueChange","min","max","step","valueText","value"],["params","","label","asideLeft width",3,"min","max","step","valueText","value"],["params","","label","asideRight width",3,"min","max","step","valueText","value"],[1,"asl-real",3,"topOffset"],["asideLeft",""],["cardHeader",""],[1,"gal-body"],["asideRight",""],[1,"asl-meta"],[1,"asl-actions","asl-actions--stack"],["type","button",1,"asl-btn","is-primary"],["type","button",1,"asl-btn"],["params","","label","asideLeft width",3,"valueChange","min","max","step","valueText","value"],["params","","label","asideRight width",3,"valueChange","min","max","step","valueText","value"],[1,"asl-nav"],[1,"is-on"]],template:function(o,i){o&1&&(e(0,"fold-page-layout",0),S(1,"gal-kind-badge",1),e(2,"p",2),a(3," The detail-page archetype: a centered content column flanked by up to two sticky side rails, collapsing to one column on narrow viewports. Untagged elements are the centre; tag rail elements "),e(4,"code"),a(5,"asideLeft"),t(),a(6," / "),e(7,"code"),a(8,"asideRight"),t(),a(9,". The grid adapts to whichever rails are projected (via "),e(10,"code"),a(11,":has()"),t(),a(12,"). Zero inputs; each track is a CSS var. "),t(),e(13,"dev-playground",3)(14,"div",4)(15,"span",5),a(16,"left rail"),t(),e(17,"div",6)(18,"button",7),m("click",function(){return i.aslLeft.set(!1)}),a(19," off (2-col) "),t(),e(20,"button",7),m("click",function(){return i.aslLeft.set(!0)}),a(21," on (3-col) "),t()()(),e(22,"div",4)(23,"span",5),a(24,"columns"),t(),e(25,"div",6)(26,"button",7),m("click",function(){return i.aslEqual.set(!1)}),a(27," fixed rails "),t(),e(28,"button",7),m("click",function(){return i.aslEqual.set(!0)}),a(29," equal "),t()()(),e(30,"fold-slider",8),h("valueChange",function(n){return x(i.aslOffset,n)||(i.aslOffset=n),n}),t(),_(31,O,1,5,"fold-slider",9),_(32,F,1,5,"fold-slider",10),e(33,"fold-aside-layout",11),_(34,D,10,0,"fold-card",12),e(35,"fold-card")(36,"strong",13),a(37,"Section one"),t(),e(38,"p",14),a(39," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. "),t(),e(40,"p",14),a(41," Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus, eget gravida odio pretium at. "),t()(),e(42,"fold-card")(43,"strong",13),a(44,"Section two"),t(),e(45,"p",14),a(46," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. "),t(),e(47,"p",14),a(48," Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat. "),t()(),e(49,"fold-card")(50,"strong",13),a(51,"Section three"),t(),e(52,"p",14),a(53," Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. "),t(),e(54,"p",14),a(55," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt. "),t()(),e(56,"fold-card",15)(57,"span",5),a(58,"Details"),t(),e(59,"dl",16)(60,"div")(61,"dt"),a(62,"Status"),t(),e(63,"dd"),a(64,"Active"),t()(),e(65,"div")(66,"dt"),a(67,"Owner"),t(),e(68,"dd"),a(69,"Marc Machine"),t()(),e(70,"div")(71,"dt"),a(72,"Signed"),t(),e(73,"dd"),a(74,"12 Jun 2026"),t()(),e(75,"div")(76,"dt"),a(77,"Renews"),t(),e(78,"dd"),a(79,"12 Jun 2027"),t()()()(),e(80,"fold-card",15)(81,"span",5),a(82,"Actions"),t(),e(83,"div",17)(84,"button",18),a(85,"Edit"),t(),e(86,"button",19),a(87,"Archive"),t()()()()()()),o&2&&(l(13),c("code",i.asideLayoutCode())("initialWidth",1280),l(5),p("is-on",!i.aslLeft()),l(2),p("is-on",i.aslLeft()),l(6),p("is-on",!i.aslEqual()),l(2),p("is-on",i.aslEqual()),l(2),c("min",0)("max",40)("step",2)("valueText",i.aslOffset()+"px"),y("value",i.aslOffset),l(),g(i.aslLeft()&&!i.aslEqual()?31:-1),l(),g(i.aslEqual()?-1:32),l(),W("--fold-aside-layout-rail-width",i.aslEqual()?null:i.aslRailWidth()+"px")("--fold-aside-layout-side-width",i.aslEqual()?null:i.aslSideWidth()+"px"),p("is-equal",i.aslEqual()),c("topOffset",i.aslOffset()),l(),g(i.aslLeft()?34:-1))},dependencies:[P,T,R,k,E,A],styles:[`@charset "UTF-8";
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
}`],encapsulation:2})}export{v as default};
