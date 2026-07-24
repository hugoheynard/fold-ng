import{t as c,u as C,s as f,ɵ as b,b as P,v as h,d as t,g as w,w as d,f as o,G as l,e as i,L as O,j as a,m as _,M,k as s,l as x,x as k,E as B,z as g,H as v,I as y}from"./index-BRypQu9N.js";import{F as D}from"./button.component-C27ambRQ.js";import{F}from"./element-title.component-BOx-Ocj7.js";import{F as T}from"./page-section.component-C-pFuP0D.js";const z=[[["","params",""]],[["","preview-actions",""]],"*"],H=["[params]","[preview-actions]","*"];function j(u,p){if(u&1){const n=B();t(0,"div",10)(1,"div",17)(2,"span",14),i(3),o(),t(4,"div",18)(5,"button",15),l("click",function(){v(n);const r=g();return y(r.copy())}),i(6),o(),t(7,"button",19),l("click",function(){v(n);const r=g();return y(r.toggleCode())}),i(8," Close "),o()()(),t(9,"pre",20)(10,"code"),i(11),o()()()}if(u&2){const n=g();a(3),s(n.lang()),a(2),_("icon",n.copied()?"check-circle":"copy"),a(),x(" ",n.copied()?"Copied":"Copy"," "),a(5),s(n.code())}}class m{code=c("");lang=c("html");stage=c(!1,{transform:C});copied=f(!1);codeOpen=f(!1);copy(){navigator.clipboard.writeText(this.code()).then(()=>{this.copied.set(!0),setTimeout(()=>this.copied.set(!1),1500)})}toggleCode(){this.codeOpen.update(p=>!p)}static ɵfac=function(n){return new(n||m)};static ɵcmp=b({type:m,selectors:[["dev-playground"]],hostVars:2,hostBindings:function(n,e){n&2&&k("pg-stage",e.stage())},inputs:{code:[1,"code"],lang:[1,"lang"],stage:[1,"stage"]},ngContentSelectors:H,decls:25,vars:6,consts:[["title","Playground","icon","play"],[1,"pg-row"],["padding","none","separators","","raisedBands","",1,"pg-panel","pg-params"],["cardHeader","","variant","title","icon","sliders","title","Settings"],[1,"pg-body","pg-params-body"],["padding","none","separators","","raisedBands","",1,"pg-panel","pg-preview"],["cardHeader","","variant","title","icon","eye","title","Preview"],["foldButton","","titleAction","","size","sm","emphasis","outline","intent","neutral",1,"pg-code-toggle",3,"click","icon"],["cardHeader","",1,"pg-head-actions"],[1,"pg-body","pg-preview-body"],[1,"pg-code-overlay"],["surface","sunken","padding","none","separators","","raisedBands","",1,"pg-panel","pg-code"],["cardHeader","","variant","title","icon","code","title","Code"],["titleAction","",1,"pg-code-actions"],[1,"pg-lang"],["foldButton","","size","sm","emphasis","outline","intent","neutral",3,"click","icon"],[1,"pg-body","pg-pre"],[1,"pg-code-overlay-top"],[1,"pg-code-overlay-actions"],["foldButton","","size","sm","emphasis","outline","intent","neutral","icon","close",3,"click"],[1,"pg-pre","pg-code-overlay-pre"]],template:function(n,e){n&1&&(h(z),t(0,"fold-page-section",0)(1,"div",1)(2,"fold-card",2),w(3,"fold-element-title",3),t(4,"div",4),d(5),o()(),t(6,"fold-card",5)(7,"fold-element-title",6)(8,"button",7),l("click",function(){return e.toggleCode()}),i(9," Code "),o()(),t(10,"div",8),d(11,1),o(),t(12,"div",9),d(13,2),O(14,j,12,4,"div",10),o()(),t(15,"fold-card",11)(16,"fold-element-title",12)(17,"div",13)(18,"span",14),i(19),o(),t(20,"button",15),l("click",function(){return e.copy()}),i(21),o()()(),t(22,"pre",16)(23,"code"),i(24),o()()()()()),n&2&&(a(8),_("icon",e.codeOpen()?"close":"code"),a(6),M(e.codeOpen()?14:-1),a(5),s(e.lang()),a(),_("icon",e.copied()?"check-circle":"copy"),a(),x(" ",e.copied()?"Copied":"Copy"," "),a(3),s(e.code()))},dependencies:[D,F,P,T],styles:[`[_nghost-%COMP%] {
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
}`]})}export{m as D};
