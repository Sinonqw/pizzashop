type CardData = {
  title: string;
  desc: string;
  cost: string;
  img: string;
  category: "Meat" | "Vegetarian" | "Sea products" | "Mushroom" | "Mixed" | "Classic"; // Добавил несколько общих категорий для гибкости
};

const menuItems: CardData[] = [

  {
    title: "Italian",
    desc: "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    cost: "8,35",
    img: "/menu/pizza-italian.png",
    category: "Mixed", 
  },
  {
    title: "Venecia",
    desc: "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    cost: "7,35",
    img: "/menu/pizza-venecia.png",
    category: "Mixed",
  },
  {
    title: "Meat",
    desc: "Filling: classic pepperoni, ham, bacon, sausage, mozzarella...",
    cost: "9,35",
    img: "/menu/pizza-meat.png",
    category: "Meat",
  },
  {
    title: "Cheese",
    desc: "Filling: mozzarella, cheddar, parmesan, gorgonzola...",
    cost: "8,35",
    img: "/menu/pizza-cheese.png",
    category: "Vegetarian",
  },



  // Meat
  {
    title: "Pepperoni",
    desc: "Filling: spicy pepperoni, rich tomato sauce, mozzarella cheese...",
    cost: "8,99",
    img: "/menu/placeholder.webp",
    category: "Meat",
  },
  {
    title: "BBQ Chicken",
    desc: "Filling: grilled chicken, BBQ sauce, red onion, cilantro, mozzarella...",
    cost: "10,50",
    img: "/menu/placeholder.webp",
    category: "Meat",
  },
  {
    title: "Ham & Mushroom",
    desc: "Filling: smoked ham, fresh mushrooms, mozzarella, tomato sauce...",
    cost: "9,00",
    img: "/menu/placeholder.webp",
    category: "Meat",
  },

  // Vegetarian
  {
    title: "Margarita",
    desc: "Filling: fresh tomatoes, mozzarella, basil, olive oil...",
    cost: "6,99",
    img: "/menu/placeholder.webp",
    category: "Vegetarian",
  },
  {
    title: "Veggie Delight",
    desc: "Filling: bell peppers, olives, spinach, red onion, feta cheese...",
    cost: "8,20",
    img: "/menu/placeholder.webp",
    category: "Vegetarian",
  },
  {
    title: "Spinach & Ricotta",
    desc: "Filling: fresh spinach, creamy ricotta, garlic, mozzarella...",
    cost: "8,75",
    img: "/menu/placeholder.webp",
    category: "Vegetarian",
  },

  // Sea products
  {
    title: "Seafood Deluxe",
    desc: "Filling: shrimp, calamari, mussels, garlic, cherry tomatoes...",
    cost: "12,99",
    img: "/menu/placeholder.webp",
    category: "Sea products",
  },
  {
    title: "Tuna & Onion",
    desc: "Filling: tuna chunks, red onion, black olives, mozzarella...",
    cost: "9,50",
    img: "/menu/placeholder.webp",
    category: "Sea products",
  },

  // Mushroom
  {
    title: "Forest Mushroom",
    desc: "Filling: assorted wild mushrooms, truffle oil, mozzarella, parmesan...",
    cost: "10,25",
    img: "/menu/placeholder.webp",
    category: "Mushroom",
  },
  {
    title: "Funghi",
    desc: "Filling: classic champignon mushrooms, mozzarella, tomato sauce...",
    cost: "7,80",
    img: "/menu/placeholder.webp",
    category: "Mushroom",
  },
];

export const popularPizzas:CardData[] = [
  {
    title: "Argentina",
    desc: "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    cost: "7,35",
    img: "/menu/pizza-argentina.png",
    category: "Vegetarian"
  },
  {
    title: "Gribnaya",
    desc: "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    cost: "6,35",
    img: "/menu/pizza-mushroom.png",
    category: "Mushroom"
  },
  {
    title: "Tomato",
    desc: "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    cost: "7,35",
    img: "/menu/pizza-tomato.png",
    category: "Vegetarian"
  },
  {
    title: "Italian x2",
    desc: "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    cost: "7,35",
    img: "/menu/pizza-argentina.png",
    category: "Vegetarian"
  }
]

export default menuItems;