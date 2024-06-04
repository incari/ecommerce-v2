"use client";
import { Card } from "./Card";
import { Markets } from "../../app/services/placeholder";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type Card = {
  id: string;
  name: string;
  url: string;
  image: string;
};

const CardContainer = ({
  cards,
  multi,
}: {
  cards: Markets;
  multi?: boolean;
}) => {
  return (
    <>
      {multi && (
        <div className="max-w-2xl m-auto text-3xl py-8 font-bold text-center">
          <h1>Similar trips</h1>
        </div>
      )}
      <section className="flex flex-wrap justify-center gap-4 p-4">
        {cards.map((card: any) => (
          <Card
            key={card.id}
            card={card}
          />
        ))}
      </section>
    </>
  );
};

const CardContainerSuspense = ({
  cards,
  multi,
}: {
  cards: Markets;
  multi?: boolean;
}) => {
  return (
    <Suspense>
      <CardContainer
        cards={cards}
        multi={multi}
      />
    </Suspense>
  );
};

export { CardContainerSuspense as CardContainer };
