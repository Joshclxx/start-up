"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="card-glow block p-6 sm:p-8 rounded-2xl border border-border bg-surface/50 group"
      >
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="accent">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-xl sm:text-2xl text-text-primary group-hover:text-accent transition-colors mb-3 leading-tight">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-text-muted leading-relaxed mb-5 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted mb-4">
          <span className="flex items-center gap-1.5">
            <User size={12} />
            {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={12} />
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} />
            {post.readTime}
          </span>
        </div>

        {/* Read more */}
        <span className="inline-flex items-center gap-1.5 text-sm text-accent font-medium group-hover:gap-2.5 transition-all">
          Read Article
          <ArrowRight size={14} />
        </span>
      </Link>
    </motion.article>
  );
}
