import{s as m,x as S,am as q,an as V,ɵ as Q,c as D,bi as K,bj as N,bm as U,F as G,d as r,g as M,B as d,e as s,f as l,H as y,i as h,u as F,j as a,C as b,m as v,I as w,o as k,k as C,ap as J,aq as W,q as c,A as x,l as P,bg as j,O as X,z as E,D as _,E as f,P as L}from"./index-Dbcb4g4H.js";import{a as Y}from"./tokens.catalog-DF_6rd51.js";import{K as Z}from"./kind-badge.component-C_75qMgM.js";import{FoldContextCardComponent as ee}from"./context-card.component-CPdq1ith.js";import"./element-title.component-BLUhFK5N.js";function $(i,n){return{prop:Y(i),desc:n,kind:"color"}}function z(i,n){return{prop:`--fold-radius-${i}`,desc:n,kind:"radius"}}function oe(i,n,e){const o={...i},t=e.trim();return t?o[n]=t:delete o[n],o}function ne(i,n){const e=Object.entries(n);if(e.length===0)return"/* adjust a token on the left to see the CSS here */";const o=[`${i} {`];for(const[t,u]of e)o.push(`  ${t}: ${u};`);return o.push("}"),o.join(`
`)}function te(i,n,e){if(i)for(const o of n)for(const t of o.tokens){const u=e[t.prop];u?i.style.setProperty(t.prop,u):i.style.removeProperty(t.prop)}}const ie=["menuPreview"],I=(i,n)=>n.id,re=(i,n)=>n.label,le=(i,n)=>n.prop;function ae(i,n){i&1&&(r(0,"div",13),s(1,"S3"),l())}function se(i,n){if(i&1){const e=x();r(0,"button",34),d("click",function(){const t=_(e).$index,u=c(2).$implicit,p=c();return f(p.menuActive.set(u.id+"-"+t))}),l()}if(i&2){const e=n.$implicit,o=n.$index,t=c(2),u=t.$implicit,p=t.$index,g=c();v("icon",e)("label",g.labelFor(e))("active",g.menuActive()===u.id+"-"+o)("badge",g.previewBadge(p,o))("badgeTone",g.menuBadgeTone())}}function ce(i,n){if(i&1&&(r(0,"fold-menu-section",32),h(1,se,1,5,"button",33,j),l()),i&2){const e=c().$implicit,o=c();v("label",e.name)("color",e.color)("collapsible",o.menuSectionCollapsible()),a(),k(o.iconsFor(e.icons))}}function ue(i,n){if(i&1){const e=x();r(0,"button",34),d("click",function(){const t=_(e).$index,u=c(2).$implicit,p=c();return f(p.menuActive.set(u.id+"-"+t))}),l()}if(i&2){const e=n.$implicit,o=n.$index,t=c(2),u=t.$implicit,p=t.$index,g=c();v("icon",e)("label",g.labelFor(e))("active",g.menuActive()===u.id+"-"+o)("badge",g.previewBadge(p,o))("badgeTone",g.menuBadgeTone())}}function de(i,n){if(i&1&&h(0,ue,1,5,"button",33,j),i&2){const e=c().$implicit,o=c();k(o.iconsFor(e.icons))}}function pe(i,n){if(i&1&&y(0,ce,3,3,"fold-menu-section",32)(1,de,2,0),i&2){const e=c();w(e.menuSections()?0:1)}}function me(i,n){i&1&&M(0,"button",14)}function _e(i,n){if(i&1){const e=x();r(0,"div",15)(1,"div",35)(2,"div",36)(3,"span",37),s(4,"html"),l(),r(5,"button",38),d("click",function(){_(e);const t=c();return f(t.copyMenuCode())}),M(6,"fold-icon",39),s(7),l()(),r(8,"pre",40)(9,"code"),s(10),l()()(),r(11,"div",35)(12,"div",36)(13,"span",37),s(14,"css · variables to override"),l(),r(15,"button",38),d("click",function(){_(e);const t=c();return f(t.copyMenuTokensCss())}),M(16,"fold-icon",39),s(17),l()(),r(18,"pre",40)(19,"code"),s(20),l()()()()}if(i&2){const e=c();a(6),v("name",e.menuCopied()?"check-circle":"copy"),a(),P(" ",e.menuCopied()?"Copied":"Copy"," "),a(3),C(e.menuCode()),a(6),v("name",e.menuCssCopied()?"check-circle":"copy"),a(),P(" ",e.menuCssCopied()?"Copied":"Copy"," "),a(3),C(e.menuTokensCss())}}function fe(i,n){if(i&1){const e=x();r(0,"button",21),d("click",function(){const t=_(e).$implicit,u=c(2);return f(u.menuArrow.set(t))}),s(1),l()}if(i&2){const e=n.$implicit,o=c(2);b("is-on",o.menuArrow()===e),a(),P(" ",e," ")}}function be(i,n){if(i&1&&(r(0,"div",18)(1,"span",19),s(2,"collapse arrow → "),r(3,"b"),s(4),l()(),r(5,"div",20),h(6,fe,2,3,"button",22,F),l()()),i&2){const e=c();a(4),C(e.resolvedArrow()),a(2),k(e.menuArrows)}}function ge(i,n){if(i&1){const e=x();r(0,"div",18)(1,"span",19),s(2,"section behaviour"),l(),r(3,"div",20)(4,"button",21),d("click",function(){_(e);const t=c();return f(t.menuSectionCollapsible.set(!1))}),s(5," static "),l(),r(6,"button",21),d("click",function(){_(e);const t=c();return f(t.menuSectionCollapsible.set(!0))}),s(7," collapsible "),l()()()}if(i&2){const e=c();a(4),b("is-on",!e.menuSectionCollapsible()),a(2),b("is-on",e.menuSectionCollapsible())}}function ve(i,n){if(i&1){const e=x();r(0,"button",21),d("click",function(){const t=_(e).$implicit,u=c();return f(u.menuTint.set(t))}),s(1),l()}if(i&2){const e=n.$implicit,o=c();b("is-on",o.menuTint()===e),a(),P(" ",e," ")}}function he(i,n){if(i&1){const e=x();r(0,"button",21),d("click",function(){const t=_(e).$implicit,u=c();return f(u.menuLevel.set(t))}),s(1),l()}if(i&2){const e=n.$implicit,o=c();b("is-on",o.menuLevel()===e),a(),P(" ",e," ")}}function ke(i,n){if(i&1){const e=x();r(0,"button",21),d("click",function(){const t=_(e).$implicit,u=c(2);return f(u.menuBadgeTone.set(t))}),s(1),l()}if(i&2){const e=n.$implicit,o=c(2);b("is-on",o.menuBadgeTone()===e),a(),P(" ",e," ")}}function xe(i,n){if(i&1&&(r(0,"div",18)(1,"span",19),s(2,"badge tone"),l(),r(3,"div",20),h(4,ke,2,3,"button",22,F),l()()),i&2){const e=c();a(4),k(e.menuBadgeTones)}}function ye(i,n){if(i&1){const e=x();r(0,"div",27)(1,"input",41,1),d("input",function(){const t=_(e).$implicit,u=L(2),p=c();return f(p.setSectionColor(t.id,u.value))}),l(),r(3,"input",42,2),d("input",function(){const t=_(e).$implicit,u=L(4),p=c();return f(p.setSectionName(t.id,u.value))}),l(),r(5,"div",24)(6,"button",43),d("click",function(){const t=_(e).$implicit,u=c();return f(u.stepSectionIcons(t.id,-1))}),s(7," − "),l(),r(8,"b"),s(9),l(),r(10,"button",44),d("click",function(){const t=_(e).$implicit,u=c();return f(u.stepSectionIcons(t.id,1))}),s(11," + "),l()(),r(12,"button",45),d("click",function(){const t=_(e).$implicit,u=c();return f(u.removeSection(t.id))}),s(13," × "),l()()}if(i&2){const e=n.$implicit;a(),v("value",e.color),a(2),v("value",e.name),a(6),C(e.icons)}}function we(i,n){if(i&1&&M(0,"span",54),i&2){const e=c().$implicit,o=c(2);E("background",o.menuOverrides()[e.prop]||"var("+e.prop+")")}}function Ce(i,n){if(i&1&&M(0,"span",55),i&2){const e=c().$implicit,o=c(2);E("border-radius",o.menuOverrides()[e.prop]||"var("+e.prop+")")}}function Te(i,n){if(i&1){const e=x();r(0,"div",47),y(1,we,1,2,"span",48)(2,Ce,1,2,"span",49),r(3,"div",50)(4,"code",51),s(5),l(),r(6,"span",52),s(7),l()(),r(8,"input",53,3),d("input",function(){const t=_(e).$implicit,u=L(9),p=c(2);return f(p.setMenuOverride(t.prop,u.value))}),l()()}if(i&2){const e=n.$implicit,o=c(2);a(),w(e.kind==="color"?1:2),a(4),C(e.prop),a(2),C(e.desc),a(),v("value",o.menuOverrides()[e.prop]||"")("placeholder",e.kind==="color"?"#7c5bbf":"12px"),X("aria-label","Override "+e.prop)}}function Me(i,n){if(i&1&&(r(0,"div",30)(1,"span",46),s(2),l(),h(3,Te,10,6,"div",47,le),l()),i&2){const e=n.$implicit;a(2),C(e.label),a(),k(e.tokens)}}class A{menuActive=m("");menuExpanded=m(!1);menuCollapsible=m(!0);menuHeader=m(!0);menuSections=m(!0);menuSectionCollapsible=m(!1);menuFooter=m(!0);menuBadge=m("none");menuBadgeTone=m("follow");menuBadgeTones=["follow","accent","info","warning","alert","success"];menuBadgeValue=S(()=>{const n=this.menuBadge();if(n!=="none")return n==="count"?3:"new"});previewBadge(n,e){return n===0&&e===0?this.menuBadgeValue():void 0}badgeAttrs(n){if(n===void 0)return"";const e=typeof n=="number"?` [badge]="${n}"`:` badge="${n}"`,o=this.menuBadgeTone();return`${e}${o==="follow"?"":` badgeTone="${o}"`}`}menuTint=m("follow");menuTints=["follow","neutral","primary"];menuLevel=m("primary");menuLevels=["primary","secondary","tertiary"];menuArrow=m("auto");menuArrows=["auto","header","footer","body"];resolvedArrow=S(()=>{const n=this.menuArrow();return n!=="auto"?n:this.menuFooter()?"footer":this.menuHeader()?"header":"body"});menuSectionList=m([{id:"s1",name:"Personal",color:"#06a4a4",icons:3},{id:"s2",name:"More",color:"#7c5bbf",icons:2}]);sectionSeq=3;iconPool=["home","contracts","music","bell","company","edit"];iconsFor(n){const e=this.iconPool;return Array.from({length:n},(o,t)=>e[t%e.length]??e[0])}labelFor(n){return n.charAt(0).toUpperCase()+n.slice(1)}addSection(){const n=`s${this.sectionSeq++}`;this.menuSectionList.update(e=>[...e,{id:n,name:"Section",color:"#5b8def",icons:2}])}removeSection(n){this.menuSectionList.update(e=>e.filter(o=>o.id!==n))}removeLastSection(){this.menuSectionList.update(n=>n.slice(0,-1))}setSectionName(n,e){this.menuSectionList.update(o=>o.map(t=>t.id===n?{...t,name:e}:t))}setSectionColor(n,e){this.menuSectionList.update(o=>o.map(t=>t.id===n?{...t,color:e}:t))}stepSectionIcons(n,e){this.menuSectionList.update(o=>o.map(t=>t.id===n?{...t,icons:Math.max(0,Math.min(8,t.icons+e))}:t))}menuCode=S(()=>{const n=[this.menuCollapsible()?'collapsible [(expanded)]="expanded"':"",this.menuLevel()==="primary"?"":`level="${this.menuLevel()}"`,this.menuTint()==="follow"?"":`tint="${this.menuTint()}"`,this.menuCollapsible()&&this.menuArrow()!=="auto"?`togglePlacement="${this.menuArrow()}"`:""].filter(Boolean),o=[n.length?`<fold-menu ${n.join(" ")}>`:"<fold-menu>"];this.menuHeader()&&o.push('  <div header class="brand">S3</div>');const t=this.menuSectionList();for(let u=0;u<t.length;u++){const p=t[u];if(!p)continue;const g=this.menuSections(),H=g?"    ":"  ";if(g){const T=this.menuSectionCollapsible()?" collapsible":"";o.push(`  <fold-menu-section label="${p.name}" color="${p.color}"${T}>`)}const O=this.iconsFor(p.icons);for(let T=0;T<O.length;T++){const B=O[T];if(!B)continue;const R=this.badgeAttrs(this.previewBadge(u,T));o.push(`${H}<button fold-menu-item icon="${B}" label="${this.labelFor(B)}"${R}></button>`)}g&&o.push("  </fold-menu-section>")}return this.menuFooter()&&o.push('  <button footer fold-menu-item icon="settings" label="Settings"></button>'),o.push("</fold-menu>"),o.join(`
`)});menuCopied=m(!1);copyMenuCode(){navigator.clipboard.writeText(this.menuCode()).then(()=>{this.menuCopied.set(!0),setTimeout(()=>this.menuCopied.set(!1),1500)})}menuShowCode=m(!1);menuTokens=[{label:"roundness",tokens:[z("sm","item background"),z("lg","floating rail card")]},{label:"surfaces",tokens:[$("bg-rail-primary","level primary"),$("bg-rail-secondary","level secondary"),$("bg-rail-tertiary","level tertiary"),$("surface-hover","neutral hover / active")]},{label:"accent",tokens:[$("primary","primary tint")]}];menuPreviewRef=q("menuPreview");menuOverrides=m({});hasMenuOverrides=S(()=>Object.keys(this.menuOverrides()).length>0);setMenuOverride(n,e){this.menuOverrides.update(o=>oe(o,n,e))}resetMenuOverrides(){this.menuOverrides.set({})}menuTokensCss=S(()=>ne("fold-menu",this.menuOverrides()));menuCssCopied=m(!1);copyMenuTokensCss(){navigator.clipboard.writeText(this.menuTokensCss()).then(()=>{this.menuCssCopied.set(!0),setTimeout(()=>this.menuCssCopied.set(!1),1500)})}constructor(){V(()=>te(this.menuPreviewRef()?.nativeElement,this.menuTokens,this.menuOverrides()))}static ɵfac=function(e){return new(e||A)};static ɵcmp=Q({type:A,selectors:[["gal-menu-page"]],viewQuery:function(e,o){e&1&&J(o.menuPreviewRef,ie,5),e&2&&W()},decls:82,vars:32,consts:[["menuPreview",""],["colorInput",""],["nameInput",""],["ov",""],["title","menu"],["titleBadge","","kind","component"],["titleBadge","","kind","directive"],[1,"menu-page"],[1,"menu-col","menu-col--preview"],[1,"menu-preview-bar"],["type","button",1,"spm-code",3,"click"],[1,"menu-preview"],[3,"expandedChange","collapsible","expanded","tint","level","togglePlacement"],["header","",1,"rail-brand"],["footer","","fold-menu-item","","icon","settings","label","Settings"],[1,"code-overlay","code-overlay--stack"],[1,"menu-col","menu-col--settings"],["icon","menu","title","Menu Settings","subtitle","drives the preview — apply to the Library nav"],[1,"ss-group"],[1,"ss-label"],[1,"ss-seg"],["type","button",3,"click"],["type","button",3,"is-on"],[1,"ss-head"],[1,"ss-step"],["type","button","aria-label","Remove last section",3,"click","disabled"],["type","button","aria-label","Add section",3,"click"],[1,"sec-row"],[1,"menu-col","menu-col--tokens"],["icon","grid","title","Tokens","subtitle","live sandbox — edit a value to override the preview; semantics preferred"],[1,"tok-group"],["type","button",1,"tok-reset",3,"click","disabled"],[3,"label","color","collapsible"],["fold-menu-item","",3,"icon","label","active","badge","badgeTone"],["fold-menu-item","",3,"click","icon","label","active","badge","badgeTone"],[1,"code-overlay-pane"],[1,"code-overlay-top"],[1,"code-lang"],["type","button",1,"code-copy",3,"click"],["size","sm",3,"name"],[1,"code-pre"],["type","color","aria-label","Section color",1,"sec-color",3,"input","value"],["type","text","aria-label","Section name",1,"sec-name",3,"input","value"],["type","button","aria-label","Fewer items",3,"click"],["type","button","aria-label","More items",3,"click"],["type","button","aria-label","Delete section",1,"sec-del",3,"click"],[1,"ss-label","tok-group-label"],[1,"tok-row"],[1,"tok-swatch",3,"background"],[1,"tok-swatch","tok-swatch--radius",3,"borderRadius"],[1,"tok-meta"],[1,"tok-name"],[1,"tok-desc"],["type","text",1,"tok-input",3,"input","value","placeholder"],[1,"tok-swatch"],[1,"tok-swatch","tok-swatch--radius"]],template:function(e,o){e&1&&(r(0,"fold-page-layout",4),M(1,"gal-kind-badge",5)(2,"gal-kind-badge",6),r(3,"div",7)(4,"div",8)(5,"div",9)(6,"button",10),d("click",function(){return o.menuShowCode.set(!o.menuShowCode())}),s(7," code "),l()(),r(8,"div",11)(9,"fold-menu",12,0),d("expandedChange",function(u){return o.menuExpanded.set(u)}),y(11,ae,2,0,"div",13),h(12,pe,2,1,null,null,I),y(14,me,1,0,"button",14),l(),y(15,_e,21,6,"div",15),l()(),r(16,"div",16)(17,"fold-context-card",17)(18,"div",18)(19,"span",19),s(20,"menu"),l(),r(21,"div",20)(22,"button",21),d("click",function(){return o.menuCollapsible.set(!o.menuCollapsible())}),s(23," collapsible "),l(),r(24,"button",21),d("click",function(){return o.menuExpanded.set(!o.menuExpanded())}),s(25," expanded "),l()()(),y(26,be,8,1,"div",18),r(27,"div",18)(28,"span",19),s(29,"slots"),l(),r(30,"div",20)(31,"button",21),d("click",function(){return o.menuHeader.set(!o.menuHeader())}),s(32," header "),l(),r(33,"button",21),d("click",function(){return o.menuSections.set(!o.menuSections())}),s(34," sections "),l(),r(35,"button",21),d("click",function(){return o.menuFooter.set(!o.menuFooter())}),s(36," footer "),l()()(),y(37,ge,8,4,"div",18),r(38,"div",18)(39,"span",19),s(40,"tint"),l(),r(41,"div",20),h(42,ve,2,3,"button",22,F),l()(),r(44,"div",18)(45,"span",19),s(46,"level"),l(),r(47,"div",20),h(48,he,2,3,"button",22,F),l()(),r(50,"div",18)(51,"span",19),s(52,"badge "),r(53,"i"),s(54,"(first item)"),l()(),r(55,"div",20)(56,"button",21),d("click",function(){return o.menuBadge.set("none")}),s(57," none "),l(),r(58,"button",21),d("click",function(){return o.menuBadge.set("tag")}),s(59," tag "),l(),r(60,"button",21),d("click",function(){return o.menuBadge.set("count")}),s(61," count "),l()()(),y(62,xe,6,0,"div",18),r(63,"div",18)(64,"div",23)(65,"span",19),s(66,"sections"),l(),r(67,"div",24)(68,"button",25),d("click",function(){return o.removeLastSection()}),s(69," − "),l(),r(70,"b"),s(71),l(),r(72,"button",26),d("click",function(){return o.addSection()}),s(73," + "),l()()(),h(74,ye,14,3,"div",27,I),l()()(),r(76,"div",28)(77,"fold-context-card",29),h(78,Me,5,1,"div",30,re),r(80,"button",31),d("click",function(){return o.resetMenuOverrides()}),s(81," Reset overrides "),l()()()()()),e&2&&(a(6),b("is-on",o.menuShowCode()),a(3),v("collapsible",o.menuCollapsible())("expanded",o.menuExpanded())("tint",o.menuTint())("level",o.menuLevel())("togglePlacement",o.menuArrow()),a(2),w(o.menuHeader()?11:-1),a(),k(o.menuSectionList()),a(2),w(o.menuFooter()?14:-1),a(),w(o.menuShowCode()?15:-1),a(7),b("is-on",o.menuCollapsible()),a(2),b("is-on",o.menuExpanded()),a(2),w(o.menuCollapsible()?26:-1),a(5),b("is-on",o.menuHeader()),a(2),b("is-on",o.menuSections()),a(2),b("is-on",o.menuFooter()),a(2),w(o.menuSections()?37:-1),a(5),k(o.menuTints),a(6),k(o.menuLevels),a(8),b("is-on",o.menuBadge()==="none"),a(2),b("is-on",o.menuBadge()==="tag"),a(2),b("is-on",o.menuBadge()==="count"),a(2),w(o.menuBadge()!=="none"?62:-1),a(6),v("disabled",o.menuSectionList().length===0),a(3),C(o.menuSectionList().length),a(3),k(o.menuSectionList()),a(4),k(o.menuTokens),a(2),v("disabled",!o.hasMenuOverrides()))},dependencies:[Z,D,ee,K,N,U,G],styles:[`@charset "UTF-8";
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
