'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavBarProps {
  activePage: 'home' | 'products' | 'libraries' | 'about';
}

export default function NavBar({ activePage }: NavBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '/products', label: 'Products', key: 'products' as const },
    { href: '/libraries', label: 'Libraries', key: 'libraries' as const },
    { href: '/about', label: 'About', key: 'about' as const },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fcf9f8]/70 backdrop-blur-xl border-b border-primary/10">
      <div className="flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto">
        <a 
          className="text-xl font-bold tracking-tighter text-[#1c1b1b] font-headline" 
          href="/"
        >
          TANTUCORE
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map(link => (
            <Link 
              key={link.key}
              href={link.href} 
              className={`
                ${activePage === link.key ? 'text-primary border-b-2 border-primary pb-1' : 'text-[#1c1b1b] opacity-70 hover:opacity-100 transition-opacity duration-300'}
                font-headline font-bold tracking-tight
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2 text-[10px] font-headline tracking-widest text-[#1c1b1b]/70 border border-primary/20 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            <span className="uppercase">v1.0.0 out now</span>
          </div>
          <a 
            href="https://github.com/chandrana17/TantuSpank/releases/download/v1.0.0/TantuSpank_Setup_v1.0.0.exe"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-primary text-on-primary px-6 py-2 text-sm font-headline font-bold scale-95 hover:scale-100 active:scale-90 transition-all uppercase tracking-widest rounded-full"
          >
            Download TantuSpank
          </a>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#1c1b1b] transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#1c1b1b] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#1c1b1b] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div className={`md:hidden fixed inset-0 top-[65px] bg-[#fcf9f8]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-start pt-16 gap-8 transition-all duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {navLinks.map(link => (
          <Link
            key={link.key}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className={`text-2xl font-headline font-bold tracking-tight transition-colors ${activePage === link.key ? 'text-primary' : 'text-[#1c1b1b]/70 hover:text-[#1c1b1b]'}`}
          >
            {link.label}
          </Link>
        ))}
        <a 
          href="https://github.com/chandrana17/TantuSpank/releases/download/v1.0.0/TantuSpank_Setup_v1.0.0.exe"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileOpen(false)}
          className="bg-primary text-on-primary px-8 py-3 text-sm font-headline font-bold uppercase tracking-widest rounded-full mt-4"
        >
          Download TantuSpank
        </a>
      </div>
    </nav>
  );
}