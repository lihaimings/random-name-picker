import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const posts: BlogPost[] = [
  {
    slug: "getting-started",
    title: "Getting Started with Random Name Picker",
    excerpt: "Learn how to use our random name picker for giveaways, classroom activities, and decision making.",
    date: "January 2, 2026",
    readTime: "3 min read",
    category: "Guide"
  },
  {
    slug: "fair-random-selection",
    title: "How We Ensure Fair Random Selection",
    excerpt: "Discover the technology behind our random selection algorithm and why it's truly fair.",
    date: "January 1, 2026",
    readTime: "4 min read",
    category: "Technology"
  },
  {
    slug: "creative-uses",
    title: "10 Creative Ways to Use a Name Picker",
    excerpt: "From classroom games to team building, explore creative ways to use random name selection.",
    date: "December 30, 2025",
    readTime: "5 min read",
    category: "Ideas"
  }
];

export default function BlogPage() {
  return (
    <div className="container-custom py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
          <BookOpen className="w-8 h-8 text-slate-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Tips, guides, and ideas for random name selection
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="card hover:-translate-y-1 transition-transform duration-300">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                {post.category}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              <Link href={`/blog/${post.slug}`} className="hover:text-slate-600 transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            <Link 
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1 text-slate-600 font-medium mt-4 hover:text-slate-700"
            >
              Read more <ArrowRight className="w-4 h-4" />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
