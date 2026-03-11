import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Programming insights, tutorials, and best practices from the J-Warriors team. New posts daily.",
};

export default function BlogPage() {
  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="py-16 sm:py-24" aria-label="Blog">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Blog"
          subtitle="Programming insights, tutorials, and best practices — fresh content generated daily."
        />

        <div className="space-y-6">
          {sortedPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>

        {sortedPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-muted">No blog posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  );
}
