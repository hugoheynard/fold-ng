import{s as l,A as k,ɵ as y,c as T,b as x,d as n,g as F,e as t,f as e,i as g,T as f,B as p,w as P,a3 as B,j as i,m as d,U as V,o as h,L as u,x as $,M as I,k as R,E as w,q as _,D as j,l as v,N as C,O as A}from"./index-CrZoBIgg.js";import{K as q}from"./kind-badge.component-BCOpHO-V.js";import{C as z}from"./composed-of.component-DXikK--P.js";import{D}from"./playground.component-D0vxtatB.js";import{FoldCalloutComponent as E}from"./callout.component-ARXYowsx.js";import{FoldButtonComponent as L}from"./button.component-iqtPhJqp.js";import"./element-title.component-Cmfks3mD.js";import"./page-section.component-D5Z0zfei.js";import"./slider.component-CeWitcm7.js";import"./input-value-DCGlOvqF.js";const O=()=>["icons"];function U(r,s){if(r&1&&(n(0,"fold-callout",8),t(1," The "),n(2,"strong"),t(3),e(),t(4," variant, on its own tint. "),e()),r&2){const o=s.$implicit;d("variant",o),i(3),R(o)}}function K(r,s){if(r&1){const o=w();n(0,"button",19),p("click",function(){const c=C(o).$implicit,m=_();return A(m.coVariant.set(c))}),t(1),e()}if(r&2){const o=s.$implicit,a=_();u("is-on",a.coVariant()===o),j("data-tint",o),i(),v(" ",o," ")}}function S(r,s){if(r&1){const o=w();n(0,"button",19),p("click",function(){const c=C(o).$implicit,m=_();return A(m.coAppearance.set(c))}),t(1),e()}if(r&2){const o=s.$implicit,a=_();u("is-on",a.coAppearance()===o),i(),v(" ",o," ")}}function M(r,s){r&1&&(n(0,"button",13),t(1," Request access "),e())}class b{variants=["neutral","accent","info","success","warning","alert"];appearances=["inset","flat"];coVariant=l("warning");coAppearance=l("inset");coActions=l(!1);coAnnounce=l(!1);calloutCode=k(()=>{const s=[this.coVariant()==="neutral"?"":`variant="${this.coVariant()}"`,this.coAppearance()==="inset"?"":`appearance="${this.coAppearance()}"`,this.coAnnounce()?"announce":""].filter(Boolean),o=s.length?`<fold-callout ${s.join(" ")}>`:"<fold-callout>",a=["  This contract is <strong>locked</strong> — no more edits.",this.coActions()?'  <button foldButton actions size="sm" emphasis="outline" intent="neutral">Request access</button>':""].filter(Boolean);return[o,...a,"</fold-callout>"].join(`
`)});static ɵfac=function(o){return new(o||b)};static ɵcmp=y({type:b,selectors:[["gal-callout-page"]],decls:77,vars:13,consts:[["co","foldCallout"],["title","callout"],["titleBadge","","kind","component"],[3,"ids"],["description",""],[1,"gal-cell"],[1,"gal-tag"],[1,"gal-pair"],[3,"variant"],["padding","none"],["variant","warning","appearance","flat"],[1,"gal-body",2,"margin","0","padding","16px"],["variant","alert"],["foldButton","","actions","","size","sm","emphasis","outline","intent","neutral"],["stage","",3,"code"],["params","",1,"np-field"],[1,"ss-seg","ss-seg--tinted"],["type","button",3,"is-on"],[1,"ss-seg"],["type","button",3,"click"],["padding","none",2,"width","100%","max-width","520px"],[3,"variant","appearance","announce"],["cardFooter","",1,"co-aria"]],template:function(o,a){if(o&1&&(n(0,"fold-page-layout",1),F(1,"gal-kind-badge",2)(2,"gal-composed-of",3),n(3,"p",4),t(4," A tinted message row — a status colour, an icon, a short message, optional actions. Two appearances, and the difference is where it sits rather than how loud it is: "),n(5,"code"),t(6,"inset"),e(),t(7," is a bordered row in the flow; "),n(8,"code"),t(9,"flat"),e(),t(10," is a full-bleed band with no radius and no side borders, so it reads as a strip "),n(11,"em"),t(12,"of"),e(),t(13," its container. The message is projected, so it takes "),n(14,"code"),t(15,"<strong>"),e(),t(16," and links. "),e(),n(17,"div",5)(18,"span",6),t(19,"variant — neutral · accent (brand) · info · success · warning · alert"),e(),n(20,"div",7),g(21,U,5,2,"fold-callout",8,f),e()(),n(23,"div",5)(24,"span",6),t(25,"flat — a band of its container, not a block in it"),e(),n(26,"fold-card",9)(27,"fold-callout",10),t(28," Read-only: this period is closed. "),e(),n(29,"p",11),t(30," Card content below the band — the strip meets both card edges, so it belongs to the surface instead of floating on it. "),e()()(),n(31,"div",5)(32,"span",6),t(33,"actions — trailing controls"),e(),n(34,"fold-callout",12),t(35," Storage quota exceeded — uploads are paused. "),n(36,"button",13),t(37," Upgrade "),e()()(),n(38,"dev-playground",14)(39,"div",15)(40,"span",6),t(41,"variant"),e(),n(42,"div",16),g(43,K,2,4,"button",17,f),e()(),n(45,"div",15)(46,"span",6),t(47,"appearance"),e(),n(48,"div",18),g(49,S,2,3,"button",17,f),e()(),n(51,"div",15)(52,"span",6),t(53,"content"),e(),n(54,"div",18)(55,"button",19),p("click",function(){return a.coActions.set(!a.coActions())}),t(56," actions "),e(),n(57,"button",19),p("click",function(){return a.coAnnounce.set(!a.coAnnounce())}),t(58," announce "),e()()(),n(59,"fold-card",20)(60,"fold-callout",21,0),t(62," This contract is "),n(63,"strong"),t(64,"locked"),e(),t(65," — no more edits. "),P(66,M,2,0,"button",13),e(),n(67,"p",11),t(68," Container content — switch to "),n(69,"code"),t(70,"flat"),e(),t(71," to see the callout meet its edges. "),e(),n(72,"div",22)(73,"span",6),t(74,"announced as"),e(),n(75,"code"),t(76),e()()()()()),o&2){const c=B(61);i(2),d("ids",V(12,O)),i(19),h(a.variants),i(17),d("code",a.calloutCode()),i(5),h(a.variants),i(6),h(a.appearances),i(6),u("is-on",a.coActions()),i(2),u("is-on",a.coAnnounce()),i(3),d("variant",a.coVariant())("appearance",a.coAppearance())("announce",a.coAnnounce()),i(6),$(a.coActions()?66:-1),i(10),I('role="',c.role(),'" aria-live="',c.ariaLive()??"—",'"')}},dependencies:[q,z,T,E,x,L,D],styles:[`@charset "UTF-8";
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
  font-size: var(--fold-text-sm);
  font-family: var(--fold-font-mono);
  color: var(--fold-color-text-secondary);
}

/* A segment whose options ARE colours: two per line (six in a row is unreadable
   at this width), and the selected one wears the tint it stands for, so the
   control previews the choice instead of describing it. */
.ss-seg--tinted {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}`],encapsulation:2})}export{b as default};
