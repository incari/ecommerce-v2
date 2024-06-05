import { getData } from "./getData";
import { MarketCard } from "./placeholder";

export async function getById(id: string): Promise<MarketCard | undefined> {
  const { destinations } = await getData();

  for (const destination of Object.values(destinations)) {
    // Find a market in the destination with the matching ID
    const market = destination.find(
      (market: MarketCard) => market.id.toString() === id
    );

    if (market) {
      return market;
    }
  }

  return undefined;
}
