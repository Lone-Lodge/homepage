import { Navigation } from "@/components/navigation";
import { ScrollProgress } from "@/components/scroll-progress";
import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { Work } from "@/components/work";
import { About } from "@/components/about";
import { Culture } from "@/components/culture";
import { Open } from "@/components/open";
import { Consulting } from "@/components/consulting";
import { ContactSection } from "@/components/contact";
import { BackToTop } from "@/components/back-to-top";
import { Footer } from "@/components/footer";
import {
  getSite,
  getManifesto,
  getWork,
  getCulture,
  getAbout,
  getOpen,
  getConsulting,
  getContact,
} from "@/lib/content";

export default function Home() {
  const site = getSite();
  const manifesto = getManifesto();
  const work = getWork();
  const culture = getCulture();
  const about = getAbout();
  const open = getOpen();
  const consulting = getConsulting();
  const contact = getContact();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero hero={site.hero} />
        <Manifesto items={manifesto} />
        <Work projects={work} />
        <About about={about} />
        <Culture items={culture} />
        <Open categories={open} />
        <Consulting data={consulting} />
        <ContactSection contact={contact} />
      </main>
      <Footer site={site} />
      <BackToTop />
    </div>
  );
}
