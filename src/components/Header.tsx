"use client";

import { useState } from "react";
import { Button } from "./Button";
import Image from "next/image";
import MenuLink from "./MenuLink";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="py-4 mb-10 md:mb-0 md:py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop menu */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 text-[16px] font-normal text-[#a3a3a3] lg:gap-12 lg:text-[17px]">
              {[
                { text: "Home", href: "/" },
                { text: "Menu", href: "/menu" },
                { text: "Events", href: "/events" },
                { text: "About us", href: "/about" },
              ].map((item) => (
                <li key={item.href}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <MenuLink text={item.text} href={item.href} />
                  </motion.div>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right actions */}
          <div className="flex items-center z-100 gap-4 md:gap-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button text="Log in" className="hidden md:block z-100" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-amber-600 p-[6px] transition-transform duration-300 md:h-12 md:w-12"
            >
              <Image
                src="/bag.svg"
                alt="bag"
                width={24}
                height={21}
                className="ml-0.5 block cursor-pointer transition-transform duration-300 hover:rotate-12"
              />
            </motion.div>

            <motion.button
              className="z-5000 block md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              whileTap={{ scale: 0.9, rotate: -10 }}
            >
              <Image
                src={isMobileMenuOpen ? "/close.svg" : "/menu.svg"}
                alt="Menu"
                width={30}
                height={30}
                className={isMobileMenuOpen ? "filter brightness-0 invert" : ""}
              />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/70 bg-opacity-90 md:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-8 text-2xl font-bold text-white">
              {[
                { text: "Home", href: "/" },
                { text: "Menu", href: "/menu" },
                { text: "Events", href: "/events" },
                { text: "About us", href: "/about" },
              ].map((item) => (
                <motion.div
                  key={item.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MenuLink
                    text={item.text}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                </motion.div>
              ))}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button text="Log in" onClick={() => setIsMobileMenuOpen(false)} />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
