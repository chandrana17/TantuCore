export default function PillarCards() {
  return (
    <section className="max-w-[1440px] mx-auto px-8 md:px-16 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-outline-variant/10">
        <div className="p-12 border-b md:border-b-0 md:border-r border-outline-variant/10 group hover:bg-surface-container-low transition-colors duration-500">
          <span className="font-headline text-xs text-primary mb-6 block tracking-widest">01 / ARCHITECTURE</span>
          <h3 className="font-headline text-2xl font-bold mb-4 tracking-tight">Structured Growth</h3>
          <p className="text-on-surface-variant leading-relaxed text-sm opacity-70">Deploy modular systems that scale with your digital ambition. No technical debt, just pure core performance.</p>
        </div>
        <div className="p-12 border-b md:border-b-0 md:border-r border-outline-variant/10 group hover:bg-surface-container-low transition-colors duration-500">
          <span className="font-headline text-xs text-primary mb-6 block tracking-widest">02 / INTERFACE</span>
          <h3 className="font-headline text-2xl font-bold mb-4 tracking-tight">Precision Interfaces</h3>
          <p className="text-on-surface-variant leading-relaxed text-sm opacity-70">Built for clarity and control, enabling users to interact with powerful systems effortlessly.</p>
        </div>
        <div className="p-12 group hover:bg-surface-container-low transition-colors duration-500">
          <span className="font-headline text-xs text-primary mb-6 block tracking-widest">03 / ECOSYSTEM</span>
          <h3 className="font-headline text-2xl font-bold mb-4 tracking-tight">Playful Product</h3>
          <p className="text-on-surface-variant leading-relaxed text-sm opacity-70">Small tools, creative experiments, and useful apps designed to be fun, practical, and always evolving.</p>
        </div>
      </div>
    </section>
  );
}
