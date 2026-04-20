'use client';

import Link from 'next/link';

interface FooterProps {
  hoverColor?: string;
}

export default function Footer({ hoverColor }: FooterProps) {
  return (
    <footer className="w-full bg-[#fcf9f8] border-t border-primary/10">
      {/* Gradient accent line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="font-headline text-xl font-bold tracking-tighter text-[#1c1b1b]">TANTUCORE</span>
            <span className="font-headline text-sm text-on-surface-variant/70">Built in public. Shipped alone.</span>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <span className="font-headline text-[10px] uppercase tracking-[0.2em] text-[#1c1b1b]/40 mb-1">Navigate</span>
            <Link href="/products" className="font-headline text-sm text-[#1c1b1b]/60 hover:text-primary transition-colors">Products</Link>
            <Link href="/libraries" className="font-headline text-sm text-[#1c1b1b]/60 hover:text-primary transition-colors">Libraries</Link>
            <Link href="/about" className="font-headline text-sm text-[#1c1b1b]/60 hover:text-primary transition-colors">About</Link>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            <span className="font-headline text-[10px] uppercase tracking-[0.2em] text-[#1c1b1b]/40 mb-1">Connect</span>
            <div className="flex flex-wrap gap-4">
              <a href="https://youtube.com/@tantucore?si=IH3blYoPeLPITFhI" target="_blank" rel="noopener noreferrer" className="font-headline text-sm text-[#1c1b1b]/60 hover:text-primary transition-colors">YouTube</a>
              <a href="https://www.instagram.com/tantucore?igsh=eW9vdmtmcTRzNXlz" target="_blank" rel="noopener noreferrer" className="font-headline text-sm text-[#1c1b1b]/60 hover:text-primary transition-colors">Instagram</a>
              <a href="https://x.com/TantuCore" target="_blank" rel="noopener noreferrer" className="font-headline text-sm text-[#1c1b1b]/60 hover:text-primary transition-colors">X</a>
              <a href="https://discord.gg/CEd2ZJw2Gx" target="_blank" rel="noopener noreferrer" className="font-headline text-sm text-[#1c1b1b]/60 hover:text-primary transition-colors">Discord</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#1c1b1b]/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-headline text-[10px] uppercase tracking-[0.2em] text-[#1c1b1b]/40">
            &copy; 2026 TantuCore. All rights reserved.
          </span>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="font-headline text-[10px] uppercase tracking-[0.2em] text-primary/60 hover:text-primary transition-colors cursor-pointer"
          >
            Back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}