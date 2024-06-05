import React from "react";
import { getById } from "../services/getById";
import Image from "next/image";
import { CardDetails } from "../../components/Cards/CardDetails";
import { Title } from "../../components/Title";

export default async function Page({ params }: { params: { id: string } }) {
  const market = await getById(params.id);

  return (
    <div className="flex min-h-screen flex-col items-center p-4">
      <div className="grid md:grid-cols-3 md:grid-rows-2 grid-cols-3 grid-rows-1 w-full min-h-[300px] gap-2">
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
      <Title title={market?.title} />
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
