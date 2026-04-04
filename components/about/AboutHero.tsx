export default function AboutHero() {
  return (
    <section className="max-w-[1440px] mx-auto px-8 md:px-12 py-24 min-h-[614px] flex flex-col justify-center">
      <div className="grid grid-cols-12 gap-6 items-start">
        <div className="col-span-12 md:col-span-8">
          <span className="label-md font-label text-[10px] uppercase tracking-[0.4em] text-primary mb-6 block">// WE GO FURTHER TOGETHER</span>
          <h1 className="font-headline text-[3.5rem] md:text-[5rem] leading-[1.1] font-bold tracking-tight mb-8">The Digital <br /><span className="text-primary italic">Architects</span> <span className="text-primary">Nexus</span></h1>
          <p className="body-lg text-lg text-on-surface-variant max-w-xl leading-relaxed">Built by one person. Grown by many. Find us where the real conversations happen.</p>
        </div>
      </div>
    </section>
  );
}
