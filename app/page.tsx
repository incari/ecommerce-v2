import Image from "next/image";
import CardContainer from "../components/Cards/CardContainer";
import { Header } from "../components/Header";
import { getData } from "./services/getData";
import "react-tooltip/dist/react-tooltip.css";
import Hero from "../components/Hero";

export default async function Home() {
  const {
    hero,
    destinations: { featuredMultiMarket, multiMarket },
  } = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className="mt-16 w-full">
        <Hero hero={hero} />
        <CardContainer cards={featuredMultiMarket} />

        <CardContainer
          cards={multiMarket}
          multi
        />
      </div>
    </main>
  );
}
