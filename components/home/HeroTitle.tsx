'use client';

import { motion } from 'framer-motion';

export default function HeroTitle() {
  return (
    <div className="lg:col-span-8 order-1 lg:order-2 flex flex-col items-start lg:items-end relative">
      {/* Accent glow behind text */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center lg:justify-end">
        <div className="w-full max-w-4xl h-full bg-gradient-to-br from-[#a855f7]/15 via-[#a855f7]/5 to-transparent blur-[120px] rounded-full transform scale-110 pointer-events-none opacity-60"></div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-[clamp(4rem,15vw,12rem)] leading-[0.85] font-headline font-bold tracking-tighter text-[#f0f0f0] flex flex-col items-start lg:items-end"
      >
        <span>&nbsp;<span style={{ fontSize: 'clamp(4rem, 15vw, 12rem)', letterSpacing: '-0.05em' }}>TANTU</span></span>
        <span className="flex items-center gap-1 relative px-4 py-2">
          <span>C</span>
          <img
            alt="Logo"
            className="h-[0.78em] w-auto relative z-10 p-0 m-0 border-0 outline-none drop-shadow-lg"
            src="/icon.png"
          />
          <span className="relative z-10">RE</span>
        </span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 flex items-center space-x-4 text-[#a855f7]"
      >
        <div className="h-[1px] w-32 bg-[#a855f7]/30"></div>
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#a855f7]/60">the thread that weaves</span>
      </motion.div>
    </div>
  );
}
