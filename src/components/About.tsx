import Image from "next/image";
import RightImgDecor from "./RightImgDecor";

export default function About() {
  return (
    <section className="py-8 md:py-16">
      {" "}
      {/* Added vertical padding for mobile, adjusted for desktop */}
      <div className="container relative mx-auto flex flex-col items-center gap-8 px-4 md:flex-row md:justify-between md:gap-0">
        {" "}
        {/* Changed to flex-col for mobile, added gap and padding */}
        {/* Decorative vector image */}
        <Image
          width="88"
          height="55"
          src="/about/vector.png"
          alt=""
          // Adjusted position for mobile, hidden on smaller screens for clarity, shown on md+
          className="absolute left-1/2 top-[5%] -translate-x-1/2 md:left-[42%] md:top-[60%] hidden md:block"
        />
        {/* Left Column (Text Content) */}
        <div className="flex max-w-full flex-col items-center text-center md:max-w-[490px] md:items-start md:text-left">
          {" "}
          {/* Adjusted max-width, alignment, and text alignment for mobile */}
          <h2 className="mb-4 text-[48px] font-extrabold leading-[110%] text-white md:text-[69px]">
            {" "}
            {/* Adjusted font size for mobile */}
            About us
          </h2>
          <p className="mb-6 text-base font-normal leading-[110%] text-[#a3a3a3] md:text-[19px]">
            {" "}
            {/* Adjusted font size for mobile */}
            In just a couple of years, we have opened 6 outlets in different
            cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the future
            we plan to develop the network in other major cities of Russia.
          </p>
          <Image
            width="390"
            height="190"
            src="/about/group.png"
            alt="pizzas"
            className="mb-6 w-full max-w-[300px] md:max-w-[390px] h-auto" // Adjusted width for mobile, maintained aspect ratio
          />
          <p className="font-normal text-base leading-[110%] text-[#a3a3a3] md:text-[19px]">
            {" "}
            {/* Adjusted font size for mobile */}
            The kitchen of each point is at least: 400-500 sq. m. meters,
            hundreds of employees, smoothly performing work in order to receive
            / prepare / form / deliver customer orders on time.
          </p>
        </div>
        {/* Right Column (Image Decor) */}
        {/* The RightImgDecor component needs to be adapted internally for responsiveness */}
        <RightImgDecor image="/about/pizza.jpg" />
      </div>
    </section>
  );
}
