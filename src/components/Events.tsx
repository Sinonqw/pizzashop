import React from "react";
import Image from "next/image";
import EventCard from "./EventsComponents/EventCard";
import { eventCards, decorativeElements } from "@/app/data/events";

const Events: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 flex flex-col items-center relative overflow-hidden">
      <div className="container relative">
          {decorativeElements.map((el) => (
            <Image
              key={el.id}
              src={el.image}
              alt={el.alt}
              className={el.className}
              width={el.width}    
              height={el.height}    
              priority={true}
            />
          ))}
    
          <div className="w-full max-w-[1200px] mb-10 pr-5 md:pr-0 lg:ml-auto">
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-3 text-right">
              Events
            </h1>
            <p className="text-[#f0f0f0] text-lg max-w-lg leading-relaxed text-right lg:text-left lg:ml-auto"> 
              There are regular events in our pizzeria that will allow you to eat
              delicious food for a lower price!
            </p>
          </div>
    
          {/* Контейнер сетки событий */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-[1200px] px-0 md:px-5">
            {eventCards.map((card) => (
              <EventCard key={card.id} card={card} />
            ))}
          </div>
      </div>
    </section>
  );
};

export default Events;