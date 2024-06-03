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

type IncludesItem =
  | "ACCOMMODATION"
  | "ALL_FLIGHTS"
  | "ALL_TRANSFERS"
  | "SOME_MEALS"
  | "ACTIVITIES";

const includesIcons: Record<IncludesItem, JSX.Element> = {
  ACCOMMODATION: <FaBed className="mr-2 text-gray-400" />,
  ALL_FLIGHTS: <FaPlane className="mr-2 text-gray-400" />,
  ALL_TRANSFERS: <FaBus className="mr-2 text-gray-400" />,
  SOME_MEALS: <FaUtensils className="mr-2 text-gray-400" />,
  ACTIVITIES: <FaMountain className="mr-2 text-gray-400" />,
};

const IncludesSection = ({ includes }: { includes: IncludesItem[] }) => {
  return (
    <div className="mt-2 sm:mt-0 sm:ml-2 ">
      <h3 className="font-bold text-lg mb-2">Includes:</h3>
      <ul className="flex flex-wrap list-none pl-0 sm:flex-col">
        {includes.map((item: IncludesItem) => (
          <li
            key={item}
            className="flex items-center text-gray-700 mb-2 mr-4"
          >
            {includesIcons[item]}
            {item
              .replace("_", " ")
              .toLowerCase()
              .replace(/\b\w/g, (c) => c.toUpperCase())}
          </li>
        ))}
      </ul>
    </div>
  );
};

const PriceDetail = ({
  icon: Icon,
  text,
  className,
}: {
  icon: React.ElementType;
  text: string;
  className?: string;
}) => (
  <div className={`flex items-center ${className} mb-2`}>
    <Icon className="mr-2 text-gray-400" />
    {text}
  </div>
);

export const CardDetails = ({ card }: { card: any }) => (
  <div className="px-6 py-4 rounded-lg ">
    <div className="sm:flex">
      <div className="flex flex-1 flex-col">
        <PriceDetail
          icon={FaMapMarkerAlt}
          text={card.destination}
          className="text-gray-600"
        />
        <PriceDetail
          icon={FaClock}
          text={`${card.days} days`}
          className="text-gray-600"
        />

        <PriceDetail
          icon={FaTag}
          text={`From: ${card.priceDetail.fromPriceBeautify}`}
          className="text-green-600 text-lg font-semibold"
        />

        {card.priceDetail.oldPriceBeautify && (
          <PriceDetail
            icon={FaTag}
            text={`Was: ${card.priceDetail.oldPriceBeautify}`}
            className="text-gray-500 line-through"
          />
        )}

        {card.priceDetail.discountSaved && (
          <PriceDetail
            icon={FaArrowDown}
            text={`Save: ${priceBeautify(card.priceDetail.discountSaved)}`}
            className="text-red-600 text-lg font-semibold"
          />
        )}
      </div>
      <IncludesSection includes={card.includes} />
    </div>
  </div>
);
