"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
  index: number;
}

export default function SkillBadge({ skill, index }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="inline-flex items-center px-4 py-2 rounded-lg bg-surface border border-border text-sm text-text-primary font-medium hover:border-accent/30 hover:text-accent transition-all cursor-default"
    >
      {skill}
    </motion.span>
  );
}
