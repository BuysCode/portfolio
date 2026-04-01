import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data/static/projects";

export default function Projects() {
    return (
        <>
            <Header />
            <div className="space-y-8 px-8 md:px-20 lg:px-40 pb-20">
                <h1 className="text-3xl font-bold mt-20 text-center">Meus projetos</h1>
                {
                    projects.map((project, i) => (
                        <ProjectCard
                            description={project.description}
                            link={project.link}
                            key={i}
                            name={project.name}
                            tags={project.tags}
                        />
                    ))
                }
            </div>
        </>
    )
}