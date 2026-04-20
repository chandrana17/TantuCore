export default function BentoInfo() {
  return (
    <section className="mt-48 grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* Main content — 8 cols */}
      <div className="md:col-span-8 glass-card p-12 flex flex-col justify-between min-h-[400px] rounded-lg">
        <div className="max-w-md">
          <h3 className="text-2xl font-headline font-semibold mb-6 text-[#f0f0f0]">Built for people who actually use their devices.</h3>
          <p className="text-[#f0f0f0]/40 mb-8">TantuCore makes software that fits into your life, not the other way around. Private by default. Local by design. Weird enough to be useful.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Fast', sub: 'Zero unnecessary bloat' },
            { label: 'Public', sub: 'Building in the open' },
            { label: 'Native', sub: 'Deep OS integration' },
            { label: 'Weird', sub: 'Unconventional by design' },
          ].map(item => (
            <div key={item.label} className="group/item hover:-translate-y-1 transition-transform duration-300 cursor-default">
              <span className="block text-4xl font-headline font-bold text-[#E8FF47] mb-1">{item.label}</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#f0f0f0]/30">{item.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Accent card — 4 cols */}
      <div className="md:col-span-4 bg-[#0d1017] p-10 flex flex-col justify-between min-h-[400px] relative overflow-hidden rounded-lg border border-[#f0f0f0]/5">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 geo-grid-dense pointer-events-none"></div>

        <div className="relative z-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#E8FF47]/50 block mb-4">// Philosophy</span>
          <blockquote className="font-headline text-2xl font-bold text-[#f0f0f0]/90 leading-snug tracking-tight">
            &ldquo;Ship it broken. Fix it live. Let them watch.&rdquo;
          </blockquote>
        </div>

        <div className="relative z-10 flex flex-col gap-3 mt-auto">
          <div className="h-[1px] w-full bg-[#f0f0f0]/5"></div>
          <div className="flex justify-between items-center">
            <span className="text-[#f0f0f0]/20 font-mono text-[10px] uppercase tracking-widest">TantuCore</span>
            <span className="text-[#E8FF47]/40 font-mono text-[10px]">est. 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
