"use client";

import { useState } from "react";
import Image from "next/image";

export default function ToggleButton() {
  const [active, setActive] = useState<"left" | "right">("left");

  return (
    <div className="rounded-full relative p-[3px] h-[48px] bg-[linear-gradient(214deg,_#fe9c1c_0%,_#ff5e2a_100%)] inline-block">
      <div className="relative w-[340px] h-full rounded-full bg-[linear-gradient(223deg,_#1e0c00_0%,_#1f0700_31.43%,_#170a00_69.37%,_#1e0d00_100%)] overflow-hidden">
        {/* Подвижный фон под активной кнопкой */}
        <div
          className={`absolute top-0 w-9/15 h-full rounded-full bg-gradient-to-br from-[#ff5d29] to-[#fe9c1c] transition-all duration-300 ease-in-out z-0 ${
            active === "left" ? "left-0" : "left-5/12"
          }`}
        />

        {/* Кнопки */}
        <button
          onClick={() => setActive("left")}
          className="absolute left-0 top-0 w-1/2 h-full z-10 flex items-center justify-center text-[17px] font-medium transition-all duration-300 ease-in-out rounded-full
            "
        >
          <span
            className={`transition-all duration-300 ${
              active === "left"
                ? "text-white"
                : "bg-[linear-gradient(215deg,_#ff6432_0%,_#ffa228_100%)] bg-clip-text text-transparent"
            }`}
          >
            To order
          </span>
        </button>

        <button
          onClick={() => setActive("right")}
          className="absolute right-0 top-0 w-1/2 h-full z-10 flex items-center justify-center text-[17px] font-medium transition-all duration-300 ease-in-out rounded-full"
        >
          <span
            className={`transition-all duration-300 ${
              active === "right"
                ? "text-white"
                : "bg-[linear-gradient(215deg,_#ff6432_0%,_#ffa228_100%)] bg-clip-text text-transparent"
            }`}
          >
            Pizza-Menu
          </span>
        </button>
      </div>
      <Image
        width="190"
        height="66"
        src="/hero/vector2.svg"
        className="absolute right-[-75%] top-[15px]"
        alt=""
      />
    </div>
  );
}
