import MaterialIcon from '@/components/ui/MaterialIcon';

export default function LibrariesAgents() {
  return (
    <section className="mb-32">
      <div className="flex items-end justify-between border-b border-outline-variant/20 pb-4 mb-12">
        <div className="flex items-center gap-4">
          <MaterialIcon icon="smart_toy" className="text-primary text-4xl" />
          <h2 className="font-headline text-3xl font-bold tracking-tight">// AGENTS</h2>
        </div>
        <span className="font-label text-on-surface-variant opacity-50">03 / 03</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden bg-on-surface p-10 flex flex-col justify-end min-h-[400px]">
          <div className="absolute inset-0 opacity-40">
            <img
              alt="Robotic Hand"
              className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtWUcWcV1L4YJ3yN_gCbnuuOoveYYr6oXj0xxU0FAg88_WcMxNA3VBKABzr9kpsV-Jy3Lr6uVtLRk-9IwsO51ywsDAlI8TYUgRP5UeJ53FQnchaJKtuxbYEZLfjZ8F_7sZ2yOAyO3AMy2aI7mhLvopmecgXsloTweJtiu5zTt4XEHKDwa5K9_0o8KyRhBZQr8nNavU7c1Mf932VwT6hT8DiH3MO_pEW3fRhfkfMCtL4yru0kU_ssddJ3bZUQr5wjewRzKUbcrORHnN"
            />
          </div>
          <div className="relative z-10">
            <span className="inline-block bg-primary text-on-primary px-3 py-1 font-label text-[10px] mb-4">TIER: ELITE</span>
            <h3 className="font-headline text-3xl font-bold text-surface mb-2">The Curator</h3>
            <p className="text-surface/70 font-body text-sm max-w-xs">An autonomous entity specialized in data synthesis and ethical narrative construction.</p>
          </div>
        </div>
        <div className="group bg-surface-container-high p-8 flex flex-col justify-between border border-outline-variant/20">
          <MaterialIcon icon="data_exploration" className="text-primary" />
          <div>
            <h3 className="font-headline font-bold text-lg">Analytic</h3>
            <p className="text-xs text-on-surface-variant mt-2 font-body">Deep-pattern forecasting and trend modeling.</p>
          </div>
        </div>
        <div className="group bg-surface-container-high p-8 flex flex-col justify-between border border-outline-variant/20">
          <MaterialIcon icon="shield" className="text-primary" />
          <div>
            <h3 className="font-headline font-bold text-lg">Sentinel</h3>
            <p className="text-xs text-on-surface-variant mt-2 font-body">Security-first protocol monitoring and defense.</p>
          </div>
        </div>
        <div className="md:col-span-2 group bg-surface-container-low p-8 flex items-center gap-8 border border-outline-variant/20">
          <div className="w-20 h-20 bg-primary-container/20 rounded-full flex items-center justify-center flex-shrink-0">
            <MaterialIcon icon="hub" className="text-primary text-3xl" />
          </div>
          <div>
            <h3 className="font-headline font-bold text-xl">The Orchestrator</h3>
            <p className="text-sm text-on-surface-variant mt-1 font-body">Multi-agent coordination and deployment management for large-scale digital operations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
