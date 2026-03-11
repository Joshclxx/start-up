import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our commission-based services: web app development, UI/UX design, API & backend solutions, and full-stack projects.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
