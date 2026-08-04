import{u as a,a0 as l,A as m,ɵ as f,g as v,d,e as p,f as t,w as _,m as y,j as r,k as c,x as g,q as u}from"./index-F5cuq_px.js";import{F as h}from"./avatar.component-BoFZYRcF.js";function w(o,s){if(o&1&&(d(0,"span",3),p(1),t()),o&2){const n=u();r(),c(n.secondary())}}class i{primary=a.required();secondary=a("");avatarName=a("");size=a("md");variant=a("solid");square=a(!1,{transform:l});imageUrl=a(void 0);muted=a(!1,{transform:l});ring=a("none");ringStyle=a("solid");resolvedAvatarName=m(()=>this.avatarName().trim()||this.primary());hasSecondary=m(()=>this.secondary().trim().length>0);static ɵfac=function(n){return new(n||i)};static ɵcmp=f({type:i,selectors:[["fold-avatar-detail"]],inputs:{primary:[1,"primary"],secondary:[1,"secondary"],avatarName:[1,"avatarName"],size:[1,"size"],variant:[1,"variant"],square:[1,"square"],imageUrl:[1,"imageUrl"],muted:[1,"muted"],ring:[1,"ring"],ringStyle:[1,"ringStyle"]},decls:5,vars:10,consts:[[3,"name","size","variant","square","imageUrl","muted","ring","ringStyle"],[1,"lines"],[1,"primary"],[1,"secondary"]],template:function(n,e){n&1&&(v(0,"fold-avatar",0),d(1,"span",1)(2,"span",2),p(3),t(),_(4,w,2,1,"span",3),t()),n&2&&(y("name",e.resolvedAvatarName())("size",e.size())("variant",e.variant())("square",e.square())("imageUrl",e.imageUrl())("muted",e.muted())("ring",e.ring())("ringStyle",e.ringStyle()),r(3),c(e.primary()),r(),g(e.hasSecondary()?4:-1))},dependencies:[h],styles:[`[_nghost-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--fold-space-sm);
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
}`]})}export{i as FoldAvatarDetailComponent};
