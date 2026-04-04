export default function HeroTitle() {
  return (
    <div className="lg:col-span-8 order-1 lg:order-2 flex flex-col items-start lg:items-end relative">
      <div className="absolute inset-0 -z-10 flex items-center justify-center lg:justify-end">
        <div className="w-full max-w-4xl h-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-[80px] rounded-full transform scale-110 pointer-events-none opacity-60"></div>
      </div>
      <h1 className="text-[clamp(4rem,15vw,12rem)] leading-[0.85] font-headline font-bold tracking-tighter text-on-surface flex flex-col items-start lg:items-end">
        <span>&nbsp;<span style={{ fontSize: 'clamp(4rem, 15vw, 12rem)', letterSpacing: '-0.05em' }}>TANTU</span></span>
        <span className="flex items-center gap-1 relative px-4 py-2">
          <span>C</span>
          <img
            alt="Logo"
            className="h-[0.78em] w-auto relative z-10 bg-[#fcf9f8] p-0 m-0 border-0 outline-none"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGUjGvZIVH4bjfDWgOfPXufJIL_l_ND_lcLdC5owIu1-nBy5WBiWBQj6L2khoueLGCy96eYYfdNpBhNQjjTXYhqvV_3Wv0wNgiUPKPIeD3nUo5f1dLfaoERnQyf7Pm2H0XoFbKpvCVECX46gKyS55sEzd8CYVgjxs4mVR5SlAqZkXs81eJrJVFRErJhHaaHTkfDor4Lfif45O5v5LR7VYcBZJRW9hQaY_UACf9I_NXaSRG1rXBeT00RwhNoK2f77B5vOP0dRJn1Rfv"
          />
          <span className="relative z-10">RE</span>
        </span>
      </h1>
      <div className="mt-8 flex items-center space-x-4 text-primary">
        <div className="h-[1px] w-32 bg-primary/30"></div>
        <span className="font-headline text-[10px] tracking-[0.3em] uppercase">the thread that weaves</span>
      </div>
    </div>
  );
}
