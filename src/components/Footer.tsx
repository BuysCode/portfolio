import { Github, Instagram, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Guilherme Buys. Todos os direitos
          reservados.
        </div>

        <div className="flex gap-2">
          <a
            href="https://github.com/buyscode"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-btn text-text-muted hover:text-accent hover:bg-accent/10 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://instagram.com/buyscode__"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-btn text-text-muted hover:text-accent hover:bg-accent/10 transition-colors duration-200"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://wa.me/5521978207000"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-btn text-text-muted hover:text-accent hover:bg-accent/10 transition-colors duration-200"
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} />
          </a>
          <a
            href="mailto:buysdev.pro@gmail.com"
            className="p-3 rounded-btn text-text-muted hover:text-accent hover:bg-accent/10 transition-colors duration-200"
            aria-label="E-mail"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
