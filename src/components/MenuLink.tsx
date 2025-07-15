"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  text: string;
  href: string;
  onClick?: () => void; // Added for mobile menu closure
}

export default function MenuLink({ text, href, onClick }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick} // Pass onClick prop to Link
      className={`relative flex flex-col items-center gap-1 text-[15px] transition-all duration-300 md:gap-2 md:text-[17px] 
        ${
          isActive
            ? "bg-[linear-gradient(215deg,_#ff6432_0%,_#ffa228_100%)] bg-clip-text text-transparent"
            : "text-[#a3a3a3] hover:text-white"
        }`}
    >
      {text}
      {isActive && (
        <span className="absolute top-6 block h-1 w-1 rounded-full bg-[linear-gradient(215deg,_#ff6432_0%,_#ffa228_100%)] md:top-8 md:h-1.5 md:w-1.5"></span>
      )}
    </Link>
  );
}
