import{s as i,A as c,ɵ as y,c as R,b as C,F as w,d as t,g as f,e as a,f as o,B as h,h as b,j as l,m as p,k as P,n as _,r as v}from"./index-CK_dhrcT.js";import{K as x}from"./kind-badge.component-f6AGvroV.js";import{FoldPageSectionComponent as D}from"./page-section.component-EFt2rbXH.js";import{FoldCalloutComponent as k}from"./callout.component-Df1ENzvk.js";import{FoldSliderComponent as T}from"./slider.component-CRmiGGRB.js";import{F}from"./repeat-press.directive-Ct9v-0SU.js";import"./input-value-DCGlOvqF.js";const u=0,m=50;class g{min=u;max=m;count=i(8);delay=i(350);period=i(60);atMin=c(()=>this.count()<=u);atMax=c(()=>this.count()>=m);step(n){this.count.update(s=>Math.min(m,Math.max(u,s+n)))}usageCode=c(()=>`<button
  foldRepeatPress
  [foldRepeatPressDisabled]="atMax()"
  [foldRepeatPressDelay]="${this.delay()}"
  [foldRepeatPressPeriod]="${this.period()}"
  (foldRepeatPress)="step(1)"
>+</button>`);static ɵfac=function(s){return new(s||g)};static ɵcmp=y({type:g,selectors:[["gal-repeat-press-page"]],decls:43,vars:18,consts:[["title","repeat-press"],["titleBadge","","kind","directive"],["description",""],["title","Try it — hold a button","description","Tap steps once; press and hold to auto-repeat. Tune the cadence live."],[1,"stepper"],["type","button","aria-label","Decrement","foldRepeatPress","",1,"step-btn",3,"foldRepeatPress","foldRepeatPressDisabled","foldRepeatPressDelay","foldRepeatPressPeriod"],["name","minus","size","lg"],[1,"step-value"],["type","button","aria-label","Increment","foldRepeatPress","",1,"step-btn",3,"foldRepeatPress","foldRepeatPressDisabled","foldRepeatPressDelay","foldRepeatPressPeriod"],["name","plus","size","lg"],[1,"knobs"],["label","Delay before repeat",3,"valueChange","value","min","max","step","valueText"],["label","Repeat cadence",3,"valueChange","value","min","max","step","valueText"],["title","Usage","description","A directive on the button that owns the action; wire the output."],["surface","sunken","padding","sm"],[1,"code-pre"],["variant","info","icon","info"]],template:function(s,e){s&1&&(t(0,"fold-page-layout",0),f(1,"gal-kind-badge",1),t(2,"p",2),a(3," Press-and-hold auto-repeat for a bare "),t(4,"code"),a(5,"<button>"),o(),a(6,". Fires "),t(7,"code"),a(8,"(foldRepeatPress)"),o(),a(9," once immediately on press, then keeps firing on a fixed cadence while held — the stepper behaviour, without a timer in every component. Stops on release, leave, cancel, destroy, or the instant "),t(10,"code"),a(11,"[foldRepeatPressDisabled]"),o(),a(12," goes true mid-hold. "),o(),t(13,"fold-page-section",3)(14,"fold-card",4)(15,"button",5),h("foldRepeatPress",function(){return e.step(-1)}),f(16,"fold-icon",6),o(),t(17,"span",7),a(18),o(),t(19,"button",8),h("foldRepeatPress",function(){return e.step(1)}),f(20,"fold-icon",9),o()(),t(21,"div",10)(22,"fold-slider",11),b("valueChange",function(r){return v(e.delay,r)||(e.delay=r),r}),o(),t(23,"fold-slider",12),b("valueChange",function(r){return v(e.period,r)||(e.period=r),r}),o()()(),t(24,"fold-page-section",13)(25,"fold-card",14)(26,"pre",15)(27,"code"),a(28),o()()(),t(29,"fold-callout",16),a(30," Keyboard activation is "),t(31,"strong"),a(32,"out of scope"),o(),a(33," — Enter/Space produce a "),t(34,"code"),a(35,"click"),o(),a(36,", not a "),t(37,"code"),a(38,"pointerdown"),o(),a(39,", so pair the directive with a plain "),t(40,"code"),a(41,"(click)"),o(),a(42," handler for a single keyboard step. "),o()()()),s&2&&(l(15),p("foldRepeatPressDisabled",e.atMin())("foldRepeatPressDelay",e.delay())("foldRepeatPressPeriod",e.period()),l(3),P(e.count()),l(),p("foldRepeatPressDisabled",e.atMax())("foldRepeatPressDelay",e.delay())("foldRepeatPressPeriod",e.period()),l(3),_("value",e.delay),p("min",100)("max",800)("step",50)("valueText",e.delay()+" ms"),l(),_("value",e.period),p("min",20)("max",200)("step",10)("valueText",e.period()+" ms"),l(5),P(e.usageCode()))},dependencies:[x,R,D,C,k,T,w,F],styles:[`@charset "UTF-8";
/* ── repeat-press page — the press-and-hold stepper demo ─────────────────── */
gal-repeat-press-page .stepper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--fold-space-xl);
}

gal-repeat-press-page .step-btn {
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: var(--fold-radius-lg);
  border: 1px solid var(--fold-color-border);
  background: var(--fold-color-surface-card);
  color: var(--fold-color-text);
  cursor: pointer;
  touch-action: none; /* pointer-hold shouldn't scroll/zoom the page */
  user-select: none;
  transition: var(--fold-motion-fast);
}

gal-repeat-press-page .step-btn:hover:not(:disabled) {
  border-color: var(--fold-color-primary);
  color: var(--fold-color-primary-text);
}

gal-repeat-press-page .step-btn:active:not(:disabled) {
  background: var(--fold-color-primary-surface);
  border-color: var(--fold-color-primary);
}

gal-repeat-press-page .step-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

gal-repeat-press-page .step-value {
  min-width: 3ch;
  text-align: center;
  font-size: clamp(40px, 6vw, 56px);
  font-weight: var(--fold-weight-bold);
  font-variant-numeric: tabular-nums;
  letter-spacing: var(--fold-tracking-tighter);
  color: var(--fold-color-text);
}

gal-repeat-press-page .knobs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--fold-space-xl);
  margin-top: var(--fold-space-lg);
  max-width: 560px;
}`],encapsulation:2})}export{g as default};
