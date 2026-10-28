import{u as l,aE as m,a0 as v,X as C,ag as h,A as s,ɵ as P,y as i,e as f,z as r,w as d,j as a,an as O,k as p,x as u,D as w,ai as x,L as b,q as c,M as k,aN as M,W as _,i as y,v as z,o as F}from"./index-ODrB6arQ.js";function T(o,e){if(o&1&&(i(0,"span",2),f(1),r()),o&2){const n=c();a(),k("",n.shownValue()," / ",n.shownMax())}}function V(o,e){if(o&1&&M(0,"span",5),o&2){const n=c();_("inline-size",n.percent(),"%")}}function I(o,e){if(o&1&&(i(0,"span",9),f(1),r()),o&2){const n=c().$implicit;a(),p(n.label)}}function $(o,e){if(o&1&&(i(0,"span",7)(1,"span",8),M(2,"span",5),r(),d(3,I,2,1,"span",9),r()),o&2){const n=e.$implicit;x(n.tone),_("flex-grow",n.max),b("is-current",n.current),a(2),_("inline-size",n.percent,"%"),a(),u(n.label!==null?3:-1)}}function E(o,e){if(o&1&&y(0,$,4,9,"span",6,z),o&2){const n=c();F(n.bars())}}class g{label=l.required();value=l.required({transform:m});min=l(0,{transform:m});max=l(100,{transform:m});showValue=l(!1,{transform:v});tone=l("accent");segments=l(null);labelId=C(h).next("fold-meter");percent=s(()=>{const e=this.min(),n=this.max()-e;if(n<=0)return 0;const t=(this.clamped()-e)/n;return Math.round(t*1e3)/10});clamped=s(()=>Math.min(Math.max(this.value(),this.min()),this.max()));bars=s(()=>(this.segments()??[]).map(e=>{const n=Math.max(e.max,0),t=Math.min(Math.max(e.value,0),n);return{value:t,max:n,tone:e.tone??"accent",current:e.current===!0,label:e.label??null,percent:n===0?0:Math.round(t/n*1e3)/10}}));shownMin=s(()=>this.segments()===null?this.min():0);shownMax=s(()=>this.segments()===null?this.max():this.bars().reduce((e,n)=>e+n.max,0));shownValue=s(()=>this.segments()===null?this.clamped():this.bars().reduce((e,n)=>e+n.value,0));valueText=s(()=>this.segments()===null?null:this.bars().map(e=>e.label===null?`${e.value} / ${e.max}`:`${e.value} / ${e.max} (${e.label})`).join(" ; "));static ɵfac=function(n){return new(n||g)};static ɵcmp=P({type:g,selectors:[["fold-meter"]],hostVars:4,hostBindings:function(n,t){n&2&&(x(t.tone()),b("segmented",t.segments()!==null))},inputs:{label:[1,"label"],value:[1,"value"],min:[1,"min"],max:[1,"max"],showValue:[1,"showValue"],tone:[1,"tone"],segments:[1,"segments"]},decls:7,vars:9,consts:[[1,"m-row"],[1,"m-label",3,"id"],[1,"m-value"],["role","meter",1,"m-track"],[1,"m-fill",3,"inline-size"],[1,"m-fill"],[1,"m-seg",3,"class","is-current","flex-grow"],[1,"m-seg"],[1,"m-seg-track"],[1,"m-seg-label"]],template:function(n,t){n&1&&(i(0,"span",0)(1,"span",1),f(2),r(),d(3,T,2,2,"span",2),r(),i(4,"span",3),d(5,V,1,2,"span",4)(6,E,2,0),r()),n&2&&(a(),O("id",t.labelId),a(),p(t.label()),a(),u(t.showValue()?3:-1),a(),w("aria-labelledby",t.labelId)("aria-valuenow",t.shownValue())("aria-valuemin",t.shownMin())("aria-valuemax",t.shownMax())("aria-valuetext",t.valueText()),a(),u(t.segments()===null?5:6))},styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
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


.segmented[_nghost-%COMP%]   .m-track[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  gap: var(--fold-space-xs);
  block-size: auto;
  border-radius: 0;
  background: none;
  

  overflow: visible;
}

.m-seg[_ngcontent-%COMP%] {
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  gap: var(--fold-space-xs);
  min-inline-size: var(--fold-meter-segment-min, 96px);
}




.m-seg-track[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  align-items: center;
  block-size: 10px;
}

.m-seg-track[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  inset-inline: 0;
  block-size: 8px;
  border-radius: var(--fold-radius-pill);
  background: var(--fold-color-surface-raised);
}

.m-seg[_ngcontent-%COMP%]   .m-fill[_ngcontent-%COMP%] {
  position: relative;
  z-index: 1;
  block-size: 8px;
}

.m-seg.is-current[_ngcontent-%COMP%]   .m-seg-track[_ngcontent-%COMP%]::after, 
.m-seg.is-current[_ngcontent-%COMP%]   .m-fill[_ngcontent-%COMP%] {
  block-size: 10px;
}

.m-seg.success[_ngcontent-%COMP%]   .m-fill[_ngcontent-%COMP%] {
  background: var(--fold-color-success);
}

.m-seg.warning[_ngcontent-%COMP%]   .m-fill[_ngcontent-%COMP%] {
  background: var(--fold-color-warning);
}

.m-seg.alert[_ngcontent-%COMP%]   .m-fill[_ngcontent-%COMP%] {
  background: var(--fold-color-alert);
}

.m-seg.alert[_ngcontent-%COMP%]   .m-seg-track[_ngcontent-%COMP%]::after {
  background: var(--fold-color-alert-surface);
}

.m-seg.muted[_ngcontent-%COMP%]   .m-fill[_ngcontent-%COMP%] {
  background: var(--fold-color-info-border);
}

.m-seg-label[_ngcontent-%COMP%] {
  min-width: 0;
  overflow: hidden;
  color: var(--fold-color-text-muted);
  font-size: var(--fold-text-xs);
  font-variant-numeric: tabular-nums;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.m-seg.success[_ngcontent-%COMP%]   .m-seg-label[_ngcontent-%COMP%] {
  color: var(--fold-color-success-text);
}

.m-seg.alert[_ngcontent-%COMP%]   .m-seg-label[_ngcontent-%COMP%] {
  color: var(--fold-color-alert-text);
}

.m-seg.is-current[_ngcontent-%COMP%]   .m-seg-label[_ngcontent-%COMP%] {
  color: var(--fold-color-text-secondary);
  font-weight: var(--fold-weight-semibold);
}

@media (prefers-reduced-motion: reduce) {
  .m-fill[_ngcontent-%COMP%] {
    transition: none;
  }
}`]})}export{g as FoldMeterComponent};
