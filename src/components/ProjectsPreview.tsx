import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import ProjectCard from "./ProjectCard";

export default function ProjectsPreview() {
    return (
        <div className="mt-20 px-8">
            <h2 className="text-2xl font-bold text-center">Projetos</h2>
            <div className="flex flex-col mt-10 space-x-4">
                <Link href={'/projects'} className="flex text-xl flex-row space-x-4 hover:underline hover:text-blue-600 items-center justify-end">Ver todos meus projetos <BiRightArrowAlt size={24} /></Link>
                <div className="w-full flex flex-row items-center justify-between mt-10">
                    <ProjectCard
                        description="Chatbot como guia turístico da itália, personalizando e facilitando seus planejamentos."
                        link="https://giovannibot.vercel.app"
                        key={"giovanni"}
                        name="GiovanniBot"
                        tags={
                            [
                                {
                                    color: "blue",
                                    key: "react",
                                    text: "ReactJS"
                                },
                                {
                                    color: "red",
                                    key: "html",
                                    text: "HTML"
                                },
                                {
                                    color: "blue",
                                    key: "CSS",
                                    text: "CSS"
                                },
                                {
                                    color: "gray",
                                    key: "openroute",
                                    text: "OpenRoute API"
                                }
                            ]
                        }
                    />
                </div>
            </div>
        </div>
    )
}