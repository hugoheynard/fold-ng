import{s as l,N as k,ɵ as y,c as T,b as x,d as n,g as F,e as t,f as e,i as g,K as f,T as d,w as P,$ as V,j as i,m as p,L as $,o as h,H as u,x as B,M as I,k as R,S as w,q as _,Z as j,l as v,U as C,V as A}from"./index-Dx8_Baf4.js";import{K as q}from"./kind-badge.component-C1jCOqgD.js";import{C as S}from"./composed-of.component-BJ3tlRtQ.js";import{D as z}from"./playground.component-BDdowYNm.js";import{FoldCalloutComponent as K}from"./callout.component-4p84tAGQ.js";import{FoldButtonComponent as L}from"./button.component-IxA2S4Mz.js";import"./element-title.component-CJp0CQ8G.js";import"./page-section.component-Bizl_O7p.js";import"./slider.component-CDqH86sX.js";import"./input-value-Co_u-z_8.js";import"./spinner.component-CmPGQpIy.js";import"./tokens.catalog-DF_6rd51.js";const M=()=>["icons"];function U(r,s){if(r&1&&(n(0,"fold-callout",8),t(1," The "),n(2,"strong"),t(3),e(),t(4," variant, on its own tint. "),e()),r&2){const a=s.$implicit;p("variant",a),i(3),R(a)}}function D(r,s){if(r&1){const a=w();n(0,"button",19),d("click",function(){const c=C(a).$implicit,m=_();return A(m.coVariant.set(c))}),t(1),e()}if(r&2){const a=s.$implicit,o=_();u("is-on",o.coVariant()===a),j("data-tint",a),i(),v(" ",a," ")}}function E(r,s){if(r&1){const a=w();n(0,"button",19),d("click",function(){const c=C(a).$implicit,m=_();return A(m.coAppearance.set(c))}),t(1),e()}if(r&2){const a=s.$implicit,o=_();u("is-on",o.coAppearance()===a),i(),v(" ",a," ")}}function O(r,s){r&1&&(n(0,"button",13),t(1," Request access "),e())}class b{variants=["neutral","accent","info","success","warning","alert"];appearances=["inset","flat"];coVariant=l("warning");coAppearance=l("inset");coActions=l(!1);coAnnounce=l(!1);calloutCode=k(()=>{const s=[this.coVariant()==="neutral"?"":`variant="${this.coVariant()}"`,this.coAppearance()==="inset"?"":`appearance="${this.coAppearance()}"`,this.coAnnounce()?"announce":""].filter(Boolean),a=s.length?`<fold-callout ${s.join(" ")}>`:"<fold-callout>",o=["  This contract is <strong>locked</strong> — no more edits.",this.coActions()?'  <button foldButton actions size="sm" emphasis="outline" intent="neutral">Request access</button>':""].filter(Boolean);return[a,...o,"</fold-callout>"].join(`
`)});static ɵfac=function(a){return new(a||b)};static ɵcmp=y({type:b,selectors:[["gal-callout-page"]],decls:77,vars:13,consts:[["co","foldCallout"],["title","callout"],["titleBadge","","kind","component"],[3,"ids"],["description",""],[1,"gal-cell"],[1,"gal-tag"],[1,"gal-pair"],[3,"variant"],["padding","none"],["variant","warning","appearance","flat"],[1,"gal-body",2,"margin","0","padding","16px"],["variant","alert"],["foldButton","","actions","","size","sm","emphasis","outline","intent","neutral"],["stage","",3,"code"],["params","",1,"np-field"],[1,"ss-seg","ss-seg--tinted"],["type","button",3,"is-on"],[1,"ss-seg"],["type","button",3,"click"],["padding","none",2,"width","100%","max-width","520px"],[3,"variant","appearance","announce"],["cardFooter","",1,"co-aria"]],template:function(a,o){if(a&1&&(n(0,"fold-page-layout",1),F(1,"gal-kind-badge",2)(2,"gal-composed-of",3),n(3,"p",4),t(4," A tinted message row — a status colour, an icon, a short message, optional actions. Two appearances, and the difference is where it sits rather than how loud it is: "),n(5,"code"),t(6,"inset"),e(),t(7," is a bordered row in the flow; "),n(8,"code"),t(9,"flat"),e(),t(10," is a full-bleed band with no radius and no side borders, so it reads as a strip "),n(11,"em"),t(12,"of"),e(),t(13," its container. The message is projected, so it takes "),n(14,"code"),t(15,"<strong>"),e(),t(16," and links. "),e(),n(17,"div",5)(18,"span",6),t(19,"variant — neutral · accent (brand) · info · success · warning · alert"),e(),n(20,"div",7),g(21,U,5,2,"fold-callout",8,f),e()(),n(23,"div",5)(24,"span",6),t(25,"flat — a band of its container, not a block in it"),e(),n(26,"fold-card",9)(27,"fold-callout",10),t(28," Read-only: this period is closed. "),e(),n(29,"p",11),t(30," Card content below the band — the strip meets both card edges, so it belongs to the surface instead of floating on it. "),e()()(),n(31,"div",5)(32,"span",6),t(33,"actions — trailing controls"),e(),n(34,"fold-callout",12),t(35," Storage quota exceeded — uploads are paused. "),n(36,"button",13),t(37," Upgrade "),e()()(),n(38,"dev-playground",14)(39,"div",15)(40,"span",6),t(41,"variant"),e(),n(42,"div",16),g(43,D,2,4,"button",17,f),e()(),n(45,"div",15)(46,"span",6),t(47,"appearance"),e(),n(48,"div",18),g(49,E,2,3,"button",17,f),e()(),n(51,"div",15)(52,"span",6),t(53,"content"),e(),n(54,"div",18)(55,"button",19),d("click",function(){return o.coActions.set(!o.coActions())}),t(56," actions "),e(),n(57,"button",19),d("click",function(){return o.coAnnounce.set(!o.coAnnounce())}),t(58," announce "),e()()(),n(59,"fold-card",20)(60,"fold-callout",21,0),t(62," This contract is "),n(63,"strong"),t(64,"locked"),e(),t(65," — no more edits. "),P(66,O,2,0,"button",13),e(),n(67,"p",11),t(68," Container content — switch to "),n(69,"code"),t(70,"flat"),e(),t(71," to see the callout meet its edges. "),e(),n(72,"div",22)(73,"span",6),t(74,"announced as"),e(),n(75,"code"),t(76),e()()()()()),a&2){const c=V(61);i(2),p("ids",$(12,M)),i(19),h(o.variants),i(17),p("code",o.calloutCode()),i(5),h(o.variants),i(6),h(o.appearances),i(6),u("is-on",o.coActions()),i(2),u("is-on",o.coAnnounce()),i(3),p("variant",o.coVariant())("appearance",o.coAppearance())("announce",o.coAnnounce()),i(6),B(o.coActions()?66:-1),i(10),I('role="',c.role(),'" aria-live="',c.ariaLive()??"—",'"')}},dependencies:[q,S,T,K,x,L,z],styles:[`@charset "UTF-8";
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
