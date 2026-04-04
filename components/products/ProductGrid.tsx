import React from 'react';

const ProductGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
      <article className="group">
        <div className="relative mb-10 overflow-hidden grayscale-discovery surface-container-low aspect-[4/5]">
          <img alt="Kora Interface" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdpnhRa8bvVvCX9HPCG44d1PrVuxGNjfpz3knBWS42IJk8Pc4eebRYLXdNruSAu5JssOgHWe_UYchilu8ZxBPDkRY311EUHG1krhTB9BBFXwZdI343sMihnp1FndjhPxmw0Jk9Z5y8e_Oy3ZVXqJncaLGZKAfuRgCAWjsW4eQNOT7_8cwm3nUgthLgBKpSCImxmSRU1lhSrS95U7wkkM3-zBEmKflz_HCCLXBu9SlvxfK57P-FGmFCYJSRwfJrA-17MyS-XGdy8INr" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none"></div>
          <div className="absolute top-6 left-6">
            <span className="font-mono text-[10px] bg-on-surface text-surface px-2 py-1 uppercase tracking-widest">v4.2 Stable</span>
          </div>
          <div className="mt-6 flex flex-col items-start gap-4">
            <h2 className="font-headline text-2xl font-bold tracking-tight text-on-surface">TantuMind</h2>
            <span className="font-mono text-[14px] text-primary/60 uppercase tracking-wider">01_CORE</span>
            <p className="text-on-surface/80 max-w-md">
              Revolutionary AI-powered development environment that adapts to your workflow, providing intelligent code suggestions and real-time collaboration.
            </p>
            <button className="mt-4 flex items-center gap-2 font-headline text-primary/80 hover:text-primary transition-colors">
              EXPLORE TANTUMIND
              <span className="material-icons">arrow_forward</span>
            </button>
          </div>
        </div>
      </article>
      <article className="group md:mt-48">
        <div className="relative mb-10 overflow-hidden grayscale-discovery surface-container-low aspect-[4/5]">
          <img alt="Bonkwin Dashboard" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTtR7-dpvHXPsYlmpvEcJG_cxmGMYyRo9Qwij4_1BGfuRaRHkuihNPfO-zIqhKt6YNKxmEYnPVWvP8fCUiGGoNlmYECtaYHhjFhUXGF3UQqTj_dQzNEcQs-BociiJd8Mi3JZwv4kkEldobWvRTul4m9D5zWBktdr74RJxO07aQmrLlgdjIUnSxxS_mi6lDYH6EM9b-Wd9ktcxNndzHHFh1V4eCusLidVPeoNuegnyKt9l9GdNm5aUXv5eih0QQWF-RelrwJMLse1lq" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none"></div>
          <div className="absolute top-6 left-6">
            <span className="font-mono text-[10px] bg-primary text-on-primary px-2 py-1 uppercase tracking-widest">Enterprise</span>
          </div>
          <div className="mt-6 flex flex-col items-start gap-4">
            <h2 className="font-headline text-2xl font-bold tracking-tight text-on-surface">TantuSpank</h2>
            <span className="font-mono text-[14px] text-primary/60 uppercase tracking-wider">02_SYNC</span>
            <p className="text-on-surface/80 max-w-md">
              Advanced synchronization engine that keeps your development environments perfectly aligned across all devices and team members.
            </p>
            <button className="mt-4 flex items-center gap-2 font-headline text-primary/80 hover:text-primary transition-colors">
              Explore TANTUSPANK
              <span className="material-icons">arrow_forward</span>
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProductGrid;