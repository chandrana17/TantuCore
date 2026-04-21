'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SpotlightCard from '@/components/ui/SpotlightCard';

const ProductGrid: React.FC = () => {
  const [streak, setStreak] = useState(7);
  const [impactDb, setImpactDb] = useState(842);
  const [isImpacting, setIsImpacting] = useState(false);
  const [waveformHeights, setWaveformHeights] = useState([12,18,8,25,40,65,95,80,55,35,90,70,45,30,20,55,75,60,40,25,15,35,50,30,18,10,22,45,65,40,20,8]);
  const [activePack, setActivePack] = useState('Bollywood');

  const packs = [
    { name: 'Brainrot', sfx: 'vine-boom.mp3' },
    { name: 'Bollywood', sfx: 'dhol-drop.mp3' },
    { name: 'Gamer', sfx: 'hitmarker.wav' },
    { name: 'Meme', sfx: 'bonk.mp3' },
  ];

  useEffect(() => {
    let knockTimeout: NodeJS.Timeout;
    
    const ambientInterval = setInterval(() => {
      setWaveformHeights(prev => {
        return prev.map(h => {
          if (h > 60) return h * 0.8; // Decay fast if very high from knock
          const target = Math.random() * 30 + 10;
          return h + (target - h) * 0.2;
        });
      });
    }, 100);

    const simulateKnock = () => {
      setIsImpacting(true);
      setStreak(s => s + 1);
      setImpactDb(Math.floor(Math.random() * 400 + 700));
      setWaveformHeights(Array.from({length: 32}, () => Math.floor(Math.random() * 70 + 30)));
      
      const packsList = ['Brainrot', 'Bollywood', 'Gamer', 'Meme'];
      setActivePack(packsList[Math.floor(Math.random() * packsList.length)]);

      setTimeout(() => {
        setIsImpacting(false);
      }, 300);

      knockTimeout = setTimeout(simulateKnock, Math.random() * 4000 + 2000);
    };

    knockTimeout = setTimeout(simulateKnock, 2000);

    return () => {
      clearTimeout(knockTimeout);
      clearInterval(ambientInterval);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
      {/* === TantuSpank === */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="group flex flex-col"
      >
        <SpotlightCard className="mb-8 rounded-lg">
          <div className="relative overflow-hidden aspect-[4/5] rounded-lg bg-[#0a0c12] border border-[#f0f0f0]/5 group-hover:border-[#a855f7]/30 transition-colors duration-500 flex flex-col">
            {/* Tags */}
            <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
              <span className="font-mono text-[10px] bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-1 uppercase tracking-widest rounded shadow-sm">Free</span>
              <span className="font-mono text-[10px] bg-[#f0f0f0]/5 text-[#f0f0f0]/60 border border-[#f0f0f0]/10 px-2 py-1 uppercase tracking-widest rounded shadow-sm">Windows 10/11</span>
              <span className="font-mono text-[10px] bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/20 px-2 py-1 uppercase tracking-widest rounded shadow-sm">v1.0.0</span>
            </div>

            {/* Custom Visual: Impact Detection System */}
            <div className="flex-1 flex flex-col items-center justify-center relative p-6 mt-12 w-full h-full gap-5">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.05),#0a0c12_70%)] pointer-events-none"></div>

               {/* Shockwave Rings */}
               <div className="relative w-40 h-40 flex items-center justify-center">
                  {/* Outer pulse rings */}
                  <div className={`absolute w-full h-full rounded-full border transition-all duration-300 ${isImpacting ? 'border-amber-500/50 scale-150 opacity-0' : 'border-[#a855f7]/10 animate-ping opacity-10'}`}></div>
                  <div className={`absolute w-[130%] h-[130%] rounded-full border transition-all duration-300 ${isImpacting ? 'border-amber-500/30 scale-125 opacity-0' : 'border-[#a855f7]/5 animate-ping opacity-5'}`} style={{ animationDelay: isImpacting ? '0s' : '0.3s' }}></div>
                  {/* Static rings */}
                  <div className="absolute w-full h-full rounded-full border border-[#a855f7]/15"></div>
                  <div className={`absolute w-[75%] h-[75%] rounded-full border border-dashed transition-colors duration-150 animate-[spin_12s_linear_infinite] ${isImpacting ? 'border-amber-500/30' : 'border-[#a855f7]/10'}`}></div>
                  <div className={`absolute w-[50%] h-[50%] rounded-full backdrop-blur-sm transition-colors duration-150 ${isImpacting ? 'bg-amber-500/10' : 'bg-[#a855f7]/5'}`}></div>
                  {/* Center icon */}
                  <div className={`relative z-10 w-16 h-16 rounded-full border flex items-center justify-center transition-all duration-150 overflow-hidden ${isImpacting ? 'bg-amber-500/20 border-amber-500 scale-110 shadow-[0_0_40px_rgba(245,158,11,0.5)]' : 'bg-[#a855f7]/10 border-[#a855f7]/30 shadow-[0_0_30px_rgba(168,85,247,0.2)]'}`}>
                    <Image src="/tantuspank-logo.png" alt="TantuSpank" width={40} height={40} className="rounded-full" />
                  </div>
                  {/* Floating particles */}
                  <div className="absolute top-2 right-4 w-1 h-1 rounded-full bg-[#a855f7]/40 animate-pulse"></div>
                  <div className="absolute bottom-6 left-2 w-1.5 h-1.5 rounded-full bg-[#a855f7]/25 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-8 left-6 w-1 h-1 rounded-full bg-[#a855f7]/30 animate-pulse" style={{ animationDelay: '1s' }}></div>
               </div>

               {/* Waveform + Controls Panel */}
               <div className="w-full bg-[#0d0f15] border border-[#f0f0f0]/5 rounded-lg overflow-hidden relative z-10 backdrop-blur-md">
                  {/* Header bar */}
                  <div className="flex justify-between items-center px-4 py-2.5 border-b border-[#f0f0f0]/5">
                     <div className="flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></span>
                       <span className="text-[10px] font-mono text-[#f0f0f0]/70 uppercase tracking-wider">Desk Sensor Active</span>
                     </div>
                     <div className="flex items-center gap-1.5">
                       <span className={`text-[10px] font-mono ${isImpacting ? 'text-amber-500 font-bold scale-125 transition-transform' : 'text-amber-400'}`}>🔥 {streak}</span>
                       <span className="text-[8px] font-mono text-[#f0f0f0]/30 uppercase">streak</span>
                     </div>
                  </div>

                  {/* Waveform visualization */}
                  <div className="px-4 py-3 flex items-center gap-[2px] h-12">
                     {waveformHeights.map((h, i) => (
                       <div
                         key={i}
                         className="flex-1 rounded-full transition-all duration-150"
                         style={{
                           height: `${h}%`,
                           background: h > 70 || isImpacting
                             ? 'linear-gradient(to top, #a855f7, #c084fc)'
                             : h > 40
                               ? 'rgba(168,85,247,0.5)'
                               : 'rgba(168,85,247,0.2)',
                           boxShadow: h > 80 || isImpacting ? '0 0 8px rgba(168,85,247,0.6)' : 'none',
                         }}
                       ></div>
                     ))}
                  </div>

                  {/* Sound Pack Carousel */}
                  <div className="px-4 py-2 border-t border-[#f0f0f0]/5 flex items-center gap-2 overflow-x-auto">
                     {packs.map((pack) => (
                       <div
                         key={pack.name}
                         className={`text-[9px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full whitespace-nowrap transition-all duration-300 ${
                           pack.name === activePack
                             ? 'bg-[#a855f7] text-[#080A0F] font-bold shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                             : 'bg-[#f0f0f0]/[0.03] text-[#f0f0f0]/30 border border-[#f0f0f0]/[0.06]'
                         }`}
                       >
                         {pack.name}
                       </div>
                     ))}
                  </div>

                  {/* Terminal output */}
                  <div className="px-4 py-2.5 border-t border-[#f0f0f0]/5 space-y-1">
                    <p className={`text-[10px] font-mono transition-colors ${isImpacting ? 'text-amber-500 drop-shadow-[0_0_4px_rgba(245,158,11,0.8)]' : 'text-[#a855f7] drop-shadow-[0_0_2px_rgba(168,85,247,0.8)]'}`}>
                      &gt; CRITICAL IMPACT · {impactDb} dB
                    </p>
                    <p className="text-[10px] font-mono text-[#f0f0f0]/30">
                      &gt; Playing /sfx/{activePack.toLowerCase()}/{packs.find(p => p.name === activePack)?.sfx}
                    </p>
                    <p className={`text-[10px] font-mono transition-opacity duration-150 ${isImpacting ? 'text-amber-400 font-bold drop-shadow-[0_0_4px_rgba(251,191,36,0.8)]' : 'text-amber-400/50'}`}>
                      &gt; Screen crack triggered 💀
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </SpotlightCard>

        <div className="flex flex-col items-start gap-4 flex-1">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-[#f0f0f0]">TantuSpank</h2>
          <p className="text-[#f0f0f0]/70 whitespace-pre-wrap leading-relaxed text-sm">
            A fully functional, offline-first Windows desktop application that operates as a real-time audio processing engine disguised as an interactive prank utility. It perfectly filters out human voices & ambient noise to isolate the low-frequency bass of a physical knock on your desk.
            {"\n\n"}
            It dynamically maps a noise-floor threshold, triggering unique sounds from 7 distinct categories with dynamic volumetrics scaling to your hit force. Complete with temporal combo streaks and a Win32 API fake "cracked screen" hardware intercept overlay.
          </p>

          <div className="flex flex-wrap gap-2 my-2">
            {["7 Sound Categories", "Combo Streaks", "Dynamic Volumetrics", "Auto-Calibrating", "Screen Crack API", "0.00% CPU Idle"].map(f => (
              <span key={f} className="tag-pill">{f}</span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 w-full">
             <div className="flex flex-col sm:flex-row gap-3">
                <a href="/api/download/tantuspank" className="btn-accent px-5 py-2.5 rounded-md text-sm font-medium text-center">
                  Download for Windows .exe
                </a>
             </div>
             <p className="text-[10px] text-[#f0f0f0]/20 uppercase tracking-widest font-mono">Windows 10/11 · Any mic · No special hardware needed</p>
          </div>
        </div>
      </motion.article>

      {/* === TantuMind === */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="group md:mt-48 flex flex-col"
      >
        <SpotlightCard className="mb-8 rounded-lg">
          <div className="relative overflow-hidden aspect-[4/5] rounded-lg bg-[#0a0c12] border border-[#f0f0f0]/5 group-hover:border-[#a855f7]/30 transition-colors duration-500 flex flex-col">
            {/* Tags */}
            <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
              <span className="font-mono text-[10px] bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-1 uppercase tracking-widest rounded shadow-sm">Coming Soon</span>
              <span className="font-mono text-[10px] bg-[#f0f0f0]/5 text-[#f0f0f0]/60 border border-[#f0f0f0]/10 px-2 py-1 uppercase tracking-widest rounded shadow-sm">Android</span>
              <span className="font-mono text-[10px] bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/20 px-2 py-1 uppercase tracking-widest rounded shadow-sm">On-Device AI</span>
            </div>

            {/* Custom Visual: AI Ecosystem */}
            <div className="flex-1 flex flex-col items-center justify-center relative p-8 mt-12 w-full h-full">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),#0a0c12_70%)] pointer-events-none"></div>

               {/* Center Graphic: Orbital Constellation */}
               <div className="relative w-full max-w-[280px] aspect-square mx-auto mb-6">
                 {/* Orbit rings */}
                 <div className="absolute inset-[15%] rounded-full border border-[#f0f0f0]/[0.04]"></div>
                 <div className="absolute inset-[5%] rounded-full border border-dashed border-[#f0f0f0]/[0.03]"></div>

                 {/* Center glow */}
                 <div className="absolute inset-[25%] rounded-full bg-[#a855f7]/[0.08] blur-[30px]"></div>

                 {/* Center node */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-[#0d0f15] border-2 border-[#a855f7]/30 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.15)] group-hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-shadow duration-500 overflow-hidden">
                      <Image src="/tantumind-logo.png" alt="TantuMind" width={36} height={36} className="rounded-full" />
                    </div>
                    <span className="text-[8px] font-mono font-bold text-[#f0f0f0]/60 mt-1 tracking-wider uppercase">TantuMind</span>
                 </div>

                 {/* Connecting Threads */}
                 <style>{`
                   @keyframes power-flow {
                     0% { stroke-dashoffset: 24; }
                     100% { stroke-dashoffset: 0; }
                   }
                   .animate-power {
                     animation: power-flow 1s linear infinite;
                   }
                 `}</style>
                 <svg className="absolute inset-0 w-full h-full z-[5] pointer-events-none">
                   <defs>
                     <linearGradient id="grad-api-1" gradientUnits="userSpaceOnUse" x1="50%" y1="50%" x2="50%" y2="19%">
                       <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                       <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
                     </linearGradient>
                     <linearGradient id="grad-api-2" gradientUnits="userSpaceOnUse" x1="50%" y1="50%" x2="92%" y2="30%">
                       <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                       <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
                     </linearGradient>
                     <linearGradient id="grad-api-3" gradientUnits="userSpaceOnUse" x1="50%" y1="50%" x2="85%" y2="80%">
                       <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                       <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
                     </linearGradient>
                     <linearGradient id="grad-local-1" gradientUnits="userSpaceOnUse" x1="50%" y1="50%" x2="15%" y2="80%">
                       <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
                       <stop offset="100%" stopColor="#22c55e" stopOpacity="0.1" />
                     </linearGradient>
                     <linearGradient id="grad-local-2" gradientUnits="userSpaceOnUse" x1="50%" y1="50%" x2="8%" y2="30%">
                       <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
                       <stop offset="100%" stopColor="#22c55e" stopOpacity="0.1" />
                     </linearGradient>
                   </defs>

                   {/* Base Glow Lines */}
                   <line x1="50%" y1="50%" x2="50%" y2="19%" stroke="url(#grad-api-1)" strokeWidth="1.5" />
                   <line x1="50%" y1="50%" x2="92%" y2="30%" stroke="url(#grad-api-2)" strokeWidth="1.5" />
                   <line x1="50%" y1="50%" x2="85%" y2="80%" stroke="url(#grad-api-3)" strokeWidth="1.5" />
                   <line x1="50%" y1="50%" x2="15%" y2="80%" stroke="url(#grad-local-1)" strokeWidth="1.5" />
                   <line x1="50%" y1="50%" x2="8%" y2="30%" stroke="url(#grad-local-2)" strokeWidth="1.5" />

                   {/* Animated Power Flow Lines */}
                   <line x1="50%" y1="50%" x2="50%" y2="19%" stroke="#a855f7" strokeWidth="2" strokeDasharray="4 20" className="animate-power opacity-60" />
                   <line x1="50%" y1="50%" x2="92%" y2="30%" stroke="#a855f7" strokeWidth="2" strokeDasharray="4 20" className="animate-power opacity-60" />
                   <line x1="50%" y1="50%" x2="85%" y2="80%" stroke="#a855f7" strokeWidth="2" strokeDasharray="4 20" className="animate-power opacity-60" />
                   <line x1="50%" y1="50%" x2="15%" y2="80%" stroke="#22c55e" strokeWidth="2" strokeDasharray="4 20" className="animate-power opacity-60" />
                   <line x1="50%" y1="50%" x2="8%" y2="30%" stroke="#22c55e" strokeWidth="2" strokeDasharray="4 20" className="animate-power opacity-60" />
                 </svg>

                 {/* Model Nodes */}
                 {[
                   { name: 'GPT-4o', icon: '⬡', type: 'api' as const, top: '5%', left: '50%', tx: '-50%', ty: '0' },
                   { name: 'Opus', icon: '✦', type: 'api' as const, top: '30%', left: '92%', tx: '-50%', ty: '-50%' },
                   { name: 'Gemini', icon: '◈', type: 'api' as const, top: '80%', left: '85%', tx: '-50%', ty: '-50%' },
                   { name: 'Gemma', icon: '◆', type: 'local' as const, top: '80%', left: '15%', tx: '-50%', ty: '-50%' },
                   { name: 'Qwen', icon: '⬢', type: 'local' as const, top: '30%', left: '8%', tx: '-50%', ty: '-50%' },
                 ].map((m) => (
                   <div
                     key={m.name}
                     className="absolute z-20 flex flex-col items-center group/node"
                     style={{ top: m.top, left: m.left, transform: `translate(${m.tx}, ${m.ty})` }}
                   >
                     <span className={`text-[6px] font-mono uppercase tracking-wider px-1 py-0.5 rounded mb-0.5 ${
                       m.type === 'api'
                         ? 'bg-[#a855f7]/15 text-[#a855f7] border border-[#a855f7]/20'
                         : 'bg-[#22c55e]/15 text-[#22c55e] border border-[#22c55e]/20'
                     }`}>
                       {m.type === 'api' ? 'API' : 'LOCAL'}
                     </span>
                     <div className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-300 bg-[#0d0f15] hover:scale-110 cursor-default ${
                       m.type === 'api'
                         ? 'border-[#f0f0f0]/[0.06] hover:border-[#a855f7]/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]'
                         : 'border-[#f0f0f0]/[0.06] hover:border-[#22c55e]/40 hover:shadow-[0_0_15px_rgba(34,197,94,0.15)]'
                     }`}>
                       <span className={`text-sm transition-colors duration-300 ${
                         m.type === 'api'
                           ? 'text-[#f0f0f0]/30 group-hover/node:text-[#a855f7]'
                           : 'text-[#f0f0f0]/30 group-hover/node:text-[#22c55e]'
                       }`}>{m.icon}</span>
                     </div>
                     <span className="text-[8px] font-mono text-[#f0f0f0]/30 mt-0.5 group-hover/node:text-[#f0f0f0]/70 transition-colors duration-300">{m.name}</span>
                   </div>
                 ))}
               </div>

               {/* UI Panel */}
               <div className="w-full bg-[#0d0f15] border border-[#f0f0f0]/5 rounded-lg p-4 flex flex-col gap-3 relative z-10 backdrop-blur-md">
                  <div className="flex justify-between items-center px-1 border-b border-[#f0f0f0]/5 pb-2">
                     <div className="flex items-center gap-2">
                       <span className="text-xl">🔒</span>
                       <span className="text-[10px] font-mono text-[#f0f0f0]/50 tracking-widest uppercase">Vault Secured</span>
                     </div>
                     <span className="text-[10px] border border-green-500/30 text-green-400 bg-green-500/10 px-2 py-0.5 rounded uppercase font-bold">0 Network</span>
                  </div>

                  <div className="pt-1 flex flex-col gap-2">
                    <div className="flex justify-between items-center text-[10px] font-mono text-[#f0f0f0]/70 uppercase">
                      <span>Gemma_3B_Q4</span>
                      <span className="text-[#a855f7] italic">Loaded</span>
                    </div>
                    <div className="w-full bg-[#f0f0f0]/5 h-1.5 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-[#a855f7] relative overflow-hidden">
                         <div className="absolute inset-0 bg-[#f0f0f0]/30 w-full animate-shimmer opacity-50"></div>
                      </div>
                    </div>
                    <p className="text-[8px] sm:text-[10px] font-mono text-[#f0f0f0]/20 mt-1 uppercase tracking-wider">
                      // Memory encrypted locally...
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </SpotlightCard>

        <div className="flex flex-col items-start gap-4 flex-1">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-[#f0f0f0]">TantuMind</h2>
          <p className="text-[#f0f0f0]/70 whitespace-pre-wrap leading-relaxed text-sm">
            A privacy-first, 100% on-device AI digital wellbeing agent built for Android. Unlike cloud AIs that send your data to servers, TantuMind lives entirely inside your phone's processor as an empathetic coach powered by CBT and the Fogg Tiny Habits methodology.
            {"\n\n"}
            Built on a complex architecture featuring a 3-tier memory system inspired by human cognitive science, local RAG Semantic Search engines, PC WebSockets proxy syncing, and the cutting-edge LiteRT-LM framework running natively on your NPU. Plus, so much more waiting to be discovered at launch...
          </p>

          <div className="flex flex-wrap gap-2 my-2">
            {["LiteRT-LM NPU Inference", "3-tier Memory RAG", "COACHING UI", "PC Sync Hub", "Opt-in Firewall", "and more..."].map(f => (
              <span key={f} className="tag-pill">{f}</span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 w-full">
             <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/#waitlist" className="btn-outline px-5 py-2.5 rounded-md text-sm font-medium text-center">
                  Join Waitlist
                </Link>
             </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export default ProductGrid;
