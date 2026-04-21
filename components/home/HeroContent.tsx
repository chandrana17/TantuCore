'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroContent() {
  return (
    <div className="lg:col-span-4 order-2 lg:order-1">
      <div className="space-y-8 max-w-sm">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block border border-[rgba(240,240,240,0.1)] px-3 py-1 bg-[#a855f7]/5 rounded-md"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#a855f7]">// We Build AI Apps &amp; Windows Tools</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-[#f0f0f0]/50 leading-relaxed"
        >
          Free. Built in public. Failures included. Every app starts as a thread — we pull until something real comes out.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 pt-4"
        >
          <Link href="/products" className="group relative btn-accent px-8 py-4 font-headline font-bold text-xs uppercase tracking-widest overflow-hidden inline-block text-center rounded-md">
            <span className="relative z-10">See What We Built</span>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all text-lg">&rarr;</span>
          </Link>
          <a href="/api/download/tantuspank" className="btn-outline px-8 py-4 font-headline font-bold text-xs uppercase tracking-widest inline-block text-center rounded-md">
            Download Free
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="pt-6 flex flex-wrap gap-2"
        >
          <span className="tag-pill">Local-First</span>
          <span className="tag-pill">0% Data Collected</span>
          <span className="tag-pill">Made in India</span>
          <span className="tag-pill">Built Solo</span>
        </motion.div>
      </div>
    </div>
  );
}
