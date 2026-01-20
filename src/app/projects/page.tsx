import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
    return (
        <>
            <Header />
            <div className="space-y-8 px-8 md:px-20 lg:px-40 pb-20">
                <h1 className="text-3xl font-bold mt-20 text-center">Meus projetos</h1>
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
        </>
    )
}