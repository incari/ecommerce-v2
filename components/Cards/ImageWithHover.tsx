import Image from "next/image";
import { Badge } from "../ui/badge";
import { getDiscountColor } from "../../lib/utils";
import { MapTooltip } from "./MapTooltip";

export const ImageWithHover = ({
  primaryImage,
  hoverImage,
  title,
  discountPercentage,
  location,
}: {
  primaryImage: { desktop: string };
  hoverImage: { desktop: string };
  title: string;
  discountPercentage?: number;
  location: string;
}) => (
  <div className="relative">
    {primaryImage && (
      <Image
        className="w-full h-auto transition-opacity duration-500 opacity-100 group-hover:opacity-0"
        src={primaryImage.desktop}
        alt={title}
        width={450}
        height={300}
        priority
      />
    )}
    {hoverImage && (
      <Image
        className="absolute top-0 left-0 w-full h-auto transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        src={hoverImage.desktop}
        alt={title}
        width={450}
        height={300}
        loading="lazy"
      />
    )}
    {discountPercentage && (
      <Badge
        className="absolute top-2 right-2 text-md"
        style={{ backgroundColor: getDiscountColor(discountPercentage) }}
      >
        {discountPercentage}% OFF
      </Badge>
    )}
    <MapTooltip location={location} />
  </div>
);
