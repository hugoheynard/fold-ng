import{s as c,B as y,ɵ as k,c as T,b as x,d as n,g as F,e as t,f as e,i as m,y as g,G as d,L as P,T as B,j as i,o as f,m as h,x as p,M as V,A as $,k as I,E as w,z as u,S as R,l as v,H as C,I as A}from"./index-UFHUHfKt.js";import{K as j}from"./kind-badge.component-DSrCDKTb.js";import{D as z}from"./playground.component-OISD_jzR.js";import{F as S}from"./callout.component--OtgLUBQ.js";import{F as q}from"./button.component-B7Uyt5AS.js";import"./element-title.component-D7JmpivU.js";import"./page-section.component-DHJ6ia22.js";import"./spinner.component-BsFUE79e.js";import"./tokens.catalog-DF_6rd51.js";function E(r,s){if(r&1&&(n(0,"fold-callout",7),t(1," The "),n(2,"strong"),t(3),e(),t(4," variant, on its own tint. "),e()),r&2){const o=s.$implicit;h("variant",o),i(3),I(o)}}function L(r,s){if(r&1){const o=w();n(0,"button",18),d("click",function(){const l=C(o).$implicit,_=u();return A(_.coVariant.set(l))}),t(1),e()}if(r&2){const o=s.$implicit,a=u();p("is-on",a.coVariant()===o),R("data-tint",o),i(),v(" ",o," ")}}function M(r,s){if(r&1){const o=w();n(0,"button",18),d("click",function(){const l=C(o).$implicit,_=u();return A(_.coAppearance.set(l))}),t(1),e()}if(r&2){const o=s.$implicit,a=u();p("is-on",a.coAppearance()===o),i(),v(" ",o," ")}}function D(r,s){r&1&&(n(0,"button",12),t(1," Request access "),e())}class b{variants=["neutral","accent","info","success","warning","alert"];appearances=["inset","flat"];coVariant=c("warning");coAppearance=c("inset");coActions=c(!1);coAnnounce=c(!1);calloutCode=y(()=>{const s=[this.coVariant()==="neutral"?"":`variant="${this.coVariant()}"`,this.coAppearance()==="inset"?"":`appearance="${this.coAppearance()}"`,this.coAnnounce()?"announce":""].filter(Boolean),o=s.length?`<fold-callout ${s.join(" ")}>`:"<fold-callout>",a=["  This contract is <strong>locked</strong> — no more edits.",this.coActions()?'  <button foldButton actions size="sm" emphasis="outline" intent="neutral">Request access</button>':""].filter(Boolean);return[o,...a,"</fold-callout>"].join(`
`)});static ɵfac=function(o){return new(o||b)};static ɵcmp=k({type:b,selectors:[["gal-callout-page"]],decls:76,vars:11,consts:[["co","foldCallout"],["title","callout"],["titleBadge","","kind","component"],["description",""],[1,"gal-cell"],[1,"gal-tag"],[1,"gal-pair"],[3,"variant"],["padding","none"],["variant","warning","appearance","flat"],[1,"gal-body",2,"margin","0","padding","16px"],["variant","alert"],["foldButton","","actions","","size","sm","emphasis","outline","intent","neutral"],["stage","",3,"code"],["params","",1,"np-field"],[1,"ss-seg","ss-seg--tinted"],["type","button",3,"is-on"],[1,"ss-seg"],["type","button",3,"click"],["padding","none",2,"width","100%","max-width","520px"],[3,"variant","appearance","announce"],["cardFooter","",1,"co-aria"]],template:function(o,a){if(o&1&&(n(0,"fold-page-layout",1),F(1,"gal-kind-badge",2),n(2,"p",3),t(3," A tinted message row — a status colour, an icon, a short message, optional actions. Two appearances, and the difference is where it sits rather than how loud it is: "),n(4,"code"),t(5,"inset"),e(),t(6," is a bordered row in the flow; "),n(7,"code"),t(8,"flat"),e(),t(9," is a full-bleed band with no radius and no side borders, so it reads as a strip "),n(10,"em"),t(11,"of"),e(),t(12," its container. The message is projected, so it takes "),n(13,"code"),t(14,"<strong>"),e(),t(15," and links. "),e(),n(16,"div",4)(17,"span",5),t(18,"variant — neutral · accent (brand) · info · success · warning · alert"),e(),n(19,"div",6),m(20,E,5,2,"fold-callout",7,g),e()(),n(22,"div",4)(23,"span",5),t(24,"flat — a band of its container, not a block in it"),e(),n(25,"fold-card",8)(26,"fold-callout",9),t(27," Read-only: this period is closed. "),e(),n(28,"p",10),t(29," Card content below the band — the strip meets both card edges, so it belongs to the surface instead of floating on it. "),e()()(),n(30,"div",4)(31,"span",5),t(32,"actions — trailing controls"),e(),n(33,"fold-callout",11),t(34," Storage quota exceeded — uploads are paused. "),n(35,"button",12),t(36," Upgrade "),e()()(),n(37,"dev-playground",13)(38,"div",14)(39,"span",5),t(40,"variant"),e(),n(41,"div",15),m(42,L,2,4,"button",16,g),e()(),n(44,"div",14)(45,"span",5),t(46,"appearance"),e(),n(47,"div",17),m(48,M,2,3,"button",16,g),e()(),n(50,"div",14)(51,"span",5),t(52,"content"),e(),n(53,"div",17)(54,"button",18),d("click",function(){return a.coActions.set(!a.coActions())}),t(55," actions "),e(),n(56,"button",18),d("click",function(){return a.coAnnounce.set(!a.coAnnounce())}),t(57," announce "),e()()(),n(58,"fold-card",19)(59,"fold-callout",20,0),t(61," This contract is "),n(62,"strong"),t(63,"locked"),e(),t(64," — no more edits. "),P(65,D,2,0,"button",12),e(),n(66,"p",10),t(67," Container content — switch to "),n(68,"code"),t(69,"flat"),e(),t(70," to see the callout meet its edges. "),e(),n(71,"div",21)(72,"span",5),t(73,"announced as"),e(),n(74,"code"),t(75),e()()()()()),o&2){const l=B(60);i(20),f(a.variants),i(17),h("code",a.calloutCode()),i(5),f(a.variants),i(6),f(a.appearances),i(6),p("is-on",a.coActions()),i(2),p("is-on",a.coAnnounce()),i(3),h("variant",a.coVariant())("appearance",a.coAppearance())("announce",a.coAnnounce()),i(6),V(a.coActions()?65:-1),i(10),$('role="',l.role(),'" aria-live="',l.ariaLive()??"—",'"')}},dependencies:[j,T,S,x,q,z],styles:[`@charset "UTF-8";
/* Two specimens per line — for demos wide enough that a single column wastes
   the page and a wrapping row would break the pairing. One column once a
   column would be narrower than it is readable. */
.gal-pair {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

@media (max-width: 760px) {
  .gal-pair {
    grid-template-columns: 1fr;
  }
}
/* callout page: \`announce\` changes nothing on screen, so the playground shows
   the ARIA it resolves to — otherwise the switch looks broken. */
.co-aria {
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 10px 16px;
  font-size: 12px;
  font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  color: var(--fold-color-text-secondary);
}

/* A segment whose options ARE colours: two per line (six in a row is unreadable
   at this width), and the selected one wears the tint it stands for, so the
   control previews the choice instead of describing it. */
.ss-seg--tinted {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}`],encapsulation:2})}export{b as default};
