export default function BentoInfo() {
  return (
    <section className="mt-48 grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="md:col-span-8 bg-surface-container-low p-12 flex flex-col justify-between min-h-[400px]">
        <div className="max-w-md">
          <h3 className="text-2xl font-headline font-semibold mb-6">Built for people who actually use their devices.</h3>
          <p className="text-on-surface-variant mb-8">TantuCore makes software that fits into your life, not the other way around. Private by default. Local by design. Weird enough to be useful.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <span className="block text-4xl font-headline font-bold text-primary mb-1">100%</span>
            <span className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant">On-device. Zero cloud.</span>
          </div>
          <div>
            <span className="block text-4xl font-headline font-bold text-primary mb-1">2+</span>
            <span className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant">Apps shipped</span>
          </div>
          <div>
            <span className="block text-4xl font-headline font-bold text-primary mb-1">0</span>
            <span className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant">Data ever collected</span>
          </div>
          <div>
            <span className="block text-4xl font-headline font-bold text-primary mb-1">Free</span>
            <span className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant">Forever. No subscription.</span>
          </div>
        </div>
      </div>
      <div className="md:col-span-4 bg-primary p-12 flex flex-col justify-center text-on-primary">
        <h4 className="text-xl font-headline font-bold mb-4">Explore the Core</h4>
        <p className="opacity-80 text-sm mb-8">Dive into a growing space of apps, tools, and experiments . Built to create, explore, and evolve.</p>
        <a className="font-label text-[10px] uppercase tracking-widest border-b border-on-primary/30 pb-1 self-start hover:border-on-primary transition-colors" href="/products">Explore Everything →</a>
      </div>
    </section>
  );
}
