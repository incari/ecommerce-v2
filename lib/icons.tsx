import location from "@/lib/icons/location.svg";
import flights from "@/lib/icons/flights.svg";
import transfers from "@/lib/icons/transfers.svg";
import accommodation from "@/lib/icons/accommodation.svg";
import activities from "@/lib/icons/activities.svg";
import meals from "@/lib/icons/meals.svg";
import Image, { ImageProps } from "next/image";

type Includes =
  | "ACCOMMODATION"
  | "ALL_FLIGHTS"
  | "ALL_TRANSFERS"
  | "SOME_MEALS"
  | "ACTIVITIES"
  | "LOCATION"
  | "BREAKFAST_ONLY";

function Location(props?: ImageProps) {
  const { height = 16, width = 16 } = props || {};
  return (
    <Image
      {...props}
      alt="location-icon"
      src={location}
      height={height}
      width={width}
    />
  );
}

function Flights(props?: ImageProps) {
  const { height = 16, width = 16 } = props || {} || {};
  return (
    <Image
      {...props}
      alt="flights-icon"
      src={flights}
      height={height}
      width={width}
    />
  );
}

function Transfers(props?: ImageProps) {
  const { height = 16, width = 16 } = props || {};
  return (
    <Image
      {...props}
      alt="transfers-icon"
      src={transfers}
      height={height}
      width={width}
    />
  );
}

export function Accommodations(props?: ImageProps) {
  const { height = 16, width = 16 } = props || {};
  return (
    <Image
      {...props}
      alt="accommodations-icon"
      src={accommodation}
      height={height}
      width={width}
    />
  );
}
export function Activities(props?: ImageProps) {
  const { height = 16, width = 16 } = props || {};
  return (
    <Image
      {...props}
      alt="activities-icon"
      src={activities}
      height={height}
      width={width}
    />
  );
}

export function Meals(props?: ImageProps) {
  const { height = 16, width = 16 } = props || {};
  return (
    <Image
      {...props}
      alt="meals-icon"
      src={meals}
      height={height}
      width={width}
    />
  );
}

const IconSelector = ({ option }: { option: Includes }, props: any) => {
  switch (option) {
    case "ACCOMMODATION":
      return (
        <Accommodations
          className="inline-block"
          height={16}
          width={16}
          {...props}
        />
      );
    case "ALL_FLIGHTS":
      return (
        <Flights
          className="inline-block"
          height={16}
          width={16}
          {...props}
        />
      );
    case "ALL_TRANSFERS":
      return (
        <Transfers
          className="inline-block"
          height={16}
          width={16}
          {...props}
        />
      );
    case "SOME_MEALS":
      return (
        <Meals
          className="inline-block"
          height={16}
          width={16}
          {...props}
        />
      );
    case "ACTIVITIES":
      return (
        <Activities
          className="inline-block"
          height={16}
          width={16}
          {...props}
        />
      );
    case "LOCATION":
      return (
        <Location
          className="inline-block"
          height={16}
          width={16}
          {...props}
        />
      );
    default:
      null;
  }
};

export { IconSelector };
