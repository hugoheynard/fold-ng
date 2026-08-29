import{K as f}from"./kind-badge.component-Cza8zYSX.js";import{C as m}from"./composed-of.component-CCmv4GMQ.js";import{ɵ as h,b as u,c as g,d as t,e,f as n,g as i,i as b,T as v,j as a,m as d,U as _,o as y,k as s}from"./index-CLSi-FzM.js";import{FoldInfoComponent as w}from"./info.component-BA-tiiGg.js";import{FoldInputComponent as x}from"./input.component-N3QQ81AK.js";import{FoldNumberInputComponent as C}from"./number-input.component-BdZxZXUN.js";import{FoldPageSectionComponent as M}from"./page-section.component-BSAOABxi.js";import"./common-labels-DfybcD8W.js";import"./popover.component-C9jEj0jy.js";import"./auto-update-_srfpL1Q.js";import"./popover-trigger.directive-Cw82orr-.js";import"./input-base.component-CtXalNB3.js";import"./label.component-C_R-7C9D.js";import"./input-value-DCGlOvqF.js";import"./repeat-press.directive-aFICKU0N.js";const I=()=>["popover"];function P(p,r){if(p&1&&(t(0,"span",15)(1,"code"),e(2),n(),i(3,"fold-info",21),n()),p&2){const o=r.$implicit;a(2),s(o),a(),d("placement",o)("label","More information — "+o)("text","This panel opens at "+o+".")}}class c{placements=["bottom-end","bottom-start","top-end","right-start"];standaloneCode=`<!-- anywhere: a card corner, a table header, a metric label -->
<fold-info
  label="More information about monthly recurring revenue"
  text="What the active subscriptions bill in a month, at today's prices." />`;fieldCode=`<!-- on a labelled field: the same primitive, via the info input -->
<fold-input
  label="Lead time (hours)"
  hint="In hours"
  info="The time you need to get organised: nothing is bookable before it."
  infoLabel="More information about the lead time" />`;static ɵfac=function(o){return new(o||c)};static ɵcmp=h({type:c,selectors:[["gal-info-page"]],decls:45,vars:7,consts:[["title","info"],["description",""],["titleBadge","","kind","component"],[3,"ids"],["title","Standalone","description","Where there is no field to hang off — a metric label, a card corner, a table header."],["surface","sunken",2,"--fold-card-padding","20px"],[1,"inf-metric"],["label","More information about monthly recurring revenue","text","What the active subscriptions bill in a month, at today's prices — not what was actually collected."],["label","More information about the activation rate","text","The share of accounts that placed a first order within 30 days of signing up."],["title","On a field — the info input","description","Every labelled control carries an info input; it renders this same component at the end of the label line. hint and info compose: the short line under the control, the why behind the i."],[1,"inf-fields"],["label","Lead time (hours)","hint","In hours","info","The time you need to get organised: nothing is bookable in the hours ahead. It is also the limit past which a client can no longer cancel on their own.","infoLabel","More information about the lead time",3,"min","max","value"],["label","Invoice reference","info","Printed on the invoice and used to reconcile the payment — it must match the reference your accounting exports.","infoLabel","More information about the invoice reference","placeholder","INV-2026-0142"],["title","Placement","description","bottom-end by default: the trigger usually sits at the end of a label line or a card header, where a panel growing further outward would leave the viewport."],[1,"inf-placements"],[1,"inf-placement"],["title","Usage","icon","code"],[1,"code-block"],[1,"code-top"],[1,"code-lang"],[1,"code-pre"],[3,"placement","label","text"]],template:function(o,l){o&1&&(t(0,"fold-page-layout",0)(1,"p",1),e(2," The small "),t(3,"code"),e(4,"i"),n(),e(5," that answers “what is this?”. A quiet round trigger that reveals a sentence or two in a "),t(6,"code"),e(7,"fold-popover"),n(),e(8," — the affordance for explanation "),t(9,"strong"),e(10,"worth reading once and not worth taking permanent space"),n(),e(11,". A click, not a hover: hover-only help is unreachable on a touch screen. "),n(),i(12,"gal-kind-badge",2)(13,"gal-composed-of",3),t(14,"fold-page-section",4)(15,"fold-card",5)(16,"p",6),e(17," Monthly recurring revenue "),i(18,"fold-info",7),n(),t(19,"p",6),e(20," Activation rate "),i(21,"fold-info",8),n()()(),t(22,"fold-page-section",9)(23,"div",10),i(24,"fold-number-input",11)(25,"fold-input",12),n()(),t(26,"fold-page-section",13)(27,"div",14),b(28,P,4,4,"span",15,v),n()(),t(30,"fold-page-section",16)(31,"div",17)(32,"div",18)(33,"span",19),e(34,"html · standalone"),n()(),t(35,"pre",20)(36,"code"),e(37),n()()(),t(38,"div",17)(39,"div",18)(40,"span",19),e(41,"html · on a field"),n()(),t(42,"pre",20)(43,"code"),e(44),n()()()()()),o&2&&(a(13),d("ids",_(6,I)),a(11),d("min",0)("max",720)("value",24),a(4),y(l.placements),a(9),s(l.standaloneCode),a(7),s(l.fieldCode))},dependencies:[f,m,u,w,x,C,g,M],styles:[`@charset "UTF-8";

[_nghost-%COMP%] {
  display: block;
}


.inf-metric[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--fold-space-xs);
  margin: 0 0 var(--fold-space-sm);
  font-size: var(--fold-text-sm);
  font-weight: var(--fold-weight-semibold);
}

.inf-metric[_ngcontent-%COMP%]:last-child {
  margin-bottom: 0;
}

.inf-fields[_ngcontent-%COMP%] {
  display: grid;
  gap: var(--fold-space-lg);
  max-width: 26rem;
}

.inf-placements[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fold-space-xl);
}

.inf-placement[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: var(--fold-space-xs);
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
}`]})}export{c as default};
