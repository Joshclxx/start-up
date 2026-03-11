"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { team } from "@/data/team";
import { ArrowRight } from "lucide-react";

export default function TeamPreview() {
  return (
    <section className="py-24 sm:py-32" id="team" aria-label="Meet the team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Meet the Team"
          subtitle="Three specialists. One studio. Infinite possibilities."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <Link
                href={`/team/${member.slug}`}
                className="card-glow block p-6 rounded-2xl border border-border bg-surface/50 group"
              >
                {/* Avatar */}
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden mb-5 ring-2 ring-border group-hover:ring-accent/30 transition-all">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>

                {/* Info */}
                <h3 className="font-heading font-semibold text-lg text-text-primary group-hover:text-accent transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-violet font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-2">
                  {member.bio}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {member.techStack.slice(0, 4).map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                  {member.techStack.length > 4 && (
                    <Badge>+{member.techStack.length - 4}</Badge>
                  )}
                </div>

                {/* Link */}
                <span className="inline-flex items-center gap-1 text-sm text-accent font-medium group-hover:gap-2 transition-all">
                  View Profile
                  <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
