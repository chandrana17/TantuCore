'use client';

import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <button
      onClick={handleSignOut}
      className="bg-surface-variant text-on-surface px-6 py-2 text-sm font-headline font-bold scale-95 active:scale-90 transition-transform uppercase tracking-widest rounded-sm"
    >
      Sign Out
    </button>
  );
}
