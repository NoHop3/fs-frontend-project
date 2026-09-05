export type Link = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  year: string;
  summary: string;
  stack: string[];
  links: Link[];
};

/** Everything the site says about me lives here, so the copy is edited in one file. */
export const site = {
  name: "Stefan Georgiev",
  role: "Software Developer",
  location: "Denmark",
  // Swap this for whichever address you want public.
  email: "steffan.g23@gmail.com",
  intro:
    "I build web products with React, Next.js, TypeScript, C# and .NET. Currently a full-time software developer at Plan2Learn, and a Software Engineering graduate of VIA University College.",
  socials: [
    { label: "GitHub", href: "https://github.com/NoHop3" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/itsstefang/" },
    { label: "npm", href: "https://www.npmjs.com/~nohope" },
  ] satisfies Link[],
};

export const about = {
  paragraphs: [
    "I wrote my first program at twelve — C++, in a small Bulgarian town near the Greek border. Competitive programming turned into a three-year applied programmer course through my high school years, and that turned into a career.",
    "In 2022 I joined Integrify's full-stack academy to commit properly to the web, then finished a Bachelor in Software Engineering at VIA University College. Today I work full-time as a software developer at Plan2Learn, mostly across React and .NET.",
    "I like work that is measured and finished rather than rushed. Away from the keyboard I have been in the gym for seven years, and I play volleyball, basketball and table tennis — or hike, when the weather in Denmark allows it.",
  ],
  facts: [
    { label: "Now", value: "Software Developer, Plan2Learn" },
    { label: "Education", value: "BSc Software Engineering, VIA University College" },
    { label: "Based in", value: "Denmark — originally Bulgaria" },
    { label: "Coding since", value: "Age 12, starting with C++" },
  ],
  stack: {
    core: ["TypeScript", "React", "C#", ".NET"],
    also: ["Next.js", "Node.js", "Express", "Java", "JavaScript", "HTML & CSS", "Unity"],
  },
};

export const projects: Project[] = [
  {
    title: "Pa-pa-pas De Trois",
    year: "2026",
    summary:
      "A ballet studio's website, built for my sister's business. Static Next.js with localised routing in four languages, an interactive gallery, scroll-reveal animations and structured data for SEO.",
    stack: ["Next.js 16", "Tailwind CSS v4", "TypeScript", "shadcn/ui", "Framer Motion"],
    links: [
      { label: "Live site", href: "https://papapasdetrois.com" },
      { label: "Source", href: "https://github.com/NoHop3/next-js-tailwind-ballet" },
    ],
  },
  {
    title: "cra-template-stg",
    year: "2023",
    summary:
      "A published Create React App template with the setup I kept rebuilding by hand: routing, Redux Toolkit, TypeScript, Storybook, testing, linting, conventional commits and a semantic-release pipeline. Past 500 downloads on npm.",
    stack: ["TypeScript", "Redux Toolkit", "Storybook", "Husky", "GitHub Actions"],
    links: [
      { label: "npm", href: "https://www.npmjs.com/package/cra-template-stg" },
      { label: "Source", href: "https://github.com/NoHop3/cra-template-stg" },
    ],
  },
  {
    title: "Survival horror game",
    year: "2023",
    summary:
      "A first-person survival horror game built in Unity for my sixth-semester game development project — enemy AI, inventory and interaction systems, level design and sound.",
    stack: ["Unity", "C#", "Game design"],
    links: [
      { label: "Watch demo", href: "https://www.youtube.com/watch?v=XYNmKGC5c9Q" },
      { label: "Source", href: "https://github.com/NoHop3/via-sem6-gmd-unity" },
    ],
  },
];
