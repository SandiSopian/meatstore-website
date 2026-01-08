import CategoriesProducts from "../components/sections/CategoriesProducts";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import BenefitsSection from "@/components/sections/BenefitsSection";
import OrderSection from "@/components/sections/OrderSection";
import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="p-6 overflow-y-auto flex-grow mx-auto">
      <section id="hero-image">
        <HeroSection />
      </section>

      <section id="categories-products">
        <h2 className="mt-5 lg:text-2xl font-semibold lg:text-center">
          Kategori Daging Segar
        </h2>
        <CategoriesProducts />
      </section>

      <section id="featured-products" className="mt-10">
        <h2 className="mt-10 lg:text-2xl font-semibold lg:text-center">
          Produk Unggulan
        </h2>
        <FeaturedProducts />
      </section>

      <section id="benefits-section" className="mt-10">
        <h2 className="my-5 lg:text-2xl font-semibold lg:text-center">
          Benefit Untuk Anda
        </h2>
        <BenefitsSection />
      </section>

      <section id="about-us" className="mt-10 ">
        <AboutSection />
      </section>

      <section id="order-section" className="mt-10">
        <h2 className="my-5 lg:text-2xl font-semibold lg:text-center">
          Cara Pesan
        </h2>
        <OrderSection />
      </section>
    </main>
  );
}
