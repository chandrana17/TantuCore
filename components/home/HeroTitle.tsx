export default function HeroTitle() {
  return (
    <div className="lg:col-span-8 order-1 lg:order-2 flex flex-col items-start lg:items-end relative">
      {/* Accent glow behind text */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center lg:justify-end">
        <div className="w-full max-w-4xl h-full bg-gradient-to-br from-[#E8FF47]/8 via-[#E8FF47]/3 to-transparent blur-[100px] rounded-full transform scale-110 pointer-events-none opacity-60"></div>
      </div>
      <h1 className="text-[clamp(4rem,15vw,12rem)] leading-[0.85] font-headline font-bold tracking-tighter text-[#f0f0f0] flex flex-col items-start lg:items-end">
        <span>&nbsp;<span style={{ fontSize: 'clamp(4rem, 15vw, 12rem)', letterSpacing: '-0.05em' }}>TANTU</span></span>
        <span className="flex items-center gap-1 relative px-4 py-2">
          <span>C</span>
          <img
            alt="Logo"
            className="h-[0.78em] w-auto relative z-10 p-0 m-0 border-0 outline-none brightness-[1.2]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGUjGvZIVH4bjfDWgOfPXufJIL_l_ND_lcLdC5owIu1-nBy5WBiWBQj6L2khoueLGCy96eYYfdNpBhNQjjTXYhqvV_3Wv0wNgiUPKPIeD3nUo5f1dLfaoERnQyf7Pm2H0XoFbKpvCVECX46gKyS55sEzd8CYVgjxs4mVR5SlAqZkXs81eJrJVFRErJhHaaHTkfDor4Lfif45O5v5LR7VYcBZJRW9hQaY_UACf9I_NXaSRG1rXBeT00RwhNoK2f77B5vOP0dRJn1Rfv"
          />
          <span className="relative z-10">RE</span>
        </span>
      </h1>
      <div className="mt-8 flex items-center space-x-4 text-[#E8FF47]">
        <div className="h-[1px] w-32 bg-[#E8FF47]/30"></div>
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#E8FF47]/60">the thread that weaves</span>
      </div>
    </div>
  );
}
