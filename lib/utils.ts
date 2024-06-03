import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const priceBeautify = (price: number): string => {
  return `$${price.toLocaleString("en-US")}`;
};

export const getDiscountColor = (percentage: number) => {
  if (percentage < 9) {
    return "rgb(255, 255, 0)";
  } else if (percentage >= 10 && percentage <= 25) {
    return "rgb(255, 165, 0)";
  } else {
    return "rgb(255, 0, 0)";
  }
};
