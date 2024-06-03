"use client";
import Image from "next/image";
import React, { Suspense } from "react";
import { Hero as HeroProps } from "../app/services/placeholder";
import { useSearchParams } from "next/navigation";

const Hero = ({ hero }: { hero: HeroProps }) => {
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("search")?.toString();
  if (searchValue) return null;

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

const HeroSuspense = ({ hero }: { hero: HeroProps }) => {
  return (
    <Suspense>
      <Hero hero={hero} />
    </Suspense>
  );
};

export { HeroSuspense as Hero };
