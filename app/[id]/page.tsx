import React from "react";
import { getById } from "../services/getById";
import Image from "next/image";
import { CardDetails } from "../../components/Cards/CardDetails";

export default async function Page({ params }: { params: { id: string } }) {
  const market = await getById(params.id);
  const images = [
    {
      src: "/path-to-your-large-image.jpg",
      className: "",
    },
    {},
  ];
  return (
    <div className="flex min-h-screen flex-col items-center p-4">
      <div className="grid md:grid-cols-3 md:grid-rows-2 grid-cols-3 grid-rows-1 w-full min-h-[300px] ">
        {market?.images.map(
          (image, index) =>
            index < 3 && (
              <div
                key={index}
                className={`${
                  index === 0
                    ? "md:col-span-2 md:row-span-2 col-span-3 row-span-1"
                    : "md:col-span-1 md:row-span-1 hidden sm:block"
                } flex items-center justify-center relative`}
              >
                <Image
                  className="rounded-xl"
                  src={image.desktop}
                  alt={`Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )
        )}
      </div>
      <h1 className="text-4xl text-center py-8">{market?.title}</h1>
      {market && (
        <div className="flex items-center">
          <Image
            src={market.map.image.mobile}
            alt="map"
            height={300}
            width={500}
          />
          <CardDetails card={market} />
        </div>
      )}
    </div>
  );
}
