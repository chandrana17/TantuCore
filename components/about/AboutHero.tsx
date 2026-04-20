export default function AboutHero() {
  return (
    <section className="max-w-[1440px] mx-auto px-8 md:px-12 py-24 min-h-[614px] flex flex-col justify-center">
      <div className="grid grid-cols-12 gap-6 items-start">
        <div className="col-span-12 md:col-span-8">
          <span className="label-md font-label text-[10px] uppercase tracking-[0.4em] text-primary mb-6 block">// THE BUILDER</span>
          <h1 className="font-headline text-[3.5rem] md:text-[5rem] leading-[1.1] font-bold tracking-tight mb-8">
            Built in public. Shipped alone.
          </h1>
          <div className="body-lg text-lg text-on-surface-variant max-w-2xl leading-relaxed space-y-6">
            <p>TantuCore is one person building software that should exist.</p>
            <p>Chand Rana. 19. India.</p>
            <p>Not a team. Not funded. Not trying to be the next big thing.</p>
            <p>Just someone who builds at 3am because the idea won't leave them alone.</p>
            <p>
              TantuSpank started as a joke. It shipped.<br />
              TantuMind started as a need. It's coming.
            </p>
            <p>
              Everything here is local, private, and free.<br />
              Not a marketing angle. Just how it should work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
