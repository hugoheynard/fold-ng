import{K as P}from"./kind-badge.component-DMrOnzjr.js";import{Q as k,U as D,C as w,Y as O,t as d,T,ab as x,s as C,ɵ as h,F as I,E as M,d as l,G as _,H as L,I as j,g as m,J as g,f as r,x as S,N as B,j as t,m as p,K as v,W as E,X as G,e as c,z as y,k as z,c as Q,l as V}from"./index-BhGKemIF.js";class f{autoId=k(D).next("fold-field");static ɵfac=function(e){return new(e||f)};static ɵdir=w({type:f,selectors:[["input",3,"id","",3,"name",""],["select",3,"id","",3,"name",""],["textarea",3,"id","",3,"name",""]],hostVars:1,hostBindings:function(e,n){e&2&&O("id",n.autoId)}})}const A=["fileInput"];function H(i,o){if(i&1&&(l(0,"span",3),c(1),r()),i&2){const e=y();t(),z(e.busyLabel())}}function K(i,o){i&1&&(l(0,"small",5),c(1),r()),i&2&&(t(),z(o))}function q(i,o){if(i&1&&(l(0,"span",3),c(1),r(),g(2,K,2,1,"small",5)),i&2){let e;const n=y();t(),z(n.label()),t(),v((e=n.hint())?2:-1,e)}}class u{accept=d("");multiple=d(!0);label=d("Glissez un fichier ou parcourez");hint=d(null);busy=d(!1);busyLabel=d("Téléversement en cours…");disabled=d(!1);filesPicked=T();fileInput=x.required("fileInput");isDragOver=C(!1);openFilePicker(){this.disabled()||this.busy()||this.fileInput().nativeElement.click()}onFilesSelected(o){o instanceof HTMLInputElement&&(!o.files||o.files.length===0||(this.filesPicked.emit(Array.from(o.files)),o.value=""))}onDragOver(o){this.disabled()||this.busy()||(o.preventDefault(),this.isDragOver.set(!0))}onDragLeave(){this.isDragOver.set(!1)}onDrop(o){if(o.preventDefault(),this.isDragOver.set(!1),this.disabled()||this.busy())return;const e=o.dataTransfer?.files;!e||e.length===0||this.filesPicked.emit(Array.from(e))}static ɵfac=function(e){return new(e||u)};static ɵcmp=h({type:u,selectors:[["fold-file-dropzone"]],viewQuery:function(e,n){e&1&&E(n.fileInput,A,5),e&2&&G()},inputs:{accept:[1,"accept"],multiple:[1,"multiple"],label:[1,"label"],hint:[1,"hint"],busy:[1,"busy"],busyLabel:[1,"busyLabel"],disabled:[1,"disabled"]},outputs:{filesPicked:"filesPicked"},decls:6,vars:12,consts:[["fileInput",""],["role","button","tabindex","0",1,"dropzone",3,"click","keydown.enter","keydown.space","dragover","dragleave","drop"],["name","upload",3,"size"],[1,"label"],["type","file","hidden","",3,"change","accept","multiple","disabled"],[1,"hint"]],template:function(e,n){if(e&1){const F=M();l(0,"div",1),_("click",function(){return n.openFilePicker()})("keydown.enter",function(){return n.openFilePicker()})("keydown.space",function(s){return L(F),n.openFilePicker(),j(s.preventDefault())})("dragover",function(s){return n.onDragOver(s)})("dragleave",function(){return n.onDragLeave()})("drop",function(s){return n.onDrop(s)}),m(1,"fold-icon",2),g(2,H,2,1,"span",3)(3,q,3,2),l(4,"input",4,0),_("change",function(s){return n.onFilesSelected(s.target)}),r()()}e&2&&(S("over",n.isDragOver())("busy",n.busy())("disabled",n.disabled()),B("aria-disabled",n.disabled()||n.busy()),t(),p("size",22),t(),v(n.busy()?2:3),t(2),p("accept",n.accept())("multiple",n.multiple())("disabled",n.disabled()||n.busy()))},dependencies:[f,I],styles:[`[_nghost-%COMP%] {
  display: block;
}

.dropzone[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 18px 14px;
  background: var(--fold-color-surface-hover);
  border: 1px dashed var(--fold-color-border);
  border-radius: var(--fold-radius-md);
  color: var(--fold-color-text-secondary);
  cursor: pointer;
  user-select: none;
  text-align: center;
  outline: none;
  transition: background var(--fold-motion-fast), border-color var(--fold-motion-fast), color var(--fold-motion-fast), transform var(--fold-motion-fast);
}
.dropzone[_ngcontent-%COMP%]:hover, .dropzone[_ngcontent-%COMP%]:focus-visible {
  background: var(--fold-color-surface-card);
  border-color: var(--fold-color-primary-border);
  color: var(--fold-color-text);
}
.dropzone[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: 2px;
}
.dropzone.over[_ngcontent-%COMP%] {
  background: var(--fold-color-primary-surface);
  border-color: var(--fold-color-primary);
  color: var(--fold-color-primary-text);
  transform: scale(1.005);
}
.dropzone.busy[_ngcontent-%COMP%] {
  cursor: progress;
  pointer-events: none;
  opacity: 0.85;
}
.dropzone.disabled[_ngcontent-%COMP%], .dropzone[aria-disabled=true][_ngcontent-%COMP%] {
  cursor: not-allowed;
  opacity: 0.55;
}
.dropzone[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {
  font-size: var(--fold-text-sm);
  font-weight: 500;
}
.dropzone[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%] {
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
}`]})}function J(i,o){if(i&1&&(l(0,"p",7),c(1),r()),i&2){const e=y();t(),V("Picked: ",e.dzFiles().join(", "))}}class b{dzFiles=C([]);onDzPick(o){this.dzFiles.set(o.map(e=>e.name))}static ɵfac=function(e){return new(e||b)};static ɵcmp=h({type:b,selectors:[["gal-dropzone-page"]],decls:15,vars:4,consts:[["fluid","","title","file dropzone","description","fold-file-dropzone — a form-family affordance (a whole drag/drop + browse target emitting File[]). Drag files on, or click to browse."],["titleBadge","","kind","component"],[1,"gal-stack"],[1,"gal-cell"],[1,"gal-tag"],[1,"fld-inputs"],["accept",".pdf,.png,.jpg",3,"filesPicked","hint"],[1,"doc-p"],["busyLabel","Téléversement…",3,"busy"],["label","Cap atteint",3,"disabled"]],template:function(e,n){e&1&&(l(0,"fold-page-layout",0),m(1,"gal-kind-badge",1),l(2,"div",2)(3,"div",3)(4,"span",4),c(5,"default · drag or click · emits File[]"),r(),l(6,"div",5)(7,"fold-file-dropzone",6),_("filesPicked",function(a){return n.onDzPick(a)}),r()(),g(8,J,2,1,"p",7),r(),l(9,"div",3)(10,"span",4),c(11,"busy · disabled"),r(),l(12,"div",5),m(13,"fold-file-dropzone",8)(14,"fold-file-dropzone",9),r()()()()),e&2&&(t(7),p("hint","PDF / PNG / JPG · max 5 Mo"),t(),v(n.dzFiles().length?8:-1),t(5),p("busy",!0),t(),p("disabled",!0))},dependencies:[P,Q,u],encapsulation:2})}export{b as default};
