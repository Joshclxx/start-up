import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import TeamCard from "@/components/team/TeamCard";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the three specialists behind J-Warriors — a frontend developer, backend engineer, and UI/UX designer.",
};

export default function TeamPage() {
  return (
    <section className="py-16 sm:py-24" aria-label="Team overview">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Team"
          subtitle="Three specialists. One studio. Every skill you need to ship a world-class digital product."
        />

        <div className="space-y-6">
          {team.map((member, i) => (
            <TeamCard key={member.slug} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
