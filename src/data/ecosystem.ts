import data from './ecosystem.db.json';

type Link = {
  label: string;
  href: string;
};

export type CardLink = {
  title: string;
  copy: string;
  href: string;
};

export type BlogPost = CardLink & {
  category: string;
  date: string;
};

export type MediaHubClient = {
  name: string;
  category: string;
  summary: string;
  links: Link[];
};

export type OAuthProvider = {
  id: string;
  name: string;
  status: string;
  callbackUrl: string;
  scope: string;
};

export type Product = {
  id: string;
  name: string;
  host: string;
  status: string;
  plan: string;
  description: string;
};

type EcosystemDb = {
  identity: {
    workspace: string;
    primaryOrg: string;
    currentUser: {
      name: string;
      email: string;
      role: string;
    };
    billing: {
      trialDays: number;
      plans: Array<{
        name: string;
        price: string;
        summary: string;
      }>;
    };
  };
  oauthProviders: OAuthProvider[];
  products: Product[];
  platformNav: Array<{
    label: string;
    href: string;
  }>;
  adminNav: Array<{
    label: string;
    href: string;
  }>;
  adminTabs: Array<{
    label: string;
  }>;
  ecosystemBackend: {
    name: string;
    runtime: string;
    dataStore: string;
    policy: string;
    root: string;
    packagesRoot: string;
  };
  billingProviders: Array<{
    id: string;
    name: string;
    status: string;
    scope: string;
  }>;
  workspaceProjects: Array<{
    name: string;
    path: string;
    role: string;
  }>;
  adminPanels: Array<{
    title: string;
    summary: string;
  }>;
  metrics: Array<{
    label: string;
    value: string;
    hint: string;
  }>;
  onboarding: Array<{
    label: string;
    state: string;
  }>;
  openSourceProjects: CardLink[];
  mediaHubClients: MediaHubClient[];
  blogPosts: BlogPost[];
  docsSections: CardLink[];
  mapPolicy: {
    repoMap: string;
    combinedMap: string;
    generator: string;
    testCommand: string;
  };
};

export const ecosystemDb = data as EcosystemDb;
export const openSourceProjects = ecosystemDb.openSourceProjects;
export const mediaHubClients = ecosystemDb.mediaHubClients;
export const blogPosts = ecosystemDb.blogPosts;
export const docsSections = ecosystemDb.docsSections;
