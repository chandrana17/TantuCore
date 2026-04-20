import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen blueprint-grid flex flex-col items-center justify-center px-8 text-center bg-background text-on-surface relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-2 h-2 rounded-full bg-primary/20 top-[20%] left-[15%] animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute w-1.5 h-1.5 rounded-full bg-primary/15 top-[40%] right-[20%] animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute w-3 h-3 rounded-full bg-primary/10 bottom-[30%] left-[25%] animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-1 h-1 rounded-full bg-primary/30 top-[60%] right-[35%] animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute w-2.5 h-2.5 rounded-full bg-primary/15 bottom-[20%] right-[15%] animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <Link href="/" className="font-headline text-2xl font-bold tracking-tighter text-on-surface mb-8 hover:text-primary transition-colors relative z-10">
        TANTUCORE
      </Link>
      
      <h1 className="text-8xl md:text-[10rem] font-headline font-black text-primary mb-4 animate-glitch relative z-10 select-none">404</h1>
      
      <p className="font-label text-sm uppercase tracking-[0.2em] text-on-surface-variant mb-12 relative z-10">
        This page got bonked out of existence.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
        <Link 
          href="/" 
          className="px-8 py-4 bg-primary text-on-primary font-headline font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform"
        >
          Go Home
        </Link>
        <Link 
          href="/products" 
          className="px-8 py-4 border border-outline-variant/40 text-on-surface-variant/70 font-headline font-bold text-xs uppercase tracking-widest hover:bg-surface-container-low transition-colors"
        >
          See Products
        </Link>
      </div>
    </main>
  );
}
