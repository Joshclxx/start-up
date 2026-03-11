"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { Send, Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" id="contact" aria-label="Contact">
      {/* Decorative glows */}
      <div className="glow-violet -bottom-32 left-1/4" />
      <div className="glow-mint -bottom-20 right-1/4 opacity-40" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Let's Build Something"
          subtitle="Have a project in mind? Drop us a line and let's talk about bringing your idea to life."
        />

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div>
            <label htmlFor="cta-name" className="block text-sm text-text-muted mb-2">
              Name
            </label>
            <input
              id="cta-name"
              type="text"
              placeholder="Your name"
              required
              className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="cta-email" className="block text-sm text-text-muted mb-2">
              Email
            </label>
            <input
              id="cta-email"
              type="email"
              placeholder="your@email.com"
              required
              className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="cta-type" className="block text-sm text-text-muted mb-2">
              Project Type
            </label>
            <select
              id="cta-type"
              className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
            >
              <option value="">Select a service</option>
              <option>Web App Development</option>
              <option>UI/UX Design</option>
              <option>API & Backend</option>
              <option>Full-Stack Project</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="cta-message" className="block text-sm text-text-muted mb-2">
              Message
            </label>
            <textarea
              id="cta-message"
              rows={4}
              placeholder="Tell us about your project..."
              required
              className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors resize-none"
            />
          </div>
          <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button type="submit" size="lg">
              {submitted ? "Message Sent! ✓" : "Send Message"}
              {!submitted && <Send size={14} />}
            </Button>

            <div className="flex items-center gap-3">
              <span className="text-xs text-text-muted">Or find us on</span>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-border bg-surface flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
