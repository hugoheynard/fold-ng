import{by as V,s as m,A as S,a4 as q,aA as N,ɵ as Q,c as U,bu as D,bv as K,bz as W,F as G,d as r,g as M,B as u,e as s,f as l,w as y,i as h,T as F,j as a,m as g,U as J,L as b,x as w,o as x,k as C,a8 as X,a9 as Y,q as c,E as k,l as P,v as j,D as Z,W as E,N as _,O as f,a3 as L}from"./index-V3gWgabJ.js";import{K as ee}from"./kind-badge.component-B190M2UW.js";import{C as oe}from"./composed-of.component-nm3jx0SY.js";import{FoldContextCardComponent as te}from"./context-card.component-iZmYRMXb.js";import"./element-title.component-CFdFlFn_.js";function $(i,t){return{prop:V(i),desc:t,kind:"color"}}function z(i,t){return{prop:`--fold-radius-${i}`,desc:t,kind:"radius"}}function ne(i,t,e){const o={...i},n=e.trim();return n?o[t]=n:delete o[t],o}function ie(i,t){const e=Object.entries(t);if(e.length===0)return"/* adjust a token on the left to see the CSS here */";const o=[`${i} {`];for(const[n,d]of e)o.push(`  ${n}: ${d};`);return o.push("}"),o.join(`
`)}function re(i,t,e){if(i)for(const o of t)for(const n of o.tokens){const d=e[n.prop];d?i.style.setProperty(n.prop,d):i.style.removeProperty(n.prop)}}const le=["menuPreview"],ae=()=>["icons"],I=(i,t)=>t.id,se=(i,t)=>t.label,ce=(i,t)=>t.prop;function de(i,t){i&1&&(r(0,"div",14),s(1,"S3"),l())}function ue(i,t){if(i&1){const e=k();r(0,"button",35),u("click",function(){const n=_(e).$index,d=c(2).$implicit,p=c();return f(p.menuActive.set(d.id+"-"+n))}),l()}if(i&2){const e=t.$implicit,o=t.$index,n=c(2),d=n.$implicit,p=n.$index,v=c();g("icon",e)("label",v.labelFor(e))("active",v.menuActive()===d.id+"-"+o)("badge",v.previewBadge(p,o))("badgeTone",v.menuBadgeTone())}}function pe(i,t){if(i&1&&(r(0,"fold-menu-section",33),h(1,ue,1,5,"button",34,j),l()),i&2){const e=c().$implicit,o=c();g("label",e.name)("color",e.color)("collapsible",o.menuSectionCollapsible()),a(),x(o.iconsFor(e.icons))}}function me(i,t){if(i&1){const e=k();r(0,"button",35),u("click",function(){const n=_(e).$index,d=c(2).$implicit,p=c();return f(p.menuActive.set(d.id+"-"+n))}),l()}if(i&2){const e=t.$implicit,o=t.$index,n=c(2),d=n.$implicit,p=n.$index,v=c();g("icon",e)("label",v.labelFor(e))("active",v.menuActive()===d.id+"-"+o)("badge",v.previewBadge(p,o))("badgeTone",v.menuBadgeTone())}}function _e(i,t){if(i&1&&h(0,me,1,5,"button",34,j),i&2){const e=c().$implicit,o=c();x(o.iconsFor(e.icons))}}function fe(i,t){if(i&1&&y(0,pe,3,3,"fold-menu-section",33)(1,_e,2,0),i&2){const e=c();w(e.menuSections()?0:1)}}function be(i,t){i&1&&M(0,"button",15)}function ve(i,t){if(i&1){const e=k();r(0,"div",16)(1,"div",36)(2,"div",37)(3,"span",38),s(4,"html"),l(),r(5,"button",39),u("click",function(){_(e);const n=c();return f(n.copyMenuCode())}),M(6,"fold-icon",40),s(7),l()(),r(8,"pre",41)(9,"code"),s(10),l()()(),r(11,"div",36)(12,"div",37)(13,"span",38),s(14,"css · variables to override"),l(),r(15,"button",39),u("click",function(){_(e);const n=c();return f(n.copyMenuTokensCss())}),M(16,"fold-icon",40),s(17),l()(),r(18,"pre",41)(19,"code"),s(20),l()()()()}if(i&2){const e=c();a(6),g("name",e.menuCopied()?"check-circle":"copy"),a(),P(" ",e.menuCopied()?"Copied":"Copy"," "),a(3),C(e.menuCode()),a(6),g("name",e.menuCssCopied()?"check-circle":"copy"),a(),P(" ",e.menuCssCopied()?"Copied":"Copy"," "),a(3),C(e.menuTokensCss())}}function ge(i,t){if(i&1){const e=k();r(0,"button",22),u("click",function(){const n=_(e).$implicit,d=c(2);return f(d.menuArrow.set(n))}),s(1),l()}if(i&2){const e=t.$implicit,o=c(2);b("is-on",o.menuArrow()===e),a(),P(" ",e," ")}}function he(i,t){if(i&1&&(r(0,"div",19)(1,"span",20),s(2,"collapse arrow → "),r(3,"b"),s(4),l()(),r(5,"div",21),h(6,ge,2,3,"button",23,F),l()()),i&2){const e=c();a(4),C(e.resolvedArrow()),a(2),x(e.menuArrows)}}function xe(i,t){if(i&1){const e=k();r(0,"div",19)(1,"span",20),s(2,"section behaviour"),l(),r(3,"div",21)(4,"button",22),u("click",function(){_(e);const n=c();return f(n.menuSectionCollapsible.set(!1))}),s(5," static "),l(),r(6,"button",22),u("click",function(){_(e);const n=c();return f(n.menuSectionCollapsible.set(!0))}),s(7," collapsible "),l()()()}if(i&2){const e=c();a(4),b("is-on",!e.menuSectionCollapsible()),a(2),b("is-on",e.menuSectionCollapsible())}}function ke(i,t){if(i&1){const e=k();r(0,"button",22),u("click",function(){const n=_(e).$implicit,d=c();return f(d.menuTint.set(n))}),s(1),l()}if(i&2){const e=t.$implicit,o=c();b("is-on",o.menuTint()===e),a(),P(" ",e," ")}}function ye(i,t){if(i&1){const e=k();r(0,"button",22),u("click",function(){const n=_(e).$implicit,d=c();return f(d.menuLevel.set(n))}),s(1),l()}if(i&2){const e=t.$implicit,o=c();b("is-on",o.menuLevel()===e),a(),P(" ",e," ")}}function we(i,t){if(i&1){const e=k();r(0,"button",22),u("click",function(){const n=_(e).$implicit,d=c(2);return f(d.menuBadgeTone.set(n))}),s(1),l()}if(i&2){const e=t.$implicit,o=c(2);b("is-on",o.menuBadgeTone()===e),a(),P(" ",e," ")}}function Ce(i,t){if(i&1&&(r(0,"div",19)(1,"span",20),s(2,"badge tone"),l(),r(3,"div",21),h(4,we,2,3,"button",23,F),l()()),i&2){const e=c();a(4),x(e.menuBadgeTones)}}function Te(i,t){if(i&1){const e=k();r(0,"div",28)(1,"input",42,1),u("input",function(){const n=_(e).$implicit,d=L(2),p=c();return f(p.setSectionColor(n.id,d.value))}),l(),r(3,"input",43,2),u("input",function(){const n=_(e).$implicit,d=L(4),p=c();return f(p.setSectionName(n.id,d.value))}),l(),r(5,"div",25)(6,"button",44),u("click",function(){const n=_(e).$implicit,d=c();return f(d.stepSectionIcons(n.id,-1))}),s(7," − "),l(),r(8,"b"),s(9),l(),r(10,"button",45),u("click",function(){const n=_(e).$implicit,d=c();return f(d.stepSectionIcons(n.id,1))}),s(11," + "),l()(),r(12,"button",46),u("click",function(){const n=_(e).$implicit,d=c();return f(d.removeSection(n.id))}),s(13," × "),l()()}if(i&2){const e=t.$implicit;a(),g("value",e.color),a(2),g("value",e.name),a(6),C(e.icons)}}function Me(i,t){if(i&1&&M(0,"span",55),i&2){const e=c().$implicit,o=c(2);E("background",o.menuOverrides()[e.prop]||"var("+e.prop+")")}}function Pe(i,t){if(i&1&&M(0,"span",56),i&2){const e=c().$implicit,o=c(2);E("border-radius",o.menuOverrides()[e.prop]||"var("+e.prop+")")}}function Se(i,t){if(i&1){const e=k();r(0,"div",48),y(1,Me,1,2,"span",49)(2,Pe,1,2,"span",50),r(3,"div",51)(4,"code",52),s(5),l(),r(6,"span",53),s(7),l()(),r(8,"input",54,3),u("input",function(){const n=_(e).$implicit,d=L(9),p=c(2);return f(p.setMenuOverride(n.prop,d.value))}),l()()}if(i&2){const e=t.$implicit,o=c(2);a(),w(e.kind==="color"?1:2),a(4),C(e.prop),a(2),C(e.desc),a(),g("value",o.menuOverrides()[e.prop]||"")("placeholder",e.kind==="color"?"#7c5bbf":"12px"),Z("aria-label","Override "+e.prop)}}function $e(i,t){if(i&1&&(r(0,"div",31)(1,"span",47),s(2),l(),h(3,Se,10,6,"div",48,ce),l()),i&2){const e=t.$implicit;a(2),C(e.label),a(),x(e.tokens)}}class A{menuActive=m("");menuExpanded=m(!1);menuCollapsible=m(!0);menuHeader=m(!0);menuSections=m(!0);menuSectionCollapsible=m(!1);menuFooter=m(!0);menuBadge=m("none");menuBadgeTone=m("follow");menuBadgeTones=["follow","accent","info","warning","alert","success"];menuBadgeValue=S(()=>{const t=this.menuBadge();if(t!=="none")return t==="count"?3:"new"});previewBadge(t,e){return t===0&&e===0?this.menuBadgeValue():void 0}badgeAttrs(t){if(t===void 0)return"";const e=typeof t=="number"?` [badge]="${t}"`:` badge="${t}"`,o=this.menuBadgeTone();return`${e}${o==="follow"?"":` badgeTone="${o}"`}`}menuTint=m("follow");menuTints=["follow","neutral","primary"];menuLevel=m("primary");menuLevels=["primary","secondary","tertiary"];menuArrow=m("auto");menuArrows=["auto","header","footer","body"];resolvedArrow=S(()=>{const t=this.menuArrow();return t!=="auto"?t:this.menuFooter()?"footer":this.menuHeader()?"header":"body"});menuSectionList=m([{id:"s1",name:"Personal",color:"#06a4a4",icons:3},{id:"s2",name:"More",color:"#7c5bbf",icons:2}]);sectionSeq=3;iconPool=["home","contracts","music","bell","company","edit"];iconsFor(t){const e=this.iconPool;return Array.from({length:t},(o,n)=>e[n%e.length]??e[0])}labelFor(t){return t.charAt(0).toUpperCase()+t.slice(1)}addSection(){const t=`s${this.sectionSeq++}`;this.menuSectionList.update(e=>[...e,{id:t,name:"Section",color:"#5b8def",icons:2}])}removeSection(t){this.menuSectionList.update(e=>e.filter(o=>o.id!==t))}removeLastSection(){this.menuSectionList.update(t=>t.slice(0,-1))}setSectionName(t,e){this.menuSectionList.update(o=>o.map(n=>n.id===t?{...n,name:e}:n))}setSectionColor(t,e){this.menuSectionList.update(o=>o.map(n=>n.id===t?{...n,color:e}:n))}stepSectionIcons(t,e){this.menuSectionList.update(o=>o.map(n=>n.id===t?{...n,icons:Math.max(0,Math.min(8,n.icons+e))}:n))}menuCode=S(()=>{const t=[this.menuCollapsible()?'collapsible [(expanded)]="expanded"':"",this.menuLevel()==="primary"?"":`level="${this.menuLevel()}"`,this.menuTint()==="follow"?"":`tint="${this.menuTint()}"`,this.menuCollapsible()&&this.menuArrow()!=="auto"?`togglePlacement="${this.menuArrow()}"`:""].filter(Boolean),o=[t.length?`<fold-menu ${t.join(" ")}>`:"<fold-menu>"];this.menuHeader()&&o.push('  <div header class="brand">S3</div>');const n=this.menuSectionList();for(let d=0;d<n.length;d++){const p=n[d];if(!p)continue;const v=this.menuSections(),H=v?"    ":"  ";if(v){const T=this.menuSectionCollapsible()?" collapsible":"";o.push(`  <fold-menu-section label="${p.name}" color="${p.color}"${T}>`)}const O=this.iconsFor(p.icons);for(let T=0;T<O.length;T++){const B=O[T];if(!B)continue;const R=this.badgeAttrs(this.previewBadge(d,T));o.push(`${H}<button fold-menu-item icon="${B}" label="${this.labelFor(B)}"${R}></button>`)}v&&o.push("  </fold-menu-section>")}return this.menuFooter()&&o.push('  <button footer fold-menu-item icon="settings" label="Settings"></button>'),o.push("</fold-menu>"),o.join(`
`)});menuCopied=m(!1);copyMenuCode(){navigator.clipboard.writeText(this.menuCode()).then(()=>{this.menuCopied.set(!0),setTimeout(()=>this.menuCopied.set(!1),1500)})}menuShowCode=m(!1);menuTokens=[{label:"roundness",tokens:[z("sm","item background"),z("lg","floating rail card")]},{label:"surfaces",tokens:[$("bg-rail-primary","level primary"),$("bg-rail-secondary","level secondary"),$("bg-rail-tertiary","level tertiary"),$("surface-hover","neutral hover / active")]},{label:"accent",tokens:[$("primary","primary tint")]}];menuPreviewRef=q("menuPreview");menuOverrides=m({});hasMenuOverrides=S(()=>Object.keys(this.menuOverrides()).length>0);setMenuOverride(t,e){this.menuOverrides.update(o=>ne(o,t,e))}resetMenuOverrides(){this.menuOverrides.set({})}menuTokensCss=S(()=>ie("fold-menu",this.menuOverrides()));menuCssCopied=m(!1);copyMenuTokensCss(){navigator.clipboard.writeText(this.menuTokensCss()).then(()=>{this.menuCssCopied.set(!0),setTimeout(()=>this.menuCssCopied.set(!1),1500)})}constructor(){N(()=>re(this.menuPreviewRef()?.nativeElement,this.menuTokens,this.menuOverrides()))}static ɵfac=function(e){return new(e||A)};static ɵcmp=Q({type:A,selectors:[["gal-menu-page"]],viewQuery:function(e,o){e&1&&X(o.menuPreviewRef,le,5),e&2&&Y()},decls:83,vars:34,consts:[["menuPreview",""],["colorInput",""],["nameInput",""],["ov",""],["title","menu"],["titleBadge","","kind","component"],[3,"ids"],["titleBadge","","kind","directive"],[1,"menu-page"],[1,"menu-col","menu-col--preview"],[1,"menu-preview-bar"],["type","button",1,"spm-code",3,"click"],[1,"menu-preview"],[3,"expandedChange","collapsible","expanded","tint","level","togglePlacement"],["header","",1,"rail-brand"],["footer","","fold-menu-item","","icon","settings","label","Settings"],[1,"code-overlay","code-overlay--stack"],[1,"menu-col","menu-col--settings"],["icon","menu","title","Menu Settings","subtitle","drives the preview — apply to the Library nav"],[1,"ss-group"],[1,"ss-label"],[1,"ss-seg"],["type","button",3,"click"],["type","button",3,"is-on"],[1,"ss-head"],[1,"ss-step"],["type","button","aria-label","Remove last section",3,"click","disabled"],["type","button","aria-label","Add section",3,"click"],[1,"sec-row"],[1,"menu-col","menu-col--tokens"],["icon","grid","title","Tokens","subtitle","live sandbox — edit a value to override the preview; semantics preferred"],[1,"tok-group"],["type","button",1,"tok-reset",3,"click","disabled"],[3,"label","color","collapsible"],["fold-menu-item","",3,"icon","label","active","badge","badgeTone"],["fold-menu-item","",3,"click","icon","label","active","badge","badgeTone"],[1,"code-overlay-pane"],[1,"code-overlay-top"],[1,"code-lang"],["type","button",1,"code-copy",3,"click"],["size","sm",3,"name"],[1,"code-pre"],["type","color","aria-label","Section color",1,"sec-color",3,"input","value"],["type","text","aria-label","Section name",1,"sec-name",3,"input","value"],["type","button","aria-label","Fewer items",3,"click"],["type","button","aria-label","More items",3,"click"],["type","button","aria-label","Delete section",1,"sec-del",3,"click"],[1,"ss-label","tok-group-label"],[1,"tok-row"],[1,"tok-swatch",3,"background"],[1,"tok-swatch","tok-swatch--radius",3,"borderRadius"],[1,"tok-meta"],[1,"tok-name"],[1,"tok-desc"],["type","text",1,"tok-input",3,"input","value","placeholder"],[1,"tok-swatch"],[1,"tok-swatch","tok-swatch--radius"]],template:function(e,o){e&1&&(r(0,"fold-page-layout",4),M(1,"gal-kind-badge",5)(2,"gal-composed-of",6)(3,"gal-kind-badge",7),r(4,"div",8)(5,"div",9)(6,"div",10)(7,"button",11),u("click",function(){return o.menuShowCode.set(!o.menuShowCode())}),s(8," code "),l()(),r(9,"div",12)(10,"fold-menu",13,0),u("expandedChange",function(d){return o.menuExpanded.set(d)}),y(12,de,2,0,"div",14),h(13,fe,2,1,null,null,I),y(15,be,1,0,"button",15),l(),y(16,ve,21,6,"div",16),l()(),r(17,"div",17)(18,"fold-context-card",18)(19,"div",19)(20,"span",20),s(21,"menu"),l(),r(22,"div",21)(23,"button",22),u("click",function(){return o.menuCollapsible.set(!o.menuCollapsible())}),s(24," collapsible "),l(),r(25,"button",22),u("click",function(){return o.menuExpanded.set(!o.menuExpanded())}),s(26," expanded "),l()()(),y(27,he,8,1,"div",19),r(28,"div",19)(29,"span",20),s(30,"slots"),l(),r(31,"div",21)(32,"button",22),u("click",function(){return o.menuHeader.set(!o.menuHeader())}),s(33," header "),l(),r(34,"button",22),u("click",function(){return o.menuSections.set(!o.menuSections())}),s(35," sections "),l(),r(36,"button",22),u("click",function(){return o.menuFooter.set(!o.menuFooter())}),s(37," footer "),l()()(),y(38,xe,8,4,"div",19),r(39,"div",19)(40,"span",20),s(41,"tint"),l(),r(42,"div",21),h(43,ke,2,3,"button",23,F),l()(),r(45,"div",19)(46,"span",20),s(47,"level"),l(),r(48,"div",21),h(49,ye,2,3,"button",23,F),l()(),r(51,"div",19)(52,"span",20),s(53,"badge "),r(54,"i"),s(55,"(first item)"),l()(),r(56,"div",21)(57,"button",22),u("click",function(){return o.menuBadge.set("none")}),s(58," none "),l(),r(59,"button",22),u("click",function(){return o.menuBadge.set("tag")}),s(60," tag "),l(),r(61,"button",22),u("click",function(){return o.menuBadge.set("count")}),s(62," count "),l()()(),y(63,Ce,6,0,"div",19),r(64,"div",19)(65,"div",24)(66,"span",20),s(67,"sections"),l(),r(68,"div",25)(69,"button",26),u("click",function(){return o.removeLastSection()}),s(70," − "),l(),r(71,"b"),s(72),l(),r(73,"button",27),u("click",function(){return o.addSection()}),s(74," + "),l()()(),h(75,Te,14,3,"div",28,I),l()()(),r(77,"div",29)(78,"fold-context-card",30),h(79,$e,5,1,"div",31,se),r(81,"button",32),u("click",function(){return o.resetMenuOverrides()}),s(82," Reset overrides "),l()()()()()),e&2&&(a(2),g("ids",J(33,ae)),a(5),b("is-on",o.menuShowCode()),a(3),g("collapsible",o.menuCollapsible())("expanded",o.menuExpanded())("tint",o.menuTint())("level",o.menuLevel())("togglePlacement",o.menuArrow()),a(2),w(o.menuHeader()?12:-1),a(),x(o.menuSectionList()),a(2),w(o.menuFooter()?15:-1),a(),w(o.menuShowCode()?16:-1),a(7),b("is-on",o.menuCollapsible()),a(2),b("is-on",o.menuExpanded()),a(2),w(o.menuCollapsible()?27:-1),a(5),b("is-on",o.menuHeader()),a(2),b("is-on",o.menuSections()),a(2),b("is-on",o.menuFooter()),a(2),w(o.menuSections()?38:-1),a(5),x(o.menuTints),a(6),x(o.menuLevels),a(8),b("is-on",o.menuBadge()==="none"),a(2),b("is-on",o.menuBadge()==="tag"),a(2),b("is-on",o.menuBadge()==="count"),a(2),w(o.menuBadge()!=="none"?63:-1),a(6),g("disabled",o.menuSectionList().length===0),a(3),C(o.menuSectionList().length),a(3),x(o.menuSectionList()),a(4),x(o.menuTokens),a(2),g("disabled",!o.hasMenuOverrides()))},dependencies:[ee,oe,U,te,D,K,W,G],styles:[`@charset "UTF-8";
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
  font-size: var(--fold-text-sm);
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
  letter-spacing: var(--fold-tracking-caps);
  font-size: var(--fold-text-2xs);
  font-weight: var(--fold-weight-bold);
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
  font-family: var(--fold-font-mono);
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tok-desc {
  font-size: var(--fold-text-xs);
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
  font-family: var(--fold-font-mono);
  font-size: var(--fold-text-xs);
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
  font-size: var(--fold-text-sm);
  font-weight: var(--fold-weight-semibold);
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
  font-size: var(--fold-text-sm);
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
  font-size: var(--fold-text-base);
  line-height: var(--fold-leading-none);
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
  font-size: var(--fold-text-sm);
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
  font-size: var(--fold-text-sm);
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
  font-size: var(--fold-text-lg);
  line-height: var(--fold-leading-none);
  cursor: pointer;
}

.sec-del:hover {
  background: var(--fold-color-surface-hover);
  color: var(--fold-color-alert-text, var(--fold-color-text));
}`],encapsulation:2})}export{A as default};
