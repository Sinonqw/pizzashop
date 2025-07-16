import Image from "next/image";

export default function HeroText() {
  return (
    <>
      <h1 className="mb-7.5 relative font-extrabold text-[65px] leading-[110%] text-white md:text-[50px] lg:text-[65px] sm:text-[40px] xs:text-[32px]">
        {/* Adjusted text sizing for responsiveness */}
        The Fastest Pizza{" "}
        <span className="relative inline-block h-[40px] w-[40px] align-middle sm:h-[30px] sm:w-[30px] lg:h-[54px] lg:w-[50px]">
          {/* This span creates space for the lightning and scales */}
          <Image
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" // Centering the lightning bolt
            width="50"
            height="54"
            alt="lightning"
            src="/hero/lightning.svg"
          />
        </span>{" "}
        Delivery
        <Image
          width="88"
          height="55"
          src="/hero/vector1.svg"
          className="absolute right-12 top-10 hidden lg:block"
          alt=""
        />
      </h1>
      <p className="mb-4 font-normal text-[19px] leading-[110%] text-[#a3a3a3] md:text-[17px] sm:text-[15px] xs:text-[14px]">
        {/* Adjusted paragraph text sizing for responsiveness */}
        We will deliver juicy pizza for your family in 30 minutes, if the
        courier is late - <span className="text-white">pizza is free</span>!
      </p>
    </>
  );
}