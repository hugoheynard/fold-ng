import{s as c,x as m,ɵ as P,c as T,A as L,d as n,e,f as t,g as C,B as s,i as v,u as y,j as o,m as d,C as p,o as w,l as $,k as I,D as f,P as h,E as k}from"./index-RSTDnPfX.js";import{K as F}from"./kind-badge.component-C5ostrvZ.js";import{D as S}from"./playground.component-BQbqTaTb.js";import{FoldPageSectionComponent as V}from"./page-section.component-9Qq6gg8b.js";import{FoldLinkComponent as B}from"./link.component-CK9NxGBz.js";import"./button.component-CVu9egDt.js";import"./spinner.component-iF29VlFo.js";import"./tokens.catalog-DF_6rd51.js";import"./element-title.component-DUmCx-a1.js";function j(g,a){if(g&1&&(n(0,"option",13),e(1),t()),g&2){const l=a.$implicit;d("value",l),o(),I(l)}}function D(g,a){if(g&1&&(n(0,"option",13),e(1),t()),g&2){const l=a.$implicit;d("value",l),o(),I(l)}}class b{demoHref="https://fold.sh3pherd.dev/docs";leadingIcons=["none","arrow-back","company","contracts","download","folder-open","globe","mail"];trailingIcons=["none","chevron-right","arrow-right","globe","download"];label=c("View the organisation");tone=c("accent");mode=c("button");leadingIcon=c("company");trailingIcon=c("chevron-right");disabled=c(!1);leading=m(()=>this.leadingIcon()==="none"?void 0:this.leadingIcon());trailing=m(()=>this.trailingIcon()==="none"?void 0:this.trailingIcon());linkCode=m(()=>{const a=[];this.tone()!=="accent"&&a.push(`tone="${this.tone()}"`),this.leading()&&a.push(`icon="${this.leading()}"`),this.trailing()&&a.push(`trailingIcon="${this.trailing()}"`),this.mode()==="anchor"?a.push(`href="${this.demoHref}"`):(a.push('(clicked)="onClick()"'),this.disabled()&&a.push('[disabled]="true"'));const l=a.length>0?["<fold-link",...a.map(u=>`  ${u}`),">"].join(`
`):"<fold-link>",i=a.length>0?`
  `:"";return`${l}${i}${this.label()}
</fold-link>`});static ɵfac=function(l){return new(l||b)};static ɵcmp=P({type:b,selectors:[["gal-link-page"]],decls:100,vars:24,consts:[["labelInput",""],["leadSel",""],["trailSel",""],["title","link"],["description",""],["titleBadge","","kind","component"],[3,"code","responsive"],["params","",1,"np-field"],[1,"gal-tag"],["type","text","aria-label","Link label",1,"gal-text",3,"input","value"],[1,"ss-seg"],["type","button",3,"click"],[1,"gal-select",3,"change","value"],[3,"value"],[1,"link-preview"],[3,"tone","icon","trailingIcon","href","disabled"],["title","Compositions","icon","fold"],[1,"link-compo"],[1,"gal-cell"],[1,"link-prose"],["href","https://fold.sh3pherd.dev/docs"],["icon","arrow-back"],["icon","company","trailingIcon","chevron-right"],["href","https://fold.sh3pherd.dev/docs","target","_blank","tone","muted","trailingIcon","globe"],["icon","download"],[3,"disabled"]],template:function(l,i){if(l&1){const u=L();n(0,"fold-page-layout",3)(1,"p",4),e(2," An inline text link / link-button: accent-coloured, underline on hover, with optional leading + trailing glyphs. Given "),n(3,"code"),e(4,"href"),t(),e(5," it renders an "),n(6,"code"),e(7,"<a>"),t(),e(8,"; otherwise a "),n(9,"code"),e(10,"<button>"),t(),e(11," that emits "),n(12,"code"),e(13,"(clicked)"),t(),e(14," — the same look for navigation and in-app actions. "),t(),C(15,"gal-kind-badge",5),n(16,"dev-playground",6)(17,"label",7)(18,"span",8),e(19,"label"),t(),n(20,"input",9,0),s("input",function(){f(u);const _=h(21);return k(i.label.set(_.value))}),t()(),n(22,"div",7)(23,"span",8),e(24,"tone"),t(),n(25,"div",10)(26,"button",11),s("click",function(){return i.tone.set("accent")}),e(27," accent "),t(),n(28,"button",11),s("click",function(){return i.tone.set("muted")}),e(29," muted "),t()()(),n(30,"div",7)(31,"span",8),e(32,"mode"),t(),n(33,"div",10)(34,"button",11),s("click",function(){return i.mode.set("button")}),e(35," button "),t(),n(36,"button",11),s("click",function(){return i.mode.set("anchor")}),e(37," anchor (href) "),t()()(),n(38,"label",7)(39,"span",8),e(40,"leading icon"),t(),n(41,"select",12,1),s("change",function(){f(u);const _=h(42);return k(i.leadingIcon.set(_.value))}),v(43,j,2,2,"option",13,y),t()(),n(45,"label",7)(46,"span",8),e(47,"trailing icon"),t(),n(48,"select",12,2),s("change",function(){f(u);const _=h(49);return k(i.trailingIcon.set(_.value))}),v(50,D,2,2,"option",13,y),t()(),n(52,"div",7)(53,"span",8),e(54,"disabled "),n(55,"em"),e(56,"(button only)"),t()(),n(57,"div",10)(58,"button",11),s("click",function(){return i.disabled.set(!1)}),e(59," off "),t(),n(60,"button",11),s("click",function(){return i.disabled.set(!0)}),e(61," on "),t()()(),n(62,"div",14)(63,"fold-link",15),e(64),t()()(),n(65,"fold-page-section",16)(66,"div",17)(67,"div",18)(68,"span",8),e(69,"inline in prose"),t(),n(70,"p",19),e(71," Signatures are locked once every party has signed. Need to change a term after that? Raise an "),n(72,"fold-link",20),e(73,"addendum"),t(),e(74," instead — it keeps the original contract intact and auditable. "),t()(),n(75,"div",18)(76,"span",8),e(77,"back-link"),t(),n(78,"fold-link",21),e(79,"Back to contracts"),t()(),n(80,"div",18)(81,"span",8),e(82,"call to action"),t(),n(83,"fold-link",22),e(84," View the organisation "),t()(),n(85,"div",18)(86,"span",8),e(87,"external — new tab (safe rel)"),t(),n(88,"fold-link",23),e(89," Open the documentation "),t()(),n(90,"div",18)(91,"span",8),e(92,"download action"),t(),n(93,"fold-link",24),e(94,"Download the report"),t()(),n(95,"div",18)(96,"span",8),e(97,"disabled"),t(),n(98,"fold-link",25),e(99,"Unavailable"),t()()()()()}l&2&&(o(16),d("code",i.linkCode())("responsive",!1),o(4),d("value",i.label()),o(6),p("is-on",i.tone()==="accent"),o(2),p("is-on",i.tone()==="muted"),o(6),p("is-on",i.mode()==="button"),o(2),p("is-on",i.mode()==="anchor"),o(5),d("value",i.leadingIcon()),o(2),w(i.leadingIcons),o(5),d("value",i.trailingIcon()),o(2),w(i.trailingIcons),o(8),p("is-on",!i.disabled()),o(2),p("is-on",i.disabled()),o(3),d("tone",i.tone())("icon",i.leading())("trailingIcon",i.trailing())("href",i.mode()==="anchor"?i.demoHref:void 0)("disabled",i.disabled()),o(),$(" ",i.label()," "),o(34),d("disabled",!0))},dependencies:[F,S,T,V,B],styles:[`@charset "UTF-8";
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
  font-size: 12px;
}

.gal-text:focus-visible,
.gal-select:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: 1px;
}

.np-field .gal-tag em {
  font-style: normal;
  color: var(--fold-color-text-muted);
  font-weight: 400;
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
  font-size: 14px;
  line-height: 1.6;
}`],encapsulation:2})}export{b as default};
