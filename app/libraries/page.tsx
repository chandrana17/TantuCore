import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Libraries — TantuCore Studio",
  description: "Skills, prompts, and agent blueprints from building in public. Coming soon.",
  openGraph: {
    title: "Libraries — TantuCore Studio",
    description: "Skills, prompts, and agent blueprints from building in public. Coming soon.",
    url: "https://tantu-core.vercel.app/libraries",
  }
};
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import LibrariesContent from '@/components/libraries/LibrariesContent';

export default function LibrariesPage() {
  return (
    <>
      <NavBar activePage="libraries" />
      <main className="pt-32 pb-24 min-h-screen bg-[#080A0F] geo-grid">
        <LibrariesContent />
      </main>
      <Footer />
    </>
  );
}
