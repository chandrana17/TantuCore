export default function HeroContent() {
  return (
    <div className="lg:col-span-4 order-2 lg:order-1">
      <div className="space-y-8 max-w-sm">
        <div className="inline-block border border-outline-variant/30 px-3 py-1">
          <span className="text-[10px] font-headline uppercase tracking-[0.2em] text-primary">Explore the Core</span>
        </div>
        <p className="text-lg text-on-surface-variant leading-relaxed opacity-80">
          Every app starts as a thread. We pull until something real comes out.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="group relative px-8 py-4 bg-primary text-on-primary font-headline font-bold text-xs uppercase tracking-widest overflow-hidden transition-all hover:pr-12">
            <span className="relative z-10">Explore Everything →</span>
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all text-sm">arrow_forward</span>
          </button>
          <button className="px-8 py-4 border border-outline-variant/40 text-on-surface font-headline font-bold text-xs uppercase tracking-widest hover:bg-surface-container-low transition-colors">
            View Products
          </button>
        </div>
      </div>
    </div>
  );
}
