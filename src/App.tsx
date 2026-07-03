import {
  AdminPage,
  BlogPage,
  ContactPage,
  DocsPage,
  LandingPage,
  LoginPage,
  MediaHubPage,
  NotFoundPage,
  PlatformPage,
} from './landing/LandingPage';

function App() {
  const path = typeof window === 'undefined' ? '/' : window.location.pathname;
  const hostname = typeof window === 'undefined' ? '' : window.location.hostname.toLowerCase();
  const isHomePath = path === '/' || path === '/index.html';
  const isBlogPath = path === '/blog' || path.startsWith('/blog/');
  const isLoginPath = path === '/login' || path === '/signin' || path === '/signup';
  const isContactPath = path === '/contact' || path.startsWith('/contact/');
  const isPlatformPath = path === '/platform' || path.startsWith('/platform/');
  const isAdminPath = path === '/admin' || path.startsWith('/admin/');
  const isDocsHost = hostname === 'docs.bapx.in' || hostname.startsWith('docs.');
  const isBlogHost = hostname === 'blog.bapx.in' || hostname.startsWith('blog.');
  const isMediaHubHost = hostname === 'mediahub.bapx.in' || hostname.startsWith('mediahub.');
  const isPlatformHost = hostname === 'platform.bapx.in' || hostname.startsWith('platform.');
  const isAdminHost = hostname === 'admin.bapx.in' || hostname.startsWith('admin.');
  const isReservedVmRootHost = hostname === 'vm.bapx.in';
  const isDocsPath = path === '/docs' || path.startsWith('/docs/');

  if (isLoginPath) {
    return <LoginPage />;
  }

  if (isContactPath) {
    return <ContactPage />;
  }

  if (isAdminHost || isAdminPath) {
    return <AdminPage />;
  }

  if (isPlatformHost || isPlatformPath) {
    return <PlatformPage />;
  }

  if (isDocsHost || isDocsPath) {
    return <DocsPage />;
  }

  if (isBlogHost || isBlogPath) {
    return <BlogPage />;
  }

  if (isMediaHubHost) {
    return <MediaHubPage />;
  }

  if (isReservedVmRootHost) {
    return <NotFoundPage />;
  }

  if (isHomePath) {
    return <LandingPage />;
  }

  return <NotFoundPage />;
}

export default App;
