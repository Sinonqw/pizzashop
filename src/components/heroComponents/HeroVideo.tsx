import Image from "next/image";

export default function HeroVideo() {
  return (
    <>
      <h4 className="mb-4 font-normal text-[19px] leading-[110%] text-[#a3a3a3]">
        Cooking process:
      </h4>
      <div className="overflow-hidden rounded-[23px] max-w-[272px] mb-14 relative">
        <Image
          src="/hero/cook.jpg"
          alt="cooked"
          width={272}
          height={193}
          className="object-cover"
        />
        <button
          onClick={() => {
            console.log(123);
          }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          {/* Большой эллипс */}
          <Image
            width={224}
            height={224}
            alt="play background"
            src="/hero/ellips.svg"
            className="w-[124px] h-[124px]"
          />
          {/* Иконка по центру */}
          <div className="absolute inset-0 mb-2 flex items-center justify-center ">
            <Image
              width={23}
              height={23}
              alt="play icon"
              src="/hero/play.svg"
              className="hover:rotate-360 duration-500"
            />
          </div>
        </button>
      </div>
    </>
  );
}
