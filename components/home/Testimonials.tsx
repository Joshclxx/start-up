"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rachel Chen",
    company: "TechFlow Inc.",
    role: "CTO",
    quote:
      "J-Warriors delivered our SaaS dashboard ahead of schedule. The attention to detail and performance optimization was beyond our expectations.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    company: "StartUp Labs",
    role: "Founder",
    quote:
      "Working with this team felt like having a full in-house engineering team. Communication was seamless and the quality was outstanding.",
    rating: 5,
  },
  {
    name: "Sarah Kim",
    company: "DesignCo",
    role: "Product Manager",
    quote:
      "The design-to-code pipeline was flawless. They took our Figma files and turned them into a pixel-perfect, animated web experience.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-24 sm:py-32 bg-surface/30"
      id="testimonials"
      aria-label="Testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="What Clients Say"
          subtitle="Don't just take our word for it — hear from the teams we've worked with."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="card-glow p-8 rounded-2xl border border-border bg-bg relative"
            >
              <Quote
                size={32}
                className="text-accent/10 absolute top-6 right-6"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="text-accent fill-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-text-muted leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div>
                <div className="font-heading font-semibold text-sm text-text-primary">
                  {testimonial.name}
                </div>
                <div className="text-xs text-text-muted">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
