// app/data/events.ts

export interface EventCard {
  id: string;
  title: string;
  image: string;
  alt: string;
  span?: 'col-span-2' | 'row-span-2' | 'col-span-2 row-span-2'; // Tailwind классы для span
}

export const eventCards: EventCard[] = [
  {
    id: 'how-we-cooking',
    title: 'HOW WE COOKING',
    image: '/events/howwecooking.jpg', // Убедитесь, что путь к изображению правильный
    alt: 'Chef cooking pizza',
  },
  {
    id: 'our-blog',
    title: 'OUR BLOG',
    image: '/events/our-blog.jpg',
    alt: 'Blog post image',
  },
  {
    id: 'two-pizza',
    title: 'TWO PIZZA FOR 1 PRICE',
    image: '/events/two-pizza.jpg',
    alt: 'Two pizzas',
  },
  {
    id: 'kitchen-tour',
    title: 'KITCHEN TOUR',
    image: '/events/kitchen-tour.jpg',
    alt: 'Kitchen tour',
  },
  {
    id: 'free-coffee',
    title: 'FREE COFFEE FOR 3 PIZZA',
    image: '/events/free-coffee.jpg',
    alt: 'Coffee and pizza',
  },
  {
    id: 'our-instagram',
    title: 'OUR INSTAGRAM',
    image: '/events/our-instagram.jpg',
    alt: 'People on Instagram',
  },
  {
    id: 'where-choose-us',
    title: 'WHERE ARE YOU CHOOSE US?',
    image: '/events/where-choose-us.jpg',
    alt: 'Where to choose us',
  },
];

// Декоративные элементы
export interface DecorativeElement {
  id: string;
  image: string;
  alt: string;
  width: number;  // Явно указываем ширину
  height: number; // Явно указываем высоту
  className: string; // Tailwind классы для позиционирования, БЕЗ w-[...] и h-[...]
}

export const decorativeElements: DecorativeElement[] = [
  // Позиции настроены согласно второму скриншоту и общему макету
  { id: 'egg', image: '/events/egg.svg', alt: 'Egg', width: 220, height: 220, className: 'absolute top-[20%] left-[-7%] z-10 hidden lg:block' }, // Чуть ниже
  { id: 'taco', image: '/events/taco.svg', alt: 'Taco', width: 260, height: 280, className: 'absolute top-[50%] right-[-7%] -translate-y-1/2 z-10 hidden lg:block' }, // Тако справа
  { id: 'coffee', image: '/events/coffee.svg', alt: 'Coffee', width: 200, height: 200, className: 'absolute bottom-[-4%] left-[-4%] z-10 hidden lg:block' }, // Кофе снизу слева
];