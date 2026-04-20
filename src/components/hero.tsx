"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ease, duration, stagger } from "@/lib/motion";
import type { Site } from "@/lib/schemas";
import { HeroGlow } from "./hero-glow";

function Typewriter({ text, delay }: { text: string; delay: number }) {
  const [visible, setVisible] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started || visible >= text.length) return;
    const id = setTimeout(() => setVisible((v) => v + 1), 38);
    return () => clearTimeout(id);
  }, [started, visible, text.length]);

  return (
    <span aria-label={text}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="transition-opacity duration-150"
          style={{ opacity: i < visible ? 1 : 0 }}
          aria-hidden="true"
        >
          {char}
        </span>
      ))}
    </span>
  );
}

export function Hero({ hero }: { hero: Site["hero"] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -60]);

  useEffect(() => {
    const id = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(id);
  }, []);

  const words = hero.headline.replace(/\.$/, "").split(" ");
  const headlineEnd = 0.3 + words.length * stagger.normal + 0.2;

  return (
    <section
      ref={sectionRef}
      id="home"
      aria-label="Introduction"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden"
    >
      <HeroGlow sectionRef={sectionRef} />

      <motion.div className="max-w-4xl w-full relative z-10" style={{ opacity, y }}>
        <div className="space-y-6">
          {/* Ember-dot eyebrow */}
          <motion.div
            className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[var(--ll-fg-3)]"
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ duration: duration.slow, delay: 0.1 }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--ll-ember)" }}
              aria-hidden="true"
            />
            <span>{hero.eyebrow}</span>
          </motion.div>

          <h1
            className="text-5xl md:text-7xl leading-[1.05] font-[590] text-[var(--ll-fg-1)]"
            style={{ letterSpacing: "var(--ll-track-tight)" }}
            aria-label={hero.headline}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.3em]"
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={ready ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{
                  duration: duration.reveal,
                  delay: 0.3 + i * stagger.normal,
                  ease: ease.out,
                }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              className="inline-block"
              initial={{ opacity: 0 }}
              animate={ready ? { opacity: 1 } : {}}
              transition={{
                duration: duration.fast,
                delay: 0.3 + words.length * stagger.normal,
              }}
            >
              .
            </motion.span>
          </h1>

          <p
            className="text-lg md:text-xl text-[var(--ll-fg-2)] max-w-2xl"
            style={{ lineHeight: 1.65 }}
          >
            {ready && <Typewriter text={hero.subline} delay={headlineEnd} />}
          </p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-3 pt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: duration.slow, delay: headlineEnd + 1.2, ease: ease.out }}
          >
            <a
              href={hero.ctaPrimary.href}
              className="inline-flex items-center px-5 h-10 rounded-[8px] text-sm font-medium transition-colors"
              style={{
                background: "var(--ll-ember)",
                color: "var(--ll-ember-fg)",
                transitionDuration: "var(--ll-dur-fast)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--ll-ember-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--ll-ember)")}
            >
              {hero.ctaPrimary.label}
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="inline-flex items-center px-5 h-10 rounded-[8px] text-sm font-medium border transition-colors"
              style={{
                borderColor: "var(--ll-border-2)",
                color: "var(--ll-fg-2)",
                transitionDuration: "var(--ll-dur-fast)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--ll-fg-1)";
                e.currentTarget.style.borderColor = "var(--ll-border-3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--ll-fg-2)";
                e.currentTarget.style.borderColor = "var(--ll-border-2)";
              }}
            >
              {hero.ctaSecondary.label}
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-[-140px] left-0 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ delay: headlineEnd + 1.8, duration: 0.8 }}
        >
          <span className="text-[10px] tracking-[0.3em] text-[var(--ll-fg-4)] uppercase">
            scroll
          </span>
          <motion.div
            className="w-px h-16 origin-top"
            style={{ background: "var(--ll-fg-4)" }}
            animate={{ scaleY: [0, 1, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 0.8,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
