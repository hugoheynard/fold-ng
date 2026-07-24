import{s as U,U as b,at as A,a$ as T,t as e,u as d,B as o,ɵ as z,L as C,M as x,P,b0 as F,Q as w,z as v,x as S,S as O,j as l,a8 as E,r as I,e as u,D as k,l as D,g as L,d as M,f as m,m as N,k as q}from"./index-2SvTd3I-.js";function j(t){let a=0;for(let n=0;n<t.length;n+=1)a=t.charCodeAt(n)+((a<<5)-a);return a}const p=["#63b3ed","#68d391","#f6ad55","#fc8181","#b794f4","#76e4f7","#fbb6ce","#f6e05e","#4fd1c5","#a3bffa"],V=["#f687b3","#9ae6b4","#fbd38d","#feb2b2","#d6bcfa","#81e6d9","#e9d8fd","#fefcbf","#bee3f8","#c6f6d5"],K=["#a8d8ea","#b5ead7","#ffdac1","#ffb7b2","#c7b6e8","#b2ebf2","#ffc8dd","#fdf6a8","#a0e7e5","#c5cae9"],_={vivid:p,extended:[...p,...V],pastel:K};function h(t){const a=typeof t=="string"?_[t]:t;return a.length>0?a:_.vivid}const R=new A("fold.palette.default");class s{_current=U(h(b(R,{optional:!0})??"vivid"));current=this._current.asReadonly();use(a){this._current.set(h(a))}colorFor(a){const n=this._current();return n[Math.abs(j(a))%n.length]}static ɵfac=function(n){return new(n||s)};static ɵprov=T({token:s,factory:s.ɵfac})}function H(t,a){if(t&1&&(P(0,"div",2),F(1,"img",3),w()),t&2){const n=v();S("size-sm",n.size()==="sm")("size-md",n.size()==="md")("size-lg",n.size()==="lg")("shape-square",n.square())("is-muted",n.muted()),O("data-ring",n.ring()==="none"?null:n.ring())("data-ring-style",n.ringStyle())("title",n.name()),l(),E("src",n.imageUrl(),I)("alt",n.name())}}function $(t,a){if(t&1&&(P(0,"div",4),u(1),w()),t&2){const n=v();k("background",n.variant()==="solid"?n.color():"")("color",n.variant()==="solid"?n.onColor():""),S("size-sm",n.size()==="sm")("size-md",n.size()==="md")("size-lg",n.size()==="lg")("variant-ghost",n.variant()==="ghost")("shape-square",n.square())("is-muted",n.muted()),O("data-ring",n.ring()==="none"?null:n.ring())("data-ring-style",n.ringStyle())("title",n.name()),l(),D(" ",n.initials()," ")}}const y="#1a202c",B="#ffffff";function G(t){const a=t.trim().replace(/^#/,""),n=a.length===3?a.split("").map(i=>i+i).join(""):a;if(!/^[0-9a-fA-F]{6}$/.test(n))return y;const r=i=>{const f=parseInt(n.slice(i,i+2),16)/255;return f<=.03928?f/12.92:((f+.055)/1.055)**2.4};return .2126*r(0)+.7152*r(2)+.0722*r(4)>.4?y:B}class c{palette=b(s);name=e.required();size=e("md");colorSeed=e(void 0);variant=e("solid");square=e(!1,{transform:d});imageUrl=e(void 0);muted=e(!1,{transform:d});ring=e("none");ringStyle=e("solid");onColor=o(()=>G(this.color()));initials=o(()=>{const a=this.name().trim();if(!a)return"?";const n=a.split(/\s+/);return n.length>=2?(n[0][0]+n[1][0]).toUpperCase():a.substring(0,2).toUpperCase()});color=o(()=>this.palette.colorFor(this.colorSeed()??this.name()));static ɵfac=function(n){return new(n||c)};static ɵcmp=z({type:c,selectors:[["fold-avatar"]],inputs:{name:[1,"name"],size:[1,"size"],colorSeed:[1,"colorSeed"],variant:[1,"variant"],square:[1,"square"],imageUrl:[1,"imageUrl"],muted:[1,"muted"],ring:[1,"ring"],ringStyle:[1,"ringStyle"]},decls:2,vars:1,consts:[[1,"avatar","has-image",3,"size-sm","size-md","size-lg","shape-square","is-muted"],[1,"avatar",3,"size-sm","size-md","size-lg","variant-ghost","shape-square","is-muted","background","color"],[1,"avatar","has-image"],[1,"avatar-img",3,"src","alt"],[1,"avatar"]],template:function(n,r){n&1&&C(0,H,2,15,"div",0)(1,$,2,20,"div",1),n&2&&x(r.imageUrl()?0:1)},styles:[`@charset "UTF-8";
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
}`]})}function Q(t,a){if(t&1&&(M(0,"span",3),u(1),m()),t&2){const n=v();l(),q(n.secondary())}}class g{primary=e.required();secondary=e("");avatarName=e("");size=e("md");variant=e("solid");square=e(!1,{transform:d});imageUrl=e(void 0);muted=e(!1,{transform:d});ring=e("none");ringStyle=e("solid");resolvedAvatarName=o(()=>this.avatarName().trim()||this.primary());hasSecondary=o(()=>this.secondary().trim().length>0);static ɵfac=function(n){return new(n||g)};static ɵcmp=z({type:g,selectors:[["fold-avatar-detail"]],inputs:{primary:[1,"primary"],secondary:[1,"secondary"],avatarName:[1,"avatarName"],size:[1,"size"],variant:[1,"variant"],square:[1,"square"],imageUrl:[1,"imageUrl"],muted:[1,"muted"],ring:[1,"ring"],ringStyle:[1,"ringStyle"]},decls:5,vars:10,consts:[[3,"name","size","variant","square","imageUrl","muted","ring","ringStyle"],[1,"lines"],[1,"primary"],[1,"secondary"]],template:function(n,r){n&1&&(L(0,"fold-avatar",0),M(1,"span",1)(2,"span",2),u(3),m(),C(4,Q,2,1,"span",3),m()),n&2&&(N("name",r.resolvedAvatarName())("size",r.size())("variant",r.variant())("square",r.square())("imageUrl",r.imageUrl())("muted",r.muted())("ring",r.ring())("ringStyle",r.ringStyle()),l(3),q(r.primary()),l(),x(r.hasSecondary()?4:-1))},dependencies:[c],styles:[`[_nghost-%COMP%] {
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
