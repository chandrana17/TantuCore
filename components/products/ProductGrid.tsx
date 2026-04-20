import React from 'react';
import Link from 'next/link';

const ProductGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
      <article className="group flex flex-col">
        <div className="relative mb-8 overflow-hidden surface-container-low aspect-[4/5] rounded-xl bg-surface-container-high/20">
          <img alt="TantuSpank" className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500" src="https://images.unsplash.com/photo-1610812971520-749e7a71f021?auto=format&fit=crop&q=80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none"></div>
          
          <div className="absolute top-6 left-6 flex flex-wrap gap-2">
            <span className="font-mono text-[10px] bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-1 uppercase tracking-widest rounded">Free</span>
            <span className="font-mono text-[10px] bg-surface-container-high text-on-surface border border-outline/20 px-2 py-1 uppercase tracking-widest rounded">Windows 10/11</span>
            <span className="font-mono text-[10px] bg-purple-500/20 text-purple-400 border border-purple-500/30 px-2 py-1 uppercase tracking-widest rounded">v1.0.0</span>
          </div>
        </div>
        
        <div className="flex flex-col items-start gap-4 flex-1">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface">TantuSpank</h2>
          <p className="text-on-surface-variant whitespace-pre-wrap leading-relaxed text-sm">
            Bonk your desk. Your laptop bonks back.{"\n\n"}A Windows tray app that listens through your mic, detects physical knocks, and fires sound effects back at you. Volume scales with how hard you hit.{"\n\n"}10 sound packs including Bollywood, Brainrot, and Gamer. Streak mode. Fake screen crack. Auto-calibrates to your room. 0% idle CPU.
          </p>
          
          <div className="flex flex-wrap gap-2 my-2">
            {["10 Sound Packs", "Streak Mode", "Screen Crack", "Auto-Calibrate", "0% CPU Idle", "No Admin Needed"].map(f => (
              <span key={f} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-surface-container text-on-surface-variant rounded border border-outline/10">{f}</span>
            ))}
          </div>

          <div className="mt-auto pt-6 flex flex-col gap-4 w-full">
             <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://github.com/tantucore/tantuspank/releases/latest" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-5 py-2.5 rounded text-sm font-medium hover:opacity-90 transition-opacity text-center">
                  Download for Windows .exe
                </a>
                <a href="https://github.com/tantucore/tantuspank" target="_blank" rel="noopener noreferrer" className="bg-surface-container text-on-surface px-5 py-2.5 rounded text-sm font-medium hover:bg-surface-container-high transition-colors text-center border border-outline/10">
                  View on GitHub
                </a>
             </div>
             <p className="text-[10px] text-on-surface-variant/50 uppercase tracking-widest">Windows 10/11 · Any mic · No special hardware needed</p>
          </div>
        </div>
      </article>

      <article className="group md:mt-48 flex flex-col">
        <div className="relative mb-8 overflow-hidden surface-container-low aspect-[4/5] rounded-xl bg-surface-container-high/20">
          <img alt="TantuMind" className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none"></div>
          
          <div className="absolute top-6 left-6 flex flex-wrap gap-2">
            <span className="font-mono text-[10px] bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-1 uppercase tracking-widest rounded">Coming Soon</span>
            <span className="font-mono text-[10px] bg-surface-container-high text-on-surface border border-outline/20 px-2 py-1 uppercase tracking-widest rounded">Android</span>
            <span className="font-mono text-[10px] bg-purple-500/20 text-purple-400 border border-purple-500/30 px-2 py-1 uppercase tracking-widest rounded">On-Device AI</span>
          </div>
        </div>
        
        <div className="flex flex-col items-start gap-4 flex-1">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface">TantuMind</h2>
          <p className="text-on-surface-variant whitespace-pre-wrap leading-relaxed text-sm">
            Your phone knows when you're not okay.{"\n\n"}A private AI wellbeing guardian that runs entirely on your Android device. Llama 3.2 1B via llama.cpp. Zero cloud. Zero tracking. Your data never leaves your phone. Ever.
          </p>
          
          <div className="flex flex-wrap gap-2 my-2">
            {["On-Device", "Zero Cloud", "Zero Tracking", "Private by Default", "No Account Needed", "Android First"].map(f => (
              <span key={f} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-surface-container text-on-surface-variant rounded border border-outline/10">{f}</span>
            ))}
          </div>

          <div className="mt-auto pt-6 flex flex-col gap-4 w-full">
             <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/#waitlist" className="bg-surface-container text-on-surface-variant/60 px-5 py-2.5 rounded text-sm font-medium cursor-not-allowed text-center border border-outline/5 hover:bg-surface-container-high transition-colors">
                  Join Waitlist
                </Link>
             </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProductGrid;