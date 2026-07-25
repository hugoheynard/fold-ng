import{t as g,s as b,Q as F,aI as I,b7 as N,aw as R,C as j,u as V,aS as $,ab as D,B as d,at as P,aA as M,ɵ as L,b as q,v as Q,d as i,g as w,w as O,f as a,J as k,G as v,e as p,j as r,K as H,m as _,x as f,k as u,l as S,W as X,X as G,E as z,b6 as A,b8 as E,i as J,z as c,N as C,o as K,O as B,D as T,H as x,I as y}from"./index-CyCyHBaV.js";import{F as U}from"./button.component-3OggVqFw.js";import{F as Y}from"./element-title.component-BexDAqTP.js";import{F as Z}from"./page-section.component-BUwGFJUr.js";class h{source=g.required();themeHost=g(null);contentHeight=b(0);host=F(I).nativeElement;cleanups=[];mounted=!1;constructor(){N(()=>this.mount()),F(R).onDestroy(()=>{for(const e of this.cleanups)e()})}mount(){if(this.mounted)return;const e=this.host.contentDocument,n=this.source();if(!e||!e.body){this.host.addEventListener("load",()=>this.mount(),{once:!0});return}this.mounted=!0,e.documentElement.style.background="transparent",e.body.style.margin="0",e.body.style.background="transparent",this.mirrorStyles(e),this.mirrorTheme(e),e.body.appendChild(n),this.observeHeight(e,n)}mirrorStyles(e){const n='style, link[rel="stylesheet"]';for(const o of Array.from(document.head.querySelectorAll(n)))e.head.appendChild(o.cloneNode(!0));const t=new MutationObserver(o=>{for(const l of o)for(const m of Array.from(l.addedNodes))m instanceof Element&&m.matches(n)&&e.head.appendChild(m.cloneNode(!0))});t.observe(document.head,{childList:!0}),this.cleanups.push(()=>t.disconnect())}mirrorTheme(e){const n=this.themeHost();if(!n)return;const t=e.documentElement,o=()=>{const m=n.getAttribute("data-theme");m===null?t.removeAttribute("data-theme"):t.setAttribute("data-theme",m)};o();const l=new MutationObserver(o);l.observe(n,{attributes:!0,attributeFilter:["data-theme"]}),this.cleanups.push(()=>l.disconnect())}observeHeight(e,n){if(typeof ResizeObserver>"u")return;const t=()=>this.contentHeight.set(n.scrollHeight),o=new ResizeObserver(t);o.observe(n),o.observe(e.body),t(),this.cleanups.push(()=>o.disconnect())}static ɵfac=function(n){return new(n||h)};static ɵdir=j({type:h,selectors:[["iframe","devPreviewFrame",""]],inputs:{source:[1,"source"],themeHost:[1,"themeHost"]}})}const nn=["vpFrame"],en=[[["","params",""]],[["","preview-actions",""]],"*"],tn=["[params]","[preview-actions]","*"],on=(s,e)=>e.id;function rn(s,e){if(s&1){const n=z();i(0,"button",33),v("click",function(){const o=x(n).$implicit,l=c(2);return y(l.setViewport(o.w))}),A(),i(1,"svg",26),w(2,"path",27),a(),E(),i(3,"span",28),p(4),a(),i(5,"span",34),p(6),a()()}if(s&2){const n=e.$implicit,t=c(2);f("is-on",t.activeViewport()===n.id),_("title",n.label+" — "+n.w+"px"),C("aria-pressed",t.activeViewport()===n.id),r(2),C("d",n.d),r(2),u(n.label),r(2),u(n.w)}}function an(s,e){if(s&1){const n=z();i(0,"div",10)(1,"div",24)(2,"button",25),v("click",function(){x(n);const o=c();return y(o.setViewport(null))}),A(),i(3,"svg",26),w(4,"path",27),a(),E(),i(5,"span",28),p(6,"Fluid"),a()(),J(7,rn,7,7,"button",29,on),a(),i(9,"div",30)(10,"input",31,2),v("input",function(){x(n);const o=B(11),l=c();return y(l.onSlider(o.valueAsNumber))}),a(),i(12,"span",32),p(13),a()()()}if(s&2){const n=c();r(2),f("is-on",n.activeViewport()==="fluid"),C("aria-pressed",n.activeViewport()==="fluid"),r(2),C("d",n.fluidIcon),r(3),K(n.viewports),r(3),_("min",n.VP_MIN)("max",n.VP_MAX)("value",n.sliderValue()),r(3),u(n.vpWidth()===null?"Fluid":n.vpWidth()+" px")}}function sn(s,e){if(s&1&&(i(0,"div",35),w(1,"iframe",36),a()),s&2){const n=c(),t=B(18);T("width",n.stageWidth())("height",n.stageHeight(),"px"),f("is-device",n.vpWidth()!==null),r(),T("width",n.iframeWidth())("height",n.contentHeight(),"px")("transform",n.iframeTransform()),_("source",t)("themeHost",n.themeHostEl)}}function pn(s,e){if(s&1){const n=z();i(0,"div",17)(1,"div",37)(2,"span",21),p(3),a(),i(4,"div",38)(5,"button",22),v("click",function(){x(n);const o=c();return y(o.copy())}),p(6),a(),i(7,"button",39),v("click",function(){x(n);const o=c();return y(o.toggleCode())}),p(8," Close "),a()()(),i(9,"pre",40)(10,"code"),p(11),a()()()}if(s&2){const n=c();r(3),u(n.lang()),r(2),_("icon",n.copied()?"check-circle":"copy"),r(),S(" ",n.copied()?"Copied":"Copy"," "),r(5),u(n.code())}}class W{code=g("");lang=g("html");stage=g(!1,{transform:V});responsive=g(!0,{transform:V});initialWidth=g(null);copied=b(!1);codeOpen=b(!1);viewports=[{id:"desktop",label:"Desktop",w:1280,d:"M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"},{id:"tablet",label:"Tablet",w:768,d:"M18.5 0h-14C3.12 0 2 1.12 2 2.5v19C2 22.88 3.12 24 4.5 24h14c1.38 0 2.5-1.12 2.5-2.5v-19C21 1.12 19.88 0 18.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 20H4V3h15v17z"},{id:"mobile",label:"Mobile",w:375,d:"M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"}];fluidIcon="M6.99 11 3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z";VP_MIN=320;VP_MAX=1440;vpWidth=$(()=>this.initialWidth());vpFrame=D("vpFrame");frameWidth=b(0);fitWidth=b(0);activeViewport=d(()=>{const e=this.vpWidth();return e===null?"fluid":this.viewports.find(n=>n.w===e)?.id??"custom"});previewFrame=D(h);themeHostEl=typeof document>"u"?null:document.querySelector("gallery-shell");vpScale=d(()=>{const e=this.vpWidth();if(e===null)return 1;const n=this.fitWidth(),t=this.frameWidth(),o=n>0&&t>0?Math.min(n,t):n||t;return o===0?1:Math.min(1,o/e)});contentHeight=d(()=>this.previewFrame()?.contentHeight()??0);iframeWidth=d(()=>{const e=this.vpWidth();return e===null?"100%":`${e}px`});iframeTransform=d(()=>{const e=this.vpScale();return e===1?"none":`scale(${e})`});stageWidth=d(()=>{const e=this.vpWidth();return e===null?"100%":`${e*this.vpScale()}px`});stageHeight=d(()=>this.contentHeight()*this.vpScale());sliderValue=d(()=>this.vpWidth()??this.VP_MAX);constructor(){P(e=>{const n=this.vpFrame()?.nativeElement;if(!n||typeof ResizeObserver>"u")return;const t=new ResizeObserver(o=>{const l=o[0];l&&this.frameWidth.set(l.contentRect.width)});t.observe(n),e(()=>{t.disconnect()})}),P(()=>{this.vpWidth();const e=M(()=>this.frameWidth());e>0&&M(()=>this.fitWidth.set(e))}),P(()=>{const e=this.frameWidth();M(()=>{e>0&&this.fitWidth()===0&&this.fitWidth.set(e)})})}setViewport(e){this.vpWidth.set(e)}onSlider(e){this.vpWidth.set(e)}copy(){navigator.clipboard.writeText(this.code()).then(()=>{this.copied.set(!0),setTimeout(()=>this.copied.set(!1),1500)})}toggleCode(){this.codeOpen.update(e=>!e)}static ɵfac=function(n){return new(n||W)};static ɵcmp=L({type:W,selectors:[["dev-playground"]],viewQuery:function(n,t){n&1&&X(t.vpFrame,nn,5)(t.previewFrame,h,5),n&2&&G(2)},hostVars:2,hostBindings:function(n,t){n&2&&f("pg-stage",t.stage())},inputs:{code:[1,"code"],lang:[1,"lang"],stage:[1,"stage"],responsive:[1,"responsive"],initialWidth:[1,"initialWidth"]},ngContentSelectors:tn,decls:31,vars:12,consts:[["vpFrame",""],["vpSrc",""],["slider",""],["title","Playground","icon","play"],[1,"pg-row"],["padding","none","separators","","raisedBands","",1,"pg-panel","pg-params"],["cardHeader","","variant","title","icon","sliders","title","Settings"],[1,"pg-body","pg-params-body"],["padding","none","separators","","raisedBands","",1,"pg-panel","pg-preview"],["cardHeader","","variant","title","icon","eye","title","Preview"],["titleAction","",1,"pg-vp"],["foldButton","","titleAction","","size","sm","emphasis","outline","intent","neutral",1,"pg-code-toggle",3,"click","icon"],["cardHeader","",1,"pg-head-actions"],[1,"pg-body","pg-preview-body"],[1,"pg-vp-frame"],[1,"pg-vp-stage",3,"is-device","width","height"],[1,"pg-vp-src"],[1,"pg-code-overlay"],["surface","sunken","padding","none","separators","","raisedBands","",1,"pg-panel","pg-code"],["cardHeader","","variant","title","icon","code","title","Code"],["titleAction","",1,"pg-code-actions"],[1,"pg-lang"],["foldButton","","size","sm","emphasis","outline","intent","neutral",3,"click","icon"],[1,"pg-body","pg-pre"],["role","group","aria-label","Preview width",1,"pg-vp-devices"],["type","button","title","Fluid — fills the frame",1,"pg-vp-btn",3,"click"],["viewBox","0 0 24 24","aria-hidden","true",1,"pg-vp-ic"],["fill","currentColor"],[1,"pg-vp-name"],["type","button",1,"pg-vp-btn",3,"title","is-on"],[1,"pg-vp-slider"],["type","range","step","1","aria-label","Custom preview width",3,"input","min","max","value"],[1,"pg-vp-readout"],["type","button",1,"pg-vp-btn",3,"click","title"],[1,"pg-vp-px"],[1,"pg-vp-stage"],["title","Preview","devPreviewFrame","",1,"pg-vp-iframe",3,"source","themeHost"],[1,"pg-code-overlay-top"],[1,"pg-code-overlay-actions"],["foldButton","","size","sm","emphasis","outline","intent","neutral","icon","close",3,"click"],[1,"pg-pre","pg-code-overlay-pre"]],template:function(n,t){n&1&&(Q(en),i(0,"fold-page-section",3)(1,"div",4)(2,"fold-card",5),w(3,"fold-element-title",6),i(4,"div",7),O(5),a()(),i(6,"fold-card",8)(7,"fold-element-title",9),k(8,an,14,8,"div",10),i(9,"button",11),v("click",function(){return t.toggleCode()}),p(10," Code "),a()(),i(11,"div",12),O(12,1),a(),i(13,"div",13)(14,"div",14,0),k(16,sn,2,14,"div",15),i(17,"div",16,1),O(19,2),a()(),k(20,pn,12,4,"div",17),a()(),i(21,"fold-card",18)(22,"fold-element-title",19)(23,"div",20)(24,"span",21),p(25),a(),i(26,"button",22),v("click",function(){return t.copy()}),p(27),a()()(),i(28,"pre",23)(29,"code"),p(30),a()()()()()),n&2&&(r(8),H(t.responsive()?8:-1),r(),_("icon",t.codeOpen()?"close":"code"),r(4),f("is-responsive",t.responsive()),r(3),H(t.responsive()?16:-1),r(),f("is-hosted",t.responsive()),r(3),H(t.codeOpen()?20:-1),r(5),u(t.lang()),r(),_("icon",t.copied()?"check-circle":"copy"),r(),S(" ",t.copied()?"Copied":"Copy"," "),r(3),u(t.code()))},dependencies:[U,Y,q,Z,h],styles:[`[_nghost-%COMP%] {
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
.pg-vp-src[_ngcontent-%COMP%] {
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


.pg-vp-stage[_ngcontent-%COMP%] {
  position: relative;
  flex: 0 0 auto;
}


.pg-vp-stage.is-device[_ngcontent-%COMP%] {
  border-radius: var(--fold-radius-md);
  outline: 1px solid var(--fold-color-border-subtle);
  overflow: hidden;
}
.pg-vp-iframe[_ngcontent-%COMP%] {
  display: block;
  border: 0;
  
  transform-origin: top left;
  background: transparent;
}






.pg-vp-src.is-hosted[_ngcontent-%COMP%] {
  display: block;
  width: 100%;
  container: fold-preview / inline-size;
}`]})}export{W as D};
