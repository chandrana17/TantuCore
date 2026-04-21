'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

interface ModelNode {
  name: string;
  type: 'api' | 'local';
  icon: string;
  angle: number; // degrees on the orbit
  desc: string;
}

const models: ModelNode[] = [
  { name: 'GPT-4o', type: 'api', icon: '⬡', angle: 0, desc: 'OpenAI · API · Cloud inference' },
  { name: 'Opus', type: 'api', icon: '✦', angle: 72, desc: 'Anthropic · API · Deep reasoning' },
  { name: 'Gemini', type: 'api', icon: '◈', angle: 144, desc: 'Google · API · Multimodal' },
  { name: 'Gemma', type: 'local', icon: '◆', angle: 216, desc: 'Google · Local · On-device AI' },
  { name: 'Qwen', type: 'local', icon: '⬢', angle: 288, desc: 'Alibaba · Local · Edge inference' },
];

export default function OrbitalConstellation() {
  const [active, setActive] = useState<number | null>(null);

  // Orbit radius (responsive)
  const orbitRadius = 160;
  const centerSize = 100;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease }}
      className="py-20 md:py-28 flex flex-col items-center"
    >
      {/* Section label */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
        className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#a855f7] mb-4"
      >
        // AI Ecosystem
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6, ease }}
        className="text-2xl md:text-3xl font-headline font-bold text-[#f0f0f0] tracking-tight mb-16 text-center"
      >
        One core. Every model.
      </motion.h2>

      {/* Orbital diagram */}
      <div className="relative" style={{ width: orbitRadius * 2 + 120, height: orbitRadius * 2 + 120 }}>

        {/* Orbit rings */}
        <div
          className="absolute rounded-full border border-[#f0f0f0]/[0.04]"
          style={{
            width: orbitRadius * 2,
            height: orbitRadius * 2,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div
          className="absolute rounded-full border border-dashed border-[#f0f0f0]/[0.03]"
          style={{
            width: orbitRadius * 2 + 60,
            height: orbitRadius * 2 + 60,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Center glow */}
        <div
          className="absolute rounded-full bg-[#a855f7]/[0.06] blur-[60px]"
          style={{
            width: 200,
            height: 200,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Center node - TantuMind logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, ease }}
          className="absolute flex flex-col items-center justify-center z-10"
          style={{
            width: centerSize,
            height: centerSize,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="w-[90px] h-[90px] rounded-full bg-[#0d0f15] border-2 border-[#a855f7]/30 flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.15)]">
            <Image
              src="/tantumind-logo.png"
              alt="TantuMind"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
          <span className="text-[11px] font-mono font-bold text-[#f0f0f0] mt-2 tracking-wide">TantuMind</span>
        </motion.div>

        {/* Model nodes */}
        {models.map((model, i) => {
          const rad = (model.angle * Math.PI) / 180;
          const x = Math.cos(rad) * orbitRadius;
          const y = Math.sin(rad) * orbitRadius;
          const isActive = active === i;

          return (
            <motion.div
              key={model.name}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5, ease }}
              className="absolute z-20 flex flex-col items-center cursor-pointer group"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Connection line to center */}
              <svg
                className="absolute pointer-events-none"
                style={{
                  width: Math.abs(x) + 10,
                  height: Math.abs(y) + 10,
                  top: x >= 0 ? (y >= 0 ? 'auto' : `${-Math.abs(y)}px`) : (y >= 0 ? 'auto' : `${-Math.abs(y)}px`),
                  left: x >= 0 ? 'auto' : `${-Math.abs(x)}px`,
                  overflow: 'visible',
                  zIndex: -1,
                }}
              >
                <line
                  x1={x >= 0 ? Math.abs(x) : 0}
                  y1={y >= 0 ? Math.abs(y) : 0}
                  x2={x >= 0 ? 0 : Math.abs(x)}
                  y2={y >= 0 ? 0 : Math.abs(y)}
                  stroke={isActive ? (model.type === 'api' ? '#a855f7' : '#22c55e') : '#ffffff08'}
                  strokeWidth="1"
                  strokeDasharray={isActive ? 'none' : '4 4'}
                  className="transition-all duration-300"
                />
              </svg>

              {/* Node card */}
              <motion.div
                whileHover={{ scale: 1.12, y: -4 }}
                transition={{ duration: 0.25 }}
                className={`
                  relative w-[72px] h-[72px] rounded-xl flex flex-col items-center justify-center
                  border transition-all duration-300
                  ${isActive
                    ? model.type === 'api'
                      ? 'bg-[#a855f7]/10 border-[#a855f7]/40 shadow-[0_0_20px_rgba(168,85,247,0.2)]'
                      : 'bg-[#22c55e]/10 border-[#22c55e]/40 shadow-[0_0_20px_rgba(34,197,94,0.2)]'
                    : 'bg-[#0d0f15] border-[#f0f0f0]/[0.06]'
                  }
                `}
              >
                {/* Type badge */}
                <span className={`
                  absolute -top-2 left-1/2 -translate-x-1/2 text-[8px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded
                  ${model.type === 'api'
                    ? 'bg-[#a855f7]/15 text-[#a855f7] border border-[#a855f7]/20'
                    : 'bg-[#22c55e]/15 text-[#22c55e] border border-[#22c55e]/20'
                  }
                `}>
                  {model.type === 'api' ? 'API' : 'LOCAL'}
                </span>

                <span className={`text-xl mb-0.5 transition-colors duration-300 ${
                  isActive
                    ? model.type === 'api' ? 'text-[#a855f7]' : 'text-[#22c55e]'
                    : 'text-[#f0f0f0]/40'
                }`}>
                  {model.icon}
                </span>
              </motion.div>

              {/* Label */}
              <span className={`text-[11px] font-mono mt-2 tracking-wide transition-colors duration-300 ${
                isActive ? 'text-[#f0f0f0]' : 'text-[#f0f0f0]/40'
              }`}>
                {model.name}
              </span>

              {/* Tooltip on hover */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -bottom-10 whitespace-nowrap text-[10px] font-mono text-[#f0f0f0]/50 bg-[#0d0f15] border border-[#f0f0f0]/[0.06] px-3 py-1.5 rounded-md z-30"
                >
                  {model.desc}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.5, ease }}
        className="flex items-center gap-6 mt-12 font-mono text-[11px] text-[#f0f0f0]/40"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#a855f7]"></span>
          <span>API-Based</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span>
          <span>On-Device</span>
        </div>
      </motion.div>
    </motion.section>
  );
}
