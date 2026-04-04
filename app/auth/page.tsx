import AuthForm from '@/components/auth/AuthForm';

export default function AuthPage({ searchParams }: { searchParams: { [key: string]: string } }) {
  return (
    <main className="min-h-screen blueprint-grid flex flex-col items-center justify-center px-8">
      <div className="text-center">
        <a href="/" className="font-headline text-2xl font-bold tracking-tighter text-on-surface mb-2">
          TANTUCORE
        </a>
        <p className="font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant mb-16">
          // ENTER THE CORE
        </p>
        <AuthForm error={searchParams.error === 'auth_failed' ? true : undefined} />
        <p className="mt-16 font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/50">
          Your data stays yours. Always.
        </p>
      </div>
    </main>
  );
}