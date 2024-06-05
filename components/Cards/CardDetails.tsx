"use client";
import { FaMapMarkerAlt, FaClock, FaTag, FaArrowDown } from "react-icons/fa";
import { priceBeautify } from "../../lib/utils";
import { MarketCard } from "../../app/services/placeholder";
import { Details } from "./Details";
import { IncludesItem, IncludesSection } from "./IncludeSection";
import { useSearchParams } from "next/navigation";

export const CardDetails = ({ card }: { card: MarketCard }) => {
  const searchParams = useSearchParams();
  const highlight = searchParams.get("search")?.toString() || "";

  return (
    <div className="px-6 py-4 rounded-lg ">
      <div className="sm:flex">
        <div className="flex flex-1 flex-col">
          <Details
            highlight={highlight}
            icon={FaMapMarkerAlt}
            text={card.destination}
            className="text-gray-600"
          />
          <Details
            highlight={highlight}
            icon={FaClock}
            text={`${card.days} days`}
            className="text-gray-600"
          />

          <Details
            highlight={highlight}
            icon={FaTag}
            text={`From: ${priceBeautify(card.priceDetail.fromPrice)}`}
            className="text-green-600 text-lg font-semibold"
          />

          <Details
            highlight={highlight}
            icon={FaTag}
            text={`Was: ${priceBeautify(card.priceDetail.oldPrice)}`}
            className="text-gray-500 line-through"
          />

          <Details
            highlight={highlight}
            icon={FaArrowDown}
            text={`Save: ${priceBeautify(card.priceDetail.discountSaved)}`}
            className="text-red-600 text-lg font-semibold"
          />
        </div>
        <IncludesSection
          includes={card.includes as IncludesItem[]}
          highlight={highlight}
        />
      </div>
    </div>
  );
};
