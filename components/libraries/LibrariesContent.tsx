'use client';

import { motion } from 'framer-motion';
import React from 'react';

/* Custom SVG icons — each visually represents its category */
const SkillsIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="14" y1="4" x2="10" y2="20" />
  </svg>
);

const PromptsIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="3" width="20" height="18" rx="2" />
    <polyline points="6 9 9 12 6 15" />
    <line x1="12" y1="15" x2="18" y2="15" />
  </svg>
);

const AgentsIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="4" y="4" width="16" height="16" rx="4" />
    <circle cx="9" cy="11" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="15" cy="11" r="1.5" fill="currentColor" stroke="none" />
    <path d="M9.5 15.5c0 0 1.5 1.5 2.5 1.5s2.5-1.5 2.5-1.5" />
    <line x1="12" y1="1" x2="12" y2="4" />
    <circle cx="12" cy="1" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const IconMap: Record<string, React.FC<{ className?: string }>> = {
  skills: SkillsIcon,
  prompts: PromptsIcon,
  agents: AgentsIcon,
};

const cards = [
  { iconKey: 'skills', title: 'Skills', desc: 'Frameworks and patterns from real shipped projects.' },
  { iconKey: 'prompts', title: 'Prompts', desc: 'Tested prompts that work in production. Not theory. Not fluff.' },
  { iconKey: 'agents', title: 'Agents', desc: 'Pre-built agent blueprints. Ready to drop into your workflow.' },
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function LibrariesContent() {
  return (
    <div className="max-w-[1200px] mx-auto px-8 lg:px-12 flex flex-col items-center">

      {/* Header Section */}
      <div className="text-center mt-12 md:mt-24 mb-20 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="text-[#a855f7] font-mono text-sm tracking-widest uppercase mb-6 flex items-center justify-center gap-3"
        >
          <span className="w-8 h-[1px] bg-[#a855f7]/30"></span>
          // RESOURCE ECOSYSTEM
          <span className="w-8 h-[1px] bg-[#a855f7]/30"></span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.15, duration: 0.7, ease }}
          className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tighter mb-6 text-[#f0f0f0] leading-tight"
        >
          The Library of <br className="hidden md:block" />
          <span className="text-[#a855f7]">Digital Intent</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease }}
          className="text-[#f0f0f0]/70 font-body text-lg md:text-xl leading-relaxed max-w-xl mx-auto"
        >
          Skills, prompts, and agent blueprints from building in public. Free to use. Being built now.
        </motion.p>
      </div>

      {/* Preview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-24">
        {cards.map((card, i) => {
          const Icon = IconMap[card.iconKey];
          return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.12, duration: 0.6, ease }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="glass-card group relative p-8 rounded-lg flex flex-col items-start overflow-hidden h-full cursor-default"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.06),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="absolute top-6 right-6">
              <div className="bg-[#a855f7]/10 border border-[#a855f7]/20 text-[#a855f7] text-[10px] uppercase tracking-wider font-mono px-3 py-1 rounded transition-all duration-500">
                Coming Soon
              </div>
            </div>

            <div className="w-12 h-12 bg-[#f0f0f0]/[0.03] rounded-xl flex items-center justify-center mb-6 border border-[#f0f0f0]/5 group-hover:border-[#a855f7]/20 group-hover:bg-[#a855f7]/5 transition-all duration-500">
              <Icon className="w-6 h-6 text-[#f0f0f0]/70 group-hover:text-[#a855f7] transition-colors duration-500" />
            </div>

            <h3 className="text-xl font-headline font-bold text-[#f0f0f0] mb-3 tracking-tight transition-all duration-500 group-hover:text-[#a855f7]">{card.title}</h3>
            <p className="text-[#f0f0f0]/70 font-body leading-relaxed text-sm">
              {card.desc}
            </p>
          </motion.div>
          );
        })}
      </div>

      {/* Notify Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease }}
        className="w-full max-w-xl mx-auto flex flex-col items-center text-center pb-12"
      >
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
            className="bg-[#a855f7] text-[#080A0F] font-headline font-bold uppercase tracking-wider px-8 py-4 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all text-sm md:text-base whitespace-nowrap rounded-none"
          >
            Notify Me
          </button>
        </form>
      </motion.div>

    </div>
  );
}
