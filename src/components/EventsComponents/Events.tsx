import React from "react";
import Image from "next/image";
import EventCard from "./EventCard";
import { eventCards, decorativeElements } from "@/app/data/events"; // Ensure correct path

const Events: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-8 md:py-16">
      {/* Main container for centering and max-width */}
      <div className="container relative mx-auto px-4 md:px-10 lg:px-20 max-w-[1200px]">
        {decorativeElements.map((el) => (
          <Image
            key={el.id}
            src={el.image}
            alt={el.alt}
            // Use width/height from data and apply responsive classes for scaling
            width={el.width}
            height={el.height}
            className={`${el.className} 
              w-[calc(${el.width}px * 0.5)] h-[calc(${el.height}px * 0.5)] // Smaller on md/lg to prevent overlap
              md:w-[calc(${el.width}px * 0.75)] md:h-[calc(${el.height}px * 0.75)] // Medium size on md screens
              lg:w-[${el.width}px] lg:h-[${el.height}px] // Full size on lg screens
            `}
            priority={true}
          />
        ))}

        {/* Event Grid Container */}
        <div className="flex flex-col gap-4 md:gap-6">
          {/* First row: 2 EventCard and text block */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-10 md:gap-6">
            {eventCards.slice(0, 2).map((card) => (
              <EventCard
                key={card.id}
                card={card}
                className="col-span-1 md:col-span-3"
              />
            ))}
            {/* Events text block */}
            <div className="col-span-1 flex flex-col justify-end rounded-[15px] p-4 relative min-h-[200px] md:col-span-4 md:min-h-[250px] md:p-5">
              <h1 className="mb-2 text-center text-4xl font-bold text-white md:mb-3 md:text-right md:text-6xl">
                Events
              </h1>
              <p className="text-center text-sm font-normal leading-[130%] text-[#a3a3a3] md:text-right md:text-[19px]">
                There are regular events in our pizzeria that will allow you to
                eat delicious food for a lower price!
              </p>
            </div>
          </div>

          {/* Second row: 2 elements */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {eventCards.slice(2, 4).map((card) => (
              <EventCard key={card.id} card={card} className="col-span-1" />
            ))}
          </div>

          {/* Third row: 3 elements */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {eventCards.slice(4, 7).map((card) => (
              <EventCard key={card.id} card={card} className="col-span-1" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
