"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/data/portfolio";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Hey! I'm ${personalInfo.name}'s portfolio assistant. Ask me anything about skills, projects, experience, or services!`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      // Small delay so the panel finishes animating in before focusing
      const t = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Lock body scroll on mobile when chatbot is open (bottom-sheet behaviour)
  useEffect(() => {
    const isMobile = window.innerWidth < 640;
    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const history = [...messages, userMessage].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      const data = await res.json();

      if (data.error) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Sorry, something went wrong. Please try again." },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Couldn't connect. Please try again later." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Mobile backdrop — tap outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm sm:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Floating bot button — safe-area aware on iOS */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{ bottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
        className={cn(
          "fixed right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer",
          isOpen
            ? "bg-surface border border-border rotate-0"
            : "bg-gradient-to-r from-accent-blue to-accent-purple hover:shadow-accent-purple/30 hover:scale-105"
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-primary">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M12 2a8 8 0 0 0-8 8c0 2.5 1.2 4.7 3 6.2V20l3.2-1.6c.6.1 1.2.1 1.8.1a8 8 0 0 0 0-16Z" />
            <circle cx="9.5" cy="10" r="1" fill="currentColor" />
            <circle cx="14.5" cy="10" r="1" fill="currentColor" />
          </svg>
        )}
      </button>

      {/* Chat window
          Mobile  (<sm): full-width bottom sheet anchored to bottom-0
          Desktop (sm+): floating panel anchored to bottom-24 right-6
      */}
      <div
        className={cn(
          // Positioning: mobile = full-width sheet from bottom, desktop = side panel
          "fixed left-4 right-4 bottom-0 z-50",
          "sm:left-auto sm:right-6 sm:bottom-24 sm:w-[380px]",
          // Rounded: mobile = only top corners, desktop = all corners
          "rounded-t-2xl sm:rounded-2xl",
          // Animation origin
          "origin-bottom sm:origin-bottom-right",
          // Show/hide
          "transition-all duration-300",
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-4 opacity-0 pointer-events-none sm:translate-y-0 sm:scale-90"
        )}
      >
        {/* Pull handle — visible on mobile only */}
        <div className="flex justify-center pt-2 pb-1 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-border" />
        </div>

        <div
          data-lenis-prevent
          className="rounded-t-2xl sm:rounded-2xl border border-glass-border bg-surface-95 backdrop-blur-xl shadow-2xl shadow-black/20 overflow-hidden flex flex-col max-h-[85svh] sm:max-h-[480px]"
        >
          {/* Header */}
          <div className="px-4 py-3 border-b border-border flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple flex items-center justify-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M12 2a8 8 0 0 0-8 8c0 2.5 1.2 4.7 3 6.2V20l3.2-1.6c.6.1 1.2.1 1.8.1a8 8 0 0 0 0-16Z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-text-primary">Portfolio Assistant</p>
              <p className="text-xs text-accent-blue">Ask me anything</p>
            </div>
            {/* Close button — extra tap target on mobile */}
            <button
              onClick={() => setIsOpen(false)}
              className="sm:hidden w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-glass-hover transition-colors"
              aria-label="Close chat"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          {/* Messages — flex-1 so they fill available height within the svh cap */}
          <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  "flex",
                  msg.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed",
                    msg.role === "user"
                      ? "bg-gradient-to-r from-accent-blue to-accent-purple text-white rounded-br-sm"
                      : "bg-glass-bg border border-glass-border text-text-secondary rounded-bl-sm"
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-glass-bg border border-glass-border px-4 py-3 rounded-2xl rounded-bl-sm">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-text-muted animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-text-muted animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-text-muted animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input — pb-safe keeps it above iOS home indicator */}
          <div className="p-3 pb-safe sm:pb-3 border-t border-border shrink-0">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about skills, projects..."
                disabled={isLoading}
                className="flex-1 bg-overlay border border-border rounded-xl px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-muted placeholder:opacity-50 focus:outline-none focus:border-accent-blue/50 focus:ring-2 focus:ring-accent-blue/20 transition-all disabled:opacity-50"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="w-10 h-10 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple flex items-center justify-center text-white shrink-0 disabled:opacity-40 hover:shadow-lg hover:shadow-accent-purple/25 transition-all cursor-pointer"
                aria-label="Send message"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 12 14-7-4 7 4 7Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
