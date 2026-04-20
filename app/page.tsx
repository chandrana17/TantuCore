import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "TantuCore — Small apps. Real impact.",
  description: "TantuCore builds small focused Windows and Android apps. Local, private, free.",
  openGraph: {
    title: "TantuCore — Small apps. Real impact.",
    description: "TantuCore builds small focused Windows and Android apps. Local, private, free.",
    url: "https://tantu-core.vercel.app/",
  }
};
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import HeroContent from '@/components/home/HeroContent';
import HeroTitle from '@/components/home/HeroTitle';
import PillarCards from '@/components/home/PillarCards';
import ScrollReveal from '@/components/ui/ScrollReveal';

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
        
        <ScrollReveal delay={100}>
          <PillarCards />
        </ScrollReveal>

        {/* Products Preview Section */}
        <ScrollReveal delay={200}>
          <section className="max-w-[1440px] mx-auto px-8 md:px-16 pb-32">
            <div className="inline-block border border-outline-variant/30 px-3 py-1 mb-12">
              <span className="text-[10px] font-headline uppercase tracking-[0.2em] text-primary">// WHAT WE SHIP</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card A: TantuSpank */}
              <div className="border border-outline-variant/40 p-6 bg-surface-container-lowest/80 backdrop-blur flex flex-col group hover:border-primary/50 transition-colors rounded-none">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-headline text-2xl font-bold tracking-tight text-[#1c1b1b]">TantuSpank</h3>
                    <p className="text-on-surface-variant opacity-80 mt-2 text-sm">Test limits with a bonk. It bonks back.</p>
                  </div>
                  <div className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-none text-[10px] uppercase tracking-wider font-bold">
                    Free &middot; Windows
                  </div>
                </div>
                <div className="w-full aspect-video bg-[#0a0a0a] border border-outline-variant/20 mb-8 flex flex-col shadow-inner">
                  {/* Terminal Header */}
                  <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-[#141414]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                    <span className="ml-2 text-[10px] font-mono text-white/40">powershell.exe</span>
                  </div>
                  {/* Terminal Body */}
                  <div className="p-4 flex-1 font-mono text-xs text-white/70 overflow-hidden flex flex-col justify-center">
                    <div className="flex items-center gap-2">
                      <span className="text-primary">PS C:\&gt;</span>
                      <span className="text-white font-medium">tantuspank start --volume=max</span>
                    </div>
                    <div className="mt-2 text-[#27c93f]">
                      [SUCCESS] Engine initialized.
                    </div>
                    <div className="mt-1 text-white/50">
                      Listening for physical impacts...
                    </div>
                    <div className="mt-1 text-[#ffbd2e] animate-pulse">
                      &gt; Bonk detected. Retaliating.
                    </div>
                  </div>
                </div>
                <div className="mt-auto">
                  <a href="https://github.com/chandrana17/TantuSpank/releases/download/v1.0.0/TantuSpank_Setup_v1.0.0.exe" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-[#1c1b1b] text-white font-headline font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-[#1c1b1b] transition-colors border border-[#1c1b1b]">
                    Download v1.0.0
                  </a>
                </div>
              </div>

              {/* Card B: TantuMind */}
              <div className="border border-outline-variant/40 p-6 bg-surface-container-lowest/80 backdrop-blur flex flex-col group hover:border-primary/50 transition-colors rounded-none">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-headline text-2xl font-bold tracking-tight text-[#1c1b1b]">TantuMind</h3>
                    <p className="text-on-surface-variant opacity-80 mt-2 text-sm">Private AI that lives on your phone.</p>
                  </div>
                  <div className="bg-[#1c1b1b]/5 text-[#1c1b1b]/70 border border-outline-variant/20 px-3 py-1 rounded-none text-[10px] uppercase tracking-wider font-bold">
                    Coming Soon &middot; Android
                  </div>
                </div>
                <div className="w-full aspect-video bg-[#0a0a0a] border border-outline-variant/20 mb-8 flex flex-col shadow-inner">
                   {/* Terminal Header */}
                   <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-[#141414]">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                    <span className="ml-2 text-[10px] font-mono text-white/40">logcat - tantumind</span>
                  </div>
                  {/* Terminal Body */}
                  <div className="p-4 flex-1 font-mono text-xs text-white/70 overflow-hidden flex flex-col justify-center">
                    <div className="flex items-start gap-2">
                      <span className="text-white/40 mt-0.5">I/</span>
                      <span className="text-white font-medium">Model loaded locally (Q4_K_M). No network req.</span>
                    </div>
                    <div className="mt-2 flex items-start gap-2 opacity-50">
                      <span className="text-white/40 mt-0.5">D/</span>
                      <span>Waiting for intent...</span>
                    </div>
                    <div className="mt-4 flex items-center justify-center h-full">
                       <span className="text-primary/50 border border-primary/20 px-3 py-1 text-[10px] uppercase tracking-wider bg-primary/5">// In development</span>
                    </div>
                  </div>
                </div>
                <div className="mt-auto">
                  <a href="#waitlist" className="inline-block px-6 py-3 border border-outline-variant/40 text-[#1c1b1b] font-headline font-bold text-xs uppercase tracking-widest hover:bg-surface-container-low transition-colors bg-white">
                    Join Waitlist
                  </a>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Action Section */}
        <ScrollReveal delay={300}>
          <section id="waitlist" className="max-w-[800px] mx-auto px-8 md:px-16 pb-40 text-center">
            <div className="inline-block border border-outline-variant/40 px-3 py-1 mb-8 bg-surface-container-lowest">
              <span className="text-[10px] font-headline uppercase tracking-[0.2em] text-primary">// THE BOTTOM LINE</span>
            </div>
            <h2 className="font-headline text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.9] font-bold tracking-tighter mb-6 text-[#1c1b1b] uppercase">
              Stop overthinking.<br />
              <span className="text-primary">Start shipping.</span>
            </h2>
            <p className="text-on-surface-variant opacity-80 mb-10 text-lg max-w-lg mx-auto">
              Drop your email to get early access to TantuMind and updates on our next small tools.
            </p>
            
            <form action="https://formspree.io/f/xaqadypl" method="POST" className="flex flex-col sm:flex-row gap-0 justify-center max-w-md mx-auto border border-outline-variant/40 bg-surface-container-lowest">
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 bg-transparent border-none focus:outline-none text-[#1c1b1b] font-headline placeholder:text-[#1c1b1b]/50 transition-colors rounded-none"
              />
              <button type="submit" className="px-8 py-4 bg-[#1c1b1b] text-white font-headline font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-[#1c1b1b] transition-colors border-l border-outline-variant/40 rounded-none">
                Notify Me
              </button>
            </form>
          </section>
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
