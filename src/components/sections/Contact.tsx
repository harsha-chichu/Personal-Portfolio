"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { personalInfo } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradientBlob } from "@/components/ui/GradientBlob";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import StarBorder from "@/components/reactbits/StarBorder";
import { Toast } from "@/components/ui/Toast";

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.from(".contact-info", {
        opacity: 0,
        x: -40,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".contact-form", {
        opacity: 0,
        x: 40,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    },
    { scope: sectionRef }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Client-side validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus("error");
      setErrorMessage("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    if (formData.message.length < 10) {
      setStatus("error");
      setErrorMessage("Message must be at least 10 characters.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          from_name: formData.name,
          replyto: formData.email,
          subject: `[Portfolio] ${formData.subject}`,
          message: `From: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong.");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setToast({ message: "Message sent! I'll get back to you soon.", type: "success" });

      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
      setToast({ message: "Failed to send message. Please try again.", type: "error" });
    }
  };

  const inputClasses =
    "w-full bg-overlay border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted placeholder:opacity-50 focus:outline-none focus:border-accent-blue/50 focus:ring-2 focus:ring-accent-blue/20 transition-all disabled:opacity-50";
  const isDisabled = status === "loading";

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    <section id="contact" ref={sectionRef} className="relative section-padding overflow-hidden">
      <GradientBlob color="cyan" size="400px" className="-left-40 bottom-0 opacity-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          label="Contact"
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you"
        />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div className="contact-info">
            <h3 className="font-heading text-2xl font-semibold text-text-primary mb-4">
              Let&apos;s work together
            </h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Whether you need an AI solution, want to discuss research
              collaboration, or have a freelance project — I&apos;m always open
              to new opportunities and interesting conversations.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                  &#9993;
                </span>
                <div>
                  <p className="text-text-muted text-xs">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-text-primary hover:text-accent-blue transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-accent-purple/10 flex items-center justify-center text-accent-purple">
                  &#128205;
                </span>
                <div>
                  <p className="text-text-muted text-xs">Location</p>
                  <p className="text-text-primary">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {personalInfo.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-text-muted hover:text-accent-blue transition-colors text-sm"
                >
                  {social.platform.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="contact-form">
            <SpotlightCard
              spotlightColor="rgba(6, 182, 212, 0.1)"
              className="p-5 sm:p-8"
            >
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-text-muted text-xs mb-2 font-mono">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isDisabled}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-text-muted text-xs mb-2 font-mono">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isDisabled}
                      className={inputClasses}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-text-muted text-xs mb-2 font-mono">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isDisabled}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-text-muted text-xs mb-2 font-mono">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isDisabled}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <StarBorder
                  as="button"
                  type="submit"
                  disabled={isDisabled}
                  className={`w-full cursor-pointer ${isDisabled ? "opacity-60 pointer-events-none" : ""}`}
                  color="rgba(139, 92, 246, 0.8)"
                  speed="5s"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </StarBorder>

                {/* Status messages */}
                {status === "success" && (
                  <p className="text-green-400 text-sm text-center font-medium">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                )}
                {status === "error" && errorMessage && (
                  <p className="text-red-400 text-sm text-center font-medium">
                    {errorMessage}
                  </p>
                )}
              </form>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
