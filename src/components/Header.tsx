"use client";

import { useState } from "react";
import { Button } from "./Button";
import Image from "next/image";
import MenuLink from "./MenuLink";
import Logo from "./Logo";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="py-4 md:py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Navigation - Hidden on small screens, visible on medium and larger */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 text-[16px] font-normal text-[#a3a3a3] lg:gap-12 lg:text-[17px]">
              {[
                { text: "Home", href: "/" },
                { text: "Menu", href: "/menu" },
                { text: "Events", href: "/events" },
                { text: "About us", href: "/about" },
              ].map((item) => (
                <li key={item.href}>
                  <MenuLink text={item.text} href={item.href} />
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Login Button - Hidden on small screens, visible on medium and larger */}
            <Button
              text="Log in"
              // Add responsive classes to hide on small screens and show on medium
              className="hidden md:inline-flex" // Use inline-flex to ensure it acts as a flex item
            />

            {/* Bag Icon */}
            <div className="group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-amber-600 p-[6px] transition-transform duration-300 hover:scale-105 md:h-12 md:w-12">
              <Image
                src="/bag.svg"
                alt="bag"
                width={24}
                height={21}
                className="ml-0.5 block cursor-pointer transition-transform duration-300 hover:rotate-12"
              />
            </div>

            {/* Hamburger Menu Icon - Visible on small screens, hidden on medium and larger */}
            <button
              className="z-5000 block md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <Image
                src={isMobileMenuOpen ? "/close.svg" : "/hamburger.svg"}
                alt="Menu"
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-90 md:hidden">
          <nav className="flex h-full flex-col items-center justify-center gap-8 text-2xl font-bold text-white">
            {[
              { text: "Home", href: "/" },
              { text: "Menu", href: "/menu" },
              { text: "Events", href: "/events" },
              { text: "About us", href: "/about" },
            ].map((item) => (
              <MenuLink
                key={item.href}
                text={item.text}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
              />
            ))}
            <Button text="Log in" onClick={() => setIsMobileMenuOpen(false)} />
          </nav>
        </div>
      )}
    </header>
  );
}
