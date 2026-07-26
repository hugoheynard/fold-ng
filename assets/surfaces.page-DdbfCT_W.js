import{K as f}from"./kind-badge.component-DGQb7W15.js";import{ɵ as h,c as m,b as u,a as g,d as o,e,f as t,g as s,i as v,u as y,j as r,o as b,v as _,k as d,q as x,m as p,l as k}from"./index-D5P_54_N.js";import{FoldPageSectionComponent as w}from"./page-section.component-CMrHMCCI.js";import{FoldCalloutComponent as C}from"./callout.component-B3zg2OMN.js";import{FoldElementTitleComponent as F}from"./element-title.component-soHo1pb1.js";import{FoldLinkComponent as A}from"./link.component-DNS3I00P.js";import{FoldButtonComponent as S}from"./button.component-D3iOCjJV.js";import"./spinner.component-C7W2nPzY.js";import"./tokens.catalog-DF_6rd51.js";const T=()=>[!1,!0];function B(l,i){if(l&1&&(o(0,"fold-card",7),s(1,"fold-element-title",15),o(2,"p",16),e(3),s(4,"fold-badge",17),t(),o(5,"p",18)(6,"fold-link",19),e(7," Compare plans "),t()(),o(8,"div",20)(9,"button",21),e(10,"Details"),t(),o(11,"button",22),e(12,"Choose"),t()()()),l&2){const a=i.$implicit,n=x();p("surface",a?"accent":"card"),r(),p("icon",n.demo.icon)("title",n.demo.title),r(2),k(" ",n.demo.body," ")}}class c{demo={icon:"company",title:"Studio plan",body:"Everything in Pro, plus shared workspaces and priority rendering."};captureCode=`[data-surface="accent"] {
  color: var(--fold-color-on-primary);
  --_accent-ink: var(--fold-color-on-primary);   /* captured here… */
  --_accent-fill: var(--fold-color-primary);
}
[data-surface="accent"] * {
  --fold-color-text: var(--_accent-ink);          /* …consumed on descendants */
  --fold-color-primary: var(--_accent-ink);       /* fill  → light ink */
  --fold-color-on-primary: var(--_accent-fill);   /* on-fill → the accent */
  /* …surfaces / borders as color-mix of the captured pair… */
}`;overrideCode=`/* a light accent (titan) wants dark ink, not the derived light ramp */
[data-theme="titan"] [data-surface="accent"] {
  --_accent-ink: var(--fold-ref-steel-900);       /* re-point the capture… */
}
[data-theme="titan"] [data-surface="accent"] * {
  --fold-color-text: var(--fold-ref-steel-900);   /* …or a single role directly */
}`;static ɵfac=function(a){return new(a||c)};static ɵcmp=h({type:c,selectors:[["gal-surfaces-page"]],decls:132,vars:3,consts:[["title","surfaces"],["description",""],["titleBadge","","kind","foundation"],["variant","info","icon","info"],["title","Auto-inversion, live","icon","palette"],[1,"gal-body"],[1,"sf-grid"],["separators","header","raisedBands","header",3,"surface"],["title","How it works","icon","fold"],["variant","accent","icon","lightning"],[1,"sf-pre"],["title","Overriding per theme","icon","sliders"],["title","Gotchas","icon","warning"],["variant","warning","icon","info"],[1,"sf-list"],["cardHeader","","variant","title","iconTone","primary",3,"icon","title"],[1,"gal-body",2,"margin","0 0 6px"],["content","Popular","variant","accent"],[1,"gal-body",2,"margin","0"],["href","https://fold.sh3pherd.dev/docs","trailingIcon","globe"],["cardFooter","",2,"display","flex","gap","8px","justify-content","flex-end"],["foldButton","","size","sm","emphasis","outline"],["foldButton","","size","sm"]],template:function(a,n){a&1&&(o(0,"fold-page-layout",0)(1,"p",1),e(2," A "),o(3,"strong"),e(4,"named surface"),t(),e(5," re-points some semantic role tokens for its sub-tree, so any component inside resolves its colours against the region's palette — with "),o(6,"strong"),e(7,"no per-component code"),t(),e(8,". It's stamped with "),o(9,"code"),e(10,'[data-surface="…"]'),t(),e(11," (via the "),o(12,"code"),e(13,"foldSurface"),t(),e(14," directive, or a component's own host binding). Two ship: "),o(15,"code"),e(16,"chrome"),t(),e(17," (app furniture a mixed theme recolours) and "),o(18,"code"),e(19,"accent"),t(),e(20," (an "),o(21,"strong"),e(22,"auto-inverting"),t(),e(23," accent fill). "),t(),s(24,"gal-kind-badge",2),o(25,"fold-callout",3)(26,"strong"),e(27,"The design system isn't a cage — it's a set of relationships."),t(),e(28," Writing your own CSS in a card is always free: raw values don't reference the roles, so a surface never touches them. An "),o(29,"em"),e(30,"override"),t(),e(31," isn't a hack — it re-anchors one "),o(32,"strong"),e(33,"relationship"),t(),e(34," (text ↔ ground ↔ accent) inside a controlled frame, and coherence follows because the ratios are preserved. You speak in roles and gain the adaptation, or you paint a pixel and own it — both live in the same card. "),t(),o(35,"fold-page-section",4)(36,"p",5),e(37," Identical markup in both cards. On the accent one, the icon tile, text, the raised/separated header, the badge, the link and both buttons all read on the accent — because the region re-points the roles they already resolve against, not because the card special-cases any of them. "),t(),o(38,"div",6),v(39,B,13,4,"fold-card",7,y),t()(),o(41,"fold-page-section",8)(42,"fold-callout",9)(43,"strong"),e(44,"Why it can't be a flat override."),t(),e(45," An inverting surface must "),o(46,"em"),e(47,"swap"),t(),e(48," the brand pair — "),o(49,"code"),e(50,"primary"),t(),e(51," becomes the light ink, "),o(52,"code"),e(53,"on-primary"),t(),e(54," becomes the accent. Written on one element that's a CSS custom-property cycle ("),o(55,"code"),e(56,"a: var(b); b: var(a)"),t(),e(57,` → both invalid). It's the wall a naïve "just set color + background" hits the moment you nest a badge, a link, or a solid button. `),t(),o(58,"p",5),e(59," The move: "),o(60,"strong"),e(61,"capture on the surface, invert on the descendants."),t(),e(62," The surface records the accent + its ink into two private vars "),o(63,"em"),e(64,"while the tokens still hold their normal values"),t(),e(65,"; the inverted role-set is applied to descendants from those captures — so a role can reference the pre-inversion value it replaces. No cycle, and every value is a "),o(66,"code"),e(67,"color-mix"),t(),e(68," of the captured pair, so it's "),o(69,"strong"),e(70,"derived, not authored"),t(),e(71,": one definition holds on all five themes, gradation kept in-hue. "),t(),o(72,"pre",10)(73,"code"),e(74),t()(),o(75,"p",5),e(76," An accent card is an "),o(77,"strong"),e(78,"emphasis surface"),t(),e(79,": a mid-bright accent caps white text near 3:1, so the text ramp is compressed and the floor is "),o(80,"strong"),e(81,"AA-large (3:1)"),t(),e(82," — reaching AA-body (4.5) would mean darkening the brand accent, a deliberate no. A WCAG "),o(83,"strong"),e(84,"contrast test"),t(),e(85," resolves every theme's accent and fails the build if the on-accent text drops below its floor. Certified, not eyeballed. "),t()(),o(86,"fold-page-section",11)(87,"p",5),e(88," The derived defaults are good, not sacred. If a theme's accent is light and the light-ink ramp reads thin, override any role by nesting the theme's own selector under the surface — the same seam "),o(89,"code"),e(90,"chrome"),t(),e(91," uses. Re-pointing "),o(92,"code"),e(93,"--_accent-ink"),t(),e(94," / "),o(95,"code"),e(96,"--_accent-fill"),t(),e(97," is the cheapest lever (the whole ramp follows); re-point one "),o(98,"code"),e(99,"--fold-color-*"),t(),e(100," when only that role must move. "),t(),o(101,"pre",10)(102,"code"),e(103),t()(),o(104,"p",5),e(105," Variables only — a theme never names a component's internals. Full write-up in "),o(106,"code"),e(107,"docs/surfaces.md"),t(),e(108,". "),t()(),o(109,"fold-page-section",12)(110,"fold-callout",13)(111,"ul",14)(112,"li")(113,"code"),e(114,'[data-surface="accent"] *'),t(),e(115," touches every descendant — the price of the capture-then-invert split. Fine at card scale; don't wrap huge trees. "),t(),o(116,"li")(117,"strong"),e(118,"Don't nest"),t(),e(119," an accent surface inside another — the inner would re-capture already-inverted values. "),t(),o(120,"li")(121,"strong"),e(122,"One ground per surface."),t(),o(123,"code"),e(124,"surface"),t(),e(125," stays one axis: there is no "),o(126,"code"),e(127,"accent"),t(),e(128," × "),o(129,"code"),e(130,"sunken"),t(),e(131,". "),t()()()()()),a&2&&(r(39),b(_(2,T)),r(35),d(n.captureCode),r(29),d(n.overrideCode))},dependencies:[f,m,w,C,u,F,g,A,S],styles:[`@charset "UTF-8";
/* \`/surfaces\` doc page. Global (ViewEncapsulation.None): the page owns these
   \`sf-\` classes and projects them into fold sections. */
/* Live proof grid: plain vs accent, side by side. */
.sf-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin-top: 12px;
}

/* Code blocks — a sunken slab with the mono ramp. */
.sf-pre {
  margin: 12px 0 0;
  padding: 14px 16px;
  overflow-x: auto;
  border-radius: var(--fold-radius-md);
  border: 1px solid var(--fold-color-border-subtle);
  background: var(--fold-color-surface-sunken);
  font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  font-size: 12px;
  line-height: 1.6;
  color: var(--fold-color-text-secondary);
}

.sf-list {
  margin: 0;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sf-list code {
  font-size: 12px;
}`],encapsulation:2})}export{c as default};
