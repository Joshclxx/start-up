import Link from "next/link";
import { Github, Linkedin, Twitter, Dribbble } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Team", href: "/team" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Dribbble, href: "https://dribbble.com", label: "Dribbble" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-violet flex items-center justify-center font-heading font-bold text-bg text-sm">
                JW
              </div>
              <span className="font-heading font-bold text-lg text-text-primary">
                J-Warriors
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm">
              A three-person studio building premium digital experiences.
              We design, develop, and deliver — on commission.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-sm text-text-primary mb-4 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading font-semibold text-sm text-text-primary mb-4 uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} J-Warriors. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Crafted with{" "}
            <span className="text-accent">♥</span> by the team
          </p>
        </div>
      </div>
    </footer>
  );
}
