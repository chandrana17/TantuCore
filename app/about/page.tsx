import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/about/AboutHero';
import AboutSocialGrid from '@/components/about/AboutSocialGrid';
import AboutVisualDivider from '@/components/about/AboutVisualDivider';

export default function About() {
  return (
    <>
      <NavBar activePage="about" />
      <main className="pt-32 blueprint-grid-about min-h-screen">
        <AboutHero />
        <AboutSocialGrid />
        <AboutVisualDivider />
      </main>
      <Footer hoverColor="hover:text-primary" />
    </>
  );
}
