import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About",
  description: "Meet Chand Rana — the solo builder behind TantuCore Studio. 18, B.Tech AI/ML, Bhopal. Building AI apps and Windows tools in public.",
  openGraph: {
    title: "About TantuCore Studio — Meet the Solo Builder",
    description: "Meet Chand Rana — the solo builder behind TantuCore Studio. Building AI apps and Windows tools in public from Bhopal, India.",
    url: "https://tantucore.online/about",
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
