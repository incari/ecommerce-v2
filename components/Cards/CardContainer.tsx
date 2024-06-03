import { Card } from "./Card";
import { Markets } from "../../app/services/placeholder";

export type Card = {
  id: string;
  name: string;
  url: string;
  image: string;
};

const CardContainer = ({ cards }: { cards: Markets }) => {
  return (
    <section className="flex flex-wrap justify-center gap-4 p-4">
      {cards.map((card: any) => (
        <Card
          key={card.id}
          card={card}
        />
      ))}
    </section>
  );
};

export default CardContainer;
