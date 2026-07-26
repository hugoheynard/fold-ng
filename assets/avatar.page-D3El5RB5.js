import{s as u,T as U,y as P,ɵ as D,c as L,F as B,d as n,g as v,C as g,f as i,I as b,j as o,m,J as x,i as f,e as c,u as T,q as s,o as h,B as y,h as z,n as S,D as C,aQ as $,k as w,l as k,E as p,H as _,r as F}from"./index-89CG8o_m.js";import{K as I}from"./kind-badge.component-DdN5h_fA.js";import{D as E}from"./playground.component-DuPhDCjE.js";import{a as N,F as M}from"./avatar.component-D9tJSu67.js";import{FoldPageSectionComponent as K}from"./page-section.component-CKCWTDnz.js";import{FoldNavLayoutComponent as R}from"./nav-layout.component-CCGrjszF.js";import{FoldViewNavComponent as j}from"./view-nav.component-BstmYOmX.js";import{FoldAvatarDetailComponent as V}from"./avatar-detail.component-BIsM5cfO.js";import{FoldAvatarListComponent as O}from"./avatar-list.component-BKYlCAe_.js";import{FoldSliderComponent as W}from"./slider.component-DLsPY18s.js";import"./button.component-CJT1RZDw.js";import"./spinner.component-ytgngXW_.js";import"./tokens.catalog-DF_6rd51.js";import"./element-title.component-DIKeRLwd.js";import"./nav-layout.context-BtbmjqTD.js";import"./input-value-Co_u-z_8.js";const q=(a,t)=>t.label,H=(a,t)=>t.imageUrl;function J(a,t){if(a&1){const e=y();n(0,"button",26),g("click",function(){const r=p(e).$implicit,d=s(3);return _(d.avatarPicked.set(r))}),v(1,"fold-avatar",27),i()}if(a&2){const e=t.$implicit,l=s(3);C("is-picked",l.avatarPicked()===e),o(),m("name",e.name)("size",e.size??"md")("variant",e.variant??"solid")("square",e.square??!1)("imageUrl",e.image?l.demoAvatarImage:void 0)("muted",e.muted??!1)("ring",e.ring??"none")("ringStyle",e.ringStyle??"solid")}}function Q(a,t){if(a&1&&(n(0,"div",9)(1,"span",10),c(2),i(),n(3,"div",11),f(4,J,2,10,"button",25,$),i()()),a&2){const e=t.$implicit;o(2),w(e.label),o(2),h(e.items)}}function G(a,t){if(a&1&&v(0,"fold-avatar",12),a&2){const e=t.$implicit;m("name",e.name)("imageUrl",e.imageUrl)}}function X(a,t){if(a&1){const e=y();n(0,"button",28),g("click",function(){const r=p(e).$implicit,d=s(2);return _(d.setPalette(r))}),c(1),i()}if(a&2){const e=t.$implicit,l=s(2);C("is-on",l.activePalette()===e),o(),k(" ",e," ")}}function Y(a,t){if(a&1&&v(0,"fold-avatar",15),a&2){const e=t.$implicit;m("name",e)}}function Z(a,t){if(a&1){const e=y();n(0,"button",29),g("click",function(){p(e);const r=s(2);return _(r.copyDemoCode(r.avatarPickedCode()))}),v(1,"fold-icon",30),c(2),i()}if(a&2){const e=s(2);o(),m("name",e.demoCopied()?"check-circle":"copy"),o(),k(" ",e.demoCopied()?"Copied":"Copy"," ")}}function ee(a,t){if(a&1&&(n(0,"pre",23)(1,"code"),c(2),i()()),a&2){const e=s(2);o(2),w(e.avatarPickedCode())}}function ae(a,t){a&1&&(n(0,"pre",24)(1,"code"),c(2,"<!-- clique un avatar -->"),i()())}function te(a,t){if(a&1&&(n(0,"fold-page-section",4)(1,"div",7)(2,"div",8),f(3,Q,6,1,"div",9,q),n(5,"div",9)(6,"span",10),c(7,"imageUrl — a real team (in-repo photo assets, ~0.7 KB each)"),i(),n(8,"div",11),f(9,G,1,2,"fold-avatar",12,H),i()(),n(11,"div",9)(12,"span",10),c(13,"deterministic colour per seed — switch recolours all at once"),i(),n(14,"div",13),f(15,X,2,3,"button",14,T),i(),n(17,"div",11),f(18,Y,1,1,"fold-avatar",15,T),i()()(),n(20,"div",16)(21,"div",17),v(22,"fold-icon",18),n(23,"span"),c(24,"Exemples illustratifs — clique un avatar pour charger son markup, puis adapte-le à tes données."),i()(),n(25,"div",19)(26,"div",20)(27,"span",21),c(28,"html"),i(),b(29,Z,3,2,"button",22),i(),b(30,ee,3,1,"pre",23)(31,ae,3,0,"pre",24),i()()()()),a&2){const e=s();o(3),h(e.avatarDemos),o(6),h(e.photoTeam),o(6),h(e.palettes),o(3),h(e.avatarNames),o(11),x(e.avatarPickedCode()?29:-1),o(),x(e.avatarPickedCode()?30:31)}}function ie(a,t){if(a&1){const e=y();n(0,"button",33),g("click",function(){const r=p(e).$implicit,d=s(3);return _(d.detailPicked.set(r))}),v(1,"fold-avatar-detail",34),i()}if(a&2){const e=t.$implicit,l=s(3);C("is-picked",l.detailPicked()===e),o(),m("primary",e.primary)("secondary",e.secondary??"")("size",e.size??"md")("variant",e.variant??"solid")("square",e.square??!1)("imageUrl",e.photoSrc??(e.image?l.demoAvatarImage:void 0))}}function ne(a,t){if(a&1&&(n(0,"div",9)(1,"span",10),c(2),i(),n(3,"div",31),f(4,ie,2,8,"button",32,$),i()()),a&2){const e=t.$implicit;o(2),w(e.label),o(2),h(e.items)}}function oe(a,t){if(a&1){const e=y();n(0,"button",29),g("click",function(){p(e);const r=s(2);return _(r.copyDemoCode(r.detailPickedCode()))}),v(1,"fold-icon",30),c(2),i()}if(a&2){const e=s(2);o(),m("name",e.demoCopied()?"check-circle":"copy"),o(),k(" ",e.demoCopied()?"Copied":"Copy"," ")}}function re(a,t){if(a&1&&(n(0,"pre",23)(1,"code"),c(2),i()()),a&2){const e=s(2);o(2),w(e.detailPickedCode())}}function le(a,t){a&1&&(n(0,"pre",24)(1,"code"),c(2,"<!-- clique une cellule -->"),i()())}function se(a,t){if(a&1&&(n(0,"fold-page-section",5)(1,"div",7)(2,"div",8),f(3,ne,6,1,"div",9,q),i(),n(5,"div",16)(6,"div",17),v(7,"fold-icon",18),n(8,"span"),c(9,"Exemples illustratifs — clique une cellule pour charger son markup, puis adapte-le à tes données."),i()(),n(10,"div",19)(11,"div",20)(12,"span",21),c(13,"html"),i(),b(14,oe,3,2,"button",22),i(),b(15,re,3,1,"pre",23)(16,le,3,0,"pre",24),i()()()()),a&2){const e=s();o(3),h(e.detailDemos),o(11),x(e.detailPickedCode()?14:-1),o(),x(e.detailPickedCode()?15:16)}}function ce(a,t){if(a&1){const e=y();n(0,"button",28),g("click",function(){const r=p(e).$implicit,d=s(2);return _(d.alTop.set(r))}),c(1),i()}if(a&2){const e=t.$implicit,l=s(2);C("is-on",l.alTop()===e),o(),k(" ",e," ")}}function de(a,t){if(a&1){const e=y();n(0,"button",28),g("click",function(){const r=p(e).$implicit,d=s(2);return _(d.alSize.set(r))}),c(1),i()}if(a&2){const e=t.$implicit,l=s(2);C("is-on",l.alSize()===e),o(),k(" ",e," ")}}function me(a,t){if(a&1){const e=y();n(0,"fold-page-section",6)(1,"dev-playground",35)(2,"div",36)(3,"fold-slider",37),z("valueChange",function(r){p(e);const d=s();return F(d.alCount,r)||(d.alCount=r),_(r)}),i()(),n(4,"div",36)(5,"fold-slider",38),z("valueChange",function(r){p(e);const d=s();return F(d.alLimit,r)||(d.alLimit=r),_(r)}),i()(),n(6,"div",36)(7,"span",10),c(8,"top (overlap direction)"),i(),n(9,"div",39),f(10,ce,2,3,"button",14,T),i()(),n(12,"div",36)(13,"span",10),c(14,"size"),i(),n(15,"div",39),f(16,de,2,3,"button",14,T),i()(),n(18,"div",36)(19,"span",10),c(20,"shape (uniform — per-face state is in the data)"),i(),n(21,"div",39)(22,"button",28),g("click",function(){p(e);const r=s();return _(r.alSquare.set(!1))}),c(23," round "),i(),n(24,"button",28),g("click",function(){p(e);const r=s();return _(r.alSquare.set(!0))}),c(25," square "),i()()(),v(26,"fold-avatar-list",40),i()()}if(a&2){const e=s();o(),m("code",e.alCode()),o(2),m("min",1)("max",7),S("value",e.alCount),o(2),m("min",0)("max",7),S("value",e.alLimit),o(5),h(e.tops),o(6),h(e.sizes),o(6),C("is-on",!e.alSquare()),o(2),C("is-on",e.alSquare()),o(2),m("avatars",e.alFaces())("limit",e.alLimit())("top",e.alTop())("size",e.alSize())("square",e.alSquare())}}class A{avatarTabs=[{key:"avatar",label:"Avatar"},{key:"detail",label:"Detail"},{key:"list",label:"List"}];avatarTab=u("avatar");avatarNames=["Clément Aubry","Inès Bernard","Marc Machine","Sofia Duarte","Léa Petit","Tom Rivière"];team=[{name:"Clément Aubry",imageUrl:"/fold-ng/avatars/p1.svg"},{name:"Inès Bernard",variant:"ghost"},{name:"Marc Machine",muted:!0},{name:"Sofia Duarte",ring:"accent",ringStyle:"dotted",imageUrl:"/fold-ng/avatars/p3.svg"},{name:"Léa Petit",ring:"warning",ringStyle:"dotted"},{name:"Tom Rivière",imageUrl:"/fold-ng/avatars/p6.svg"},{name:"Nora Khan"}];demoAvatarImage="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44'%3E%3Crect width='44' height='44' fill='%232f855a'/%3E%3Ctext x='22' y='30' font-size='20' fill='white' text-anchor='middle' font-family='sans-serif'%3ES3%3C/text%3E%3C/svg%3E";photoTeam=["Amara Okafor","Noah Bianchi","Priya Raman","Léa Petit","Kwame Mensah","Elena Rossi"].map((t,e)=>({name:t,imageUrl:`/fold-ng/avatars/p${e+1}.svg`}));palette=U(N);palettes=["vivid","extended","pastel"];activePalette=u("vivid");setPalette(t){this.palette.use(t),this.activePalette.set(t)}avatarDemos=[{label:"size · sm / md / lg",items:[{name:"Clément Aubry",size:"sm"},{name:"Clément Aubry",size:"md"},{name:"Clément Aubry",size:"lg"}]},{label:"variant · solid / ghost (guest) · square (org)",items:[{name:"Inès Bernard"},{name:"Inès Bernard",variant:"ghost"},{name:"Foldpherd",square:!0}]},{label:"imageUrl — replaces initials",items:[{name:"Léa Petit",image:!0},{name:"Foldpherd",square:!0,image:!0}]},{label:"state · muted (absence) + status ring (dotted = scheduled)",items:[{name:"Marc Machine",size:"lg",muted:!0},{name:"Sofia Duarte",size:"lg",ring:"accent",ringStyle:"dotted"},{name:"Léa Petit",size:"lg",ring:"warning",ringStyle:"dotted"},{name:"Tom Rivière",size:"lg",ring:"alert",ringStyle:"dotted"},{name:"Nora Khan",size:"lg",ring:"success"}]}];detailDemos=[{label:"two lines (name + email) · sizes",items:[{primary:"Clément Aubry",secondary:"clement@sh3pherd.dev",size:"sm"},{primary:"Clément Aubry",secondary:"clement@sh3pherd.dev"},{primary:"Clément Aubry",secondary:"clement@sh3pherd.dev",size:"lg"}]},{label:"single line",items:[{primary:"Inès Bernard"}]},{label:"ghost (guest) · guest w/ photo · square (org) · image",items:[{primary:"Marc Machine",secondary:"Invité",variant:"ghost"},{primary:"Rina Osei",secondary:"Invité",photoSrc:"/fold-ng/avatars/p2.svg"},{primary:"Foldpherd",secondary:"Organisation",square:!0},{primary:"Léa Petit",secondary:"Design",image:!0}]}];avatarPicked=u(null);detailPicked=u(null);avatarPickedCode=P(()=>{const t=this.avatarPicked();return t?pe(t):""});detailPickedCode=P(()=>{const t=this.detailPicked();return t?_e(t):""});demoCopied=u(!1);copyDemoCode(t){navigator.clipboard.writeText(t).then(()=>{this.demoCopied.set(!0),setTimeout(()=>this.demoCopied.set(!1),1500)})}tops=["first","last"];sizes=["sm","md","lg"];alCount=u(7);alLimit=u(4);alTop=u("first");alSize=u("md");alSquare=u(!1);alFaces=P(()=>this.team.slice(0,this.alCount()));alCode=P(()=>`<fold-avatar-list
  ${['[avatars]="team"',this.alLimit()>0?`[limit]="${this.alLimit()}"`:"",this.alTop()==="first"?"":`top="${this.alTop()}"`,this.alSize()==="md"?"":`size="${this.alSize()}"`,this.alSquare()?"square":""].filter(Boolean).join(`
  `)}
/>`);static ɵfac=function(e){return new(e||A)};static ɵcmp=D({type:A,selectors:[["gal-avatar-page"]],decls:7,vars:4,consts:[["title","avatar"],["titleBadge","","kind","component"],["placement","side",1,"avatar-tabs"],["tabNav","","background","transparent","size","comfortable",3,"activeChange","items","activeKey","activeStyle"],["title","fold-avatar","description","A user or entity avatar: initials on a deterministic colour from the shared palette (same seed → same colour, everywhere), or an image via imageUrl. ghost dashes the border for guests; square switches to a rounded tile for orgs."],["title","fold-avatar-detail — identity cell","description","The canonical identity cell: an avatar beside one or two lines of text (name + email, entity + subtitle). A single line centres against the avatar; two lines stack. The initials and colour derive from the primary line unless avatarName overrides it."],["title","fold-avatar-list","description","A row of slightly-overlapping avatars — the org-chart 'who sits on this node' cluster. Past limit, the remainder collapses into a trailing +N chip. top chooses which end stacks on top."],[1,"demo-inspect"],[1,"demo-groups"],[1,"gal-cell"],[1,"gal-tag"],[1,"gal-row"],["size","lg",3,"name","imageUrl"],[1,"palette-switch"],["type","button",3,"is-on"],["size","lg",3,"name"],[1,"demo-code"],[1,"code-note"],["name","warning","size","sm"],[1,"code-block"],[1,"code-top"],[1,"code-lang"],["type","button",1,"code-copy"],[1,"code-pre"],[1,"code-pre","code-pre--empty"],["type","button",1,"demo-pick",3,"is-picked"],["type","button",1,"demo-pick",3,"click"],[3,"name","size","variant","square","imageUrl","muted","ring","ringStyle"],["type","button",3,"click"],["type","button",1,"code-copy",3,"click"],["size","sm",3,"name"],[1,"gal-row","gal-row--wide"],["type","button",1,"demo-pick","demo-pick--wide",3,"is-picked"],["type","button",1,"demo-pick","demo-pick--wide",3,"click"],[3,"primary","secondary","size","variant","square","imageUrl"],["stage","",3,"code"],["params","",1,"np-field"],["label","faces",3,"valueChange","min","max","value"],["label","limit (0 = all)",3,"valueChange","min","max","value"],[1,"ss-seg"],[3,"avatars","limit","top","size","square"]],template:function(e,l){if(e&1&&(n(0,"fold-page-layout",0),v(1,"gal-kind-badge",1),n(2,"fold-nav-layout",2)(3,"fold-view-nav",3),g("activeChange",function(d){return l.avatarTab.set(d)}),i(),b(4,te,32,2,"fold-page-section",4)(5,se,17,2,"fold-page-section",5)(6,me,27,16,"fold-page-section",6),i()()),e&2){let r;o(3),m("items",l.avatarTabs)("activeKey",l.avatarTab())("activeStyle","fill"),o(),x((r=l.avatarTab())==="avatar"?4:r==="detail"?5:r==="list"?6:-1)}},dependencies:[I,L,K,R,j,M,V,O,W,B,E],styles:[`@charset "UTF-8";
/* avatar family page — the tab-nav that switches the three components. */
.avatar-tabs {
  margin-bottom: 24px;
}

/* avatar / avatar-detail tabs — demos (clickable) beside a live code panel. */
.demo-inspect {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: flex-start;
}

.demo-groups {
  flex: 1 1 360px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.demo-code {
  flex: 1 1 320px;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: sticky;
  top: 0;
}

/* A demo becomes a click target — reset the button chrome, highlight on pick. */
.demo-pick {
  padding: 4px;
  border: 1px solid transparent;
  border-radius: var(--fold-radius-md);
  background: none;
  line-height: 0;
  cursor: pointer;
}

.demo-pick--wide {
  line-height: normal;
  text-align: left;
}

.demo-pick:hover {
  border-color: var(--fold-color-border);
}

/* The explanatory note in the code panel — a soft (tinted) warning callout. */
.code-note {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 10px 12px;
  border-radius: var(--fold-radius-md);
  border: 1px solid var(--fold-color-warning-border);
  background: var(--fold-color-warning-surface);
  color: var(--fold-color-warning-text);
  font-size: 12px;
  line-height: 1.5;
}

.code-note fold-icon {
  flex: none;
  margin-top: 1px;
}

.code-pre--empty {
  color: var(--fold-color-text-muted);
}

/* ── Avatar page: the app-wide palette switch ─────────────────── */
.palette-switch {
  display: flex;
  gap: 4px;
  margin-bottom: 4px;
}

.palette-switch button {
  padding: 5px 12px;
  border-radius: var(--fold-radius-sm);
  border: 1px solid var(--fold-color-border);
  background: var(--fold-color-surface-sunken);
  color: var(--fold-color-text-secondary);
  font: inherit;
  font-size: 12px;
  text-transform: capitalize;
  cursor: pointer;
}`],encapsulation:2})}function pe(a){return`<fold-avatar ${[`name="${a.name}"`,a.size&&a.size!=="md"?`size="${a.size}"`:"",a.variant&&a.variant!=="solid"?`variant="${a.variant}"`:"",a.square?"square":"",a.image?'[imageUrl]="logoUrl"':"",a.muted?'[muted]="true"':"",a.ring&&a.ring!=="none"?`ring="${a.ring}"`:"",a.ringStyle&&a.ringStyle!=="solid"?`ringStyle="${a.ringStyle}"`:""].filter(Boolean).join(" ")} />`}function _e(a){return`<fold-avatar-detail ${[`primary="${a.primary}"`,a.secondary?`secondary="${a.secondary}"`:"",a.size&&a.size!=="md"?`size="${a.size}"`:"",a.variant&&a.variant!=="solid"?`variant="${a.variant}"`:"",a.square?"square":"",a.photoSrc?'[imageUrl]="photoUrl"':a.image?'[imageUrl]="logoUrl"':""].filter(Boolean).join(" ")} />`}export{A as default};
