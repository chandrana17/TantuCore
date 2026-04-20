import Link from 'next/link';

export default function HeroContent() {
  return (
    <div className="lg:col-span-4 order-2 lg:order-1">
      <div className="space-y-8 max-w-sm">
        <div className="inline-block border border-[#E8FF47]/20 px-3 py-1 bg-[#E8FF47]/5">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E8FF47]">// We Build AI Apps &amp; Windows Tools</span>
        </div>
        <p className="text-lg text-[#f0f0f0]/50 leading-relaxed">
          Free. Built in public. Failures included. Every app starts as a thread — we pull until something real comes out.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link href="/products" className="group relative btn-accent px-8 py-4 font-headline font-bold text-xs uppercase tracking-widest overflow-hidden inline-block text-center rounded-md">
            <span className="relative z-10">See What We Built</span>
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all text-sm">arrow_forward</span>
          </Link>
          <a href="https://github.com/chandrana17/TantuSpank/releases/download/v1.0.0/TantuSpank_Setup_v1.0.0.exe" target="_blank" rel="noopener noreferrer" className="btn-outline px-8 py-4 font-headline font-bold text-xs uppercase tracking-widest inline-block text-center rounded-md">
            Download Free
          </a>
        </div>

        <div className="pt-6 flex flex-wrap gap-2">
          <span className="tag-pill">Local-First</span>
          <span className="tag-pill">0% Data Collected</span>
          <span className="tag-pill">Made in India</span>
          <span className="tag-pill">Built Solo</span>
        </div>
      </div>
    </div>
  );
}
