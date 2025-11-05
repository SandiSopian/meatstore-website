import Image from "next/image";

export default function Home() {
  return (
    <main className="p-6 pb-24 overflow-y-auto">
      <section id="hero-image">
        <Image
          src="/heroBg.png"
          alt="Background hero"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </section>

      <section>
        <h2 className="mt-5">Kategori Daging Segar</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          <div className="category-card p-4 h-40 bg-[#FFECEC] rounded-lg shadow-lg text-center">
            <Image
              src="/meat-rib.png"
              alt="Daging Sapi"
              width={100}
              height={100}
              className="mx-auto rounded-full"
            />
            <h3 className="mt-2 text-black">Daging Sapi</h3>
          </div>

          <div className="category-card p-4 h-40 bg-[#FFECEC] rounded-lg shadow-lg text-center">
            <div className="bg-white rounded-full p-2 inline-block">
              <Image
                src="/chicken-meat.png"
                alt="Daging Ayam"
                width={100}
                height={100}
              />
            </div>
            <h3 className="mt-2 text-black">Daging Ayam</h3>
          </div>

          <div className="category-card p-4 h-40 bg-[#FFECEC] rounded-lg shadow-lg text-center">
            <Image
              src="/meat-rib.png"
              alt="Daging Sapi"
              width={100}
              height={100}
              className="mx-auto rouneded-full"
            />
            <h3 className="mt-2 text-black">Daging Sapi</h3>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mt-10">Produk Unggulan</h2>
        <div className="flex flex-col ">
          <div className="flex w-full items-center gap-6 dark:bg-[#FFF4F4] rounded-lg p-4 mt-4">
            <div>
              <Image
                src="/chicken-meat.png"
                alt="Daging Ayam"
                width={110}
                height={100}
                className="rounded-lg m-1"
              />
            </div>

            <div>
              <h3 className="text-black">Daging Ayam 1Kg</h3>
              <p className="text-red-500 font-bold">Rp 30.000</p>
              <div className="bg-green-500 text-white text-center p-1 rounded-lg w-40 mt-2 cursor-pointer">
                Pesan via WhatsApp
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
