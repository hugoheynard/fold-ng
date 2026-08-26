import{K as d}from"./kind-badge.component-DZaWYdp9.js";import{C as c}from"./composed-of.component-qqpGjP_A.js";import{ɵ as p,c as g,a as f,F as h,d as e,g as a,e as n,f as t,j as r,m as l,U as m}from"./index-CIc5CrZt.js";import{FoldHeroSectionComponent as u}from"./hero-section.component-BbY8dCHI.js";import{FoldButtonComponent as v}from"./button.component-DAVw1Tm9.js";const x=()=>["hero-card"];class i{static ɵfac=function(o){return new(o||i)};static ɵcmp=p({type:i,selectors:[["gal-hero-section-page"]],decls:37,vars:4,consts:[["title","hero-section"],["titleBadge","","kind","component"],[3,"ids"],["heroBackdrop","",1,"ghs-watermark"],[1,"ghs-mark"],["name","fold","title","Fold",3,"size"],["content","component · layout","variant","accent","radius","pill"],[1,"ghs-title"],[1,"ghs-lede"],[1,"ghs-cta"],["foldButton","","size","lg"],["foldButton","","emphasis","outline","intent","neutral","size","lg"],[1,"gal-cell"],[1,"gal-tag"],["align","start"],[3,"wash"]],template:function(o,b){o&1&&(e(0,"fold-page-layout",0),a(1,"gal-kind-badge",1)(2,"gal-composed-of",2),e(3,"fold-hero-section")(4,"span",3),n(5,"1.0"),t(),e(6,"div",4),a(7,"fold-icon",5),t(),a(8,"fold-badge",6),e(9,"h1",7),n(10,"Hero section"),t(),e(11,"p",8),n(12," A full-bleed intro band — it breaks the page gutter, carries the page "),e(13,"strong"),n(14,"title"),t(),n(15,", and closes with a hairline. "),t(),e(16,"div",9)(17,"button",10),n(18,"Primary action"),t(),e(19,"button",11),n(20," Secondary "),t()()(),e(21,"div",12)(22,"span",13),n(23,'align="start"'),t(),e(24,"fold-hero-section",14)(25,"h1",7),n(26,"Left-aligned"),t(),e(27,"p",8),n(28,"The column packs to the start instead of centring."),t()()(),e(29,"div",12)(30,"span",13),n(31,'[wash]="false" — plain surface band'),t(),e(32,"fold-hero-section",15)(33,"h1",7),n(34,"No wash"),t(),e(35,"p",8),n(36," The brand tint is off; just the surface + hairline. "),t()()()()),o&2&&(r(2),l("ids",m(3,x)),r(5),l("size",48),r(25),l("wash",!1))},dependencies:[d,c,g,u,f,v,h],styles:[`.ghs-mark {
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
  font-weight: var(--fold-weight-extrabold);
  letter-spacing: var(--fold-tracking-tightest);
  line-height: var(--fold-leading-none);
  color: var(--fold-color-text);
}

.ghs-lede {
  margin: 0;
  max-width: 52ch;
  font-size: var(--fold-text-lg);
  line-height: var(--fold-leading-relaxed);
  color: var(--fold-color-text-secondary);
}

.ghs-lede strong {
  font-weight: var(--fold-weight-bold);
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
  font-weight: var(--fold-weight-extrabold);
  letter-spacing: var(--fold-tracking-tightest);
  line-height: var(--fold-leading-none);
  background: linear-gradient(175deg, var(--fold-color-primary), transparent 82%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: blur(5px);
  opacity: 0.28;
}`],encapsulation:2})}export{i as default};
