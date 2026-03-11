import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { team } from "@/data/team";
import ProfileHeader from "@/components/team/ProfileHeader";
import SkillBadge from "@/components/team/SkillBadge";
import PortfolioGrid from "@/components/team/PortfolioGrid";
import CertificateCard from "@/components/team/CertificateCard";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) return { title: "Not Found" };
  return {
    title: `${member.name} — ${member.role}`,
    description: member.bio,
  };
}

export default async function ProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  return (
    <article>
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          href="/team"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Team
        </Link>
      </div>

      {/* Profile Header */}
      <ProfileHeader member={member} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-20">
        {/* About */}
        <section aria-label="About">
          <h2 className="font-heading font-bold text-2xl text-text-primary mb-4">
            About Me
          </h2>
          <p className="text-text-muted leading-relaxed">{member.bio}</p>
        </section>

        {/* Tech Stack */}
        <section aria-label="Skills">
          <h2 className="font-heading font-bold text-2xl text-text-primary mb-6">
            Tech Stack & Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {member.techStack.map((skill, i) => (
              <SkillBadge key={skill} skill={skill} index={i} />
            ))}
          </div>
        </section>

        {/* Portfolio */}
        <section aria-label="Portfolio">
          <SectionTitle
            title="Portfolio"
            subtitle="Selected projects showcasing my work."
            align="left"
          />
          <PortfolioGrid projects={member.portfolio} />
        </section>

        {/* Certificates */}
        {member.certificates.length > 0 && (
          <section aria-label="Certificates">
            <h2 className="font-heading font-bold text-2xl text-text-primary mb-6">
              Certificates & Credentials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {member.certificates.map((cert, i) => (
                <CertificateCard
                  key={cert.title}
                  certificate={cert}
                  index={i}
                />
              ))}
            </div>
          </section>
        )}

        {/* Services */}
        <section aria-label="Services">
          <h2 className="font-heading font-bold text-2xl text-text-primary mb-6">
            Services I Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {member.services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-surface/50 hover:border-accent/30 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span className="text-sm text-text-primary">{service}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 rounded-2xl border border-border bg-surface/30">
          <h2 className="font-heading font-bold text-2xl text-text-primary mb-3">
            Want to work with {member.name.split(" ")[0]}?
          </h2>
          <p className="text-text-muted mb-6">
            Let&apos;s discuss your project and make it happen.
          </p>
          <Button href="/contact" size="lg">
            <Mail size={16} />
            Work With Me
          </Button>
        </section>
      </div>
    </article>
  );
}
