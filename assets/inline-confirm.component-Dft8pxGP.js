import{af as T,T as w,x as s,K as I,az as b,s as v,as as F,a5 as z,y as p,aG as L,ɵ as P,L as O,I as C,J as g,D as B,at as M,au as S,B as f,d as r,C as m,E as c,q as l,H as _,N,f as d,e as h,P as A,j as a,m as u,l as k,k as E,h as W,n as D,r as V}from"./index-Dx-EuELi.js";import{FoldButtonComponent as j}from"./button.component-B3QvxMEF.js";import{FoldButtonIconComponent as q}from"./button-icon.component-GbUN2qt2.js";import{FoldInputComponent as R}from"./input.component-BiQcxnjX.js";import"./spinner.component-BuH8iUOI.js";import"./tokens.catalog-DF_6rd51.js";import"./input-base.component-Qi0d9XuF.js";import"./label.component-BR7borAk.js";import"./input-value-Co_u-z_8.js";const Q={confirm:"Confirm",cancel:"Cancel",cancelAria:"Cancel",busy:"Working…",group:"Confirm action",secret:"Password",typePrompt:o=>`Type ${o} to confirm`},H=new T("FOLD_INLINE_CONFIRM_LABELS",{factory:()=>Q}),G=["triggerWrap"],J=["groupEl"],K=["*"];function U(o,e){if(o&1){const n=f();r(0,"span",5,0),m("click",function(){c(n);const i=l();return _(i.activate())})("keydown.enter",function(){c(n);const i=l();return _(i.activate())}),N(2),d()}}function Y(o,e){if(o&1&&(r(0,"p",7),h(1),d()),o&2){const n=l(2);u("id",n.msgId),a(),E(e)}}function X(o,e){if(o&1){const n=f();r(0,"div",8)(1,"p",13),h(2),d(),r(3,"fold-input",14),W("valueChange",function(i){c(n);const y=l(2);return V(y.typed,i)||(y.typed=i),_(i)}),m("keydown.enter",function(){c(n);const i=l(2);return _(i.confirm())}),d()()}if(o&2){const n=l(2);a(2),E(n.prompt()),a(),u("type",n.fieldType())("size",n.size()==="lg"?"lg":"sm")("placeholder",n.placeholder()??(n.match()||n.l().secret))("autocomplete",n.password()?"current-password":"off"),D("value",n.typed)}}function Z(o,e){if(o&1){const n=f();r(0,"fold-button-icon",15),m("clicked",function(){c(n);const i=l(2);return _(i.cancel())}),d()}if(o&2){const n=l(2);u("size",n.size())("disabled",n.loading())("tooltip",n.l().cancelAria)}}function $(o,e){if(o&1){const n=f();r(0,"button",16),m("click",function(){c(n);const i=l(2);return _(i.cancel())}),h(1),d()}if(o&2){const n=l(2);u("size",n.size())("disabled",n.loading()),a(),k(" ",n.l().cancel," ")}}function nn(o,e){if(o&1){const n=f();r(0,"div",6,1),m("keydown.escape",function(i){return c(n),l().cancel(),_(i.stopPropagation())}),C(2,Y,2,2,"p",7),C(3,X,4,6,"div",8),r(4,"div",9)(5,"button",10,2),m("click",function(){c(n);const i=l();return _(i.confirm())}),h(7),d(),C(8,Z,1,3,"fold-button-icon",11)(9,$,2,3,"button",12),d()()}if(o&2){let n;const t=l();A("aria-label",t.l().group)("aria-describedby",t.message()?t.msgId:null),a(2),g((n=t.message())?2:-1,n),a(),g(t.needsInput()?3:-1),a(2),u("intent",t.intent())("size",t.size())("disabled",!t.canConfirm()),a(2),k(" ",t.loading()?t.l().busy:t.l().confirm," "),a(),g(t.cancelIcon()&&!t.needsInput()?8:9)}}class x{defaults=w(H);intent=s("danger");message=s();match=s("");password=s(!1,{transform:I});placeholder=s();loading=s(!1,{transform:I});size=s("sm");cancelIcon=s(!1,{transform:I});labels=s();confirmed=b();cancelled=b();open=v(!1);typed=v("");triggerEl=F("triggerWrap");groupEl=F("groupEl");msgId=w(z).next("fold-inline-confirm");l=p(()=>({...this.defaults,...this.labels()}));needsInput=p(()=>this.match().length>0||this.password());inputValid=p(()=>{const e=this.match().trim();return e.length>0?this.typed().trim().toLowerCase()===e.toLowerCase():this.password()?this.typed().length>0:!0});canConfirm=p(()=>this.inputValid()&&!this.loading());fieldType=p(()=>this.password()&&this.match().length===0?"password":"text");prompt=p(()=>{const e=this.match().trim();return e.length>0?this.l().typePrompt(e):this.l().secret});constructor(){L(()=>{if(!this.open())return;const e=this.groupEl()?.nativeElement;if(!e)return;(this.needsInput()?e.querySelector("input"):e.querySelector("button"))?.focus()})}activate(){this.typed.set(""),this.open.set(!0)}confirm(){if(!this.canConfirm())return;const e=this.typed();this.open.set(!1),this.typed.set(""),this.confirmed.emit(e)}cancel(){this.open.set(!1),this.typed.set(""),this.cancelled.emit(),this.triggerEl()?.nativeElement.querySelector("button, a")?.focus()}static ɵfac=function(n){return new(n||x)};static ɵcmp=P({type:x,selectors:[["fold-inline-confirm"]],viewQuery:function(n,t){n&1&&M(t.triggerEl,G,5)(t.groupEl,J,5),n&2&&S(2)},hostVars:2,hostBindings:function(n,t){n&2&&B("is-open",t.open())},inputs:{intent:[1,"intent"],message:[1,"message"],match:[1,"match"],password:[1,"password"],placeholder:[1,"placeholder"],loading:[1,"loading"],size:[1,"size"],cancelIcon:[1,"cancelIcon"],labels:[1,"labels"]},outputs:{confirmed:"confirmed",cancelled:"cancelled"},ngContentSelectors:K,decls:2,vars:1,consts:[["triggerWrap",""],["groupEl",""],["confirmBtn",""],[1,"fic-trigger"],["role","group",1,"fic-confirm"],[1,"fic-trigger",3,"click","keydown.enter"],["role","group",1,"fic-confirm",3,"keydown.escape"],[1,"fic-message",3,"id"],[1,"fic-field"],[1,"fic-actions"],["foldButton","","emphasis","solid",3,"click","intent","size","disabled"],["icon","close","tone","ghost",3,"size","disabled","tooltip"],["foldButton","","emphasis","soft","intent","neutral",3,"size","disabled"],[1,"fic-prompt"],[3,"valueChange","keydown.enter","type","size","placeholder","autocomplete","value"],["icon","close","tone","ghost",3,"clicked","size","disabled","tooltip"],["foldButton","","emphasis","soft","intent","neutral",3,"click","size","disabled"]],template:function(n,t){n&1&&(O(),C(0,U,3,0,"span",3)(1,nn,10,9,"div",4)),n&2&&g(t.open()?1:0)},dependencies:[j,q,R],styles:[`[_nghost-%COMP%] {
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
  display: flex;
  flex-direction: column;
  gap: var(--fold-space-xs);
}

.fic-prompt[_ngcontent-%COMP%] {
  margin: 0;
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
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
}`]})}export{x as FoldInlineConfirmComponent};
