import { Header } from "../components/Header";
import { getData } from "./services/getData";
import "react-tooltip/dist/react-tooltip.css";
import { Results } from "../components/Results";

export default async function Home() {
  const { destinations } = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className="mt-16 w-full">
        <Results destinations={destinations} />
      </div>
    </main>
  );
}
