import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="glow-mint top-1/3 left-1/4" />
      <div className="glow-violet top-1/2 right-1/4" />

      <div className="relative z-10 text-center px-4">
        {/* Large 404 */}
        <h1 className="font-heading font-bold text-[8rem] sm:text-[12rem] leading-none gradient-text opacity-30 select-none">
          404
        </h1>

        <div className="-mt-10 sm:-mt-14">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-primary mb-4">
            Page Not Found
          </h2>
          <p className="text-text-muted max-w-md mx-auto mb-8">
            Looks like this page got lost in the void. Let&apos;s get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/" size="lg">
              <Home size={16} />
              Go Home
            </Button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
            >
              <ArrowLeft size={14} />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
