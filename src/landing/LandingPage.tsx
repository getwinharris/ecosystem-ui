const openSourceProjects = [
  {
    title: 'pak-it',
    href: 'https://github.com/getwinharris/pak-it',
    copy: 'Packaging and installation research for product delivery.',
  },
  {
    title: 'map.mmd',
    href: 'https://github.com/getwinharris/map.mmd',
    copy: 'Repository map and knowledge graph direction.',
  },
  {
    title: 'x8Dsub-byte',
    href: 'https://github.com/bapXai/x8Dsub-byte',
    copy: 'Research project under the bapXai direction.',
  },
  {
    title: 'ByteOmniDiffus-RLM-HyperAGI',
    href: 'https://github.com/getwinharris/ByteOmniDiffus-RLM-HyperAGI',
    copy: 'ML, AI, and agentic research exploration.',
  },
];

const mediaHubClients = [
  {
    name: 'GUT Conference',
    category: 'Web product',
    summary: 'Web product development and management tailored for conference operations.',
    links: [{ label: 'Website', href: 'https://gutconference.online/' }],
  },
  {
    name: 'Sri Panchami Spiritual',
    category: 'Web product',
    summary: 'Web product development and management tailored for a spiritual service brand.',
    links: [{ label: 'Website', href: 'https://sripanchamispiritual.com/' }],
  },
  {
    name: 'NEBO Lifestyle Clinic',
    category: 'Web and social',
    summary: 'Full business conversion online funnel, website, and social media management.',
    links: [
      { label: 'Website', href: 'https://nebowellness.com/' },
      { label: 'Facebook', href: 'https://www.facebook.com/nebolifestyleclinic' },
      { label: 'Instagram', href: 'https://www.instagram.com/nebolifestyleclinic/' },
      { label: 'YouTube', href: 'https://www.youtube.com/@nebolifestyleclinic' },
    ],
  },
  {
    name: 'Flexi Feet',
    category: 'Web and social',
    summary: 'Website and social media management for business presence and customer acquisition.',
    links: [
      { label: 'Website', href: 'https://flexifeet.net/' },
      { label: 'Instagram', href: 'https://www.instagram.com/flexifeetmalaysia/' },
      { label: 'Facebook', href: 'https://www.facebook.com/flexifeetmalaysia' },
      { label: 'YouTube', href: 'https://www.youtube.com/@flexifeetmalaysia' },
      { label: 'TikTok', href: 'https://www.tiktok.com/@flexifeetmalaysia' },
    ],
  },
  {
    name: 'Indian Bariatrics',
    category: 'Web and social',
    summary: 'Website and social media management for healthcare education and patient reach.',
    links: [
      { label: 'Website', href: 'https://indianbariatrics.com/' },
      { label: 'Facebook', href: 'https://www.facebook.com/FightObesityAndDiabetes/' },
      { label: 'YouTube', href: 'https://www.youtube.com/@Bariatricdoctor' },
      { label: 'Instagram', href: 'https://www.instagram.com/bariatric_doctor/' },
    ],
  },
  {
    name: 'Happy Feet Erode',
    category: 'Social only',
    summary: 'Social media content and management without a website build.',
    links: [
      { label: 'Instagram', href: 'https://www.instagram.com/happyfeeterode/' },
      { label: 'Facebook', href: 'https://www.facebook.com/happyfeeterode/' },
      { label: 'YouTube', href: 'https://www.youtube.com/@happyfeeterode' },
    ],
  },
];

const blogPosts = [
  {
    title: 'AVM package roadmap for customer-owned VPS installs',
    category: 'Product',
    date: '2026-07-02',
    copy: 'The self-hosted AVM direction, npm package target, connector path, and what must be production-ready before managed resale.',
    href: 'https://docs.bapx.in',
  },
  {
    title: 'Repository maps as a working knowledge graph',
    category: 'Research',
    date: '2026-07-02',
    copy: 'How repo-map.mmd should connect packages, routes, schemas, MCP tools, docs, skills, providers, and architecture gaps.',
    href: 'https://docs.bapx.in',
  },
  {
    title: 'Open source projects in the bapX research lane',
    category: 'Open source',
    date: '2026-07-02',
    copy: 'Public repositories including pak-it, map.mmd, x8Dsub-byte, and ByteOmniDiffus-RLM-HyperAGI, with contribution paths through GitHub.',
    href: 'https://blog.bapx.in/opensource',
  },
  {
    title: 'Media Hub systems for web, social, and business presence',
    category: 'Company',
    date: '2026-07-02',
    copy: 'How client websites, content, ads, SEO, funnels, and social operations become managed digital business systems.',
    href: 'https://mediahub.bapx.in',
  },
  {
    title: 'API and MCP gateway planning for product surfaces',
    category: 'Engineering',
    date: '2026-07-02',
    copy: 'Notes for api.bapx.in, api.bapx.in/mcp, product connectors, schemas, auth, and runtime contracts.',
    href: 'https://docs.bapx.in',
  },
  {
    title: 'Agent framework and model research notes',
    category: 'Research',
    date: '2026-07-02',
    copy: 'Research notes for agent frameworks, model training direction, evaluation, and how research stays distinct from installable products.',
    href: 'https://blog.bapx.in/research',
  },
  {
    title: 'Release notes for bapX product surfaces',
    category: 'Release',
    date: '2026-07-02',
    copy: 'A release log for public site, docs, AVM, Media Hub, API, MCP, and product-surface changes.',
    href: 'https://blog.bapx.in/release',
  },
  {
    title: 'Company notes from Bapx Media Hub',
    category: 'Company',
    date: '2026-07-02',
    copy: 'Company updates, services, portfolio direction, public announcements, and operating notes.',
    href: 'https://blog.bapx.in/company',
  },
];

const docsSections = [
  {
    title: 'Developer Guides',
    copy: 'Start here for product architecture, AVM install flow, app integration, MCP usage, schemas, OAuth, and environment setup.',
    href: '#developer-guides',
  },
  {
    title: 'API',
    copy: 'Gateway contracts for api.bapx.in, SDKs, auth, storage, functions, realtime, webhooks, and MCP endpoints.',
    href: '#api',
  },
  {
    title: 'Token Plan',
    copy: 'Subscription key, user OAuth, Codex/OpenAI token usage, trial access, quotas, and team assignment rules.',
    href: '#token-plan',
  },
  {
    title: 'Pricing',
    copy: 'Self-hosted AVM, white-label business plans, Media Hub services, usage-based API costs, and enterprise terms.',
    href: '#pricing',
  },
  {
    title: 'Release Notes',
    copy: 'Product releases, package updates, API changes, MCP tool changes, security fixes, and migration notes.',
    href: '#release-notes',
  },
  {
    title: 'Developer Program',
    copy: 'Contribution rules, GitHub issue flow, partner builds, plugin work, app submissions, and support paths.',
    href: '#developer-program',
  },
];

type MenuItem = {
  title: string;
  copy: string;
  href: string;
};

type MenuGroup = {
  label: string;
  items?: MenuItem[];
  sections?: Array<{
    title: string;
    items: MenuItem[];
  }>;
};

function getProductPrefix() {
  if (typeof window === 'undefined') {
    return '';
  }

  const hostname = window.location.hostname.toLowerCase();

  if (hostname === 'bapx.in' || hostname === 'www.bapx.in' || hostname === 'localhost') {
    return '';
  }

  if (hostname === 'docs.bapx.in' || hostname.startsWith('docs.')) {
    return 'doc';
  }

  if (hostname === 'blog.bapx.in' || hostname.startsWith('blog.')) {
    return 'blog';
  }

  if (hostname === 'mediahub.bapx.in' || hostname.startsWith('mediahub.')) {
    return 'mediahub';
  }

  if (hostname.endsWith('.bapx.in')) {
    return hostname.split('.')[0];
  }

  return '';
}

function BapxBrand({ className = '' }: { className?: string }) {
  const prefix = getProductPrefix();

  return (
    <span className={`brand-lockup ${className}`.trim()}>
      {prefix ? <span className="brand-prefix">{prefix}</span> : null}
      <img className="brand-logo" src="/brand/bapx-logo-main.svg" alt={prefix ? `${prefix}bapx.` : 'bapx.'} />
    </span>
  );
}

function SiteHeader({ contactLabel = 'Contact' }: { contactLabel?: string }) {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="bapX home">
        <BapxBrand />
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        {menuGroups.map((group) => (
          <details className="nav-menu" key={group.label}>
            <summary>{group.label}</summary>
            <div className="nav-panel">
              {group.sections
                ? group.sections.map((section) => (
                    <div className="nav-section" key={`${group.label}-${section.title}`}>
                      <span className="nav-section-label">{section.title}</span>
                      {section.items.map((item) => (
                        <a href={item.href} key={`${group.label}-${section.title}-${item.title}`}>
                          <strong>{item.title}</strong>
                          <span>{item.copy}</span>
                        </a>
                      ))}
                    </div>
                  ))
                : group.items?.map((item) => (
                    <a href={item.href} key={`${group.label}-${item.title}`}>
                      <strong>{item.title}</strong>
                      <span>{item.copy}</span>
                    </a>
                  ))}
            </div>
          </details>
        ))}
        <a href="mailto:info@bapx.in">Contact</a>
      </nav>
      <a className="header-cta" href="mailto:info@bapx.in">
        {contactLabel}
      </a>
    </header>
  );
}

const menuGroups: MenuGroup[] = [
  {
    label: 'Research',
    items: [
      {
        title: 'Architecture map',
        copy: 'How packages, routes, schemas, MCP, docs, and skills connect.',
        href: 'https://docs.bapx.in',
      },
      {
        title: 'Research blog',
        copy: 'Research notes, architecture direction, model work, and agent framework thinking.',
        href: 'https://blog.bapx.in/research',
      },
      {
        title: 'Security notes',
        copy: 'Installer, secrets, routing, OAuth, and webhook hardening work.',
        href: 'https://docs.bapx.in',
      },
      ...openSourceProjects.map((project) => ({
        title: project.title,
        copy: project.copy,
        href: project.href,
      })),
    ],
  },
  {
    label: 'Products',
    items: [
      {
        title: 'AVM',
        copy: 'Self-hosted backend runtime for customer-owned VPS installs.',
        href: 'https://avm.bapx.in',
      },
      {
        title: 'Bapx Media Hub',
        copy: 'Custom media, business presence, SMM, ads, SEO, and automation services.',
        href: 'https://mediahub.bapx.in',
      },
      {
        title: 'Domains',
        copy: 'Domain resale, DNS, renewals, and ownership management.',
        href: 'https://domains.bapx.in',
      },
    ],
  },
  {
    label: 'Open source',
    items: [
      {
        title: 'Open source blog',
        copy: 'Project notes and contribution context for public bapX repositories.',
        href: 'https://blog.bapx.in/opensource',
      },
      ...openSourceProjects.map((project) => ({
        title: project.title,
        copy: project.copy,
        href: project.href,
      })),
    ],
  },
  {
    label: 'Blogs',
    items: [
      {
        title: 'All posts',
        copy: 'Company, product, research, open source, and engineering posts.',
        href: 'https://blog.bapx.in',
      },
      {
        title: 'Research',
        copy: 'Model, agent framework, architecture, and implementation research notes.',
        href: 'https://blog.bapx.in/research',
      },
      {
        title: 'Open source',
        copy: 'Public repositories, issues, contribution routes, and release context.',
        href: 'https://blog.bapx.in/opensource',
      },
      {
        title: 'Company',
        copy: 'Company updates, service notes, and public announcements.',
        href: 'https://blog.bapx.in/company',
      },
      {
        title: 'Release',
        copy: 'Release notes for product, docs, API, MCP, and site changes.',
        href: 'https://blog.bapx.in/release',
      },
    ],
  },
  {
    label: 'APIs',
    items: [
      {
        title: 'API gateway',
        copy: 'Ecosystem API entry point at api.bapx.in.',
        href: 'https://api.bapx.in',
      },
      {
        title: 'SDK docs',
        copy: 'Database, auth, storage, functions, realtime, and AI contracts.',
        href: 'https://docs.bapx.in',
      },
      {
        title: 'AVM runtime API',
        copy: 'Backend services exposed by each self-hosted AVM runtime.',
        href: 'https://avm.bapx.in',
      },
    ],
  },
  {
    label: 'MCPs',
    items: [
      {
        title: 'MCP gateway',
        copy: 'Agent-facing gateway at api.bapx.in/mcp.',
        href: 'https://api.bapx.in/mcp',
      },
      {
        title: 'Codex tools',
        copy: 'Install, inspect, deploy, and operate AVM from agents.',
        href: 'https://docs.bapx.in',
      },
      {
        title: 'Tool contracts',
        copy: 'Shared schemas and docs used by agent workflows.',
        href: 'https://docs.bapx.in',
      },
    ],
  },
  {
    label: 'Media Hub',
    sections: [
      {
        title: 'Services',
        items: [
          {
            title: 'Client portfolio',
            copy: 'Selected web, commerce, healthcare, clinic, and social media portfolio work.',
            href: 'https://mediahub.bapx.in',
          },
          {
            title: 'Web products',
            copy: 'WordPress, WooCommerce, Shopify, custom apps, and business websites.',
            href: 'https://mediahub.bapx.in/#media-clients',
          },
          {
            title: 'Online funnels',
            copy: 'Web and social conversion systems for full business presence.',
            href: 'https://mediahub.bapx.in/#media-clients',
          },
          {
            title: 'Social management',
            copy: 'Content and social operations for brands that do not need a website.',
            href: 'https://mediahub.bapx.in/#media-clients',
          },
        ],
      },
      {
        title: 'Selected clients',
        items: mediaHubClients.map((client) => ({
          title: client.name,
          copy: client.summary,
          href: client.links[0]?.href ?? '#media-clients',
        })),
      },
      {
        title: 'Bapx Media Hub',
        items: [
          {
            title: 'Instagram',
            copy: 'Bapx Media Hub social presence and campaign work.',
            href: 'https://www.instagram.com/bapxmediahub/',
          },
          {
            title: 'Facebook',
            copy: 'Bapx Media Hub page, updates, and client-facing social activity.',
            href: 'https://www.facebook.com/bapxmediahub/',
          },
        ],
      },
    ],
  },
];

export function LandingPage() {
  if (getProductPrefix() === 'avm') {
    return <AvmLandingPage />;
  }

  return (
    <main className="landing-page">
      <SiteHeader />

      <section className="hero-section ecosystem-hero">
        <div className="hero-copy">
          <h1>Digital systems for businesses that need execution</h1>
          <p>
            bapX builds websites, commerce flows, social presence, campaigns, automations, custom
            apps, and the operating systems around them for companies that need execution, not
            templates.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="mailto:info@bapx.in">
              Start a project
            </a>
            <a className="secondary-action" href="https://mediahub.bapx.in">
              View Media Hub work
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Bring your business online with a team that can build, run, and improve it.</h2>
          <p>
            For public technical docs, APIs, MCP, open source, AVM, domains, and ecosystem
            architecture, use the product and docs surfaces. The root site stays focused on what
            bapX does for businesses.
          </p>
        <a className="primary-action" href="mailto:info@bapx.in">
          Contact bapX
        </a>
      </section>

      <footer className="site-footer">
        <BapxBrand className="footer-brand" />
        <a href="https://docs.bapx.in">Docs</a>
        <a href="https://platform.bapx.in">Platform</a>
        <a href="mailto:info@bapx.in">info@bapx.in</a>
      </footer>
    </main>
  );
}

export function MediaHubPage() {
  return (
    <main className="landing-page">
      <SiteHeader />

      <section className="hero-section ecosystem-hero">
        <div className="hero-copy">
          <p className="mono-label">mediahub.bapx.in</p>
          <h1>Web, social, content, and business presence managed around each client</h1>
          <p>
            Bapx Media Hub covers websites, ecommerce, funnels, social media, ads, SEO, content,
            campaigns, automations, and custom business systems based on the client&apos;s actual
            market and workflow.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="mailto:info@bapx.in">
              Discuss Media Hub
            </a>
            <a className="secondary-action" href="#media-clients">
              View clients
            </a>
          </div>
        </div>
      </section>

      <section id="media-hub" className="media-section">
        <div className="media-copy">
          <h2>Bapx Media Hub builds around the business, not a fixed package shelf</h2>
          <p>
            We work across WordPress, WooCommerce, Shopify, custom apps, web solutions,
            automations, ML/AI workflows, social media management, influencer campaigns,
            professional ads, regular media presence, SEO, and Meta or Google promotions.
          </p>
          <div className="social-links" aria-label="Bapx Media Hub social links">
            <a href="https://www.instagram.com/bapxmediahub/">Instagram</a>
            <a href="https://www.facebook.com/bapxmediahub/">Facebook</a>
          </div>
        </div>
        <div className="media-board">
          <div className="media-card large">
            <span>Clients</span>
            <strong>Custom plans for shops, companies, influencers, professionals, and teams.</strong>
          </div>
          <div className="media-card">
            <span>Web and commerce</span>
            <strong>WordPress, WooCommerce, Shopify, custom apps, and business websites.</strong>
          </div>
          <div className="media-card">
            <span>Growth</span>
            <strong>SMM, influencer work, ads, SEO, Meta, Google, and regular presence.</strong>
          </div>
        </div>
        <div id="media-clients" className="media-clients">
          <div className="section-heading compact">
            <h2>Selected Media Hub clients and projects</h2>
            <p>
              These are a few examples from a larger portfolio of business management services
              tailored around each client&apos;s market, sales process, team, and audience.
            </p>
          </div>
          <div className="client-grid">
            {mediaHubClients.map((client) => (
              <article className="client-card" key={client.name}>
                <span>{client.category}</span>
                <h3>{client.name}</h3>
                <p>{client.summary}</p>
                <div className="client-links">
                  {client.links.map((link) => (
                    <a href={link.href} key={`${client.name}-${link.label}`}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <BapxBrand className="footer-brand" />
        <a href="https://bapx.in">Ecosystem</a>
        <a href="https://blog.bapx.in/company">Company</a>
        <a href="mailto:info@bapx.in">info@bapx.in</a>
      </footer>
    </main>
  );
}

export function BlogPage() {
  const path = typeof window === 'undefined' ? '/' : window.location.pathname;
  const activeCategory = path.includes('/research')
    ? 'Research'
    : path.includes('/opensource')
      ? 'Open source'
      : path.includes('/company')
        ? 'Company'
        : path.includes('/release')
          ? 'Release'
          : 'All';
  const posts =
    activeCategory === 'All' ? blogPosts : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <main className="landing-page">
      <SiteHeader />

      <section className="hero-section ecosystem-hero blog-hero">
        <div className="hero-copy">
          <p className="mono-label">bapX blog</p>
          <h1>Research, open source, product notes, and company updates</h1>
          <p>
            The blog separates public writing by category so research, open-source work, product
            updates, engineering notes, and Media Hub articles can grow without turning the home
            page into a document index.
          </p>
          <div className="category-tabs" aria-label="Blog categories">
            <a className={activeCategory === 'All' ? 'active' : ''} href="/">
              All
            </a>
            <a className={activeCategory === 'Research' ? 'active' : ''} href="/research">
              Research
            </a>
            <a className={activeCategory === 'Open source' ? 'active' : ''} href="/opensource">
              Open source
            </a>
            <a className={activeCategory === 'Company' ? 'active' : ''} href="/company">
              Company
            </a>
            <a className={activeCategory === 'Release' ? 'active' : ''} href="/release">
              Release
            </a>
          </div>
        </div>
      </section>

      <section className="blog-section">
        <div className="blog-grid">
          {posts.map((post) => (
            <a className="blog-card" href={post.href} key={`${post.category}-${post.title}`}>
              <span>{post.category}</span>
              <time>{post.date}</time>
              <strong>{post.title}</strong>
              <p>{post.copy}</p>
            </a>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <BapxBrand className="footer-brand" />
        <a href="/research">Research</a>
        <a href="/opensource">Open source</a>
        <a href="/company">Company</a>
        <a href="/release">Release</a>
        <a href="https://docs.bapx.in">Docs</a>
      </footer>
    </main>
  );
}

export function DocsPage() {
  return (
    <main className="landing-page">
      <SiteHeader contactLabel="Developer access" />

      <section className="hero-section ecosystem-hero docs-hero">
        <div className="hero-copy">
          <p className="mono-label">docs.bapx.in</p>
          <h1>Developer documentation for the bapX ecosystem</h1>
          <p>
            One docs surface for AVM, APIs, MCP, SDKs, pricing, release notes, integrations,
            developer programs, and implementation guides across bapX products.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#developer-guides">
              Start with guides
            </a>
            <a className="secondary-action" href="#api">
              API reference
            </a>
          </div>
        </div>
      </section>

      <section className="docs-index-section">
        <div className="docs-index-grid">
          {docsSections.map((section) => (
            <a className="docs-index-card" href={section.href} key={section.title}>
              <span>{section.title}</span>
              <strong>{section.title}</strong>
              <p>{section.copy}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="docs-detail-section">
        {docsSections.map((section) => (
          <article className="docs-detail-row" id={section.href.slice(1)} key={section.title}>
            <div>
              <span className="mono-label">{section.title}</span>
              <h2>{section.title}</h2>
            </div>
            <p>{section.copy}</p>
          </article>
        ))}
      </section>

      <footer className="site-footer">
        <BapxBrand className="footer-brand" />
        <a href="https://blog.bapx.in/research">Research</a>
        <a href="https://blog.bapx.in/opensource">Open source</a>
        <a href="mailto:info@bapx.in">info@bapx.in</a>
      </footer>
    </main>
  );
}

function AvmLandingPage() {
  return (
    <main className="landing-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="avm bapX home">
          <BapxBrand />
        </a>
        <nav className="site-nav" aria-label="AVM navigation">
          <a href="#package">Package</a>
          <a href="#install">Install</a>
          <a href="#gateway">API/MCP</a>
          <a href="#pricing">Pricing</a>
          <a href="https://docs.bapx.in">Docs</a>
          <a href="mailto:info@bapx.in">Contact</a>
        </nav>
        <a className="header-cta" href="mailto:info@bapx.in?subject=AVM%20install%20package">
          Request access
        </a>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <h1>Install bapXvm as the AVM package inside your own VM</h1>
          <p>
            avm.bapx.in is the package and connector surface for a headless Agentic Virtual
            Machine runtime. The npm package installs bapXvm services into the customer VM,
            while ChatGPT, Codex, and bapX connectors operate it through api.bapx.in and
            api.bapx.in/mcp. The package does not ship a local product UI.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="https://avm.bapx.in/install.sh">
              Download install script
            </a>
            <a className="secondary-action" href="#gateway">
              Review API/MCP path
            </a>
          </div>
        </div>
        <div className="workflow-visual" aria-label="AVM install workflow">
          <div className="visual-grid" />
          <div className="node node-primary">
            <span>@bapX/vm</span>
            <strong>Package</strong>
          </div>
          <div className="node node-media">
            <span>VPS</span>
            <strong>Runtime</strong>
          </div>
          <div className="node node-site">
            <span>Proxy</span>
            <strong>AVP ID</strong>
          </div>
          <div className="node node-ops">
            <span>MCP</span>
            <strong>Gateway</strong>
          </div>
          <div className="node node-platform">
            <span>API</span>
            <strong>Services</strong>
          </div>
          <svg className="workflow-lines" viewBox="0 0 720 520" role="presentation">
            <path d="M146 166 C 260 88, 390 92, 518 156" />
            <path d="M160 190 C 240 260, 340 270, 460 240" />
            <path d="M518 182 C 560 250, 536 324, 458 370" />
            <path d="M180 350 C 266 430, 410 430, 544 350" />
          </svg>
          <div className="signal signal-a" />
          <div className="signal signal-b" />
          <div className="visual-caption">
            <span>avm.bapx.in</span>
            <strong>Headless package, generated runtime proxy, and shared API/MCP gateway.</strong>
          </div>
        </div>
      </section>

      <section className="service-strip" aria-label="AVM package summary">
        <span>@bapX/vm target</span>
        <span>Headless runtime</span>
        <span>api.bapx.in</span>
        <span>api.bapx.in/mcp</span>
        <span>Generated proxy</span>
        <span>$5/mo plan</span>
      </section>

      <section id="package" className="services-section">
        <div className="section-heading">
          <h2>The package is the product gate</h2>
          <p>
            The public motion is self-hosted first: install bapXvm on your VM, register it
            with bapX, and let agents operate through the shared API and MCP gateway. Managed
            VM resale is later roadmap, after the package contract is solid.
          </p>
        </div>
        <div className="service-list">
          {[
            {
              title: 'Headless package',
              copy: 'The installer bootstraps bapXvm services into the customer VM. It is infrastructure, not a bundled local web app.',
              items: ['curl install.sh', '@bapX/vm target', 'No bundled UI'],
            },
            {
              title: 'Generated runtime proxy',
              copy: 'Each registered runtime gets a generated surface such as AVP<8chrandomid>.vm.bapx.in, bound to exactly one VM boundary.',
              items: ['AVP<8chrandomid>.vm.bapx.in', 'one VM boundary', 'TLS proxy'],
            },
            {
              title: 'API and MCP connector',
              copy: 'ChatGPT web UI, mobile, Codex, and the bapX connector operate the runtime through api.bapx.in and api.bapx.in/mcp.',
              items: ['api.bapx.in', 'api.bapx.in/mcp', 'bapX connector'],
            },
          ].map((service) => (
            <article className="service-row" key={service.title}>
              <div>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </div>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="install" className="automation-section">
        <h2>Target install flow</h2>
        <div className="timeline">
          <div>
            <span>01</span>
            <strong>Install</strong>
            <p>Run `curl -fsSL https://avm.bapx.in/install.sh | bash` on a dedicated Ubuntu VM.</p>
          </div>
          <div>
            <span>02</span>
            <strong>Register</strong>
            <p>Bind the runtime to api.bapx.in/mcp with owner, project, service, and VM boundary metadata.</p>
          </div>
          <div>
            <span>03</span>
            <strong>Operate</strong>
            <p>Operate through ChatGPT, Codex, the bapX connector, and the generated AVP proxy hostname.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="services-section">
        <div className="section-heading">
          <h2>Simple self-hosted pricing</h2>
          <p>
            AVM is priced around software access and connectors, not VPS resale. Customers bring
            their own VM first; managed hosting and resale stay in roadmap.
          </p>
        </div>
        <div className="story-grid">
          <article className="story-card">
            <span>Trial</span>
            <h3>60 days free for self-hosted evaluation.</h3>
            <a href="mailto:info@bapx.in?subject=AVM%2060%20day%20trial">Start trial</a>
          </article>
          <article className="story-card">
            <span>Self-hosted</span>
            <h3>$5 per month for the headless AVM package on your own VM.</h3>
            <a href="mailto:info@bapx.in?subject=AVM%20self-hosted%20plan">Use self-hosted</a>
          </article>
          <article className="story-card">
            <span>White label</span>
            <h3>$20 per month for business white-label solution.</h3>
            <a href="mailto:info@bapx.in?subject=AVM%20white%20label%20plan">Discuss white label</a>
          </article>
        </div>
      </section>

      <section id="gateway" className="platform-section">
        <div>
          <h2>The connector is bigger than AVM</h2>
          <p>
            api.bapx.in and api.bapx.in/mcp are shared gateways for AVM and the wider bapX
            ecosystem. AVM is one installable runtime; the same connector layer also serves
            other bapX products, docs, schemas, and service tools.
          </p>
        </div>
        <a className="secondary-action dark" href="https://docs.bapx.in">
          Read docs
        </a>
      </section>

      <footer className="site-footer">
        <BapxBrand className="footer-brand" />
        <a href="https://bapx.in">Ecosystem</a>
        <a href="https://docs.bapx.in">Docs</a>
        <a href="mailto:info@bapx.in">info@bapx.in</a>
      </footer>
    </main>
  );
}

export function NotFoundPage() {
  return (
    <main className="landing-page not-found-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="bapX home">
          <BapxBrand />
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="https://docs.bapx.in">Docs</a>
          <a href="https://api.bapx.in">APIs</a>
          <a href="https://api.bapx.in/mcp">MCP</a>
          <a href="mailto:info@bapx.in">Contact</a>
        </nav>
      </header>

      <section className="not-found-section">
        <p className="mono-label">404 / ROUTE NOT FOUND</p>
        <h1>This page is outside the current bapX map.</h1>
        <p>
          The ecosystem is split across product surfaces. Choose the right gateway below, or return
          home and keep moving.
        </p>
        <div className="not-found-actions">
          <a className="primary-action" href="/">
            Go home
          </a>
          <a className="secondary-action" href="https://docs.bapx.in">
            Open docs
          </a>
          <a className="secondary-action" href="https://api.bapx.in/mcp">
            MCP gateway
          </a>
        </div>
        <div className="not-found-grid">
          <a href="https://avm.bapx.in">
            <span>avm</span>
            <strong>AVM install surface</strong>
          </a>
          <a href="https://docs.bapx.in">
            <span>doc</span>
            <strong>Ecosystem documentation</strong>
          </a>
          <a href="https://domains.bapx.in">
            <span>domains</span>
            <strong>Domain resale and DNS</strong>
          </a>
          <a href="https://admin.bapx.in">
            <span>admin</span>
            <strong>Cross-domain admin</strong>
          </a>
        </div>
      </section>
    </main>
  );
}
