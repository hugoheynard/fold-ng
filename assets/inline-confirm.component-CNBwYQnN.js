import{af as O,T as b,x as a,K as y,az as w,a4 as E,s as z,as as F,a5 as T,y as p,aG as L,ɵ as P,L as B,I as C,J as g,D as M,at as S,au as N,B as f,d as c,C as m,N as A,f as r,e as x,q as l,P as k,j as s,m as u,l as v,k as W,h as D,n as V,E as d,H as _,r as j}from"./index-Ci6yhgBI.js";import{FoldButtonComponent as q}from"./button.component-DMBE20VB.js";import{FoldButtonIconComponent as R}from"./button-icon.component-D2HSyAJB.js";import{FoldInputComponent as Q}from"./input.component-BEyv8CRw.js";import"./spinner.component-kdzKoVrH.js";import"./tokens.catalog-DF_6rd51.js";import"./input-base.component-BUM5PWVY.js";import"./label.component-P1fNJgjL.js";import"./input-value-Co_u-z_8.js";const H={confirm:"Confirm",cancel:"Cancel",cancelAria:"Cancel",busy:"Working…",group:"Confirm action",secret:"Password",typePrompt:o=>`Type ${o} to confirm`},G=new O("FOLD_INLINE_CONFIRM_LABELS",{factory:()=>H}),J=["triggerWrap"],K=["groupEl"],U=["*"];function Y(o,t){if(o&1){const n=f();c(0,"span",4,0),m("click",function(){d(n);const e=l();return _(e.activate())}),A(2),r()}}function X(o,t){if(o&1&&(c(0,"p",6),x(1),r()),o&2){const n=l(2);u("id",n.msgId),s(),W(t)}}function Z(o,t){if(o&1){const n=f();c(0,"fold-input",12),D("valueChange",function(e){d(n);const h=l(2);return j(h.typed,e)||(h.typed=e),_(e)}),m("keydown.enter",function(){d(n);const e=l(2);return _(e.confirm())}),r()}if(o&2){const n=l(2);u("label",n.prompt())("type",n.fieldType())("size",n.size()==="lg"?"lg":"sm")("placeholder",n.placeholder()??"")("autocomplete",n.password()?"current-password":"off"),V("value",n.typed)}}function $(o,t){if(o&1){const n=f();c(0,"fold-button-icon",13),m("clicked",function(){d(n);const e=l(2);return _(e.cancel())}),r()}if(o&2){const n=l(2);u("icon",t)("size",n.size())("disabled",n.loading())("tooltip",n.l().cancelAria)}}function nn(o,t){if(o&1){const n=f();c(0,"button",14),m("click",function(){d(n);const e=l(2);return _(e.cancel())}),x(1),r()}if(o&2){const n=l(2);u("size",n.size())("disabled",n.loading()),s(),v(" ",n.l().cancel," ")}}function en(o,t){if(o&1){const n=f();c(0,"div",5,1),m("keydown.escape",function(e){return d(n),l().cancel(),_(e.stopPropagation())}),C(2,X,2,2,"p",6),C(3,Z,1,6,"fold-input",7),c(4,"div",8)(5,"button",9),m("click",function(){d(n);const e=l();return _(e.confirm())}),x(6),r(),C(7,$,1,4,"fold-button-icon",10)(8,nn,2,3,"button",11),r()()}if(o&2){let n,i;const e=l();k("aria-label",e.l().group),s(2),g((n=e.message())?2:-1,n),s(),g(e.needsInput()?3:-1),s(2),u("intent",e.intent())("size",e.size())("icon",e.confirmIcon())("disabled",!e.canConfirm()),k("aria-describedby",e.message()?e.msgId:null),s(),v(" ",e.loading()?e.l().busy:e.l().confirm," "),s(),g((i=e.cancelIcon())?7:8,i)}}class I{defaults=b(G);intent=a("danger");message=a();match=a("");password=a(!1,{transform:y});placeholder=a();loading=a(!1,{transform:y});size=a("sm");confirmIcon=a();cancelIcon=a();keepOpenOnConfirm=a(!1,{transform:y});labels=a();confirmed=w();cancelled=w();open=E(!1);typed=z("");triggerEl=F("triggerWrap");groupEl=F("groupEl");msgId=b(T).next("fold-inline-confirm");l=p(()=>({...this.defaults,...this.labels()}));needsInput=p(()=>this.match().length>0||this.password());inputValid=p(()=>{const t=this.match().trim();return t.length>0?this.typed().trim().toLowerCase()===t.toLowerCase():this.password()?this.typed().length>0:!0});canConfirm=p(()=>this.inputValid()&&!this.loading());fieldType=p(()=>this.password()&&this.match().length===0?"password":"text");prompt=p(()=>{const t=this.match().trim();return t.length>0?this.l().typePrompt(t):this.l().secret});opened=!1;constructor(){L(()=>{if(this.open()){this.opened=!0;const t=this.groupEl()?.nativeElement;(this.needsInput()?t?.querySelector("input"):t?.querySelector("button"))?.focus()}else this.opened&&this.triggerEl()?.nativeElement.querySelector("button, a")?.focus()})}activate(){this.typed.set(""),this.open.set(!0)}confirm(){if(!this.canConfirm())return;const t=this.typed();this.keepOpenOnConfirm()||(this.open.set(!1),this.typed.set("")),this.confirmed.emit(t)}cancel(){this.open.set(!1),this.typed.set(""),this.cancelled.emit()}static ɵfac=function(n){return new(n||I)};static ɵcmp=P({type:I,selectors:[["fold-inline-confirm"]],viewQuery:function(n,i){n&1&&S(i.triggerEl,J,5)(i.groupEl,K,5),n&2&&N(2)},hostVars:2,hostBindings:function(n,i){n&2&&M("is-open",i.open())},inputs:{intent:[1,"intent"],message:[1,"message"],match:[1,"match"],password:[1,"password"],placeholder:[1,"placeholder"],loading:[1,"loading"],size:[1,"size"],confirmIcon:[1,"confirmIcon"],cancelIcon:[1,"cancelIcon"],keepOpenOnConfirm:[1,"keepOpenOnConfirm"],labels:[1,"labels"],open:[1,"open"]},outputs:{confirmed:"confirmed",cancelled:"cancelled",open:"openChange"},ngContentSelectors:U,decls:2,vars:1,consts:[["triggerWrap",""],["groupEl",""],[1,"fic-trigger"],["role","group",1,"fic-confirm"],[1,"fic-trigger",3,"click"],["role","group",1,"fic-confirm",3,"keydown.escape"],[1,"fic-message",3,"id"],[1,"fic-field",3,"label","type","size","placeholder","autocomplete","value"],[1,"fic-actions"],["foldButton","","emphasis","solid",3,"click","intent","size","icon","disabled"],["tone","ghost",3,"icon","size","disabled","tooltip"],["foldButton","","emphasis","soft","intent","neutral",3,"size","disabled"],[1,"fic-field",3,"valueChange","keydown.enter","label","type","size","placeholder","autocomplete","value"],["tone","ghost",3,"clicked","icon","size","disabled","tooltip"],["foldButton","","emphasis","soft","intent","neutral",3,"click","size","disabled"]],template:function(n,i){n&1&&(B(),C(0,Y,3,0,"span",2)(1,en,9,10,"div",3)),n&2&&g(i.open()?1:0)},dependencies:[q,R,Q],styles:[`[_nghost-%COMP%] {
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
