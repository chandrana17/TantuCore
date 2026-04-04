import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import ProductsHeader from '@/components/products/ProductsHeader';
import ProductGrid from '@/components/products/ProductGrid';
import BentoInfo from '@/components/products/BentoInfo';

export default function Products() {
  return (
    <>
      <NavBar activePage="products" />
      <main className="pt-32 pb-24 min-h-screen blueprint-grid-products">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12">
          <ProductsHeader />
          <ProductGrid />
          <BentoInfo />
        </div>
      </main>
      <Footer hoverColor="hover:text-[#006b5c]" />
    </>
  );
}
