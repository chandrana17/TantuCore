'use client';

import { motion } from 'framer-motion';
import MaterialIcon from '@/components/ui/MaterialIcon';

export default function PillarCards() {
  const pillars = [
    {
      num: '01',
      category: 'ARCHITECTURE',
      title: 'Local First',
      desc: 'Runs on your device. No servers. No subscriptions.',
      icon: 'devices',
    },
    {
      num: '02',
      category: 'INTERFACE',
      title: 'Zero Bloat',
      desc: 'One feature. Done right. Nothing you don\'t need.',
      icon: 'remove_circle_outline',
    },
    {
      num: '03',
      category: 'ECOSYSTEM',
      title: 'Free Forever',
      desc: 'Not a trial. Not freemium. Just free. Because it should be.',
      icon: 'volunteer_activism',
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-8 md:px-16 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[#f0f0f0]/5">
        {pillars.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="p-12 border-b md:border-b-0 md:border-r last:border-r-0 border-[#f0f0f0]/5 group hover:bg-[#f0f0f0]/[0.02] transition-all duration-500 relative overflow-hidden"
          >
            {/* Hover accent bar */}
            <div className="absolute left-0 top-0 w-[2px] h-0 bg-[#a855f7] group-hover:h-full transition-all duration-500"></div>

            {/* Hover top glow */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#a855f7]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="flex items-center gap-3 mb-6">
              <MaterialIcon icon={p.icon} className="text-xl text-[#a855f7]/70 group-hover:text-[#a855f7] transition-colors duration-300" />
              <span className="font-mono text-xs text-[#a855f7]/60 tracking-widest">{p.num} / {p.category}</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4 tracking-tight text-[#f0f0f0] group-hover:text-[#a855f7] transition-colors duration-300">{p.title}</h3>
            <p className="text-[#f0f0f0]/70 leading-relaxed text-sm">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
