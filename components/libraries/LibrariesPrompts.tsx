import MaterialIcon from '@/components/ui/MaterialIcon';

export default function LibrariesPrompts() {
  return (
    <section className="mb-32">
      <div className="flex items-end justify-between border-b border-outline-variant/20 pb-4 mb-12">
        <div className="flex items-center gap-4">
          <MaterialIcon icon="terminal" className="text-primary text-4xl" />
          <h2 className="font-headline text-3xl font-bold tracking-tight">// PROMPTS</h2>
        </div>
        <span className="font-label text-on-surface-variant opacity-50">02 / 03</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center order-2 md:order-1">
          <div className="mb-12">
            <h3 className="font-headline text-2xl font-bold mb-4 italic text-primary">The Art of the Query</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">Tested prompts that work in production. Not theory. Not fluff.</p>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-surface-container-lowest border-l-4 border-primary">
              <div className="font-label text-xs text-primary mb-2">EDITORIAL AGENT</div>
              <code className="font-body text-sm text-on-surface">"Synthesize the architectural essence of minimal Bauhaus into a functional markdown schema..."</code>
            </div>
            <div className="p-6 bg-surface-container-lowest border-l-4 border-outline-variant/40">
              <div className="font-label text-xs text-on-surface-variant/60 mb-2">SYSTEM ARCHITECT</div>
              <code className="font-body text-sm text-on-surface/50">"Define the boundary conditions for a self-correcting neural network bridge..."</code>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="bg-surface-container-low aspect-[4/5] overflow-hidden">
            <img
              alt="Code Typography"
              className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuADmgcpxBWTy1asig6UQyby13p9DljTRmjzz5kmapf5rRWnUM4CiTeVZQ8Sz13EI2s9P-zRT4XdjQwJ0-2jtxIom1SyBOoNHBfqtQqGzEQvYyoa9_miZYNvQVxMDRqaihdz5CN4LTbHjHKohJNXVuTkGJwiR1DZ1BZJNlk8TEAAvL88MbXBZfQQt4coQPrwcjpOIGCjUl1FtUc3yP9Nk-ViX0A4hmbUBclcxDq4Z6yflMSl-RkkgJ1C8hhn71u3DFVP0d4mvLBlEqUm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
