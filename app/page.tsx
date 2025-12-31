import Image from "next/image";
import CategoriesProducts from "../components/sections/CategoriesProducts";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import BenefitsSection from "@/components/sections/BenefitsSection";
import OrderSection from "@/components/sections/OrderSection";
import { heroData, aboutData } from "@/data/home";

export default function Home() {
  return (
    <main className="p-6 overflow-y-auto flex-grow">
      <section id="hero-image">
        <Image
          src={heroData.img}
          alt="Background hero"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </section>

      <section id="categories-products">
        <CategoriesProducts />
      </section>

      <section id="featured-products" className="mt-10">
        <FeaturedProducts />
      </section>

      <section id="benefits-section" className="mt-10">
        <BenefitsSection />
      </section>

      <section id="about-us" className="mt-10">
        <h2>{aboutData.title}</h2>
        <p className="mt-4 text-justify">{aboutData.description}</p>
      </section>

      <section id="order-section" className="mt-10">
        <OrderSection />
      </section>
    </main>
  );
}
