import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data/static/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Projetos</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Alguns dos projetos que construi para aplicar e consolidar meus
            conhecimentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
          >
            Ver todos os projetos
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
