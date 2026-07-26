import{s as c,y as b,ɵ as h,c as C,b as y,d as o,e,f as a,g as _,h as s,i as x,j as t,m as f,v as w,n as d,k as m,o as P,ae as z,r as p}from"./index-D5P_54_N.js";import{K as L}from"./kind-badge.component-DGQb7W15.js";import{C as O}from"./composed-of.component-CYfI26Uv.js";import{F as k,a as M}from"./listbox.component-FqP33JTe.js";import{FoldSelectComponent as S}from"./select.component-CyrSwy53.js";import"./popover.component-DXJg1Vet.js";import"./popover-trigger.directive-DDlNAnv5.js";import"./input-base.component-BaLQNbbR.js";import"./label.component-D1Z_oVZI.js";import"./input-value-Co_u-z_8.js";const T=()=>["popover","icons"],E=(g,r)=>r.value;function F(g,r){if(g&1&&(o(0,"fold-option",15),_(1,"span",29),o(2,"span",30)(3,"span",31),e(4),a(),o(5,"span",32),e(6),a()()()),g&2){const i=r.$implicit;f("value",i.value)("disabled",i.tone==="off"),t(),z("is-"+i.tone),t(3),m(i.name),t(2),m(i.desc)}}class v{currency=c("EUR");team=c("");teams=[{value:"prod",name:"Production",desc:"Scène & régie",tone:"ok"},{value:"hosp",name:"Hospitality",desc:"Accueil artistes",tone:"ok"},{value:"com",name:"Communication",desc:"Presse & réseaux",tone:"warn"},{value:"sec",name:"Sécurité",desc:"Complet — plus de place",tone:"off"}];teamName=b(()=>this.teams.find(r=>r.value===this.team())?.name??"—");nativeCurrency=c("EUR");sized=c("md");static ɵfac=function(i){return new(i||v)};static ɵcmp=h({type:v,selectors:[["gal-listbox-page"]],decls:113,vars:12,consts:[["title","listbox"],["description",""],["titleBadge","","kind","component"],[3,"ids"],[1,"gal-row","gal-row--wide"],[1,"gal-cell",2,"max-width","320px"],[1,"gal-tag"],["label","Devise","placeholder","Choisir une devise…","hint","Le montant sera converti à l'affichage.",3,"valueChange","value"],["value","EUR"],["value","USD"],["value","GBP"],["value","JPY"],[1,"gal-readout"],[1,"gal-cell",2,"max-width","340px"],["label","Équipe","placeholder","Affecter à une équipe…",3,"valueChange","value"],[3,"value","disabled"],[1,"gal-compare"],[1,"gal-compare-grid"],["label","Devise · natif",3,"valueChange","value"],[1,"gal-note"],["label","Devise · listbox",3,"valueChange","value"],[1,"gal-cell",2,"max-width","200px"],["size","sm","placeholder","Small",3,"valueChange","value"],["value","a"],["value","b"],["size","md","placeholder","Medium",3,"valueChange","value"],["size","lg","placeholder","Large",3,"valueChange","value"],[1,"gal-cell",2,"max-width","220px"],["label","Verrouillé","placeholder","Indisponible",3,"disabled"],["aria-hidden","true",1,"lb-dot"],[1,"lb-row"],[1,"lb-name"],[1,"lb-desc"]],template:function(i,l){i&1&&(o(0,"fold-page-layout",0)(1,"p",1)(2,"code"),e(3,"fold-listbox"),a(),e(4," — a "),o(5,"strong"),e(6,"styleable"),a(),e(7," single-select built on "),o(8,"code"),e(9,"fold-popover"),a(),e(10,". The popover gives it the native top layer, flip/shift positioning, outside-click + "),o(11,"code"),e(12,"Escape"),a(),e(13," dismissal and focus return; on top sits the ARIA select pattern — "),o(14,"code"),e(15,'role="listbox"'),a(),e(16," with "),o(17,"code"),e(18,"aria-activedescendant"),a(),e(19,", full keyboard (↑/↓, "),o(20,"code"),e(21,"Home"),a(),e(22,"/"),o(23,"code"),e(24,"End"),a(),e(25,", type-ahead, "),o(26,"code"),e(27,"Enter"),a(),e(28,") — and Signal-Forms wiring. Reach for it when options need custom rendering the native "),o(29,"code"),e(30,"<select>"),a(),e(31," popup can't give; otherwise "),o(32,"code"),e(33,"fold-select"),a(),e(34," stays the lighter default. "),a(),_(35,"gal-kind-badge",2)(36,"gal-composed-of",3),o(37,"div",4)(38,"div",5)(39,"span",6),e(40,"basic · single-select"),a(),o(41,"fold-listbox",7),s("valueChange",function(n){return p(l.currency,n)||(l.currency=n),n}),o(42,"fold-option",8),e(43,"Euro (€)"),a(),o(44,"fold-option",9),e(45,"US Dollar ($)"),a(),o(46,"fold-option",10),e(47,"Livre sterling (£)"),a(),o(48,"fold-option",11),e(49,"Yen (¥)"),a()(),o(50,"p",12),e(51,"value = "),o(52,"code"),e(53),a()()(),o(54,"div",13)(55,"span",6),e(56,"custom rows · what native can't do"),a(),o(57,"fold-listbox",14),s("valueChange",function(n){return p(l.team,n)||(l.team=n),n}),x(58,F,7,6,"fold-option",15,E),a(),o(60,"p",12),e(61,"équipe = "),o(62,"code"),e(63),a()()()(),o(64,"fold-card",16)(65,"span",6),e(66,"fold-select (native) vs. fold-listbox (styleable)"),a(),o(67,"div",17)(68,"div")(69,"fold-select",18),s("valueChange",function(n){return p(l.nativeCurrency,n)||(l.nativeCurrency=n),n}),o(70,"option",8),e(71,"Euro (€)"),a(),o(72,"option",9),e(73,"US Dollar ($)"),a(),o(74,"option",10),e(75,"Livre sterling (£)"),a()(),o(76,"p",19),e(77," OS-rendered popup — mobile-native, unstyleable, plain text rows. "),a()(),o(78,"div")(79,"fold-listbox",20),s("valueChange",function(n){return p(l.nativeCurrency,n)||(l.nativeCurrency=n),n}),o(80,"fold-option",8),e(81,"Euro (€)"),a(),o(82,"fold-option",9),e(83,"US Dollar ($)"),a(),o(84,"fold-option",10),e(85,"Livre sterling (£)"),a()(),o(86,"p",19),e(87," Same value model — a fully styleable panel, rich rows, one top layer. "),a()()()(),o(88,"div",4)(89,"div",21)(90,"span",6),e(91,"sizes"),a(),o(92,"fold-listbox",22),s("valueChange",function(n){return p(l.sized,n)||(l.sized=n),n}),o(93,"fold-option",23),e(94,"Alpha"),a(),o(95,"fold-option",24),e(96,"Bravo"),a()(),o(97,"fold-listbox",25),s("valueChange",function(n){return p(l.sized,n)||(l.sized=n),n}),o(98,"fold-option",23),e(99,"Alpha"),a(),o(100,"fold-option",24),e(101,"Bravo"),a()(),o(102,"fold-listbox",26),s("valueChange",function(n){return p(l.sized,n)||(l.sized=n),n}),o(103,"fold-option",23),e(104,"Alpha"),a(),o(105,"fold-option",24),e(106,"Bravo"),a()()(),o(107,"div",27)(108,"span",6),e(109,"disabled control"),a(),o(110,"fold-listbox",28)(111,"fold-option",23),e(112,"Alpha"),a()()()()()),i&2&&(t(36),f("ids",w(11,T)),t(5),d("value",l.currency),t(12),m(l.currency()),t(4),d("value",l.team),t(),P(l.teams),t(5),m(l.teamName()),t(6),d("value",l.nativeCurrency),t(10),d("value",l.nativeCurrency),t(13),d("value",l.sized),t(5),d("value",l.sized),t(5),d("value",l.sized),t(8),f("disabled",!0))},dependencies:[L,O,C,y,k,M,S],styles:[`.lb-row[_ngcontent-%COMP%] {
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
