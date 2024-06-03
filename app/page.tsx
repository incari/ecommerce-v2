import CardContainer from "../components/Cards/CardContainer";
import { Header } from "../components/Header";
import { getData } from "./services/getData";
import "react-tooltip/dist/react-tooltip.css";

export default async function Home() {
  const {
    hero,
    destinations: { featuredMultiMarket, multiMarket },
  } = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className="mt-16">
        <div className="max-w-2xl m-auto text-3xl py-8 font-bold">
          <h1>{hero.shortDescription}</h1>
        </div>

        <CardContainer
          cards={featuredMultiMarket}
          featured
        />

        <CardContainer
          cards={multiMarket}
          multi
        />
      </div>
    </main>
  );
}
