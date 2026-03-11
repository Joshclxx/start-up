import ProjectCard from "@/components/team/ProjectCard";
import type { Portfolio } from "@/data/team";

interface PortfolioGridProps {
  projects: Portfolio[];
}

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {projects.map((project, i) => (
        <ProjectCard key={project.title} project={project} index={i} />
      ))}
    </div>
  );
}
