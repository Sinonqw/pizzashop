// components/EventsComponents/EventCard.tsx (текущий код, без изменений)
import Image from 'next/image';
import { EventCard as EventCardType } from '@/app/data/events'; // Убедитесь в правильности пути
import { Button } from '../Button'; // Убедитесь в правильности пути

interface EventCardProps {
  card: EventCardType;
}

const EventCard: React.FC<EventCardProps> = ({ card }) => {
  return (
    <div
      key={card.id}
      className={`relative rounded-[15px] overflow-hidden bg-[#2a1b12] flex flex-col justify-end min-h-[250px] ${card.span || ''}`}
    >
      <Image
        src={card.image}
        alt={card.alt}
        layout="fill"
        objectFit="cover"
        className="rounded-[15px]"
        quality={75}
      />
      <div className="relative z-10 p-5 max-w-[204px]">
        <h3 className="font-medium text-[25px] leading-[109%] text-white max-w-[180px] mb-12">{card.title}</h3>
        <Button
        text='More'
        />
      </div>
    </div>
  );
};

export default EventCard;