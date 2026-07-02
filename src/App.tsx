import { BlogPage, DocsPage, LandingPage, MediaHubPage, NotFoundPage } from './landing/LandingPage';

function App() {
  const path = typeof window === 'undefined' ? '/' : window.location.pathname;
  const hostname = typeof window === 'undefined' ? '' : window.location.hostname.toLowerCase();
  const isHomePath = path === '/' || path === '/index.html';
  const isBlogPath = path === '/blog' || path.startsWith('/blog/');
  const isDocsHost = hostname === 'docs.bapx.in' || hostname.startsWith('docs.');
  const isBlogHost = hostname === 'blog.bapx.in' || hostname.startsWith('blog.');
  const isMediaHubHost = hostname === 'mediahub.bapx.in' || hostname.startsWith('mediahub.');
  const isDocsPath = path === '/docs' || path.startsWith('/docs/');

  if (isDocsHost || isDocsPath) {
    return <DocsPage />;
  }

  if (isBlogHost || isBlogPath) {
    return <BlogPage />;
  }

  if (isMediaHubHost) {
    return <MediaHubPage />;
  }

  if (isHomePath) {
    return <LandingPage />;
  }

  return <NotFoundPage />;
}

export default App;
