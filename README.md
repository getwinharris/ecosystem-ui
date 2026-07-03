# ecosystem-ui

Central static UI for the bapX ecosystem.

## Surfaces

- `bapx.in`: public ecosystem root and business entry point.
- `platform.bapx.in`: signed-in user dashboard for login, subscriptions, billing, products, hosted apps, and API/MCP access.
- `admin.bapx.in`: internal bapX admin for files, Codex terminal workflows, maps, users, Razorpay billing, team operations, and automations.
- `mediahub.bapx.in`: Bapx Media Hub services and selected client portfolio.
- `blog.bapx.in`: blog categories such as research, open source, company, product, engineering, and releases.
- `docs.bapx.in`: developer guides, API, token plan, pricing, release notes, and developer program docs.
- `avm.bapx.in`: headless `@bapX/vm` install/package surface.

The bapXvm package implementation does not live here. Keep it in the `bapXvm` package repo. Also do
not use bapXvm as the primary backend for the bapX ecosystem itself; the ecosystem backend should be
a first-party Node.js/TypeScript and JSON-schema-driven backend.

## Data

The current ecosystem UI is JSON and schema driven:

- `src/data/ecosystem.schema.json`
- `src/data/ecosystem.db.json`
- `src/data/ecosystem.ts`

Update JSON first for menus, products, OAuth providers, Media Hub clients, blog posts, docs sections, plans, and dashboard state.

The backend direction is JSON-first: users, billing, workflows, files, maps, content, and admin state
should be represented with documented JSON schemas and TypeScript contracts. Razorpay is the planned
primary billing provider.

## Map

`map.mmd` is generated:

```bash
npm run map:repo
```

`npm test` regenerates the map before TypeScript checks:

```bash
npm test
```

Do not edit `map.mmd` by hand. Change `scripts/generate-map.mjs` or the JSON data, then regenerate.

## Brand Assets

Browser-visible brand asset rules live in [docs/brand-assets.md](docs/brand-assets.md). The favicon
must preserve a white circular backing so the `x.` mark stays readable in browser tabs and bookmarks.

## Development

```bash
npm install
npm run dev
npm test
npm run build
```

Visible public changes should be checked against the live hosts after deployment.
