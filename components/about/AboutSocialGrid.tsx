'use client';

import React from 'react';
import { motion } from 'framer-motion';

/* Inline SVG logos — purple accent, minimalistic */
const DiscordLogo = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z"/>
  </svg>
);

const YouTubeLogo = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const InstagramLogo = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const XLogo = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const socials = [
  {
    href: 'https://discord.gg/CEd2ZJw2Gx',
    Logo: DiscordLogo,
    title: 'Discord',
    desc: 'Join our community. Get help, share ideas, and build together.',
    cta: 'Join Discord',
    span: 'md:col-span-2 md:row-span-2',
    logoSize: 'w-12 h-12',
  },
  {
    href: 'https://youtube.com/@tantucore',
    Logo: YouTubeLogo,
    title: 'YouTube',
    desc: 'Watch builds, deep dives, and behind-the-scenes dev content.',
    cta: 'Watch Videos',
    span: '',
    logoSize: 'w-8 h-8',
  },
  {
    href: 'https://instagram.com/tantucore',
    Logo: InstagramLogo,
    title: 'Instagram',
    desc: 'Dev snapshots, progress updates, and community moments.',
    cta: 'Follow Us',
    span: '',
    logoSize: 'w-8 h-8',
  },
  {
    href: 'https://x.com/tantucore',
    Logo: XLogo,
    title: 'X',
    desc: 'Real-time updates, announcements, and shipping threads.',
    cta: 'Follow on X',
    span: 'md:col-span-2',
    logoSize: 'w-8 h-8',
    horizontal: true,
  },
];

const AboutSocialGrid: React.FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-8 md:px-12 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="mb-16"
      >
        <h2 className="font-headline text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight mb-4 text-[#f0f0f0]">Find us online.</h2>
        <p className="text-lg text-[#f0f0f0]/70">We&apos;re building in public. Come watch it happen.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {socials.map((s, i) => (
          <motion.a
            key={s.title}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              delay: i * 0.1,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
            className={`group glass-card relative flex ${s.horizontal ? 'items-center gap-6 p-8' : 'flex-col items-center justify-center p-6'} min-h-[200px] ${s.span} gap-4 text-center rounded-lg overflow-hidden`}
          >
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-[#a855f7]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {s.horizontal ? (
              <>
                <div className="flex flex-col items-center gap-3 relative z-10">
                  <s.Logo className={`${s.logoSize} text-[#a855f7] group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.5)] transition-all duration-300`} />
                  <h3 className="font-headline text-lg font-semibold text-[#f0f0f0]">{s.title}</h3>
                </div>
                <div className="text-center md:text-left flex-1 relative z-10">
                  <p className="text-[#f0f0f0]/70 max-w-md mx-auto md:mx-0">{s.desc}</p>
                  <span className="mt-4 flex items-center justify-center md:justify-start gap-2 font-headline text-[#a855f7]/60 group-hover:text-[#a855f7] transition-colors">
                    {s.cta}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </>
            ) : (
              <>
                <s.Logo className={`${s.logoSize} text-[#a855f7] group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.5)] transition-all duration-300 relative z-10`} />
                <h3 className="font-headline text-lg font-semibold text-[#f0f0f0] relative z-10">{s.title}</h3>
                <p className="text-[#f0f0f0]/70 text-center max-w-md relative z-10">{s.desc}</p>
                <span className="mt-4 flex items-center gap-2 font-headline text-[#a855f7]/60 group-hover:text-[#a855f7] transition-colors relative z-10">
                  {s.cta}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </>
            )}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default AboutSocialGrid;
