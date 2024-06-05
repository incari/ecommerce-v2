"use client";
import Highlighter from "react-highlight-words";
import Link from "next/link";
import ReactDOMServer from "react-dom/server";

import { MarketCard } from "../../app/services/placeholder";
import { Badge } from "@/components/ui/badge";
import { CardDetails } from "./CardDetails";
import { ImageWithHover } from "./ImageWithHover";

import { Tooltip } from "react-tooltip";
import { Suspense, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

import { useSearchParams } from "next/navigation";

const Tag = ({
  tag,
  highlight,
}: {
  tag: { tagId: string; name: string };
  highlight: string;
}) => (
  <Badge
    className="text-xs font-semibold m-1 px-2.5 py-1"
    variant={tag.name === "PROMOTED" ? "default" : "secondary"}
  >
    <Highlighter
      highlightClassName="YourHighlightClass"
      searchWords={[highlight]}
      autoEscape={true}
      textToHighlight={tag.name}
    />
  </Badge>
);

const Card = ({ card }: { card: MarketCard }) => {
  const searchParams = useSearchParams();
  // Images
  const primaryImage = card.images[0];
  const hoverImage = card.images[1];
  // Prices
  const originalPrice = card.priceDetail.oldPrice;
  const discountAmount = card.priceDetail.discountSaved;
  //Tooltip
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);

  // Highlight
  const highlight = searchParams.get("search")?.toString() || "";

  const discountPercentage =
    originalPrice && discountAmount
      ? Math.round((discountAmount / originalPrice) * 100)
      : undefined;

  const sortedTags = [...card.tags].sort((a, b) => {
    if (a.name === "PROMOTED") return -1;
    if (b.name === "PROMOTED") return 1;
    return 0;
  });

  // Tooltip component
  const GoDetailPage = () => (
    <div className="flex items-center gap-2">
      <p>Go to detail</p>
      <FaArrowRight />
    </div>
  );
  const componentString = ReactDOMServer.renderToString(<GoDetailPage />);

  // State to control tooltip visibility
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  // Function to update tooltip position
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <>
      <Link
        href={`/${card.id}`}
        key={card.id}
        className="max-w-lg rounded overflow-hidden shadow-lg bg-white block group"
        aria-label={`View details of ${card.title}`}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <ImageWithHover
          location={card.map.image.mobile}
          discountPercentage={discountPercentage}
          primaryImage={primaryImage}
          hoverImage={hoverImage}
          title={card.title}
        />
        <div className="px-4 pt-2 font-bold text-2xl text-gray-800">
          <Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={[highlight]}
            autoEscape={true}
            textToHighlight={card.title}
          />
        </div>

        <CardDetails
          card={card}
          highlight={highlight}
        />
        <div className="flex flex-wrap mb-2">
          {sortedTags.map((tag) => (
            <Tag
              key={tag.tagId}
              tag={tag}
              highlight={highlight}
            />
          ))}
        </div>
      </Link>
      <Tooltip
        id="mapTooltip"
        html={componentString}
        position={position}
        isOpen={isOpen}
      />
    </>
  );
};

const CardSuspense = ({ card }: { card: MarketCard }) => {
  return (
    <Suspense>
      <Card card={card} />
    </Suspense>
  );
};

export { CardSuspense as Card };
