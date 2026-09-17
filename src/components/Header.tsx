"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-border/30">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Buys<span className="text-accent">Code</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-muted hover:text-accent transition-colors duration-200 text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="p-3 rounded-btn hover:bg-accent/10 transition-colors"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Trocar tema"
          >
            <Sun size={18} className="hidden dark:block" />
            <Moon size={18} className="block dark:hidden" />
          </button>

          <button
            className="md:hidden p-3 rounded-btn hover:bg-accent/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-bg border-b border-border/30 shadow-lg">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-muted hover:text-accent transition-colors duration-200 text-lg font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
