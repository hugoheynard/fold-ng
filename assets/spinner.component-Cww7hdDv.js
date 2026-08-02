import{u as s,A as r,ɵ as i,ao as a,y as l,ap as d,z as p,D as c,W as f}from"./index-_ZvulUZ_.js";import{f as m}from"./tokens.catalog-DF_6rd51.js";class o{size=s("md");label=s();sizeVar=r(()=>{const n=this.size();return typeof n=="number"?`${n}px`:m(n)});static ɵfac=function(e){return new(e||o)};static ɵcmp=i({type:o,selectors:[["fold-spinner"]],hostVars:5,hostBindings:function(e,t){e&2&&(c("role",t.label()?"status":null)("aria-label",t.label()??null)("aria-hidden",t.label()?null:"true"),f("--fold-spinner-size",t.sizeVar()))},inputs:{size:[1,"size"],label:[1,"label"]},decls:3,vars:0,consts:[["viewBox","0 0 24 24","aria-hidden","true",1,"fold-spinner-svg"],["cx","12","cy","12","r","9",1,"fold-spinner-track"],["cx","12","cy","12","r","9",1,"fold-spinner-head"]],template:function(e,t){e&1&&(a(),l(0,"svg",0),d(1,"circle",1)(2,"circle",2),p())},styles:[`[_nghost-%COMP%] {
  display: inline-flex;
  width: var(--fold-spinner-size, 20px);
  height: var(--fold-spinner-size, 20px);
  flex-shrink: 0;
  color: inherit;
  line-height: 0;
}

.fold-spinner-svg[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  transform-origin: center;
  animation: _ngcontent-%COMP%_fold-spinner-rotate 0.8s linear infinite;
}

.fold-spinner-track[_ngcontent-%COMP%], 
.fold-spinner-head[_ngcontent-%COMP%] {
  fill: none;
  stroke: currentColor;
  stroke-width: 2.5;
}

.fold-spinner-track[_ngcontent-%COMP%] {
  opacity: 0.2;
}

.fold-spinner-head[_ngcontent-%COMP%] {
  stroke-linecap: round;
  stroke-dasharray: 56.5;
  stroke-dashoffset: 40;
}

@keyframes _ngcontent-%COMP%_fold-spinner-rotate {
  to {
    transform: rotate(360deg);
  }
}
@media (prefers-reduced-motion: reduce) {
  .fold-spinner-svg[_ngcontent-%COMP%] {
    animation: none;
  }
  .fold-spinner-head[_ngcontent-%COMP%] {
    stroke-dashoffset: 14;
  }
}`]})}export{o as FoldSpinnerComponent};
