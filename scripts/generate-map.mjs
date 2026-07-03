import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const db = JSON.parse(readFileSync(join(repoRoot, 'src/data/ecosystem.db.json'), 'utf8'));
const packageJson = JSON.parse(readFileSync(join(repoRoot, 'package.json'), 'utf8'));

const escapeLabel = (value) =>
  String(value)
    .replaceAll('"', "'")
    .replaceAll('\n', ' ')
    .replaceAll('[', '(')
    .replaceAll(']', ')');

const nodeId = (prefix, value) =>
  `${prefix}_${String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')}`;

const lines = [
  'flowchart LR',
  '  Repo["ecosystem-ui"]',
  `  Package["npm package: ${escapeLabel(packageJson.name)}"]`,
  '  App["src/App.tsx route dispatcher"]',
  '  Landing["src/landing/LandingPage.tsx views"]',
  '  Styles["src/styles.css design system"]',
  '  Design["DESIGN.md bapX visual rules"]',
  '  Agents["AGENTS.md agent rules"]',
  '  Data["src/data/ecosystem.db.json"]',
  '  Schema["src/data/ecosystem.schema.json"]',
  '  MapGen["scripts/generate-map.mjs"]',
  '  Map["map.mmd generated knowledge graph"]',
  '  Repo --> Package',
  '  Repo --> App',
  '  App --> Landing',
  '  Landing --> Styles',
  '  Landing --> Data',
  '  Data --> Schema',
  '  Design --> Styles',
  '  Agents --> Map',
  '  MapGen --> Map',
  '  MapGen --> Data',
  '',
  '  subgraph Hosts["Public hosts and routed surfaces"]',
];

const hostRoutes = [
  ['bapx.in', 'LandingPage', 'Public ecosystem root and business entry'],
  ['www.bapx.in', 'LandingPage', 'Public ecosystem root alias'],
  ['platform.bapx.in', 'PlatformPage', 'Unified user dashboard'],
  ['admin.bapx.in', 'AdminPage', 'Internal ecosystem admin for files, Codex, maps, users, billing, workflows'],
  ['mediahub.bapx.in', 'MediaHubPage', 'Media Hub portfolio and services'],
  ['blog.bapx.in', 'BlogPage', 'Blog categories and posts'],
  ['docs.bapx.in', 'DocsPage', 'Developer docs for all products'],
  ['avm.bapx.in', 'AvmLandingPage', 'Headless @bapX/vm install surface'],
  ['vm.bapx.in', 'NotFoundPage', 'Reserved generated runtime namespace'],
];

for (const [host, page, description] of hostRoutes) {
  const id = nodeId('Host', host);
  lines.push(`    ${id}["${escapeLabel(host)}<br/>${escapeLabel(description)}"]`);
  lines.push(`    ${id} --> ${page}`);
}

lines.push('  end', '');

for (const page of [
  'LandingPage',
  'PlatformPage',
  'AdminPage',
  'LoginPage',
  'MediaHubPage',
  'BlogPage',
  'DocsPage',
  'AvmLandingPage',
  'NotFoundPage',
]) {
  lines.push(`  Landing --> ${page}["${page}"]`);
}

lines.push('', '  subgraph Products["Products and ecosystem surfaces"]');
for (const product of db.products) {
  const id = nodeId('Product', product.id);
  lines.push(
    `    ${id}["${escapeLabel(product.name)}<br/>${escapeLabel(product.host)}<br/>${escapeLabel(product.status)}"]`
  );
  lines.push(`    Data --> ${id}`);
  if (product.id === 'platform') lines.push(`    ${id} --> PlatformPage`);
  if (product.id === 'avm') lines.push(`    ${id} --> AvmLandingPage`);
  if (product.id === 'mediahub') lines.push(`    ${id} --> MediaHubPage`);
}
lines.push('  end', '');

lines.push('  subgraph AdminOps["admin.bapx.in internal operations"]');
for (const item of db.adminPanels) {
  const id = nodeId('AdminPanel', item.title);
  lines.push(`    ${id}["${escapeLabel(item.title)}<br/>${escapeLabel(item.summary)}"]`);
  lines.push(`    Data --> ${id}`);
  lines.push(`    ${id} --> AdminPage`);
}
for (const project of db.workspaceProjects) {
  const id = nodeId('WorkspaceProject', project.name);
  lines.push(`    ${id}["${escapeLabel(project.name)}<br/>${escapeLabel(project.path)}"]`);
  lines.push(`    ${id} --> AdminPage`);
}
lines.push('  end', '');

lines.push('  subgraph BackendPolicy["bapX ecosystem backend policy"]');
lines.push(
  `    EcosystemBackend["${escapeLabel(db.ecosystemBackend.name)}<br/>${escapeLabel(db.ecosystemBackend.runtime)}<br/>${escapeLabel(db.ecosystemBackend.dataStore)}"]`
);
lines.push('    EcosystemBackend --> AdminPage');
lines.push('    EcosystemBackend --> PlatformPage');
lines.push('    Data --> EcosystemBackend');
lines.push('  end', '');

lines.push('  subgraph Billing["Billing providers"]');
for (const provider of db.billingProviders) {
  const id = nodeId('Billing', provider.id);
  lines.push(`    ${id}["${escapeLabel(provider.name)}<br/>${escapeLabel(provider.status)}"]`);
  lines.push(`    ${id} --> AdminPage`);
  lines.push(`    ${id} --> PlatformPage`);
}
lines.push('  end', '');

lines.push('  subgraph Auth["Central OAuth inventory"]');
for (const provider of db.oauthProviders) {
  const id = nodeId('OAuth', provider.id);
  lines.push(`    ${id}["${escapeLabel(provider.name)} OAuth<br/>${escapeLabel(provider.status)}"]`);
  lines.push(`    ${id} --> AdminPage`);
  lines.push(`    ${id} --> LoginPage`);
}
lines.push('  end', '');

lines.push('  subgraph BlogDocs["Blog and docs knowledge"]');
for (const post of db.blogPosts) {
  const id = nodeId('Blog', post.title);
  lines.push(`    ${id}["${escapeLabel(post.category)}: ${escapeLabel(post.title)}"]`);
  lines.push(`    Data --> ${id}`);
  lines.push(`    ${id} --> BlogPage`);
}
for (const section of db.docsSections) {
  const id = nodeId('Docs', section.title);
  lines.push(`    ${id}["Docs: ${escapeLabel(section.title)}"]`);
  lines.push(`    Data --> ${id}`);
  lines.push(`    ${id} --> DocsPage`);
}
lines.push('  end', '');

lines.push('  subgraph MediaHub["Media Hub client examples"]');
for (const client of db.mediaHubClients) {
  const id = nodeId('Client', client.name);
  lines.push(`    ${id}["${escapeLabel(client.name)}<br/>${escapeLabel(client.category)}"]`);
  lines.push(`    Data --> ${id}`);
  lines.push(`    ${id} --> MediaHubPage`);
}
lines.push('  end', '');

lines.push('  subgraph OpenSource["Research and open source repositories"]');
for (const project of db.openSourceProjects) {
  const id = nodeId('Repo', project.title);
  lines.push(`    ${id}["${escapeLabel(project.title)}"]`);
  lines.push(`    Data --> ${id}`);
  lines.push(`    ${id} --> BlogPage`);
}
lines.push('  end', '');

lines.push(
  '',
  '  ApiGateway["api.bapx.in"]',
  '  McpGateway["api.bapx.in/mcp"]',
  '  AvmRuntime["ACM random8.vm.bapx.in generated runtime hosts"]',
  '  PlatformPage --> ApiGateway',
  '  AdminPage --> Data',
  '  AvmLandingPage --> ApiGateway',
  '  AvmLandingPage --> McpGateway',
  '  AvmLandingPage --> AvmRuntime',
  '  LoginPage --> ApiGateway',
  ''
);

writeFileSync(join(repoRoot, 'map.mmd'), `${lines.join('\n')}\n`);
console.log('generated map.mmd');
