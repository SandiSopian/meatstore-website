import Image from "next/image";
import React from "react";
import { aboutData } from "@/data/home";

const AboutSection = () => {
  return (
    <div className="md:flex md:items-center p-12 gap-8 justify-center bg-[#FFECEC] rounded-lg shadow-lg">
      <figure className="hidden md:block w-1/4">
        <Image
          src={aboutData.aboutImg}
          alt="About us image"
          width={400}
          height={200}
          className="rounded-lg object-cover"
        />
      </figure>

      <div className="flex flex-col max-w-sm xl:w-1/2">
        <h2 className="lg:text-2xl font-semibold lg:font-bold">
          {aboutData.title}
        </h2>
        <p className="mt-4 lg:text-md">{aboutData.description}</p>
      </div>
    </div>
  );
};

export default AboutSection;
