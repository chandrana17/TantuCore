import AuthForm from '@/components/auth/AuthForm';

type Props = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

export default async function AuthPage({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <main className="min-h-screen blueprint-grid flex flex-col items-center justify-center px-8">
      <div className="text-center">
        <a href="/" className="font-headline text-2xl font-bold tracking-tighter text-on-surface mb-2">
          TANTUCORE
        </a>
        <p className="font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant mb-16">
          // ENTER THE CORE
        </p>
        <AuthForm />
        <p className="mt-16 font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/50">
          Your data stays yours. Always.
        </p>
      </div>
    </main>
  );
}