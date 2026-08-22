import{bx as V,s as m,A as P,a4 as q,aB as N,ɵ as Q,c as U,bt as D,bu as K,by as W,F as G,d as r,g as M,B as d,e as a,f as l,w as y,i as h,T as F,j as s,m as v,U as J,L as b,x as w,o as k,k as C,a8 as X,a9 as Y,q as c,E as x,l as S,v as j,D as Z,W as E,N as _,O as f,a3 as L}from"./index-mpzUjcFJ.js";import{K as ee}from"./kind-badge.component-Ku5JEm3b.js";import{C as oe}from"./composed-of.component-D-L03LEe.js";import{FoldContextCardComponent as ne}from"./context-card.component-Wd-3eGjr.js";import"./element-title.component-tQ6GYyc6.js";function $(i,n){return{prop:V(i),desc:n,kind:"color"}}function z(i,n){return{prop:`--fold-radius-${i}`,desc:n,kind:"radius"}}function te(i,n,e){const o={...i},t=e.trim();return t?o[n]=t:delete o[n],o}function ie(i,n){const e=Object.entries(n);if(e.length===0)return"/* adjust a token on the left to see the CSS here */";const o=[`${i} {`];for(const[t,u]of e)o.push(`  ${t}: ${u};`);return o.push("}"),o.join(`
`)}function re(i,n,e){if(i)for(const o of n)for(const t of o.tokens){const u=e[t.prop];u?i.style.setProperty(t.prop,u):i.style.removeProperty(t.prop)}}const le=["menuPreview"],se=()=>["icons"],I=(i,n)=>n.id,ae=(i,n)=>n.label,ce=(i,n)=>n.prop;function ue(i,n){i&1&&(r(0,"div",14),a(1,"S3"),l())}function de(i,n){if(i&1){const e=x();r(0,"button",35),d("click",function(){const t=_(e).$index,u=c(2).$implicit,p=c();return f(p.menuActive.set(u.id+"-"+t))}),l()}if(i&2){const e=n.$implicit,o=n.$index,t=c(2),u=t.$implicit,p=t.$index,g=c();v("icon",e)("label",g.labelFor(e))("active",g.menuActive()===u.id+"-"+o)("badge",g.previewBadge(p,o))("badgeTone",g.menuBadgeTone())}}function pe(i,n){if(i&1&&(r(0,"fold-menu-section",33),h(1,de,1,5,"button",34,j),l()),i&2){const e=c().$implicit,o=c();v("label",e.name)("color",e.color)("collapsible",o.menuSectionCollapsible()),s(),k(o.iconsFor(e.icons))}}function me(i,n){if(i&1){const e=x();r(0,"button",35),d("click",function(){const t=_(e).$index,u=c(2).$implicit,p=c();return f(p.menuActive.set(u.id+"-"+t))}),l()}if(i&2){const e=n.$implicit,o=n.$index,t=c(2),u=t.$implicit,p=t.$index,g=c();v("icon",e)("label",g.labelFor(e))("active",g.menuActive()===u.id+"-"+o)("badge",g.previewBadge(p,o))("badgeTone",g.menuBadgeTone())}}function _e(i,n){if(i&1&&h(0,me,1,5,"button",34,j),i&2){const e=c().$implicit,o=c();k(o.iconsFor(e.icons))}}function fe(i,n){if(i&1&&y(0,pe,3,3,"fold-menu-section",33)(1,_e,2,0),i&2){const e=c();w(e.menuSections()?0:1)}}function be(i,n){i&1&&M(0,"button",15)}function ge(i,n){if(i&1){const e=x();r(0,"div",16)(1,"div",36)(2,"div",37)(3,"span",38),a(4,"html"),l(),r(5,"button",39),d("click",function(){_(e);const t=c();return f(t.copyMenuCode())}),M(6,"fold-icon",40),a(7),l()(),r(8,"pre",41)(9,"code"),a(10),l()()(),r(11,"div",36)(12,"div",37)(13,"span",38),a(14,"css · variables to override"),l(),r(15,"button",39),d("click",function(){_(e);const t=c();return f(t.copyMenuTokensCss())}),M(16,"fold-icon",40),a(17),l()(),r(18,"pre",41)(19,"code"),a(20),l()()()()}if(i&2){const e=c();s(6),v("name",e.menuCopied()?"check-circle":"copy"),s(),S(" ",e.menuCopied()?"Copied":"Copy"," "),s(3),C(e.menuCode()),s(6),v("name",e.menuCssCopied()?"check-circle":"copy"),s(),S(" ",e.menuCssCopied()?"Copied":"Copy"," "),s(3),C(e.menuTokensCss())}}function ve(i,n){if(i&1){const e=x();r(0,"button",22),d("click",function(){const t=_(e).$implicit,u=c(2);return f(u.menuArrow.set(t))}),a(1),l()}if(i&2){const e=n.$implicit,o=c(2);b("is-on",o.menuArrow()===e),s(),S(" ",e," ")}}function he(i,n){if(i&1&&(r(0,"div",19)(1,"span",20),a(2,"collapse arrow → "),r(3,"b"),a(4),l()(),r(5,"div",21),h(6,ve,2,3,"button",23,F),l()()),i&2){const e=c();s(4),C(e.resolvedArrow()),s(2),k(e.menuArrows)}}function ke(i,n){if(i&1){const e=x();r(0,"div",19)(1,"span",20),a(2,"section behaviour"),l(),r(3,"div",21)(4,"button",22),d("click",function(){_(e);const t=c();return f(t.menuSectionCollapsible.set(!1))}),a(5," static "),l(),r(6,"button",22),d("click",function(){_(e);const t=c();return f(t.menuSectionCollapsible.set(!0))}),a(7," collapsible "),l()()()}if(i&2){const e=c();s(4),b("is-on",!e.menuSectionCollapsible()),s(2),b("is-on",e.menuSectionCollapsible())}}function xe(i,n){if(i&1){const e=x();r(0,"button",22),d("click",function(){const t=_(e).$implicit,u=c();return f(u.menuTint.set(t))}),a(1),l()}if(i&2){const e=n.$implicit,o=c();b("is-on",o.menuTint()===e),s(),S(" ",e," ")}}function ye(i,n){if(i&1){const e=x();r(0,"button",22),d("click",function(){const t=_(e).$implicit,u=c();return f(u.menuLevel.set(t))}),a(1),l()}if(i&2){const e=n.$implicit,o=c();b("is-on",o.menuLevel()===e),s(),S(" ",e," ")}}function we(i,n){if(i&1){const e=x();r(0,"button",22),d("click",function(){const t=_(e).$implicit,u=c(2);return f(u.menuBadgeTone.set(t))}),a(1),l()}if(i&2){const e=n.$implicit,o=c(2);b("is-on",o.menuBadgeTone()===e),s(),S(" ",e," ")}}function Ce(i,n){if(i&1&&(r(0,"div",19)(1,"span",20),a(2,"badge tone"),l(),r(3,"div",21),h(4,we,2,3,"button",23,F),l()()),i&2){const e=c();s(4),k(e.menuBadgeTones)}}function Te(i,n){if(i&1){const e=x();r(0,"div",28)(1,"input",42,1),d("input",function(){const t=_(e).$implicit,u=L(2),p=c();return f(p.setSectionColor(t.id,u.value))}),l(),r(3,"input",43,2),d("input",function(){const t=_(e).$implicit,u=L(4),p=c();return f(p.setSectionName(t.id,u.value))}),l(),r(5,"div",25)(6,"button",44),d("click",function(){const t=_(e).$implicit,u=c();return f(u.stepSectionIcons(t.id,-1))}),a(7," − "),l(),r(8,"b"),a(9),l(),r(10,"button",45),d("click",function(){const t=_(e).$implicit,u=c();return f(u.stepSectionIcons(t.id,1))}),a(11," + "),l()(),r(12,"button",46),d("click",function(){const t=_(e).$implicit,u=c();return f(u.removeSection(t.id))}),a(13," × "),l()()}if(i&2){const e=n.$implicit;s(),v("value",e.color),s(2),v("value",e.name),s(6),C(e.icons)}}function Me(i,n){if(i&1&&M(0,"span",55),i&2){const e=c().$implicit,o=c(2);E("background",o.menuOverrides()[e.prop]||"var("+e.prop+")")}}function Se(i,n){if(i&1&&M(0,"span",56),i&2){const e=c().$implicit,o=c(2);E("border-radius",o.menuOverrides()[e.prop]||"var("+e.prop+")")}}function Pe(i,n){if(i&1){const e=x();r(0,"div",48),y(1,Me,1,2,"span",49)(2,Se,1,2,"span",50),r(3,"div",51)(4,"code",52),a(5),l(),r(6,"span",53),a(7),l()(),r(8,"input",54,3),d("input",function(){const t=_(e).$implicit,u=L(9),p=c(2);return f(p.setMenuOverride(t.prop,u.value))}),l()()}if(i&2){const e=n.$implicit,o=c(2);s(),w(e.kind==="color"?1:2),s(4),C(e.prop),s(2),C(e.desc),s(),v("value",o.menuOverrides()[e.prop]||"")("placeholder",e.kind==="color"?"#7c5bbf":"12px"),Z("aria-label","Override "+e.prop)}}function $e(i,n){if(i&1&&(r(0,"div",31)(1,"span",47),a(2),l(),h(3,Pe,10,6,"div",48,ce),l()),i&2){const e=n.$implicit;s(2),C(e.label),s(),k(e.tokens)}}class A{menuActive=m("");menuExpanded=m(!1);menuCollapsible=m(!0);menuHeader=m(!0);menuSections=m(!0);menuSectionCollapsible=m(!1);menuFooter=m(!0);menuBadge=m("none");menuBadgeTone=m("follow");menuBadgeTones=["follow","accent","info","warning","alert","success"];menuBadgeValue=P(()=>{const n=this.menuBadge();if(n!=="none")return n==="count"?3:"new"});previewBadge(n,e){return n===0&&e===0?this.menuBadgeValue():void 0}badgeAttrs(n){if(n===void 0)return"";const e=typeof n=="number"?` [badge]="${n}"`:` badge="${n}"`,o=this.menuBadgeTone();return`${e}${o==="follow"?"":` badgeTone="${o}"`}`}menuTint=m("follow");menuTints=["follow","neutral","primary"];menuLevel=m("primary");menuLevels=["primary","secondary","tertiary"];menuArrow=m("auto");menuArrows=["auto","header","footer","body"];resolvedArrow=P(()=>{const n=this.menuArrow();return n!=="auto"?n:this.menuFooter()?"footer":this.menuHeader()?"header":"body"});menuSectionList=m([{id:"s1",name:"Personal",color:"#06a4a4",icons:3},{id:"s2",name:"More",color:"#7c5bbf",icons:2}]);sectionSeq=3;iconPool=["home","contracts","music","bell","company","edit"];iconsFor(n){const e=this.iconPool;return Array.from({length:n},(o,t)=>e[t%e.length]??e[0])}labelFor(n){return n.charAt(0).toUpperCase()+n.slice(1)}addSection(){const n=`s${this.sectionSeq++}`;this.menuSectionList.update(e=>[...e,{id:n,name:"Section",color:"#5b8def",icons:2}])}removeSection(n){this.menuSectionList.update(e=>e.filter(o=>o.id!==n))}removeLastSection(){this.menuSectionList.update(n=>n.slice(0,-1))}setSectionName(n,e){this.menuSectionList.update(o=>o.map(t=>t.id===n?{...t,name:e}:t))}setSectionColor(n,e){this.menuSectionList.update(o=>o.map(t=>t.id===n?{...t,color:e}:t))}stepSectionIcons(n,e){this.menuSectionList.update(o=>o.map(t=>t.id===n?{...t,icons:Math.max(0,Math.min(8,t.icons+e))}:t))}menuCode=P(()=>{const n=[this.menuCollapsible()?'collapsible [(expanded)]="expanded"':"",this.menuLevel()==="primary"?"":`level="${this.menuLevel()}"`,this.menuTint()==="follow"?"":`tint="${this.menuTint()}"`,this.menuCollapsible()&&this.menuArrow()!=="auto"?`togglePlacement="${this.menuArrow()}"`:""].filter(Boolean),o=[n.length?`<fold-menu ${n.join(" ")}>`:"<fold-menu>"];this.menuHeader()&&o.push('  <div header class="brand">S3</div>');const t=this.menuSectionList();for(let u=0;u<t.length;u++){const p=t[u];if(!p)continue;const g=this.menuSections(),H=g?"    ":"  ";if(g){const T=this.menuSectionCollapsible()?" collapsible":"";o.push(`  <fold-menu-section label="${p.name}" color="${p.color}"${T}>`)}const O=this.iconsFor(p.icons);for(let T=0;T<O.length;T++){const B=O[T];if(!B)continue;const R=this.badgeAttrs(this.previewBadge(u,T));o.push(`${H}<button fold-menu-item icon="${B}" label="${this.labelFor(B)}"${R}></button>`)}g&&o.push("  </fold-menu-section>")}return this.menuFooter()&&o.push('  <button footer fold-menu-item icon="settings" label="Settings"></button>'),o.push("</fold-menu>"),o.join(`
`)});menuCopied=m(!1);copyMenuCode(){navigator.clipboard.writeText(this.menuCode()).then(()=>{this.menuCopied.set(!0),setTimeout(()=>this.menuCopied.set(!1),1500)})}menuShowCode=m(!1);menuTokens=[{label:"roundness",tokens:[z("sm","item background"),z("lg","floating rail card")]},{label:"surfaces",tokens:[$("bg-rail-primary","level primary"),$("bg-rail-secondary","level secondary"),$("bg-rail-tertiary","level tertiary"),$("surface-hover","neutral hover / active")]},{label:"accent",tokens:[$("primary","primary tint")]}];menuPreviewRef=q("menuPreview");menuOverrides=m({});hasMenuOverrides=P(()=>Object.keys(this.menuOverrides()).length>0);setMenuOverride(n,e){this.menuOverrides.update(o=>te(o,n,e))}resetMenuOverrides(){this.menuOverrides.set({})}menuTokensCss=P(()=>ie("fold-menu",this.menuOverrides()));menuCssCopied=m(!1);copyMenuTokensCss(){navigator.clipboard.writeText(this.menuTokensCss()).then(()=>{this.menuCssCopied.set(!0),setTimeout(()=>this.menuCssCopied.set(!1),1500)})}constructor(){N(()=>re(this.menuPreviewRef()?.nativeElement,this.menuTokens,this.menuOverrides()))}static ɵfac=function(e){return new(e||A)};static ɵcmp=Q({type:A,selectors:[["gal-menu-page"]],viewQuery:function(e,o){e&1&&X(o.menuPreviewRef,le,5),e&2&&Y()},decls:83,vars:34,consts:[["menuPreview",""],["colorInput",""],["nameInput",""],["ov",""],["title","menu"],["titleBadge","","kind","component"],[3,"ids"],["titleBadge","","kind","directive"],[1,"menu-page"],[1,"menu-col","menu-col--preview"],[1,"menu-preview-bar"],["type","button",1,"spm-code",3,"click"],[1,"menu-preview"],[3,"expandedChange","collapsible","expanded","tint","level","togglePlacement"],["header","",1,"rail-brand"],["footer","","fold-menu-item","","icon","settings","label","Settings"],[1,"code-overlay","code-overlay--stack"],[1,"menu-col","menu-col--settings"],["icon","menu","title","Menu Settings","subtitle","drives the preview — apply to the Library nav"],[1,"ss-group"],[1,"ss-label"],[1,"ss-seg"],["type","button",3,"click"],["type","button",3,"is-on"],[1,"ss-head"],[1,"ss-step"],["type","button","aria-label","Remove last section",3,"click","disabled"],["type","button","aria-label","Add section",3,"click"],[1,"sec-row"],[1,"menu-col","menu-col--tokens"],["icon","grid","title","Tokens","subtitle","live sandbox — edit a value to override the preview; semantics preferred"],[1,"tok-group"],["type","button",1,"tok-reset",3,"click","disabled"],[3,"label","color","collapsible"],["fold-menu-item","",3,"icon","label","active","badge","badgeTone"],["fold-menu-item","",3,"click","icon","label","active","badge","badgeTone"],[1,"code-overlay-pane"],[1,"code-overlay-top"],[1,"code-lang"],["type","button",1,"code-copy",3,"click"],["size","sm",3,"name"],[1,"code-pre"],["type","color","aria-label","Section color",1,"sec-color",3,"input","value"],["type","text","aria-label","Section name",1,"sec-name",3,"input","value"],["type","button","aria-label","Fewer items",3,"click"],["type","button","aria-label","More items",3,"click"],["type","button","aria-label","Delete section",1,"sec-del",3,"click"],[1,"ss-label","tok-group-label"],[1,"tok-row"],[1,"tok-swatch",3,"background"],[1,"tok-swatch","tok-swatch--radius",3,"borderRadius"],[1,"tok-meta"],[1,"tok-name"],[1,"tok-desc"],["type","text",1,"tok-input",3,"input","value","placeholder"],[1,"tok-swatch"],[1,"tok-swatch","tok-swatch--radius"]],template:function(e,o){e&1&&(r(0,"fold-page-layout",4),M(1,"gal-kind-badge",5)(2,"gal-composed-of",6)(3,"gal-kind-badge",7),r(4,"div",8)(5,"div",9)(6,"div",10)(7,"button",11),d("click",function(){return o.menuShowCode.set(!o.menuShowCode())}),a(8," code "),l()(),r(9,"div",12)(10,"fold-menu",13,0),d("expandedChange",function(u){return o.menuExpanded.set(u)}),y(12,ue,2,0,"div",14),h(13,fe,2,1,null,null,I),y(15,be,1,0,"button",15),l(),y(16,ge,21,6,"div",16),l()(),r(17,"div",17)(18,"fold-context-card",18)(19,"div",19)(20,"span",20),a(21,"menu"),l(),r(22,"div",21)(23,"button",22),d("click",function(){return o.menuCollapsible.set(!o.menuCollapsible())}),a(24," collapsible "),l(),r(25,"button",22),d("click",function(){return o.menuExpanded.set(!o.menuExpanded())}),a(26," expanded "),l()()(),y(27,he,8,1,"div",19),r(28,"div",19)(29,"span",20),a(30,"slots"),l(),r(31,"div",21)(32,"button",22),d("click",function(){return o.menuHeader.set(!o.menuHeader())}),a(33," header "),l(),r(34,"button",22),d("click",function(){return o.menuSections.set(!o.menuSections())}),a(35," sections "),l(),r(36,"button",22),d("click",function(){return o.menuFooter.set(!o.menuFooter())}),a(37," footer "),l()()(),y(38,ke,8,4,"div",19),r(39,"div",19)(40,"span",20),a(41,"tint"),l(),r(42,"div",21),h(43,xe,2,3,"button",23,F),l()(),r(45,"div",19)(46,"span",20),a(47,"level"),l(),r(48,"div",21),h(49,ye,2,3,"button",23,F),l()(),r(51,"div",19)(52,"span",20),a(53,"badge "),r(54,"i"),a(55,"(first item)"),l()(),r(56,"div",21)(57,"button",22),d("click",function(){return o.menuBadge.set("none")}),a(58," none "),l(),r(59,"button",22),d("click",function(){return o.menuBadge.set("tag")}),a(60," tag "),l(),r(61,"button",22),d("click",function(){return o.menuBadge.set("count")}),a(62," count "),l()()(),y(63,Ce,6,0,"div",19),r(64,"div",19)(65,"div",24)(66,"span",20),a(67,"sections"),l(),r(68,"div",25)(69,"button",26),d("click",function(){return o.removeLastSection()}),a(70," − "),l(),r(71,"b"),a(72),l(),r(73,"button",27),d("click",function(){return o.addSection()}),a(74," + "),l()()(),h(75,Te,14,3,"div",28,I),l()()(),r(77,"div",29)(78,"fold-context-card",30),h(79,$e,5,1,"div",31,ae),r(81,"button",32),d("click",function(){return o.resetMenuOverrides()}),a(82," Reset overrides "),l()()()()()),e&2&&(s(2),v("ids",J(33,se)),s(5),b("is-on",o.menuShowCode()),s(3),v("collapsible",o.menuCollapsible())("expanded",o.menuExpanded())("tint",o.menuTint())("level",o.menuLevel())("togglePlacement",o.menuArrow()),s(2),w(o.menuHeader()?12:-1),s(),k(o.menuSectionList()),s(2),w(o.menuFooter()?15:-1),s(),w(o.menuShowCode()?16:-1),s(7),b("is-on",o.menuCollapsible()),s(2),b("is-on",o.menuExpanded()),s(2),w(o.menuCollapsible()?27:-1),s(5),b("is-on",o.menuHeader()),s(2),b("is-on",o.menuSections()),s(2),b("is-on",o.menuFooter()),s(2),w(o.menuSections()?38:-1),s(5),k(o.menuTints),s(6),k(o.menuLevels),s(8),b("is-on",o.menuBadge()==="none"),s(2),b("is-on",o.menuBadge()==="tag"),s(2),b("is-on",o.menuBadge()==="count"),s(2),w(o.menuBadge()!=="none"?63:-1),s(6),v("disabled",o.menuSectionList().length===0),s(3),C(o.menuSectionList().length),s(3),k(o.menuSectionList()),s(4),k(o.menuTokens),s(2),v("disabled",!o.hasMenuOverrides()))},dependencies:[ee,oe,U,ne,D,K,W,G],styles:[`@charset "UTF-8";
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
