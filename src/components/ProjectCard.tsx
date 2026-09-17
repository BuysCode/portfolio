"use client";

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../../types/projects";

export default function ProjectCard({
  name,
  description,
  tags,
  link,
  github,
}: Project) {
  return (
    <div className="bg-bg-card rounded-card p-6 sm:p-8 shadow-lg border border-border/50 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
      <div className="flex-1 space-y-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-text-muted text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.key}
              className="px-3 py-1 bg-accent/10 text-accent rounded-pill text-xs font-medium"
            >
              {tag.text}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3 mt-6 pt-6 border-t border-border/50">
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-accent text-white rounded-btn text-sm font-semibold hover:bg-accent-hover transition-colors duration-200"
        >
          <ExternalLink size={16} />
          Ver Projeto
        </Link>
        <Link
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-bg text-text rounded-btn text-sm font-semibold border border-border hover:border-accent hover:text-accent transition-colors duration-200"
        >
          <Github size={16} />
          Codigo
        </Link>
      </div>
    </div>
  );
}
