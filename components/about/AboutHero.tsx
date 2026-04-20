export default function AboutHero() {
  return (
    <section className="max-w-[1440px] mx-auto px-8 md:px-12 py-24 min-h-[614px] flex flex-col justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns%3D%22http://www.w3.org/2000/svg%22 width%3D%22100%22 height%3D%22100%22 viewBox%3D%220 0 100 100%22><path d%3D%22M0 0 L100 100 M100 0 L0 100 Z%22 stroke%3D%22%23ffffff%22 stroke-width%3D%220.5%22 opacity%3D%220.05%22/%3E</svg>')] opacity-0 pointer-events-none"></div>
      </div>
      
      <div className="grid grid-cols-12 gap-6 items-start relative z-10">
        <div className="col-span-12 md:col-span-8">
          <span className="label-md font-label text-[10px] uppercase tracking-[0.4em] text-primary mb-6 block transition-all duration-500 hover:scale-[1.05]">
            // THE BUILDER
          </span>
          <h1 className="font-headline text-[3.5rem] md:text-[5rem] leading-[1.1] font-bold tracking-tight mb-8 transition-all duration-500 group-hover:text-primary/90">
            Built in public. Shipped alone.
          </h1>
          <div className="body-lg text-lg text-on-surface-variant max-w-2xl leading-relaxed space-y-6">
            <p className="hover:text-primary transition-colors duration-300 cursor-default transform-gpu hover:scale-[1.02]">
              TantuCore is one person building software that should exist.
            </p>
            <p className="hover:text-primary transition-colors duration-300 cursor-default transform-gpu hover:scale-[1.02]">
              Chand Rana. 18. India.
            </p>
            <p className="hover:text-primary transition-colors duration-300 cursor-default transform-gpu hover:scale-[1.02]">
              Not a team. Not funded. Not trying to be the next big thing.
            </p>
            <p className="hover:text-primary transition-colors duration-300 cursor-default transform-gpu hover:scale-[1.02]">
              Just someone who builds at 3am because the idea won&apos;t leave them alone.
            </p>
            <p className="hover:text-primary transition-colors duration-300 cursor-default transform-gpu hover:scale-[1.02]">
              TantuSpank started as a joke. It shipped.<br />
              TantuMind started as a need. It&apos;s coming.
            </p>
            <p className="hover:text-primary transition-colors duration-300 cursor-default transform-gpu hover:scale-[1.02]">
              Everything here is local, private, and free.<br />
              Not a marketing angle. Just how it should work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}