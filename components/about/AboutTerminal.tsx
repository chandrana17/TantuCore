'use client';

import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const lines = [
  { type: 'prompt', text: '$ tantucore' },
  { type: 'status', text: '◆ build mode activated · 1 builder ready' },
  { type: 'command', text: '> "ship everything. failures included."' },
  { type: 'blank', text: '' },
  { type: 'loading', text: '⠇ 1 builder planning...' },
  { type: 'check', label: 'TantuSpank:', text: 'knock detection engine v1.0.0' },
  { type: 'check', label: 'TantuMind:', text: 'local AI inference (in dev)' },
  { type: 'check', label: 'TantuCore:', text: 'website deployed to vercel' },
  { type: 'blank', text: '' },
  { type: 'shipped', text: '◆ shipped · 3am · 0 excuses' },
  { type: 'cursor', text: '' },
];

export default function AboutTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.7, ease }}
      className="w-full rounded-lg border border-[#f0f0f0]/[0.06] bg-[#0a0c12] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
    >
      {/* Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#f0f0f0]/[0.06] bg-[#0d0f15]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80"></div>
          <span className="ml-3 text-[11px] font-mono text-[#f0f0f0]/25 tracking-wide">tantucore — build log</span>
        </div>
        <span className="text-[10px] font-mono text-[#f0f0f0]/20 tracking-wider">bhopal · 1 builder</span>
      </div>

      {/* Terminal Body */}
      <div className="p-5 font-mono text-[13px] leading-relaxed space-y-1">
        {/* LIVE badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 border border-green-500/30 text-green-400 text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded bg-green-500/5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_6px_#22c55e]"></span>
            LIVE
          </span>
        </div>

        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.12, duration: 0.4, ease }}
          >
            {line.type === 'prompt' && (
              <p className="text-[#f0f0f0]/80 font-semibold">{line.text}</p>
            )}
            {line.type === 'status' && (
              <p className="text-green-400/80">{line.text}</p>
            )}
            {line.type === 'command' && (
              <p className="text-[#f0f0f0] font-medium">{line.text}</p>
            )}
            {line.type === 'blank' && (
              <p className="h-3"></p>
            )}
            {line.type === 'loading' && (
              <p className="text-[#f0f0f0]/30">{line.text}</p>
            )}
            {line.type === 'check' && (
              <p>
                <span className="text-green-400">✓</span>{' '}
                <span className="text-[#f0f0f0]/70 font-semibold">{line.label}</span>{' '}
                <span className="text-[#f0f0f0]/40">{line.text}</span>
              </p>
            )}
            {line.type === 'shipped' && (
              <p className="text-green-400 font-semibold">{line.text}</p>
            )}
            {line.type === 'cursor' && (
              <span className="inline-block w-2 h-4 bg-green-400 animate-pulse mt-1"></span>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
