"use client";
import { Card } from "./Card";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { MarketCard } from "../../app/services/placeholder";

type Card = {
  id: string;
  name: string;
  url: string;
  image: string;
};

type Props = { cards: MarketCard[]; multi?: boolean };

const CardContainer = ({ cards, multi }: Props) => {
  return (
    <>
      {multi && (
        <div className="max-w-2xl m-auto text-3xl py-8 font-bold text-center">
          <h1>Similar trips</h1>
        </div>
      )}
      <section className="flex flex-wrap justify-center gap-4 p-4">
        {cards.map((card: MarketCard) => (
          <Card
            key={card.id}
            card={card}
          />
        ))}
      </section>
    </>
  );
};

const CardContainerSuspense = ({ cards, multi }: Props) => {
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
