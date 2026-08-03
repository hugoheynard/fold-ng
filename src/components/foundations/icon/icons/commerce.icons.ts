// The commerce / e-commerce icon set — cart, catalogue, payment, fulfilment.
// Inlined SVG (no .svg text-loader dependency) so the package ships
// self-contained. Single-colour stroke SVGs using `currentColor`, so each icon
// inherits `color` from its host. Hand-maintained; keys are kebab-case and unique
// across categories. Feather/Lucide geometry (24×24, stroke-width 2, round joins).
const S =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">';

export const COMMERCE_ICONS = {
  // ── Cart & checkout ─────────────────────────────────────────────
  "shopping-cart": `${S}<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
  "shopping-bag": `${S}<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  basket: `${S}<path d="M5.5 9h13l-1.13 9.06a2 2 0 0 1-1.98 1.94H8.61a2 2 0 0 1-1.98-1.94z"/><path d="m8.5 9 3-6 3 6"/><path d="M9.5 13v3"/><path d="M14.5 13v3"/></svg>`,

  // ── Catalogue & products ────────────────────────────────────────
  package: `${S}<path d="M16.5 9.4 7.5 4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96 12 12.01l8.73-5.05"/><path d="M12 22.08V12"/></svg>`,
  "package-check": `${S}<path d="M16 16.5V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-3 1.73"/><path d="M3.3 7 12 12l3-1.7"/><path d="M12 22V12"/><path d="M21 8.5V16a2 2 0 0 1-1 1.73l-7 4a2 2 0 0 1-1.5.24"/><path d="m16.5 19.5 2 2 4-4"/></svg>`,
  tag: `${S}<path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><path d="M7 7h.01"/></svg>`,
  tags: `${S}<path d="M9 5H4a2 2 0 0 0-2 2v5l7.59 7.59a2 2 0 0 0 2.82 0l4.18-4.18a2 2 0 0 0 0-2.82z"/><path d="M6 9.5h.01"/><path d="m14 4 6.59 6.59a2 2 0 0 1 0 2.82L16 18"/></svg>`,
  barcode: `${S}<path d="M3 5v14"/><path d="M6.5 5v14"/><path d="M10 5v14"/><path d="M14 5v14"/><path d="M17.5 5v14"/><path d="M21 5v14"/></svg>`,
  "qr-code": `${S}<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3z"/><path d="M20 14h1"/><path d="M14 20h1"/><path d="M20 17v4"/><path d="M17 20h4"/></svg>`,
  gift: `${S}<path d="M20 12v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9"/><rect x="2" y="7" width="20" height="5" rx="1"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,

  // ── Payment & billing ───────────────────────────────────────────
  "credit-card": `${S}<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>`,
  wallet: `${S}<path d="M20 12V7H5a2 2 0 0 1 0-4h13a1 1 0 0 1 1 1v3"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/></svg>`,
  receipt: `${S}<path d="M4 2v20l2.5-1.5L9 22l2.5-1.5L14 22l2.5-1.5L19 22l1-1V2l-2.5 1.5L15 2l-2.5 1.5L10 2 7.5 3.5 5 2z"/><path d="M8 8h8"/><path d="M8 12h8"/><path d="M8 16h5"/></svg>`,
  coins: `${S}<circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></svg>`,
  banknote: `${S}<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01"/><path d="M18 12h.01"/></svg>`,
  percent: `${S}<path d="M19 5 5 19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>`,

  // ── Fulfilment & delivery ───────────────────────────────────────
  truck: `${S}<path d="M14 18V6a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h1"/><path d="M14 9h4l3 3v5a1 1 0 0 1-1 1h-1"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/><path d="M8 18h6"/></svg>`,
  store: `${S}<path d="M4 9.5V20a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9.5"/><path d="M2 9.5 3.6 4a1 1 0 0 1 1-.75h14.8a1 1 0 0 1 1 .75L22 9.5a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0z"/><path d="M9 21v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5"/></svg>`,
  warehouse: `${S}<path d="M22 8.35V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8.35a2 2 0 0 1 1.26-1.86l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35z"/><path d="M6 10h12"/><path d="M6 14h12"/><path d="M6 18h12"/></svg>`,
  "map-pin": `${S}<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  "package-return": `${S}<path d="M9 14 4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 5 5v0a5 5 0 0 1-5 5h-4"/></svg>`,
} as const;
