"use client";
import React, { useState } from "react";

interface CirclesProps {
  onSizeChange: (size: string) => void;
}

export function Circles({ onSizeChange }: CirclesProps) {
  const [activeSize, setActiveSize] = useState<string>("28");

  const baseCircleClasses =
    "w-10 h-10 rounded-full flex items-center justify-center " +
    "text-[14px] leading-[110%] font-normal " +
    "transition-all duration-300 ease-out cursor-pointer select-none relative ";

  const textBaseStyles = "relative z-10";

  const orangeGradient = "linear-gradient(215deg, #ff5924 0%, #ffa229 100%)";

  const renderGradientBorder = () => (
    <span
      className="
                absolute inset-0
                rounded-full
                p-[1.5px]
                overflow-hidden
            "
      style={{
        background: orangeGradient,
        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        maskComposite: "exclude",
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
      }}
    ></span>
  );

  const renderGradientText = (text: string) => (
    <span
      className={textBaseStyles}
      style={{
        background: orangeGradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        color: "transparent",
        textShadow: "0 0 5px rgba(255, 162, 41, 0.3)",
      }}
    >
      {text}
    </span>
  );

  const handleCircleClick = (size: string) => {
    setActiveSize(size);
    onSizeChange(size);
  };

  const renderCircle = (size: string) => {
    const isActive = activeSize === size;

    const currentClasses = `${baseCircleClasses} ${
      isActive
        ? ""
        : "hover:scale-110 hover:rotate-6 hover:shadow-[0_0_12px_0_rgba(255,162,41,0.6)]"
    }`;

    return (
      <button
        key={size}
        className={currentClasses}
        onClick={() => handleCircleClick(size)}
        style={isActive ? { background: orangeGradient } : {}}
      >
        {!isActive && renderGradientBorder()}
        {isActive ? (
          <span className={textBaseStyles + " text-white"}>{size}</span>
        ) : (
          renderGradientText(size)
        )}
      </button>
    );
  };

  return (
    <div className="flex gap-4">
      {renderCircle("22")}
      {renderCircle("28")}
      {renderCircle("33")}
    </div>
  );
}
