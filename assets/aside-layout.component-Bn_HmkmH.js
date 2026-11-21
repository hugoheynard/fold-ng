import{u as e,a0 as l,A as c,ɵ as h,a1 as _,y as i,a2 as s,z as d,j as g,D as o,W as f,L as C}from"./index-uRGstAIx.js";const O=[[["","asideLeft",""]],"*",[["","asideRight",""]],[["","asideEnd",""]]],p=["[asideLeft]","*","[asideRight]","[asideEnd]"];class r{stackLeftFirst=e(!1,{transform:l});keepSideRail=e(!1,{transform:l});band=e("none");bleed=e(!1,{transform:l});asideLeftLabel=e();asideRightLabel=e();topOffset=e();topOffsetCss=c(()=>{const a=this.topOffset();return a===void 0?null:typeof a=="number"?`${a}px`:a});static ɵfac=function(t){return new(t||r)};static ɵcmp=h({type:r,selectors:[["fold-aside-layout"]],hostVars:9,hostBindings:function(t,n){t&2&&(o("data-band",n.band()==="none"?null:n.band()),f("--fold-aside-layout-top",n.topOffsetCss()),C("stack-left-first",n.stackLeftFirst())("keep-side-rail",n.keepSideRail())("is-bleed",n.bleed()))},inputs:{stackLeftFirst:[1,"stackLeftFirst"],keepSideRail:[1,"keepSideRail"],band:[1,"band"],bleed:[1,"bleed"],asideLeftLabel:[1,"asideLeftLabel"],asideRightLabel:[1,"asideRightLabel"],topOffset:[1,"topOffset"]},ngContentSelectors:p,decls:9,vars:4,consts:[[1,"al-grid"],[1,"al-aside","al-aside-left"],[1,"al-center"],[1,"al-aside","al-aside-right"],[1,"al-end"]],template:function(t,n){t&1&&(_(O),i(0,"div",0)(1,"div",1),s(2),d(),i(3,"div",2),s(4,1),d(),i(5,"div",3),s(6,2),d(),i(7,"div",4),s(8,3),d()()),t&2&&(g(),o("role",n.asideLeftLabel()?"complementary":null)("aria-label",n.asideLeftLabel()||null),g(4),o("role",n.asideRightLabel()?"complementary":null)("aria-label",n.asideRightLabel()||null))},styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  display: block;
  

  container-type: inline-size;
}






.is-bleed[_nghost-%COMP%] {
  margin-inline: calc(-1 * var(--fold-page-gutter-effective, var(--fold-page-gutter, 32px)));
}

.al-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: var(--al-cols);
  grid-template-areas: var(--al-areas);
  grid-template-rows: var(--al-rows, auto);
  gap: var(--fold-aside-layout-gap, 28px);
  max-width: var(--fold-aside-layout-max, 1240px);
  margin-inline: auto;
  padding: var(--fold-aside-layout-pad, 28px 28px 64px);
  
  --al-center: var(--fold-aside-layout-center-width, minmax(0, 1fr));
  --al-side: var(--fold-aside-layout-side-width, 300px);
  --al-rail: var(
    --fold-aside-layout-rail-width,
    var(--fold-rail-secondary, 220px)
  );
  --al-cols: var(--al-center);
  --al-areas: "center";
}



.al-center[_ngcontent-%COMP%] {
  grid-area: center;
}

.al-aside-left[_ngcontent-%COMP%] {
  grid-area: rail;
}

.al-aside-right[_ngcontent-%COMP%] {
  grid-area: side;
}

.al-end[_ngcontent-%COMP%] {
  grid-area: end;
}






[_nghost-%COMP%]:has([asideright])   .al-grid[_ngcontent-%COMP%] {
  --al-cols: var(--al-center) var(--al-side);
  --al-areas: "center side";
}

[_nghost-%COMP%]:has([asideleft])   .al-grid[_ngcontent-%COMP%] {
  --al-cols: var(--al-rail) var(--al-center);
  --al-areas: "rail center";
}

[_nghost-%COMP%]:has([asideleft]):has([asideright])   .al-grid[_ngcontent-%COMP%] {
  --al-cols: var(--al-rail) var(--al-center) var(--al-side);
  --al-areas: "rail center side";
}





[_nghost-%COMP%]:has([asideend])   .al-grid[_ngcontent-%COMP%] {
  --al-areas: "center" "end";
}

[_nghost-%COMP%]:has([asideend]):has([asideright])   .al-grid[_ngcontent-%COMP%] {
  --al-areas: "center side" "end side";
  --al-rows: auto 1fr;
}

[_nghost-%COMP%]:has([asideend]):has([asideleft])   .al-grid[_ngcontent-%COMP%] {
  --al-areas: "rail center" "rail end";
  --al-rows: auto 1fr;
}

[_nghost-%COMP%]:has([asideend]):has([asideleft]):has([asideright])   .al-grid[_ngcontent-%COMP%] {
  --al-areas: "rail center side" "rail end side";
  --al-rows: auto 1fr;
}

[_nghost-%COMP%]:not(:has([asideend]))   .al-end[_ngcontent-%COMP%] {
  display: none;
}

.al-end[_ngcontent-%COMP%] {
  align-self: start;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--fold-aside-layout-stack, 18px);
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
  



  [_nghost-%COMP%]   .al-grid[_ngcontent-%COMP%], 
   [_nghost-%COMP%]:has([asideright])   .al-grid[_ngcontent-%COMP%], 
   [_nghost-%COMP%]:has([asideleft])   .al-grid[_ngcontent-%COMP%], 
   [_nghost-%COMP%]:has([asideleft]):has([asideright])   .al-grid[_ngcontent-%COMP%], 
   [_nghost-%COMP%]:has([asideend])   .al-grid[_ngcontent-%COMP%], 
   [_nghost-%COMP%]:has([asideend]):has([asideright])   .al-grid[_ngcontent-%COMP%], 
   [_nghost-%COMP%]:has([asideend]):has([asideleft])   .al-grid[_ngcontent-%COMP%], 
   [_nghost-%COMP%]:has([asideend]):has([asideleft]):has([asideright])   .al-grid[_ngcontent-%COMP%] {
    --al-cols: minmax(0, 1fr);
    --al-areas: none;
    --al-rows: auto;
  }
  .al-center[_ngcontent-%COMP%], 
   .al-aside[_ngcontent-%COMP%], 
   .al-end[_ngcontent-%COMP%] {
    grid-area: auto;
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
  .al-end[_ngcontent-%COMP%] {
    order: 4;
  }
  
  .stack-left-first[_nghost-%COMP%]   .al-aside-left[_ngcontent-%COMP%] {
    order: 0;
  }
}




@container (min-width: 701px) and (max-width: 1040px) {
  .keep-side-rail[_nghost-%COMP%]:has([asideright])   .al-grid[_ngcontent-%COMP%], 
   .keep-side-rail[_nghost-%COMP%]:has([asideleft])   .al-grid[_ngcontent-%COMP%] {
    --al-cols: var(--al-center) var(--al-side);
  }
  .keep-side-rail[_nghost-%COMP%]:has([asideright])   .al-grid[_ngcontent-%COMP%] {
    --al-areas: "center side";
  }
  .keep-side-rail[_nghost-%COMP%]:has([asideleft])   .al-grid[_ngcontent-%COMP%] {
    --al-areas: "center rail";
  }
  .keep-side-rail[_nghost-%COMP%]:has([asideleft]):has([asideright])   .al-grid[_ngcontent-%COMP%] {
    --al-areas: "center side" "center rail";
    --al-rows: auto 1fr;
  }
  .keep-side-rail[_nghost-%COMP%]:has([asideend]):has([asideright])   .al-grid[_ngcontent-%COMP%] {
    --al-areas: "center side" "end side";
    --al-rows: auto 1fr;
  }
  .keep-side-rail[_nghost-%COMP%]:has([asideend]):has([asideleft])   .al-grid[_ngcontent-%COMP%] {
    --al-areas: "center rail" "end rail";
    --al-rows: auto 1fr;
  }
  


  .keep-side-rail[_nghost-%COMP%]:has([asideend]):has([asideleft]):has([asideright])   .al-grid[_ngcontent-%COMP%] {
    --al-areas: "center side" "end rail";
    --al-rows: auto 1fr;
  }
  .keep-side-rail[_nghost-%COMP%]:has([asideleft])   .al-center[_ngcontent-%COMP%], 
   .keep-side-rail[_nghost-%COMP%]:has([asideright])   .al-center[_ngcontent-%COMP%] {
    grid-area: center;
  }
  .keep-side-rail[_nghost-%COMP%]   .al-aside-left[_ngcontent-%COMP%] {
    grid-area: rail;
  }
  .keep-side-rail[_nghost-%COMP%]   .al-aside-right[_ngcontent-%COMP%] {
    grid-area: side;
  }
  .keep-side-rail[_nghost-%COMP%]   .al-end[_ngcontent-%COMP%] {
    grid-area: end;
  }
  


  .keep-side-rail[_nghost-%COMP%]   .al-aside-right[_ngcontent-%COMP%] {
    position: sticky;
    max-height: var(--fold-aside-layout-rail-max, calc(100dvh - var(--al-rail-top) - 2rem));
    overflow-y: auto;
  }
}
@container (max-width: 700px) {
  .al-grid[_ngcontent-%COMP%] {
    padding: var(--fold-aside-layout-pad-sm, 16px 14px 48px);
    
    gap: var(--fold-aside-layout-gap-sm, 16px);
  }
}`]})}export{r as FoldAsideLayoutComponent};
