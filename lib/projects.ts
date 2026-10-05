export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  link?: string;
};

// Placeholder data — swap for a CMS, MDX files, or a database later.
export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    summary: "One-line summary of the project.",
    description: "Longer description of what this project does, the stack used, and your role in it.",
    tags: ["Next.js", "TypeScript"],
    link: "https://github.com/your-repo",
  },
  {
    slug: "project-two",
    title: "Project Two",
    summary: "One-line summary of the project.",
    description: "Longer description of what this project does, the stack used, and your role in it.",
    tags: ["React", "Node.js"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
