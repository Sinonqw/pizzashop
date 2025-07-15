"use client";
import React from "react";

export function Button({
  text,
  bg = true, // true для активной (градиентный фон), false для неактивной (градиентная обводка/текст)
  onClick, // Добавляем пропс для обработчика клика
  className, // Меняем 'styles' на 'className' для консистентности с Tailwind
}: {
  text: string;
  bg?: boolean;
  onClick?: () => void;
  className?: string; // Теперь это className
}) {
  const baseClasses =
    "relative inline-flex items-center justify-center " +
    "rounded-full " +
    "py-2 px-8 text-base font-medium " + // Адаптировано для мобильных: уменьшен паддинг и размер текста
    "md:py-[10px] md:px-[56px] md:text-[17px] " + // Оригинальные стили для десктопа
    "cursor-pointer select-none " +
    "transition-all duration-300 ease-in-out " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 " +
    (bg ? "focus:ring-[#ff5d29]" : "focus:ring-[#ffa228]");

  // Стили для активной кнопки (градиентный фон)
  const activeStyles =
    "bg-gradient-to-br from-[#ff5d29] to-[#fe9c1c] " +
    "hover:scale-105 hover:shadow-[0_0_12px_0_rgba(255,162,41,0.6)] " +
    "active:scale-100 ";

  // Стили для неактивной кнопки (прозрачный фон, градиентная обводка и текст)
  const inactiveStyles =
    "bg-transparent " + "hover:shadow-none hover:scale-100 ";

  return (
    <button
      className={`${baseClasses} ${bg ? activeStyles : inactiveStyles} ${
        className || ""
      }`} // Используем className
      onClick={onClick}
    >
      {/* Псевдоэлемент для градиентной обводки (показывается только если bg=false) */}
      {!bg && (
        <span
          className="
            absolute inset-0
            rounded-full
            p-[1.5px]
            overflow-hidden
          "
          style={{
            background: "linear-gradient(215deg, #ff5d29 0%, #fe9c1c 100%)",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
          }}
        ></span>
      )}

      {/* Текст кнопки */}
      <span
        className={`relative z-10 ${bg ? "text-white" : "text-transparent"}`}
        style={
          bg
            ? {}
            : {
                background: "linear-gradient(215deg, #ff5d29 0%, #fe9c1c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }
        }
      >
        {text}
      </span>
    </button>
  );
}
