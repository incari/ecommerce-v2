"use client";
import React, { Suspense, useEffect, useState } from "react";
import { CardContainer } from "./Cards/CardContainer";
import { Destinations, Markets } from "../app/services/placeholder";
import { useSearchParams } from "next/navigation";

type ResultsProps = {
  destinations: Destinations;
};
type FilteredProps = {
  featuredCards: Markets | [];
  multiMarketCards: Markets | [];
};

const Results = ({ destinations }: ResultsProps) => {
  const { featuredMultiMarket, multiMarket } = destinations || {};
  const [filterCards, setFilterCards] = useState<FilteredProps>({
    featuredCards: [],
    multiMarketCards: [],
  });

  const searchParams = useSearchParams();
  const searchValue = searchParams.get("search")?.toLowerCase();

  useEffect(() => {
    const filterCards = (cards: Markets) =>
      cards?.filter((card) =>
        card.title.toLowerCase().includes(searchValue || "")
      ) as Markets;

    setFilterCards({
      featuredCards: filterCards(featuredMultiMarket) || [],
      multiMarketCards: filterCards(multiMarket),
    });
  }, [featuredMultiMarket, multiMarket, searchValue]);

  const hasFeaturedResults = filterCards.featuredCards.length > 0;
  const hasMultiMarketResults = filterCards.multiMarketCards.length > 0;

  if (!hasFeaturedResults && !hasMultiMarketResults) {
    return (
      <div className="text-center py-10">
        <h2>No Results Found</h2>
      </div>
    );
  }

  return (
    <div>
      {hasFeaturedResults && (
        <CardContainer cards={filterCards.featuredCards} />
      )}
      {hasMultiMarketResults && (
        <CardContainer
          cards={filterCards.multiMarketCards}
          multi
        />
      )}
    </div>
  );
};

const ResultsSuspense = ({ destinations }: ResultsProps) => {
  return (
    <Suspense>
      <Results destinations={destinations} />
    </Suspense>
  );
};

export { ResultsSuspense as Results };
