import{s as c,A as m,ɵ as T,c as L,E as C,d as n,e,f as t,g as P,B as s,i as v,T as y,j as l,m as r,U as $,L as p,o as w,l as F,k as I,N as _,a3 as h,O as k}from"./index-BqoA3odo.js";import{K as S}from"./kind-badge.component-isEfmB6Q.js";import{C as V}from"./composed-of.component-GtFtU5Nq.js";import{D as B}from"./playground.component-MSqyRpCn.js";import{FoldPageSectionComponent as j}from"./page-section.component-DU6eOFo0.js";import{FoldLinkComponent as D}from"./link.component-CUEjFsW3.js";import"./button.component-LHfkJxSf.js";import"./element-title.component-BsM9pNw2.js";import"./slider.component-t_yIc4Ps.js";import"./input-value-DCGlOvqF.js";const E=()=>["icons"];function H(g,o){if(g&1&&(n(0,"option",14),e(1),t()),g&2){const a=o.$implicit;r("value",a),l(),I(a)}}function N(g,o){if(g&1&&(n(0,"option",14),e(1),t()),g&2){const a=o.$implicit;r("value",a),l(),I(a)}}class b{demoHref="https://fold.sh3pherd.dev/docs";leadingIcons=["none","arrow-back","company","contracts","download","folder-open","globe","mail"];trailingIcons=["none","chevron-right","arrow-right","globe","download"];label=c("View the organisation");tone=c("accent");mode=c("button");leadingIcon=c("company");trailingIcon=c("chevron-right");disabled=c(!1);leading=m(()=>{const o=this.leadingIcon();return o==="none"?void 0:o});trailing=m(()=>{const o=this.trailingIcon();return o==="none"?void 0:o});linkCode=m(()=>{const o=[];this.tone()!=="accent"&&o.push(`tone="${this.tone()}"`),this.leading()&&o.push(`icon="${this.leading()}"`),this.trailing()&&o.push(`trailingIcon="${this.trailing()}"`),this.mode()==="anchor"?o.push(`href="${this.demoHref}"`):(o.push('(clicked)="onClick()"'),this.disabled()&&o.push('[disabled]="true"'));const a=o.length>0?["<fold-link",...o.map(u=>`  ${u}`),">"].join(`
`):"<fold-link>",i=o.length>0?`
  `:"";return`${a}${i}${this.label()}
</fold-link>`});pickLeading(o){const a=this.leadingIcons.find(i=>i===o);a!==void 0&&this.leadingIcon.set(a)}pickTrailing(o){const a=this.trailingIcons.find(i=>i===o);a!==void 0&&this.trailingIcon.set(a)}static ɵfac=function(a){return new(a||b)};static ɵcmp=T({type:b,selectors:[["gal-link-page"]],decls:101,vars:26,consts:[["labelInput",""],["leadSel",""],["trailSel",""],["title","link"],["description",""],["titleBadge","","kind","component"],[3,"ids"],[3,"code","responsive"],["params","",1,"np-field"],[1,"gal-tag"],["type","text","aria-label","Link label",1,"gal-text",3,"input","value"],[1,"ss-seg"],["type","button",3,"click"],[1,"gal-select",3,"change","value"],[3,"value"],[1,"link-preview"],[3,"tone","icon","trailingIcon","href","disabled"],["title","Compositions","icon","fold"],[1,"link-compo"],[1,"gal-cell"],[1,"link-prose"],["href","https://fold.sh3pherd.dev/docs"],["icon","arrow-back"],["icon","company","trailingIcon","chevron-right"],["href","https://fold.sh3pherd.dev/docs","target","_blank","tone","muted","trailingIcon","globe"],["icon","download"],[3,"disabled"]],template:function(a,i){if(a&1){const u=C();n(0,"fold-page-layout",3)(1,"p",4),e(2," An inline text link / link-button: accent-coloured, underline on hover, with optional leading + trailing glyphs. Given "),n(3,"code"),e(4,"href"),t(),e(5," it renders an "),n(6,"code"),e(7,"<a>"),t(),e(8,"; otherwise a "),n(9,"code"),e(10,"<button>"),t(),e(11," that emits "),n(12,"code"),e(13,"(clicked)"),t(),e(14," — the same look for navigation and in-app actions. "),t(),P(15,"gal-kind-badge",5)(16,"gal-composed-of",6),n(17,"dev-playground",7)(18,"label",8)(19,"span",9),e(20,"label"),t(),n(21,"input",10,0),s("input",function(){_(u);const f=h(22);return k(i.label.set(f.value))}),t()(),n(23,"div",8)(24,"span",9),e(25,"tone"),t(),n(26,"div",11)(27,"button",12),s("click",function(){return i.tone.set("accent")}),e(28," accent "),t(),n(29,"button",12),s("click",function(){return i.tone.set("muted")}),e(30," muted "),t()()(),n(31,"div",8)(32,"span",9),e(33,"mode"),t(),n(34,"div",11)(35,"button",12),s("click",function(){return i.mode.set("button")}),e(36," button "),t(),n(37,"button",12),s("click",function(){return i.mode.set("anchor")}),e(38," anchor (href) "),t()()(),n(39,"label",8)(40,"span",9),e(41,"leading icon"),t(),n(42,"select",13,1),s("change",function(){_(u);const f=h(43);return k(i.pickLeading(f.value))}),v(44,H,2,2,"option",14,y),t()(),n(46,"label",8)(47,"span",9),e(48,"trailing icon"),t(),n(49,"select",13,2),s("change",function(){_(u);const f=h(50);return k(i.pickTrailing(f.value))}),v(51,N,2,2,"option",14,y),t()(),n(53,"div",8)(54,"span",9),e(55,"disabled "),n(56,"em"),e(57,"(button only)"),t()(),n(58,"div",11)(59,"button",12),s("click",function(){return i.disabled.set(!1)}),e(60," off "),t(),n(61,"button",12),s("click",function(){return i.disabled.set(!0)}),e(62," on "),t()()(),n(63,"div",15)(64,"fold-link",16),e(65),t()()(),n(66,"fold-page-section",17)(67,"div",18)(68,"div",19)(69,"span",9),e(70,"inline in prose"),t(),n(71,"p",20),e(72," Signatures are locked once every party has signed. Need to change a term after that? Raise an "),n(73,"fold-link",21),e(74,"addendum"),t(),e(75," instead — it keeps the original contract intact and auditable. "),t()(),n(76,"div",19)(77,"span",9),e(78,"back-link"),t(),n(79,"fold-link",22),e(80,"Back to contracts"),t()(),n(81,"div",19)(82,"span",9),e(83,"call to action"),t(),n(84,"fold-link",23),e(85," View the organisation "),t()(),n(86,"div",19)(87,"span",9),e(88,"external — new tab (safe rel)"),t(),n(89,"fold-link",24),e(90," Open the documentation "),t()(),n(91,"div",19)(92,"span",9),e(93,"download action"),t(),n(94,"fold-link",25),e(95,"Download the report"),t()(),n(96,"div",19)(97,"span",9),e(98,"disabled"),t(),n(99,"fold-link",26),e(100,"Unavailable"),t()()()()()}a&2&&(l(16),r("ids",$(25,E)),l(),r("code",i.linkCode())("responsive",!1),l(4),r("value",i.label()),l(6),p("is-on",i.tone()==="accent"),l(2),p("is-on",i.tone()==="muted"),l(6),p("is-on",i.mode()==="button"),l(2),p("is-on",i.mode()==="anchor"),l(5),r("value",i.leadingIcon()),l(2),w(i.leadingIcons),l(5),r("value",i.trailingIcon()),l(2),w(i.trailingIcons),l(8),p("is-on",!i.disabled()),l(2),p("is-on",i.disabled()),l(3),r("tone",i.tone())("icon",i.leading())("trailingIcon",i.trailing())("href",i.mode()==="anchor"?i.demoHref:void 0)("disabled",i.disabled()),l(),F(" ",i.label()," "),l(34),r("disabled",!0))},dependencies:[S,V,B,L,j,D],styles:[`@charset "UTF-8";
/* \`/link\` page — playground param controls + the compositions gallery. Global
   (ViewEncapsulation.None): the demo owns these \`link-\`/\`gal-\` classes, and the
   playground projects them, so they can't be view-scoped. */
/* Text + select param fields, matched to the segmented (.ss-seg) controls. */
.gal-text,
.gal-select {
  width: 100%;
  padding: 6px 8px;
  border-radius: var(--fold-radius-sm);
  border: 1px solid var(--fold-color-border);
  background: var(--fold-color-surface-sunken);
  color: var(--fold-color-text);
  font: inherit;
  font-size: var(--fold-text-sm);
}

.gal-text:focus-visible,
.gal-select:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: 1px;
}

.np-field .gal-tag em {
  font-style: normal;
  color: var(--fold-color-text-muted);
  font-weight: var(--fold-weight-regular);
}

/* The live playground preview sits centred on its stage. */
.link-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60px;
  padding: 24px;
}

/* Compositions: a responsive grid of real usage cells. */
.link-compo {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}

.link-prose {
  margin: 0;
  color: var(--fold-color-text-secondary);
  font-size: var(--fold-text-base);
  line-height: var(--fold-leading-relaxed);
}`],encapsulation:2})}export{b as default};
