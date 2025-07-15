import Image from "next/image";
import RightImgDecor from "./RightImgDecor";

export default function About() {
  return (
    <section className="py-8 md:py-16">
      <div className="container relative mx-auto flex flex-col items-center gap-8 px-4 md:flex-row md:justify-between md:gap-0">
        <Image
          width="88"
          height="55"
          src="/about/vector.png"
          alt=""
          className="absolute left-1/2 top-[5%] -translate-x-1/2 md:left-[42%] md:top-[60%] hidden md:block"
        />
        <div className="flex max-w-full flex-col items-center text-center md:max-w-[490px] md:items-start md:text-left">
          <h2 className="mb-4 text-[48px] font-extrabold leading-[110%] text-white md:text-[69px]">
            About us
          </h2>
          <p className="mb-6 text-base font-normal leading-[110%] text-[#a3a3a3] md:text-[19px]">
            In just a couple of years, we have opened 6 outlets in different
            cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the future
            we plan to develop the network in other major cities of Russia.
          </p>
          <Image
            width="390"
            height="190"
            src="/about/group.png"
            alt="pizzas"
            className="mb-6 w-full max-w-[300px] md:max-w-[390px] h-auto"
          />
          <p className="font-normal text-base leading-[110%] text-[#a3a3a3] md:text-[19px]">
            The kitchen of each point is at least: 400-500 sq. m. meters,
            hundreds of employees, smoothly performing work in order to receive
            / prepare / form / deliver customer orders on time.
          </p>
        </div>
        <RightImgDecor image="/about/pizza.jpg" />
      </div>
    </section>
  );
}
