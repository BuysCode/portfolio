import { Github, Instagram, Mail, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Contato</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Tem um projeto em mente ou quer conversar? Estou disponível para
            oportunidades.
          </p>
        </div>

        <div className="bg-bg-card rounded-card p-8 sm:p-12 shadow-lg border border-border/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="mailto:buysdev.pro@gmail.com"
              className="flex flex-col items-center gap-3 p-6 rounded-card bg-bg hover:bg-accent/10 transition-colors duration-200 group"
            >
              <div className="p-4 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                <Mail size={24} />
              </div>
              <div className="text-center">
                <div className="font-semibold text-sm">E-mail</div>
                <div className="text-xs text-text-muted mt-1">
                  buysdev.pro@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/5521978207000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-card bg-bg hover:bg-accent/10 transition-colors duration-200 group"
            >
              <div className="p-4 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                <MessageCircle size={24} />
              </div>
              <div className="text-center">
                <div className="font-semibold text-sm">WhatsApp</div>
                <div className="text-xs text-text-muted mt-1">
                  (21) 97820-7000
                </div>
              </div>
            </a>

            <a
              href="https://instagram.com/buyscode__"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-card bg-bg hover:bg-accent/10 transition-colors duration-200 group"
            >
              <div className="p-4 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                <Instagram size={24} />
              </div>
              <div className="text-center">
                <div className="font-semibold text-sm">Instagram</div>
                <div className="text-xs text-text-muted mt-1">@buyscode__</div>
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
          </div>

          <div className="mt-10 text-center">
            <a
              href="mailto:buysdev.pro@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-bg rounded-btn font-semibold hover:bg-accent-hover transition-colors duration-200 shadow-lg"
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
