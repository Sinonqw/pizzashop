import React from "react";
import Image from "next/image";
import EventCard from "./EventCard";
import { eventCards, decorativeElements } from "@/app/data/events";

const Events: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden"> {/* Убраны px-4 md:px-10 lg:px-20 здесь */}
      {/* Основной контейнер для центрирования и max-width */}
      <div className="container relative mx-auto px-4 md:px-10 lg:px-20 max-w-[1200px]"> {/* Добавляем mx-auto для центрирования и все px здесь */}
        
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

        {/* Пустой div убираем, если он не нужен для стилизации заголовка */}
        {/* <div className="w-full max-w-[1200px] mb-10 pr-5 md:pr-0 lg:ml-auto"></div> */}
        {/* Если этот div был для заголовка Events, то его нужно поместить внутрь сетки или переделать */}

        {/* Контейнер сетки событий */}
        {/* Убираем w-full max-w-[1200px] и px из этого div, так как они уже на контейнере выше */}
        <div className="flex flex-col gap-6"> 
          {/* Первая строка: 2 EventCard (col-span-3) и текстовый блок (col-span-4) на общей сетке из 10 колонок */}
          <div className="grid grid-cols-10 gap-6">
            {eventCards.slice(0, 2).map((card) => (
              <EventCard key={card.id} card={card} className="col-span-3" />
            ))}
            {/* Добавляем col-span-4 для этого div с текстом */}
            <div className="col-span-4 flex flex-col justify-end p-5 relative rounded-[15px] min-h-[250px]"> {/* Добавлены стили из EventCard для выравнивания */}
              <h1 className="text-white text-5xl md:text-6xl font-bold mb-3 text-right">
                Events
              </h1>
              <p className="font-normal text-[19px] leading-[130%] text-right text-[#a3a3a3]">
                There are regular events in our pizzeria that will allow you
                to eat delicious food for a lower price!
              </p>
            </div>
          </div>
          
          {/* Вторая строка: 2 элемента (каждый col-span-1) на сетке из 2 колонок */}
          <div className="grid grid-cols-2 gap-6">
            {eventCards.slice(2, 4).map((card) => (
              <EventCard key={card.id} card={card} className="col-span-1" />
            ))}
          </div>

          {/* Третья строка: 3 элемента (каждый col-span-1) на сетке из 3 колонок */}
          <div className="grid grid-cols-3 gap-6">
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