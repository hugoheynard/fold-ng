import{s as C,V as v,ax as P,b3 as y,t as r,u as d,B as c,ɵ as O,L as M,M as A,P as _,b4 as S,Q as p,z as h,x as b,S as x,j as z,_ as T,r as F,e as q,D as w,l as E}from"./index-Cs4RAhvM.js";function I(t){let a=0;for(let n=0;n<t.length;n+=1)a=t.charCodeAt(n)+((a<<5)-a);return a}const f=["#63b3ed","#68d391","#f6ad55","#fc8181","#b794f4","#76e4f7","#fbb6ce","#f6e05e","#4fd1c5","#a3bffa"],U=["#f687b3","#9ae6b4","#fbd38d","#feb2b2","#d6bcfa","#81e6d9","#e9d8fd","#fefcbf","#bee3f8","#c6f6d5"],k=["#a8d8ea","#b5ead7","#ffdac1","#ffb7b2","#c7b6e8","#b2ebf2","#ffc8dd","#fdf6a8","#a0e7e5","#c5cae9"],g={vivid:f,extended:[...f,...U],pastel:k};function u(t){const a=typeof t=="string"?g[t]:t;return a.length>0?a:g.vivid}const L=new P("fold.palette.default");class i{_current=C(u(v(L,{optional:!0})??"vivid"));current=this._current.asReadonly();use(a){this._current.set(u(a))}colorFor(a){const n=this._current(),e=Math.abs(I(a))%n.length;return n[e]??n[0]??"transparent"}static ɵfac=function(n){return new(n||i)};static ɵprov=y({token:i,factory:i.ɵfac})}function D(t,a){if(t&1&&(_(0,"div",2),S(1,"img",3),p()),t&2){const n=h();b("size-sm",n.size()==="sm")("size-md",n.size()==="md")("size-lg",n.size()==="lg")("shape-square",n.square())("is-muted",n.muted()),x("data-ring",n.ring()==="none"?null:n.ring())("data-ring-style",n.ringStyle())("title",n.name()),z(),T("src",n.imageUrl(),F)("alt",n.name())}}function j(t,a){if(t&1&&(_(0,"div",4),q(1),p()),t&2){const n=h();w("background",n.variant()==="solid"?n.color():"")("color",n.variant()==="solid"?n.onColor():""),b("size-sm",n.size()==="sm")("size-md",n.size()==="md")("size-lg",n.size()==="lg")("variant-ghost",n.variant()==="ghost")("shape-square",n.square())("is-muted",n.muted()),x("data-ring",n.ring()==="none"?null:n.ring())("data-ring-style",n.ringStyle())("title",n.name()),z(),E(" ",n.initials()," ")}}const m="#1a202c",V="#ffffff";function K(t){const a=t.trim().replace(/^#/,""),n=a.length===3?a.split("").map(o=>o+o).join(""):a;if(!/^[0-9a-fA-F]{6}$/.test(n))return m;const e=o=>{const s=parseInt(n.slice(o,o+2),16)/255;return s<=.03928?s/12.92:((s+.055)/1.055)**2.4};return .2126*e(0)+.7152*e(2)+.0722*e(4)>.4?m:V}class l{palette=v(i);name=r.required();size=r("md");colorSeed=r(void 0);variant=r("solid");square=r(!1,{transform:d});imageUrl=r(void 0);muted=r(!1,{transform:d});ring=r("none");ringStyle=r("solid");onColor=c(()=>K(this.color()));initials=c(()=>{const a=this.name().trim();if(!a)return"?";const[n="",e=""]=a.split(/\s+/);return e?(n.charAt(0)+e.charAt(0)).toUpperCase():a.substring(0,2).toUpperCase()});color=c(()=>this.palette.colorFor(this.colorSeed()??this.name()));static ɵfac=function(n){return new(n||l)};static ɵcmp=O({type:l,selectors:[["fold-avatar"]],inputs:{name:[1,"name"],size:[1,"size"],colorSeed:[1,"colorSeed"],variant:[1,"variant"],square:[1,"square"],imageUrl:[1,"imageUrl"],muted:[1,"muted"],ring:[1,"ring"],ringStyle:[1,"ringStyle"]},decls:2,vars:1,consts:[[1,"avatar","has-image",3,"size-sm","size-md","size-lg","shape-square","is-muted"],[1,"avatar",3,"size-sm","size-md","size-lg","variant-ghost","shape-square","is-muted","background","color"],[1,"avatar","has-image"],[1,"avatar-img",3,"src","alt"],[1,"avatar"]],template:function(n,e){n&1&&M(0,D,2,15,"div",0)(1,j,2,20,"div",1),n&2&&A(e.imageUrl()?0:1)},styles:[`@charset "UTF-8";
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
}`]})}export{l as F,i as a};
