import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Projects — Portfolio",
};

export default function ProjectsPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="border rounded-lg p-5 hover:border-gray-400 transition-colors"
          >
            <h2 className="font-semibold mb-1">{project.title}</h2>
            <p className="text-sm text-gray-600 mb-3">{project.summary}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-0.5 border rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

