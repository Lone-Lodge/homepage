// Motion tokens — Linear-style outExpo. Everything under 240ms, no bounces.

export const ease = {
  // Primary — matches design system --ll-ease (outExpo-ish)
  out: [0.22, 1, 0.36, 1] as const,
  outSmooth: [0.16, 1, 0.3, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
};

// Durations match --ll-dur-fast / med / slow from the design tokens.
export const duration = {
  fast: 0.12,
  normal: 0.22,
  slow: 0.4,
  // for blur-reveal, we cheat a touch over the 240ms rule because it reads
  // as one continuous entry — matches source site feel.
  reveal: 0.5,
};

export const stagger = {
  tight: 0.03,
  normal: 0.06,
  wide: 0.1,
};
