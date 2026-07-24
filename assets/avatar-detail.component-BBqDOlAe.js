import{s as q,U as b,av as U,b1 as T,t,u as d,B as o,ɵ as z,L as C,M as x,P,b2 as F,Q as S,z as v,x as w,S as O,j as l,aa as E,r as I,e as u,D as k,l as D,g as L,d as M,f as m,m as N,k as A}from"./index-D1ohuAfN.js";function j(r){let a=0;for(let n=0;n<r.length;n+=1)a=r.charCodeAt(n)+((a<<5)-a);return a}const p=["#63b3ed","#68d391","#f6ad55","#fc8181","#b794f4","#76e4f7","#fbb6ce","#f6e05e","#4fd1c5","#a3bffa"],V=["#f687b3","#9ae6b4","#fbd38d","#feb2b2","#d6bcfa","#81e6d9","#e9d8fd","#fefcbf","#bee3f8","#c6f6d5"],K=["#a8d8ea","#b5ead7","#ffdac1","#ffb7b2","#c7b6e8","#b2ebf2","#ffc8dd","#fdf6a8","#a0e7e5","#c5cae9"],_={vivid:p,extended:[...p,...V],pastel:K};function h(r){const a=typeof r=="string"?_[r]:r;return a.length>0?a:_.vivid}const R=new U("fold.palette.default");class s{_current=q(h(b(R,{optional:!0})??"vivid"));current=this._current.asReadonly();use(a){this._current.set(h(a))}colorFor(a){const n=this._current(),e=Math.abs(j(a))%n.length;return n[e]??n[0]??"transparent"}static ɵfac=function(n){return new(n||s)};static ɵprov=T({token:s,factory:s.ɵfac})}function H(r,a){if(r&1&&(P(0,"div",2),F(1,"img",3),S()),r&2){const n=v();w("size-sm",n.size()==="sm")("size-md",n.size()==="md")("size-lg",n.size()==="lg")("shape-square",n.square())("is-muted",n.muted()),O("data-ring",n.ring()==="none"?null:n.ring())("data-ring-style",n.ringStyle())("title",n.name()),l(),E("src",n.imageUrl(),I)("alt",n.name())}}function B(r,a){if(r&1&&(P(0,"div",4),u(1),S()),r&2){const n=v();k("background",n.variant()==="solid"?n.color():"")("color",n.variant()==="solid"?n.onColor():""),w("size-sm",n.size()==="sm")("size-md",n.size()==="md")("size-lg",n.size()==="lg")("variant-ghost",n.variant()==="ghost")("shape-square",n.square())("is-muted",n.muted()),O("data-ring",n.ring()==="none"?null:n.ring())("data-ring-style",n.ringStyle())("title",n.name()),l(),D(" ",n.initials()," ")}}const y="#1a202c",G="#ffffff";function Q(r){const a=r.trim().replace(/^#/,""),n=a.length===3?a.split("").map(i=>i+i).join(""):a;if(!/^[0-9a-fA-F]{6}$/.test(n))return y;const e=i=>{const f=parseInt(n.slice(i,i+2),16)/255;return f<=.03928?f/12.92:((f+.055)/1.055)**2.4};return .2126*e(0)+.7152*e(2)+.0722*e(4)>.4?y:G}class c{palette=b(s);name=t.required();size=t("md");colorSeed=t(void 0);variant=t("solid");square=t(!1,{transform:d});imageUrl=t(void 0);muted=t(!1,{transform:d});ring=t("none");ringStyle=t("solid");onColor=o(()=>Q(this.color()));initials=o(()=>{const a=this.name().trim();if(!a)return"?";const[n="",e=""]=a.split(/\s+/);return e?(n.charAt(0)+e.charAt(0)).toUpperCase():a.substring(0,2).toUpperCase()});color=o(()=>this.palette.colorFor(this.colorSeed()??this.name()));static ɵfac=function(n){return new(n||c)};static ɵcmp=z({type:c,selectors:[["fold-avatar"]],inputs:{name:[1,"name"],size:[1,"size"],colorSeed:[1,"colorSeed"],variant:[1,"variant"],square:[1,"square"],imageUrl:[1,"imageUrl"],muted:[1,"muted"],ring:[1,"ring"],ringStyle:[1,"ringStyle"]},decls:2,vars:1,consts:[[1,"avatar","has-image",3,"size-sm","size-md","size-lg","shape-square","is-muted"],[1,"avatar",3,"size-sm","size-md","size-lg","variant-ghost","shape-square","is-muted","background","color"],[1,"avatar","has-image"],[1,"avatar-img",3,"src","alt"],[1,"avatar"]],template:function(n,e){n&1&&C(0,H,2,15,"div",0)(1,B,2,20,"div",1),n&2&&x(e.imageUrl()?0:1)},styles:[`@charset "UTF-8";
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
}`]})}function X(r,a){if(r&1&&(M(0,"span",3),u(1),m()),r&2){const n=v();l(),A(n.secondary())}}class g{primary=t.required();secondary=t("");avatarName=t("");size=t("md");variant=t("solid");square=t(!1,{transform:d});imageUrl=t(void 0);muted=t(!1,{transform:d});ring=t("none");ringStyle=t("solid");resolvedAvatarName=o(()=>this.avatarName().trim()||this.primary());hasSecondary=o(()=>this.secondary().trim().length>0);static ɵfac=function(n){return new(n||g)};static ɵcmp=z({type:g,selectors:[["fold-avatar-detail"]],inputs:{primary:[1,"primary"],secondary:[1,"secondary"],avatarName:[1,"avatarName"],size:[1,"size"],variant:[1,"variant"],square:[1,"square"],imageUrl:[1,"imageUrl"],muted:[1,"muted"],ring:[1,"ring"],ringStyle:[1,"ringStyle"]},decls:5,vars:10,consts:[[3,"name","size","variant","square","imageUrl","muted","ring","ringStyle"],[1,"lines"],[1,"primary"],[1,"secondary"]],template:function(n,e){n&1&&(L(0,"fold-avatar",0),M(1,"span",1)(2,"span",2),u(3),m(),C(4,X,2,1,"span",3),m()),n&2&&(N("name",e.resolvedAvatarName())("size",e.size())("variant",e.variant())("square",e.square())("imageUrl",e.imageUrl())("muted",e.muted())("ring",e.ring())("ringStyle",e.ringStyle()),l(3),A(e.primary()),l(),x(e.hasSecondary()?4:-1))},dependencies:[c],styles:[`[_nghost-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.lines[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}

.primary[_ngcontent-%COMP%] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  color: var(--fold-color-text);
}

.secondary[_ngcontent-%COMP%] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-faded);
}`]})}export{g as F,c as a,s as b};
