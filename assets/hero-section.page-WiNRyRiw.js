import{K as d}from"./kind-badge.component-plE_QRie.js";import{C as c}from"./composed-of.component-CxvIe7u2.js";import{ɵ as p,c as g,a as f,F as m,d as n,g as a,e,f as t,j as r,m as i,U as h}from"./index-BpnHZqq2.js";import{FoldHeroSectionComponent as u}from"./hero-section.component-Dn_TLfHU.js";import{FoldButtonComponent as x}from"./button.component-uG6n0sWz.js";const b=()=>["hero-card"];class l{static ɵfac=function(o){return new(o||l)};static ɵcmp=p({type:l,selectors:[["gal-hero-section-page"]],decls:37,vars:4,consts:[["title","hero-section"],["titleBadge","","kind","component"],[3,"ids"],["heroBackdrop","",1,"ghs-watermark"],[1,"ghs-mark"],["name","fold","title","Fold",3,"size"],["content","component · layout","variant","accent","radius","pill"],[1,"ghs-title"],[1,"ghs-lede"],[1,"ghs-cta"],["foldButton","","size","lg"],["foldButton","","emphasis","outline","intent","neutral","size","lg"],[1,"gal-cell"],[1,"gal-tag"],["align","start"],[3,"wash"]],template:function(o,v){o&1&&(n(0,"fold-page-layout",0),a(1,"gal-kind-badge",1)(2,"gal-composed-of",2),n(3,"fold-hero-section")(4,"span",3),e(5,"1.0"),t(),n(6,"div",4),a(7,"fold-icon",5),t(),a(8,"fold-badge",6),n(9,"h1",7),e(10,"Hero section"),t(),n(11,"p",8),e(12," A full-bleed intro band — it breaks the page gutter, carries the page "),n(13,"strong"),e(14,"title"),t(),e(15,", and closes with a hairline. "),t(),n(16,"div",9)(17,"button",10),e(18,"Primary action"),t(),n(19,"button",11),e(20," Secondary "),t()()(),n(21,"div",12)(22,"span",13),e(23,'align="start"'),t(),n(24,"fold-hero-section",14)(25,"h1",7),e(26,"Left-aligned"),t(),n(27,"p",8),e(28,"The column packs to the start instead of centring."),t()()(),n(29,"div",12)(30,"span",13),e(31,'[wash]="false" — plain surface band'),t(),n(32,"fold-hero-section",15)(33,"h1",7),e(34,"No wash"),t(),n(35,"p",8),e(36," The brand tint is off; just the surface + hairline. "),t()()()()),o&2&&(r(2),i("ids",h(3,b)),r(5),i("size",48),r(25),i("wash",!1))},dependencies:[d,c,g,u,f,x,m],styles:[`.ghs-mark {
  display: grid;
  place-items: center;
  width: 84px;
  height: 84px;
  border-radius: var(--fold-radius-lg);
  background: var(--fold-color-primary-surface);
  border: 1px solid var(--fold-color-primary-border);
  color: var(--fold-color-primary-text);
}

.ghs-title {
  margin: 0;
  font-size: clamp(40px, 7vw, 64px);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
  color: var(--fold-color-text);
}

.ghs-lede {
  margin: 0;
  max-width: 52ch;
  font-size: var(--fold-text-lg);
  line-height: 1.6;
  color: var(--fold-color-text-secondary);
}

.ghs-lede strong {
  font-weight: 700;
  color: var(--fold-color-text);
}

.ghs-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.ghs-watermark {
  position: absolute;
  left: 50%;
  top: 46%;
  transform: translate(-50%, -50%);
  font-size: clamp(140px, 22vw, 280px);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
  background: linear-gradient(175deg, var(--fold-color-primary), transparent 82%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: blur(5px);
  opacity: 0.28;
}`],encapsulation:2})}export{l as default};
