"use client";
import React, { useState } from "react"; // useState удален
import Card from "./Card";
import { Button } from "../Button";
import menuItems from "@/app/data/pizzas";
import { pizzaCategories } from "@/app/data/pizzaCategories";
import PopularPizzas from "./PopularPizzas";

import type { CardProps } from "./Card";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Show All");

  const filteredItems = menuItems.filter((item) => {
    if (activeCategory === "Show All") {
      return true;
    }
    return item.category === activeCategory;
  });

  return (
    <section>
      <div className="container mx-auto px-4">
        <h2 className="text-center font-extrabold text-[69px] leading-[110%] text-white mb-12">
          Menu
        </h2>
        <nav className="mb-22">
          <ul className="flex gap-6 flex-wrap justify-center">
            {pizzaCategories.map((category) => (
              <li key={category}>
                <Button
                  text={category}
                  bg={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                />
              </li>
            ))}
          </ul>
        </nav>
        <div className="grid mb-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 justify-center">
          {filteredItems.map((item: CardProps) => (
            <Card
              key={item.title}
              title={item.title}
              desc={item.desc}
              cost={item.cost}
              img={item.img}
              category={item.category}
            />
          ))}
          {filteredItems.length === 0 && (
            <p className="text-white text-center col-span-full">
              Нет пицц в данной категории.
            </p>
          )}
        </div>

        <div
          className="font-medium mb-25 py-30  rounded-[39px] text-[43px] leading-[109%] text-shadow-custom text-white w-full text-center bg-cover bg-center"
          style={{ backgroundImage: 'url("/menu/mp.jpg")' }}
        >
          MOST POPULAR PIZZA
        </div>
        <PopularPizzas />
      </div>
    </section>
  );
}
