"use client";

import React, { Suspense } from "react";
import { CardContainer } from "./Cards/CardContainer";
import { DestinationsProps } from "../services/placeholder";
import { useFilterCards } from "../hooks/useFilterCards";

type ResultsProps = {
  destinations: DestinationsProps;
};

const Results = ({ destinations }: ResultsProps) => {
  const { featuredMultiMarket, multiMarket } = useFilterCards(destinations);

  const hasFeaturedResults = featuredMultiMarket.length > 0;
  const hasMultiMarketResults = multiMarket.length > 0;

  if (!hasFeaturedResults && !hasMultiMarketResults) {
    return (
      <div className="text-center py-10">
        <h2>No Results Found</h2>
      </div>
    );
  }

  return (
    <div>
      {hasFeaturedResults && <CardContainer cards={featuredMultiMarket} />}
      {hasMultiMarketResults && (
        <CardContainer
          cards={multiMarket}
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
