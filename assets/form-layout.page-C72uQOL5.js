import{K as x}from"./kind-badge.component-DDuAk4WD.js";import{s as c,ɵ as T,c as k,F as w,d as t,e as r,f as n,g as F,G as m,L as P,T as h,j as i,m as u,M as L,l as S,E as C,h as g,z as s,n as y,H as f,q as b,I as _}from"./index-1SJQDgff.js";import{F as E}from"./tab-layout.component-A3S0-X6K.js";import{F as O}from"./page-section.component-DjGia3bw.js";import{F as K}from"./tab-nav.component-BiTK2tjW.js";import{F as B}from"./input.component-GJXkBgmr.js";import{F as N}from"./choice-row.component-CPFEgb3f.js";import"./element-title.component-DKl8d2Fn.js";import"./input-value-Co_u-z_8.js";function A(d,p){if(d&1){const e=C();t(0,"fold-page-section",9)(1,"fold-input",16),g("valueChange",function(o){f(e);const a=s();return b(a.fName,o)||(a.fName=o),_(o)}),n(),t(2,"fold-input",17),g("valueChange",function(o){f(e);const a=s();return b(a.fEmail,o)||(a.fEmail=o),_(o)}),n(),t(3,"div",18)(4,"label"),r(5,"Role"),n(),t(6,"fold-choice-row",19),m("selected",function(o){f(e);const a=s();return _(a.fRole.set(o))}),n()(),t(7,"div",18)(8,"label",20),r(9,"Bio"),n(),t(10,"textarea",21,1),m("input",function(){f(e);const o=h(11),a=s();return _(a.fBio.set(o.value))}),n()()()}if(d&2){const e=s();i(),y("value",e.fName),i(),y("value",e.fEmail),i(4),u("options",e.roleOptions)("activeKey",e.fRole()),i(4),u("value",e.fBio())}}function z(d,p){if(d&1){const e=C();t(0,"fold-page-section",10)(1,"fold-input",22),g("valueChange",function(o){f(e);const a=s();return b(a.fUsername,o)||(a.fUsername=o),_(o)}),n(),t(2,"div",18)(3,"label",23),r(4,"Language"),n(),t(5,"select",24,2),m("change",function(){f(e);const o=h(6),a=s();return _(a.fLang.set(o.value))}),t(7,"option",25),r(8,"Français"),n(),t(9,"option",26),r(10,"English"),n(),t(11,"option",27),r(12,"Español"),n()()(),t(13,"div",18)(14,"label"),r(15,"Two-factor auth"),n(),t(16,"fold-choice-row",19),m("selected",function(o){f(e);const a=s();return _(a.fTwoFactor.set(o))}),n(),t(17,"span",28),r(18,"Adds a second step at sign-in."),n()()()}if(d&2){const e=s();i(),y("value",e.fUsername),i(4),u("value",e.fLang()),i(11),u("options",e.onOff)("activeKey",e.fTwoFactor())}}function R(d,p){if(d&1){const e=C();t(0,"fold-page-section",11)(1,"div",18)(2,"label"),r(3,"Email digest"),n(),t(4,"fold-choice-row",19),m("selected",function(o){f(e);const a=s();return _(a.fDigest.set(o))}),n()(),t(5,"div",18)(6,"label"),r(7,"Push"),n(),t(8,"fold-choice-row",19),m("selected",function(o){f(e);const a=s();return _(a.fPush.set(o))}),n(),t(9,"span",28),r(10,"Browser notifications on this device."),n()()()}if(d&2){const e=s();i(4),u("options",e.digestOptions)("activeKey",e.fDigest()),i(4),u("options",e.onOff)("activeKey",e.fPush())}}class v{formTabs=[{key:"profile",label:"Profile"},{key:"account",label:"Account"},{key:"notifications",label:"Notifications",badge:2}];formTab=c("profile");fName=c("Clément Aubry");fEmail=c("clement@sh3pherd.dev");fRole=c("manager");fBio=c("");fUsername=c("caubry");fLang=c("fr");fTwoFactor=c("off");fDigest=c("daily");fPush=c("on");roleOptions=[{key:"manager",label:"Manager"},{key:"member",label:"Member"},{key:"guest",label:"Guest"}];onOff=[{key:"off",label:"Off"},{key:"on",label:"On"}];digestOptions=[{key:"off",label:"Off"},{key:"daily",label:"Daily"},{key:"weekly",label:"Weekly"}];formSaved=c(!1);saveForm(){this.formSaved.set(!0),setTimeout(()=>this.formSaved.set(!1),1500)}static ɵfac=function(e){return new(e||v)};static ɵcmp=T({type:v,selectors:[["gal-form-layout-page"]],decls:17,vars:6,consts:[["tl","foldTabLayout"],["fb",""],["fl",""],["title","form layout"],["description",""],["titleBadge","","kind","component"],["placement","side"],["tabNav","","activeStyle","fill",3,"tabChange","direction","tabs","activeKey"],[1,"gal-stack"],["surface","card","stack","","title","Profile","description","Public identity."],["surface","card","stack","","title","Account","description","Sign-in + preferences."],["surface","card","stack","","title","Notifications","description","How we reach you."],[1,"form-actions"],["type","button",1,"btn-ghost"],["type","button",1,"btn-primary",3,"click"],["size","sm",3,"name"],["label","Full name",3,"valueChange","value"],["label","Email","type","email",3,"valueChange","value"],[1,"field"],[3,"selected","options","activeKey"],["for","f-bio"],["id","f-bio","rows","3","placeholder","A short bio…",3,"input","value"],["label","Username",3,"valueChange","value"],["for","f-lang"],["id","f-lang",3,"change","value"],["value","fr"],["value","en"],["value","es"],[1,"field-hint"]],template:function(e,l){if(e&1&&(t(0,"fold-page-layout",3)(1,"p",4),r(2," A vertical tab-nav as the section rail, driving a settings-style form: fold-page-section groups the fields, fold-input handles the text fields, fold-choice-row the segmented selects, and native select/textarea stay native. "),n(),F(3,"gal-kind-badge",5),t(4,"fold-tab-layout",6,0)(6,"fold-tab-nav",7),m("tabChange",function(a){return l.formTab.set(a)}),n(),t(7,"div",8),P(8,A,12,5,"fold-page-section",9)(9,z,19,4,"fold-page-section",10)(10,R,11,4,"fold-page-section",11),t(11,"div",12)(12,"button",13),r(13,"Cancel"),n(),t(14,"button",14),m("click",function(){return l.saveForm()}),F(15,"fold-icon",15),r(16),n()()()()()),e&2){let o;const a=h(5);i(6),u("direction",a.stacked()?"horizontal":"vertical")("tabs",l.formTabs)("activeKey",l.formTab()),i(2),L((o=l.formTab())==="profile"?8:o==="account"?9:o==="notifications"?10:-1),i(7),u("name",l.formSaved()?"check-circle":"check"),i(),S(" ",l.formSaved()?"Saved":"Save changes"," ")}},dependencies:[x,k,E,O,K,B,N,w],styles:[`.field-hint {
  font-size: 11px;
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
  font-size: 13px;
  font-weight: 600;
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
}`],encapsulation:2})}export{v as default};
