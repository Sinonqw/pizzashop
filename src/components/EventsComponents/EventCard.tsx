import Image from "next/image";
import { EventCard as EventCardType } from "@/app/data/events";
import { Button } from "../Button";

interface EventCardProps {
  card: EventCardType;
  className?: string;
}

const EventCard: React.FC<EventCardProps> = ({ card, className }) => {
  return (
    <div
      key={card.id}
      className={`relative flex flex-col justify-end overflow-hidden rounded-[15px] bg-[#2a1b12] min-h-[200px] md:min-h-[250px] ${
        card.span || ""
      } ${className || ""}`}
    >
      <Image
        src={card.image}
        alt={card.alt}
        layout="fill"
        objectFit="cover"
        className="rounded-[15px]"
        quality={75}
      />
      <div className="relative z-10 p-4 max-w-full md:p-5 md:max-w-[204px]">
        <h3 className="mb-8 text-[20px] font-medium leading-[109%] text-white max-w-[100%] md:mb-12 md:text-[25px] md:max-w-[180px]">
          {card.title}
        </h3>{" "}
        <Button text="More" />
      </div>
    </div>
  );
};

export default EventCard;
