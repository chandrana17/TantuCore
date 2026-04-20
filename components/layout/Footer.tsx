'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#080A0F] border-t border-[#f0f0f0]/5">
      {/* Accent gradient line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#E8FF47]/30 to-transparent"></div>

      <div className="max-w-[1440px] mx-auto px-8 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="font-headline text-xl font-bold tracking-tighter text-[#f0f0f0]">TANTUCORE</span>
            <span className="font-body text-sm text-[#f0f0f0]/40">Building in public. Shipping everything. Failures included.</span>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#E8FF47]/40 mb-1">Navigate</span>
            <Link href="/products" className="font-body text-sm text-[#f0f0f0]/40 hover:text-[#E8FF47] transition-colors">Products</Link>
            <Link href="/libraries" className="font-body text-sm text-[#f0f0f0]/40 hover:text-[#E8FF47] transition-colors">Libraries</Link>
            <Link href="/about" className="font-body text-sm text-[#f0f0f0]/40 hover:text-[#E8FF47] transition-colors">About</Link>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#E8FF47]/40 mb-1">Connect</span>
            <div className="flex flex-wrap gap-4">
              <a href="https://youtube.com/@tantucore" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-[#f0f0f0]/40 hover:text-[#E8FF47] transition-colors">YouTube</a>
              <a href="https://instagram.com/tantucore" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-[#f0f0f0]/40 hover:text-[#E8FF47] transition-colors">Instagram</a>
              <a href="https://x.com/tantucore" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-[#f0f0f0]/40 hover:text-[#E8FF47] transition-colors">X</a>
              <a href="https://discord.gg/CEd2ZJw2Gx" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-[#f0f0f0]/40 hover:text-[#E8FF47] transition-colors">Discord</a>
              <a href="https://github.com/chandrana17" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-[#f0f0f0]/40 hover:text-[#E8FF47] transition-colors">GitHub</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-[#f0f0f0]/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#f0f0f0]/20">
            &copy; 2026 TantuCore Studio. Built in public. Shipped alone.
          </span>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#E8FF47]/40 hover:text-[#E8FF47] transition-colors cursor-pointer"
          >
            Back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}