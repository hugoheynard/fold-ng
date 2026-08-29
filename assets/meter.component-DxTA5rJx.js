import{u as t,aE as r,a0 as u,X as f,ag as _,A as c,ɵ as p,y as s,e as d,z as l,w as b,aN as v,j as o,an as g,k as x,x as h,D as M,W as C,ai as w,q as P,M as y}from"./index-B61aGEid.js";function O(m,a){if(m&1&&(s(0,"span",2),d(1),l()),m&2){const n=P();o(),y("",n.clamped()," / ",n.max())}}class i{label=t.required();value=t.required({transform:r});min=t(0,{transform:r});max=t(100,{transform:r});showValue=t(!1,{transform:u});tone=t("accent");labelId=f(_).next("fold-meter");percent=c(()=>{const a=this.min(),n=this.max()-a;if(n<=0)return 0;const e=(this.clamped()-a)/n;return Math.round(e*1e3)/10});clamped=c(()=>Math.min(Math.max(this.value(),this.min()),this.max()));static ɵfac=function(n){return new(n||i)};static ɵcmp=p({type:i,selectors:[["fold-meter"]],hostVars:2,hostBindings:function(n,e){n&2&&w(e.tone())},inputs:{label:[1,"label"],value:[1,"value"],min:[1,"min"],max:[1,"max"],showValue:[1,"showValue"],tone:[1,"tone"]},decls:6,vars:9,consts:[[1,"m-row"],[1,"m-label",3,"id"],[1,"m-value"],["role","meter",1,"m-track"],[1,"m-fill"]],template:function(n,e){n&1&&(s(0,"span",0)(1,"span",1),d(2),l(),b(3,O,2,2,"span",2),l(),s(4,"span",3),v(5,"span",4),l()),n&2&&(o(),g("id",e.labelId),o(),x(e.label()),o(),h(e.showValue()?3:-1),o(),M("aria-labelledby",e.labelId)("aria-valuenow",e.clamped())("aria-valuemin",e.min())("aria-valuemax",e.max()),o(),C("inline-size",e.percent(),"%"))},styles:[`[_nghost-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--fold-space-xs);
  min-width: 0;
}

.m-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--fold-space-sm);
  min-width: 0;
}

.m-label[_ngcontent-%COMP%] {
  min-width: 0;
  color: var(--fold-color-text-secondary);
  font-size: var(--fold-text-xs);
}

.m-value[_ngcontent-%COMP%] {
  flex: none;
  color: var(--fold-color-text-muted);
  font-size: var(--fold-text-xs);
  
  font-variant-numeric: tabular-nums;
}

.m-track[_ngcontent-%COMP%] {
  display: block;
  block-size: 4px;
  border-radius: var(--fold-radius-pill);
  background: var(--fold-color-surface-raised);
  

  overflow: clip;
}

.m-fill[_ngcontent-%COMP%] {
  display: block;
  block-size: 100%;
  border-radius: inherit;
  background: var(--fold-color-primary);
  transition: inline-size var(--fold-motion-base);
}

.success[_nghost-%COMP%]   .m-fill[_ngcontent-%COMP%] {
  background: var(--fold-color-success);
}

.warning[_nghost-%COMP%]   .m-fill[_ngcontent-%COMP%] {
  background: var(--fold-color-warning);
}

.alert[_nghost-%COMP%]   .m-fill[_ngcontent-%COMP%] {
  background: var(--fold-color-alert);
}

@media (prefers-reduced-motion: reduce) {
  .m-fill[_ngcontent-%COMP%] {
    transition: none;
  }
}`]})}export{i as FoldMeterComponent};
