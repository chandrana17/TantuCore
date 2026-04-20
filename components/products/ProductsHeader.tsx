export default function ProductsHeader() {
  return (
    <header className="mb-24 grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="md:col-span-8">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#E8FF47] mb-4 block">
          // small tools. real impact.
        </span>
        <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-headline font-bold leading-[0.9] tracking-tighter mb-8 text-[#f0f0f0]">
          Software that does one thing. Really well.
        </h1>
      </div>
      <div className="md:col-span-4 flex items-end">
        <p className="text-[#f0f0f0]/40 font-body leading-relaxed max-w-sm">
          We build focused apps for people tired of bloated software. Private, local, and a little weird — on purpose.
        </p>
      </div>
    </header>
  );
}
