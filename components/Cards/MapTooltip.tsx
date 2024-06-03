"use client";

import ReactDOMServer from "react-dom/server";
import React, { useState } from "react";

import { Tooltip } from "react-tooltip";
import Image from "next/image";
import { FaMapMarkedAlt } from "react-icons/fa";
import { Badge } from "../ui/badge";

export const MapTooltip = ({ location }: { location: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const LocationImage = () => (
    <Image
      alt="map"
      className="m-w-full"
      src={location}
      width={450}
      height={300}
      loading="lazy"
    />
  );

  const componentString = ReactDOMServer.renderToString(<LocationImage />);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute top-2 left-2">
      <Badge
        data-tooltip-id="mapTooltip"
        className="text-xs font-semibold m-1 px-2.5 py-1 cursor-pointer"
        onMouseLeave={() => setIsOpen(false)}
        onMouseEnter={() => setIsOpen(true)}
        onClick={handleClick}
        onTouchStart={handleTouch}
      >
        <FaMapMarkedAlt className="mr-2 " /> See map
      </Badge>
      <Tooltip
        id="mapTooltip"
        html={componentString}
        isOpen={isOpen}
      />
    </div>
  );
};
