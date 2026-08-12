import{s as y,X as v,ak as P,al as O,u as o,a0 as d,am as w,A as s,ɵ as M,w as A,x as S,E as F,y as p,an as T,N as I,q as c,O as q,z as h,L as b,D as C,j as x,ao as U,t as E,e as L,W as k,l as j}from"./index-pNbL1-Op.js";function D(a){let t=0;for(let n=0;n<a.length;n+=1)t=a.charCodeAt(n)+((t<<5)-t);return t}const f=["#63b3ed","#68d391","#f6ad55","#fc8181","#b794f4","#76e4f7","#fbb6ce","#f6e05e","#4fd1c5","#a3bffa"],V=["#f687b3","#9ae6b4","#fbd38d","#feb2b2","#d6bcfa","#81e6d9","#e9d8fd","#fefcbf","#bee3f8","#c6f6d5"],R=["#a8d8ea","#b5ead7","#ffdac1","#ffb7b2","#c7b6e8","#b2ebf2","#ffc8dd","#fdf6a8","#a0e7e5","#c5cae9"],g={vivid:f,extended:[...f,...V],pastel:R};function u(a){const t=typeof a=="string"?g[a]:a;return t.length>0?t:g.vivid}const H=new P("fold.palette.default");class i{_current=y(u(v(H,{optional:!0})??"vivid"));current=this._current.asReadonly();use(t){this._current.set(u(t))}colorFor(t){const n=this._current(),e=Math.abs(D(t))%n.length;return n[e]??n[0]??"transparent"}static ɵfac=function(n){return new(n||i)};static ɵprov=O({token:i,factory:i.ɵfac})}function K(a){const t=a.trim().replace(/^#/,""),n=t.length===3?t.split("").map(e=>e+e).join(""):t;return/^[0-9a-fA-F]{6}$/.test(n)?[parseInt(n.slice(0,2),16),parseInt(n.slice(2,4),16),parseInt(n.slice(4,6),16)]:null}function _(a){const t=K(a);if(!t)return null;const n=e=>{const r=e/255;return r<=.03928?r/12.92:((r+.055)/1.055)**2.4};return .2126*n(t[0])+.7152*n(t[1])+.0722*n(t[2])}function m(a,t){const n=_(a),e=_(t);if(n===null||e===null)return null;const[r,z]=n>=e?[n,e]:[e,n];return(r+.05)/(z+.05)}function N(a,t,n){const e=m(a,t),r=m(a,n);return e===null||r===null||e>=r?t:n}function X(a,t){if(a&1){const n=F();p(0,"div",2)(1,"img",3),T("error",function(){I(n);const r=c();return q(r.imageFailed.set(!0))}),h()()}if(a&2){const n=c();b("size-sm",n.size()==="sm")("size-md",n.size()==="md")("size-lg",n.size()==="lg")("variant-ghost",n.variant()==="ghost")("shape-square",n.square())("is-muted",n.muted()),C("data-ring",n.ring()==="none"?null:n.ring())("data-ring-style",n.ringStyle())("title",n.name()),x(),U("src",n.imageUrl(),E)("alt",n.name())}}function B(a,t){if(a&1&&(p(0,"div",4),L(1),h()),a&2){const n=c();k("background",n.variant()==="solid"?n.color():"")("color",n.variant()==="solid"?n.onColor():""),b("size-sm",n.size()==="sm")("size-md",n.size()==="md")("size-lg",n.size()==="lg")("variant-ghost",n.variant()==="ghost")("shape-square",n.square())("is-muted",n.muted()),C("data-ring",n.ring()==="none"?null:n.ring())("data-ring-style",n.ringStyle())("title",n.name()),x(),j(" ",n.initials()," ")}}const G="#1a202c",W="#ffffff";class l{palette=v(i);name=o.required();size=o("md");colorSeed=o(void 0);variant=o("solid");square=o(!1,{transform:d});imageUrl=o(void 0);muted=o(!1,{transform:d});ring=o("none");ringStyle=o("solid");imageFailed=w(()=>(this.imageUrl(),!1));showImage=s(()=>!!this.imageUrl()&&!this.imageFailed());onColor=s(()=>N(this.color(),G,W));initials=s(()=>{const t=this.name().trim();if(!t)return"?";const[n="",e=""]=t.split(/\s+/);return e?(n.charAt(0)+e.charAt(0)).toUpperCase():t.substring(0,2).toUpperCase()});color=s(()=>this.palette.colorFor(this.colorSeed()??this.name()));static ɵfac=function(n){return new(n||l)};static ɵcmp=M({type:l,selectors:[["fold-avatar"]],inputs:{name:[1,"name"],size:[1,"size"],colorSeed:[1,"colorSeed"],variant:[1,"variant"],square:[1,"square"],imageUrl:[1,"imageUrl"],muted:[1,"muted"],ring:[1,"ring"],ringStyle:[1,"ringStyle"]},decls:2,vars:1,consts:[[1,"avatar","has-image",3,"size-sm","size-md","size-lg","variant-ghost","shape-square","is-muted"],[1,"avatar",3,"size-sm","size-md","size-lg","variant-ghost","shape-square","is-muted","background","color"],[1,"avatar","has-image"],[1,"avatar-img",3,"error","src","alt"],[1,"avatar"]],template:function(n,e){n&1&&A(0,X,2,17,"div",0)(1,B,2,20,"div",1),n&2&&S(e.showImage()?0:1)},styles:[`@charset "UTF-8";
.avatar[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-weight: 700;
  letter-spacing: 0.02em;
  user-select: none;
  border-radius: var(--fold-radius-round);
}

.avatar.size-sm[_ngcontent-%COMP%] {
  width: 20px;
  height: 20px;
  font-size: 7px;
}

.avatar.size-md[_ngcontent-%COMP%] {
  width: 32px;
  height: 32px;
  font-size: 11px;
}

.avatar.size-lg[_ngcontent-%COMP%] {
  width: 44px;
  height: 44px;
  font-size: 15px;
}


.avatar.variant-ghost[_ngcontent-%COMP%] {
  background: var(--fold-color-surface-raised);
  color: var(--fold-color-text-secondary);
  border: 1px dashed var(--fold-color-border);
}


.avatar.shape-square[_ngcontent-%COMP%] {
  border-radius: var(--fold-radius-sm);
}

.avatar.has-image[_ngcontent-%COMP%] {
  overflow: hidden;
  background: var(--fold-color-surface-raised);
  border: 1px solid var(--fold-color-border);
}



.avatar.has-image.variant-ghost[_ngcontent-%COMP%] {
  border-style: dashed;
}

.avatar-img[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.avatar.is-muted[_ngcontent-%COMP%] {
  opacity: 0.45;
}




.avatar[data-ring][_ngcontent-%COMP%] {
  outline: 2px solid var(--avatar-ring, transparent);
  outline-offset: 2px;
}

.avatar[data-ring-style=dotted][_ngcontent-%COMP%] {
  outline-style: dotted;
}

.avatar[data-ring=accent][_ngcontent-%COMP%] {
  --avatar-ring: var(--fold-color-primary);
}

.avatar[data-ring=info][_ngcontent-%COMP%] {
  --avatar-ring: var(--fold-color-info);
}

.avatar[data-ring=warning][_ngcontent-%COMP%] {
  --avatar-ring: var(--fold-color-warning);
}

.avatar[data-ring=alert][_ngcontent-%COMP%] {
  --avatar-ring: var(--fold-color-alert);
}

.avatar[data-ring=success][_ngcontent-%COMP%] {
  --avatar-ring: var(--fold-color-success);
}`]})}const J=Object.freeze(Object.defineProperty({__proto__:null,FoldAvatarComponent:l},Symbol.toStringTag,{value:"Module"}));export{l as F,i as a,J as b};
