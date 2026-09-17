import { Github, Linkedin, Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Contato</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Tem um projeto em mente ou quer conversar? Estou disponivel para
            oportunidades.
          </p>
        </div>

        <div className="bg-bg-card rounded-card p-8 sm:p-12 shadow-lg border border-border/50">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              href="mailto:guilherme@buyscode.dev"
              className="flex flex-col items-center gap-3 p-6 rounded-card bg-bg hover:bg-accent/10 transition-colors duration-200 group"
            >
              <div className="p-4 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                <Mail size={24} />
              </div>
              <div className="text-center">
                <div className="font-semibold text-sm">E-mail</div>
                <div className="text-xs text-text-muted mt-1">
                  guilherme@buyscode.dev
                </div>
              </div>
            </a>

            <a
              href="https://github.com/buyscode"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-card bg-bg hover:bg-accent/10 transition-colors duration-200 group"
            >
              <div className="p-4 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                <Github size={24} />
              </div>
              <div className="text-center">
                <div className="font-semibold text-sm">GitHub</div>
                <div className="text-xs text-text-muted mt-1">@buyscode</div>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/guilhermebuys"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-card bg-bg hover:bg-accent/10 transition-colors duration-200 group"
            >
              <div className="p-4 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                <Linkedin size={24} />
              </div>
              <div className="text-center">
                <div className="font-semibold text-sm">LinkedIn</div>
                <div className="text-xs text-text-muted mt-1">
                  /in/guilhermebuys
                </div>
              </div>
            </a>
          </div>

          <div className="mt-10 text-center">
            <a
              href="mailto:guilherme@buyscode.dev"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-btn font-semibold hover:bg-accent-hover transition-colors duration-200 shadow-lg"
            >
              <Send size={18} />
              Enviar Mensagem
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
