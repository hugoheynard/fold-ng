import{s as m,B as P,J as R,K as V,ɵ as q,c as K,b3 as N,b4 as Q,b9 as D,F as U,d as r,g as M,G as d,e as s,f as l,L as y,i as h,y as F,j as a,x as b,m as v,M as w,o as k,k as C,N as G,O as J,z as c,E as x,l as S,a_ as I,S as W,D as j,H as _,I as f,T as L}from"./index-2SvTd3I-.js";import{a as X}from"./tokens.catalog-DF_6rd51.js";import{K as Y}from"./kind-badge.component-2hQDQqGr.js";import{F as Z}from"./context-card.component-FCQtfxnA.js";import"./element-title.component-C_YDoh8n.js";function $(i,n){return{prop:X(i),desc:n,kind:"color"}}function O(i,n){return{prop:`--fold-radius-${i}`,desc:n,kind:"radius"}}function ee(i,n,o){const e={...i},t=o.trim();return t?e[n]=t:delete e[n],e}function oe(i,n){const o=Object.entries(n);if(o.length===0)return"/* adjust a token on the left to see the CSS here */";const e=[`${i} {`];for(const[t,u]of o)e.push(`  ${t}: ${u};`);return e.push("}"),e.join(`
`)}function ne(i,n,o){if(i)for(const e of n)for(const t of e.tokens){const u=o[t.prop];u?i.style.setProperty(t.prop,u):i.style.removeProperty(t.prop)}}const te=["menuPreview"],z=(i,n)=>n.id,ie=(i,n)=>n.label,re=(i,n)=>n.prop;function le(i,n){i&1&&(r(0,"div",13),s(1,"S3"),l())}function ae(i,n){if(i&1){const o=x();r(0,"button",34),d("click",function(){const t=_(o).$index,u=c(2).$implicit,p=c();return f(p.menuActive.set(u.id+"-"+t))}),l()}if(i&2){const o=n.$implicit,e=n.$index,t=c(2),u=t.$implicit,p=t.$index,g=c();v("icon",o)("label",g.labelFor(o))("active",g.menuActive()===u.id+"-"+e)("badge",g.previewBadge(p,e))("badgeTone",g.menuBadgeTone())}}function se(i,n){if(i&1&&(r(0,"fold-menu-section",32),h(1,ae,1,5,"button",33,I),l()),i&2){const o=c().$implicit,e=c();v("label",o.name)("color",o.color)("collapsible",e.menuSectionCollapsible()),a(),k(e.iconsFor(o.icons))}}function ce(i,n){if(i&1){const o=x();r(0,"button",34),d("click",function(){const t=_(o).$index,u=c(2).$implicit,p=c();return f(p.menuActive.set(u.id+"-"+t))}),l()}if(i&2){const o=n.$implicit,e=n.$index,t=c(2),u=t.$implicit,p=t.$index,g=c();v("icon",o)("label",g.labelFor(o))("active",g.menuActive()===u.id+"-"+e)("badge",g.previewBadge(p,e))("badgeTone",g.menuBadgeTone())}}function ue(i,n){if(i&1&&h(0,ce,1,5,"button",33,I),i&2){const o=c().$implicit,e=c();k(e.iconsFor(o.icons))}}function de(i,n){if(i&1&&y(0,se,3,3,"fold-menu-section",32)(1,ue,2,0),i&2){const o=c();w(o.menuSections()?0:1)}}function pe(i,n){i&1&&M(0,"button",14)}function me(i,n){if(i&1){const o=x();r(0,"div",15)(1,"div",35)(2,"div",36)(3,"span",37),s(4,"html"),l(),r(5,"button",38),d("click",function(){_(o);const t=c();return f(t.copyMenuCode())}),M(6,"fold-icon",39),s(7),l()(),r(8,"pre",40)(9,"code"),s(10),l()()(),r(11,"div",35)(12,"div",36)(13,"span",37),s(14,"css · variables to override"),l(),r(15,"button",38),d("click",function(){_(o);const t=c();return f(t.copyMenuTokensCss())}),M(16,"fold-icon",39),s(17),l()(),r(18,"pre",40)(19,"code"),s(20),l()()()()}if(i&2){const o=c();a(6),v("name",o.menuCopied()?"check-circle":"copy"),a(),S(" ",o.menuCopied()?"Copied":"Copy"," "),a(3),C(o.menuCode()),a(6),v("name",o.menuCssCopied()?"check-circle":"copy"),a(),S(" ",o.menuCssCopied()?"Copied":"Copy"," "),a(3),C(o.menuTokensCss())}}function _e(i,n){if(i&1){const o=x();r(0,"button",21),d("click",function(){const t=_(o).$implicit,u=c(2);return f(u.menuArrow.set(t))}),s(1),l()}if(i&2){const o=n.$implicit,e=c(2);b("is-on",e.menuArrow()===o),a(),S(" ",o," ")}}function fe(i,n){if(i&1&&(r(0,"div",18)(1,"span",19),s(2,"collapse arrow → "),r(3,"b"),s(4),l()(),r(5,"div",20),h(6,_e,2,3,"button",22,F),l()()),i&2){const o=c();a(4),C(o.resolvedArrow()),a(2),k(o.menuArrows)}}function be(i,n){if(i&1){const o=x();r(0,"div",18)(1,"span",19),s(2,"section behaviour"),l(),r(3,"div",20)(4,"button",21),d("click",function(){_(o);const t=c();return f(t.menuSectionCollapsible.set(!1))}),s(5," static "),l(),r(6,"button",21),d("click",function(){_(o);const t=c();return f(t.menuSectionCollapsible.set(!0))}),s(7," collapsible "),l()()()}if(i&2){const o=c();a(4),b("is-on",!o.menuSectionCollapsible()),a(2),b("is-on",o.menuSectionCollapsible())}}function ge(i,n){if(i&1){const o=x();r(0,"button",21),d("click",function(){const t=_(o).$implicit,u=c();return f(u.menuTint.set(t))}),s(1),l()}if(i&2){const o=n.$implicit,e=c();b("is-on",e.menuTint()===o),a(),S(" ",o," ")}}function ve(i,n){if(i&1){const o=x();r(0,"button",21),d("click",function(){const t=_(o).$implicit,u=c();return f(u.menuLevel.set(t))}),s(1),l()}if(i&2){const o=n.$implicit,e=c();b("is-on",e.menuLevel()===o),a(),S(" ",o," ")}}function he(i,n){if(i&1){const o=x();r(0,"button",21),d("click",function(){const t=_(o).$implicit,u=c(2);return f(u.menuBadgeTone.set(t))}),s(1),l()}if(i&2){const o=n.$implicit,e=c(2);b("is-on",e.menuBadgeTone()===o),a(),S(" ",o," ")}}function ke(i,n){if(i&1&&(r(0,"div",18)(1,"span",19),s(2,"badge tone"),l(),r(3,"div",20),h(4,he,2,3,"button",22,F),l()()),i&2){const o=c();a(4),k(o.menuBadgeTones)}}function xe(i,n){if(i&1){const o=x();r(0,"div",27)(1,"input",41,1),d("input",function(){const t=_(o).$implicit,u=L(2),p=c();return f(p.setSectionColor(t.id,u.value))}),l(),r(3,"input",42,2),d("input",function(){const t=_(o).$implicit,u=L(4),p=c();return f(p.setSectionName(t.id,u.value))}),l(),r(5,"div",24)(6,"button",43),d("click",function(){const t=_(o).$implicit,u=c();return f(u.stepSectionIcons(t.id,-1))}),s(7," − "),l(),r(8,"b"),s(9),l(),r(10,"button",44),d("click",function(){const t=_(o).$implicit,u=c();return f(u.stepSectionIcons(t.id,1))}),s(11," + "),l()(),r(12,"button",45),d("click",function(){const t=_(o).$implicit,u=c();return f(u.removeSection(t.id))}),s(13," × "),l()()}if(i&2){const o=n.$implicit;a(),v("value",o.color),a(2),v("value",o.name),a(6),C(o.icons)}}function ye(i,n){if(i&1&&M(0,"span",54),i&2){const o=c().$implicit,e=c(2);j("background",e.menuOverrides()[o.prop]||"var("+o.prop+")")}}function we(i,n){if(i&1&&M(0,"span",55),i&2){const o=c().$implicit,e=c(2);j("border-radius",e.menuOverrides()[o.prop]||"var("+o.prop+")")}}function Ce(i,n){if(i&1){const o=x();r(0,"div",47),y(1,ye,1,2,"span",48)(2,we,1,2,"span",49),r(3,"div",50)(4,"code",51),s(5),l(),r(6,"span",52),s(7),l()(),r(8,"input",53,3),d("input",function(){const t=_(o).$implicit,u=L(9),p=c(2);return f(p.setMenuOverride(t.prop,u.value))}),l()()}if(i&2){const o=n.$implicit,e=c(2);a(),w(o.kind==="color"?1:2),a(4),C(o.prop),a(2),C(o.desc),a(),v("value",e.menuOverrides()[o.prop]||"")("placeholder",o.kind==="color"?"#7c5bbf":"12px"),W("aria-label","Override "+o.prop)}}function Te(i,n){if(i&1&&(r(0,"div",30)(1,"span",46),s(2),l(),h(3,Ce,10,6,"div",47,re),l()),i&2){const o=n.$implicit;a(2),C(o.label),a(),k(o.tokens)}}class A{menuActive=m("");menuExpanded=m(!1);menuCollapsible=m(!0);menuHeader=m(!0);menuSections=m(!0);menuSectionCollapsible=m(!1);menuFooter=m(!0);menuBadge=m("none");menuBadgeTone=m("follow");menuBadgeTones=["follow","accent","info","warning","alert","success"];menuBadgeValue=P(()=>{const n=this.menuBadge();if(n!=="none")return n==="count"?3:"new"});previewBadge(n,o){return n===0&&o===0?this.menuBadgeValue():void 0}badgeAttrs(n){if(n===void 0)return"";const o=typeof n=="number"?` [badge]="${n}"`:` badge="${n}"`,e=this.menuBadgeTone();return`${o}${e==="follow"?"":` badgeTone="${e}"`}`}menuTint=m("follow");menuTints=["follow","neutral","primary"];menuLevel=m("primary");menuLevels=["primary","secondary","tertiary"];menuArrow=m("auto");menuArrows=["auto","header","footer","body"];resolvedArrow=P(()=>{const n=this.menuArrow();return n!=="auto"?n:this.menuFooter()?"footer":this.menuHeader()?"header":"body"});menuSectionList=m([{id:"s1",name:"Personal",color:"#06a4a4",icons:3},{id:"s2",name:"More",color:"#7c5bbf",icons:2}]);sectionSeq=3;iconPool=["home","contracts","music","bell","company","edit"];iconsFor(n){return Array.from({length:n},(o,e)=>this.iconPool[e%this.iconPool.length])}labelFor(n){return n.charAt(0).toUpperCase()+n.slice(1)}addSection(){const n=`s${this.sectionSeq++}`;this.menuSectionList.update(o=>[...o,{id:n,name:"Section",color:"#5b8def",icons:2}])}removeSection(n){this.menuSectionList.update(o=>o.filter(e=>e.id!==n))}setSectionName(n,o){this.menuSectionList.update(e=>e.map(t=>t.id===n?{...t,name:o}:t))}setSectionColor(n,o){this.menuSectionList.update(e=>e.map(t=>t.id===n?{...t,color:o}:t))}stepSectionIcons(n,o){this.menuSectionList.update(e=>e.map(t=>t.id===n?{...t,icons:Math.max(0,Math.min(8,t.icons+o))}:t))}menuCode=P(()=>{const n=[this.menuCollapsible()?'collapsible [(expanded)]="expanded"':"",this.menuLevel()==="primary"?"":`level="${this.menuLevel()}"`,this.menuTint()==="follow"?"":`tint="${this.menuTint()}"`,this.menuCollapsible()&&this.menuArrow()!=="auto"?`togglePlacement="${this.menuArrow()}"`:""].filter(Boolean),e=[n.length?`<fold-menu ${n.join(" ")}>`:"<fold-menu>"];this.menuHeader()&&e.push('  <div header class="brand">S3</div>');const t=this.menuSectionList();for(let u=0;u<t.length;u++){const p=t[u],g=this.menuSections(),E=g?"    ":"  ";if(g){const T=this.menuSectionCollapsible()?" collapsible":"";e.push(`  <fold-menu-section label="${p.name}" color="${p.color}"${T}>`)}const B=this.iconsFor(p.icons);for(let T=0;T<B.length;T++){const H=this.badgeAttrs(this.previewBadge(u,T));e.push(`${E}<button fold-menu-item icon="${B[T]}" label="${this.labelFor(B[T])}"${H}></button>`)}g&&e.push("  </fold-menu-section>")}return this.menuFooter()&&e.push('  <button footer fold-menu-item icon="settings" label="Settings"></button>'),e.push("</fold-menu>"),e.join(`
`)});menuCopied=m(!1);copyMenuCode(){navigator.clipboard.writeText(this.menuCode()).then(()=>{this.menuCopied.set(!0),setTimeout(()=>this.menuCopied.set(!1),1500)})}menuShowCode=m(!1);menuTokens=[{label:"roundness",tokens:[O("sm","item background"),O("lg","floating rail card")]},{label:"surfaces",tokens:[$("bg-rail-primary","level primary"),$("bg-rail-secondary","level secondary"),$("bg-rail-tertiary","level tertiary"),$("surface-hover","neutral hover / active")]},{label:"accent",tokens:[$("primary","primary tint")]}];menuPreviewRef=R("menuPreview");menuOverrides=m({});hasMenuOverrides=P(()=>Object.keys(this.menuOverrides()).length>0);setMenuOverride(n,o){this.menuOverrides.update(e=>ee(e,n,o))}resetMenuOverrides(){this.menuOverrides.set({})}menuTokensCss=P(()=>oe("fold-menu",this.menuOverrides()));menuCssCopied=m(!1);copyMenuTokensCss(){navigator.clipboard.writeText(this.menuTokensCss()).then(()=>{this.menuCssCopied.set(!0),setTimeout(()=>this.menuCssCopied.set(!1),1500)})}constructor(){V(()=>ne(this.menuPreviewRef()?.nativeElement,this.menuTokens,this.menuOverrides()))}static ɵfac=function(o){return new(o||A)};static ɵcmp=q({type:A,selectors:[["gal-menu-page"]],viewQuery:function(o,e){o&1&&G(e.menuPreviewRef,te,5),o&2&&J()},decls:82,vars:32,consts:[["menuPreview",""],["colorInput",""],["nameInput",""],["ov",""],["title","menu"],["titleBadge","","kind","component"],["titleBadge","","kind","directive"],[1,"menu-page"],[1,"menu-col","menu-col--preview"],[1,"menu-preview-bar"],["type","button",1,"spm-code",3,"click"],[1,"menu-preview"],[3,"expandedChange","collapsible","expanded","tint","level","togglePlacement"],["header","",1,"rail-brand"],["footer","","fold-menu-item","","icon","settings","label","Settings"],[1,"code-overlay","code-overlay--stack"],[1,"menu-col","menu-col--settings"],["icon","menu","title","Menu Settings","subtitle","drives the preview — apply to the Library nav"],[1,"ss-group"],[1,"ss-label"],[1,"ss-seg"],["type","button",3,"click"],["type","button",3,"is-on"],[1,"ss-head"],[1,"ss-step"],["type","button","aria-label","Remove last section",3,"click","disabled"],["type","button","aria-label","Add section",3,"click"],[1,"sec-row"],[1,"menu-col","menu-col--tokens"],["icon","grid","title","Tokens","subtitle","live sandbox — edit a value to override the preview; semantics preferred"],[1,"tok-group"],["type","button",1,"tok-reset",3,"click","disabled"],[3,"label","color","collapsible"],["fold-menu-item","",3,"icon","label","active","badge","badgeTone"],["fold-menu-item","",3,"click","icon","label","active","badge","badgeTone"],[1,"code-overlay-pane"],[1,"code-overlay-top"],[1,"code-lang"],["type","button",1,"code-copy",3,"click"],["size","sm",3,"name"],[1,"code-pre"],["type","color","aria-label","Section color",1,"sec-color",3,"input","value"],["type","text","aria-label","Section name",1,"sec-name",3,"input","value"],["type","button","aria-label","Fewer items",3,"click"],["type","button","aria-label","More items",3,"click"],["type","button","aria-label","Delete section",1,"sec-del",3,"click"],[1,"ss-label","tok-group-label"],[1,"tok-row"],[1,"tok-swatch",3,"background"],[1,"tok-swatch","tok-swatch--radius",3,"borderRadius"],[1,"tok-meta"],[1,"tok-name"],[1,"tok-desc"],["type","text",1,"tok-input",3,"input","value","placeholder"],[1,"tok-swatch"],[1,"tok-swatch","tok-swatch--radius"]],template:function(o,e){o&1&&(r(0,"fold-page-layout",4),M(1,"gal-kind-badge",5)(2,"gal-kind-badge",6),r(3,"div",7)(4,"div",8)(5,"div",9)(6,"button",10),d("click",function(){return e.menuShowCode.set(!e.menuShowCode())}),s(7," code "),l()(),r(8,"div",11)(9,"fold-menu",12,0),d("expandedChange",function(u){return e.menuExpanded.set(u)}),y(11,le,2,0,"div",13),h(12,de,2,1,null,null,z),y(14,pe,1,0,"button",14),l(),y(15,me,21,6,"div",15),l()(),r(16,"div",16)(17,"fold-context-card",17)(18,"div",18)(19,"span",19),s(20,"menu"),l(),r(21,"div",20)(22,"button",21),d("click",function(){return e.menuCollapsible.set(!e.menuCollapsible())}),s(23," collapsible "),l(),r(24,"button",21),d("click",function(){return e.menuExpanded.set(!e.menuExpanded())}),s(25," expanded "),l()()(),y(26,fe,8,1,"div",18),r(27,"div",18)(28,"span",19),s(29,"slots"),l(),r(30,"div",20)(31,"button",21),d("click",function(){return e.menuHeader.set(!e.menuHeader())}),s(32," header "),l(),r(33,"button",21),d("click",function(){return e.menuSections.set(!e.menuSections())}),s(34," sections "),l(),r(35,"button",21),d("click",function(){return e.menuFooter.set(!e.menuFooter())}),s(36," footer "),l()()(),y(37,be,8,4,"div",18),r(38,"div",18)(39,"span",19),s(40,"tint"),l(),r(41,"div",20),h(42,ge,2,3,"button",22,F),l()(),r(44,"div",18)(45,"span",19),s(46,"level"),l(),r(47,"div",20),h(48,ve,2,3,"button",22,F),l()(),r(50,"div",18)(51,"span",19),s(52,"badge "),r(53,"i"),s(54,"(first item)"),l()(),r(55,"div",20)(56,"button",21),d("click",function(){return e.menuBadge.set("none")}),s(57," none "),l(),r(58,"button",21),d("click",function(){return e.menuBadge.set("tag")}),s(59," tag "),l(),r(60,"button",21),d("click",function(){return e.menuBadge.set("count")}),s(61," count "),l()()(),y(62,ke,6,0,"div",18),r(63,"div",18)(64,"div",23)(65,"span",19),s(66,"sections"),l(),r(67,"div",24)(68,"button",25),d("click",function(){return e.removeSection(e.menuSectionList()[e.menuSectionList().length-1].id)}),s(69," − "),l(),r(70,"b"),s(71),l(),r(72,"button",26),d("click",function(){return e.addSection()}),s(73," + "),l()()(),h(74,xe,14,3,"div",27,z),l()()(),r(76,"div",28)(77,"fold-context-card",29),h(78,Te,5,1,"div",30,ie),r(80,"button",31),d("click",function(){return e.resetMenuOverrides()}),s(81," Reset overrides "),l()()()()()),o&2&&(a(6),b("is-on",e.menuShowCode()),a(3),v("collapsible",e.menuCollapsible())("expanded",e.menuExpanded())("tint",e.menuTint())("level",e.menuLevel())("togglePlacement",e.menuArrow()),a(2),w(e.menuHeader()?11:-1),a(),k(e.menuSectionList()),a(2),w(e.menuFooter()?14:-1),a(),w(e.menuShowCode()?15:-1),a(7),b("is-on",e.menuCollapsible()),a(2),b("is-on",e.menuExpanded()),a(2),w(e.menuCollapsible()?26:-1),a(5),b("is-on",e.menuHeader()),a(2),b("is-on",e.menuSections()),a(2),b("is-on",e.menuFooter()),a(2),w(e.menuSections()?37:-1),a(5),k(e.menuTints),a(6),k(e.menuLevels),a(8),b("is-on",e.menuBadge()==="none"),a(2),b("is-on",e.menuBadge()==="tag"),a(2),b("is-on",e.menuBadge()==="count"),a(2),w(e.menuBadge()!=="none"?62:-1),a(6),v("disabled",e.menuSectionList().length===0),a(3),C(e.menuSectionList().length),a(3),k(e.menuSectionList()),a(4),k(e.menuTokens),a(2),v("disabled",!e.hasMenuOverrides()))},dependencies:[Y,K,Z,N,Q,D,U],styles:[`@charset "UTF-8";
/* ── fold-app-shell page: a real shell scaled to fit, folding on its own width ── */
/* legacy code switch — still used by other pages' token overlays. */
.spm-code {
  margin-left: auto;
  padding: 6px 14px;
  border-radius: var(--fold-radius-sm);
  border: 1px solid var(--fold-color-border);
  background: var(--fold-color-surface-sunken);
  color: var(--fold-color-text-secondary);
  font: inherit;
  font-size: 12px;
  cursor: pointer;
}

/* ── "code" glass overlay — HTML usage | CSS variables, over the preview ── */
.code-overlay {
  position: absolute;
  inset: 0;
  z-index: 5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: var(--fold-color-glass);
  backdrop-filter: blur(var(--fold-blur-glass)) saturate(1.5);
  -webkit-backdrop-filter: blur(var(--fold-blur-glass)) saturate(1.5);
  border-radius: var(--fold-radius-lg);
  overflow: hidden;
}

.code-overlay-pane {
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
}

.code-overlay-pane + .code-overlay-pane {
  border-left: 1px solid var(--fold-color-glass-border);
}

.code-overlay-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px 8px 14px;
  border-bottom: 1px solid var(--fold-color-glass-border);
}

/* ── fold-menu page: 3 columns, full height — preview · settings · tokens ── */
.menu-page {
  display: grid;
  grid-template-columns: minmax(220px, 300px) minmax(300px, 1fr) minmax(240px, 320px);
  gap: 20px;
  align-items: stretch;
}

.menu-col {
  min-width: 0;
}

.menu-col--preview {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.menu-preview-bar {
  display: flex;
  justify-content: flex-end;
}

/* The preview fills the column height so it matches the settings/tokens cards. */
.menu-preview {
  position: relative;
  flex: 1;
  min-height: 300px;
  display: flex;
  align-items: stretch;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-lg);
  background: var(--fold-color-bg-page);
}

/* Stacked overlay (HTML over CSS) — the menu preview column is narrow + tall. */
.code-overlay--stack {
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
}

.code-overlay--stack .code-overlay-pane + .code-overlay-pane {
  border-left: none;
  border-top: 1px solid var(--fold-color-glass-border);
}

/* Stack the 3 columns when the content area gets narrow. */
@media (max-width: 1040px) {
  .menu-page {
    grid-template-columns: 1fr;
  }
}
.tok-group + .tok-group {
  margin-top: 16px;
}

.tok-group-label {
  display: block;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 10px;
  font-weight: 700;
  color: var(--fold-color-text-muted);
}

.tok-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 0;
  border-top: 1px solid var(--fold-color-border-subtle);
}

.tok-group-label + .tok-row {
  border-top: none;
}

.tok-swatch {
  flex: none;
  width: 26px;
  height: 26px;
  border-radius: var(--fold-radius-sm);
  border: 1px solid var(--fold-color-border);
}

/* Radius chip — a solid tile whose corner rounding reflects the token value. */
.tok-swatch--radius {
  background: var(--fold-color-surface-raised);
}

.tok-meta {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.tok-name {
  font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  font-size: 11px;
  color: var(--fold-color-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tok-desc {
  font-size: 11px;
  color: var(--fold-color-text-muted);
}

/* The override input — freeform CSS value (colour, length, anything). Empty =
   no override (the token falls back to the theme). */
.tok-input {
  flex: none;
  width: 84px;
  padding: 5px 7px;
  border-radius: var(--fold-radius-sm);
  border: 1px solid var(--fold-color-border);
  background: var(--fold-color-surface-sunken);
  color: var(--fold-color-text);
  font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  font-size: 11px;
}

.tok-input:focus-visible {
  outline: none;
  border-color: var(--fold-color-primary);
}

.tok-input::placeholder {
  color: var(--fold-color-text-faded);
}

.tok-reset {
  margin-top: 16px;
  width: 100%;
  padding: 8px 12px;
  border-radius: var(--fold-radius-sm);
  border: 1px solid var(--fold-color-border);
  background: var(--fold-color-surface-sunken);
  color: var(--fold-color-text-secondary);
  font: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}

.tok-reset:hover:not(:disabled) {
  border-color: var(--fold-color-primary);
  color: var(--fold-color-primary-text);
}

.tok-reset:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.ss-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.ss-group + .ss-group {
  margin-top: 14px;
}

.ss-label {
  font-size: 12px;
  color: var(--fold-color-text-secondary);
}

.ss-label b {
  color: var(--fold-color-text);
  font-variant-numeric: tabular-nums;
}

.ss-group input[type=range] {
  width: 100%;
  accent-color: var(--fold-color-primary);
}

/* ── Section builder (+/− sections, name, color, icon count) ──── */
.ss-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.ss-step {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.ss-step button {
  width: 22px;
  height: 22px;
  display: grid;
  place-items: center;
  padding: 0;
  border-radius: var(--fold-radius-sm);
  border: 1px solid var(--fold-color-border);
  background: var(--fold-color-surface-sunken);
  color: var(--fold-color-text);
  font: inherit;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
}

.ss-step button:hover:not(:disabled) {
  border-color: var(--fold-color-primary);
  color: var(--fold-color-primary-text);
}

.ss-step button:disabled {
  opacity: 0.4;
  cursor: default;
}

.ss-step b {
  min-width: 14px;
  text-align: center;
  font-size: 12px;
  font-variant-numeric: tabular-nums;
}

.sec-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 0;
  border-top: 1px solid var(--fold-color-border-subtle);
}

.sec-color {
  flex: none;
  width: 24px;
  height: 24px;
  padding: 0;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-sm);
  background: none;
  cursor: pointer;
}

.sec-color::-webkit-color-swatch-wrapper {
  padding: 2px;
}

.sec-color::-webkit-color-swatch {
  border: none;
  border-radius: 2px;
}

.sec-name {
  flex: 1;
  min-width: 0;
  padding: 5px 8px;
  border-radius: var(--fold-radius-sm);
  border: 1px solid var(--fold-color-border);
  background: var(--fold-color-surface-sunken);
  color: var(--fold-color-text);
  font: inherit;
  font-size: 12px;
}

.sec-name:focus-visible {
  outline: none;
  border-color: var(--fold-color-primary);
}

.sec-del {
  flex: none;
  width: 22px;
  height: 22px;
  display: grid;
  place-items: center;
  padding: 0;
  border: none;
  border-radius: var(--fold-radius-sm);
  background: none;
  color: var(--fold-color-text-muted);
  font: inherit;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
}

.sec-del:hover {
  background: var(--fold-color-surface-hover);
  color: var(--fold-color-alert-text, var(--fold-color-text));
}`],encapsulation:2})}export{A as default};
