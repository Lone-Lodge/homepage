"use client";

import Image from "next/image";
import Link from "next/link";
import type { Site } from "@/lib/schemas";

interface FooterProps {
  site: Site;
}

export function Footer({ site }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{
        background: "var(--ll-bg-1)",
        borderColor: "var(--ll-border-1)",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="relative w-[26px] h-[26px] rounded-[6px] overflow-hidden">
                <Image src="/homepage/logo.png" alt="" fill sizes="26px" className="object-cover" />
              </span>
              <span className="text-sm font-medium text-[var(--ll-fg-1)]">
                Lone Lodge Studios
              </span>
            </div>
            <p
              className="text-sm italic text-[var(--ll-fg-2)]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              A lone lodge on the internet.
            </p>
          </div>

          {/* Studio */}
          <FooterColumn title="Studio">
            <FooterLink href="/#about">About</FooterLink>
            <FooterLink href="/#culture">How we work</FooterLink>
            <FooterLink href="/consulting">Consulting</FooterLink>
            <FooterLink href="/#contact">Contact</FooterLink>
          </FooterColumn>

          {/* Product */}
          <FooterColumn title="Product">
            <FooterLink href="/#work">Storyteller</FooterLink>
            <FooterLink href={site.social.fabStore} external>
              Nova UI Ecosystem
            </FooterLink>
            <FooterLink href="/#open">Creator Platform</FooterLink>
          </FooterColumn>

          {/* Community */}
          <FooterColumn title="Community">
            <FooterLink href={site.social.discord} external>
              Discord
            </FooterLink>
            <FooterLink href={site.social.github} external>
              GitHub
            </FooterLink>
            <FooterLink href={site.social.twitter} external>
              Twitter
            </FooterLink>
            <FooterLink href={site.social.youtube} external>
              YouTube
            </FooterLink>
          </FooterColumn>
        </div>

        {/* Manifesto strip */}
        <div
          className="mt-16 pt-8 border-t flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.12em] text-[var(--ll-fg-3)]"
          style={{ borderColor: "var(--ll-border-1)" }}
        >
          {[
            "Built openly",
            "Health first",
            "Craft over speed",
            "Independent always",
          ].map((phrase, i) => (
            <span key={phrase} className="inline-flex items-center gap-3">
              {i > 0 && (
                <span aria-hidden="true" style={{ color: "var(--ll-ember)" }}>
                  ·
                </span>
              )}
              <span>{phrase}</span>
            </span>
          ))}
        </div>

        <div className="mt-6 text-center text-xs text-[var(--ll-fg-4)]">
          © {year} Lone Lodge Studios AB
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-xs uppercase tracking-[0.12em] text-[var(--ll-fg-3)]">
        {title}
      </h4>
      <ul className="flex flex-col gap-2">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  if (external) {
    return (
      <li>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[var(--ll-fg-2)] hover:text-[var(--ll-fg-1)] transition-colors"
          style={{ transitionDuration: "var(--ll-dur-fast)" }}
        >
          {children}
        </a>
      </li>
    );
  }
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-[var(--ll-fg-2)] hover:text-[var(--ll-fg-1)] transition-colors"
        style={{ transitionDuration: "var(--ll-dur-fast)" }}
      >
        {children}
      </Link>
    </li>
  );
}
