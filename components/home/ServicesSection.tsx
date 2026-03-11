"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section
      className="py-24 sm:py-32 bg-surface/30"
      id="services"
      aria-label="Services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="What We Build"
          subtitle="From concept to deployment — we handle design, frontend, and backend as one team."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-glow group relative p-8 rounded-2xl border border-border bg-bg overflow-hidden"
            >
              {/* Hover glow accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-violet/10 flex items-center justify-center mb-5 group-hover:bg-violet/20 transition-colors">
                  <service.icon size={22} className="text-violet" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="text-xs text-accent font-semibold">
                  Starting from {service.startingPrice}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button href="/services" variant="outline">
            View All Services
            <ArrowRight size={14} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
