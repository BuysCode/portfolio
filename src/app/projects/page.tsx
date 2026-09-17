import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data/static/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold">Meus Projetos</h1>
            <p className="text-text-muted max-w-2xl mx-auto">
              Uma colecao dos projetos que construi para aplicar e consolidar
              meus conhecimentos em desenvolvimento web.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
