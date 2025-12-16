export interface MenuItemType {
  id: number;
  name: string;
  path: string;
  selected: boolean;
  description: string;
  price: string;
  type: string;
};

export const menuItems: MenuItemType[] = [
  {
    id: 1,
    name: "Bolognese",
    path: "./bolognese.png",
    selected: false,
    description:
      "Creamy pasta with rich tomato meat sauce and Parmesan cheese.",
    price: "€12.99",
    type: "pasta",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    path: "./margherita.png",
    selected: false,
    description: "Classic pizza with fresh mozzarella, tomatoes, and basil.",
    price: "€10.99",
    type: "pizza",
  },
  {
    id: 3,
    name: "Pasta",
    path: "./pasta.png",
    selected: false,
    description: "Creamy pasta with egg, and Parmesan cheese.",
    price: "€11.99",
    type: "pasta",
  },
  {
    id: 4,
    name: "Cesar Salad",
    path: "./cesar.png",
    selected: false,
    description:
      "Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.",
    price: "€8.99",
    type: "salad",
  },
  {
    id: 5,
    name: "Cheesy pizza",
    path: "./cheese.png",
    selected: false,
    description:
      "Classic cheese pizza with a blend of mozzarella and cheddar cheeses.",
    price: "€9.99",
    type: "pizza",
  },
  {
    id: 6,
    name: "Ice Cream",
    path: "./ice-cream.png",
    selected: false,
    description: "Ice cream mix of flavors.",
    price: "€5.99",
    type: "dessert",
  },
  {
    id: 7,
    name: "Lasagna",
    path: "./lasagna.png",
    selected: false,
    description:
      "Delicious layers of pasta, meat, and cheese baked to perfection.",
    price: "€13.99",
    type: "pasta",
  },
  {
    id: 8,
    name: "Mozzarella",
    path: "./mozzarella.png",
    selected: false,
    description: "Fresh mozzarella cheese served with tomatoes and basil.",
    price: "€7.99",
    type: "appetizer",
  },
  {
    id: 9,
    name: "Mushroom pizza",
    path: "./mushroom.png",
    selected: false,
    description:
      "Savory mushroom pizza topped with a blend of cheeses and herbs.",
    price: "€11.99",
    type: "pizza",
  },
  {
    id: 10,
    name: "Salami pizza",
    path: "./salami.png",
    selected: false,
    description: "Spicy salami pizza with a crispy crust and melted cheese.",
    price: "€12.99",
    type: "pizza",
  },
  {
    id: 11,
    name: "Tiramisu",
    path: "./tiramisu.png",
    selected: false,
    description:
      "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.",
    price: "€6.99",
    type: "dessert",
  },
  {
    id: 12,
    name: "Vegetarian pizza",
    path: "./veggie.png",
    selected: false,
    description:
      "Delicious vegetarian pizza topped with fresh vegetables and mozzarella cheese.",
    price: "€10.99",
    type: "pizza",
  },
];