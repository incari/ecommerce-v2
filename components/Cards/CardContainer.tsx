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
  const [filter, setFilter] = useState<Markets | []>(cards);
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("search")?.toString();

  useEffect(() => {
    if (searchValue) {
      setFilter(
        cards.filter((card) =>
          card.title.toLowerCase().includes(searchValue.toLowerCase())
        ) as Markets
      );
    } else {
      // Reset to all cards when there's no highlighted text
      setFilter(cards);
    }
  }, [cards, searchValue]);

  return (
    <>
      {multi && filter.length > 0 && (
        <div className="max-w-2xl m-auto text-3xl py-8 font-bold text-center">
          <h1>Similar trips</h1>
        </div>
      )}
      <section className="flex flex-wrap justify-center gap-4 p-4">
        {filter.map((card: any) => (
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
