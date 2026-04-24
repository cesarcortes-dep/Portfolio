export type SkillLevel = "Basic" | "Intermediate" | "Advanced";

export type Social = {
  platform: "github" | "linkedin" | "email";
  label: string;
  href: string;
};

export type Project = {
  id: string;
  client: string;
  title: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  stack: string[];
  href?: string;
  image?: string;
  featured?: boolean;
};

export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
};

export type Portfolio = {
  personal: {
    name: string;
    shortName: string;
    role: string;
    tagline: string;
    location: string;
    email: string;
    phone: string;
    bio: string;
    seekingStatement: string;
    profileImg: string;
    aboutImg: string;
    cvUrl: string;
    availableForWork: boolean;
  };
  socials: Social[];
  stack: {
    frontend: string[];
    stateArchitecture: string[];
    uiFrameworks: string[];
    cloudBackend: string[];
    tooling: string[];
  };
  projects: Project[];
  education: Experience[];
};
