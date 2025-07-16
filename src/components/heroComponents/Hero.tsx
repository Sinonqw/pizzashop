"use client";

import { useState } from "react";
import Image from "next/image";

import ToggleButton from "./ToggleButton";
import HeroText from "./HeroText";
import HeroVideo from "./HeroVideo";
import ModalVideo from "./ModalVideo";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative h-screen mb-120 lg:mb-0">
      {/* декоративный SVG‑фон */}
      <Image
        src="/hero/hero-bg.svg"
        alt=""
        width={518}
        height={230}
        className="pointer-events-none absolute left-20 top-0 select-none"
      />

      {/* основной контент */}
      <div className="container gap-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-6 sm:gap-15 lg:gap-14">
        {/* левая колонка */}
        <div className="max-w-[540px]">
          <HeroText />
          <HeroVideo onPlay={() => setOpen(true)} />
          <ToggleButton />
        </div>

        {/* правая колонка */}
        <div className="relative shrink-0">
          <Image
            src="/hero/image.jpg"
            alt="main pizza"
            width={456}
            height={684}
            className="rounded-[46px]"
          />

          {/* декоративные PNG поверх */}
          <Image
            src="/forbg/fries.png"
            alt="fries"
            width={213}
            height={226}
            className="absolute -bottom-[75px] -left-[115px] z-10"
          />
          <Image
            src="/forbg/pizza.png"
            alt="pizza"
            width={252}
            height={252}
            className="absolute -top-[118px] -right-[115px] z-10"
          />
        </div>
      </div>

      {/* модалка с видео */}
      <ModalVideo
        open={open}
        onClose={() => setOpen(false)}
        src="/hero/pizza.mp4"
      />
    </section>
  );
}
