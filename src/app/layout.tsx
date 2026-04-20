import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n";
import { getSite, getTranslations } from "@/lib/content";
import "./globals.css";

// Fonts are pulled via CSS @import in globals.css (rsms.me/inter + Google Fonts
// for JetBrains Mono + Lora italic). Keeping them in CSS means the static
// export works even when the build host has no outbound network — the client
// downloads fonts at runtime.

const site = getSite();
const translations = getTranslations();

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description,
  metadataBase: new URL(site.meta.url),
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    url: site.meta.url,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans noise-overlay">
        <ThemeProvider>
          <I18nProvider translations={translations}>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
