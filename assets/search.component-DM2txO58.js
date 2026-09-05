import{af as C,u as a,a0 as f,ao as b,A as c,X as g,$ as v,ɵ as L,w as u,d as r,B as y,f as i,x as p,j as o,m as M,ai as T,e as m,q as d,k as h}from"./index-BUdcCUHG.js";import{FoldInputComponent as x}from"./input.component-CGQlDsGW.js";import"./input-base.component-7KIBaTu2.js";import"./info.component-Bxcc1uQ4.js";import"./common-labels-CFpYh6_s.js";import"./popover.component-BpGXqwdR.js";import"./auto-update-_srfpL1Q.js";import"./popover-trigger.directive-Dr3VcUZe.js";import"./label.component-C9sS0Q0P.js";import"./input-value-DCGlOvqF.js";function w(l,n){if(l&1&&(r(0,"p",0),m(1),i()),l&2){const e=d();o(),h(e.countText())}}function z(l,n){if(l&1&&(r(0,"p",0),m(1),i()),l&2){const e=d();o(),h(e.countText())}}class s{value=C("");placeholder=a("");size=a("md");variant=a("default");ariaLabel=a(void 0);clearable=a(!0,{transform:f});clearLabel=a("Clear search");resultCount=a(null);resultLabel=a("results");placement=a("end");delayMs=a(300);searchChange=b();showCount=c(()=>this.resultCount()!==null);countText=c(()=>`${String(this.resultCount()??0)} ${this.resultLabel()}`);timer=null;lastEmitted="";constructor(){g(v).onDestroy(()=>this.clear())}onInput(n){this.value.set(n);const e=n.trim();this.clear(),this.timer=setTimeout(()=>{e!==this.lastEmitted&&(this.lastEmitted=e,this.searchChange.emit(e))},this.delayMs())}clear(){this.timer!==null&&(clearTimeout(this.timer),this.timer=null)}static ɵfac=function(e){return new(e||s)};static ɵcmp=L({type:s,selectors:[["fold-search"]],hostVars:2,hostBindings:function(e,t){e&2&&T(t.placement())},inputs:{value:[1,"value"],placeholder:[1,"placeholder"],size:[1,"size"],variant:[1,"variant"],ariaLabel:[1,"ariaLabel"],clearable:[1,"clearable"],clearLabel:[1,"clearLabel"],resultCount:[1,"resultCount"],resultLabel:[1,"resultLabel"],placement:[1,"placement"],delayMs:[1,"delayMs"]},outputs:{value:"valueChange",searchChange:"searchChange"},decls:3,vars:9,consts:[["role","status","aria-live","polite",1,"se-count"],["type","text","leadingIcon","search",3,"valueChange","clearable","clearLabel","placeholder","ariaLabel","size","variant","value"]],template:function(e,t){e&1&&(u(0,w,2,1,"p",0),r(1,"fold-input",1),y("valueChange",function(_){return t.onInput(_)}),i(),u(2,z,2,1,"p",0)),e&2&&(p(t.showCount()&&t.placement()==="top"?0:-1),o(),M("clearable",t.clearable())("clearLabel",t.clearLabel())("placeholder",t.placeholder())("ariaLabel",t.ariaLabel())("size",t.size())("variant",t.variant())("value",t.value()),o(),p(t.showCount()&&t.placement()!=="top"?2:-1))},dependencies:[x],styles:[`[_nghost-%COMP%] {
  display: grid;
  gap: var(--fold-space-2xs);
}

.end[_nghost-%COMP%] {
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: var(--fold-space-sm);
}

.se-count[_ngcontent-%COMP%] {
  margin: 0;
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
  white-space: nowrap;
}

.top[_nghost-%COMP%]   .se-count[_ngcontent-%COMP%], 
.bottom[_nghost-%COMP%]   .se-count[_ngcontent-%COMP%] {
  justify-self: end;
}`]})}export{s as FoldSearchComponent};
