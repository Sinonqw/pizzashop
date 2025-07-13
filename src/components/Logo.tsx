import Link from "next/link";

export default function Logo() {
  return (
    <Link
      className="font-extrabold text-[34px] leading-[110%] bg-gradient-to-br from-[#ff6432] to-[#ffa228] bg-clip-text text-transparent transition-all duration-300 hover:brightness-125"
      href="/"
    >
      pizzashop
    </Link>
  );
}
