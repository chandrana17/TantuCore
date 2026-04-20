import Link from 'next/link';

export default function HeroContent() {
  return (
    <div className="lg:col-span-4 order-2 lg:order-1">
      <div className="space-y-8 max-w-sm">
        <div className="inline-block border border-outline-variant/30 px-3 py-1">
          <span className="text-[10px] font-headline uppercase tracking-[0.2em] text-primary">// small tools. real impact.</span>
        </div>
        <p className="text-lg text-on-surface-variant leading-relaxed opacity-80">
          Every app starts as a thread. We pull until something real comes out.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link href="/products" className="group relative px-8 py-4 bg-primary text-on-primary font-headline font-bold text-xs uppercase tracking-widest overflow-hidden transition-all hover:pr-12 inline-block text-center">
            <span className="relative z-10">See What We Built</span>
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all text-sm">arrow_forward</span>
          </Link>
          <a href="https://github.com/tantucore/tantuspank/releases/latest" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-outline-variant/40 text-on-surface font-headline font-bold text-xs uppercase tracking-widest hover:bg-surface-container-low transition-colors inline-block text-center">
            Download Free
          </a>
        </div>
        
        <div className="pt-6 flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full border border-outline-variant/20 text-[10px] uppercase tracking-wider text-on-surface-variant opacity-70">Free forever</span>
          <span className="px-3 py-1 rounded-full border border-outline-variant/20 text-[10px] uppercase tracking-wider text-on-surface-variant opacity-70">No cloud</span>
          <span className="px-3 py-1 rounded-full border border-outline-variant/20 text-[10px] uppercase tracking-wider text-on-surface-variant opacity-70">No tracking</span>
          <span className="px-3 py-1 rounded-full border border-outline-variant/20 text-[10px] uppercase tracking-wider text-on-surface-variant opacity-70">Made in India</span>
          <span className="px-3 py-1 rounded-full border border-outline-variant/20 text-[10px] uppercase tracking-wider text-on-surface-variant opacity-70">Built alone</span>
        </div>
      </div>
    </div>
  );
}
