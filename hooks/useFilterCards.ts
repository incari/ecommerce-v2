import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { DestinationsProps, Markets } from "../app/services/placeholder";
import { priceBeautify } from "../lib/utils";

interface FilterParams {
  title?: string;
  destination?: string;
  days?: number;
  includes?: string[];
  oldPrice?: number;
  newPrice?: number;
  discount?: number;
}

export function useFilterCards(
  destinations: DestinationsProps
): DestinationsProps {
  const { featuredMultiMarket, multiMarket } = destinations || {};
  const [filterCards, setFilterCards] = useState({
    featuredMultiMarket,
    multiMarket,
  });

  const searchParams = useSearchParams();
  const searchValue = searchParams.get("search")?.toLowerCase();

  useEffect(() => {
    const applyFilters = (cards: Markets): Markets => {
      return cards.filter((card) => {
        const titleMatch = searchValue
          ? card.title.toLowerCase().includes(searchValue)
          : true;
        const destinationMatch = searchValue
          ? card.destination.toLowerCase().includes(searchValue)
          : true;

        const includesMatch = searchValue
          ? card.includes.some((include) => {
              const value = include.replace("_", " ").toLowerCase();
              return value.includes(searchValue);
            })
          : true;

        const days = searchValue
          ? card.days.toString().includes(searchValue)
          : true;

        const tags = searchValue
          ? card.tags.some((tag) => {
              const value = tag.name.replace("_", " ").toLowerCase();
              return value.includes(searchValue);
            })
          : true;

        const priceMatch = searchValue
          ? card.priceDetail.fromPrice.toString().includes(searchValue) ||
            card.priceDetail.oldPrice.toString().includes(searchValue) ||
            card.priceDetail.discountSaved.toString().includes(searchValue)
          : true;

        return (
          titleMatch ||
          destinationMatch ||
          includesMatch ||
          days ||
          tags ||
          priceMatch
        );
      });
    };

    setFilterCards({
      featuredMultiMarket: featuredMultiMarket
        ? applyFilters(featuredMultiMarket)
        : [],
      multiMarket: multiMarket ? applyFilters(multiMarket) : [],
    });
  }, [featuredMultiMarket, multiMarket, searchValue]); // Add other filter dependencies if any

  return filterCards;
}
