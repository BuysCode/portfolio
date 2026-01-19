import Header from "@/components/Header";
import Hero from "@/components/Hero"
import AboutMe from "@/components/AboutMe";
import ProjectsPreview from "@/components/ProjectsPreview";

export default function Home () {
  return (
    <div className="bg-gray-950">
      <Header />
      <Hero />
      <AboutMe />
      <ProjectsPreview />
    </div>
  )
}