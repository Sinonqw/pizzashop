// heroComponents/HeroVideoPreview.tsx
"use client";
import Image from "next/image";

export default function HeroVideo({ onPlay }: { onPlay: () => void }) {
  return (
    <>
      <h4 className="mb-4 font-normal text-[19px] leading-[110%] text-[#a3a3a3]">
        Cooking process:
      </h4>

      <div className="relative mb-14 max-w-[272px] overflow-hidden rounded-[23px]">
        <Image
          src="/hero/cook.jpg"
          alt="cooked"
          width={272}
          height={193}
          className="object-cover"
        />

        <button
          onClick={onPlay}
          className="absolute inset-0 z-10 flex items-center justify-center"
        >
          {/* эллипс */}
          <Image
            width={224}
            height={224}
            src="/hero/ellips.svg"
            alt=""
            className="w-[124px] h-[124px]"
          />
          {/* play‑иконка */}
          <Image
            width={23}
            height={23}
            src="/hero/play.svg"
            alt="play"
            className="absolute inset-0 m-auto bottom-1 left-1 hover:rotate-360 duration-300"
          />
        </button>
      </div>
    </>
  );
}
