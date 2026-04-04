export default function ProductsHeader() {
  return (
    <header className="mb-24 grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="md:col-span-8">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
          <p>// small tools. real impact.</p>
        </span>
        <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-headline font-bold leading-[0.9] tracking-tighter mb-8">
          Software<div>that&nbsp;<span style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', letterSpacing: '-0.05em' }}>does one thing.&nbsp;</span><span style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', letterSpacing: '-0.05em' }}>Really well.</span></div>
        </h1>
      </div>
      <div className="md:col-span-4 flex items-end">
        <p className="text-on-surface-variant font-body leading-relaxed max-w-sm">
          We build focused apps for the generation that's tired of bloated software. Private, local, and a little weird, on purpose.
        </p>
      </div>
    </header>
  );
}
