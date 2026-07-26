import{K as r}from"./kind-badge.component-CmO85UOV.js";import{ɵ as f,c as p,a as c,F as m,d as e,g as t,e as o,f as l,j as d,m as n}from"./index-xwcY2TyU.js";import{FoldFieldComponent as g}from"./field.component-Bo8ECd67.js";import{FoldFieldListComponent as u}from"./field-list.component-DUvq6vCg.js";import{FoldStatusBadgeComponent as h}from"./status-badge.component-CeeFpnq2.js";import{FoldLinkComponent as b}from"./link.component-CLBOym1R.js";class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=f({type:i,selectors:[["gal-field-page"]],decls:37,vars:3,consts:[["fluid","","title","field · field-list","description","The read-only half of a record — a dl/dt/dd list of label/value pairs. The display counterpart of fold-input."],["titleBadge","","kind","component"],[1,"gal-stack"],[1,"gal-cell"],[1,"gal-tag"],[1,"fld-demo"],["label","Contract type"],["label","Job title"],["label","End date",3,"empty"],["label","Notice","placeholder","Non renseigné",3,"empty"],["label","Status"],["status","active","label","Actif"],["label","Tags"],["content","lead","variant","info"],["content","urgent","variant","warning"],["label","Contact"],["name","team",3,"size"],["href","#field"],[1,"fld-narrow"],["label","Type"],["label","Start"]],template:function(a,v){a&1&&(e(0,"fold-page-layout",0),t(1,"gal-kind-badge",1),e(2,"div",2)(3,"div",3)(4,"span",4),o(5,"basic recap · [empty] placeholder"),l(),e(6,"div",5)(7,"fold-field-list")(8,"fold-field",6),o(9,"CDI"),l(),e(10,"fold-field",7),o(11,"Sound engineer"),l(),t(12,"fold-field",8)(13,"fold-field",9),l()()(),e(14,"div",3)(15,"span",4),o(16,"rich values · chips, links, icons"),l(),e(17,"div",5)(18,"fold-field-list")(19,"fold-field",10),t(20,"fold-status-badge",11),l(),e(21,"fold-field",12),t(22,"fold-badge",13)(23,"fold-badge",14),l(),e(24,"fold-field",15),t(25,"fold-icon",16),e(26,"fold-link",17),o(27,"Marc Machine"),l()()()()(),e(28,"div",3)(29,"span",4),o(30,"narrow rail · shrink the label column"),l(),e(31,"div",5)(32,"fold-field-list",18)(33,"fold-field",19),o(34,"CDI"),l(),e(35,"fold-field",20),o(36,"12 Mar 2026"),l()()()()()()),a&2&&(d(12),n("empty",!0),d(),n("empty",!0),d(12),n("size",16))},dependencies:[r,p,g,u,h,c,m,b],styles:[`/* fold-field-list demos: a light surface framing (the list host is
   display:contents, so the frame lives on this wrapper, not the component). */
.fld-demo {
  max-width: 420px;
  padding: 16px 18px;
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-card);
  border: 1px solid var(--fold-color-border-subtle);
}

/* Custom props inherit through the display:contents host down to the <dl>. */
.fld-narrow {
  --fold-field-list-label-width: 72px;
}`],encapsulation:2})}export{i as default};
