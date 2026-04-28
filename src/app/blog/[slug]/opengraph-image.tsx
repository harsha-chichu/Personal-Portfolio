import { ImageResponse } from "next/og";

export const alt = "Blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let title = "Blog Post";
  let description = "";

  try {
    const mod = await import(`@/content/blog/${slug}.mdx`);
    title = mod.metadata?.title || title;
    description = mod.metadata?.description || description;
  } catch {
    // fallback to defaults
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          background: "#0a0a0f",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top gradient bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)",
          }}
        />

        {/* Corner glow */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.25), transparent 70%)",
          }}
        />

        {/* Blog label */}
        <div
          style={{
            fontSize: "16px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#3b82f6",
            fontWeight: 500,
            marginBottom: "24px",
          }}
        >
          Blog
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "48px",
            fontWeight: 700,
            color: "#e4e4e7",
            lineHeight: 1.2,
            marginBottom: "16px",
            maxWidth: "900px",
          }}
        >
          {title}
        </div>

        {/* Description */}
        {description && (
          <div
            style={{
              fontSize: "20px",
              color: "#a1a1aa",
              lineHeight: 1.5,
              maxWidth: "800px",
            }}
          >
            {description}
          </div>
        )}

        {/* Bottom author */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span style={{ color: "#71717a", fontSize: "16px" }}>
            Harsha vardhan
          </span>
          <span style={{ color: "#3b3b4f" }}>|</span>
          <span style={{ color: "#71717a", fontSize: "16px" }}>
            harshavardhan.dev
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
