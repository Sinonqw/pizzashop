"use client";

export function Button({
  text,
  bg = true,
  styles,
}: {
  text: string;
  bg?: boolean;
  styles?: string;
}) {
  return (
    <button
      className={
        "overflow-hidden py-[10px] px-[56px] rounded-full text-[17px] font-medium cursor-pointer text-white transition-all duration-300 ease-in-out active:scale-100 " +
        (bg
          ? "bg-gradient-to-br from-[#ff5d29] to-[#fe9c1c] hover:scale-105 hover:shadow-lg "
          : "bg-transparent hover:shadow-none hover:scale-100 bg-[linear-gradient(215deg,_#ff6432_0%,_#ffa228_100%)] bg-clip-text text-transparent ") +
        styles
      }
    >
      {text}
    </button>
  );
}
