import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Libraries � TantuCore",
  description: "Skills, prompts, and agent blueprints from building in public. Coming soon.",
  openGraph: {
    title: "Libraries � TantuCore",
    description: "Skills, prompts, and agent blueprints from building in public. Coming soon.",
    url: "https://tantu-core.vercel.app/libraries",
  }
};
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import MaterialIcon from '@/components/ui/MaterialIcon';

export default function LibrariesPage() {
  return (
    <>
      <NavBar activePage="libraries" />
      <main className="pt-32 pb-24 min-h-screen bg-[#080A0F] text-white selection:bg-[#E8FF47] selection:text-black">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-12 flex flex-col items-center">
          
          {/* Header Section */}
          <div className="text-center mt-12 md:mt-24 mb-20 max-w-2xl">
            <div className="text-[#E8FF47] font-['DM_Mono'] text-sm tracking-widest uppercase mb-6 flex items-center justify-center gap-3">
              <span className="w-8 h-[1px] bg-[#E8FF47]/50"></span>
              // RESOURCE ECOSYSTEM
              <span className="w-8 h-[1px] bg-[#E8FF47]/50"></span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Space_Grotesk'] font-bold tracking-tighter mb-6 text-white leading-tight">
              The Library of <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                Digital Intent
              </span>
            </h1>
            
            <p className="text-white/60 font-['Manrope'] text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
              Skills, prompts, and agent blueprints from building in public. Free to use. Being built now.
            </p>
          </div>

          {/* Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-24">
            
            {/* Card 1 */}
            <div className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/[0.07] hover:border-[#E8FF47]/30 transition-all duration-300 flex flex-col items-start overflow-hidden">
              <div className="absolute top-6 right-6">
                <div className="bg-[#E8FF47]/10 border border-[#E8FF47]/20 text-[#E8FF47] text-[10px] uppercase tracking-wider font-['DM_Mono'] px-3 py-1 rounded-full">
                  Coming Soon
                </div>
              </div>
              
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-[#E8FF47]/20 group-hover:bg-[#E8FF47]/5 transition-all">
                <MaterialIcon icon="code_blocks" className="text-2xl text-white/70 group-hover:text-[#E8FF47] transition-colors" />
              </div>
              
              <h3 className="text-xl font-['Space_Grotesk'] font-bold text-white mb-3 tracking-tight">Skills</h3>
              <p className="text-white/50 font-['Manrope'] leading-relaxed text-sm">
                Frameworks and patterns from real shipped projects.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/[0.07] hover:border-[#E8FF47]/30 transition-all duration-300 flex flex-col items-start overflow-hidden">
              <div className="absolute top-6 right-6">
                <div className="bg-[#E8FF47]/10 border border-[#E8FF47]/20 text-[#E8FF47] text-[10px] uppercase tracking-wider font-['DM_Mono'] px-3 py-1 rounded-full">
                  Coming Soon
                </div>
              </div>
              
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-[#E8FF47]/20 group-hover:bg-[#E8FF47]/5 transition-all">
                <MaterialIcon icon="terminal" className="text-2xl text-white/70 group-hover:text-[#E8FF47] transition-colors" />
              </div>
              
              <h3 className="text-xl font-['Space_Grotesk'] font-bold text-white mb-3 tracking-tight">Prompts</h3>
              <p className="text-white/50 font-['Manrope'] leading-relaxed text-sm">
                Tested prompts that work in production. Not theory. Not fluff.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/[0.07] hover:border-[#E8FF47]/30 transition-all duration-300 flex flex-col items-start overflow-hidden">
              <div className="absolute top-6 right-6">
                <div className="bg-[#E8FF47]/10 border border-[#E8FF47]/20 text-[#E8FF47] text-[10px] uppercase tracking-wider font-['DM_Mono'] px-3 py-1 rounded-full">
                  Coming Soon
                </div>
              </div>
              
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-[#E8FF47]/20 group-hover:bg-[#E8FF47]/5 transition-all">
                <MaterialIcon icon="auto_awesome" className="text-2xl text-white/70 group-hover:text-[#E8FF47] transition-colors" />
              </div>
              
              <h3 className="text-xl font-['Space_Grotesk'] font-bold text-white mb-3 tracking-tight">Agents</h3>
              <p className="text-white/50 font-['Manrope'] leading-relaxed text-sm">
                Pre-built agent blueprints. Ready to drop into your workflow.
              </p>
            </div>
            
          </div>

          {/* Notify Section */}
          <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center pb-12">
            <h2 className="text-xl md:text-2xl font-['Space_Grotesk'] font-bold text-white mb-6">Get notified when the library opens.</h2>
            <form 
              action="https://formspree.io/f/YOUR_FORM_ID" 
              method="POST"
              className="w-full flex flex-col sm:flex-row gap-3"
            >
              <input 
                type="email" 
                name="email"
                placeholder="Enter your email" 
                required
                className="flex-1 bg-white/5 border border-white/10 text-white placeholder:text-white/30 px-6 py-4 rounded-xl focus:outline-none focus:border-[#E8FF47]/50 focus:bg-white/10 transition-all font-['Manrope'] text-sm md:text-base"
              />
              <button 
                type="submit"
                className="bg-[#E8FF47] text-[#080A0F] font-['Space_Grotesk'] font-bold uppercase tracking-wider px-8 py-4 rounded-xl hover:bg-[#E8FF47]/90 active:scale-95 transition-all duration-200 text-sm md:text-base whitespace-nowrap"
              >
                Notify Me
              </button>
            </form>
          </div>

        </div>
      </main>
      <Footer hoverColor="hover:text-[#E8FF47]" />
    </>
  );
}

