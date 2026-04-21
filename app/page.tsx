import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "TantuCore Studio — We Build AI Apps & Windows Tools",
  description: "Free. Built in public. Failures included. Local-first software from Bhopal, India.",
  openGraph: {
    title: "TantuCore Studio — We Build AI Apps & Windows Tools",
    description: "Free. Built in public. Failures included. Local-first software from Bhopal, India.",
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
      <main className="relative overflow-hidden bg-[var(--color-background)] geo-grid">
        {/* SVG accent glow orbs */}
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-[var(--color-accent)]/[0.06] blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] rounded-full bg-[var(--color-accent)]/[0.05] blur-[120px] pointer-events-none"></div>
        {/* Geometric accent lines */}
        <svg className="absolute top-[15%] right-[10%] w-[300px] h-[300px] opacity-[0.1] pointer-events-none hidden lg:block" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="50" width="200" height="200" stroke="var(--color-accent)" strokeWidth="0.5" />
          <rect x="80" y="80" width="140" height="140" stroke="var(--color-accent)" strokeWidth="0.5" />
          <line x1="0" y1="150" x2="300" y2="150" stroke="var(--color-accent)" strokeWidth="0.3" />
          <line x1="150" y1="0" x2="150" y2="300" stroke="var(--color-accent)" strokeWidth="0.3" />
          <circle cx="150" cy="150" r="80" stroke="var(--color-accent)" strokeWidth="0.3" />
          <circle cx="150" cy="150" r="3" fill="var(--color-accent)" opacity="0.5" />
        </svg>
 
        {/* Hero Section */}
        <section className="relative max-w-[1440px] mx-auto px-8 md:px-16 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[85vh]">
          <HeroContent />
          <HeroTitle />
        </section>

        <ScrollReveal delay={100}>
          <PillarCards />
        </ScrollReveal>

        {/* === PRODUCTS PREVIEW SECTION === */}
        <ScrollReveal delay={200}>
          <section className="max-w-[1440px] mx-auto px-8 md:px-16 pb-32">
            <div className="inline-block border border-[rgba(240,240,240,0.1)] px-3 py-1 mb-12 bg-[#a855f7]/5 rounded-md">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#a855f7]">// WHAT WE SHIP</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card A: TantuSpank */}
              <div className="glass-card p-6 flex flex-col group rounded-lg">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-headline text-2xl font-bold tracking-tight text-[#f0f0f0]">TantuSpank</h3>
                    <p className="text-[#f0f0f0]/70 mt-2 text-sm">Windows Knock Detection Tool. Hit your laptop — it plays sound back.</p>
                  </div>
                  <div className="bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/20 px-3 py-1 text-[10px] uppercase tracking-wider font-bold font-mono rounded">
                    Free &middot; Windows
                  </div>
                </div>
                <div className="w-full aspect-video bg-[#0a0c12] border border-[#f0f0f0]/5 mb-8 flex flex-col rounded-md overflow-hidden">
                  {/* Terminal Header */}
                  <div className="flex items-center gap-2 px-4 py-2 border-b border-[#f0f0f0]/5 bg-[#0d0f15]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                    <span className="ml-2 text-[10px] font-mono text-[#f0f0f0]/30">powershell.exe</span>
                  </div>
                  {/* Terminal Body */}
                  <div className="p-4 flex-1 font-mono text-xs text-[#f0f0f0]/60 overflow-hidden flex flex-col justify-center">
                    <div className="flex items-center gap-2">
                      <span className="text-[#a855f7]">PS C:\&gt;</span>
                      <span className="text-[#f0f0f0] font-medium">tantuspank start --volume=max</span>
                    </div>
                    <div className="mt-2 text-[#27c93f]">
                      [SUCCESS] Engine initialized.
                    </div>
                    <div className="mt-1 text-[#f0f0f0]/30">
                      Listening for physical impacts...
                    </div>
                    <div className="mt-1 text-[#ffbd2e] animate-pulse">
                      &gt; Bonk detected. Retaliating.
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="tag-pill">C#</span>
                  <span className="tag-pill">WPF</span>
                  <span className="tag-pill">NAudio</span>
                  <span className="tag-pill">Accelerometer</span>
                </div>
                <div className="mt-auto flex gap-3">
                  <a href="/api/download/tantuspank" className="btn-accent px-6 py-3 font-headline font-bold text-xs uppercase tracking-widest rounded-md">
                    Download v1.0.0
                  </a>

                </div>
              </div>

              {/* Card B: TantuMind */}
              <div className="glass-card p-6 flex flex-col group rounded-lg">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-headline text-2xl font-bold tracking-tight text-[#f0f0f0]">TantuMind</h3>
                    <p className="text-[#f0f0f0]/70 mt-2 text-sm">Offline Android AI — private, local, no cloud needed.</p>
                  </div>
                  <div className="bg-[#f0f0f0]/5 text-[#f0f0f0]/70 border border-[#f0f0f0]/10 px-3 py-1 text-[10px] uppercase tracking-wider font-bold font-mono rounded">
                    Coming Soon &middot; Android
                  </div>
                </div>
                <div className="w-full aspect-video bg-[#0a0c12] border border-[#f0f0f0]/5 mb-8 flex flex-col rounded-md overflow-hidden">
                  {/* Terminal Header */}
                  <div className="flex items-center gap-2 px-4 py-2 border-b border-[#f0f0f0]/5 bg-[#0d0f15]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#f0f0f0]/15"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#f0f0f0]/15"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#f0f0f0]/15"></div>
                    <span className="ml-2 text-[10px] font-mono text-[#f0f0f0]/30">logcat — tantumind</span>
                  </div>
                  {/* Terminal Body */}
                  <div className="p-4 flex-1 font-mono text-xs text-[#f0f0f0]/50 overflow-hidden flex flex-col justify-center">
                    <div className="flex items-start gap-2">
                      <span className="text-[#f0f0f0]/30 mt-0.5">I/</span>
                      <span className="text-[#f0f0f0]/70 font-medium">Model loaded locally (Q4_K_M). No network req.</span>
                    </div>
                    <div className="mt-2 flex items-start gap-2 opacity-50">
                      <span className="text-[#f0f0f0]/30 mt-0.5">D/</span>
                      <span>Waiting for intent...</span>
                    </div>
                    <div className="mt-4 flex items-center justify-center h-full">
                      <span className="text-[#a855f7]/60 border border-[#a855f7]/15 px-3 py-1 text-[10px] uppercase tracking-wider bg-[#a855f7]/5 rounded">// In development</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="tag-pill">Kotlin</span>
                  <span className="tag-pill">Gemma</span>
                  <span className="tag-pill">GGUF</span>
                  <span className="tag-pill">Edge AI</span>
                </div>
                <div className="mt-auto">
                  <a href="#waitlist" className="btn-outline px-6 py-3 font-headline font-bold text-xs uppercase tracking-widest rounded-md inline-block">
                    Join Waitlist
                  </a>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* === BUILT BY SECTION === */}
        <ScrollReveal delay={250}>
          <section className="max-w-[1440px] mx-auto px-8 md:px-16 pb-32">
            <div className="glass-card p-8 md:p-12 rounded-lg">
              <div className="inline-block border border-[rgba(240,240,240,0.1)] px-3 py-1 mb-8 bg-[#a855f7]/5 rounded-md">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#a855f7]">// WHO BUILDS THIS</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-[#f0f0f0] mb-4">
                    Built by <span className="text-[#a855f7] drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">Chand</span>, 18.
                  </h2>
                  <p className="text-[#f0f0f0]/70 leading-relaxed mb-6">
                    Solo builder from Bhopal, India. B.Tech AI/ML student. Building TantuCore Studio — shipping AI apps and Windows tools in public. Every failure is a lesson, every ship is progress.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="tag-pill">AI/ML Engineer</span>
                    <span className="tag-pill">Bhopal, India</span>
                    <span className="tag-pill">Solo Founder</span>
                    <span className="tag-pill">Agentic AI</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 p-4 border border-[#f0f0f0]/5 rounded-lg bg-[#f0f0f0]/[0.02]">
                    <span className="text-[#a855f7] font-mono text-2xl font-bold">2</span>
                    <span className="text-[#f0f0f0]/70 text-sm">Products shipped</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 border border-[#f0f0f0]/5 rounded-lg bg-[#f0f0f0]/[0.02]">
                    <span className="text-[#a855f7] font-mono text-2xl font-bold">100%</span>
                    <span className="text-[#f0f0f0]/70 text-sm">Open source</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 border border-[#f0f0f0]/5 rounded-lg bg-[#f0f0f0]/[0.02]">
                    <span className="text-[#a855f7] font-mono text-2xl font-bold">0</span>
                    <span className="text-[#f0f0f0]/70 text-sm">Data collected</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* === WAITLIST / CTA SECTION === */}
        <ScrollReveal delay={300}>
          <section id="waitlist" className="max-w-[800px] mx-auto px-8 md:px-16 pb-40 text-center">
            <div className="inline-block border border-[rgba(240,240,240,0.1)] px-3 py-1 mb-8 bg-[#a855f7]/5 rounded-md">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#a855f7]">// THE BOTTOM LINE</span>
            </div>
            <h2 className="font-headline text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.9] font-bold tracking-tighter mb-6 text-[#f0f0f0] uppercase">
              Stop overthinking.<br />
              <span className="text-[#a855f7] drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]">Start shipping.</span>
            </h2>
            <p className="text-[#f0f0f0]/70 mb-10 text-lg max-w-lg mx-auto">
              Drop your email to get early access to TantuMind and updates on our next tools.
            </p>

            <form action="https://formspree.io/f/xaqadypl" method="POST" className="flex flex-col sm:flex-row gap-0 justify-center max-w-md mx-auto border border-[#f0f0f0]/10 bg-[#0d1017] rounded-lg overflow-hidden">
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-transparent border-none focus:outline-none text-[#f0f0f0] font-body placeholder:text-[#f0f0f0]/30 transition-colors rounded-none"
              />
              <button type="submit" className="btn-accent px-8 py-4 font-headline font-bold text-xs uppercase tracking-widest transition-all rounded-none">
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
