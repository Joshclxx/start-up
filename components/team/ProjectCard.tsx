"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ExternalLink, Github } from "lucide-react";
import type { Portfolio } from "@/data/team";

interface ProjectCardProps {
  project: Portfolio;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="card-glow rounded-2xl border border-border bg-surface/50 overflow-hidden group"
    >
      {/* Thumbnail */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="font-heading font-semibold text-lg text-text-primary mb-2">
          {project.title}
        </h4>
        <p className="text-sm text-text-muted leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="accent">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <Button href={project.liveUrl} size="sm" variant="outline">
            <ExternalLink size={14} />
            Live Demo
          </Button>
          <Button href={project.githubUrl} size="sm" variant="ghost">
            <Github size={14} />
            GitHub
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
