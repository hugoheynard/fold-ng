import{ak as O,X as x,u as a,a0 as y,ap as w,ag as E,s as z,a4 as k,ah as T,A as p,a5 as L,ɵ as P,ab as B,a1 as M,w as C,x as g,L as S,a8 as N,a9 as A,E as f,d as c,B as m,a2 as W,f as r,e as b,q as l,D as F,j as s,m as u,l as v,k as D,h as V,n as j,N as d,O as _,r as q}from"./index-DBdQCP3z.js";import{FoldButtonComponent as R}from"./button.component-Pr_PsLhE.js";import{FoldInputComponent as Q}from"./input.component-D6vH52TP.js";import"./input-base.component-Db9cnxkc.js";import"./info.component-BH4ZJ7cC.js";import"./popover.component-BTjj0mJD.js";import"./popover-trigger.directive-wtZkAKad.js";import"./label.component-AYajecbO.js";import"./input-value-DCGlOvqF.js";const H={confirm:"Confirm",cancel:"Cancel",cancelAria:"Cancel",busy:"Working…",group:"Confirm action",secret:"Password",typePrompt:o=>`Type ${o} to confirm`},U=new O("FOLD_INLINE_CONFIRM_LABELS",{factory:()=>H}),X=["triggerWrap"],Y=["groupEl"],G=["*"];function J(o,t){if(o&1){const n=f();c(0,"span",4,0),m("click",function(){d(n);const e=l();return _(e.activate())}),W(2),r()}}function K(o,t){if(o&1&&(c(0,"p",6),b(1),r()),o&2){const n=l(2);u("id",n.msgId),s(),D(t)}}function Z(o,t){if(o&1){const n=f();c(0,"fold-input",12),V("valueChange",function(e){d(n);const h=l(2);return q(h.typed,e)||(h.typed=e),_(e)}),m("keydown.enter",function(){d(n);const e=l(2);return _(e.confirm())}),r()}if(o&2){const n=l(2);u("label",n.prompt())("type",n.fieldType())("size",n.size()==="lg"?"lg":"sm")("placeholder",n.placeholder()??"")("autocomplete",n.password()?"current-password":"off"),j("value",n.typed)}}function $(o,t){if(o&1){const n=f();c(0,"fold-button-icon",13),m("clicked",function(){d(n);const e=l(2);return _(e.cancel())}),r()}if(o&2){const n=l(2);u("icon",t)("size",n.size())("disabled",n.loading())("tooltip",n.l().cancelAria)}}function nn(o,t){if(o&1){const n=f();c(0,"button",14),m("click",function(){d(n);const e=l(2);return _(e.cancel())}),b(1),r()}if(o&2){const n=l(2);u("size",n.size())("disabled",n.loading()),s(),v(" ",n.l().cancel," ")}}function en(o,t){if(o&1){const n=f();c(0,"div",5,1),m("keydown.escape",function(e){return d(n),l().cancel(),_(e.stopPropagation())}),C(2,K,2,2,"p",6),C(3,Z,1,6,"fold-input",7),c(4,"div",8)(5,"button",9),m("click",function(){d(n);const e=l();return _(e.confirm())}),b(6),r(),C(7,$,1,4,"fold-button-icon",10)(8,nn,2,3,"button",11),r()()}if(o&2){let n,i;const e=l();F("aria-label",e.l().group),s(2),g((n=e.message())?2:-1,n),s(),g(e.needsInput()?3:-1),s(2),u("intent",e.intent())("size",e.size())("icon",e.confirmIcon())("disabled",!e.canConfirm()),F("aria-describedby",e.message()?e.msgId:null),s(),v(" ",e.loading()?e.l().busy:e.l().confirm," "),s(),g((i=e.cancelIcon())?7:8,i)}}class I{defaults=x(U);intent=a("danger");message=a();match=a("");password=a(!1,{transform:y});placeholder=a();loading=a(!1,{transform:y});size=a("sm");confirmIcon=a();cancelIcon=a();keepOpenOnConfirm=a(!1,{transform:y});labels=a();confirmed=w();cancelled=w();open=E(!1);typed=z("");triggerEl=k("triggerWrap");groupEl=k("groupEl");msgId=x(T).next("fold-inline-confirm");l=p(()=>({...this.defaults,...this.labels()}));needsInput=p(()=>this.match().length>0||this.password());inputValid=p(()=>{const t=this.match().trim();return t.length>0?this.typed().trim().toLowerCase()===t.toLowerCase():this.password()?this.typed().length>0:!0});canConfirm=p(()=>this.inputValid()&&!this.loading());fieldType=p(()=>this.password()&&this.match().length===0?"password":"text");prompt=p(()=>{const t=this.match().trim();return t.length>0?this.l().typePrompt(t):this.l().secret});opened=!1;constructor(){L(()=>{if(this.open()){this.opened=!0;const t=this.groupEl()?.nativeElement;(this.needsInput()?t?.querySelector("input"):t?.querySelector("button"))?.focus()}else this.opened&&this.triggerEl()?.nativeElement.querySelector("button, a")?.focus()})}activate(){this.typed.set(""),this.open.set(!0)}confirm(){if(!this.canConfirm())return;const t=this.typed();this.keepOpenOnConfirm()||(this.open.set(!1),this.typed.set("")),this.confirmed.emit(t)}cancel(){this.loading()||(this.open.set(!1),this.typed.set(""),this.cancelled.emit())}static ɵfac=function(n){return new(n||I)};static ɵcmp=P({type:I,selectors:[["fold-inline-confirm"]],viewQuery:function(n,i){n&1&&N(i.triggerEl,X,5)(i.groupEl,Y,5),n&2&&A(2)},hostVars:2,hostBindings:function(n,i){n&2&&S("is-open",i.open())},inputs:{intent:[1,"intent"],message:[1,"message"],match:[1,"match"],password:[1,"password"],placeholder:[1,"placeholder"],loading:[1,"loading"],size:[1,"size"],confirmIcon:[1,"confirmIcon"],cancelIcon:[1,"cancelIcon"],keepOpenOnConfirm:[1,"keepOpenOnConfirm"],labels:[1,"labels"],open:[1,"open"]},outputs:{confirmed:"confirmed",cancelled:"cancelled",open:"openChange"},ngContentSelectors:G,decls:2,vars:1,consts:[["triggerWrap",""],["groupEl",""],[1,"fic-trigger"],["role","group",1,"fic-confirm"],[1,"fic-trigger",3,"click"],["role","group",1,"fic-confirm",3,"keydown.escape"],[1,"fic-message",3,"id"],[1,"fic-field",3,"label","type","size","placeholder","autocomplete","value"],[1,"fic-actions"],["foldButton","","emphasis","solid",3,"click","intent","size","icon","disabled"],["tone","ghost",3,"icon","size","disabled","tooltip"],["foldButton","","emphasis","soft","intent","neutral",3,"size","disabled"],[1,"fic-field",3,"valueChange","keydown.enter","label","type","size","placeholder","autocomplete","value"],["tone","ghost",3,"clicked","icon","size","disabled","tooltip"],["foldButton","","emphasis","soft","intent","neutral",3,"click","size","disabled"]],template:function(n,i){n&1&&(M(),C(0,J,3,0,"span",2)(1,en,9,10,"div",3)),n&2&&g(i.open()?1:0)},dependencies:[R,B,Q],styles:[`[_nghost-%COMP%] {
  display: inline-flex;
  align-items: center;
  min-width: 0;
}



.fic-trigger[_ngcontent-%COMP%] {
  display: contents;
}



.fic-confirm[_ngcontent-%COMP%] {
  display: inline-flex;
  flex-direction: column;
  gap: var(--fold-space-sm);
  min-width: 0;
  animation: _ngcontent-%COMP%_fic-in var(--fold-motion-fast);
}

.fic-message[_ngcontent-%COMP%] {
  margin: 0;
  font-size: var(--fold-text-xs);
  line-height: 1.5;
  color: var(--fold-color-text-secondary);
}

.fic-field[_ngcontent-%COMP%] {
  display: block;
  

  width: 15rem;
  max-width: 100%;
}

.fic-actions[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: var(--fold-space-xs);
}

@keyframes _ngcontent-%COMP%_fic-in {
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  .fic-confirm[_ngcontent-%COMP%] {
    animation: none;
  }
}`]})}export{I as FoldInlineConfirmComponent};
