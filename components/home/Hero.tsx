"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

const words = ["We Build", "Digital", "Experiences", "That Matter."];

export default function Hero() {
  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden noise-overlay"
      aria-label="Hero"
    >
      {/* Gradient blobs */}
      <div className="glow-mint -top-32 -left-32" />
      <div className="glow-violet top-1/3 -right-20" />
      <div className="glow-mint bottom-0 left-1/3 opacity-50" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 mb-8"
        >
          <Sparkles size={14} className="text-accent" />
          <span className="text-sm text-accent font-medium">
            Currently Available for Commission Work
          </span>
        </motion.div>

        {/* Animated heading */}
        <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4 + i * 0.15,
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className={`inline-block mr-4 ${
                i === 1 || i === 2 ? "gradient-text" : "text-text-primary"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-8 text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
        >
          A three-person studio specializing in premium web apps, stunning
          interfaces, and rock-solid backends. We turn your vision into
          production-ready reality.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/contact" size="lg">
            Hire Us
            <ArrowRight size={16} />
          </Button>
          <Button href="/team" variant="outline" size="lg">
            View Our Work
          </Button>
        </motion.div>

        {/* Stats ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "3", label: "Expert Team Members" },
            { value: "99%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-heading font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-xs text-text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent z-10" />
    </section>
  );
}
