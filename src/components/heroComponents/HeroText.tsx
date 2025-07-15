import Image from "next/image";

export default function HeroText() {
  return (
    <>
      <h1 className="mb-7.5 relative font-extrabold text-[65px] leading-[110%] text-white">
        The Fastest Pizza <span className="inline-block w-10"></span> Delivery
        <Image
          className="absolute left-[12rem] top-23"
          width="50"
          height="54"
          alt="lightning"
          src="/hero/lightning.svg"
        />
        <Image
          width="88"
          height="55"
          src="/hero/vector1.svg"
          className="absolute right-12 top-10"
          alt=""
        />
      </h1>
      <p className="mb-4 font-normal text-[19px] leading-[110%] text-[#a3a3a3]">
        We will deliver juicy pizza for your family in 30 minutes, if the
        courier is late - <span className="text-white">pizza is free</span>!
      </p>
    </>
  );
}
