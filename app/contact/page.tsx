"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { team } from "@/data/team";
import { Send, MapPin, Mail, Clock } from "lucide-react";

const budgetRanges = [
  "Under $1,000",
  "$1,000 - $3,000",
  "$3,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
];

const timelines = [
  "ASAP",
  "Within 2 weeks",
  "Within 1 month",
  "Within 3 months",
  "No rush",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Let's Talk"
          subtitle="Tell us about your project. We'll get back to you within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading font-semibold text-lg text-text-primary mb-6">
                Get in Touch
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary">
                      Email
                    </div>
                    <div className="text-sm text-text-muted">
                      hello@j-warriors.dev
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-violet/10 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-violet" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary">
                      Location
                    </div>
                    <div className="text-sm text-text-muted">
                      Remote — Worldwide
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary">
                      Response Time
                    </div>
                    <div className="text-sm text-text-muted">
                      Within 24 hours
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Available badge */}
            <div className="p-5 rounded-xl border border-accent/20 bg-accent/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                </span>
                <span className="text-sm font-medium text-accent">
                  Currently Available
                </span>
              </div>
              <p className="text-xs text-text-muted">
                We&apos;re taking on new projects. Typical turnaround: 1-8 weeks.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm text-text-muted mb-2"
                >
                  Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm text-text-muted mb-2"
                >
                  Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                />
              </div>
            </div>

            {/* Service select */}
            <div>
              <label
                htmlFor="contact-service"
                className="block text-sm text-text-muted mb-2"
              >
                What do you need? *
              </label>
              <select
                id="contact-service"
                required
                className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
              >
                <option value="">Select a service</option>
                <option>Web App Development</option>
                <option>UI/UX Design</option>
                <option>API & Backend</option>
                <option>Full-Stack Project</option>
                <option>Mobile-First Solutions</option>
                <option>Security & Performance Audit</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Budget */}
              <div>
                <label
                  htmlFor="contact-budget"
                  className="block text-sm text-text-muted mb-2"
                >
                  Budget Range
                </label>
                <select
                  id="contact-budget"
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                >
                  <option value="">Select budget</option>
                  {budgetRanges.map((range) => (
                    <option key={range}>{range}</option>
                  ))}
                </select>
              </div>

              {/* Timeline */}
              <div>
                <label
                  htmlFor="contact-timeline"
                  className="block text-sm text-text-muted mb-2"
                >
                  Timeline
                </label>
                <select
                  id="contact-timeline"
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                >
                  <option value="">Select timeline</option>
                  {timelines.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Team member select */}
            <div>
              <label
                htmlFor="contact-member"
                className="block text-sm text-text-muted mb-2"
              >
                Who do you want to work with?
              </label>
              <select
                id="contact-member"
                className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
              >
                <option value="">Whole team / Not sure</option>
                {team.map((m) => (
                  <option key={m.slug} value={m.slug}>
                    {m.name} — {m.role}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm text-text-muted mb-2"
              >
                Tell us about your project *
              </label>
              <textarea
                id="contact-message"
                rows={5}
                required
                placeholder="Describe your project, goals, and any specific requirements..."
                className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors resize-none"
              />
            </div>

            <Button type="submit" size="lg" className="w-full sm:w-auto">
              {submitted ? "Message Sent! ✓" : "Send Message"}
              {!submitted && <Send size={14} />}
            </Button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
