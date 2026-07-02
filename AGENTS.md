# ecosystem-ui Agent Instructions

## Scope

This repository owns the public bapX ecosystem static UI:

- `bapx.in`
- `mediahub.bapx.in`
- `blog.bapx.in`
- `docs.bapx.in`
- `avm.bapx.in`
- ecosystem error pages such as `403`, `404`, and `500`

Do not put bapXvm package internals, MCP server implementation, or customer runtime dashboards here.

## OKF Knowledge Rules

Follow the Open Knowledge Format v0.1 draft for repo and ecosystem knowledge:

- Use markdown files with YAML frontmatter for concept documents.
- Every non-reserved concept markdown file must include a non-empty `type` field.
- Prefer `title`, `description`, `resource`, `tags`, and ISO 8601 `timestamp` fields when useful.
- Use `index.md` for progressive disclosure and directory listings.
- Use `log.md` for chronological update history when a folder needs one.
- Use bundle-relative markdown links for cross-project knowledge references where practical.
- Keep knowledge human-readable, agent-readable, diffable, portable, and tolerant of unknown fields.

## Live Delivery

Any change visible on a public bapX domain must be verified, built, deployed, and checked live.

Minimum checks for visible site work:

```bash
npm run typecheck
npm run build
```

After deployment, verify:

```bash
curl -k -sS -o /dev/null -w '%{http_code}\n' https://bapx.in/
curl -k -sS -o /dev/null -w '%{http_code}\n' https://avm.bapx.in/
curl -k -sS -o /dev/null -w '%{http_code}\n' https://docs.bapx.in/
curl -k -sS -o /dev/null -w '%{http_code}\n' https://blog.bapx.in/
curl -k -sS -o /dev/null -w '%{http_code}\n' https://mediahub.bapx.in/
```

The root `vm.bapx.in` host should not serve a product page. Generated runtime hosts use the `ACM<8chrandomid>.vm.bapx.in` pattern.
