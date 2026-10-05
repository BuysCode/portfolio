import Image from "next/image";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const techStack = [
  "Next.js",
  "TypeScript",
  "React",
  "PostgreSQL",
  "Tailwind CSS",
  "Node.js",
  "Fastify",
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-[85vh] flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
        <div className="flex-1 text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Olá, eu sou{" "}
              <span className="text-accent">Guilherme Buys</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-muted max-w-xl mx-auto lg:mx-0">
              Desenvolvedor Full-Stack autodidata, construindo projetos reais
              desde cedo. Atualmente cursando Ciência da Computação.
            </p>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-accent/10 text-accent rounded-pill text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-bg rounded-btn font-semibold hover:bg-accent-hover transition-colors duration-200 shadow-lg"
            >
              <Mail size={18} />
              Fale Comigo
            </a>
            <a
              href="/docs/curriculo.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-bg-card text-text rounded-btn font-semibold border border-border hover:border-accent hover:text-accent transition-colors duration-200"
            >
              <Download size={18} />
              Currículo
            </a>
          </div>

          <div className="flex gap-3 justify-center lg:justify-start">
            <a
              href="https://github.com/buyscode"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-btn bg-bg-card border border-border hover:border-accent hover:text-accent transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/guilhermebuys"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-btn bg-bg-card border border-border hover:border-accent hover:text-accent transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="relative">
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-[50px] overflow-hidden shadow-xl border-4 border-bg-card">
              <Image
                src="https://avatars.githubusercontent.com/u/131329633?v=4"
                alt="Foto de perfil de Guilherme Buys"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-card blur-2xl" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10 rounded-pill blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
