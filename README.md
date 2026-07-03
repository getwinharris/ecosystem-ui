# ecosystem-ui

Central static UI for the bapX ecosystem.

## Surfaces

- `bapx.in`: public ecosystem root and business entry point.
- `platform.bapx.in`: unified user dashboard for login, subscriptions, billing, products, hosted apps, and API/MCP access.
- `admin.bapx.in`: cross-domain admin view for OAuth, products, blogs, docs, maps, and operations.
- `mediahub.bapx.in`: Bapx Media Hub services and selected client portfolio.
- `blog.bapx.in`: blog categories such as research, open source, company, product, engineering, and releases.
- `docs.bapx.in`: developer guides, API, token plan, pricing, release notes, and developer program docs.
- `avm.bapx.in`: headless `@bapX/vm` install/package surface.

The bapXvm package implementation does not live here. Keep it in the `bapXvm` package repo.

## Data

The current ecosystem UI is JSON and schema driven:

- `src/data/ecosystem.schema.json`
- `src/data/ecosystem.db.json`
- `src/data/ecosystem.ts`

Update JSON first for menus, products, OAuth providers, Media Hub clients, blog posts, docs sections, plans, and dashboard state.

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

## Development

```bash
npm install
npm run dev
npm test
npm run build
```

Visible public changes should be checked against the live hosts after deployment.
