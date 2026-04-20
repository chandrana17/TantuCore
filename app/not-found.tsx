import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen blueprint-grid flex flex-col items-center justify-center px-8 text-center bg-background text-on-surface">
      <Link href="/" className="font-headline text-2xl font-bold tracking-tighter text-on-surface mb-8 hover:text-primary transition-colors">
        TANTUCORE
      </Link>
      
      <h1 className="text-8xl font-headline font-black text-primary mb-4">404</h1>
      
      <p className="font-label text-sm uppercase tracking-[0.2em] text-on-surface-variant mb-12">
        This page got bonked out of existence.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
