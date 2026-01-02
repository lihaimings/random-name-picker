import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import fs from "fs";
import path from "path";

interface BlogParams {
  params: Promise<{ slug: string }>;
}

const blogPosts: Record<string, { title: string; date: string; readTime: string; category: string }> = {
  "getting-started": {
    title: "Getting Started with Random Name Picker",
    date: "January 2, 2026",
    readTime: "3 min read",
    category: "Guide"
  },
  "fair-random-selection": {
    title: "How We Ensure Fair Random Selection",
    date: "January 1, 2026",
    readTime: "4 min read",
    category: "Technology"
  },
  "creative-uses": {
    title: "10 Creative Ways to Use a Name Picker",
    date: "December 30, 2025",
    readTime: "5 min read",
    category: "Ideas"
  }
};

async function getPostContent(slug: string): Promise<string> {
  try {
    const filePath = path.join(process.cwd(), "public", "blog", `${slug}.md`);
    return fs.readFileSync(filePath, "utf-8");
  } catch {
    return "Content coming soon...";
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: BlogParams) {
  const { slug } = await params;
  const post = blogPosts[slug];
  const content = await getPostContent(slug);

  if (!post) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
        <Link href="/blog" className="text-slate-600 hover:text-slate-700">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container-custom py-16 max-w-3xl">
      <Link href="/blog" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-700 mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Blog
      </Link>

      <article>
        <header className="mb-8">
          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> {post.readTime}
            </span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none prose-slate">
          <div className="whitespace-pre-wrap text-gray-600">{content}</div>
        </div>
      </article>
    </div>
  );
}
