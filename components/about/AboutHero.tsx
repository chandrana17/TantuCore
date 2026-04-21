'use client';

import { motion } from 'framer-motion';
import AboutTerminal from './AboutTerminal';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function AboutHero() {
  const paragraphs = [
    'TantuCore is one person building software that should exist.',
    'Chand Rana. 18. Bhopal, India.',
    'Not a team. Not funded. Not trying to be the next big thing.',
    'Just someone who builds at 3am because the idea won\u0027t leave them alone.',
    <>TantuSpank started as a joke. It shipped.<br />TantuMind started as a need. It&apos;s coming.</>,
    <>Everything here is local, private, and free.<br />Not a marketing angle. Just how it should work.</>,
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-8 md:px-12 py-24 min-h-[614px] flex flex-col justify-center relative overflow-hidden">
      {/* Accent glow */}
      <div className="absolute top-[20%] left-[5%] w-[300px] h-[300px] rounded-full bg-[#a855f7]/[0.03] blur-[100px] pointer-events-none"></div>

      <div className="grid grid-cols-12 gap-8 items-start relative z-10">
        {/* Left: Text Content */}
        <div className="col-span-12 md:col-span-7">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease }}
            className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#a855f7] mb-6 block"
          >
            // THE BUILDER
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.15, duration: 0.7, ease }}
            className="font-headline text-[3.5rem] md:text-[5rem] leading-[1.1] font-bold tracking-tight mb-8 text-[#f0f0f0]"
          >
            Built in public. Shipped alone.
          </motion.h1>
          <div className="text-lg text-[#f0f0f0]/70 max-w-2xl leading-relaxed space-y-6">
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease }}
                className="hover:text-[#a855f7] transition-colors duration-300 cursor-default"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Right: Terminal */}
        <div className="col-span-12 md:col-span-5 flex items-start pt-0 md:pt-12">
          <AboutTerminal />
        </div>
      </div>
    </section>
  );
}