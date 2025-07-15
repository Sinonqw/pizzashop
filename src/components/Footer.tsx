import Logo from "./Logo";
import FooterColumn from "./FooterComponents/FooterColumn";
import { socialLinks } from "@/app/data/socialLinks";

export default function Footer() {
  const footerColumnsData = [
    {
      title: "Home",
      links: [
        { text: "To Order", href: "#" },
        { text: "About us", href: "#" },
        { text: "Events", href: "#" },
        { text: "Menu", href: "#" },
      ],
    },
    {
      title: "Events",
      links: [
        { text: "3 Pizza 1 Free Coffee", href: "#" },
        { text: "2 Pizza for 1 Price", href: "#" },
        { text: "Kitchen Tour", href: "#" },
      ],
    },
    {
      title: "Menu",
      links: [
        { text: "Show All", href: "#" },
        { text: "Seaproducts", href: "#" },
        { text: "Vegan", href: "#" },
        { text: "Meat", href: "#" },
      ],
    },
    {
      title: "About Us",
      links: [
        { text: "Our History", href: "#" },
        { text: "Why We?", href: "#" },
      ],
    },
  ];

  return (
    <footer className="py-8 text-white md:py-20">
      <div className="container mx-auto px-4 md:px-10 lg:px-20 max-w-[1200px]">
        <div className="mb-12 grid grid-cols-1 gap-8 md:mb-20 md:grid-cols-5 md:gap-16 lg:gap-24">
          <div className="md:col-span-1 flex items-start justify-center md:justify-start">
            <Logo />
          </div>
          {footerColumnsData.map((column, index) => (
            <FooterColumn
              key={index}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-0">
          <div className="bg-gradient-to-br from-[#ff6432] to-[#ffa228] bg-clip-text text-center text-lg font-extrabold leading-[110%] text-transparent transition-all duration-300 hover:brightness-125 md:text-left md:text-[20px]">
            <a href="tel:+380973985093">+38 (097) 398-50-93</a>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <link.Icon
                  className="text-[#ff6432] transition-colors duration-200 hover:text-white"
                  size={24}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
