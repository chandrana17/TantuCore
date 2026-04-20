export default function PillarCards() {
  return (
    <section className="max-w-[1440px] mx-auto px-8 md:px-16 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-outline-variant/10">
        <div className="p-12 border-b md:border-b-0 md:border-r border-outline-variant/10 group hover:bg-surface-container-low transition-colors duration-500">
          <span className="font-headline text-xs text-primary mb-6 block tracking-widest">01 / ARCHITECTURE</span>
          <h3 className="font-headline text-2xl font-bold mb-4 tracking-tight">Local First</h3>
          <p className="text-on-surface-variant leading-relaxed text-sm opacity-70">Runs on your device. No servers. No subscriptions.</p>
        </div>
        <div className="p-12 border-b md:border-b-0 md:border-r border-outline-variant/10 group hover:bg-surface-container-low transition-colors duration-500">
          <span className="font-headline text-xs text-primary mb-6 block tracking-widest">02 / INTERFACE</span>
          <h3 className="font-headline text-2xl font-bold mb-4 tracking-tight">Zero Bloat</h3>
          <p className="text-on-surface-variant leading-relaxed text-sm opacity-70">One feature. Done right. Nothing you don't need.</p>
        </div>
        <div className="p-12 group hover:bg-surface-container-low transition-colors duration-500">
          <span className="font-headline text-xs text-primary mb-6 block tracking-widest">03 / ECOSYSTEM</span>
          <h3 className="font-headline text-2xl font-bold mb-4 tracking-tight">Free Forever</h3>
          <p className="text-on-surface-variant leading-relaxed text-sm opacity-70">Not a trial. Not freemium. Just free. Because it should be.</p>
        </div>
      </div>
    </section>
  );
}
