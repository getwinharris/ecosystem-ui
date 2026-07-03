import {
  blogPosts,
  docsSections,
  ecosystemDb,
  mediaHubClients,
  openSourceProjects,
  type Product,
} from '../data/ecosystem';
import type React from 'react';

const contactInfo = ecosystemDb.contact;

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

  if (hostname === 'platform.bapx.in' || hostname.startsWith('platform.')) {
    return 'platform';
  }

  if (hostname === 'admin.bapx.in' || hostname.startsWith('admin.')) {
    return 'admin';
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

function OAuthLogo({ providerId, providerName }: { providerId: string; providerName: string }) {
  const logos: Record<string, string> = {
    google: 'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg',
    github: 'https://cdn.simpleicons.org/github/ffffff',
    openai: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg',
  };

  return (
    <img
      className={`oauth-logo oauth-logo-${providerId}`}
      src={logos[providerId]}
      alt=""
      aria-hidden="true"
      title={providerName}
    />
  );
}

function SiteHeader({ contactLabel = 'Contact' }: { contactLabel?: string }) {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="bapX home">
        <BapxBrand />
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="https://bapx.in">Home</a>
        <a href="https://avm.bapx.in">AVM</a>
        <a href="https://docs.bapx.in">Docs</a>
        <a href="https://docs.bapx.in/api">API/MCP</a>
        <a href="https://docs.bapx.in/pricing">Pricing</a>
        <a href="https://blog.bapx.in">Blog</a>
        <a href="https://blog.bapx.in/research">Research</a>
        <a href="https://blog.bapx.in/opensource">Open source</a>
        <a href="https://blog.bapx.in/release">Release</a>
        <a href="https://mediahub.bapx.in">Media Hub</a>
      </nav>
      <div className="header-actions">
        <a className="header-cta secondary-header-cta" href="https://bapx.in/contact">
          {contactLabel}
        </a>
        <a className="header-cta" href="https://bapx.in/login">
          Sign in
        </a>
      </div>
    </header>
  );
}

function AdminSidebar({ active = 'Control' }: { active?: string }) {
  return (
    <aside className="admin-sidebar">
      <div className="platform-project-select">
        <strong>bapX operator</strong>
        <span>⌄</span>
      </div>
      <label className="platform-search">
        <span>Find</span>
        <input aria-label="Search admin" />
      </label>
      <nav className="platform-nav" aria-label="Admin navigation">
        {ecosystemDb.adminNav.map((item) => (
          <a className={active === item.label ? 'active' : ''} href={item.href} key={`admin-nav-${item.label}`}>
            <span aria-hidden="true">{item.label.slice(0, 1)}</span>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="platform-sidebar-footer">
        <div className="platform-cleanup-card">
          <strong>Internal control room</strong>
          <p>Files, Codex sessions, maps, users, billing, team workflow, and automation state.</p>
        </div>
        <div className="platform-org">
          <span>B</span>
          <div>
            <strong>{ecosystemDb.identity.currentUser.name}</strong>
            <small>{ecosystemDb.identity.currentUser.role}</small>
          </div>
        </div>
      </div>
    </aside>
  );
}

function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="admin-shell">
      <AdminSidebar />
      <section className="platform-main">
        <div className="platform-title-row">
          <div>
            <p className="mono-label">admin.bapx.in</p>
            <h1>Ecosystem Admin</h1>
          </div>
          <a className="admin-map-pill" href="/root-map">
            /root/bapx.in/map.mmd
          </a>
        </div>
        {children}
      </section>
    </main>
  );
}

function PlatformSidebar({ active = 'Home' }: { active?: string }) {
  return (
    <aside className="platform-sidebar">
      <div className="platform-project-select">
        <strong>Default project</strong>
        <span>⌄</span>
      </div>
      <label className="platform-search">
        <span>Search</span>
        <input aria-label="Search platform" />
      </label>
      <nav className="platform-nav" aria-label="Platform navigation">
        {ecosystemDb.platformNav.map((item) => (
          <a
            className={active === item.label ? 'active' : ''}
            href={item.href}
            key={`platform-nav-${item.label}`}
          >
            <span aria-hidden="true">{item.label.slice(0, 1)}</span>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="platform-sidebar-footer">
        <div className="platform-cleanup-card">
          <strong>Unified account layer</strong>
          <p>OAuth, billing, apps, blogs, and AVM installs are managed from the same workspace.</p>
        </div>
        <div className="platform-org">
          <span>B</span>
          <div>
            <strong>{ecosystemDb.identity.primaryOrg}</strong>
            <small>Organization</small>
          </div>
        </div>
      </div>
    </aside>
  );
}

function PlatformShell({
  active,
  title,
  children,
}: {
  active?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="platform-shell">
      <PlatformSidebar active={active} />
      <section className="platform-main">
        <div className="platform-title-row">
          <div>
            <p className="mono-label">platform.bapx.in</p>
            <h1>{title}</h1>
          </div>
          <div className="range-pills" aria-label="Time range">
            <span className="active">24h</span>
            <span>7d</span>
            <span>30d</span>
            <span>90d</span>
          </div>
        </div>
        {children}
      </section>
    </main>
  );
}

function ProductStatusCard({ product }: { product: Product }) {
  return (
    <article className="platform-product-card">
      <span>{product.status}</span>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div>
        <a href={`https://${product.host}`}>{product.host}</a>
        <small>{product.plan}</small>
      </div>
    </article>
  );
}

export function PlatformPage() {
  return (
    <PlatformShell active="Home" title="Home">
      <section className="onboarding-panel">
        <div>
          <h2>Get started</h2>
          <p>Set up the account, billing, OAuth, and runtime contract before installing products.</p>
        </div>
        <div className="onboarding-list">
          {ecosystemDb.onboarding.map((item, index) => (
            <div className="onboarding-item" key={item.label}>
              <span className={item.state === 'done' ? 'done' : ''}>{item.state === 'done' ? '✓' : index + 1}</span>
              <strong>{item.label}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="metric-grid">
        {ecosystemDb.metrics.map((metric) => (
          <article className="metric-card" key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <p>{metric.hint}</p>
          </article>
        ))}
      </section>

      <section className="platform-content-grid">
        <div>
          <div className="platform-section-heading">
            <h2>Products</h2>
            <a href="https://bapx.in/login">Manage access</a>
          </div>
          <div className="platform-products">
            {ecosystemDb.products.map((product) => (
              <ProductStatusCard product={product} key={product.id} />
            ))}
          </div>
        </div>
        <aside className="updates-panel">
          <h2>Updates</h2>
          {blogPosts.slice(0, 4).map((post) => (
            <a href={post.href} key={`platform-update-${post.title}`}>
              <span>{post.category}</span>
              <strong>{post.title}</strong>
              <small>{post.date}</small>
            </a>
          ))}
        </aside>
      </section>
    </PlatformShell>
  );
}

export function AdminPage() {
  return (
    <AdminShell>
      <section className="admin-hero-panel">
        <div>
          <span className="mono-label">Internal only</span>
          <h2>Manage the bapX filesystem, maps, Codex work, users, billing, and team automation.</h2>
          <p>{ecosystemDb.ecosystemBackend.policy}</p>
        </div>
        <div className="admin-terminal-card">
          <span>codex terminal</span>
          <code>cd {ecosystemDb.ecosystemBackend.root}</code>
          <code>npm test && npm run map:repo</code>
          <code>project-packages-git/*</code>
        </div>
      </section>
      <section className="admin-grid">
        <article className="settings-card">
          <h2>Workspace files and projects</h2>
          <p>
            Admin starts from the real VPS layout, not a product catalog. The whole ecosystem map
            points agents to the right repo, docs, schemas, and package boundary before work starts.
          </p>
          <div className="admin-list">
            {ecosystemDb.workspaceProjects.map((project) => (
              <div key={`admin-project-${project.name}`}>
                <span>{project.path}</span>
                <strong>{project.name}</strong>
                <small>{project.role}</small>
              </div>
            ))}
          </div>
        </article>

        <article className="settings-card">
          <h2>Codex, maps, and workflow panels</h2>
          <p>These are the internal admin modules that should become backed by JSON records and schemas.</p>
          <div className="admin-panel-grid">
            {ecosystemDb.adminPanels.map((panel) => (
              <div className="admin-module-card" key={`admin-panel-${panel.title}`}>
                <span>{panel.title}</span>
                <p>{panel.summary}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="settings-card">
          <h2>Unified users and OAuth</h2>
          <p>
            OAuth providers stay centralized for platform users, admin operators, AVM trials, and
            future products. Admin owns provider setup and role assignment; platform only exposes
            the signed-in customer view.
          </p>
          <div className="provider-table">
            {ecosystemDb.oauthProviders.map((provider) => (
              <div className="provider-row" key={provider.id}>
                <div>
                  <strong>{provider.name}</strong>
                  <small>{provider.scope}</small>
                </div>
                <code>{provider.callbackUrl}</code>
                <span>{provider.status}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="settings-card">
          <h2>Razorpay billing control</h2>
          <p>
            Billing should use Razorpay-backed JSON records for plans, subscriptions, invoices,
            payment links, webhook reconciliation, and account entitlements.
          </p>
          <div className="admin-list">
            {ecosystemDb.billingProviders.map((provider) => (
              <div key={`billing-provider-${provider.id}`}>
                <span>{provider.status}</span>
                <strong>{provider.name}</strong>
                <small>{provider.scope}</small>
              </div>
            ))}
          </div>
        </article>

        <article className="settings-card">
          <h2>Map health</h2>
          <p>Every test run regenerates the repository map so agents can read one current knowledge graph.</p>
          <div className="admin-list">
            <div>
              <span>Repo map</span>
              <strong>{ecosystemDb.mapPolicy.repoMap}</strong>
            </div>
            <div>
              <span>Combined map</span>
              <strong>{ecosystemDb.mapPolicy.combinedMap}</strong>
            </div>
            <div>
              <span>Generator</span>
              <strong>{ecosystemDb.mapPolicy.generator}</strong>
            </div>
          </div>
        </article>
      </section>
    </AdminShell>
  );
}

export function LoginPage() {
  const path = typeof window === 'undefined' ? '/login' : window.location.pathname;
  const isSignup = path === '/signup';
  const authTitle = isSignup ? 'Create your bapX account' : 'Sign in to bapX';
  const passwordEndpoint = isSignup
    ? 'https://api.bapx.in/auth/password/signup'
    : 'https://api.bapx.in/auth/password/login';
  const primaryProviders = ecosystemDb.oauthProviders.filter((provider) =>
    ['google', 'github', 'openai'].includes(provider.id)
  );

  return (
    <main className="login-page">
      <a className="login-brand" href="https://bapx.in" aria-label="bapX home">
        <BapxBrand />
      </a>
      <section className="login-card">
        <p className="mono-label">Unified account</p>
        <h1>{authTitle}</h1>
        <p>
          One account controls platform access, AVM trials, billing, product subscriptions, blogs,
          Media Hub work, and future API/MCP tools.
        </p>
        <div className="auth-mode-tabs" aria-label="Authentication mode">
          <a className={!isSignup ? 'active' : ''} href="/login">
            Sign in
          </a>
          <a className={isSignup ? 'active' : ''} href="/signup">
            Sign up
          </a>
        </div>
        <form className="email-auth-form" action={passwordEndpoint} method="post">
          {isSignup ? (
            <label className="email-login">
              <span>Name</span>
              <input name="name" placeholder="Your name" type="text" autoComplete="name" required />
            </label>
          ) : null}
          <label className="email-login">
            <span>Email</span>
            <input name="email" placeholder="name@company.com" type="email" autoComplete="email" required />
          </label>
          <label className="email-login">
            <span>Password</span>
            <input
              name="password"
              placeholder="Enter password"
              type="password"
              autoComplete={isSignup ? 'new-password' : 'current-password'}
              minLength={8}
              required
            />
          </label>
          {isSignup ? (
            <label className="email-login">
              <span>Confirm password</span>
              <input
                name="passwordConfirmation"
                placeholder="Confirm password"
                type="password"
                autoComplete="new-password"
                minLength={8}
                required
              />
            </label>
          ) : null}
          <button className="primary-action" type="submit">
            {isSignup ? 'Create account' : 'Sign in'}
          </button>
        </form>
        <div className="auth-divider">
          <span>Or continue with</span>
        </div>
        <div className="oauth-grid">
          {primaryProviders.map((provider) => (
            <a className="oauth-provider" href={`https://api.bapx.in/auth/oauth/${provider.id}`} key={`login-${provider.id}`}>
              <OAuthLogo providerId={provider.id} providerName={provider.name} />
              <span>{provider.name}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

export function ContactPage() {
  return (
    <main className="landing-page">
      <SiteHeader />

      <section className="hero-section ecosystem-hero contact-hero">
        <div className="hero-copy">
          <p className="mono-label">contact bapX</p>
          <h1>Talk to bapX about web, media, automation, and ecosystem work</h1>
          <p>
            Reach Bapx Media Hub for business websites, social media management, custom apps,
            automation, AVM access, platform questions, and ecosystem partnerships.
          </p>
        </div>
      </section>

      <section className="contact-detail-section">
        <div className="contact-detail-card primary-contact-card">
          <span>Email</span>
          <h2>{contactInfo.email}</h2>
          <a className="primary-action" href={`mailto:${contactInfo.email}`}>
            Email bapX
          </a>
        </div>
        <div className="contact-detail-card">
          <span>Phone</span>
          <h2>{contactInfo.phone}</h2>
          <a className="secondary-action" href={contactInfo.telHref}>
            Call now
          </a>
        </div>
        <div className="contact-detail-card">
          <span>Location</span>
          <h2>{contactInfo.address}</h2>
          <a className="secondary-action" href="https://mediahub.bapx.in">
            Media Hub
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <BapxBrand className="footer-brand" />
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
        <a href={contactInfo.telHref}>{contactInfo.phone}</a>
        <span>{contactInfo.address}</span>
      </footer>
    </main>
  );
}

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
            <a className="primary-action" href="https://bapx.in/contact">
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
            For public technical docs, APIs, MCP, open source, AVM, and ecosystem
            architecture, use the product and docs surfaces. The root site stays focused on what
            bapX does for businesses.
          </p>
        <a className="primary-action" href="https://bapx.in/contact">
          Contact bapX
        </a>
      </section>

      <footer className="site-footer">
        <BapxBrand className="footer-brand" />
        <a href="https://docs.bapx.in">Docs</a>
        <a href="https://bapx.in/login">Sign in</a>
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
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
          <h1>Company services, client work, and business presence managed around each client</h1>
          <p>
            Bapx Media Hub covers websites, ecommerce, funnels, social media, ads, SEO, content,
            campaigns, automations, and custom business systems based on the client&apos;s actual
            market and workflow.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="https://bapx.in/contact">
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
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
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
  const categories = ['All', 'Research', 'Open source', 'Company', 'Release'];
  const blogHeroTitle =
    activeCategory === 'All'
      ? 'Blog, research, open source, release notes, and company updates'
      : activeCategory === 'Open source'
        ? 'Open source projects and contribution notes'
        : `${activeCategory} posts`;
  const blogHeroCopy =
    activeCategory === 'Open source'
      ? 'Public bapX repositories, project notes, contribution paths, and research-adjacent work live here as blog-driven SEO content.'
      : 'The blog is the liquid publishing surface for research, open source, release notes, company updates, product notes, maps, and long-form markdown-style writing.';

  return (
    <main className="landing-page">
      <SiteHeader />

      <section className="hero-section ecosystem-hero blog-hero">
        <div className="hero-copy">
          <p className="mono-label">bapX blog</p>
          <h1>{blogHeroTitle}</h1>
          <p>{blogHeroCopy}</p>
          <div className="category-tabs" aria-label="Blog categories">
            {categories.map((category) => {
              const href =
                category === 'All'
                  ? '/'
                  : category === 'Open source'
                    ? '/opensource'
                    : `/${category.toLowerCase()}`;
              return (
                <a className={activeCategory === category ? 'active' : ''} href={href} key={`blog-category-${category}`}>
                  {category}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="blog-section">
        <div className="blog-lanes" aria-label="Blog content lanes">
          {categories.slice(1).map((category) => {
            const count = blogPosts.filter((post) => post.category === category).length;
            const href = category === 'Open source' ? '/opensource' : `/${category.toLowerCase()}`;
            return (
              <a className={activeCategory === category ? 'active' : ''} href={href} key={`blog-lane-${category}`}>
                <span>{category}</span>
                <strong>{count}</strong>
              </a>
            );
          })}
        </div>
        {activeCategory === 'Open source' || activeCategory === 'All' ? (
          <div className="section-heading compact">
            <h2>Open source projects</h2>
            <p>
              These projects stay visible through the Open source blog category. Each project should
              link to GitHub and grow through issue-first notes, releases, and implementation posts.
            </p>
          </div>
        ) : null}
        {activeCategory === 'Open source' || activeCategory === 'All' ? (
          <div className="opensource-grid blog-project-grid">
            {openSourceProjects.map((project) => (
              <a className="opensource-card" href={project.href} key={`blog-project-${project.title}`}>
                <span>Open source</span>
                <strong>{project.title}</strong>
                <p>{project.copy}</p>
              </a>
            ))}
          </div>
        ) : null}
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

type DocsNavPage = {
  title: string;
  href: string;
  summary: string;
};

type DocsNavGroup = {
  title: string;
  href: string;
  pages: DocsNavPage[];
};

const docsNavGroups: DocsNavGroup[] = [
  {
    title: 'Developer Guides',
    href: '/guides',
    pages: [
      {
        title: 'Models and runtime overview',
        href: '/guides/models-intro',
        summary: 'How AVM, bapX platform, ChatGPT, Codex, API, and MCP fit together.',
      },
      {
        title: 'Quickstart',
        href: '/guides/quickstart',
        summary: 'Create an account, choose the AVM package path, and connect a customer-owned VPS.',
      },
      {
        title: 'Install AVM on a VPS',
        href: '/guides/avm-install',
        summary: 'Bootstrap the headless @bapX/vm runtime, secrets, proxy, logs, backups, and updates.',
      },
      {
        title: 'Connect ChatGPT and Codex',
        href: '/guides/connect-chatgpt-codex',
        summary: 'Use ChatGPT and Codex as the agent interface instead of building a duplicate agent UI.',
      },
      {
        title: 'Open source project guides',
        href: '/guides/open-source-projects',
        summary: 'Issue-first contribution flows for pak-it, map.mmd, x8Dsub-byte, and research repos.',
      },
    ],
  },
  {
    title: 'API / MCP',
    href: '/api',
    pages: [
      {
        title: 'API overview',
        href: '/api/api-overview',
        summary: 'Gateway shape for api.bapx.in, auth, records, storage, functions, realtime, and billing.',
      },
      {
        title: 'MCP gateway',
        href: '/api/mcp',
        summary: 'Agent-facing tool contracts exposed through api.bapx.in/mcp.',
      },
      {
        title: 'Authentication',
        href: '/api/authentication',
        summary: 'Google, GitHub, OpenAI, and Apple OAuth plans plus session and callback rules.',
      },
      {
        title: 'Errors and rate limits',
        href: '/api/errors-rate-limits',
        summary: 'Common response shapes, limits, retries, and operational signals.',
      },
    ],
  },
  {
    title: 'Products',
    href: '/products',
    pages: [
      {
        title: 'AVM',
        href: '/products/avm',
        summary: 'The self-hosted package and customer-owned VPS runtime.',
      },
      {
        title: 'Platform',
        href: '/products/platform',
        summary: 'Unified account, products, subscription, billing, apps, and API/MCP access.',
      },
      {
        title: 'Media Hub',
        href: '/products/mediahub',
        summary: 'Company services and portfolio surface for client business operations.',
      },
      {
        title: 'Token plan',
        href: '/products/token-plan',
        summary: 'Trial, subscription keys, OAuth session usage, Codex/OpenAI usage, and quota policy.',
      },
    ],
  },
  {
    title: 'Pricing',
    href: '/pricing',
    pages: [
      {
        title: 'Pricing overview',
        href: '/pricing/overview',
        summary: '60-day AVM trial, $5/month self-hosted plan, $20/month white-label plan, and custom Media Hub work.',
      },
      {
        title: 'Usage and billing',
        href: '/pricing/usage-billing',
        summary: 'How subscriptions, API usage, customer-owned VPS costs, and invoices should be represented.',
      },
    ],
  },
  {
    title: 'Release Notes',
    href: '/release-notes',
    pages: [
      {
        title: 'Product releases',
        href: '/release-notes/products',
        summary: 'Changes across platform, AVM, docs, Media Hub, and the public ecosystem UI.',
      },
      {
        title: 'API and MCP changes',
        href: '/release-notes/api-mcp',
        summary: 'Gateway, schema, SDK, MCP tool, migration, and security updates.',
      },
    ],
  },
  {
    title: 'Developer Program',
    href: '/developer-program',
    pages: [
      {
        title: 'Contribution flow',
        href: '/developer-program/contribution-flow',
        summary: 'Read repo maps, use GitHub issues, branch from tracked work, validate, and land through PRs.',
      },
      {
        title: 'Partner builds',
        href: '/developer-program/partner-builds',
        summary: 'How external projects, plugins, and client builds connect back to bapX contracts.',
      },
    ],
  },
];

function normalizeDocsPath() {
  if (typeof window === 'undefined') {
    return '/guides';
  }

  const path = window.location.pathname.replace(/^\/docs/, '') || '/';
  return path === '/' ? '/guides' : path;
}

function findActiveDocsGroup(path: string) {
  return docsNavGroups.find((group) => path === group.href || path.startsWith(`${group.href}/`)) ?? docsNavGroups[0];
}

export function DocsPage() {
  const activePath = normalizeDocsPath();
  const activeGroup = findActiveDocsGroup(activePath);
  const activePage = activeGroup.pages.find((page) => page.href === activePath) ?? activeGroup.pages[0];

  return (
    <main className="landing-page docs-page">
      <SiteHeader contactLabel="Developer access" />

      <section className="docs-header">
        <div>
          <span className="mono-label">docs.bapx.in</span>
          <h1>Developer documentation</h1>
          <p>
            Build against AVM, API, MCP, platform billing, release notes, and the public bapX project map
            from one documentation system.
          </p>
        </div>
        <label className="docs-search">
          <span>Search docs</span>
          <input aria-label="Search docs" placeholder="Search guides, API, MCP, pricing..." />
        </label>
      </section>

      <nav className="docs-top-tabs" aria-label="Documentation sections">
        {docsSections.map((section) => {
          const sectionPath = section.href.replace('#', '/').replace('/token-plan', '/products');
          const isActive =
            activeGroup.title === section.title || (section.title === 'API' && activeGroup.title === 'API / MCP');
          return (
            <a className={isActive ? 'active' : ''} href={sectionPath} key={section.title}>
              {section.title}
            </a>
          );
        })}
      </nav>

      <section className="docs-shell">
        <aside className="docs-sidebar">
          {docsSections.map((section) => (
            <a
              className={
                activeGroup.title === section.title || (section.title === 'API' && activeGroup.title === 'API / MCP')
                  ? 'active'
                  : ''
              }
              href={section.href.replace('#', '/').replace('/token-plan', '/products')}
              key={`docs-section-${section.title}`}
            >
              {section.title}
            </a>
          ))}
          <div className="docs-sidebar-tree">
            {docsNavGroups.map((group) => (
              <div className="docs-nav-group" key={group.title}>
                <a className={activeGroup.title === group.title ? 'active' : ''} href={group.href}>
                  {group.title}
                </a>
                {group.pages.map((page) => (
                  <a className={page.href === activePage.href ? 'active-page' : ''} href={page.href} key={page.href}>
                    {page.title}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </aside>

        <article className="docs-reader">
          <span className="mono-label">{activeGroup.title}</span>
          <h2>{activePage.title}</h2>
          <p className="docs-lede">{activePage.summary}</p>
          <div className="docs-callout">
            <strong>Project rule</strong>
            <p>
              Research and open source writing belongs in blog categories. Product implementation details,
              API contracts, MCP contracts, install steps, pricing, and release notes belong here.
            </p>
          </div>
          <div className="docs-content-grid">
            {activeGroup.pages.map((page) => (
              <a className="docs-content-card" href={page.href} key={`reader-${page.href}`}>
                <span>{activeGroup.title}</span>
                <strong>{page.title}</strong>
                <p>{page.summary}</p>
              </a>
            ))}
          </div>
        </article>

        <aside className="docs-on-this-page">
          <span>On this page</span>
          <a href="#overview">Overview</a>
          <a href="#contracts">Contracts</a>
          <a href="#next-steps">Next steps</a>
          <a href="https://blog.bapx.in/research">Research blog</a>
          <a href="https://blog.bapx.in/opensource">Open source blog</a>
        </aside>
      </section>

      <footer className="site-footer">
        <BapxBrand className="footer-brand" />
        <a href="https://blog.bapx.in/research">Research</a>
        <a href="https://blog.bapx.in/opensource">Open source</a>
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
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
          <a href="https://bapx.in/contact">Contact</a>
        </nav>
        <a className="header-cta" href="https://bapx.in/contact">
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
            <strong>ACM ID</strong>
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
              copy: 'Each registered runtime gets a generated hostname such as ACM<8chrandomid>.vm.bapx.in, bound to exactly one VM boundary.',
              items: ['ACM<8chrandomid>.vm.bapx.in', 'one VM boundary', 'TLS proxy'],
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
            <p>Operate through ChatGPT, Codex, the bapX connector, and the generated ACM proxy hostname.</p>
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
            <a href="https://bapx.in/contact">Start trial</a>
          </article>
          <article className="story-card">
            <span>Self-hosted</span>
            <h3>$5 per month for the headless AVM package on your own VM.</h3>
            <a href="https://bapx.in/contact">Use self-hosted</a>
          </article>
          <article className="story-card">
            <span>White label</span>
            <h3>$20 per month for business white-label solution.</h3>
            <a href="https://bapx.in/contact">Discuss white label</a>
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
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
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
          <a href="https://bapx.in/contact">Contact</a>
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
          <a href="https://mediahub.bapx.in">
            <span>mediahub</span>
            <strong>Media Hub services</strong>
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
