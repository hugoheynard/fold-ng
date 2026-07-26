import{s as c,y as h,ɵ as b,c as C,b as y,d as o,e,f as a,g as _,h as r,i as x,j as t,m as f,v as P,n as s,k as m,o as w,l as z,ae as k,r as d}from"./index-DGmzNxeL.js";import{K as L}from"./kind-badge.component-C9TvtU0Z.js";import{C as M}from"./composed-of.component-BJwhslwr.js";import{FoldListboxComponent as O}from"./listbox.component-C2lWvO3f.js";import{FoldMultiselectComponent as S}from"./multiselect.component-DxJXMTku.js";import{F as E}from"./option.component-B0CEHlcB.js";import{FoldSelectComponent as F}from"./select.component-CKl1lJpr.js";import"./popover.component-BwkYwCvA.js";import"./popover-trigger.directive-DnDUnJ5k.js";import"./input-base.component-Bf6l7GBg.js";import"./label.component-BZfpAIZo.js";import"./listbox-nav-Ca7Bv6ba.js";import"./input-value-Co_u-z_8.js";const T=()=>["popover","icons"],A=(g,p)=>p.value;function B(g,p){if(g&1&&(o(0,"fold-option",15),_(1,"span",35),o(2,"span",36)(3,"span",37),e(4),a(),o(5,"span",38),e(6),a()()()),g&2){const i=p.$implicit;f("value",i.value)("disabled",i.tone==="off"),t(),k("is-"+i.tone),t(3),m(i.name),t(2),m(i.desc)}}class v{currency=c("EUR");team=c("");teams=[{value:"prod",name:"Production",desc:"Scène & régie",tone:"ok"},{value:"hosp",name:"Hospitality",desc:"Accueil artistes",tone:"ok"},{value:"com",name:"Communication",desc:"Presse & réseaux",tone:"warn"},{value:"sec",name:"Sécurité",desc:"Complet — plus de place",tone:"off"}];teamName=h(()=>this.teams.find(p=>p.value===this.team())?.name??"—");genres=c(["rock","jazz"]);nativeCurrency=c("EUR");sized=c("md");static ɵfac=function(i){return new(i||v)};static ɵcmp=b({type:v,selectors:[["gal-listbox-page"]],decls:132,vars:14,consts:[["title","listbox"],["description",""],["titleBadge","","kind","component"],[3,"ids"],[1,"gal-row","gal-row--wide"],[1,"gal-cell",2,"max-width","320px"],[1,"gal-tag"],["label","Devise","placeholder","Choisir une devise…","hint","Le montant sera converti à l'affichage.",3,"valueChange","value"],["value","EUR"],["value","USD"],["value","GBP"],["value","JPY"],[1,"gal-readout"],[1,"gal-cell",2,"max-width","340px"],["label","Équipe","placeholder","Affecter à une équipe…",3,"valueChange","value"],[3,"value","disabled"],["label","Genres","placeholder","Choisir plusieurs genres…","hint","Enter/Espace ou clic pour cocher ; le panneau reste ouvert.",3,"valueChange","value"],["value","rock"],["value","jazz"],["value","soul"],["value","funk"],["value","electro"],[1,"gal-compare"],[1,"gal-compare-grid"],["label","Devise · natif",3,"valueChange","value"],[1,"gal-note"],["label","Devise · listbox",3,"valueChange","value"],[1,"gal-cell",2,"max-width","200px"],["size","sm","placeholder","Small",3,"valueChange","value"],["value","a"],["value","b"],["size","md","placeholder","Medium",3,"valueChange","value"],["size","lg","placeholder","Large",3,"valueChange","value"],[1,"gal-cell",2,"max-width","220px"],["label","Verrouillé","placeholder","Indisponible",3,"disabled"],["aria-hidden","true",1,"lb-dot"],[1,"lb-row"],[1,"lb-name"],[1,"lb-desc"]],template:function(i,n){i&1&&(o(0,"fold-page-layout",0)(1,"p",1)(2,"code"),e(3,"fold-listbox"),a(),e(4," — a "),o(5,"strong"),e(6,"styleable"),a(),e(7," single-select built on "),o(8,"code"),e(9,"fold-popover"),a(),e(10,". The popover gives it the native top layer, flip/shift positioning, outside-click + "),o(11,"code"),e(12,"Escape"),a(),e(13," dismissal and focus return; on top sits the ARIA select pattern — "),o(14,"code"),e(15,'role="listbox"'),a(),e(16," with "),o(17,"code"),e(18,"aria-activedescendant"),a(),e(19,", full keyboard (↑/↓, "),o(20,"code"),e(21,"Home"),a(),e(22,"/"),o(23,"code"),e(24,"End"),a(),e(25,", type-ahead, "),o(26,"code"),e(27,"Enter"),a(),e(28,") — and Signal-Forms wiring. Reach for it when options need custom rendering the native "),o(29,"code"),e(30,"<select>"),a(),e(31," popup can't give; otherwise "),o(32,"code"),e(33,"fold-select"),a(),e(34," stays the lighter default. "),a(),_(35,"gal-kind-badge",2)(36,"gal-composed-of",3),o(37,"div",4)(38,"div",5)(39,"span",6),e(40,"basic · single-select"),a(),o(41,"fold-listbox",7),r("valueChange",function(l){return d(n.currency,l)||(n.currency=l),l}),o(42,"fold-option",8),e(43,"Euro (€)"),a(),o(44,"fold-option",9),e(45,"US Dollar ($)"),a(),o(46,"fold-option",10),e(47,"Livre sterling (£)"),a(),o(48,"fold-option",11),e(49,"Yen (¥)"),a()(),o(50,"p",12),e(51,"value = "),o(52,"code"),e(53),a()()(),o(54,"div",13)(55,"span",6),e(56,"custom rows · what native can't do"),a(),o(57,"fold-listbox",14),r("valueChange",function(l){return d(n.team,l)||(n.team=l),l}),x(58,B,7,6,"fold-option",15,A),a(),o(60,"p",12),e(61,"équipe = "),o(62,"code"),e(63),a()()()(),o(64,"div",4)(65,"div",13)(66,"span",6),e(67,"fold-multiselect · toggle, stays open"),a(),o(68,"fold-multiselect",16),r("valueChange",function(l){return d(n.genres,l)||(n.genres=l),l}),o(69,"fold-option",17),e(70,"Rock"),a(),o(71,"fold-option",18),e(72,"Jazz"),a(),o(73,"fold-option",19),e(74,"Soul"),a(),o(75,"fold-option",20),e(76,"Funk"),a(),o(77,"fold-option",21),e(78,"Électro"),a()(),o(79,"p",12),e(80," value = "),o(81,"code"),e(82),a()()()(),o(83,"fold-card",22)(84,"span",6),e(85,"fold-select (native) vs. fold-listbox (styleable)"),a(),o(86,"div",23)(87,"div")(88,"fold-select",24),r("valueChange",function(l){return d(n.nativeCurrency,l)||(n.nativeCurrency=l),l}),o(89,"option",8),e(90,"Euro (€)"),a(),o(91,"option",9),e(92,"US Dollar ($)"),a(),o(93,"option",10),e(94,"Livre sterling (£)"),a()(),o(95,"p",25),e(96," OS-rendered popup — mobile-native, unstyleable, plain text rows. "),a()(),o(97,"div")(98,"fold-listbox",26),r("valueChange",function(l){return d(n.nativeCurrency,l)||(n.nativeCurrency=l),l}),o(99,"fold-option",8),e(100,"Euro (€)"),a(),o(101,"fold-option",9),e(102,"US Dollar ($)"),a(),o(103,"fold-option",10),e(104,"Livre sterling (£)"),a()(),o(105,"p",25),e(106," Same value model — a fully styleable panel, rich rows, one top layer. "),a()()()(),o(107,"div",4)(108,"div",27)(109,"span",6),e(110,"sizes"),a(),o(111,"fold-listbox",28),r("valueChange",function(l){return d(n.sized,l)||(n.sized=l),l}),o(112,"fold-option",29),e(113,"Alpha"),a(),o(114,"fold-option",30),e(115,"Bravo"),a()(),o(116,"fold-listbox",31),r("valueChange",function(l){return d(n.sized,l)||(n.sized=l),l}),o(117,"fold-option",29),e(118,"Alpha"),a(),o(119,"fold-option",30),e(120,"Bravo"),a()(),o(121,"fold-listbox",32),r("valueChange",function(l){return d(n.sized,l)||(n.sized=l),l}),o(122,"fold-option",29),e(123,"Alpha"),a(),o(124,"fold-option",30),e(125,"Bravo"),a()()(),o(126,"div",33)(127,"span",6),e(128,"disabled control"),a(),o(129,"fold-listbox",34)(130,"fold-option",29),e(131,"Alpha"),a()()()()()),i&2&&(t(36),f("ids",P(13,T)),t(5),s("value",n.currency),t(12),m(n.currency()),t(4),s("value",n.team),t(),w(n.teams),t(5),m(n.teamName()),t(5),s("value",n.genres),t(14),z("[",n.genres().join(", "),"]"),t(6),s("value",n.nativeCurrency),t(10),s("value",n.nativeCurrency),t(13),s("value",n.sized),t(5),s("value",n.sized),t(5),s("value",n.sized),t(8),f("disabled",!0))},dependencies:[L,M,C,y,O,S,E,F],styles:[`.lb-row[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  line-height: 1.25;
}

.lb-name[_ngcontent-%COMP%] {
  font-weight: 600;
}

.lb-desc[_ngcontent-%COMP%] {
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
}

.lb-dot[_ngcontent-%COMP%] {
  flex: none;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: var(--fold-radius-round);
  background: var(--fold-color-text-muted);
}
.lb-dot.is-ok[_ngcontent-%COMP%] {
  background: var(--fold-color-success);
}
.lb-dot.is-warn[_ngcontent-%COMP%] {
  background: var(--fold-color-warning);
}
.lb-dot.is-off[_ngcontent-%COMP%] {
  background: var(--fold-color-text-faded);
}

.gal-readout[_ngcontent-%COMP%] {
  margin-top: 0.6rem;
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-secondary);
}

.gal-compare[_ngcontent-%COMP%] {
  margin-top: 1.5rem;
  padding: 1rem 1.15rem;
}

.gal-compare-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 0.75rem;
}

.gal-note[_ngcontent-%COMP%] {
  margin-top: 0.5rem;
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
}`]})}export{v as default};
