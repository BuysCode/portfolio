import type { Project } from "../../../../types/projects";

export const projects: Project[] = [
  {
    name: "GiovanniBot",
    description: "Chatbot como guia turístico da itália, personalizando e facilitando seus planejamentos.",
    link: "https://giovannibot.vercel.app",
    tags: [
      {
        color: "blue",
        key: "react",
        text: "ReactJS",
      },
      {
        color: "red",
        key: "html",
        text: "HTML",
      },
      {
        color: "blue",
        key: "CSS",
        text: "CSS",
      },
      {
        color: "gray",
        key: "openroute",
        text: "OpenRouter API",
      }
    ],
  },
  {
    name: "SkillsCheck Dev",
    description: "Quiz simples. Plataforma de avaliação de habilidades técnicas para desenvolvedores, oferecendo testes personalizados e feedback detalhado. (obs.: Semi-funcional, em desenvolvimento)",
    link: "https://skillscheck-dev.vercel.app",
    tags: [
      {
        color: "blue",
        key: "react",
        text: "ReactJS",
      },
      {
        color: "red",
        key: "html",
        text: "HTML",
      },
      {
        color: "blue",
        key: "Tailwind",
        text: "Tailwind CSS",
      },
      {
        color: "blue",
        key: "typescript",
        text: "TypeScript",
      },
      {
        color: "gray",
        key: "next",
        text: "NextJS",
      },
      {
        color: "green",
        key: "prisma",
        text: "Prisma",
      },
      {
        color: "gray",
        key: "sqlite",
        text: "SQLite",
      }
    ]
  }
]