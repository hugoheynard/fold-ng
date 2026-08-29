import{X as F,ag as C,V as h,an as D,u as i,ao as z,a4 as k,s as P,ɵ as O,F as w,E as M,d as s,B as f,N as I,O as T,g as x,w as v,f as c,L,D as S,j as l,m,x as b,a8 as V,a9 as E,e as u,q as g,k as _}from"./index-CvaVehfM.js";class d{autoId=F(C).next("fold-field");static ɵfac=function(n){return new(n||d)};static ɵdir=h({type:d,selectors:[["input",3,"id","",3,"name",""],["select",3,"id","",3,"name",""],["textarea",3,"id","",3,"name",""]],hostVars:1,hostBindings:function(n,e){n&2&&D("id",e.autoId)}})}const j=["fileInput"];function q(t,o){if(t&1&&(s(0,"span",3),u(1),c()),t&2){const n=g();l(),_(n.busyLabel())}}function A(t,o){t&1&&(s(0,"small",5),u(1),c()),t&2&&(l(),_(o))}function B(t,o){if(t&1&&(s(0,"span",3),u(1),c(),v(2,A,2,1,"small",5)),t&2){let n;const e=g();l(),_(e.label()),l(),b((n=e.hint())?2:-1,n)}}class p{accept=i("");multiple=i(!0);label=i("Drag a file or browse");hint=i(null);busy=i(!1);busyLabel=i("Uploading…");disabled=i(!1);filesPicked=z();fileInput=k.required("fileInput");isDragOver=P(!1);openFilePicker(){this.disabled()||this.busy()||this.fileInput().nativeElement.click()}onFilesSelected(o){o instanceof HTMLInputElement&&(!o.files||o.files.length===0||(this.filesPicked.emit(Array.from(o.files)),o.value=""))}onDragOver(o){this.disabled()||this.busy()||(o.preventDefault(),this.isDragOver.set(!0))}onDragLeave(){this.isDragOver.set(!1)}onDrop(o){if(o.preventDefault(),this.isDragOver.set(!1),this.disabled()||this.busy())return;const n=o.dataTransfer?.files;!n||n.length===0||this.filesPicked.emit(Array.from(n))}static ɵfac=function(n){return new(n||p)};static ɵcmp=O({type:p,selectors:[["fold-file-dropzone"]],viewQuery:function(n,e){n&1&&V(e.fileInput,j,5),n&2&&E()},inputs:{accept:[1,"accept"],multiple:[1,"multiple"],label:[1,"label"],hint:[1,"hint"],busy:[1,"busy"],busyLabel:[1,"busyLabel"],disabled:[1,"disabled"]},outputs:{filesPicked:"filesPicked"},decls:6,vars:12,consts:[["fileInput",""],["role","button","tabindex","0",1,"dropzone",3,"click","keydown.enter","keydown.space","dragover","dragleave","drop"],["name","upload",3,"size"],[1,"label"],["type","file","hidden","",3,"change","accept","multiple","disabled"],[1,"hint"]],template:function(n,e){if(n&1){const y=M();s(0,"div",1),f("click",function(){return e.openFilePicker()})("keydown.enter",function(){return e.openFilePicker()})("keydown.space",function(r){return I(y),e.openFilePicker(),T(r.preventDefault())})("dragover",function(r){return e.onDragOver(r)})("dragleave",function(){return e.onDragLeave()})("drop",function(r){return e.onDrop(r)}),x(1,"fold-icon",2),v(2,q,2,1,"span",3)(3,B,3,2),s(4,"input",4,0),f("change",function(r){return e.onFilesSelected(r.target)}),c()()}n&2&&(L("over",e.isDragOver())("busy",e.busy())("disabled",e.disabled()),S("aria-disabled",e.disabled()||e.busy()),l(),m("size",22),l(),b(e.busy()?2:3),l(2),m("accept",e.accept())("multiple",e.multiple())("disabled",e.disabled()||e.busy()))},dependencies:[d,w],styles:[`[_nghost-%COMP%] {
  display: block;
}

.dropzone[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--fold-space-sm);
  padding: var(--fold-space-lg) var(--fold-space-md);
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
  font-weight: var(--fold-weight-medium);
}
.dropzone[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%] {
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
}`]})}export{p as FoldFileDropzoneComponent};
