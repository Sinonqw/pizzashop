"use client";
import React, { useState } from "react";
import Card from "./Card";
import { Button } from "../Button";
import menuItems from "@/app/data/pizzas";
import { pizzaCategories } from "@/app/data/pizzaCategories";

import type { CardProps } from "./Card";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>("Show All");

  const filteredItems = menuItems.filter((item: CardProps) => {
    if (activeCategory === "Show All") {
      return true;
    }
    return item.category === activeCategory;
  });

  return (
    <section>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-center font-extrabold text-[69px] leading-[110%] text-white mb-12">
          Menu
        </h2>
        <nav className="mb-22">
          <ul className="flex gap-6 justify-center">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
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
      </div>
    </section>
  );
}
