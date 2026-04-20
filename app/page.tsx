import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "TantuCore � Small apps. Real impact.",
  description: "TantuCore builds small focused Windows and Android apps. Local, private, free.",
  openGraph: {
    title: "TantuCore � Small apps. Real impact.",
    description: "TantuCore builds small focused Windows and Android apps. Local, private, free.",
    url: "https://tantu-core.vercel.app/",
  }
};
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

        {/* Products Preview Section */}
        <section className="max-w-[1440px] mx-auto px-8 md:px-16 pb-32">
          <div className="inline-block border border-outline-variant/30 px-3 py-1 mb-12">
            <span className="text-[10px] font-headline uppercase tracking-[0.2em] text-primary">// WHAT WE SHIP</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card A: TantuSpank */}
            <div className="border border-outline-variant/20 p-8 bg-surface-container-lowest/50 backdrop-blur flex flex-col group hover:border-primary/50 transition-colors">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-headline text-2xl font-bold tracking-tight text-[#1c1b1b]">TantuSpank</h3>
                  <p className="text-on-surface-variant opacity-80 mt-2">Bonk your desk. It bonks back.</p>
                </div>
                <div className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold">
                  Free · Windows · v1.0.0
                </div>
              </div>
              <div className="w-full aspect-video bg-[#1c1b1b]/5 border border-outline-variant/10 mb-8 relative overflow-hidden flex items-center justify-center">
                <span className="text-on-surface-variant/30 font-headline tracking-widest text-sm uppercase">Screenshot</span>
              </div>
              <div className="mt-auto">
                <a href="https://github.com/tantucore/tantuspank/releases/latest" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-primary text-on-primary font-headline font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform">
                  Download
                </a>
              </div>
            </div>

            {/* Card B: TantuMind */}
            <div className="border border-outline-variant/20 p-8 bg-surface-container-lowest/50 backdrop-blur flex flex-col group hover:border-primary/50 transition-colors">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-headline text-2xl font-bold tracking-tight text-[#1c1b1b]">TantuMind</h3>
                  <p className="text-on-surface-variant opacity-80 mt-2">Private AI that lives on your phone.</p>
                </div>
                <div className="bg-[#1c1b1b]/5 text-[#1c1b1b]/70 border border-outline-variant/20 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold">
                  Coming Soon · Android
                </div>
              </div>
              <div className="w-full aspect-video bg-[#1c1b1b]/5 border border-outline-variant/10 mb-8 relative overflow-hidden flex items-center justify-center">
                <span className="text-on-surface-variant/30 font-headline tracking-widest text-sm uppercase">Preview</span>
              </div>
              <div className="mt-auto">
                <a href="#waitlist" className="inline-block px-6 py-3 border border-outline-variant/40 text-on-surface-variant/70 font-headline font-bold text-xs uppercase tracking-widest hover:bg-surface-container-low transition-colors opacity-80">
                  Join Waitlist
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" className="max-w-[800px] mx-auto px-8 md:px-16 pb-40 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight mb-4 text-[#1c1b1b]">Get notified when TantuMind drops.</h2>
          <p className="text-on-surface-variant opacity-80 mb-10">One email. No spam. When it's ready.</p>
          
          <form action="https://formspree.io/f/placeholder" method="POST" className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              name="email" 
              required 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 bg-transparent border border-outline-variant/40 focus:border-primary focus:outline-none text-on-surface font-headline placeholder:text-on-surface-variant/50 transition-colors"
            />
            <button type="submit" className="px-8 py-4 bg-[#1c1b1b] text-white font-headline font-bold text-xs uppercase tracking-widest hover:bg-primary transition-colors">
              Notify Me
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

