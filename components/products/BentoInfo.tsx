'use client';

import { motion } from 'framer-motion';

const pillars = [
  { label: 'Fast', sub: 'Zero unnecessary bloat' },
  { label: 'Public', sub: 'Building in the open' },
  { label: 'Native', sub: 'Deep OS integration' },
  { label: 'Weird', sub: 'Unconventional by design' },
];

export default function BentoInfo() {
  return (
    <section className="mt-48 grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* Main content — 8 cols */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="md:col-span-8 glass-card p-12 flex flex-col justify-between min-h-[400px] rounded-lg"
      >
        <div className="max-w-md">
          <h3 className="text-2xl font-headline font-semibold mb-6 text-[#f0f0f0]">Built for people who actually use their devices.</h3>
          <p className="text-[#f0f0f0]/70 mb-8">TantuCore makes software that fits into your life, not the other way around. Private by default. Local by design. Weird enough to be useful.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {pillars.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="cursor-default"
            >
              <span className="block text-4xl font-headline font-bold text-[#a855f7] mb-1">{item.label}</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#f0f0f0]/30">{item.sub}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Accent card — 4 cols */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="md:col-span-4 bg-[#0d1017] p-10 flex flex-col justify-between min-h-[400px] relative overflow-hidden rounded-lg border border-[#f0f0f0]/5 group hover:border-[#a855f7]/20 transition-colors duration-500"
      >
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 geo-grid-dense pointer-events-none"></div>

        {/* Hover glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

        <div className="relative z-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#a855f7]/50 block mb-4">// Philosophy</span>
          <blockquote className="font-headline text-2xl font-bold text-[#f0f0f0]/90 leading-snug tracking-tight">
            &ldquo;Ship it broken. Fix it live. Let them watch.&rdquo;
          </blockquote>
        </div>

        <div className="relative z-10 flex flex-col gap-3 mt-auto">
          <div className="h-[1px] w-full bg-[#f0f0f0]/5"></div>
          <div className="flex justify-between items-center">
            <span className="text-[#f0f0f0]/20 font-mono text-[10px] uppercase tracking-widest">TantuCore</span>
            <span className="text-[#a855f7]/70 font-mono text-[10px]">est. 2026</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
