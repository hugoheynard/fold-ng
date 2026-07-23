import { Component } from "@angular/core";
import { KindBadgeComponent } from "../../kind-badge.component";
import {
  FoldBadgeComponent,
  FoldButtonComponent,
  FoldHeroSectionComponent,
  FoldIconComponent,
  FoldPageLayoutComponent,
} from "../../../src/index";

/** `/hero-section` — the `fold-hero-section` gallery page (full-bleed page splash). */
@Component({
  selector: "gal-hero-section-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldHeroSectionComponent,
    FoldBadgeComponent,
    FoldButtonComponent,
    FoldIconComponent,
  ],
  template: `<fold-page-layout title="hero-section">
    <gal-kind-badge titleBadge kind="component" />

    <!-- The canonical splash — a washed, centred band with a backdrop watermark. -->
    <fold-hero-section>
      <span heroBackdrop class="ghs-watermark">1.0</span>
      <div class="ghs-mark">
        <fold-icon name="fold" [size]="48" title="Fold" />
      </div>
      <fold-badge content="component · layout" variant="accent" radius="pill" />
      <h1 class="ghs-title">Hero section</h1>
      <p class="ghs-lede">
        A full-bleed intro band — it breaks the page gutter, carries the page
        <strong>title</strong>, and closes with a hairline.
      </p>
      <div class="ghs-cta">
        <fold-button variant="primary" size="lg">Primary action</fold-button>
        <fold-button variant="ghost" size="lg">Secondary</fold-button>
      </div>
    </fold-hero-section>

    <div class="gal-cell">
      <span class="gal-tag">align="start"</span>
      <fold-hero-section align="start">
        <h1 class="ghs-title">Left-aligned</h1>
        <p class="ghs-lede">
          The column packs to the start instead of centring.
        </p>
      </fold-hero-section>
    </div>

    <div class="gal-cell">
      <span class="gal-tag">[wash]="false" — plain surface band</span>
      <fold-hero-section [wash]="false">
        <h1 class="ghs-title">No wash</h1>
        <p class="ghs-lede">
          The brand tint is off; just the surface + hairline.
        </p>
      </fold-hero-section>
    </div>
  </fold-page-layout>`,
  styles: `
    .ghs-mark {
      display: grid;
      place-items: center;
      width: 84px;
      height: 84px;
      border-radius: var(--fold-radius-lg);
      background: var(--fold-color-primary-surface);
      border: 1px solid var(--fold-color-primary-border);
      color: var(--fold-color-primary-text);
    }
    .ghs-title {
      margin: 0;
      font-size: clamp(40px, 7vw, 64px);
      font-weight: 800;
      letter-spacing: -0.04em;
      line-height: 1;
      color: var(--fold-color-text);
    }
    .ghs-lede {
      margin: 0;
      max-width: 52ch;
      font-size: var(--fold-text-lg);
      line-height: 1.6;
      color: var(--fold-color-text-secondary);
    }
    .ghs-lede strong {
      font-weight: 700;
      color: var(--fold-color-text);
    }
    .ghs-cta {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: center;
    }
    .ghs-watermark {
      position: absolute;
      left: 50%;
      top: 46%;
      transform: translate(-50%, -50%);
      font-size: clamp(140px, 22vw, 280px);
      font-weight: 800;
      letter-spacing: -0.04em;
      line-height: 1;
      background: linear-gradient(
        175deg,
        var(--fold-color-primary),
        transparent 82%
      );
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      filter: blur(5px);
      opacity: 0.28;
    }
  `,
})
export default class HeroSectionPage {}
