'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface NavBarProps {
  activePage: 'home' | 'products' | 'libraries' | 'about';
}

export default function NavBar({ activePage }: NavBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/products', label: 'Products', key: 'products' as const },
    { href: '/libraries', label: 'Libraries', key: 'libraries' as const },
    { href: '/about', label: 'About', key: 'about' as const },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#03040B]/80 backdrop-blur-2xl border-b border-[#a855f7]/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto">
        <Link
          className="text-xl font-bold tracking-tighter text-[#f0f0f0] font-headline hover:text-[#a855f7] transition-colors duration-300"
          href="/"
        >
          TANTUCORE
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map(link => (
            <Link
              key={link.key}
              href={link.href}
              className={`
                relative font-headline font-medium text-sm tracking-wide transition-colors duration-300
                ${activePage === link.key
                  ? 'text-[#a855f7]'
                  : 'text-[#f0f0f0]/50 hover:text-[#f0f0f0]'}
              `}
            >
              {link.label}
              {/* Active indicator dot */}
              {activePage === link.key && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#a855f7] shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2 text-[10px] font-mono tracking-widest text-[#a855f7]/70 border border-[#a855f7]/20 px-3 py-1.5 rounded-full bg-[#a855f7]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] animate-pulse shadow-[0_0_6px_rgba(168,85,247,0.6)]"></span>
            <span className="uppercase">v1.0.0 live</span>
          </div>
          <a
            href="/api/download/tantuspank"
            className="hidden md:inline-block btn-accent px-5 py-2 text-xs font-headline font-bold uppercase tracking-widest rounded-md"
          >
            Download
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#f0f0f0] transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#f0f0f0] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#f0f0f0] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div className={`md:hidden fixed inset-0 top-[65px] bg-[#03040B]/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-start pt-16 gap-8 transition-all duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {navLinks.map(link => (
          <Link
            key={link.key}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className={`text-2xl font-headline font-bold tracking-tight transition-colors ${activePage === link.key ? 'text-[#a855f7]' : 'text-[#f0f0f0]/50 hover:text-[#f0f0f0]'}`}
          >
            {link.label}
          </Link>
        ))}

        <a
          href="/api/download/tantuspank"
          onClick={() => setMobileOpen(false)}
          className="btn-accent px-8 py-3 text-sm font-headline font-bold uppercase tracking-widest rounded-md mt-4"
        >
          Download TantuSpank
        </a>
      </div>
    </nav>
  );
}