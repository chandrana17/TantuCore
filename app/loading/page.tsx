import React from 'react';

export default function LoadingPage() {
  return (
    <>
      {/* Side Decoration (The "No-Line" Rule - using background shifts instead of borders) */}
      <div className="fixed left-0 top-0 h-full w-1 bg-primary/10 pointer-events-none"></div>
      <div className="fixed right-0 top-0 h-full w-1 bg-primary/10 pointer-events-none"></div>
      
      {/* Loading Screen Container */}
      <main className="relative h-screen w-screen flex items-center justify-center blueprint-grid-loading overflow-hidden bg-[#faf9f6] text-on-surface">
        {/* Abstract Background Detail */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-12 left-12 border-l border-t border-primary/20 w-32 h-32"></div>
          <div className="absolute bottom-12 right-12 border-r border-b border-primary/20 w-32 h-32"></div>
        </div>
        
        {/* Center Content Block */}
        <div className="flex flex-col items-center justify-center z-10">
          {/* Logo Section */}
          <div className="relative mb-12 flex flex-col items-center">
            <div className="w-24 h-24 mb-2 flex items-center justify-center">
              <img 
                alt="TANTUCORE Logo" 
                className="w-full h-full object-contain opacity-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj5BaZpbm216oTCim1XG_8Hmkyn7xvNi5Loft-JeV-gAAUASdbiY1ba_upr0gK9DqNekpSVY6Jbo9U-rlMb5q7O1_p8XnXF4b9LGpRyNFePB5emED6oZp5vJpWNO1CybnV6kUdLbZHVmcJFsmstmH-3bRwi15J17SzuNq4buLVye_9pmkqCFKL7uBW9t1NdhK1NY52gTyw-GdD9ltYn_ahEv0_UC7pUp3d3NEQjWdLpFbTLQgybdAoNpvjU1Ba1q0NtRiV1lxOd8-W"
              />
            </div>
            
            {/* Brand Text */}
            <div className="text-center mt-4">
              <h1 className="font-['Public_Sans'] text-4xl font-bold tracking-tighter text-on-surface uppercase mb-1">
                TANTUCORE
              </h1>
              <p className="font-label text-[10px] uppercase tracking-[0.4em] text-primary/60">
                Where Ideas Become Instinct
              </p>
            </div>
          </div>
          
          {/* Cinematic Loading Indicator */}
          <div className="w-64 h-[1px] bg-outline-variant/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer shadow-[0_0_10px_rgba(176,38,255,0.8)]"></div>
          </div>
          
          {/* Technical Status Label */}
          <div className="mt-8 flex items-center space-x-3">
            <span className="font-label text-[9px] text-on-surface-variant/50 tracking-[0.2em] flex items-center">
              {/* Assuming Material Icons are available via globals or elsewhere */}
              <span className="material-symbols-outlined text-[14px] mr-2" style={{ fontVariationSettings: "'FILL' 1, 'wght' 300" }} aria-hidden="true">
                dataset
              </span>
              INITIALIZING CORE SYSTEMS
            </span>
            <span className="h-1 w-1 rounded-full bg-primary animate-pulse"></span>
          </div>
        </div>
        
        {/* Footer Credits (Subtle) */}
        <footer className="absolute bottom-12 w-full flex justify-between px-12 items-center pointer-events-none">
          <div className="flex flex-col gap-1">
            <span className="font-label text-[8px] text-on-surface/30 tracking-widest uppercase"></span>
            <span className="font-label text-[8px] text-on-surface/30 tracking-widest uppercase"></span>
          </div>
          <div className="h-[1px] flex-grow mx-8 bg-outline-variant/10"></div>
          <div className="flex items-center gap-6">
            <span className="font-label text-[8px] text-on-surface/30 tracking-widest uppercase">
              Architecture by T2C
            </span>
          </div>
        </footer>
      </main>
    </>
  );
}