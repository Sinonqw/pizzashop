import { popularPizzas } from "@/app/data/pizzas";
import Card from "./Card";

export default function PopularPizzas() {
  return (
    <div className="grid mb-13 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
      {popularPizzas.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          desc={item.desc}
          cost={item.cost}
          img={item.img}
          category={item.category}
        />
      ))}
    </div>
  );
}
