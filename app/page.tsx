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
        {featuredMultiMarket[0] && (
          <>
            <Quote
              sentence={featuredMultiMarket[0].crafterDetail.crafterSentence}
              author={featuredMultiMarket[0].crafterDetail.crafterName}
            />
            <CardContainer cards={featuredMultiMarket} />
          </>
        )}
        {multiMarket && (
          <>
            <div className="max-w-2xl m-auto text-3xl py-8 font-bold text-center">
              <h1>Similar trips</h1>
            </div>
            <CardContainer cards={multiMarket} />
          </>
        )}
      </div>
    </main>
  );
}

const Quote = ({ sentence, author }: { sentence: string; author: string }) => (
  <div className="max-w-lg m-auto">
    <h1 className="tex-4xl font-bold">
      &quot;
      {sentence}
      &quot;
    </h1>
    <h2>{author}</h2>
  </div>
);
