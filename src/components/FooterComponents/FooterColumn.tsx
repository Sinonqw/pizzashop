import React from "react";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

export default function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h4 className="font-semibold text-lg mb-4 text-[#FF7020]">{title}</h4>
      <ul className="space-y-2 text-[#b0b0b0]">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="hover:text-white transition-colors duration-200"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
