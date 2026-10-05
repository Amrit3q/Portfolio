export type CardData = {
    id: number;
    title: string;
    description: string;
    image: string;
    company: string;
    url: string;
};


export const Data: CardData[] = [
    {
        id: 1,
        title: "Japan Ecommerce",
        description: "Frontend engineering for a production B2B ecommerce platform, spanning interconnected commerce workflows, reusable UI systems, and high-volume data experiences.",
        image: "/Images/Screenshot 2026-10-03 at 5.18.40 PM.png",
        company: "Tech Mahindra",
        url: "japan-ecommerce"
    },
    {
        id: 2,
        title: "Dashboard Analytics",
        description: "A visual dashboard for client to analyze and monitor their data, providing insights and actionable information for decision-making.",
        image: "/Images/Microsoft-Nuance-lockup-700x64-1.png",
        company: "Microsoft + Nuance",
        url: "nuance"
    }
]

export const experiences = [
  {
    id: 1,
    role: 'Software Engineer',
    company: 'Tech Mahindra',
    type: 'Full-time',
    period: 'July 2026 — Present',
    location: 'Pune, India',
    description:
      'Frontend engineer owning regional ERP development and production features for a global B2B/B2C platform.',
    summary:
      'Leading frontend architecture and feature delivery for Japan ERP, with ownership spanning complex data interfaces, cart architecture, checkout, and access management.',
    technologies: [
      'React',
      'Next.js 14',
      'TypeScript',
      'Redux Toolkit',
      'Redis',
      'Algolia',
      'BetterStack',
      'GraphQL',
    ],
    highlights: [
      {
        title: 'Regional Frontend Ownership',
        description:
          'Sole frontend owner for the Japan ERP change-request track, translating stakeholder requirements into frontend architecture and defining API payload/response contracts with backend teams.',
      },
      {
        title: 'Reusable Cart Architecture',
        description:
          'Architected a reusable cart module covering folder structure, routing, cross-region data passing, and Algolia integration. Adopted as a drop-in component across regional builds by an 8–10 person frontend team.',
      },
      {
        title: 'Complex Data Management',
        description:
          'Designed and maintained a rebate management table with 60 columns and 1,000+ rows, featuring multi-select, inline comments, bulk actions, and infinite-scroll lazy loading.',
      },
      {
        title: 'Checkout & State Architecture',
        description:
          'Rebuilt checkout and order-handling logic by consolidating fragmented state/effect chains into Redux, reducing prop drilling and improving state management.',
      },
      {
        title: 'Performance & Monitoring',
        description:
          'Implemented Redis-backed caching to reduce redundant API calls during page loads and independently integrated BetterStack monitoring for frontend observability.',
      },
      {
        title: 'Access Management',
        description:
          'Own the User Management module, implementing role-based access workflows, permission inheritance, and administrative interfaces enforcing RBAC at the frontend boundary.',
      },
    ],
    impact: [
      'Sole frontend ownership',
      '60 × 1,000+ data table',
      '8–10 person team adoption',
      '10,000+ platform users',
    ],
  },

  {
    id: 2,
    role: 'Associate Software Engineer',
    company: 'Tech Mahindra',
    type: 'Full-time',
    period: 'August 2024 — June 2026',
    location: 'Pune, India',
    description:
      'Built the Japan ERP frontend from zero, delivering production-ready enterprise interfaces for a global commerce platform.',
    summary:
      'Focused on frontend architecture, reusable component systems, performance optimization, localization, and large-scale production delivery.',
    technologies: [
      'Next.js 14',
      'React',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS',
      'React Query',
      'Contentful CMS',
      'AWS',
    ],
    highlights: [
      {
        title: 'Frontend Architecture From Zero',
        description:
          'Architected the Japan ERP frontend from scratch, designing the SSR system using Next.js 14 and TypeScript and modelling ERP domain logic into clean Redux Toolkit state layers.',
      },
      {
        title: 'Production Engineering',
        description:
          'Delivered three major production releases with near-zero post-release defects while contributing to a global engineering team building the B2B/B2C ERP platform.',
      },
      {
        title: 'Independent Cart Architecture',
        description:
          'Designed a local cart instance inside the ERP module, eliminating long-term coupling with the shared global cart and creating a more independent regional architecture.',
      },
      {
        title: 'Reusable Component System',
        description:
          'Built 20+ ERP pages and 30+ reusable, accessible UI components with unified Redux state handling RBAC, localization (i18n), and dynamic feature flags.',
      },
      {
        title: 'Development Efficiency',
        description:
          'Reduced regional feature delivery time by approximately 40% and per-feature development effort by approximately 30% through reusable architecture and standardized state handling.',
      },
      {
        title: 'Performance Optimization',
        description:
          'Improved Core Web Vitals (LCP, CLS, FID) by 60%+ using lazy loading, dynamic imports, code splitting, and API response caching.',
      },
      {
        title: 'Production Defect Management',
        description:
          'Led structured SIT defect triage across 500+ issues, identifying root causes across frontend state, backend contracts, and business requirements.',
      },
    ],
    impact: [
      '20+ ERP pages',
      '30+ reusable components',
      '~40% faster feature delivery',
      '60%+ Core Web Vitals improvement',
    ],
  },

  {
    id: 3,
    role: 'Software Developer Intern',
    company: 'Microsoft + Nuance',
    type: 'Internship',
    period: 'May 2023 — July 2023',
    location: 'India',
    description:
      'Worked on internal analytics and telecom data-flow tooling during an internship at Nuance Communications.',
    summary:
      'Combined frontend dashboard development, backend integration, authentication, and graph-based problem solving.',
    technologies: [
      'Angular',
      'Java',
      'Spring Boot',
      'Chart.js',
      'OAuth 2.0',
      'Graph Algorithms',
    ],
    highlights: [
      {
        title: 'Interactive Analytics Dashboards',
        description:
          'Built interactive analytics dashboards using Angular and Chart.js for internal reporting and data visualization.',
      },
      {
        title: 'Backend Integration & Security',
        description:
          'Integrated Spring Boot services and implemented OAuth 2.0 for secure, role-scoped internal reporting.',
      },
      {
        title: 'Graph-Based Telecom Modelling',
        description:
          'Implemented DFS-based graph traversal to model telecom call-flow data, improving multi-step interaction tracking accuracy.',
      },
    ],
    impact: [
      'Angular dashboards',
      'Spring Boot integration',
      'OAuth 2.0',
      'DFS graph traversal',
    ],
  },
];