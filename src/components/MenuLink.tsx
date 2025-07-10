"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  text: string;
  href: string;
}

export default function MenuLink({ text, href }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative transition-all duration-300 flex flex-col items-center gap-2 
        ${isActive
          ? "bg-[linear-gradient(215deg,_#ff6432_0%,_#ffa228_100%)] bg-clip-text text-transparent"
          : "text-[#a3a3a3] hover:text-white"}`}
    >
      {text}
      {isActive && (
        <span className="absolute top-8 rounded-full bg-[linear-gradient(215deg,_#ff6432_0%,_#ffa228_100%)] block w-1.5 h-1.5"></span>
      )}
    </Link>
  );
}
