import type { Metadata } from "next";
import { inter, spaceGrotesk, jetbrainsMono } from "@/lib/fonts";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Footer } from "@/components/layout/Footer";
import { Chatbot } from "@/components/ui/Chatbot";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://harshavardhan.dev"),
  title: {
    default: "Harsha vardhan | AI Engineer & Freelancer",
    template: "%s | Harsha vardhan",
  },
  description:
    "Personal portfolio of Harsha vardhan — AI Engineer, Deep Learning Researcher, and Freelancer. Specializing in computer vision, NLP, and building intelligent systems.",
  keywords: [
    "AI Engineer",
    "Deep Learning",
    "Machine Learning",
    "Portfolio",
    "Freelancer",
    "AI Developer",
    "Researcher",
  ],
  authors: [{ name: "Harsha vardhan" }],
  creator: "Harsha vardhan",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Harsha vardhan | AI Engineer",
    title: "Harsha vardhan | AI Engineer & Freelancer",
    description:
      "AI Engineer, Deep Learning Researcher, and Freelancer. Building intelligent systems that push the boundaries of what's possible.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsha vardhan | AI Engineer & Freelancer",
    description:
      "AI Engineer, Deep Learning Researcher, and Freelancer. Building intelligent systems that push the boundaries of what's possible.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-text-primary font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Harsha vardhan",
              jobTitle: "AI Engineer & Freelancer",
              url: "https://harshavardhan.dev",
              email: "harshachinnu129@gmail.com",
              knowsAbout: [
                "Artificial Intelligence",
                "Deep Learning",
                "Computer Vision",
                "Natural Language Processing",
                "Machine Learning",
              ],
            }),
          }}
        />
        <ThemeProvider>
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
