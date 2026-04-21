'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutContact: React.FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-8 md:px-12 py-32 border-t border-[#f0f0f0]/5 relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 -z-10 geo-grid-dense pointer-events-none"></div>

      <div className="flex flex-col items-center text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="font-headline text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight mb-6 text-[#f0f0f0] hover:text-[#a855f7] transition-colors duration-500 cursor-default"
        >
          Say hello.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-lg text-[#f0f0f0]/70 max-w-2xl mb-12"
        >
          For collabs, press stuff, or just to say your desk has been bonked.
        </motion.p>
        <motion.a
          href="mailto:tantucore@gmail.com"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="glass-card px-8 py-4 rounded-lg group inline-block"
        >
          <span className="font-headline text-xl md:text-2xl text-[#f0f0f0] tracking-wide group-hover:text-[#a855f7] transition-colors duration-300">
            tantucore@gmail.com
          </span>
        </motion.a>
      </div>
    </section>
  );
};

export default AboutContact;
