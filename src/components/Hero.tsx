"use client";

import Image from "next/image";
import ToggleButton from "./ToggleButton";
import HeroText from "./heroComponents/HeroText";
import HeroVideo from "./heroComponents/HeroVideo";

export default function Hero() {
  return (
    <section className="h-[100vh]">
        
      <div className="container relative flex justify-between items-center">
        <Image width="518" height="230" alt="" src="/hero/hero-bg.svg" className="absolute top-0 left-20"/>
        <div className="max-w-[540px]">
          <HeroText />
          <HeroVideo />
          <ToggleButton />
        </div>

        <div className="relative">
          <Image
            className="rounded-[46px]"
            width={456}
            height={684}
            alt="bg"
            src="/hero/image.jpg"
          />
          <div>
            <Image
              className="absolute bottom-[-75px] left-[-115px] z-10"
              width={213}
              height={226}
              alt="fries"
              src="/forbg/fries.png"
            />
            <Image
              className="absolute top-[-118px] right-[-115px] z-10"
              width={252}
              height={252}
              alt="pizza"
              src="/forbg/pizza.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
