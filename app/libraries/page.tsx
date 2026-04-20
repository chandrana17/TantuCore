import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Libraries — TantuCore Studio",
  description: "Skills, prompts, and agent blueprints from building in public. Coming soon.",
  openGraph: {
    title: "Libraries — TantuCore Studio",
    description: "Skills, prompts, and agent blueprints from building in public. Coming soon.",
    url: "https://tantu-core.vercel.app/libraries",
  }
};
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import MaterialIcon from '@/components/ui/MaterialIcon';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function LibrariesPage() {
  return (
    <>
      <NavBar activePage="libraries" />
      <main className="pt-32 pb-24 min-h-screen bg-[#080A0F] geo-grid">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-12 flex flex-col items-center">

          {/* Header Section */}
          <ScrollReveal>
            <div className="text-center mt-12 md:mt-24 mb-20 max-w-2xl mx-auto">
              <div className="text-[#E8FF47] font-mono text-sm tracking-widest uppercase mb-6 flex items-center justify-center gap-3">
                <span className="w-8 h-[1px] bg-[#E8FF47]/30"></span>
                // RESOURCE ECOSYSTEM
                <span className="w-8 h-[1px] bg-[#E8FF47]/30"></span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tighter mb-6 text-[#f0f0f0] leading-tight">
                The Library of <br className="hidden md:block" />
                <span className="text-[#E8FF47]">Digital Intent</span>
              </h1>

              <p className="text-[#f0f0f0]/40 font-body text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
                Skills, prompts, and agent blueprints from building in public. Free to use. Being built now.
              </p>
            </div>
          </ScrollReveal>

          {/* Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-24">
            {[
              { icon: 'code_blocks', title: 'Skills', desc: 'Frameworks and patterns from real shipped projects.', delay: 100 },
              { icon: 'terminal', title: 'Prompts', desc: 'Tested prompts that work in production. Not theory. Not fluff.', delay: 200 },
              { icon: 'auto_awesome', title: 'Agents', desc: 'Pre-built agent blueprints. Ready to drop into your workflow.', delay: 300 },
            ].map((card) => (
              <ScrollReveal key={card.title} delay={card.delay}>
                <div className="glass-card group relative p-8 rounded-lg flex flex-col items-start overflow-hidden transform-gpu hover:scale-[1.02] hover:-translate-y-[4px] transition-all duration-500 h-full">
                  <div className="absolute top-6 right-6">
                    <div className="bg-[#E8FF47]/10 border border-[#E8FF47]/20 text-[#E8FF47] text-[10px] uppercase tracking-wider font-mono px-3 py-1 rounded transition-all duration-500">
                      Coming Soon
                    </div>
                  </div>

                  <div className="w-12 h-12 bg-[#f0f0f0]/[0.03] rounded-xl flex items-center justify-center mb-6 border border-[#f0f0f0]/5 group-hover:border-[#E8FF47]/20 group-hover:bg-[#E8FF47]/5 transition-all duration-500">
                    <MaterialIcon icon={card.icon} className="text-2xl text-[#f0f0f0]/40 group-hover:text-[#E8FF47] transition-colors duration-500" />
                  </div>

                  <h3 className="text-xl font-headline font-bold text-[#f0f0f0] mb-3 tracking-tight transition-all duration-500 group-hover:text-[#E8FF47]">{card.title}</h3>
                  <p className="text-[#f0f0f0]/40 font-body leading-relaxed text-sm">
                    {card.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Notify Section */}
          <ScrollReveal delay={400}>
            <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center pb-12">
              <h2 className="text-xl md:text-2xl font-headline font-bold text-[#f0f0f0] mb-6">Get notified when the library opens.</h2>
              <form
                action="https://formspree.io/f/xaqadypl"
                method="POST"
                className="w-full flex flex-col sm:flex-row gap-0 border border-[#f0f0f0]/10 bg-[#0d1017] rounded-lg overflow-hidden"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-transparent text-[#f0f0f0] placeholder:text-[#f0f0f0]/30 px-6 py-4 focus:outline-none font-body text-sm md:text-base rounded-none"
                />
                <button
                  type="submit"
                  className="bg-[#E8FF47] text-[#080A0F] font-headline font-bold uppercase tracking-wider px-8 py-4 hover:shadow-[0_0_20px_rgba(232,255,71,0.3)] transition-all text-sm md:text-base whitespace-nowrap rounded-none"
                >
                  Notify Me
                </button>
              </form>
            </div>
          </ScrollReveal>

        </div>
      </main>
      <Footer />
    </>
  );
}
