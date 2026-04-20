import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Products — TantuCore",
  description: "Download TantuSpank free — a Windows app that reacts to desk knocks with 10 sound packs. Also: TantuMind coming soon.",
  openGraph: {
    title: "Products — TantuCore",
    description: "Download TantuSpank free — a Windows app that reacts to desk knocks with 10 sound packs. Also: TantuMind coming soon.",
    url: "https://tantu-core.vercel.app/products",
  }
};
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import ProductsHeader from '@/components/products/ProductsHeader';
import ProductGrid from '@/components/products/ProductGrid';
import BentoInfo from '@/components/products/BentoInfo';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Products() {
  return (
    <>
      <NavBar activePage="products" />
      <main className="pt-32 pb-24 min-h-screen blueprint-grid">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12">
          <ScrollReveal>
            <ProductsHeader />
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <ProductGrid />
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <BentoInfo />
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
