import{T as b,ad as C,x as T,z as k,P as D,s as m,y as F,ɵ as O,c as B,b as E,d as t,e,f as o,g as y,i as P,I as M,C as d,u as R,j as l,m as _,v as $,o as h,J as z,B as w,k as x,q as c,D as I,l as j,E as f,H as g}from"./index-BEIV9PYb.js";import{K as S}from"./kind-badge.component-CJFnOz9G.js";import{C as L}from"./composed-of.component-tgXmXnFw.js";import{D as V}from"./playground.component-BKdTu2o4.js";import{FoldButtonComponent as A}from"./button.component-C_HBIBjL.js";import{FoldButtonIconComponent as H}from"./button-icon.component-DjTcUtvz.js";import{FoldPopoverComponent as G}from"./popover.component-BM3-4OdZ.js";import{FoldDropdownComponent as K}from"./dropdown.component-BmOt-whr.js";import{FoldDropdownItemComponent as q}from"./dropdown-item.component-sykEclms.js";import"./element-title.component-L1CEe3YJ.js";import"./page-section.component-BdayXlte.js";import"./slider.component-Cv9t0JvW.js";import"./input-value-Co_u-z_8.js";import"./spinner.component-BIW25otX.js";import"./tokens.catalog-DF_6rd51.js";class u{el=b(C);haspopup=T("dialog",{alias:"foldPopoverTrigger",transform:r=>r==="menu"||r==="listbox"||r==="true"?r:"dialog"});static ɵfac=function(i){return new(i||u)};static ɵdir=k({type:u,selectors:[["","foldPopoverTrigger",""]],hostVars:1,hostBindings:function(i,n){i&2&&D("foldpopovertrigger",n.haspopup())},inputs:{haspopup:[1,"foldPopoverTrigger","haspopup"]}})}const J=()=>["button","button-icon","icons"],N=(p,r)=>r.id;function Q(p,r){if(p&1){const i=w();t(0,"li",9)(1,"span"),e(2),o(),t(3,"fold-dropdown",31),y(4,"fold-button-icon",32),t(5,"fold-dropdown-item",27),d("selected",function(){const a=f(i).$implicit,s=c();return g(s.act("Rename",a))}),e(6," Rename "),o(),t(7,"fold-dropdown-item",28),d("selected",function(){const a=f(i).$implicit,s=c();return g(s.act("Duplicate",a))}),e(8," Duplicate "),o(),t(9,"fold-dropdown-item",30),d("selected",function(){const a=f(i).$implicit,s=c();return g(s.act("Delete",a))}),e(10," Delete "),o()()()}if(p&2){const i=r.$implicit;l(2),x(i.name)}}function U(p,r){if(p&1){const i=w();t(0,"li",10)(1,"button",33),d("click",function(){f(i);const a=c();return g(a.resetRows())}),e(2," Reset list "),o()()}}function W(p,r){p&1&&(t(0,"span",11),e(1),o()),p&2&&(l(),x(r))}function X(p,r){if(p&1){const i=w();t(0,"button",34),d("click",function(){const a=f(i).$implicit,s=c();return g(s.pgPlacement.set(a))}),e(1),o()}if(p&2){const i=r.$implicit,n=c();I("is-on",n.pgPlacement()===i),l(),j(" ",i," ")}}class v{rows=m([{id:"r1",name:"Spring tour"},{id:"r2",name:"Summer festival"},{id:"r3",name:"Gala"}]);log=m(null);act(r,i){this.log.set(`${r} · ${i.name}`),r==="Delete"&&this.rows.update(n=>n.filter(a=>a.id!==i.id))}resetRows(){this.rows.set([{id:"r1",name:"Spring tour"},{id:"r2",name:"Summer festival"},{id:"r3",name:"Gala"}]),this.log.set(null)}notify=m(!0);digest=m(!1);placements=["bottom-start","bottom","bottom-end","top-start","top-end","right","left"];pgPlacement=m("bottom-start");playgroundCode=F(()=>`<fold-dropdown placement="${this.pgPlacement()}" ariaLabel="Actions">
  <fold-button-icon icon="more-vertical" tooltip="Actions" foldPopoverTrigger="menu" />
  <fold-dropdown-item icon="edit" (selected)="rename()">Rename</fold-dropdown-item>
  <fold-dropdown-item icon="copy" (selected)="duplicate()">Duplicate</fold-dropdown-item>
  <fold-dropdown-item tone="danger" icon="bin" (selected)="remove()">Delete</fold-dropdown-item>
</fold-dropdown>`);static ɵfac=function(i){return new(i||v)};static ɵcmp=O({type:v,selectors:[["gal-popover-page"]],decls:80,vars:9,consts:[["title","popover"],["description",""],["titleBadge","","kind","component"],[3,"ids"],[1,"gal-row","gal-row--wide"],[1,"gal-cell",2,"max-width","380px"],[1,"gal-tag"],["surface","sunken",2,"--fold-card-padding","12px"],[1,"pop-list"],[1,"pop-item"],[1,"pop-empty"],[1,"pop-readout"],[1,"gal-cell",2,"max-width","320px"],["surface","sunken",2,"--fold-card-padding","20px"],["placement","bottom-start","arrow",""],["foldButton","","emphasis","outline","intent","neutral","foldPopoverTrigger",""],["foldPopoverPanel","",1,"pop-panel"],[1,"pop-panel-title"],[1,"pop-check"],["type","checkbox",3,"change","checked"],[3,"code","responsive"],["params","",1,"np-field"],[1,"ss-seg","ss-seg--wrap"],["type","button",3,"is-on"],[1,"pop-stage"],["ariaLabel","Demo actions",3,"placement"],["foldButton","","foldPopoverTrigger","menu"],["icon","edit",3,"selected"],["icon","copy",3,"selected"],["icon","download",3,"selected"],["tone","danger","icon","bin",3,"selected"],["ariaLabel","Row actions","placement","bottom-end"],["icon","more-vertical","size","sm","tooltip","Actions","foldPopoverTrigger","menu"],["foldButton","","emphasis","soft","size","sm",3,"click"],["type","button",3,"click"]],template:function(i,n){if(i&1&&(t(0,"fold-page-layout",0)(1,"p",1),e(2," fold-popover — an anchored floating layer rendered in the native "),t(3,"strong"),e(4,"top layer"),o(),e(5," (via the "),t(6,"code"),e(7,"popover"),o(),e(8," attribute, so it escapes "),t(9,"code"),e(10,"overflow: hidden"),o(),e(11," and every "),t(12,"code"),e(13,"z-index"),o(),e(14,") and positioned against a projected trigger with a dependency-free flip/shift engine. Controlled through "),t(15,"code"),e(16,"[(open)]"),o(),e(17,"; dismissal (outside-click + "),t(18,"code"),e(19,"Escape"),o(),e(20,") and focus return are built in. "),t(21,"code"),e(22,"fold-dropdown"),o(),e(23," is the actions menu on top — "),t(24,"code"),e(25,'role="menu"'),o(),e(26,", ↑/↓ roving, "),t(27,"code"),e(28,"Home"),o(),e(29,"/"),t(30,"code"),e(31,"End"),o(),e(32,", type-ahead. "),o(),y(33,"gal-kind-badge",2)(34,"gal-composed-of",3),t(35,"div",4)(36,"div",5)(37,"span",6),e(38,"fold-dropdown · row actions (keyboard-navigable)"),o(),t(39,"fold-card",7)(40,"ul",8),P(41,Q,11,1,"li",9,N,!1,U,3,0,"li",10),o()(),M(44,W,2,1,"span",11),o(),t(45,"div",12)(46,"span",6),e(47,"fold-popover · content panel"),o(),t(48,"fold-card",13)(49,"fold-popover",14)(50,"button",15),e(51," Notifications "),o(),t(52,"div",16)(53,"p",17),e(54,"Email me when…"),o(),t(55,"label",18)(56,"input",19),d("change",function(){return n.notify.set(!n.notify())}),o(),e(57," a show is published "),o(),t(58,"label",18)(59,"input",19),d("change",function(){return n.digest.set(!n.digest())}),o(),e(60," weekly digest "),o()()()()()(),t(61,"dev-playground",20)(62,"div",21)(63,"span",6),e(64,"placement"),o(),t(65,"div",22),P(66,X,2,3,"button",23,R),o()(),t(68,"div",24)(69,"fold-dropdown",25)(70,"button",26),e(71,"Open menu ▾"),o(),t(72,"fold-dropdown-item",27),d("selected",function(){return n.log.set("Rename")}),e(73," Rename "),o(),t(74,"fold-dropdown-item",28),d("selected",function(){return n.log.set("Duplicate")}),e(75," Duplicate "),o(),t(76,"fold-dropdown-item",29),d("selected",function(){return n.log.set("Export")}),e(77," Export "),o(),t(78,"fold-dropdown-item",30),d("selected",function(){return n.log.set("Delete")}),e(79," Delete "),o()()()()()),i&2){let a;l(34),_("ids",$(8,J)),l(7),h(n.rows()),l(3),z((a=n.log())?44:-1,a),l(12),_("checked",n.notify()),l(3),_("checked",n.digest()),l(2),_("code",n.playgroundCode())("responsive",!1),l(5),h(n.placements),l(3),_("placement",n.pgPlacement())}},dependencies:[S,L,V,B,E,A,H,G,u,K,q],styles:[`.pop-list[_ngcontent-%COMP%] {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.pop-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--fold-space-md);
  min-height: 38px;
  padding: 4px 6px 4px 12px;
  border-radius: var(--fold-radius-sm);
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-secondary);
}

.pop-item[_ngcontent-%COMP%]:hover {
  background: var(--fold-color-surface-hover);
}

.pop-empty[_ngcontent-%COMP%] {
  padding: 8px 12px;
}

.pop-readout[_ngcontent-%COMP%] {
  display: inline-block;
  margin-top: 8px;
  font-size: var(--fold-text-xs);
  color: var(--fold-color-primary-text);
  font-variant-numeric: tabular-nums;
}


.pop-panel[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--fold-space-sm);
  padding: var(--fold-space-md);
  min-width: 14rem;
}

.pop-panel-title[_ngcontent-%COMP%] {
  margin: 0 0 2px;
  font-size: var(--fold-text-xs);
  font-weight: 600;
  color: var(--fold-color-text-muted);
}

.pop-check[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--fold-space-sm);
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text);
}


.pop-stage[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 220px;
  padding: var(--fold-space-xl);
}

.ss-seg--wrap[_ngcontent-%COMP%] {
  flex-wrap: wrap;
}`]})}export{v as default};
