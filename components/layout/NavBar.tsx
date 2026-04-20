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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#080A0F]/90 backdrop-blur-xl border-b border-[#E8FF47]/10' : 'bg-transparent border-b border-transparent'}`}>
      <div className="flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto">
        <Link
          className="text-xl font-bold tracking-tighter text-[#f0f0f0] font-headline hover:text-[#E8FF47] transition-colors"
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
                ${activePage === link.key 
                  ? 'text-[#E8FF47] border-b border-[#E8FF47]/50 pb-0.5' 
                  : 'text-[#f0f0f0]/50 hover:text-[#f0f0f0] transition-colors duration-300'}
                font-headline font-medium text-sm tracking-wide
              `}
            >
              {link.label}
            </Link>
          ))}
          {/* GitHub Link */}
          <a
            href="https://github.com/chandrana17"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f0f0f0]/50 hover:text-[#f0f0f0] transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2 text-[10px] font-mono tracking-widest text-[#E8FF47]/70 border border-[#E8FF47]/20 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8FF47] animate-pulse"></span>
            <span className="uppercase">v1.0.0 live</span>
          </div>
          <a
            href="https://github.com/chandrana17/TantuSpank/releases/download/v1.0.0/TantuSpank_Setup_v1.0.0.exe"
            target="_blank"
            rel="noopener noreferrer"
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
      <div className={`md:hidden fixed inset-0 top-[65px] bg-[#080A0F]/98 backdrop-blur-xl z-40 flex flex-col items-center justify-start pt-16 gap-8 transition-all duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {navLinks.map(link => (
          <Link
            key={link.key}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className={`text-2xl font-headline font-bold tracking-tight transition-colors ${activePage === link.key ? 'text-[#E8FF47]' : 'text-[#f0f0f0]/50 hover:text-[#f0f0f0]'}`}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://github.com/chandrana17"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileOpen(false)}
          className="text-lg font-headline text-[#f0f0f0]/50 hover:text-[#f0f0f0] transition-colors"
        >
          GitHub →
        </a>
        <a
          href="https://github.com/chandrana17/TantuSpank/releases/download/v1.0.0/TantuSpank_Setup_v1.0.0.exe"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileOpen(false)}
          className="btn-accent px-8 py-3 text-sm font-headline font-bold uppercase tracking-widest rounded-md mt-4"
        >
          Download TantuSpank
        </a>
      </div>
    </nav>
  );
}