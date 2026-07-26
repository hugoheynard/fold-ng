import{w as i,as as p,J as c,x as l,ɵ as g,i as f,bg as u,H as v,o as h,j as o,I as C,C as x,d,g as z,f as m,q as _,z as P,m as O,e as M,O as b,l as y}from"./index-Dbcb4g4H.js";import{F as q}from"./avatar.component-JLPOjmVK.js";function w(a,e){if(a&1&&(d(0,"span",2),z(1,"fold-avatar",3),m()),a&2){const n=e.$implicit,t=e.$index,s=_();P("z-index",s.z(t)),o(),O("name",n.name)("imageUrl",n.imageUrl)("colorSeed",n.colorSeed)("size",s.size())("square",s.square())("variant",n.variant??"solid")("muted",n.muted??!1)("ring",n.ring??"none")("ringStyle",n.ringStyle??"solid")}}function F(a,e){if(a&1&&(d(0,"span",1),M(1),m()),a&2){const n=_();b("title",n.overflow()+" more"),o(),y("+",n.overflow())}}class r{avatars=i.required();limit=i(0,{transform:p});top=i("first");size=i("md");square=i(!1,{transform:c});visible=l(()=>{const e=this.limit(),n=this.avatars();return e>0&&n.length>e?n.slice(0,e):n});overflow=l(()=>this.avatars().length-this.visible().length);z(e){const n=this.visible().length;return this.top()==="first"?n-e:e+1}static ɵfac=function(n){return new(n||r)};static ɵcmp=g({type:r,selectors:[["fold-avatar-list"]],hostVars:8,hostBindings:function(n,t){n&2&&x("size-sm",t.size()==="sm")("size-md",t.size()==="md")("size-lg",t.size()==="lg")("is-square",t.square())},inputs:{avatars:[1,"avatars"],limit:[1,"limit"],top:[1,"top"],size:[1,"size"],square:[1,"square"]},decls:3,vars:1,consts:[[1,"al-item",3,"z-index"],[1,"al-more"],[1,"al-item"],[3,"name","imageUrl","colorSeed","size","square","variant","muted","ring","ringStyle"]],template:function(n,t){n&1&&(f(0,w,2,11,"span",0,u),v(2,F,2,2,"span",1)),n&2&&(h(t.visible()),o(2),C(t.overflow()>0?2:-1))},dependencies:[q],styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  display: inline-flex;
  align-items: center;
  

  --fold-avatar-list-ring: var(--fold-color-surface-card);
}

.al-item[_ngcontent-%COMP%] {
  position: relative;
  display: inline-flex;
  border-radius: var(--fold-radius-round);
  


  background: var(--fold-avatar-list-ring);
  box-shadow: 0 0 0 2px var(--fold-avatar-list-ring);
}

.is-square[_nghost-%COMP%]   .al-item[_ngcontent-%COMP%] {
  border-radius: var(--fold-radius-sm);
}


.al-item[_ngcontent-%COMP%]    + .al-item[_ngcontent-%COMP%] {
  margin-left: var(--al-overlap);
}

.size-sm[_nghost-%COMP%] {
  --al-overlap: -5px;
}

.size-md[_nghost-%COMP%] {
  --al-overlap: -8px;
}

.size-lg[_nghost-%COMP%] {
  --al-overlap: -11px;
}



.al-more[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-left: 6px;
  border-radius: var(--fold-radius-round);
  background: var(--fold-color-primary-surface);
  color: var(--fold-color-primary-text);
  font-weight: 700;
  letter-spacing: 0.02em;
  user-select: none;
}

.is-square[_nghost-%COMP%]   .al-more[_ngcontent-%COMP%] {
  border-radius: var(--fold-radius-sm);
}

.size-sm[_nghost-%COMP%]   .al-more[_ngcontent-%COMP%] {
  width: 20px;
  height: 20px;
  font-size: 8px;
}

.size-md[_nghost-%COMP%]   .al-more[_ngcontent-%COMP%] {
  width: 32px;
  height: 32px;
  font-size: 11px;
}

.size-lg[_nghost-%COMP%]   .al-more[_ngcontent-%COMP%] {
  width: 44px;
  height: 44px;
  font-size: 14px;
}`]})}export{r as FoldAvatarListComponent};
