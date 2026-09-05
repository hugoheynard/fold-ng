import{K as w}from"./kind-badge.component-DMWmo4eK.js";import{s as c,ɵ as F,c as k,F as T,d as t,e as i,f as a,g as C,B as m,w as P,j as l,m as p,x as L,l as K,E as h,h as g,q as s,n as v,N as f,r as y,O as _,a3 as x}from"./index-BUdcCUHG.js";import{FoldNavLayoutComponent as S}from"./nav-layout.component-BEqPhWec.js";import{FoldPageSectionComponent as O}from"./page-section.component-6d-bY57u.js";import{FoldViewNavComponent as E}from"./view-nav.component-Dw9FQgc9.js";import{FoldInputComponent as N}from"./input.component-CGQlDsGW.js";import{FoldChoiceRowComponent as B}from"./choice-row.component-B_bn4S9F.js";import"./fold-at-UQA3KlCQ.js";import"./breakpoints-J4fapboB.js";import"./nav-layout.context-C5UM6ioJ.js";import"./tab-tooltip.directive-BRuIrPKf.js";import"./auto-update-_srfpL1Q.js";import"./input-base.component-7KIBaTu2.js";import"./info.component-Bxcc1uQ4.js";import"./common-labels-CFpYh6_s.js";import"./popover.component-BpGXqwdR.js";import"./popover-trigger.directive-Dr3VcUZe.js";import"./label.component-C9sS0Q0P.js";import"./input-value-DCGlOvqF.js";function A(d,u){if(d&1){const e=h();t(0,"fold-page-section",8)(1,"fold-input",15),g("valueChange",function(o){f(e);const n=s();return y(n.fName,o)||(n.fName=o),_(o)}),a(),t(2,"fold-input",16),g("valueChange",function(o){f(e);const n=s();return y(n.fEmail,o)||(n.fEmail=o),_(o)}),a(),t(3,"div",17)(4,"label"),i(5,"Role"),a(),t(6,"fold-choice-row",18),m("selected",function(o){f(e);const n=s();return _(n.fRole.set(o))}),a()(),t(7,"div",17)(8,"label",19),i(9,"Bio"),a(),t(10,"textarea",20,0),m("input",function(){f(e);const o=x(11),n=s();return _(n.fBio.set(o.value))}),a()()()}if(d&2){const e=s();l(),v("value",e.fName),l(),v("value",e.fEmail),l(4),p("options",e.roleOptions)("activeKey",e.fRole()),l(4),p("value",e.fBio())}}function R(d,u){if(d&1){const e=h();t(0,"fold-page-section",9)(1,"fold-input",21),g("valueChange",function(o){f(e);const n=s();return y(n.fUsername,o)||(n.fUsername=o),_(o)}),a(),t(2,"div",17)(3,"label",22),i(4,"Language"),a(),t(5,"select",23,1),m("change",function(){f(e);const o=x(6),n=s();return _(n.fLang.set(o.value))}),t(7,"option",24),i(8,"Français"),a(),t(9,"option",25),i(10,"English"),a(),t(11,"option",26),i(12,"Español"),a()()(),t(13,"div",17)(14,"label"),i(15,"Two-factor auth"),a(),t(16,"fold-choice-row",18),m("selected",function(o){f(e);const n=s();return _(n.fTwoFactor.set(o))}),a(),t(17,"span",27),i(18,"Adds a second step at sign-in."),a()()()}if(d&2){const e=s();l(),v("value",e.fUsername),l(4),p("value",e.fLang()),l(11),p("options",e.onOff)("activeKey",e.fTwoFactor())}}function U(d,u){if(d&1){const e=h();t(0,"fold-page-section",10)(1,"div",17)(2,"label"),i(3,"Email digest"),a(),t(4,"fold-choice-row",18),m("selected",function(o){f(e);const n=s();return _(n.fDigest.set(o))}),a()(),t(5,"div",17)(6,"label"),i(7,"Push"),a(),t(8,"fold-choice-row",18),m("selected",function(o){f(e);const n=s();return _(n.fPush.set(o))}),a(),t(9,"span",27),i(10,"Browser notifications on this device."),a()()()}if(d&2){const e=s();l(4),p("options",e.digestOptions)("activeKey",e.fDigest()),l(4),p("options",e.onOff)("activeKey",e.fPush())}}class b{formTabs=[{key:"profile",label:"Profile"},{key:"account",label:"Account"},{key:"notifications",label:"Notifications",badge:2}];formTab=c("profile");fName=c("Clément Aubry");fEmail=c("clement@sh3pherd.dev");fRole=c("manager");fBio=c("");fUsername=c("caubry");fLang=c("fr");fTwoFactor=c("off");fDigest=c("daily");fPush=c("on");roleOptions=[{key:"manager",label:"Manager"},{key:"member",label:"Member"},{key:"guest",label:"Guest"}];onOff=[{key:"off",label:"Off"},{key:"on",label:"On"}];digestOptions=[{key:"off",label:"Off"},{key:"daily",label:"Daily"},{key:"weekly",label:"Weekly"}];formSaved=c(!1);saveForm(){this.formSaved.set(!0),setTimeout(()=>this.formSaved.set(!1),1500)}static ɵfac=function(e){return new(e||b)};static ɵcmp=F({type:b,selectors:[["gal-form-layout-page"]],decls:16,vars:5,consts:[["fb",""],["fl",""],["title","form layout"],["description",""],["titleBadge","","kind","component"],["placement","side"],["tabNav","","activeStyle","fill",3,"activeKeyChange","items","activeKey"],[1,"gal-stack"],["surface","card","stack","","title","Profile","description","Public identity."],["surface","card","stack","","title","Account","description","Sign-in + preferences."],["surface","card","stack","","title","Notifications","description","How we reach you."],[1,"form-actions"],["type","button",1,"btn-ghost"],["type","button",1,"btn-primary",3,"click"],["size","sm",3,"name"],["label","Full name",3,"valueChange","value"],["label","Email","type","email",3,"valueChange","value"],[1,"field"],[3,"selected","options","activeKey"],["for","f-bio"],["id","f-bio","rows","3","placeholder","A short bio…",3,"input","value"],["label","Username",3,"valueChange","value"],["for","f-lang"],["id","f-lang",3,"change","value"],["value","fr"],["value","en"],["value","es"],[1,"field-hint"]],template:function(e,r){if(e&1&&(t(0,"fold-page-layout",2)(1,"p",3),i(2," A vertical tab-nav as the section rail, driving a settings-style form: fold-page-section groups the fields, fold-input handles the text fields, fold-choice-row the segmented selects, and native select/textarea stay native. "),a(),C(3,"gal-kind-badge",4),t(4,"fold-nav-layout",5)(5,"fold-view-nav",6),m("activeKeyChange",function(n){return r.formTab.set(n)}),a(),t(6,"div",7),P(7,A,12,5,"fold-page-section",8)(8,R,19,4,"fold-page-section",9)(9,U,11,4,"fold-page-section",10),t(10,"div",11)(11,"button",12),i(12,"Cancel"),a(),t(13,"button",13),m("click",function(){return r.saveForm()}),C(14,"fold-icon",14),i(15),a()()()()()),e&2){let o;l(5),p("items",r.formTabs)("activeKey",r.formTab()),l(2),L((o=r.formTab())==="profile"?7:o==="account"?8:o==="notifications"?9:-1),l(7),p("name",r.formSaved()?"check-circle":"check"),l(),K(" ",r.formSaved()?"Saved":"Save changes"," ")}},dependencies:[w,k,S,O,E,N,B,T],styles:[`.field-hint {
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.btn-ghost,
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 16px;
  border-radius: var(--fold-radius-sm);
  font: inherit;
  font-size: var(--fold-text-md);
  font-weight: var(--fold-weight-semibold);
  cursor: pointer;
}

.btn-ghost {
  border: 1px solid var(--fold-color-border);
  background: var(--fold-color-surface-card);
  color: var(--fold-color-text);
}

.btn-ghost:hover {
  border-color: var(--fold-color-primary);
  color: var(--fold-color-primary-text);
}

.btn-primary {
  border: 1px solid var(--fold-color-primary);
  background: var(--fold-color-primary);
  color: var(--fold-color-on-primary);
}

.btn-primary:hover {
  background: var(--fold-color-primary-strong);
  border-color: var(--fold-color-primary-strong);
}`],encapsulation:2})}export{b as default};
