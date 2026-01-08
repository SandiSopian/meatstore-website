import React from "react";
import { heroData, aboutData } from "@/data/home";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  return (
    <>
      {/* Mobile Hero Image */}
      <div className="md:hidden">
        <Image
          src={heroData.bgHeroMobile}
          alt="Background hero"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>

      {/* Tablet Hero Image */}
      <div className="relative w-full w-[100%] mx-auto h-64 mb-24 hidden md:block lg:hidden">
        <Image
          src={heroData.bgHeroTablet}
          alt="Background hero"
          width={1000}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Desktop Hero Image */}
      <div className="md:grid grid-cols-3 mx-auto items-center gap-4 mb-10">
        <div className="col-span-2 flex flex-col items-center gap-2">
          {/* Hero Image Main */}
          <div className="relative w-full md:h-[400px] hidden lg:block">
            <Image
              src={heroData.bgHeroDesktop}
              alt="Background hero"
              fill
              className="rounded-lg object-cover"
            />

            <h1 className="absolute bottom-42 left-10 text-white font-bold text-4xl">
              {heroData.title}
            </h1>

            <h2 className="absolute bottom-32 left-10 text-white font-bold text-xl">
              Belanja Sekarang, Nikmati Kemudahan Kami!
            </h2>

            <Link
              href="/products"
              className="absolute bottom-16 left-10 bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500"
            >
              Mulai Belanja
              <span>
                <FontAwesomeIcon icon={faCartShopping} className="ml-2" />
              </span>
            </Link>
          </div>

          {/* Hero Image Bottom */}
          <div className="flex justify-between w-full gap-2 mt-2 hidden lg:flex">
            <div className="bg-product rounded-lg w-1/2 px-12 py-6 flex items-center justify-center">
              <div className="flex flex-col gap-4 justify-between w-full">
                <div className="text-white">
                  <p className="font-semibold">Daging Sapi Segar</p>
                  <p className="text-sm">Mulai dari Rp. 120.000/Kg</p>
                </div>

                <Link
                  href="/order"
                  className="underline text-white hover:text-yellow-300"
                >
                  Pesan Sekarang
                </Link>
              </div>
              <div>
                <Image
                  src={heroData.productHero}
                  alt="Daging Sapi"
                  width={200}
                  height={200}
                  className="bg-white p-2 rounded-lg"
                />
              </div>
            </div>

            <div className="rounded-lg w-1/2 flex items-center gap-2 justify-center">
              <div className="p-2 relative w-full h-full">
                <Image
                  src={heroData.bgHeroBottom1}
                  alt="Background hero"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="p-2 relative w-full h-full">
                <Image
                  src={heroData.bgHeroBottom2}
                  alt="Background hero"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image Right */}
        <div className="flex flex-col gap-2 hidden lg:flex">
          <div className="p-2 relative w-full h-[280px]">
            <Image
              src={heroData.bgHeroRight1}
              alt="Background hero"
              fill
              className="rounded-lg hidden md:block"
            />
          </div>

          <div className="p-2 relative w-full h-[280px]">
            <Image
              src={heroData.bgHeroRight2}
              alt="Background hero"
              fill
              className="rounded-lg object-cover hidden md:block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
