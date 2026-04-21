import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Products",
  description: "TantuCore Studio products — download TantuSpank (free Windows knock detection tool) and join the TantuMind waitlist (offline Android AI). All free, all open source.",
  openGraph: {
    title: "TantuCore Products — TantuSpank & TantuMind",
    description: "Download TantuSpank free — a Windows knock detection tool. TantuMind (offline Android AI) coming soon. All open source.",
    url: "https://tantucore.online/products",
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
      <main className="pt-32 pb-24 min-h-screen geo-grid bg-[#080A0F]">
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
