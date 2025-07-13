import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

export const socialLinks = [
  {
    href: "https://www.instagram.com",
    label: "Instagram",
    Icon: FaInstagram, // Храним компонент иконки напрямую
  },
  {
    href: "https://www.facebook.com",
    label: "Facebook",
    Icon: FaFacebookF,
  },
  {
    href: "https://twitter.com", // Или "https://x.com" для X
    label: "Twitter/X",
    Icon: FaTwitter, // Используйте FaXTwitter, если хотите новую иконку X
  },
];