import type { Portfolio } from "@/types";

export const portfolio: Portfolio = {
  personal: {
    name: "César Mateo Cortés León",
    shortName: "César Cortés",
    role: "Senior Front-End Engineer",
    tagline:
      "Production interfaces for enterprise clients. React, React Native, TypeScript, Next.js.",
    location: "Medellín, Colombia",
    email: "cesarcortes4@outlook.com",
    phone: "+57 300 850 8478",
    bio: "Front-End Engineer with 5 years of production experience delivering complex, high-performance interfaces for enterprise clients across Globant's portfolio. Sole owner of full mobile UI implementations (React Native) and lead contributor on React.js / TypeScript web platforms serving thousands of end users. Consistent track record of shipping on time in Agile environments, collaborating directly with stakeholders, and producing component architectures that reduce future development time.",
    seekingStatement:
      "Actively seeking a Senior-level role at a global technology company where scale and engineering quality matter.",
    profileImg: "/profile.jpg",
    aboutImg: "/about.jpg",
    cvUrl: "/cv.pdf",
    availableForWork: true,
  },

  socials: [
    {
      platform: "github",
      label: "GitHub",
      href: "https://github.com/cesarcortes-dep",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/c%C3%A9sar-mateo-cort%C3%A9s-le%C3%B3n-b823a2206/",
    },
    {
      platform: "email",
      label: "Email",
      href: "mailto:cesarcortes4@outlook.com",
    },
  ],

  stack: {
    frontend: [
      "React.js",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript (ES6+)",
      "Angular",
      "Vue.js",
    ],
    stateArchitecture: [
      "Redux",
      "Custom hooks",
      "Reusable component systems",
      "Modular front-end architecture",
    ],
    uiFrameworks: [
      "Material UI",
      "Data Grid",
      "React Native Paper",
      "HTML5",
      "CSS3",
      "Sass",
    ],
    cloudBackend: [
      "AWS",
      "Firebase (Firestore real-time)",
      "Node.js",
      "MongoDB",
    ],
    tooling: [
      "Git",
      "Figma",
      "Postman",
      "Insomnia",
      "Jira",
      "Azure DevOps",
      "Visual Studio",
    ],
  },

  projects: [
    {
      id: "ara-teams-ops",
      client: "ARA Teams Operations",
      title: "Mobile Ops App",
      role: "Web UI Developer — Mobile Lead · Globant",
      period: "Jan 2025 – Jun 2025",
      location: "Medellín, CO",
      summary:
        "Sole developer delivering 100% of the mobile front-end for ARA's internal operations app, on schedule and production-ready without additional engineering support.",
      highlights: [
        "Converted Figma specs into pixel-accurate components, eliminating the layout-QA revision cycle.",
        "Architected a reusable component + custom-hooks library that cut estimated dev time for new screens by ~40%.",
        "Real-time Firestore sync with no perceptible latency across devices.",
        "Absorbed 3 mid-sprint scope changes without slipping release dates.",
      ],
      stack: [
        "React Native",
        "React Native Paper",
        "React Navigation",
        "Firestore",
        "Figma",
        "Jira",
      ],
      href: "https://aratiendas.com/descarga-nuestra-app/",
      image: "/projects/ara-banner.png",
      featured: true,
    },
    {
      id: "metacheck",
      client: "Personal project",
      title: "MetaCheck",
      role: "Full-stack · Open source",
      period: "2026",
      summary:
        "Free meta-tag auditing tool. Paste a URL, see how it renders on Google / Facebook / X / LinkedIn, and get a scored technical report as a downloadable PDF — no account, nothing stored.",
      highlights: [
        "Hardened server-side fetch: Zod validation, SSRF guard across redirects, 8 s timeout, 2 MB body cap, Upstash Redis rate limiting per IP.",
        "Lazy-loaded PDF generation with @react-pdf/renderer so the initial bundle stays small; four pixel-accurate platform preview cards driven off a single parser.",
      ],
      stack: [
        "Next.js 16",
        "TypeScript",
        "Tailwind v4",
        "Cheerio",
        "Zod",
        "Upstash Redis",
        "React-PDF",
        "Radix UI",
      ],
      href: "https://meta-check-two.vercel.app/",
      image: "/projects/metacheck-og.png",
    },
    {
      id: "rsm-task-management",
      client: "RSM",
      title: "Task Management Platform",
      role: "Web UI Developer · Globant",
      period: "Jun 2024 – Nov 2024",
      location: "Medellín, CO",
      summary:
        "Built and maintained a sophisticated task-management UI serving enterprise client teams, aligning component patterns with the design system to reduce UI bugs.",
      highlights: [
        "Improved interface consistency and cut reported UI bugs by enforcing design-system patterns.",
        "Responsive, accessible architecture used in multi-week Agile sprints.",
        "Consistently met sprint commitments across Azure DevOps delivery cycles.",
      ],
      stack: [
        "React.js",
        "TypeScript",
        "Material UI",
        "Data Grid",
        "Azure DevOps",
      ],
    },
    {
      id: "command-alkon",
      client: "Command Alkon",
      title: "Enterprise Construction Platform",
      role: "Web UI Developer · Globant",
      period: "Dec 2023 – Jun 2024",
      location: "Medellín, CO",
      summary:
        "Developed and maintained complex React interfaces for a construction-industry enterprise platform, shipping with zero critical UI regressions across a 7-month engagement.",
      highlights: [
        "Zero critical UI regressions over 7 months of active development.",
        "Systematic FE/BE contract validation via Postman + Insomnia cut integration defects per release.",
        "Consistent in-sprint feature delivery alongside design and backend teams.",
      ],
      stack: ["React.js", "TypeScript", "AWS", "Postman", "Insomnia", "Jira"],
    },
    {
      id: "virtual-data-crud",
      client: "Virtual Data",
      title: "CRUD Web Application",
      role: "Front-End Developer",
      period: "Apr 2022 – Aug 2023",
      location: "Medellín, CO",
      summary:
        "Led critical development on a CRUD web application in React, establishing component + coding standards that were adopted across the team.",
      highlights: [
        "Set component and coding standards adopted by the whole team.",
        "Proactive scope-risk communication drove on-time delivery across multiple client projects.",
        "Introduced modular React patterns that cut onboarding time for new developers.",
      ],
      stack: ["React.js", "MongoDB", "Jira"],
    },
  ],

  education: [
    {
      title: "Technology in Systems Management",
      company: "Politécnico Gran Colombiano",
      location: "Medellín, Colombia",
      period: "Feb 2017 – Oct 2022",
    },
  ],
};
