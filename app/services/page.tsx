"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { services, processSteps, faqs } from "@/data/services";
import { ChevronDown, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="py-16 sm:py-24">
      {/* Hero / Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionTitle
          title="Our Services"
          subtitle="From quick landing pages to full-scale platforms — we build whatever your business needs, on commission."
        />
      </section>

      {/* Services Grid */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32"
        aria-label="Service offerings"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="card-glow group p-8 rounded-2xl border border-border bg-surface/50 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-violet/10 flex items-center justify-center mb-5 group-hover:bg-violet/20 transition-colors">
                <service.icon size={22} className="text-violet" />
              </div>

              <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-5 flex-1">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-text-muted"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-accent mt-0.5 shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-border flex items-center justify-between">
                <Badge variant="accent">From {service.startingPrice}</Badge>
                <Button href="/contact" size="sm" variant="ghost">
                  Get Quote
                  <ArrowRight size={12} />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section
        className="py-24 bg-surface/30 mb-32"
        aria-label="Our process"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="How It Works"
            subtitle="Our streamlined process ensures quality at every step."
          />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

            <div className="space-y-8">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="flex gap-6 items-start"
                >
                  <div className="relative z-10 w-12 h-12 rounded-xl bg-bg border border-accent/30 flex items-center justify-center shrink-0">
                    <span className="font-heading font-bold text-accent">
                      {step.step}
                    </span>
                  </div>
                  <div className="pb-8">
                    <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"
        aria-label="Frequently asked questions"
      >
        <SectionTitle
          title="FAQ"
          subtitle="Common questions about working with us."
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="rounded-xl border border-border bg-surface/50 overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer"
                aria-expanded={openFaq === i}
              >
                <span className="font-heading font-medium text-sm text-text-primary pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openFaq === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} className="text-text-muted shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-text-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-3xl text-text-primary mb-4">
          Ready to Start?
        </h2>
        <p className="text-text-muted mb-8">
          Tell us about your project and get a free estimate within 24 hours.
        </p>
        <Button href="/contact" size="lg">
          Get in Touch
          <ArrowRight size={16} />
        </Button>
      </section>
    </div>
  );
}
