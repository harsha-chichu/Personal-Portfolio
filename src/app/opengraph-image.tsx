import { ImageResponse } from "next/og";

export const alt = "Harsha vardhan — AI Engineer & Freelancer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0f",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gradient accent */}
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
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent 70%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: "#3b82f6",
              fontWeight: 500,
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              background: "linear-gradient(135deg, #e4e4e7, #ffffff)",
              backgroundClip: "text",
              color: "transparent",
              lineHeight: 1.1,
            }}
          >
            Harsha vardhan
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#a1a1aa",
              fontWeight: 400,
            }}
          >
            AI Engineer & Freelancer
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#71717a",
            fontSize: "16px",
          }}
        >
          <span>harshavardhan.dev</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
