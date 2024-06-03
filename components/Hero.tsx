import Image from "next/image";
import React from "react";
import { Hero as HeroProps } from "../app/services/placeholder";

const Hero = ({ hero }: { hero: HeroProps }) => {
  return (
    <div className="relative w-full aspect-auto">
      <Image
        src={hero.images.desktop}
        alt="Hero Image"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={500}
        height={500}
      />

      <div className="absolute w-full h-full bg-gradient-to-b to-black from-slate-600 opacity-30 top-0"></div>

      <div
        className="max-w-2xl mx-auto text-md  md:text-4xl  font-bold text-white
            absolute top-8 left-0 right-0"
        style={{
          textShadow:
            "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
        }}
      >
        <h1 className="text-shadow-lg">{hero.shortDescription}</h1>
      </div>
    </div>
  );
};

export default Hero;