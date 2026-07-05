---
type: Repo Concept
title: Brand assets
description: Browser-visible logo and favicon rules for the bapX ecosystem UI.
resource: public/brand
tags: [bapx, brand, favicon, ui]
timestamp: 2026-07-03T00:00:00Z
---

# Brand Assets

The browser favicon is `public/brand/bapx-fav-icon.svg`. It must remain visible on both dark and light browser chrome.

## Favicon Contract

- Keep the favicon SVG self-contained and browser-readable.
- Preserve the `x.` mark as the foreground brand signal.
- Keep a white circular backing inside the SVG so browser tabs and bookmark surfaces have stable contrast.
- Do not rely on the browser tab background color for contrast.
- Regenerate `map.mmd` and run the repo checks after changing any public brand asset.

Tracking issue: [Fix favicon contrast and document brand asset contract](https://github.com/getwinharris/ecosystem-ui/issues/1).
