"use client";

import { useRef, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ease } from "@/lib/motion";

interface ExpandableCardProps {
  preview: ReactNode;
  details?: ReactNode;
}

export function ExpandableCard({ preview, details }: ExpandableCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const expandable = !!details;

  const toggle = () => {
    if (!expandable) return;
    const willOpen = !open;
    setOpen(willOpen);
    if (willOpen) {
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 350);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" && open) {
      e.preventDefault();
      setOpen(false);
    }
    if ((e.key === "Enter" || e.key === " ") && expandable) {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div
      ref={cardRef}
      className="border-b"
      style={{ borderColor: "var(--ll-border-1)" }}
    >
      <div
        onClick={toggle}
        role={expandable ? "button" : undefined}
        tabIndex={expandable ? 0 : undefined}
        onKeyDown={handleKeyDown}
        aria-expanded={expandable ? open : undefined}
        className={`py-8 px-6 -mx-6 ${
          expandable ? "cursor-pointer group transition-colors" : ""
        }`}
        style={expandable ? { transitionDuration: "var(--ll-dur-med)" } : undefined}
        onMouseEnter={(e) => {
          if (!expandable) return;
          e.currentTarget.style.background = "var(--ll-bg-2)";
        }}
        onMouseLeave={(e) => {
          if (!expandable) return;
          e.currentTarget.style.background = "transparent";
        }}
      >
        <div className="relative flex items-start justify-between gap-6">
          <div className="flex-1 min-w-0">{preview}</div>
          {expandable && (
            <div className="shrink-0">
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.22, ease: ease.out }}
              >
                <ChevronDown className="w-4 h-4 text-[var(--ll-fg-3)] group-hover:text-[var(--ll-fg-1)] transition-colors" />
              </motion.div>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: ease.inOut }}
            className="overflow-hidden"
          >
            <div className="px-6 -mx-6 pb-8 space-y-4 text-[var(--ll-fg-2)]">
              {details}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
