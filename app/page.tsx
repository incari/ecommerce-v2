import { Header } from "../components/Header";
import { getData } from "./services/getData";
import "react-tooltip/dist/react-tooltip.css";
import { Results } from "../components/Results";

export default async function Home() {
  const { destinations } = await getData();

  return <Results destinations={destinations} />;
}
