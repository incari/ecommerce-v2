export type IncludesItem =
  | "ACCOMMODATION"
  | "ALL_FLIGHTS"
  | "ALL_TRANSFERS"
  | "SOME_MEALS"
  | "ACTIVITIES"
  | "BREAKFAST_ONLY";
import Highlighter from "react-highlight-words";
import { FaBed, FaPlane, FaBus, FaUtensils, FaMountain } from "react-icons/fa";

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
  highlight = "",
}: {
  includes: IncludesItem[];
  highlight?: string;
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

export { IncludesSection };
