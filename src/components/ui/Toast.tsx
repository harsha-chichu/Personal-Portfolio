"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ToastProps {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
}

export function Toast({ message, type = "success", onClose }: ToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger enter animation
    const enter = setTimeout(() => setVisible(true), 10);
    // Auto-dismiss after 4s
    const dismiss = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, 4000);

    return () => {
      clearTimeout(enter);
      clearTimeout(dismiss);
    };
  }, [onClose]);

  return (
    <div
      className={cn(
        "fixed bottom-24 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl border transition-all duration-300",
        type === "success"
          ? "bg-surface border-green-500/20 shadow-green-500/10"
          : "bg-surface border-red-500/20 shadow-red-500/10",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      {type === "success" ? (
        <span className="w-5 h-5 rounded-full bg-green-500/15 flex items-center justify-center shrink-0">
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l3 3 5-5" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      ) : (
        <span className="w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center shrink-0">
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M3 3l6 6M9 3l-6 6" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </span>
      )}
      <p className="text-sm text-text-primary font-medium">{message}</p>
    </div>
  );
}
