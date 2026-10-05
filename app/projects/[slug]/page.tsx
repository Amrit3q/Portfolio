import { notFound } from "next/navigation";
import { projects, getProject } from "@/lib/projects";

// Pre-render a page for every project at build time
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-3">{project.title}</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-0.5 border rounded-full">
            {tag}
          </span>
        ))}
      </div>

      <p className="text-gray-700 mb-6">{project.description}</p>

      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline">
          View source / live link →
        </a>
      )}
    </section>
  );
}
