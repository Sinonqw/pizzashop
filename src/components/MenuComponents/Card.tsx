'use client'
import React, { useState } from "react";
import Image from "next/image";
import { Circles } from "./Circles"; 
import IngredientsButton from "./IngredientButton"; 
import { PriceCounter } from "./PriceCounter"; 


export interface CardProps {
  title: string;
  desc: string;
  cost: string; 
  img: string;
  category: string;
}

export default function Card({ title, desc, cost, img }: CardProps) {
  const [selectedSize, setSelectedSize] = useState<string>('28');

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className="bg-[#210a01] relative rounded-[30px] pt-30 p-6 flex flex-col items-center shadow-lg w-[270px]">
      <Image
        width="160"
        height="158"
        src={img}
        alt={title}
        className="mb-4 absolute top-[-12%]"
      />
      <h4 className="font-medium mb-3 text-[25px] leading-[110%] text-white text-center">
        {title}
      </h4>

      <p className="font-normal mb-5 text-[14px] leading-[150%] text-[#a3a3a3] text-center px-2 flex-grow">
        {desc}
      </p>

      <div className="mb-5">
        <Circles onSizeChange={handleSizeChange} />
      </div>
      <div className="mb-5 ">
        <IngredientsButton />
      </div>
      <div className="flex w-full px-4">
        <PriceCounter baseCost={cost} selectedSize={selectedSize} />
      </div>
      <button className="mt-6 w-full py-3 rounded-full text-white font-bold bg-[linear-gradient(215deg,_#ff5924_0%,_#ffa229_100%)] hover:shadow-[0_0_15px_0_rgba(255,162,41,0.8)] transition-all">
        Order Now
      </button>
    </div>
  );
}