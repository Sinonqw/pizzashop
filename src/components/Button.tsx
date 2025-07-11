"use client";
import React from 'react';

export function Button({
  text,
  bg = true, // true для активной (градиентный фон), false для неактивной (градиентная обводка/текст)
  onClick,   // Добавляем пропс для обработчика клика
  styles,    // Пропс для дополнительных стилей
}: {
  text: string;
  bg?: boolean;
  onClick?: () => void; // Тип для функции без аргументов и без возврата значения
  styles?: string;
}) {
  const baseClasses =
    "relative inline-flex items-center justify-center " + // relative для псевдоэлементов, inline-flex для размеров
    "rounded-full " +
    "py-[10px] px-[56px] " + // Паддинги, как у вас
    "text-[17px] font-medium " +
    "cursor-pointer select-none " + // select-none чтобы текст не выделялся
    "transition-all duration-300 ease-in-out " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 " + // Для доступности
    (bg ? "focus:ring-[#ff5d29]" : "focus:ring-[#ffa228]"); // Разные ring цвета для фокуса

  // Стили для активной кнопки (градиентный фон)
  const activeStyles =
    "bg-gradient-to-br from-[#ff5d29] to-[#fe9c1c] " +
    "hover:scale-105 hover:shadow-[0_0_12px_0_rgba(255,162,41,0.6)] " + // Тень при наведении
    "active:scale-100 "; // Вернуть в исходный размер при клике

  // Стили для неактивной кнопки (прозрачный фон, градиентная обводка и текст)
  const inactiveStyles =
    "bg-transparent " +
    "hover:shadow-none hover:scale-100 "; // Отключаем тень и масштабирование при наведении, если неактивна

  return (
    <button
      className={`${baseClasses} ${bg ? activeStyles : inactiveStyles} ${styles || ''}`}
      onClick={onClick}
    >
      {/* Псевдоэлемент для градиентной обводки (показывается только если bg=false) */}
      {!bg && (
        <span
          className="
            absolute inset-0           /* Занимает всю область кнопки */
            rounded-full                /* Округляет границы так же, как кнопка */
            p-[1.5px]                   /* Толщина обводки (можете настроить) */
            overflow-hidden             /* Обрезает содержимое, чтобы градиент был только на обводке */
          "
          style={{
            background: 'linear-gradient(215deg, #ff5d29 0%, #fe9c1c 100%)', // Ваш градиент
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
          }}
        ></span>
      )}

      {/* Текст кнопки */}
      <span
        className={`relative z-10 ${bg ? "text-white" : "text-transparent"}`} // Текст белый, если активен; прозрачный, если неактивен (для background-clip: text)
        style={bg ? {} : { // Применяем background-clip: text только если неактивен
          background: 'linear-gradient(215deg, #ff5d29 0%, #fe9c1c 100%)', // Ваш градиент
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent', // Fallback
          // textShadow: '0 0 5px rgba(255, 162, 41, 0.3)' // Опционально: эффект свечения для текста
        }}
      >
        {text}
      </span>
    </button>
  );
}