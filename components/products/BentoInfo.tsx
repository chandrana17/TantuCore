export default function BentoInfo() {
  return (
    <section className="mt-48 grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* Main content — 8 cols */}
      <div className="md:col-span-8 bg-surface-container-low p-12 flex flex-col justify-between min-h-[400px] group hover:bg-surface-container transition-colors duration-500">
        <div className="max-w-md">
          <h3 className="text-2xl font-headline font-semibold mb-6">Built for people who actually use their devices.</h3>
          <p className="text-on-surface-variant mb-8">TantuCore makes software that fits into your life, not the other way around. Private by default. Local by design. Weird enough to be useful.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Fast', sub: 'Zero unnecessary bloat' },
            { label: 'Public', sub: 'Building in the open' },
            { label: 'Native', sub: 'Deep OS integration' },
            { label: 'Weird', sub: 'Unconventional by design' },
          ].map(item => (
            <div key={item.label} className="group/item hover:-translate-y-1 transition-transform duration-300 cursor-default">
              <span className="block text-4xl font-headline font-bold text-primary mb-1">{item.label}</span>
              <span className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant">{item.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Accent card — 4 cols */}
      <div className="md:col-span-4 bg-[#1a1c1a] p-10 flex flex-col justify-between min-h-[400px] relative overflow-hidden group">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(107,56,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(107,56,212,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
        
        <div className="relative z-10">
          <span className="font-headline text-[10px] uppercase tracking-[0.3em] text-primary/60 block mb-4">// Philosophy</span>
          <blockquote className="font-headline text-2xl font-bold text-white/90 leading-snug tracking-tight">
            &ldquo;Ship it broken. Fix it live. Let them watch.&rdquo;
          </blockquote>
        </div>
        
        <div className="relative z-10 flex flex-col gap-3 mt-auto">
          <div className="h-[1px] w-full bg-white/10"></div>
          <div className="flex justify-between items-center">
            <span className="text-white/30 font-mono text-[10px] uppercase tracking-widest">TantuCore</span>
            <span className="text-primary/50 font-mono text-[10px]">est. 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
