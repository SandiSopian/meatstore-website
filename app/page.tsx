import Image from "next/image";
import CategoriesProducts from "../components/CategoriesProducts";
import FeaturedProducts from "@/components/FeaturedProducts";
import BenefitsSection from "@/components/BenefitsSection";
import OrderSection from "@/components/OrderSection";

export default function Home() {
  return (
    <main className="p-6 overflow-y-auto">
      <section id="hero-image">
        <Image
          src="/heroBg.png"
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
        <h2>Tentang Kami</h2>
        <p className="mt-4 text-justify">
          Selamat datang di MeatSore, toko daging segar online terpercaya Anda!
          Kami berkomitmen untuk menyediakan daging berkualitas tinggi yang
          segar dan aman untuk keluarga Anda. Dengan berbagai pilihan produk
          mulai dari daging sapi, ayam, hingga kambing, kami memastikan setiap
          potongan daging dipilih dengan cermat dari peternakan terbaik. Nikmati
          kemudahan berbelanja dari rumah dengan layanan pengiriman cepat dan
          handal kami. Terima kasih telah memilih MeatSore sebagai mitra
          terpercaya Anda dalam memenuhi kebutuhan daging segar!
        </p>
      </section>

      <section id="order-section" className="mt-10">
        <OrderSection />
      </section>
    </main>
  );
}
