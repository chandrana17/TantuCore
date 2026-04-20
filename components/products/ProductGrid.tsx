import React from 'react';
import Link from 'next/link';

const ProductGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
      <article className="group flex flex-col">
        <div className="relative mb-8 overflow-hidden aspect-[4/5] rounded-xl bg-[#0a0a0a] border border-outline-variant/20 shadow-inner group-hover:border-primary/40 transition-colors flex flex-col">
          {/* Tags */}
          <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
            <span className="font-mono text-[10px] bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-1 uppercase tracking-widest rounded shadow-sm">Free</span>
            <span className="font-mono text-[10px] bg-[#1a1a1a] text-white/70 border border-white/10 px-2 py-1 uppercase tracking-widest rounded shadow-sm">Windows 10/11</span>
            <span className="font-mono text-[10px] bg-purple-500/20 text-purple-400 border border-purple-500/30 px-2 py-1 uppercase tracking-widest rounded shadow-sm">v1.0.0</span>
          </div>
          
          {/* Custom Visual: Impact/Audio Monitor */}
          <div className="flex-1 flex flex-col items-center justify-center relative p-8 mt-12 w-full h-full">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-[#0a0a0a] to-[#0a0a0a] pointer-events-none"></div>
             
             {/* Center Graphic */}
             <div className="relative w-32 h-32 flex items-center justify-center rounded-full border border-primary/20 bg-primary/5 mb-6 group-hover:scale-105 transition-transform duration-500">
                <div className="absolute w-full h-full rounded-full border border-primary/40 animate-ping opacity-20"></div>
                <div className="absolute w-24 h-24 rounded-full bg-primary/10 animate-pulse"></div>
                <span className="text-5xl drop-shadow-[0_0_15px_rgba(232,255,71,0.5)]">🔨</span>
             </div>

             {/* UI Panel */}
             <div className="w-full bg-[#111] border border-white/5 rounded-lg p-4 flex flex-col gap-3 relative z-10 backdrop-blur-md">
                <div className="flex justify-between items-center px-1">
                   <span className="text-[10px] font-mono text-white/50 uppercase">Desk Sensor</span>
                   <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></span>
                </div>
                
                {/* Visualizer Bars */}
                <div className="flex justify-between items-end h-8 gap-1 px-1">
                   {[40, 25, 70, 95, 55, 30, 85, 20, 45].map((h, i) => (
                      <div key={i} className="w-full bg-primary" style={{ height: `${h}%`, opacity: h > 80 ? 1 : 0.4 }}></div>
                   ))}
                </div>
                
                <div className="border-t border-white/5 pt-2 mt-1">
                  <p className="text-[10px] font-mono whitespace-nowrap text-primary drop-shadow-[0_0_2px_rgba(232,255,71,0.8)] opacity-90 overflow-hidden text-ellipsis">
                    &gt; CRITICAL IMPACT DETECTED
                  </p>
                  <p className="text-[10px] font-mono whitespace-nowrap text-white/40 mt-1">
                    &gt; Triggering /sfx/vine-boom.mp3
                  </p>
                </div>
             </div>
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
                <a href="https://github.com/chandrana17/TantuSpank/releases/download/v1.0.0/TantuSpank_Setup_v1.0.0.exe" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-5 py-2.5 rounded text-sm font-medium hover:opacity-90 transition-opacity text-center">
                  Download for Windows .exe
                </a>
             </div>
             <p className="text-[10px] text-on-surface-variant/50 uppercase tracking-widest">Windows 10/11 · Any mic · No special hardware needed</p>
          </div>
        </div>
      </article>

      <article className="group md:mt-48 flex flex-col">
        <div className="relative mb-8 overflow-hidden aspect-[4/5] rounded-xl bg-[#0a0a0a] border border-outline-variant/20 shadow-inner group-hover:border-primary/40 transition-colors flex flex-col">
          {/* Tags */}
          <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
            <span className="font-mono text-[10px] bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-1 uppercase tracking-widest rounded shadow-sm">Coming Soon</span>
            <span className="font-mono text-[10px] bg-[#1a1a1a] text-white/70 border border-white/10 px-2 py-1 uppercase tracking-widest rounded shadow-sm">Android</span>
            <span className="font-mono text-[10px] bg-purple-500/20 text-purple-400 border border-purple-500/30 px-2 py-1 uppercase tracking-widest rounded shadow-sm">On-Device AI</span>
          </div>
          
          {/* Custom Visual: Local AI processing */}
          <div className="flex-1 flex flex-col items-center justify-center relative p-8 mt-12 w-full h-full">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_#0a0a0a_70%)] pointer-events-none"></div>

             {/* Center Graphic */}
             <div className="relative w-32 h-32 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500">
                {/* Rotating dashed rings */}
                <div className="absolute w-full h-full rounded-full border border-dashed border-white/20 animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute w-24 h-24 rounded-full border border-dashed border-white/10 animate-[spin_7s_linear_infinite_reverse]"></div>
                {/* Glowing Core */}
                <div className="relative w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.8)]">
                  <span className="text-2xl drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">🧠</span>
                </div>
             </div>

             {/* UI Panel */}
             <div className="w-full bg-[#111] border border-white/5 rounded-lg p-4 flex flex-col gap-3 relative z-10 backdrop-blur-md">
                <div className="flex justify-between items-center px-1 border-b border-white/5 pb-2">
                   <div className="flex items-center gap-2">
                     <span className="text-xl drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">🔒</span>
                     <span className="text-[10px] font-mono text-white/70 tracking-widest uppercase">Vault Secured</span>
                   </div>
                   <span className="text-[10px] border border-green-500/30 text-green-400 bg-green-500/10 px-2 py-0.5 rounded uppercase font-bold">0 Network</span>
                </div>
                
                <div className="pt-1 flex flex-col gap-2">
                  <div className="flex justify-between items-center text-[10px] font-mono text-white/50 uppercase">
                    <span>Llama_3B_Q4</span>
                    <span className="text-primary italic">Loaded</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-primary relative overflow-hidden">
                       <div className="absolute inset-0 bg-white/50 w-full animate-[translateX_1s_ease-in-out_infinite] opacity-50"></div>
                    </div>
                  </div>
                  <p className="text-[8px] sm:text-[10px] font-mono text-white/30 mt-1 uppercase tracking-wider">
                    // Memory encrypted locally...
                  </p>
                </div>
             </div>
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
