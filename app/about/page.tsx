import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About — TantuCore",
  description: "TantuCore. Built by Chand Rana. One person. India. Building in public.",
  openGraph: {
    title: "About — TantuCore",
    description: "TantuCore. Built by Chand Rana. One person. India. Building in public.",
    url: "https://tantu-core.vercel.app/about",
  }
};
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/about/AboutHero';
import AboutSocialGrid from '@/components/about/AboutSocialGrid';
import AboutContact from '@/components/about/AboutContact';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function About() {
  return (
    <>
      <NavBar activePage="about" />
      <main className="pt-32 blueprint-grid min-h-screen">
        <ScrollReveal>
          <AboutHero />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <AboutSocialGrid />
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <AboutContact />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
