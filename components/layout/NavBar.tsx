import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import SignOutButton from '@/components/auth/SignOutButton';

interface NavBarProps {
  activePage: 'home' | 'products' | 'libraries' | 'about';
}

export default async function NavBar({ activePage }: NavBarProps) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fcf9f8]/70 backdrop-blur-xl border-b border-primary/10">
      <div className="flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto">
        <a 
          className="text-xl font-bold tracking-tighter text-[#1c1b1b] font-headline" 
          href="/"
        >
          TANTUCORE
        </a>
        <div className="hidden md:flex items-center space-x-12">
          <Link 
            href="/products" 
            className={`
              ${activePage === 'products' ? 'text-primary border-b-2 border-primary pb-1 font-headline font-bold tracking-tight' : activePage === 'home' ? 'text-[#1c1b1b] font-headline font-bold tracking-tight hover:text-primary transition-colors duration-300' : 'text-[#1c1b1b] opacity-70 font-headline font-bold tracking-tight hover:opacity-100 transition-opacity duration-300'}
            `}
          >
            Products
          </Link>
          <Link 
            href="/libraries" 
            className={`
              ${activePage === 'libraries' ? 'text-[#006b5c] border-b-2 border-[#006b5c] pb-1 font-headline font-bold tracking-tight' : 'text-[#1c1b1b] opacity-70 font-headline font-bold tracking-tight hover:opacity-100 transition-opacity duration-300'}
            `}
          >
            Libraries
          </Link>
          <Link 
            href="/about" 
            className={`
              ${activePage === 'about' ? 'text-primary border-b-2 border-primary pb-1 font-headline font-bold tracking-tight' : 'text-[#1c1b1b] opacity-70 font-headline font-bold tracking-tight hover:opacity-100 transition-opacity duration-300'}
            `}
          >
            About
          </Link>
        </div>
        
        {user ? (
          <SignOutButton />
        ) : (
          <Link 
            href="/auth"
            className="bg-primary text-on-primary px-6 py-2 text-sm font-headline font-bold scale-95 active:scale-90 transition-transform uppercase tracking-widest rounded-sm"
          >
            Get Started
          </Link>
        )}
      </div>
    </nav>
  );
}