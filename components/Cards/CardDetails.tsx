import {
  FaMapMarkerAlt,
  FaClock,
  FaTag,
  FaArrowDown,
  FaBed,
  FaPlane,
  FaBus,
  FaUtensils,
  FaMountain,
} from "react-icons/fa";
import { priceBeautify } from "../../lib/utils";
import { MarketCard } from "../../app/services/placeholder";
import Highlighter from "react-highlight-words";

type IncludesItem =
  | "ACCOMMODATION"
  | "ALL_FLIGHTS"
  | "ALL_TRANSFERS"
  | "SOME_MEALS"
  | "ACTIVITIES"
  | "BREAKFAST_ONLY";

const includesIcons: Record<IncludesItem, JSX.Element> = {
  ACCOMMODATION: <FaBed className="mr-2 text-gray-400" />,
  ALL_FLIGHTS: <FaPlane className="mr-2 text-gray-400" />,
  ALL_TRANSFERS: <FaBus className="mr-2 text-gray-400" />,
  SOME_MEALS: <FaUtensils className="mr-2 text-gray-400" />,
  ACTIVITIES: <FaMountain className="mr-2 text-gray-400" />,
  BREAKFAST_ONLY: <FaUtensils className="mr-2 text-gray-400" />,
};

const IncludesSection = ({
  includes,
  highlight,
}: {
  includes: IncludesItem[];
  highlight: string;
}) => {
  return (
    <div className="mt-2 sm:mt-0 sm:ml-2 ">
      <h3 className="font-bold text-lg mb-2">Includes:</h3>
      <ul className="flex flex-wrap list-none pl-0 sm:flex-col">
        {includes.map((item: IncludesItem) => {
          const text = item
            .replace("_", " ")
            .toLowerCase()
            .replace(/\b\w/g, (c) => c.toUpperCase());

          return (
            <li
              key={item}
              className="flex items-center text-gray-700 mb-2 mr-4"
            >
              {includesIcons[item]}
              <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={[highlight]}
                autoEscape={true}
                textToHighlight={text}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Details = ({
  icon: Icon,
  text,
  className,
  highlight,
}: {
  icon: React.ElementType;
  text: string;
  highlight: string;
  className?: string;
}) => {
  // Function to create a regex that matches the numeric sequence with commas
  const createHighlightRegex = (searchValue: string): string[] => {
    const digits = searchValue.split("");
    const regexPattern = digits.join(",?");

    // Find matches in the main text, considering formatted numbers
    const matches = text.match(new RegExp(regexPattern, "g"));
    if (matches) {
      return matches; // Return matched patterns, e.g., "2,4"
    }
    return [];
  };

  // Get the words to be highlighted based on the current text and highlight value
  const searchWords = createHighlightRegex(highlight);

  return (
    <div className={`flex items-center ${className} mb-2`}>
      <Icon className="mr-2 text-gray-400" />
      <Highlighter
        highlightClassName="YourHighlightClass"
        searchWords={searchWords}
        autoEscape={true}
        textToHighlight={text}
      />
    </div>
  );
};
export const CardDetails = ({
  card,
  highlight,
}: {
  card: MarketCard;
  highlight: string;
}) => (
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
