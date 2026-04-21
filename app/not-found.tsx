import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen geo-grid flex flex-col items-center justify-center px-8 text-center bg-[#080A0F] text-[#f0f0f0] relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-2 h-2 rounded-full bg-[#a855f7]/20 top-[20%] left-[15%] animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute w-1.5 h-1.5 rounded-full bg-[#a855f7]/15 top-[40%] right-[20%] animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute w-3 h-3 rounded-full bg-[#a855f7]/10 bottom-[30%] left-[25%] animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-1 h-1 rounded-full bg-[#a855f7]/30 top-[60%] right-[35%] animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute w-2.5 h-2.5 rounded-full bg-[#a855f7]/15 bottom-[20%] right-[15%] animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <Link href="/" className="font-headline text-2xl font-bold tracking-tighter text-[#f0f0f0] mb-8 hover:text-[#a855f7] transition-colors relative z-10">
        TANTUCORE
      </Link>

      <h1 className="text-8xl md:text-[10rem] font-headline font-black text-[#a855f7] mb-4 animate-glitch relative z-10 select-none">404</h1>

      <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#f0f0f0]/70 mb-12 relative z-10">
        This page got bonked out of existence.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
        <Link
          href="/"
          className="btn-accent px-8 py-4 font-headline font-bold text-xs uppercase tracking-widest rounded-md"
        >
          Go Home
        </Link>
        <Link
          href="/products"
          className="btn-outline px-8 py-4 font-headline font-bold text-xs uppercase tracking-widest rounded-md"
        >
          See Products
        </Link>
      </div>
    </main>
  );
}
