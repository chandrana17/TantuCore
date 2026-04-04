import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import HeroContent from '@/components/home/HeroContent';
import HeroTitle from '@/components/home/HeroTitle';
import PillarCards from '@/components/home/PillarCards';

export default function Home() {
  return (
    <>
      <NavBar activePage="home" />
      <main className="relative pt-24 min-h-screen blueprint-grid overflow-hidden">
        <section className="max-w-[1440px] mx-auto px-8 md:px-16 pt-20 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <HeroContent />
          <HeroTitle />
        </section>
        <div className="absolute top-[20%] right-[-5%] w-[40%] aspect-video opacity-20 pointer-events-none hidden lg:block">
          <div className="w-full h-full border border-primary/20 relative">
            <div className="absolute inset-0 blueprint-grid scale-50"></div>
            <img
              alt="Server hardware close-up"
              className="w-full h-full object-cover grayscale opacity-50 mix-blend-multiply"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzQG_YO-qWJWPgUQErPFCUkdkCW4LwidVuqDTVRI3vCW98CgHZLnboFozZTybU7zMkgG9m6VNuP_4OXVNFBaa830EwReSgba3E5mXLX9XBZyVp5rq9B-a1IVzZkAf-iFXy8kVUFwUkdnc8gDQYPqaK3Pdhc7DjjkSsLi9ia2Noe29KLcUnAPzh2DUjH-j-57-RHoFX1tgDz6IBtr8DXZKPTF7gttUKx--Hj9r5eb_jWmz0tHZoLv0b3zBZJcAgbnO9lm_xS0Qtt31S"
            />
          </div>
        </div>
        <PillarCards />
      </main>
      <Footer />
    </>
  );
}
