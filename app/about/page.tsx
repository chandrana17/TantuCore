import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About — TantuCore Studio",
  description: "TantuCore. Built by Chand Rana, 18. Solo builder from Bhopal, India. Building in public.",
  openGraph: {
    title: "About — TantuCore Studio",
    description: "TantuCore. Built by Chand Rana, 18. Solo builder from Bhopal, India. Building in public.",
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
      <main className="pt-32 geo-grid min-h-screen bg-[#080A0F]">
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
