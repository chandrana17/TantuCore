import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Libraries — TantuCore",
  description: "Skills, prompts, and agent blueprints from building in public. Coming soon.",
  openGraph: {
    title: "Libraries — TantuCore",
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
      <main className="pt-32 pb-24 min-h-screen bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container blueprint-grid">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-12 flex flex-col items-center">
          
          {/* Header Section */}
          <ScrollReveal>
            <div className="text-center mt-12 md:mt-24 mb-20 max-w-2xl mx-auto">
              <div className="text-primary font-mono text-sm tracking-widest uppercase mb-6 flex items-center justify-center gap-3">
                <span className="w-8 h-[1px] bg-primary/50"></span>
                // RESOURCE ECOSYSTEM
                <span className="w-8 h-[1px] bg-primary/50"></span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tighter mb-6 text-on-surface leading-tight">
                The Library of <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-on-surface to-on-surface-variant">
                  Digital Intent
                </span>
              </h1>
              
              <p className="text-on-surface-variant font-body text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
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
                <div className="group relative bg-surface-container-high border border-outline-variant/20 p-8 rounded-2xl hover:bg-surface-container-highest hover:border-primary/30 transition-all duration-500 flex flex-col items-start overflow-hidden transform-gpu hover:scale-[1.02] hover:-translate-y-[4px] shadow-lg hover:shadow-xl h-full">
                  <div className="absolute top-6 right-6">
                    <div className="bg-primary border border-primary/20 text-on-primary text-[10px] uppercase tracking-wider font-mono px-3 py-1 rounded-full transition-all duration-500 group-hover:bg-primary/80 group-hover:text-on-primary/90">
                      Coming Soon
                    </div>
                  </div>
                  
                  <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center mb-6 border border-outline-variant group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-500 transform-gpu">
                    <MaterialIcon icon={card.icon} className="text-2xl text-on-surface-variant group-hover:text-primary transition-colors duration-500 group-hover:scale-110" />
                  </div>
                  
                  <h3 className="text-xl font-headline font-bold text-on-surface mb-3 tracking-tight transition-all duration-500 group-hover:text-primary">{card.title}</h3>
                  <p className="text-on-surface-variant font-body leading-relaxed text-sm transition-all duration-500 group-hover:text-on-surface-variant/80">
                    {card.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
            
          </div>
          
          {/* Notify Section */}
          <ScrollReveal delay={400}>
            <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center pb-12">
              <h2 className="text-xl md:text-2xl font-headline font-bold text-on-surface mb-6">Get notified when the library opens.</h2>
              <form 
                action="https://formspree.io/f/xaqadypl" 
                method="POST"
                className="w-full flex flex-col sm:flex-row gap-3"
              >
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email" 
                  required
                  className="flex-1 bg-surface-container border border-outline-variant text-on-surface placeholder:text-on-surface-variant/50 px-6 py-4 rounded-xl focus:outline-none focus:border-primary/50 focus:bg-surface-container-high transition-all duration-300 font-body text-sm md:text-base transform-gpu focus:scale-[1.02]"
                />
                <button 
                  type="submit"
                  className="bg-primary text-on-primary font-headline font-bold uppercase tracking-wider px-8 py-4 rounded-xl hover:bg-primary/90 active:scale-95 transition-all duration-300 text-sm md:text-base whitespace-nowrap transform-gpu hover:scale-[1.03]"
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
