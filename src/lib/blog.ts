import fs from "fs";
import path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
}

const POSTS_DIR = path.join(process.cwd(), "src/content/blog");

export async function getAllPosts(): Promise<BlogPost[]> {
  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"));

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".mdx", "");
      const mod = await import(`@/content/blog/${slug}.mdx`);
      return { slug, ...mod.metadata } as BlogPost;
    })
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
