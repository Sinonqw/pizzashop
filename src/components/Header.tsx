"use client";
import { Button } from "./Button";
import Image from "next/image";
import MenuLink from "./MenuLink";
import Logo from "./Logo";

export function Header() {
  return (
    <header className="py-6 ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo/>

          {/* Navigation */}
          <nav>
            <ul className="flex gap-12 text-[17px] font-normal text-[#a3a3a3]">
              {[
                { text: "Home", href: "/" },
                { text: "Menu", href: "/menu" },
                { text: "Events", href: "/events" },
                { text: "About us", href: "/about" },
              ].map((item) => (
                <li key={item.href}>
                  <MenuLink
                    text={item.text}
                    href={item.href}
                    
                  />
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex gap-6 items-center z-1000">
            <Button text="Log in" />
            <div className="relative group cursor-pointer bg-amber-600 p-[6px] rounded-full w-12 h-12 flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <Image
                src="/bag.svg"
                alt="bag"
                width={30}
                height={26}
                className="block ml-0.5 transition-transform duration-300 cursor-pointer hover:rotate-12"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
