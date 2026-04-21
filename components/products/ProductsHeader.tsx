'use client';

import { motion } from 'framer-motion';

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export default function ProductsHeader() {
  const words = 'Software that does one thing. Really well.'.split(' ');

  return (
    <header className="mb-24 grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="md:col-span-8">
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-[#a855f7] mb-4 block"
        >
          // small tools. real impact.
        </motion.span>
        <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-headline font-bold leading-[0.9] tracking-tighter mb-8 text-[#f0f0f0]">
          {words.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>
      </div>
      <div className="md:col-span-4 flex items-end">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-slate-300 font-body leading-relaxed max-w-sm text-lg"
        >
          We build focused apps for people tired of bloated software. Private, local, and a little weird — on purpose.
        </motion.p>
      </div>
    </header>
  );
}
