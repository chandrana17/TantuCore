export default function AboutHero() {
  return (
    <section className="max-w-[1440px] mx-auto px-8 md:px-12 py-24 min-h-[614px] flex flex-col justify-center relative overflow-hidden">
      {/* Accent glow */}
      <div className="absolute top-[20%] left-[5%] w-[300px] h-[300px] rounded-full bg-[#E8FF47]/[0.03] blur-[100px] pointer-events-none"></div>

      <div className="grid grid-cols-12 gap-6 items-start relative z-10">
        <div className="col-span-12 md:col-span-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#E8FF47] mb-6 block">
            // THE BUILDER
          </span>
          <h1 className="font-headline text-[3.5rem] md:text-[5rem] leading-[1.1] font-bold tracking-tight mb-8 text-[#f0f0f0]">
            Built in public. Shipped alone.
          </h1>
          <div className="text-lg text-[#f0f0f0]/40 max-w-2xl leading-relaxed space-y-6">
            <p className="hover:text-[#E8FF47] transition-colors duration-300 cursor-default">
              TantuCore is one person building software that should exist.
            </p>
            <p className="hover:text-[#E8FF47] transition-colors duration-300 cursor-default">
              Chand Rana. 18. Bhopal, India.
            </p>
            <p className="hover:text-[#E8FF47] transition-colors duration-300 cursor-default">
              Not a team. Not funded. Not trying to be the next big thing.
            </p>
            <p className="hover:text-[#E8FF47] transition-colors duration-300 cursor-default">
              Just someone who builds at 3am because the idea won&apos;t leave them alone.
            </p>
            <p className="hover:text-[#E8FF47] transition-colors duration-300 cursor-default">
              TantuSpank started as a joke. It shipped.<br />
              TantuMind started as a need. It&apos;s coming.
            </p>
            <p className="hover:text-[#E8FF47] transition-colors duration-300 cursor-default">
              Everything here is local, private, and free.<br />
              Not a marketing angle. Just how it should work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}