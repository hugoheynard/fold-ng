import{u as e,a0 as f,A as p,ɵ as g,a1 as c,y as i,a2 as l,z as o,j as d,D as r,W as h,L as m}from"./index-mpzUjcFJ.js";const u=[[["","asideLeft",""]],"*",[["","asideRight",""]]],_=["[asideLeft]","*","[asideRight]"];class s{stackLeftFirst=e(!1,{transform:f});asideLeftLabel=e();asideRightLabel=e();topOffset=e();topOffsetCss=p(()=>{const n=this.topOffset();return n===void 0?null:typeof n=="number"?`${n}px`:n});static ɵfac=function(t){return new(t||s)};static ɵcmp=g({type:s,selectors:[["fold-aside-layout"]],hostVars:4,hostBindings:function(t,a){t&2&&(h("--fold-aside-layout-top",a.topOffsetCss()),m("stack-left-first",a.stackLeftFirst()))},inputs:{stackLeftFirst:[1,"stackLeftFirst"],asideLeftLabel:[1,"asideLeftLabel"],asideRightLabel:[1,"asideRightLabel"],topOffset:[1,"topOffset"]},ngContentSelectors:_,decls:7,vars:4,consts:[[1,"al-grid"],[1,"al-aside","al-aside-left"],[1,"al-center"],[1,"al-aside","al-aside-right"]],template:function(t,a){t&1&&(c(u),i(0,"div",0)(1,"div",1),l(2),o(),i(3,"div",2),l(4,1),o(),i(5,"div",3),l(6,2),o()()),t&2&&(d(),r("role",a.asideLeftLabel()?"complementary":null)("aria-label",a.asideLeftLabel()||null),d(4),r("role",a.asideRightLabel()?"complementary":null)("aria-label",a.asideRightLabel()||null))},styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  display: block;
  

  container-type: inline-size;
}

.al-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: var(--fold-aside-layout-center-width, minmax(0, 1fr));
  gap: var(--fold-aside-layout-gap, 28px);
  max-width: var(--fold-aside-layout-max, 1240px);
  margin-inline: auto;
  padding: var(--fold-aside-layout-pad, 28px 28px 64px);
}






[_nghost-%COMP%]:has([asideright])   .al-grid[_ngcontent-%COMP%] {
  grid-template-columns: var(--fold-aside-layout-center-width, minmax(0, 1fr)) var(--fold-aside-layout-side-width, 300px);
}

[_nghost-%COMP%]:has([asideleft])   .al-grid[_ngcontent-%COMP%] {
  grid-template-columns: var(--fold-aside-layout-rail-width, var(--fold-rail-secondary, 220px)) var(--fold-aside-layout-center-width, minmax(0, 1fr));
}

[_nghost-%COMP%]:has([asideleft]):has([asideright])   .al-grid[_ngcontent-%COMP%] {
  grid-template-columns: var(--fold-aside-layout-rail-width, var(--fold-rail-secondary, 220px)) var(--fold-aside-layout-center-width, minmax(0, 1fr)) var(--fold-aside-layout-side-width, 300px);
}



[_nghost-%COMP%]:not(:has([asideleft]))   .al-aside-left[_ngcontent-%COMP%] {
  display: none;
}

[_nghost-%COMP%]:not(:has([asideright]))   .al-aside-right[_ngcontent-%COMP%] {
  display: none;
}




.al-center[_ngcontent-%COMP%] {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--fold-aside-layout-stack, 18px);
}






.al-aside[_ngcontent-%COMP%] {
  


  --al-rail-top: var(--fold-aside-layout-top, 24px);
  align-self: start;
  position: sticky;
  top: var(--al-rail-top);
  display: flex;
  flex-direction: column;
  gap: var(--fold-aside-layout-rail-gap, 14px);
  min-width: 0;
  max-height: var(--fold-aside-layout-rail-max, calc(100dvh - var(--al-rail-top) - 2rem));
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
}

.al-aside-left[_ngcontent-%COMP%] {
  --al-rail-top: var(
    --fold-aside-layout-left-top,
    var(--fold-aside-layout-top, 24px)
  );
}

.al-aside-right[_ngcontent-%COMP%] {
  --al-rail-top: var(
    --fold-aside-layout-right-top,
    var(--fold-aside-layout-top, 24px)
  );
}


@container (max-width: 1040px) {
  .al-grid[_ngcontent-%COMP%], 
   [_nghost-%COMP%]:has([asideright])   .al-grid[_ngcontent-%COMP%], 
   [_nghost-%COMP%]:has([asideleft])   .al-grid[_ngcontent-%COMP%], 
   [_nghost-%COMP%]:has([asideleft]):has([asideright])   .al-grid[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
  }
  .al-aside[_ngcontent-%COMP%] {
    position: static;
    

    max-height: none;
    overflow: visible;
  }
  .al-center[_ngcontent-%COMP%] {
    order: 1;
  }
  .al-aside-left[_ngcontent-%COMP%] {
    order: 2;
  }
  .al-aside-right[_ngcontent-%COMP%] {
    order: 3;
  }
  
  .stack-left-first[_nghost-%COMP%]   .al-aside-left[_ngcontent-%COMP%] {
    order: 0;
  }
}
@container (max-width: 700px) {
  .al-grid[_ngcontent-%COMP%] {
    padding: var(--fold-aside-layout-pad-sm, 16px 14px 48px);
    
    gap: var(--fold-aside-layout-gap-sm, 16px);
  }
}`]})}export{s as FoldAsideLayoutComponent};
