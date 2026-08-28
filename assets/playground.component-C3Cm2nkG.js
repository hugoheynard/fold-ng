import{u as g,s as _,X as z,Y as I,a6 as R,$ as j,az as $,V as q,a0 as F,al as X,a4 as S,A as c,aA as P,aB as M,ɵ as Q,b as Y,a1 as G,d as i,g as w,a2 as O,f as a,w as k,B as v,e as p,j as r,x as H,m as h,L as f,k as u,l as B,a8 as J,a9 as K,E as T,aC as L,aD as N,i as U,q as d,D as C,o as Z,a3 as nn,W as D,N as b,O as y}from"./index-JouYLep9.js";import{FoldButtonComponent as en}from"./button.component-CB-H3f5t.js";import{FoldElementTitleComponent as tn}from"./element-title.component-BUXTv6mu.js";import{FoldPageSectionComponent as on}from"./page-section.component-CajJNfZ2.js";import{FoldSliderComponent as rn}from"./slider.component-BkLDIpP5.js";const E='style, link[rel="stylesheet"]';function A(l,e){if(!(e instanceof HTMLLinkElement))return e.cloneNode(!0);const n=l.createElement("link");n.rel="stylesheet",n.href=e.href;for(const t of["media","integrity","crossorigin","referrerpolicy"]){const o=e.getAttribute(t);o!==null&&n.setAttribute(t,o)}return n}class m{source=g.required();themeHost=g(null);contentHeight=_(0);host=z(I).nativeElement;cleanups=[];mounted=!1;constructor(){R(()=>this.mount()),z(j).onDestroy(()=>{for(const e of this.cleanups)e()})}mount(){if(this.mounted)return;const e=this.host.contentDocument,n=this.source();if(!e||!e.body){this.host.addEventListener("load",()=>this.mount(),{once:!0});return}this.mounted=!0,e.documentElement.style.background="transparent",e.body.style.margin="0",e.body.style.background="transparent",this.mirrorStyles(e),this.mirrorSprite(e),this.mirrorTheme(e),this.applyBaseTypography(e),e.body.appendChild(n),this.observeHeight(e,n)}mirrorStyles(e){for(const t of Array.from(document.head.querySelectorAll(E)))e.head.appendChild(A(e,t));const n=new MutationObserver(t=>{for(const o of t)for(const s of Array.from(o.addedNodes))s instanceof Element&&s.matches(E)&&e.head.appendChild(A(e,s))});n.observe(document.head,{childList:!0}),this.cleanups.push(()=>n.disconnect())}mirrorSprite(e){const n=document.getElementById($);if(!n)return;const t=n.cloneNode(!0);e.body.appendChild(t);const o=new MutationObserver(s=>{for(const x of s)for(const V of Array.from(x.addedNodes))V instanceof Element&&t.appendChild(V.cloneNode(!0))});o.observe(n,{childList:!0}),this.cleanups.push(()=>o.disconnect())}applyBaseTypography(e){const n=this.themeHost();e.body.style.fontFamily=n?getComputedStyle(n).fontFamily:"system-ui, -apple-system, sans-serif",e.body.style.color="var(--fold-color-text)"}mirrorTheme(e){const n=this.themeHost();if(!n)return;const t=e.documentElement,o=()=>{const x=n.getAttribute("data-theme");x===null?t.removeAttribute("data-theme"):t.setAttribute("data-theme",x)};o();const s=new MutationObserver(o);s.observe(n,{attributes:!0,attributeFilter:["data-theme"]}),this.cleanups.push(()=>s.disconnect())}observeHeight(e,n){if(typeof ResizeObserver>"u")return;const t=()=>this.contentHeight.set(n.scrollHeight),o=new ResizeObserver(t);o.observe(n),o.observe(e.body),t(),this.cleanups.push(()=>o.disconnect())}static ɵfac=function(n){return new(n||m)};static ɵdir=q({type:m,selectors:[["iframe","devPreviewFrame",""]],inputs:{source:[1,"source"],themeHost:[1,"themeHost"]}})}const an=["vpFrame"],sn=[[["","params",""]],[["","preview-actions",""]],"*"],ln=["[params]","[preview-actions]","*"],pn=(l,e)=>e.id;function dn(l,e){if(l&1){const n=T();i(0,"button",32),v("click",function(){const o=b(n).$implicit,s=d(2);return y(s.setViewport(o.w))}),L(),i(1,"svg",25),w(2,"path",26),a(),N(),i(3,"span",27),p(4),a(),i(5,"span",33),p(6),a()()}if(l&2){const n=e.$implicit,t=d(2);f("is-on",t.activeViewport()===n.id),h("title",n.label+" — "+n.w+"px"),C("aria-pressed",t.activeViewport()===n.id),r(2),C("d",n.d),r(2),u(n.label),r(2),u(n.w)}}function cn(l,e){if(l&1){const n=T();i(0,"div",9)(1,"div",23)(2,"button",24),v("click",function(){b(n);const o=d();return y(o.setViewport(null))}),L(),i(3,"svg",25),w(4,"path",26),a(),N(),i(5,"span",27),p(6,"Fluid"),a()(),U(7,dn,7,7,"button",28,pn),a(),i(9,"div",29)(10,"fold-slider",30),v("valueChange",function(o){b(n);const s=d();return y(s.onSlider(o))}),a(),i(11,"span",31),p(12),a()()()}if(l&2){const n=d();r(2),f("is-on",n.activeViewport()==="fluid"),C("aria-pressed",n.activeViewport()==="fluid"),r(2),C("d",n.fluidIcon),r(3),Z(n.viewports),r(3),h("min",n.VP_MIN)("max",n.VP_MAX)("step",1)("showValue",!1)("value",n.sliderValue()),r(2),u(n.vpWidth()===null?"Fluid":n.vpWidth()+" px")}}function gn(l,e){if(l&1&&(i(0,"div",34),w(1,"iframe",35),a()),l&2){const n=d(),t=nn(18);D("width",n.stageWidth())("height",n.stageHeight(),"px"),f("is-device",n.vpWidth()!==null),r(),D("width",n.iframeWidth())("height",n.contentHeight(),"px")("transform",n.iframeTransform()),h("source",t)("themeHost",n.themeHostEl)}}function vn(l,e){if(l&1){const n=T();i(0,"div",16)(1,"div",36)(2,"span",20),p(3),a(),i(4,"div",37)(5,"button",21),v("click",function(){b(n);const o=d();return y(o.copy())}),p(6),a(),i(7,"button",38),v("click",function(){b(n);const o=d();return y(o.toggleCode())}),p(8," Close "),a()()(),i(9,"pre",39)(10,"code"),p(11),a()()()}if(l&2){const n=d();r(3),u(n.lang()),r(2),h("icon",n.copied()?"check-circle":"copy"),r(),B(" ",n.copied()?"Copied":"Copy"," "),r(5),u(n.code())}}class W{code=g("");lang=g("html");stage=g(!1,{transform:F});responsive=g(!0,{transform:F});initialWidth=g(null);copied=_(!1);codeOpen=_(!1);viewports=[{id:"desktop",label:"Desktop",w:1280,d:"M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"},{id:"tablet",label:"Tablet",w:768,d:"M18.5 0h-14C3.12 0 2 1.12 2 2.5v19C2 22.88 3.12 24 4.5 24h14c1.38 0 2.5-1.12 2.5-2.5v-19C21 1.12 19.88 0 18.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 20H4V3h15v17z"},{id:"mobile",label:"Mobile",w:375,d:"M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"}];fluidIcon="M6.99 11 3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z";VP_MIN=320;VP_MAX=1440;vpWidth=X(()=>this.initialWidth());vpFrame=S("vpFrame");frameWidth=_(0);fitWidth=_(0);activeViewport=c(()=>{const e=this.vpWidth();return e===null?"fluid":this.viewports.find(n=>n.w===e)?.id??"custom"});previewFrame=S(m);themeHostEl=typeof document>"u"?null:document.querySelector("gallery-shell");vpScale=c(()=>{const e=this.vpWidth();if(e===null)return 1;const n=this.fitWidth(),t=this.frameWidth(),o=n>0&&t>0?Math.min(n,t):n||t;return o===0?1:Math.min(1,o/e)});contentHeight=c(()=>this.previewFrame()?.contentHeight()??0);iframeWidth=c(()=>{const e=this.vpWidth();return e===null?"100%":`${e}px`});iframeTransform=c(()=>{const e=this.vpScale();return e===1?"none":`scale(${e})`});stageWidth=c(()=>{const e=this.vpWidth();return e===null?"100%":`${e*this.vpScale()}px`});stageHeight=c(()=>this.contentHeight()*this.vpScale());sliderValue=c(()=>this.vpWidth()??this.VP_MAX);constructor(){P(e=>{const n=this.vpFrame()?.nativeElement;if(!n||typeof ResizeObserver>"u")return;const t=new ResizeObserver(o=>{const s=o[0];s&&this.frameWidth.set(s.contentRect.width)});t.observe(n),e(()=>{t.disconnect()})}),P(()=>{this.vpWidth();const e=M(()=>this.frameWidth());e>0&&M(()=>this.fitWidth.set(e))}),P(()=>{const e=this.frameWidth();M(()=>{e>0&&this.fitWidth()===0&&this.fitWidth.set(e)})})}setViewport(e){this.vpWidth.set(e)}onSlider(e){this.vpWidth.set(e)}copy(){navigator.clipboard.writeText(this.code()).then(()=>{this.copied.set(!0),setTimeout(()=>this.copied.set(!1),1500)})}toggleCode(){this.codeOpen.update(e=>!e)}static ɵfac=function(n){return new(n||W)};static ɵcmp=Q({type:W,selectors:[["dev-playground"]],viewQuery:function(n,t){n&1&&J(t.vpFrame,an,5)(t.previewFrame,m,5),n&2&&K(2)},hostVars:2,hostBindings:function(n,t){n&2&&f("pg-stage",t.stage())},inputs:{code:[1,"code"],lang:[1,"lang"],stage:[1,"stage"],responsive:[1,"responsive"],initialWidth:[1,"initialWidth"]},ngContentSelectors:ln,decls:31,vars:12,consts:[["vpFrame",""],["vpSrc",""],["title","Playground","icon","play"],[1,"pg-row"],["padding","none","separators","both","raisedBands","both",1,"pg-panel","pg-params"],["cardHeader","","variant","title","icon","sliders","title","Settings"],[1,"pg-body","pg-params-body"],["padding","none","separators","both","raisedBands","both",1,"pg-panel","pg-preview"],["cardHeader","","variant","title","icon","eye","title","Preview"],["titleAction","",1,"pg-vp"],["foldButton","","titleAction","","size","sm","emphasis","outline","intent","neutral",1,"pg-code-toggle",3,"click","icon"],["cardHeader","",1,"pg-head-actions"],[1,"pg-body","pg-preview-body"],[1,"pg-vp-frame"],[1,"pg-vp-stage",3,"is-device","width","height"],[1,"pg-vp-src"],[1,"pg-code-overlay"],["surface","sunken","padding","none","separators","both","raisedBands","both",1,"pg-panel","pg-code"],["cardHeader","","variant","title","icon","code","title","Code"],["titleAction","",1,"pg-code-actions"],[1,"pg-lang"],["foldButton","","size","sm","emphasis","outline","intent","neutral",3,"click","icon"],[1,"pg-body","pg-pre"],["role","group","aria-label","Preview width",1,"pg-vp-devices"],["type","button","title","Fluid — fills the frame",1,"pg-vp-btn",3,"click"],["viewBox","0 0 24 24","aria-hidden","true",1,"pg-vp-ic"],["fill","currentColor"],[1,"pg-vp-name"],["type","button",1,"pg-vp-btn",3,"title","is-on"],[1,"pg-vp-slider"],["ariaLabel","Custom preview width",3,"valueChange","min","max","step","showValue","value"],[1,"pg-vp-readout"],["type","button",1,"pg-vp-btn",3,"click","title"],[1,"pg-vp-px"],[1,"pg-vp-stage"],["title","Preview","devPreviewFrame","",1,"pg-vp-iframe",3,"source","themeHost"],[1,"pg-code-overlay-top"],[1,"pg-code-overlay-actions"],["foldButton","","size","sm","emphasis","outline","intent","neutral","icon","close",3,"click"],[1,"pg-pre","pg-code-overlay-pre"]],template:function(n,t){n&1&&(G(sn),i(0,"fold-page-section",2)(1,"div",3)(2,"fold-card",4),w(3,"fold-element-title",5),i(4,"div",6),O(5),a()(),i(6,"fold-card",7)(7,"fold-element-title",8),k(8,cn,13,10,"div",9),i(9,"button",10),v("click",function(){return t.toggleCode()}),p(10," Code "),a()(),i(11,"div",11),O(12,1),a(),i(13,"div",12)(14,"div",13,0),k(16,gn,2,14,"div",14),i(17,"div",15,1),O(19,2),a()(),k(20,vn,12,4,"div",16),a()(),i(21,"fold-card",17)(22,"fold-element-title",18)(23,"div",19)(24,"span",20),p(25),a(),i(26,"button",21),v("click",function(){return t.copy()}),p(27),a()()(),i(28,"pre",22)(29,"code"),p(30),a()()()()()),n&2&&(r(8),H(t.responsive()?8:-1),r(),h("icon",t.codeOpen()?"close":"code"),r(4),f("is-responsive",t.responsive()),r(3),H(t.responsive()?16:-1),r(),f("is-hosted",t.responsive()),r(3),H(t.codeOpen()?20:-1),r(5),u(t.lang()),r(),h("icon",t.copied()?"check-circle":"copy"),r(),B(" ",t.copied()?"Copied":"Copy"," "),r(3),u(t.code()))},dependencies:[en,tn,Y,on,rn,m],styles:[`[_nghost-%COMP%] {
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
  font-size: var(--fold-text-2xs);
  font-weight: var(--fold-weight-bold);
  letter-spacing: var(--fold-tracking-caps);
  text-transform: uppercase;
  color: var(--fold-color-text-muted);
}
.pg-pre[_ngcontent-%COMP%] {
  margin: 0;
  overflow-x: auto;
  font-family: var(--fold-font-mono);
  font-size: var(--fold-text-sm);
  line-height: var(--fold-leading-relaxed);
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
  font-size: var(--fold-text-sm);
  font-weight: var(--fold-weight-semibold);
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
  font-size: var(--fold-text-2xs);
  font-weight: var(--fold-weight-bold);
  letter-spacing: var(--fold-tracking-wide);
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
.pg-vp-slider[_ngcontent-%COMP%]   fold-slider[_ngcontent-%COMP%] {
  width: 200px;
}
.pg-vp-readout[_ngcontent-%COMP%] {
  min-width: 58px;
  text-align: right;
  font-size: var(--fold-text-sm);
  font-weight: var(--fold-weight-semibold);
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
  .pg-vp-slider[_ngcontent-%COMP%]   fold-slider[_ngcontent-%COMP%] {
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
