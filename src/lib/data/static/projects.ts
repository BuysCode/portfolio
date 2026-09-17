import type { Project } from "../../../../types/projects";

export const projects: Project[] = [
  {
    name: "The Witcher Express",
    description: "E-commerce de tecnologia estilo marketplace para Porto Alegre, com distribuidoras locais para entrega rapida. Design mistico estilo RPG.",
    link: "https://thewitcherexpress.vercel.app/",
    github: "https://github.com/BuysCode/thewitcherexpress_web/",
    tags: [
      {
        color: "gray",
        key: "next",
        text: "Next.js",
      },
      {
        color: "blue",
        key: "express",
        text: "Express.js",
      },
      {
        color: "green",
        key: "prisma",
        text: "Prisma ORM",
      },
      {
        color: "gray",
        key: "sqlite",
        text: "SQLite",
      },
      {
        color: "red",
        key: "jwt",
        text: "JWT",
      },
    ],
  },
  {
    name: "BpmReview",
    description: "Plataforma de resenhas de musicas no estilo LetterBoxd, onde usuarios buscam albuns e artistas pelo catalogo da MusicBrainz e deixam seus comentários.",
    link: "https://bpmreview.vercel.app/",
    github: "https://github.com/BuysCode/bpm-review/",
    tags: [
      {
        color: "gray",
        key: "next",
        text: "Next.js",
      },
      {
        color: "blue",
        key: "appwrite",
        text: "Appwrite",
      },
      {
        color: "gray",
        key: "musicbrainz",
        text: "MusicBrainz API",
      },
    ],
  },
  {
    name: "GiovanniBot",
    description: "Chatbot como guia turístico da itália, personalizando e facilitando seus planejamentos.",
    link: "https://giovannibot.vercel.app",
    github: "https://github.com/buyscode/giovannibot",
    tags: [
      {
        color: "blue",
        key: "react",
        text: "Next.js",
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
    github: "https://github.com/buyscode/skillscheck_dev",
    tags: [
      {
        color: "blue",
        key: "react",
        text: "Next.js",
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
        color: "green",
        key: "prisma",
        text: "Prisma ORM",
      },
      {
        color: "gray",
        key: "sqlite",
        text: "SQLite",
      }
    ]
  },
  {
    name: "CoinShift",
    description: "Aplicativo de conversão de moedas, permitindo aos usuários converter valores entre diferentes moedas com taxas de câmbio atualizadas em tempo real.",
    link: "https://coinshift.vercel.app",
    github: "https://github.com/buyscode/coinshift",
    tags: [
      {
        color: "blue",
        key: "react",
        text: "Next.js",
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
        key: "exchangerateapi",
        text: "ExchangeRate API",
      }
    ]
  }
]