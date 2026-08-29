import{u as e,a0 as r,A as f,ɵ as c,a1 as p,y as d,a2 as o,z as i,j as g,D as l,W as h,L as _}from"./index-CLSi-FzM.js";const C=[[["","asideLeft",""]],"*",[["","asideRight",""]]],O=["[asideLeft]","*","[asideRight]"];class s{stackLeftFirst=e(!1,{transform:r});band=e("none");bleed=e(!1,{transform:r});asideLeftLabel=e();asideRightLabel=e();topOffset=e();topOffsetCss=f(()=>{const a=this.topOffset();return a===void 0?null:typeof a=="number"?`${a}px`:a});static ɵfac=function(t){return new(t||s)};static ɵcmp=c({type:s,selectors:[["fold-aside-layout"]],hostVars:7,hostBindings:function(t,n){t&2&&(l("data-band",n.band()==="none"?null:n.band()),h("--fold-aside-layout-top",n.topOffsetCss()),_("stack-left-first",n.stackLeftFirst())("is-bleed",n.bleed()))},inputs:{stackLeftFirst:[1,"stackLeftFirst"],band:[1,"band"],bleed:[1,"bleed"],asideLeftLabel:[1,"asideLeftLabel"],asideRightLabel:[1,"asideRightLabel"],topOffset:[1,"topOffset"]},ngContentSelectors:O,decls:7,vars:4,consts:[[1,"al-grid"],[1,"al-aside","al-aside-left"],[1,"al-center"],[1,"al-aside","al-aside-right"]],template:function(t,n){t&1&&(p(C),d(0,"div",0)(1,"div",1),o(2),i(),d(3,"div",2),o(4,1),i(),d(5,"div",3),o(6,2),i()()),t&2&&(g(),l("role",n.asideLeftLabel()?"complementary":null)("aria-label",n.asideLeftLabel()||null),g(4),l("role",n.asideRightLabel()?"complementary":null)("aria-label",n.asideRightLabel()||null))},styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  display: block;
  

  container-type: inline-size;
}






.is-bleed[_nghost-%COMP%] {
  margin-inline: calc(-1 * var(--fold-page-gutter-effective, var(--fold-page-gutter, 32px)));
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










[data-band][_nghost-%COMP%]   .al-grid[_ngcontent-%COMP%] {
  column-gap: 0;
}

[data-band=left][_nghost-%COMP%]   .al-aside-left[_ngcontent-%COMP%], 
[data-band=right][_nghost-%COMP%]   .al-aside-right[_ngcontent-%COMP%], 
[data-band=both][_nghost-%COMP%]   .al-aside[_ngcontent-%COMP%] {
  background: var(--fold-color-surface-band);
  padding: var(--fold-aside-layout-band-pad, var(--fold-space-xl));
}

[data-band=left][_nghost-%COMP%]   .al-aside-left[_ngcontent-%COMP%], 
[data-band=both][_nghost-%COMP%]   .al-aside-left[_ngcontent-%COMP%] {
  border-inline-end: 1px solid var(--fold-color-border-subtle);
}

[data-band=right][_nghost-%COMP%]   .al-aside-right[_ngcontent-%COMP%], 
[data-band=both][_nghost-%COMP%]   .al-aside-right[_ngcontent-%COMP%] {
  border-inline-start: 1px solid var(--fold-color-border-subtle);
}


[data-band=left][_nghost-%COMP%]   .al-center[_ngcontent-%COMP%], 
[data-band=both][_nghost-%COMP%]   .al-center[_ngcontent-%COMP%] {
  padding-inline-start: var(--fold-aside-layout-gap, 28px);
}

[data-band=right][_nghost-%COMP%]   .al-center[_ngcontent-%COMP%], 
[data-band=both][_nghost-%COMP%]   .al-center[_ngcontent-%COMP%] {
  padding-inline-end: var(--fold-aside-layout-gap, 28px);
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
  



  [data-band][_nghost-%COMP%]   .al-aside[_ngcontent-%COMP%], 
   [data-band][_nghost-%COMP%]   .al-center[_ngcontent-%COMP%] {
    border-inline: 0;
    padding-inline: 0;
  }
  [data-band=left][_nghost-%COMP%]   .al-aside-left[_ngcontent-%COMP%], 
   [data-band=right][_nghost-%COMP%]   .al-aside-right[_ngcontent-%COMP%], 
   [data-band=both][_nghost-%COMP%]   .al-aside[_ngcontent-%COMP%] {
    padding: var(--fold-aside-layout-band-pad, var(--fold-space-xl));
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
