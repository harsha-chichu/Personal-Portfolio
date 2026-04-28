import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles about AI, deep learning, machine learning, and software engineering.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="section-padding min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue mb-4 block">
            {"// "}Blog
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Latest Articles
          </h1>
          <div className="mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple" />
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto text-lg">
            Thoughts on AI, deep learning, and building intelligent systems
          </p>
        </div>

        {/* Posts */}
        {posts.length === 0 ? (
          <p className="text-text-muted text-center">No posts yet. Check back soon!</p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <article className="glass rounded-xl p-6 sm:p-8 hover:bg-glass-hover transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                    <h2 className="font-heading text-xl sm:text-2xl font-semibold text-text-primary group-hover:text-accent-blue transition-colors">
                      {post.title}
                    </h2>
                    <span className="text-text-muted text-sm font-mono shrink-0">
                      {post.readingTime}
                    </span>
                  </div>

                  <p className="text-text-secondary text-sm sm:text-base mb-4 leading-relaxed">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-text-muted text-xs font-mono">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="text-border">|</span>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent-purple/10 text-accent-purple"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

        {/* Back to home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="text-text-muted hover:text-accent-blue transition-colors text-sm font-mono"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
