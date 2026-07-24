import{t as z,a$ as B,u as U,B as y,ɵ as L,i as f,b0 as q,L as x,o as h,j as s,M as P,x as C,d as i,g as v,f as n,z as l,D as I,m,e as c,S as E,l as k,s as u,U as N,c as j,F as K,G as g,T as R,y as T,E as b,h as S,n as $,k as A,H as p,I as _,q as M}from"./index-C0RnAu35.js";import{K as V}from"./kind-badge.component-CEFEK19j.js";import{D as W}from"./playground.component-lx6t5Kks.js";import{a as O,b as H,F as G}from"./avatar-detail.component-CzZP1A52.js";import{F as J}from"./page-section.component-a0pNG0KY.js";import{F as Q}from"./tab-layout.component-zlc3CSAI.js";import{F as X}from"./tab-nav.component-D1NpqFuZ.js";import{F as Y}from"./slider.component-S8LgwC2i.js";import"./button.component-DeB1NKmu.js";import"./spinner.component-BdGblqXb.js";import"./tokens.catalog-DF_6rd51.js";import"./element-title.component-SvK6Mh65.js";import"./input-value-Co_u-z_8.js";function Z(t,a){if(t&1&&(i(0,"span",2),v(1,"fold-avatar",3),n()),t&2){const e=a.$implicit,o=a.$index,r=l();I("z-index",r.z(o)),s(),m("name",e.name)("imageUrl",e.imageUrl)("colorSeed",e.colorSeed)("size",r.size())("square",r.square())("variant",e.variant??"solid")("muted",e.muted??!1)("ring",e.ring??"none")("ringStyle",e.ringStyle??"solid")}}function ee(t,a){if(t&1&&(i(0,"span",1),c(1),n()),t&2){const e=l();E("title",e.overflow()+" more"),s(),k("+",e.overflow())}}class w{avatars=z.required();limit=z(0,{transform:B});top=z("first");size=z("md");square=z(!1,{transform:U});visible=y(()=>{const a=this.limit(),e=this.avatars();return a>0&&e.length>a?e.slice(0,a):e});overflow=y(()=>this.avatars().length-this.visible().length);z(a){const e=this.visible().length;return this.top()==="first"?e-a:a+1}static ɵfac=function(e){return new(e||w)};static ɵcmp=L({type:w,selectors:[["fold-avatar-list"]],hostVars:8,hostBindings:function(e,o){e&2&&C("size-sm",o.size()==="sm")("size-md",o.size()==="md")("size-lg",o.size()==="lg")("is-square",o.square())},inputs:{avatars:[1,"avatars"],limit:[1,"limit"],top:[1,"top"],size:[1,"size"],square:[1,"square"]},decls:3,vars:1,consts:[[1,"al-item",3,"z-index"],[1,"al-more"],[1,"al-item"],[3,"name","imageUrl","colorSeed","size","square","variant","muted","ring","ringStyle"]],template:function(e,o){e&1&&(f(0,Z,2,11,"span",0,q),x(2,ee,2,2,"span",1)),e&2&&(h(o.visible()),s(2),P(o.overflow()>0?2:-1))},dependencies:[O],styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  display: inline-flex;
  align-items: center;
  

  --fold-avatar-list-ring: var(--fold-color-surface-card);
}

.al-item[_ngcontent-%COMP%] {
  position: relative;
  display: inline-flex;
  border-radius: var(--fold-radius-round);
  


  background: var(--fold-avatar-list-ring);
  box-shadow: 0 0 0 2px var(--fold-avatar-list-ring);
}

.is-square[_nghost-%COMP%]   .al-item[_ngcontent-%COMP%] {
  border-radius: var(--fold-radius-sm);
}


.al-item[_ngcontent-%COMP%]    + .al-item[_ngcontent-%COMP%] {
  margin-left: var(--al-overlap);
}

.size-sm[_nghost-%COMP%] {
  --al-overlap: -5px;
}

.size-md[_nghost-%COMP%] {
  --al-overlap: -8px;
}

.size-lg[_nghost-%COMP%] {
  --al-overlap: -11px;
}



.al-more[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-left: 6px;
  border-radius: var(--fold-radius-round);
  background: var(--fold-color-primary-surface);
  color: var(--fold-color-primary-text);
  font-weight: 700;
  letter-spacing: 0.02em;
  user-select: none;
}

.is-square[_nghost-%COMP%]   .al-more[_ngcontent-%COMP%] {
  border-radius: var(--fold-radius-sm);
}

.size-sm[_nghost-%COMP%]   .al-more[_ngcontent-%COMP%] {
  width: 20px;
  height: 20px;
  font-size: 8px;
}

.size-md[_nghost-%COMP%]   .al-more[_ngcontent-%COMP%] {
  width: 32px;
  height: 32px;
  font-size: 11px;
}

.size-lg[_nghost-%COMP%]   .al-more[_ngcontent-%COMP%] {
  width: 44px;
  height: 44px;
  font-size: 14px;
}`]})}const D=(t,a)=>a.label;function te(t,a){if(t&1){const e=b();i(0,"button",26),g("click",function(){const r=p(e).$implicit,d=l(3);return _(d.avatarPicked.set(r))}),v(1,"fold-avatar",27),n()}if(t&2){const e=a.$implicit,o=l(3);C("is-picked",o.avatarPicked()===e),s(),m("name",e.name)("size",e.size??"md")("variant",e.variant??"solid")("square",e.square??!1)("imageUrl",e.image?o.demoAvatarImage:void 0)("muted",e.muted??!1)("ring",e.ring??"none")("ringStyle",e.ringStyle??"solid")}}function ae(t,a){if(t&1&&(i(0,"div",10)(1,"span",11),c(2),n(),i(3,"div",14),f(4,te,2,10,"button",25,q),n()()),t&2){const e=a.$implicit;s(2),A(e.label),s(2),h(e.items)}}function ne(t,a){if(t&1){const e=b();i(0,"button",28),g("click",function(){const r=p(e).$implicit,d=l(2);return _(d.setPalette(r))}),c(1),n()}if(t&2){const e=a.$implicit,o=l(2);C("is-on",o.activePalette()===e),s(),k(" ",e," ")}}function ie(t,a){if(t&1&&v(0,"fold-avatar",15),t&2){const e=a.$implicit;m("name",e)}}function oe(t,a){if(t&1){const e=b();i(0,"button",29),g("click",function(){p(e);const r=l(2);return _(r.copyDemoCode(r.avatarPickedCode()))}),v(1,"fold-icon",30),c(2),n()}if(t&2){const e=l(2);s(),m("name",e.demoCopied()?"check-circle":"copy"),s(),k(" ",e.demoCopied()?"Copied":"Copy"," ")}}function re(t,a){if(t&1&&(i(0,"pre",23)(1,"code"),c(2),n()()),t&2){const e=l(2);s(2),A(e.avatarPickedCode())}}function se(t,a){t&1&&(i(0,"pre",24)(1,"code"),c(2,"<!-- clique un avatar -->"),n()())}function le(t,a){if(t&1&&(i(0,"fold-page-section",5)(1,"div",8)(2,"div",9),f(3,ae,6,1,"div",10,D),i(5,"div",10)(6,"span",11),c(7,"deterministic colour per seed — switch recolours all at once"),n(),i(8,"div",12),f(9,ne,2,3,"button",13,T),n(),i(11,"div",14),f(12,ie,1,1,"fold-avatar",15,T),n()()(),i(14,"div",16)(15,"div",17),v(16,"fold-icon",18),i(17,"span"),c(18,"Exemples illustratifs — clique un avatar pour charger son markup, puis adapte-le à tes données."),n()(),i(19,"div",19)(20,"div",20)(21,"span",21),c(22,"html"),n(),x(23,oe,3,2,"button",22),n(),x(24,re,3,1,"pre",23)(25,se,3,0,"pre",24),n()()()()),t&2){const e=l();s(3),h(e.avatarDemos),s(6),h(e.palettes),s(3),h(e.avatarNames),s(11),P(e.avatarPickedCode()?23:-1),s(),P(e.avatarPickedCode()?24:25)}}function ce(t,a){if(t&1){const e=b();i(0,"button",33),g("click",function(){const r=p(e).$implicit,d=l(3);return _(d.detailPicked.set(r))}),v(1,"fold-avatar-detail",34),n()}if(t&2){const e=a.$implicit,o=l(3);C("is-picked",o.detailPicked()===e),s(),m("primary",e.primary)("secondary",e.secondary??"")("size",e.size??"md")("variant",e.variant??"solid")("square",e.square??!1)("imageUrl",e.image?o.demoAvatarImage:void 0)}}function de(t,a){if(t&1&&(i(0,"div",10)(1,"span",11),c(2),n(),i(3,"div",31),f(4,ce,2,8,"button",32,q),n()()),t&2){const e=a.$implicit;s(2),A(e.label),s(2),h(e.items)}}function me(t,a){if(t&1){const e=b();i(0,"button",29),g("click",function(){p(e);const r=l(2);return _(r.copyDemoCode(r.detailPickedCode()))}),v(1,"fold-icon",30),c(2),n()}if(t&2){const e=l(2);s(),m("name",e.demoCopied()?"check-circle":"copy"),s(),k(" ",e.demoCopied()?"Copied":"Copy"," ")}}function pe(t,a){if(t&1&&(i(0,"pre",23)(1,"code"),c(2),n()()),t&2){const e=l(2);s(2),A(e.detailPickedCode())}}function _e(t,a){t&1&&(i(0,"pre",24)(1,"code"),c(2,"<!-- clique une cellule -->"),n()())}function ue(t,a){if(t&1&&(i(0,"fold-page-section",6)(1,"div",8)(2,"div",9),f(3,de,6,1,"div",10,D),n(),i(5,"div",16)(6,"div",17),v(7,"fold-icon",18),i(8,"span"),c(9,"Exemples illustratifs — clique une cellule pour charger son markup, puis adapte-le à tes données."),n()(),i(10,"div",19)(11,"div",20)(12,"span",21),c(13,"html"),n(),x(14,me,3,2,"button",22),n(),x(15,pe,3,1,"pre",23)(16,_e,3,0,"pre",24),n()()()()),t&2){const e=l();s(3),h(e.detailDemos),s(11),P(e.detailPickedCode()?14:-1),s(),P(e.detailPickedCode()?15:16)}}function ge(t,a){if(t&1){const e=b();i(0,"button",28),g("click",function(){const r=p(e).$implicit,d=l(2);return _(d.alTop.set(r))}),c(1),n()}if(t&2){const e=a.$implicit,o=l(2);C("is-on",o.alTop()===e),s(),k(" ",e," ")}}function ve(t,a){if(t&1){const e=b();i(0,"button",28),g("click",function(){const r=p(e).$implicit,d=l(2);return _(d.alSize.set(r))}),c(1),n()}if(t&2){const e=a.$implicit,o=l(2);C("is-on",o.alSize()===e),s(),k(" ",e," ")}}function fe(t,a){if(t&1){const e=b();i(0,"fold-page-section",7)(1,"dev-playground",35)(2,"div",36)(3,"fold-slider",37),S("valueChange",function(r){p(e);const d=l();return M(d.alCount,r)||(d.alCount=r),_(r)}),n()(),i(4,"div",36)(5,"fold-slider",38),S("valueChange",function(r){p(e);const d=l();return M(d.alLimit,r)||(d.alLimit=r),_(r)}),n()(),i(6,"div",36)(7,"span",11),c(8,"top (overlap direction)"),n(),i(9,"div",39),f(10,ge,2,3,"button",13,T),n()(),i(12,"div",36)(13,"span",11),c(14,"size"),n(),i(15,"div",39),f(16,ve,2,3,"button",13,T),n()(),i(18,"div",36)(19,"span",11),c(20,"shape (uniform — per-face state is in the data)"),n(),i(21,"div",39)(22,"button",28),g("click",function(){p(e);const r=l();return _(r.alSquare.set(!1))}),c(23," round "),n(),i(24,"button",28),g("click",function(){p(e);const r=l();return _(r.alSquare.set(!0))}),c(25," square "),n()()(),v(26,"fold-avatar-list",40),n()()}if(t&2){const e=l();s(),m("code",e.alCode()),s(2),m("min",1)("max",7),$("value",e.alCount),s(2),m("min",0)("max",7),$("value",e.alLimit),s(5),h(e.tops),s(6),h(e.sizes),s(6),C("is-on",!e.alSquare()),s(2),C("is-on",e.alSquare()),s(2),m("avatars",e.alFaces())("limit",e.alLimit())("top",e.alTop())("size",e.alSize())("square",e.alSquare())}}class F{avatarTabs=[{key:"avatar",label:"Avatar"},{key:"detail",label:"Detail"},{key:"list",label:"List"}];avatarTab=u("avatar");avatarNames=["Clément Aubry","Inès Bernard","Marc Machine","Sofia Duarte","Léa Petit","Tom Rivière"];team=[{name:"Clément Aubry"},{name:"Inès Bernard",variant:"ghost"},{name:"Marc Machine",muted:!0},{name:"Sofia Duarte",ring:"accent",ringStyle:"dotted"},{name:"Léa Petit",ring:"warning",ringStyle:"dotted"},{name:"Tom Rivière"},{name:"Nora Khan"}];demoAvatarImage="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44'%3E%3Crect width='44' height='44' fill='%232f855a'/%3E%3Ctext x='22' y='30' font-size='20' fill='white' text-anchor='middle' font-family='sans-serif'%3ES3%3C/text%3E%3C/svg%3E";palette=N(H);palettes=["vivid","extended","pastel"];activePalette=u("vivid");setPalette(a){this.palette.use(a),this.activePalette.set(a)}avatarDemos=[{label:"size · sm / md / lg",items:[{name:"Clément Aubry",size:"sm"},{name:"Clément Aubry",size:"md"},{name:"Clément Aubry",size:"lg"}]},{label:"variant · solid / ghost (guest) · square (org)",items:[{name:"Inès Bernard"},{name:"Inès Bernard",variant:"ghost"},{name:"Foldpherd",square:!0}]},{label:"imageUrl — replaces initials",items:[{name:"Léa Petit",image:!0},{name:"Foldpherd",square:!0,image:!0}]},{label:"state · muted (absence) + status ring (dotted = scheduled)",items:[{name:"Marc Machine",size:"lg",muted:!0},{name:"Sofia Duarte",size:"lg",ring:"accent",ringStyle:"dotted"},{name:"Léa Petit",size:"lg",ring:"warning",ringStyle:"dotted"},{name:"Tom Rivière",size:"lg",ring:"alert",ringStyle:"dotted"},{name:"Nora Khan",size:"lg",ring:"success"}]}];detailDemos=[{label:"two lines (name + email) · sizes",items:[{primary:"Clément Aubry",secondary:"clement@sh3pherd.dev",size:"sm"},{primary:"Clément Aubry",secondary:"clement@sh3pherd.dev"},{primary:"Clément Aubry",secondary:"clement@sh3pherd.dev",size:"lg"}]},{label:"single line",items:[{primary:"Inès Bernard"}]},{label:"ghost (guest) · square (org) · image",items:[{primary:"Marc Machine",secondary:"Invité",variant:"ghost"},{primary:"Foldpherd",secondary:"Organisation",square:!0},{primary:"Léa Petit",secondary:"Design",image:!0}]}];avatarPicked=u(null);detailPicked=u(null);avatarPickedCode=y(()=>{const a=this.avatarPicked();return a?he(a):""});detailPickedCode=y(()=>{const a=this.detailPicked();return a?Ce(a):""});demoCopied=u(!1);copyDemoCode(a){navigator.clipboard.writeText(a).then(()=>{this.demoCopied.set(!0),setTimeout(()=>this.demoCopied.set(!1),1500)})}tops=["first","last"];sizes=["sm","md","lg"];alCount=u(7);alLimit=u(4);alTop=u("first");alSize=u("md");alSquare=u(!1);alFaces=y(()=>this.team.slice(0,this.alCount()));alCode=y(()=>`<fold-avatar-list
  ${['[avatars]="team"',this.alLimit()>0?`[limit]="${this.alLimit()}"`:"",this.alTop()==="first"?"":`top="${this.alTop()}"`,this.alSize()==="md"?"":`size="${this.alSize()}"`,this.alSquare()?"square":""].filter(Boolean).join(`
  `)}
/>`);static ɵfac=function(e){return new(e||F)};static ɵcmp=L({type:F,selectors:[["gal-avatar-page"]],decls:8,vars:5,consts:[["tl","foldTabLayout"],["title","avatar"],["titleBadge","","kind","component"],["placement","side",1,"avatar-tabs"],["tabNav","","background","transparent","size","comfortable",3,"tabChange","tabs","activeKey","direction","activeStyle"],["title","fold-avatar","description","A user or entity avatar: initials on a deterministic colour from the shared palette (same seed → same colour, everywhere), or an image via imageUrl. ghost dashes the border for guests; square switches to a rounded tile for orgs."],["title","fold-avatar-detail — identity cell","description","The canonical identity cell: an avatar beside one or two lines of text (name + email, entity + subtitle). A single line centres against the avatar; two lines stack. The initials and colour derive from the primary line unless avatarName overrides it."],["title","fold-avatar-list","description","A row of slightly-overlapping avatars — the org-chart 'who sits on this node' cluster. Past limit, the remainder collapses into a trailing +N chip. top chooses which end stacks on top."],[1,"demo-inspect"],[1,"demo-groups"],[1,"gal-cell"],[1,"gal-tag"],[1,"palette-switch"],["type","button",3,"is-on"],[1,"gal-row"],["size","lg",3,"name"],[1,"demo-code"],[1,"code-note"],["name","warning","size","sm"],[1,"code-block"],[1,"code-top"],[1,"code-lang"],["type","button",1,"code-copy"],[1,"code-pre"],[1,"code-pre","code-pre--empty"],["type","button",1,"demo-pick",3,"is-picked"],["type","button",1,"demo-pick",3,"click"],[3,"name","size","variant","square","imageUrl","muted","ring","ringStyle"],["type","button",3,"click"],["type","button",1,"code-copy",3,"click"],["size","sm",3,"name"],[1,"gal-row","gal-row--wide"],["type","button",1,"demo-pick","demo-pick--wide",3,"is-picked"],["type","button",1,"demo-pick","demo-pick--wide",3,"click"],[3,"primary","secondary","size","variant","square","imageUrl"],["stage","",3,"code"],["params","",1,"np-field"],["label","faces",3,"valueChange","min","max","value"],["label","limit (0 = all)",3,"valueChange","min","max","value"],[1,"ss-seg"],[3,"avatars","limit","top","size","square"]],template:function(e,o){if(e&1&&(i(0,"fold-page-layout",1),v(1,"gal-kind-badge",2),i(2,"fold-tab-layout",3,0)(4,"fold-tab-nav",4),g("tabChange",function(d){return o.avatarTab.set(d)}),n(),x(5,le,26,2,"fold-page-section",5)(6,ue,17,2,"fold-page-section",6)(7,fe,27,16,"fold-page-section",7),n()()),e&2){let r;const d=R(3);s(4),m("tabs",o.avatarTabs)("activeKey",o.avatarTab())("direction",d.stacked()?"horizontal":"vertical")("activeStyle","fill"),s(),P((r=o.avatarTab())==="avatar"?5:r==="detail"?6:r==="list"?7:-1)}},dependencies:[V,j,J,Q,X,O,G,w,Y,K,W],styles:[`@charset "UTF-8";
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
}`],encapsulation:2})}function he(t){return`<fold-avatar ${[`name="${t.name}"`,t.size&&t.size!=="md"?`size="${t.size}"`:"",t.variant&&t.variant!=="solid"?`variant="${t.variant}"`:"",t.square?"square":"",t.image?'[imageUrl]="logoUrl"':"",t.muted?'[muted]="true"':"",t.ring&&t.ring!=="none"?`ring="${t.ring}"`:"",t.ringStyle&&t.ringStyle!=="solid"?`ringStyle="${t.ringStyle}"`:""].filter(Boolean).join(" ")} />`}function Ce(t){return`<fold-avatar-detail ${[`primary="${t.primary}"`,t.secondary?`secondary="${t.secondary}"`:"",t.size&&t.size!=="md"?`size="${t.size}"`:"",t.variant&&t.variant!=="solid"?`variant="${t.variant}"`:"",t.square?"square":"",t.image?'[imageUrl]="logoUrl"':""].filter(Boolean).join(" ")} />`}export{F as default};
