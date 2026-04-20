"use client";

import { useEffect, useRef } from "react";

// Mouse-follow glow for the hero section. Pass a ref to the container
// section so the glow only lights up when the cursor is inside it.
export function HeroGlow({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  const glowRef = useRef<HTMLDivElement>(null);
  const rafId = useRef(0);

  useEffect(() => {
    const glow = glowRef.current;
    const section = sectionRef.current;
    if (!glow || !section) return;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const inside =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;

        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
        glow.style.opacity = inside ? "1" : "0";
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId.current);
    };
  }, [sectionRef]);

  return <div ref={glowRef} className="hero-glow opacity-0" aria-hidden="true" />;
}
