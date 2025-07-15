import Image from "next/image";

export default function RightImgDecor({ image }: { image: string }) {
  return (
    <>
      <div className="relative shrink-0">
        <Image
          src={image}
          alt="main pizza"
          width={456}
          height={684}
          className="w-full rounded-[46px] md:w-[456px]" // Adjust width for mobile, maintain aspect ratio
        />

        {/* Decorative PNGs adjusted for mobile or hidden */}
        <Image
          src="/forbg/fries.png"
          alt="fries"
          width={213}
          height={226}
          className="absolute -bottom-[40px] -left-[60px] z-10 w-[120px] md:-bottom-[75px] md:-left-[115px] md:w-[213px]" // Adjusted size and position
        />
        <Image
          src="/forbg/pizza.png"
          alt="pizza"
          width={252}
          height={252}
          className="absolute -right-[60px] -top-[60px] z-10 w-[140px] md:-right-[115px] md:-top-[118px] md:w-[252px]" // Adjusted size and position
        />
      </div>
    </>
  );
}
