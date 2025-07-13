import Image from "next/image";

export default function About() {
  return (
    <section>
      <div className="container flex justify-between relative items-center">
            <Image width="88" height="55" src="/about/vector.png" alt="" className="absolute left-[42%] top-[60%]"/>
        <div className="flex flex-col max-w-[490px]">
          <h2 className="font-extrabold text-[69px] leading-[110%] mb-4 text-white">
            About us
          </h2>
          <p className="font-normal mb-6 text-[19px] leading-[110%] text-[#a3a3a3]">
            In just a couple of years, we have opened 6 outlets in different
            cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the future
            we plan to develop the network in other major cities of Russia.
          </p>
          <Image
            width="390"
            height="190"
            src="/about/group.png"
            alt="pizzas"
            className="mb-6"
          />
          <p className="font-normal text-[19px] leading-[110%] text-[#a3a3a3]">
            The kitchen of each point is at least: 400-500 sq. m. meters,
            hundreds of employees, smoothly performing work in order to receive
            / prepare / form / deliver customer orders on time.
          </p>
        </div>
        <div className="relative shrink-0">
          <Image
            src="/about/pizza.jpg"
            alt="main pizza"
            width={456}
            height={684}
            className="rounded-[46px]"
          />

          {/* декоративные PNG поверх */}
          <Image
            src="/forbg/fries.png"
            alt="fries"
            width={213}
            height={226}
            className="absolute -bottom-[75px] -left-[115px] z-10"
          />
          <Image
            src="/forbg/pizza.png"
            alt="pizza"
            width={252}
            height={252}
            className="absolute -top-[118px] -right-[115px] z-10"
          />
        </div>
      </div>
    </section>
  );
}
