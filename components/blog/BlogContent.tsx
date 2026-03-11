"use client";

import { motion } from "framer-motion";

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  // Simple markdown-ish renderer for blog content
  // Handles: headings, code blocks, paragraphs, bold, inline code, lists
  const renderContent = (raw: string) => {
    const lines = raw.split("\n");
    const elements: React.ReactNode[] = [];
    let i = 0;
    let key = 0;

    while (i < lines.length) {
      const line = lines[i];

      // Code blocks
      if (line.trim().startsWith("```")) {
        const lang = line.trim().replace("```", "").trim();
        const codeLines: string[] = [];
        i++;
        while (i < lines.length && !lines[i].trim().startsWith("```")) {
          codeLines.push(lines[i]);
          i++;
        }
        i++; // skip closing ```
        elements.push(
          <div
            key={key++}
            className="my-6 rounded-xl bg-[#0d0d14] border border-border overflow-x-auto"
          >
            {lang && (
              <div className="px-4 py-2 border-b border-border text-xs text-text-muted font-mono">
                {lang}
              </div>
            )}
            <pre className="p-4 text-sm text-text-primary font-mono leading-relaxed overflow-x-auto">
              <code>{codeLines.join("\n")}</code>
            </pre>
          </div>
        );
        continue;
      }

      // Headings
      if (line.startsWith("### ")) {
        elements.push(
          <h3
            key={key++}
            className="font-heading font-semibold text-lg text-text-primary mt-10 mb-4"
          >
            {line.replace("### ", "")}
          </h3>
        );
        i++;
        continue;
      }

      if (line.startsWith("## ")) {
        elements.push(
          <h2
            key={key++}
            className="font-heading font-bold text-2xl text-text-primary mt-12 mb-4"
          >
            {line.replace("## ", "")}
          </h2>
        );
        i++;
        continue;
      }

      // Bold lines (e.g., **1. Something**)
      if (line.trim().startsWith("**") && line.trim().endsWith("**")) {
        elements.push(
          <p
            key={key++}
            className="font-semibold text-text-primary mt-6 mb-2"
          >
            {line.trim().replace(/\*\*/g, "")}
          </p>
        );
        i++;
        continue;
      }

      // List items
      if (line.trim().startsWith("- ")) {
        const listItems: string[] = [];
        while (i < lines.length && lines[i].trim().startsWith("- ")) {
          listItems.push(lines[i].trim().replace("- ", ""));
          i++;
        }
        elements.push(
          <ul key={key++} className="my-4 space-y-2 pl-4">
            {listItems.map((item, j) => (
              <li
                key={j}
                className="text-text-muted leading-relaxed flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
              </li>
            ))}
          </ul>
        );
        continue;
      }

      // Empty lines
      if (line.trim() === "") {
        i++;
        continue;
      }

      // Regular paragraphs
      elements.push(
        <p
          key={key++}
          className="text-text-muted leading-relaxed my-4"
          dangerouslySetInnerHTML={{ __html: formatInline(line) }}
        />
      );
      i++;
    }

    return elements;
  };

  // Format inline markdown (bold, inline code)
  const formatInline = (text: string): string => {
    return text
      .replace(
        /`([^`]+)`/g,
        '<code class="px-1.5 py-0.5 rounded bg-surface border border-border text-accent text-sm font-mono">$1</code>'
      )
      .replace(
        /\*\*([^*]+)\*\*/g,
        '<strong class="text-text-primary font-semibold">$1</strong>'
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="prose-custom"
    >
      {renderContent(content)}
    </motion.div>
  );
}
