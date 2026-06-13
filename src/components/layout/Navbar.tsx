"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { navLinks, personalInfo } from "@/data/portfolio";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";
import ShinyText from "@/components/reactbits/ShinyText";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  // Only pass anchor-based section IDs to scroll spy
  const sectionIds = navLinks
    .filter((l) => l.href.startsWith("#"))
    .map((l) => l.href.replace("#", ""));
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);

    if (isHome) {
      // On home page, smooth scroll to section
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // On other pages, navigate to home with hash
      router.push(`/${href}`);
    }
  };

  const handleRouteClick = () => {
    setMobileOpen(false);
  };

  const isLinkActive = (link: { href: string }) => {
    if (link.href.startsWith("#")) {
      return isHome && activeSection === link.href.replace("#", "");
    }
    return pathname.startsWith(link.href);
  };

  return (
    <>
      {/* Always-visible sticky navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-4">
          <div
            className={cn(
              "flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300",
              scrolled
                ? "bg-navbar-bg backdrop-blur-xl backdrop-saturate-150 border border-glass-border shadow-lg shadow-black/10"
                : "bg-transparent"
            )}
          >
            {/* Logo — clicks scroll to #hero */}
            <a
              href="#hero"
              onClick={(e) => handleAnchorClick(e, "#hero")}
              className="font-heading text-xl font-bold shrink-0"
            >
              <ShinyText
                text={`${personalInfo.name.split(" ")[0]}.`}
                speed={3}
                color="#a1a1aa"
                shineColor="#8b5cf6"
                className="font-heading text-xl font-bold"
              />
            </a>

            {/* Desktop Links - centered pill group */}
            <div className="hidden lg:flex items-center gap-1 bg-glass-bg rounded-xl px-2 py-1.5 border border-glass-border">
              {navLinks.map((link) => {
                const isAnchor = link.href.startsWith("#");
                const active = isLinkActive(link);

                if (isAnchor) {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className={cn(
                        "relative text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-300",
                        active
                          ? "text-white"
                          : "text-text-secondary hover:text-text-primary"
                      )}
                    >
                      {active && (
                        <span className="absolute inset-0 rounded-lg bg-linear-to-r from-accent-blue/80 to-accent-purple/80 -z-10" />
                      )}
                      {link.label}
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleRouteClick}
                    className={cn(
                      "relative text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-300",
                      active
                        ? "text-white"
                        : "text-text-secondary hover:text-text-primary"
                    )}
                  >
                    {active && (
                      <span className="absolute inset-0 rounded-lg bg-linear-to-r from-accent-blue/80 to-accent-purple/80 -z-10" />
                    )}
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Resume button + Theme toggle (desktop) */}
            <div className="hidden lg:flex items-center gap-2">
              <ThemeToggle />
              <a
                href={personalInfo.resume}
                download="Harshavardhan_Resume.pdf"
                className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-lg bg-linear-to-r from-accent-blue to-accent-purple text-white hover:shadow-lg hover:shadow-accent-purple/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Resume
              </a>
            </div>

            {/* Mobile: Theme toggle + Hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-glass-hover transition-colors"
                aria-label="Toggle menu"
              >
                <div className="relative w-5 h-4 flex flex-col justify-between">
                  <span
                    className={cn(
                      "block w-full h-0.5 rounded-full bg-text-primary transition-all duration-300 origin-center",
                      mobileOpen && "rotate-45 translate-y-1.75"
                    )}
                  />
                  <span
                    className={cn(
                      "block w-3 h-0.5 rounded-full bg-text-primary transition-all duration-300 ml-auto",
                      mobileOpen && "opacity-0 w-0"
                    )}
                  />
                  <span
                    className={cn(
                      "block w-full h-0.5 rounded-full bg-text-primary transition-all duration-300 origin-center",
                      mobileOpen && "-rotate-45 -translate-y-1.75"
                    )}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full screen overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-500",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background-95 backdrop-blur-xl"
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu content */}
        <div className="relative h-full flex flex-col items-center justify-center gap-0.5 sm:gap-2 px-8">
          {navLinks.map((link, i) => {
            const isAnchor = link.href.startsWith("#");
            const active = isLinkActive(link);
            const className = cn(
              "text-2xl sm:text-3xl font-heading font-semibold py-3 transition-all duration-300",
              mobileOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0",
              active
                ? "gradient-text"
                : "text-text-secondary hover:text-text-primary"
            );
            const style = {
              transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms",
            };

            if (isAnchor) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className={className}
                  style={style}
                >
                  {link.label}
                </a>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleRouteClick}
                className={className}
                style={style}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Resume link in mobile menu */}
          <div
            className={cn(
              "mt-6 flex items-center gap-4 transition-all duration-300",
              mobileOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            )}
            style={{
              transitionDelay: mobileOpen ? `${navLinks.length * 50}ms` : "0ms",
            }}
          >
            <a
              href={personalInfo.resume}
              download="Harshavardhan_Resume.pdf"
              className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full bg-linear-to-r from-accent-blue to-accent-purple text-white transition-all duration-300"
            >
              Download Resume
            </a>
          </div>

          {/* Social links at bottom of mobile menu */}
          <div
            className={cn(
              "absolute bottom-12 flex items-center gap-6 transition-all duration-300",
              mobileOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            )}
            style={{
              transitionDelay: mobileOpen ? `${(navLinks.length + 1) * 50}ms` : "0ms",
            }}
          >
            {personalInfo.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-blue transition-colors text-sm"
              >
                {social.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
