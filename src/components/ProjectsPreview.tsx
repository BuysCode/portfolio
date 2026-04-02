import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data/static/projects";

export default function ProjectsPreview() {
    return (
        <div className="mt-20 px-8">
            <h2 className="text-2xl font-bold text-center">Projetos</h2>
            <div className="flex flex-col mt-10 space-x-4">
                <Link href={'/projects'} className="flex text-xl flex-row space-x-4 hover:underline hover:text-blue-600 items-center justify-end">Ver todos meus projetos <BiRightArrowAlt size={24} /></Link>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
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
            </div>
        </div>
    )
}