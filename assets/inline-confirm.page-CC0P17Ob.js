import{s as m,A as T,ɵ as M,c as O,b as $,ab as B,d as n,e,f as o,g as x,B as d,w,i as C,T as I,j as a,m as p,U as b,x as y,o as h,k as P,L as _,E as g,l as k,q as f,N as u,O as v}from"./index-CrZoBIgg.js";import{K as D}from"./kind-badge.component-BCOpHO-V.js";import{C as E}from"./composed-of.component-DXikK--P.js";import{D as L}from"./playground.component-D0vxtatB.js";import{FoldElementTitleComponent as z}from"./element-title.component-Cmfks3mD.js";import{FoldButtonComponent as S}from"./button.component-iqtPhJqp.js";import{FoldInlineConfirmComponent as R}from"./inline-confirm.component-H-dH6p44.js";import"./page-section.component-D5Z0zfei.js";import"./slider.component-CeWitcm7.js";import"./input-value-DCGlOvqF.js";import"./input.component-lHLoV6KW.js";import"./input-base.component-CogtTioT.js";import"./info.component-BJ-eY8-0.js";import"./common-labels-CREAgoKZ.js";import"./popover.component-B6t2mHg1.js";import"./auto-update-_srfpL1Q.js";import"./popover-trigger.directive-CERUDwgX.js";import"./label.component-60qdHS7G.js";const j=()=>["button","button-icon","form"],A=()=>({confirm:"Transfer"}),H=()=>({confirm:"Delete all"}),V=()=>({confirm:"Delete account"}),G=()=>({confirm:"Revoke others"}),K=()=>({confirm:"Revoke"}),U=(s,t)=>t.id;function q(s,t){s&1&&(n(0,"div",19),e(1),o()),s&2&&(a(),P(t))}function N(s,t){if(s&1){const r=g();n(0,"fold-inline-confirm",46),d("confirmed",function(){u(r);const l=f();return v(l.revokeOthers())}),n(1,"button",47),e(2," Revoke others "),o()()}s&2&&p("labels",b(1,G))}function J(s,t){s&1&&(n(0,"span",48),e(1,"current"),o())}function Q(s,t){if(s&1){const r=g();n(0,"fold-inline-confirm",50),d("confirmed",function(){u(r);const l=f().$implicit,c=f();return v(c.revoke(l.id))}),n(1,"button",16),e(2," Revoke "),o()()}s&2&&p("labels",b(1,K))}function W(s,t){if(s&1&&(n(0,"div",22)(1,"div",10)(2,"span",11),e(3),w(4,J,2,0,"span",48),o(),n(5,"span",12),e(6),o()(),w(7,Q,3,2,"fold-inline-confirm",49),o()),s&2){const r=t.$implicit;a(3),k(" ",r.device," "),a(),y(r.current?4:-1),a(2),P(r.meta),a(),y(r.current?-1:7)}}function X(s,t){if(s&1){const r=g();n(0,"div",19),e(1," Only this device is signed in. "),n(2,"button",51),d("click",function(){u(r);const l=f();return v(l.resetSessions())}),e(3," Reset demo "),o()()}}function Y(s,t){if(s&1){const r=g();n(0,"li",27)(1,"span"),e(2),o(),n(3,"fold-inline-confirm",52),d("confirmed",function(){const l=u(r).$implicit,c=f();return v(c.remove(l))}),x(4,"fold-button-icon",53),o()()}if(s&2){const r=t.$implicit;a(2),P(r)}}function Z(s,t){if(s&1){const r=g();n(0,"li",28)(1,"button",51),d("click",function(){u(r);const l=f();return v(l.resetRows())}),e(2," Reset list "),o()()}}function nn(s,t){if(s&1){const r=g();n(0,"button",40),d("click",function(){const l=u(r).$implicit,c=f();return v(c.pgFamily.set(l))}),e(1),o()}if(s&2){const r=t.$implicit,i=f();_("is-on",i.pgFamily()===r),a(),k(" ",r," ")}}function en(s,t){if(s&1){const r=g();n(0,"button",40),d("click",function(){const l=u(r).$implicit,c=f();return v(c.pgIntent.set(l))}),e(1),o()}if(s&2){const r=t.$implicit,i=f();_("is-on",i.pgIntent()===r),a(),k(" ",r," ")}}function on(s,t){if(s&1){const r=g();n(0,"button",40),d("click",function(){const l=u(r).$implicit,c=f();return v(c.pgCancel.set(l))}),e(1),o()}if(s&2){const r=t.$implicit,i=f();_("is-on",i.pgCancel()===r),a(),k(" ",r," ")}}function tn(s,t){if(s&1){const r=g();n(0,"button",40),d("click",function(){const l=u(r).$implicit,c=f();return v(c.toggleConfirmIcon(l))}),e(1),o()}if(s&2){const r=t.$implicit,i=f();_("is-on",i.pgConfirmIcon()===r),a(),k(" ",r," ")}}function rn(s,t){s&1&&(n(0,"span",45),e(1),o()),s&2&&(a(),P(t))}class F{rows=m(["Spring tour","Summer festival","Gala"]);remove(t){this.rows.update(r=>r.filter(i=>i!==t))}resetRows(){this.rows.set(["Spring tour","Summer festival","Gala"])}lastConfirm=m(null);onConfirm(t){this.lastConfirm.set(t===""?"(confirmed)":t)}danger=m(null);act(t){this.danger.set(`${t} ✓`)}seedSessions(){return[{id:"s1",device:"MacBook Pro",meta:"Paris · Chrome · this device",current:!0},{id:"s2",device:"iPhone 15",meta:"Paris · Safari · 2h ago",current:!1},{id:"s3",device:"iPad Air",meta:"Lyon · Safari · yesterday",current:!1}]}sessions=m(this.seedSessions());revoke(t){this.sessions.update(r=>r.filter(i=>i.id!==t))}revokeOthers(){this.sessions.update(t=>t.filter(r=>r.current))}resetSessions(){this.sessions.set(this.seedSessions())}families=["simple","type","password"];intents=["danger","warning","primary","neutral"];cancelChoices=["label","close","reset"];confirmIcons=["bin","check"];pgFamily=m("simple");pgIntent=m("danger");pgCancel=m("label");pgConfirmIcon=m(void 0);pgMessage=m(!0);pgLoading=m(!1);pgLog=m(null);pgMatch=T(()=>this.pgFamily()==="type"?"delete":"");pgPassword=T(()=>this.pgFamily()==="password");pgCancelIcon=T(()=>{const t=this.pgCancel();return t==="close"?"close":t==="reset"?"reset":void 0});toggleConfirmIcon(t){this.pgConfirmIcon.update(r=>r===t?void 0:t)}onPlaygroundConfirm(t){this.pgLog.set(t===""?"confirmed":`confirmed → “${t}”`)}playgroundCode=T(()=>{const t=["<fold-inline-confirm"];this.pgIntent()!=="danger"&&t.push(`  intent="${this.pgIntent()}"`),this.pgFamily()==="type"&&t.push('  [match]="project.name"'),this.pgFamily()==="password"&&t.push("  password"),this.pgMessage()&&t.push(`  message="This can't be undone."`);const r=this.pgConfirmIcon();r&&t.push(`  confirmIcon="${r}"`);const i=this.pgCancelIcon();return i&&t.push(`  cancelIcon="${i}"`),this.pgLoading()&&t.push('  [loading]="pending()"'),t.push('  (confirmed)="onConfirm($event)">'),t.push('  <button foldButton intent="danger">Delete</button>'),t.push("</fold-inline-confirm>"),t.join(`
`)});static ɵfac=function(r){return new(r||F)};static ɵcmp=M({type:F,selectors:[["gal-inline-confirm-page"]],decls:174,vars:33,consts:[["title","inline-confirm"],["description",""],["titleBadge","","kind","component"],[3,"ids"],[1,"gal-tag"],[1,"ic-context"],["padding","none","separators","both","raisedBands","header",1,"ic-card"],["cardHeader","","variant","title","icon","lock","title","Danger zone"],[1,"ic-rows"],[1,"ic-row"],[1,"ic-row-text"],[1,"ic-row-title"],[1,"ic-row-desc"],["intent","warning",3,"confirmed","labels"],["foldButton","","emphasis","outline","intent","warning","size","sm"],["match","DELETE","message","Type DELETE to wipe all projects.","confirmIcon","bin",3,"confirmed","labels"],["foldButton","","emphasis","outline","intent","danger","size","sm"],["password","","message","Confirm your password to continue.",3,"confirmed","labels"],["foldButton","","intent","danger","size","sm"],[1,"ic-row-note"],["cardHeader","","variant","title","icon","globe","title","Active sessions"],["titleAction","","intent","danger","message","Sign out every other device?",3,"labels"],[1,"ic-row","ic-session"],[1,"gal-row","gal-row--wide"],[1,"gal-cell",2,"max-width","360px"],["surface","sunken",2,"--fold-card-padding","16px"],[1,"ic-list"],[1,"ic-item"],[1,"ic-empty"],["surface","sunken",2,"--fold-card-padding","20px"],["cancelIcon","close","confirmIcon","bin",3,"confirmed"],["message","The invite link stops working immediately.",3,"confirmed"],["match","prod-cluster","message","This permanently deletes the cluster.",3,"confirmed"],["password","","message","Enter your password to delete your account.",3,"confirmed"],[1,"gal-cell",2,"max-width","220px"],[1,"ic-readout"],[3,"code"],["params","",1,"np-field"],[1,"ss-seg"],["type","button",3,"is-on"],["type","button",3,"click"],["surface","sunken",2,"--fold-card-padding","24px"],[1,"ic-stage"],[3,"confirmed","intent","match","password","confirmIcon","cancelIcon","loading","message"],["foldButton","",3,"intent"],[1,"ic-log"],["titleAction","","intent","danger","message","Sign out every other device?",3,"confirmed","labels"],["foldButton","","emphasis","soft","intent","neutral","size","sm"],[1,"ic-current"],["cancelIcon","close",3,"labels"],["cancelIcon","close",3,"confirmed","labels"],["foldButton","","emphasis","soft","size","sm",3,"click"],[3,"confirmed"],["icon","bin","tone","critical","size","sm","tooltip","Delete"]],template:function(r,i){if(r&1&&(n(0,"fold-page-layout",0)(1,"p",1),e(2," fold-inline-confirm — an in-place “are you sure?” guard, no modal. The host projects the trigger (a real "),n(3,"code"),e(4,"foldButton"),o(),e(5," / "),n(6,"code"),e(7,"fold-button-icon"),o(),e(8,"); on activation it is replaced, in the same slot, by a confirm/cancel row. Three families: "),n(9,"strong"),e(10,"simple"),o(),e(11," ("),n(12,"code"),e(13,"confirmed"),o(),e(14," emits "),n(15,"code"),e(16,'""'),o(),e(17,"), "),n(18,"strong"),e(19,"type-to-confirm"),o(),e(20," ("),n(21,"code"),e(22,"[match]"),o(),e(23," — the button unlocks once the text matches), and "),n(24,"strong"),e(25,"secret"),o(),e(26," ("),n(27,"code"),e(28,"password"),o(),e(29," — a masked field that emits the typed value for the server to check). "),n(30,"code"),e(31,"Escape"),o(),e(32," cancels, focus moves into the affordance and back to the trigger, labels are overridable ("),n(33,"code"),e(34,"provideFoldInlineConfirmLabels"),o(),e(35,"). "),o(),x(36,"gal-kind-badge",2)(37,"gal-composed-of",3),n(38,"span",4),e(39,"in context"),o(),n(40,"div",5)(41,"fold-card",6),x(42,"fold-element-title",7),n(43,"div",8)(44,"div",9)(45,"div",10)(46,"span",11),e(47,"Transfer ownership"),o(),n(48,"span",12),e(49,"Hand this workspace to another admin."),o()(),n(50,"fold-inline-confirm",13),d("confirmed",function(){return i.act("Ownership transferred")}),n(51,"button",14),e(52," Transfer "),o()()(),n(53,"div",9)(54,"div",10)(55,"span",11),e(56,"Delete all projects"),o(),n(57,"span",12),e(58,"Removes every project. Cannot be undone."),o()(),n(59,"fold-inline-confirm",15),d("confirmed",function(){return i.act("Projects deleted")}),n(60,"button",16),e(61," Delete all "),o()()(),n(62,"div",9)(63,"div",10)(64,"span",11),e(65,"Delete account"),o(),n(66,"span",12),e(67,"Enter your password to close the account."),o()(),n(68,"fold-inline-confirm",17),d("confirmed",function(){return i.act("Account deleted")}),n(69,"button",18),e(70,"Delete"),o()()()(),w(71,q,2,1,"div",19),o(),n(72,"fold-card",6)(73,"fold-element-title",20),w(74,N,3,2,"fold-inline-confirm",21),o(),n(75,"div",8),C(76,W,8,4,"div",22,U,!1,X,4,0,"div",19),o()()(),n(79,"span",4),e(80,"building blocks"),o(),n(81,"div",23)(82,"div",24)(83,"span",4),e(84,"simple · icon trigger"),o(),n(85,"fold-card",25)(86,"ul",26),C(87,Y,5,1,"li",27,I,!1,Z,3,0,"li",28),o()()(),n(90,"div",24)(91,"span",4),e(92,"simple · button trigger · icon cancel"),o(),n(93,"fold-card",29)(94,"fold-inline-confirm",30),d("confirmed",function(c){return i.onConfirm(c)}),n(95,"button",16),e(96," Remove access "),o()()()(),n(97,"div",24)(98,"span",4),e(99,"with message"),o(),n(100,"fold-card",29)(101,"fold-inline-confirm",31),d("confirmed",function(c){return i.onConfirm(c)}),n(102,"button",18),e(103,"Revoke link"),o()()()()(),n(104,"div",23)(105,"div",24)(106,"span",4),e(107,"type-to-confirm · [match]"),o(),n(108,"fold-card",29)(109,"fold-inline-confirm",32),d("confirmed",function(c){return i.onConfirm(c)}),n(110,"button",18),e(111,"Delete cluster"),o()()()(),n(112,"div",24)(113,"span",4),e(114,"secret · password (emits the value)"),o(),n(115,"fold-card",29)(116,"fold-inline-confirm",33),d("confirmed",function(c){return i.onConfirm(c)}),n(117,"button",18),e(118,"Delete account"),o()()()(),n(119,"div",34)(120,"span",4),e(121,"last emitted"),o(),n(122,"fold-card",29)(123,"code",35),e(124),o()()()(),n(125,"dev-playground",36)(126,"div",37)(127,"span",4),e(128,"family"),o(),n(129,"div",38),C(130,nn,2,3,"button",39,I),o()(),n(132,"div",37)(133,"span",4),e(134,"intent"),o(),n(135,"div",38),C(136,en,2,3,"button",39,I),o()(),n(138,"div",37)(139,"span",4),e(140,"message"),o(),n(141,"div",38)(142,"button",40),d("click",function(){return i.pgMessage.set(!0)}),e(143," on "),o(),n(144,"button",40),d("click",function(){return i.pgMessage.set(!1)}),e(145," off "),o()()(),n(146,"div",37)(147,"span",4),e(148,"cancel"),o(),n(149,"div",38),C(150,on,2,3,"button",39,I),o()(),n(152,"div",37)(153,"span",4),e(154,"confirmIcon"),o(),n(155,"div",38)(156,"button",40),d("click",function(){return i.pgConfirmIcon.set(void 0)}),e(157," none "),o(),C(158,tn,2,3,"button",39,I),o()(),n(160,"div",37)(161,"span",4),e(162,"loading"),o(),n(163,"div",38)(164,"button",40),d("click",function(){return i.pgLoading.set(!0)}),e(165," on "),o(),n(166,"button",40),d("click",function(){return i.pgLoading.set(!1)}),e(167," off "),o()()(),n(168,"fold-card",41)(169,"div",42)(170,"fold-inline-confirm",43),d("confirmed",function(c){return i.onPlaygroundConfirm(c)}),n(171,"button",44),e(172,"Delete"),o()(),w(173,rn,2,1,"span",45),o()()()()),r&2){let l,c;a(37),p("ids",b(29,j)),a(13),p("labels",b(30,A)),a(9),p("labels",b(31,H)),a(9),p("labels",b(32,V)),a(3),y((l=i.danger())?71:-1,l),a(3),y(i.sessions().length>1?74:-1),a(2),h(i.sessions()),a(11),h(i.rows()),a(37),P(i.lastConfirm()??"—"),a(),p("code",i.playgroundCode()),a(5),h(i.families),a(6),h(i.intents),a(6),_("is-on",i.pgMessage()),a(2),_("is-on",!i.pgMessage()),a(6),h(i.cancelChoices),a(6),_("is-on",!i.pgConfirmIcon()),a(2),h(i.confirmIcons),a(6),_("is-on",i.pgLoading()),a(2),_("is-on",!i.pgLoading()),a(4),p("intent",i.pgIntent())("match",i.pgMatch())("password",i.pgPassword())("confirmIcon",i.pgConfirmIcon())("cancelIcon",i.pgCancelIcon())("loading",i.pgLoading())("message",i.pgMessage()?"This can't be undone.":void 0),a(),p("intent",i.pgIntent()),a(2),y((c=i.pgLog())?173:-1,c)}},dependencies:[D,E,L,O,$,z,S,B,R],styles:[`@charset "UTF-8";

.ic-context[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: var(--fold-space-lg);
  max-width: 860px;
  margin-bottom: var(--fold-space-xl);
}

.ic-rows[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}

.ic-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--fold-space-md);
  padding: var(--fold-space-md) var(--fold-space-lg);
}

.ic-row[_ngcontent-%COMP%]    + .ic-row[_ngcontent-%COMP%] {
  border-top: 1px solid var(--fold-color-border-subtle);
}

.ic-row-text[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1 1 auto;
}

.ic-row-title[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: var(--fold-space-sm);
  font-size: var(--fold-text-sm);
  font-weight: var(--fold-weight-semibold);
  color: var(--fold-color-text);
}

.ic-row-desc[_ngcontent-%COMP%] {
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
}

.ic-current[_ngcontent-%COMP%] {
  font-size: var(--fold-text-2xs);
  font-weight: var(--fold-weight-semibold);
  text-transform: uppercase;
  letter-spacing: var(--fold-tracking-wide);
  padding: 1px 6px;
  border-radius: var(--fold-radius-pill);
  color: var(--fold-color-primary-text);
  background: var(--fold-color-primary-surface);
}

.ic-row-note[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--fold-space-sm);
  padding: var(--fold-space-md) var(--fold-space-lg);
  font-size: var(--fold-text-xs);
  color: var(--fold-color-primary-text);
  border-top: 1px solid var(--fold-color-border-subtle);
}

.ic-list[_ngcontent-%COMP%] {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.ic-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--fold-space-md);
  min-height: 34px;
  padding: 4px 8px;
  border-radius: var(--fold-radius-sm);
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-secondary);
}

.ic-item[_ngcontent-%COMP%]:hover {
  background: var(--fold-color-surface-hover);
}

.ic-empty[_ngcontent-%COMP%] {
  padding: 6px 8px;
}

.ic-readout[_ngcontent-%COMP%] {
  font-family: var(--fold-font-mono);
  font-size: var(--fold-text-sm);
  color: var(--fold-color-primary-text);
}

.ic-stage[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--fold-space-lg);
  flex-wrap: wrap;
}

.ic-log[_ngcontent-%COMP%] {
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-muted);
}`]})}export{F as default};
