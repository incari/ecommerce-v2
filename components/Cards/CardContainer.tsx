"use client";
import { Card } from "./Card";
import { Market, Markets } from "../../app/services/placeholder";
import { useAtom } from "jotai";
import { highlight } from "../Header";
import { useEffect, useState } from "react";

export type Card = {
  id: string;
  name: string;
  url: string;
  image: string;
};

const Quote = ({ sentence, author }: { sentence: string; author: string }) => (
  <div className="max-w-lg m-auto">
    <h1 className="tex-4xl font-bold">
      &quot;
      {sentence}
      &quot;
    </h1>
    <h2>{author}</h2>
  </div>
);

const CardContainer = ({
  cards,
  featured,
  multi,
}: {
  cards: Markets;
  featured?: boolean;
  multi?: boolean;
}) => {
  const [filter, setFilter] = useState<Markets | []>(cards);
  const [highlighted] = useAtom(highlight);

  useEffect(() => {
    if (highlighted) {
      setFilter(
        cards.filter((card) =>
          card.title.toLowerCase().includes(highlighted.toLowerCase())
        ) as Markets
      );
    } else {
      // Reset to all cards when there's no highlighted text
      setFilter(cards);
    }
  }, [cards, highlighted]);

  return (
    <>
      {featured && filter.length > 0 && (
        <Quote
          sentence={cards[0].crafterDetail?.crafterSentence || ""}
          author={cards[0].crafterDetail?.crafterName || ""}
        />
      )}
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

export default CardContainer;
