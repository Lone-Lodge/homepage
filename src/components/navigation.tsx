"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "motion/react";
import { ease, stagger } from "@/lib/motion";
import { LanguageSwitcher } from "./language-switcher";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "open", label: "Open" },
  { id: "consulting", label: "Consulting" },
  { id: "contact", label: "Contact" },
] as const;

const SCROLL_OFFSET = 100;
const NAV_HEIGHT = 64;

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";

  useEffect(() => setMounted(true), []);
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 20));

  const syncActive = useCallback(() => {
    if (!isHome) return;
    const y = window.scrollY + SCROLL_OFFSET;
    for (const { id } of NAV_ITEMS) {
      const el = document.getElementById(id);
      if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
        setActiveSection(id);
        break;
      }
    }
  }, [isHome]);

  useEffect(() => {
    if (!isHome) return;
    window.addEventListener("scroll", syncActive, { passive: true });
    syncActive();
    return () => window.removeEventListener("scroll", syncActive);
  }, [syncActive, isHome]);

  const scrollTo = (id: string) => {
    if (!isHome) {
      // On a subpage, send the user back to the home page section.
      window.location.href = `/homepage/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - NAV_HEIGHT, behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-[var(--ll-fg-1)] focus:text-[var(--ll-bg-0)] focus:rounded"
      >
        Skip to content
      </a>

      <motion.nav
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{
          borderColor: scrolled ? "var(--ll-border-1)" : "transparent",
          backgroundColor: scrolled
            ? "color-mix(in srgb, var(--ll-bg-0) 80%, transparent)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          transition: "background-color 200ms var(--ll-ease), border-color 200ms var(--ll-ease)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo + wordmark */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Lone Lodge Studios — home"
            >
              <span className="relative w-7 h-7 rounded-[6px] overflow-hidden shrink-0">
                <Image
                  src="/homepage/logo.png"
                  alt=""
                  fill
                  sizes="28px"
                  className="object-cover"
                />
              </span>
              <span className="text-sm font-medium tracking-[-0.012em] text-[var(--ll-fg-1)]">
                Lone Lodge Studios
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative text-sm transition-colors ${
                    activeSection === item.id && isHome
                      ? "text-[var(--ll-fg-1)]"
                      : "text-[var(--ll-fg-3)] hover:text-[var(--ll-fg-1)]"
                  }`}
                  style={{ transitionDuration: "var(--ll-dur-fast)" }}
                >
                  {item.label}
                  {activeSection === item.id && isHome && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-[21px] left-0 right-0 h-px"
                      style={{ background: "var(--ll-ember)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher compact />
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-[var(--ll-bg-2)] transition-colors"
                  style={{ transitionDuration: "var(--ll-dur-fast)" }}
                  aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={theme}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {theme === "dark" ? (
                        <Sun className="w-4 h-4" />
                      ) : (
                        <Moon className="w-4 h-4" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </button>
              )}
            </div>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-9 h-9"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: "var(--ll-bg-0)" }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * stagger.normal, ease: ease.outSmooth }}
                  className={`text-2xl transition-colors ${
                    activeSection === item.id && isHome
                      ? "text-[var(--ll-fg-1)]"
                      : "text-[var(--ll-fg-3)]"
                  }`}
                  style={{ transitionDuration: "var(--ll-dur-fast)" }}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-6"
              >
                <LanguageSwitcher />
                {mounted && (
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 text-[var(--ll-fg-3)] hover:text-[var(--ll-fg-1)] transition-colors"
                    style={{ transitionDuration: "var(--ll-dur-fast)" }}
                  >
                    {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
