import{t as v,u as M,s as C,aS as W,J as T,B as h,K as D,ɵ as H,b as S,v as B,d as o,g as w,w as b,f as a,L as O,G as d,e as p,j as i,M as k,m as u,x as _,D as A,k as c,l as z,N as I,O as j,E as P,b6 as V,b7 as F,i as E,z as s,S as x,o as L,H as m,I as f,T as N}from"./index-SxNeY3lN.js";import{F as $}from"./button.component-Duqv0Z-n.js";import{F as Q}from"./element-title.component-9Tsav4pt.js";import{F as R}from"./page-section.component-C9h3raWe.js";const X=["vpFrame"],G=[[["","params",""]],[["","preview-actions",""]],"*"],q=["[params]","[preview-actions]","*"],J=(l,t)=>t.id;function K(l,t){if(l&1){const n=P();o(0,"button",31),d("click",function(){const r=m(n).$implicit,g=s(2);return f(g.setViewport(r.w))}),V(),o(1,"svg",24),w(2,"path",25),a(),F(),o(3,"span",26),p(4),a(),o(5,"span",32),p(6),a()()}if(l&2){const n=t.$implicit,e=s(2);_("is-on",e.activeViewport()===n.id),u("title",n.label+" — "+n.w+"px"),x("aria-pressed",e.activeViewport()===n.id),i(2),x("d",n.d),i(2),c(n.label),i(2),c(n.w)}}function U(l,t){if(l&1){const n=P();o(0,"div",9)(1,"div",22)(2,"button",23),d("click",function(){m(n);const r=s();return f(r.setViewport(null))}),V(),o(3,"svg",24),w(4,"path",25),a(),F(),o(5,"span",26),p(6,"Fluid"),a()(),E(7,K,7,7,"button",27,J),a(),o(9,"div",28)(10,"input",29,1),d("input",function(){m(n);const r=N(11),g=s();return f(g.onSlider(r.valueAsNumber))}),a(),o(12,"span",30),p(13),a()()()}if(l&2){const n=s();i(2),_("is-on",n.activeViewport()==="fluid"),x("aria-pressed",n.activeViewport()==="fluid"),i(2),x("d",n.fluidIcon),i(3),L(n.viewports),i(3),u("min",n.VP_MIN)("max",n.VP_MAX)("value",n.sliderValue()),i(3),c(n.vpWidth()===null?"Fluid":n.vpWidth()+" px")}}function Y(l,t){if(l&1){const n=P();o(0,"div",15)(1,"div",33)(2,"span",19),p(3),a(),o(4,"div",34)(5,"button",20),d("click",function(){m(n);const r=s();return f(r.copy())}),p(6),a(),o(7,"button",35),d("click",function(){m(n);const r=s();return f(r.toggleCode())}),p(8," Close "),a()()(),o(9,"pre",36)(10,"code"),p(11),a()()()}if(l&2){const n=s();i(3),c(n.lang()),i(2),u("icon",n.copied()?"check-circle":"copy"),i(),z(" ",n.copied()?"Copied":"Copy"," "),i(5),c(n.code())}}class y{code=v("");lang=v("html");stage=v(!1,{transform:M});responsive=v(!0,{transform:M});initialWidth=v(null);copied=C(!1);codeOpen=C(!1);viewports=[{id:"desktop",label:"Desktop",w:1280,d:"M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"},{id:"tablet",label:"Tablet",w:768,d:"M18.5 0h-14C3.12 0 2 1.12 2 2.5v19C2 22.88 3.12 24 4.5 24h14c1.38 0 2.5-1.12 2.5-2.5v-19C21 1.12 19.88 0 18.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 20H4V3h15v17z"},{id:"mobile",label:"Mobile",w:375,d:"M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"}];fluidIcon="M6.99 11 3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z";VP_MIN=320;VP_MAX=1440;vpWidth=W(()=>this.initialWidth());vpFrame=T("vpFrame");frameWidth=C(0);activeViewport=h(()=>{const t=this.vpWidth();return t===null?"fluid":this.viewports.find(n=>n.w===t)?.id??"custom"});vpScale=h(()=>{const t=this.vpWidth(),n=this.frameWidth();return t===null||n===0?1:Math.min(1,n/t)});vpInnerWidth=h(()=>{const t=this.vpWidth();return t===null?"100%":`${t}px`});sliderValue=h(()=>this.vpWidth()??this.VP_MAX);constructor(){D(t=>{const n=this.vpFrame()?.nativeElement;if(!n||typeof ResizeObserver>"u")return;const e=new ResizeObserver(r=>{const g=r[0];g&&this.frameWidth.set(g.contentRect.width)});e.observe(n),t(()=>{e.disconnect()})})}setViewport(t){this.vpWidth.set(t)}onSlider(t){this.vpWidth.set(t)}copy(){navigator.clipboard.writeText(this.code()).then(()=>{this.copied.set(!0),setTimeout(()=>this.copied.set(!1),1500)})}toggleCode(){this.codeOpen.update(t=>!t)}static ɵfac=function(n){return new(n||y)};static ɵcmp=H({type:y,selectors:[["dev-playground"]],viewQuery:function(n,e){n&1&&I(e.vpFrame,X,5),n&2&&j()},hostVars:2,hostBindings:function(n,e){n&2&&_("pg-stage",e.stage())},inputs:{code:[1,"code"],lang:[1,"lang"],stage:[1,"stage"],responsive:[1,"responsive"],initialWidth:[1,"initialWidth"]},ngContentSelectors:q,decls:29,vars:15,consts:[["vpFrame",""],["slider",""],["title","Playground","icon","play"],[1,"pg-row"],["padding","none","separators","","raisedBands","",1,"pg-panel","pg-params"],["cardHeader","","variant","title","icon","sliders","title","Settings"],[1,"pg-body","pg-params-body"],["padding","none","separators","","raisedBands","",1,"pg-panel","pg-preview"],["cardHeader","","variant","title","icon","eye","title","Preview"],["titleAction","",1,"pg-vp"],["foldButton","","titleAction","","size","sm","emphasis","outline","intent","neutral",1,"pg-code-toggle",3,"click","icon"],["cardHeader","",1,"pg-head-actions"],[1,"pg-body","pg-preview-body"],[1,"pg-vp-frame"],[1,"pg-vp-inner"],[1,"pg-code-overlay"],["surface","sunken","padding","none","separators","","raisedBands","",1,"pg-panel","pg-code"],["cardHeader","","variant","title","icon","code","title","Code"],["titleAction","",1,"pg-code-actions"],[1,"pg-lang"],["foldButton","","size","sm","emphasis","outline","intent","neutral",3,"click","icon"],[1,"pg-body","pg-pre"],["role","group","aria-label","Preview width",1,"pg-vp-devices"],["type","button","title","Fluid — fills the frame",1,"pg-vp-btn",3,"click"],["viewBox","0 0 24 24","aria-hidden","true",1,"pg-vp-ic"],["fill","currentColor"],[1,"pg-vp-name"],["type","button",1,"pg-vp-btn",3,"title","is-on"],[1,"pg-vp-slider"],["type","range","step","1","aria-label","Custom preview width",3,"input","min","max","value"],[1,"pg-vp-readout"],["type","button",1,"pg-vp-btn",3,"click","title"],[1,"pg-vp-px"],[1,"pg-code-overlay-top"],[1,"pg-code-overlay-actions"],["foldButton","","size","sm","emphasis","outline","intent","neutral","icon","close",3,"click"],[1,"pg-pre","pg-code-overlay-pre"]],template:function(n,e){n&1&&(B(G),o(0,"fold-page-section",2)(1,"div",3)(2,"fold-card",4),w(3,"fold-element-title",5),o(4,"div",6),b(5),a()(),o(6,"fold-card",7)(7,"fold-element-title",8),O(8,U,14,8,"div",9),o(9,"button",10),d("click",function(){return e.toggleCode()}),p(10," Code "),a()(),o(11,"div",11),b(12,1),a(),o(13,"div",12)(14,"div",13,0)(16,"div",14),b(17,2),a()(),O(18,Y,12,4,"div",15),a()(),o(19,"fold-card",16)(20,"fold-element-title",17)(21,"div",18)(22,"span",19),p(23),a(),o(24,"button",20),d("click",function(){return e.copy()}),p(25),a()()(),o(26,"pre",21)(27,"code"),p(28),a()()()()()),n&2&&(i(8),k(e.responsive()?8:-1),i(),u("icon",e.codeOpen()?"close":"code"),i(4),_("is-responsive",e.responsive()),i(3),A("width",e.responsive()?e.vpInnerWidth():null)("zoom",e.responsive()?e.vpScale():null),_("is-device",e.responsive()&&e.vpWidth()!==null),i(2),k(e.codeOpen()?18:-1),i(5),c(e.lang()),i(),u("icon",e.copied()?"check-circle":"copy"),i(),z(" ",e.copied()?"Copied":"Copy"," "),i(3),c(e.code()))},dependencies:[$,Q,S,R],styles:[`[_nghost-%COMP%] {
  display: block;
  container-type: inline-size;
}





.pg-row[_ngcontent-%COMP%] {
  display: grid;
  gap: 20px;
  align-items: stretch;
  

  grid-template-columns: minmax(230px, 280px) minmax(420px, 1fr) minmax(
      330px,
      420px
    );
  grid-template-areas: "settings preview code";
}
@container (max-width: 980px) {
  .pg-row[_ngcontent-%COMP%] {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "preview preview"
      "settings code";
  }
}



@container (max-width: 560px) {
  .pg-row[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    grid-template-areas:
      "preview"
      "settings";
  }
  .pg-code[_ngcontent-%COMP%] {
    display: none;
  }
  .pg-code-toggle[_ngcontent-%COMP%] {
    display: inline-flex;
  }
  .pg-code-overlay[_ngcontent-%COMP%] {
    display: flex;
  }
}
.pg-params[_ngcontent-%COMP%] {
  grid-area: settings;
}
.pg-preview[_ngcontent-%COMP%] {
  grid-area: preview;
  

  container: pgpreview / inline-size;
}
.pg-code[_ngcontent-%COMP%] {
  grid-area: code;
}



.pg-panel[_ngcontent-%COMP%] {
  overflow: hidden;
}



.pg-body[_ngcontent-%COMP%] {
  flex: 1 1 auto;
  min-height: 0;
  padding: 14px;
  overflow: auto;
}
.pg-params-body[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 12px;
}



.pg-head-actions[_ngcontent-%COMP%] {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
}
.pg-preview-body[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
}






.pg-vp-frame[_ngcontent-%COMP%], 
.pg-vp-inner[_ngcontent-%COMP%] {
  display: contents;
}







.pg-stage[_nghost-%COMP%]   .pg-preview-body[_ngcontent-%COMP%] {
  flex: 0 0 auto;
  aspect-ratio: 16 / 10;
  


  min-height: 260px;
  max-height: min(60vh, 520px);
  margin: 14px;
  padding: 20px;
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-bg-page);
  align-items: center;
  justify-content: center;
  overflow: auto;
}



.pg-code-toggle[_ngcontent-%COMP%] {
  display: none;
}



.pg-code-overlay[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  z-index: 5;
  display: none;
  flex-direction: column;
  min-height: 0;
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-glass);
  backdrop-filter: blur(var(--fold-blur-glass)) saturate(1.5);
  -webkit-backdrop-filter: blur(var(--fold-blur-glass)) saturate(1.5);
}
.pg-code-overlay-top[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 8px 8px 14px;
  border-bottom: 1px solid var(--fold-color-glass-border);
}
.pg-code-overlay-actions[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 2px;
}
.pg-code-overlay-pre[_ngcontent-%COMP%] {
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 12px 14px;
}


.pg-code-actions[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.pg-lang[_ngcontent-%COMP%] {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--fold-color-text-muted);
}
.pg-pre[_ngcontent-%COMP%] {
  margin: 0;
  overflow-x: auto;
  font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  font-size: 12px;
  line-height: 1.6;
  color: var(--fold-color-text-secondary);
}





.pg-preview-body.is-responsive[_ngcontent-%COMP%] {
  gap: 0;
  padding: 0;
  min-height: 460px;
}


.pg-stage[_nghost-%COMP%]   .pg-preview-body.is-responsive[_ngcontent-%COMP%] {
  flex: 1 1 auto;
  aspect-ratio: auto;
  min-height: 460px;
  max-height: none;
  margin: 0;
  padding: 0;
  background: none;
  border-radius: 0;
}




.pg-vp[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
}
.pg-vp-devices[_ngcontent-%COMP%] {
  display: inline-flex;
  gap: 2px;
  padding: 3px;
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-sunken);
}
.pg-vp-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 11px;
  border: 0;
  border-radius: var(--fold-radius-sm);
  background: transparent;
  color: var(--fold-color-text-secondary);
  font: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.12s ease,
    color 0.12s ease,
    box-shadow 0.12s ease;
}
.pg-vp-btn[_ngcontent-%COMP%]:hover {
  color: var(--fold-color-text);
}
.pg-vp-btn.is-on[_ngcontent-%COMP%] {
  background: var(--fold-color-surface-card);
  color: var(--fold-color-text);
  box-shadow: var(--fold-shadow-sm);
}
.pg-vp-ic[_ngcontent-%COMP%] {
  width: 15px;
  height: 15px;
  flex: none;
}
.pg-vp-px[_ngcontent-%COMP%] {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: var(--fold-color-text-muted);
  font-variant-numeric: tabular-nums;
}
.pg-vp-btn.is-on[_ngcontent-%COMP%]   .pg-vp-px[_ngcontent-%COMP%] {
  color: var(--fold-color-primary);
}

.pg-vp-slider[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.pg-vp-slider[_ngcontent-%COMP%]   input[type="range"][_ngcontent-%COMP%] {
  width: 200px;
  accent-color: var(--fold-color-primary);
  cursor: ew-resize;
}
.pg-vp-readout[_ngcontent-%COMP%] {
  min-width: 58px;
  text-align: right;
  font-size: 12px;
  font-weight: 600;
  color: var(--fold-color-text-secondary);
  font-variant-numeric: tabular-nums;
}





@container pgpreview (max-width: 560px) {
  .pg-vp-name[_ngcontent-%COMP%], 
   .pg-vp-px[_ngcontent-%COMP%] {
    display: none;
  }
  .pg-vp-btn[_ngcontent-%COMP%] {
    padding: 6px 8px;
  }
  .pg-vp-slider[_ngcontent-%COMP%]   input[type="range"][_ngcontent-%COMP%] {
    width: 150px;
  }
}
@container pgpreview (max-width: 400px) {
  .pg-vp[_ngcontent-%COMP%] {
    display: none;
  }
}



.pg-preview-body.is-responsive[_ngcontent-%COMP%]   .pg-vp-frame[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
  padding: 20px;
  background: var(--fold-color-bg-page);
}
.pg-preview-body.is-responsive[_ngcontent-%COMP%]   .pg-vp-inner[_ngcontent-%COMP%] {
  display: block;
  flex: 0 0 auto;
  

  container-type: inline-size;
}

.pg-preview-body.is-responsive[_ngcontent-%COMP%]   .pg-vp-inner.is-device[_ngcontent-%COMP%] {
  border-radius: var(--fold-radius-md);
  outline: 1px solid var(--fold-color-border-subtle);
  outline-offset: 0;
}`]})}export{y as D};
