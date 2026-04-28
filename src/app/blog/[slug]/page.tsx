import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const posts = await getAllPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post, metadata } = await import(
    `@/content/blog/${slug}.mdx`
  );

  return (
    <main className="section-padding min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-text-muted hover:text-accent-blue transition-colors text-sm font-mono mb-8"
        >
          &larr; Back to Blog
        </Link>

        {/* Article header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-text-muted text-sm font-mono">
              {new Date(metadata.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="text-border">|</span>
            <span className="text-text-muted text-sm font-mono">
              {metadata.readingTime}
            </span>
          </div>

          <h1 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {metadata.title}
          </h1>

          <p className="text-text-secondary text-lg leading-relaxed mb-4">
            {metadata.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {metadata.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent-purple/10 text-accent-purple"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </header>

        {/* MDX Content */}
        <article>
          <Post />
        </article>

        {/* Footer nav */}
        <div className="mt-12 pt-8 border-t border-border flex justify-between">
          <Link
            href="/blog"
            className="text-text-muted hover:text-accent-blue transition-colors text-sm font-mono"
          >
            &larr; All Posts
          </Link>
          <Link
            href="/#contact"
            className="text-text-muted hover:text-accent-blue transition-colors text-sm font-mono"
          >
            Get in Touch &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
