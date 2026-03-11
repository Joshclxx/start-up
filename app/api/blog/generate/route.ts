import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const PROGRAMMING_TOPICS = [
  "React hooks patterns and best practices",
  "TypeScript advanced types and utility types",
  "Next.js App Router performance optimization",
  "Node.js streams and event-driven architecture",
  "Python for web scraping and automation",
  "Database indexing strategies for faster queries",
  "Docker containerization for web developers",
  "Git workflow strategies for small teams",
  "CSS Grid vs Flexbox — when to use which",
  "Web accessibility (a11y) essentials",
  "REST vs GraphQL — choosing the right API style",
  "Authentication patterns: JWT, sessions, and OAuth",
  "Tailwind CSS tips and tricks for faster styling",
  "Testing strategies: unit, integration, and e2e",
  "System design basics for frontend developers",
  "WebSocket real-time communication patterns",
  "Serverless functions and edge computing",
  "State management in React: Zustand vs Redux vs Context",
  "Responsive design patterns for modern web apps",
  "Framer Motion animation techniques for React",
  "CI/CD pipelines for JavaScript projects",
  "API rate limiting and caching strategies",
  "Clean code principles for JavaScript developers",
  "Figma to code workflow for designers and developers",
  "PostgreSQL vs MongoDB — choosing the right database",
  "Web performance optimization checklist",
  "Progressive Web Apps (PWA) in 2025",
  "Micro-frontends architecture patterns",
  "Error handling patterns in async JavaScript",
  "Building CLI tools with Node.js",
];

const AUTHORS = ["Joshua Colobong", "Jaylord Soguilon", "Jenelyn Manalo"];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getReadTime(content: string): string {
  const words = content.split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export async function POST(request: Request) {
  try {
    // Verify secret for cron security
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get("secret");
    if (secret !== process.env.CRON_SECRET && process.env.CRON_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY not configured" },
        { status: 500 }
      );
    }

    // Pick a random topic and author
    const topic =
      PROGRAMMING_TOPICS[Math.floor(Math.random() * PROGRAMMING_TOPICS.length)];
    const author = AUTHORS[Math.floor(Math.random() * AUTHORS.length)];
    const today = new Date().toISOString().split("T")[0];

    // Call Gemini API
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

    const prompt = `You are a technical blog writer for a web development agency called J-Warriors. Write a blog post about: "${topic}".

Requirements:
- Title: Create an engaging, SEO-friendly title (not just the topic name)
- Excerpt: Write a 1-2 sentence compelling summary (max 200 chars)
- Content: Write 600-900 words in Markdown format
- Include code examples with proper syntax highlighting (use fenced code blocks with language identifiers)
- Keep tone professional but conversational, like a senior developer explaining to peers
- Include practical, actionable advice
- Use ## for section headings (not #)
- Tags: Suggest 3 relevant tags

Respond in this exact JSON format (no markdown wrapping, just raw JSON):
{
  "title": "Your Blog Title Here",
  "excerpt": "A compelling 1-2 sentence summary.",
  "content": "Full markdown content here...",
  "tags": ["Tag1", "Tag2", "Tag3"]
}`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // Parse JSON from response (handle potential markdown wrapping)
    let cleaned = responseText.trim();
    if (cleaned.startsWith("```")) {
      cleaned = cleaned.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
    }

    const parsed = JSON.parse(cleaned);

    const newPost = {
      slug: slugify(parsed.title) + "-" + today.replace(/-/g, ""),
      title: parsed.title,
      excerpt: parsed.excerpt,
      content: parsed.content,
      date: today,
      author,
      tags: parsed.tags,
      readTime: getReadTime(parsed.content),
    };

    // Read existing blog data file and append new post
    const blogDataPath = path.join(process.cwd(), "data", "blog.ts");
    let fileContent = fs.readFileSync(blogDataPath, "utf-8");

    // Serialize the new post
    const postEntry = `  {
    slug: ${JSON.stringify(newPost.slug)},
    title: ${JSON.stringify(newPost.title)},
    excerpt: ${JSON.stringify(newPost.excerpt)},
    content: ${JSON.stringify(newPost.content)},
    date: ${JSON.stringify(newPost.date)},
    author: ${JSON.stringify(newPost.author)},
    tags: ${JSON.stringify(newPost.tags)},
    readTime: ${JSON.stringify(newPost.readTime)},
  },`;

    // Insert at the beginning of the array (after the opening bracket)
    fileContent = fileContent.replace(
      /export const blogPosts: BlogPost\[\] = \[\n/,
      `export const blogPosts: BlogPost[] = [\n${postEntry}\n`
    );

    fs.writeFileSync(blogDataPath, fileContent, "utf-8");

    return NextResponse.json({
      success: true,
      post: {
        slug: newPost.slug,
        title: newPost.title,
        date: newPost.date,
        author: newPost.author,
      },
    });
  } catch (error) {
    console.error("Blog generation error:", error);
    return NextResponse.json(
      {
        error: "Failed to generate blog post",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// GET handler to manually trigger (for testing)
export async function GET(request: Request) {
  return POST(request);
}
