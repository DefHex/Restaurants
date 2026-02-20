export interface MenuItemType {
  id: number;
  name: string;
  path: string;
  selected: boolean;
  description: string;
  price: string;
  type: string;
}

export const menuItems: MenuItemType[] = [
  {
    id: 1,
    name: "Bolognese",
    path: "./bolognese.webp",
    selected: false,
    description:
      "Creamy pasta with rich tomato meat sauce and Parmesan cheese.",
    price: "€12.99",
    type: "pasta",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    path: "./margherita.webp",
    selected: false,
    description: "Classic pizza with fresh mozzarella, tomatoes, and basil.",
    price: "€10.99",
    type: "pizza",
  },
  {
    id: 3,
    name: "Pasta",
    path: "./pasta.webp",
    selected: false,
    description: "Creamy pasta with egg, and Parmesan cheese.",
    price: "€11.99",
    type: "pasta",
  },
  {
    id: 4,
    name: "Cesar Salad",
    path: "./cesar.webp",
    selected: false,
    description:
      "Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.",
    price: "€8.99",
    type: "salad",
  },
  {
    id: 5,
    name: "Cheesy pizza",
    path: "./cheese.webp",
    selected: false,
    description:
      "Classic cheese pizza with a blend of mozzarella and cheddar cheeses.",
    price: "€9.99",
    type: "pizza",
  },
  {
    id: 6,
    name: "Ice Cream",
    path: "./ice-cream.webp",
    selected: false,
    description: "Ice cream mix of flavors.",
    price: "€5.99",
    type: "dessert",
  },
  {
    id: 7,
    name: "Lasagna",
    path: "./lasagna.webp",
    selected: false,
    description:
      "Delicious layers of pasta, meat, and cheese baked to perfection.",
    price: "€13.99",
    type: "pasta",
  },
  {
    id: 8,
    name: "Mozzarella",
    path: "./mozzarella.webp",
    selected: false,
    description: "Fresh mozzarella cheese served with tomatoes and basil.",
    price: "€7.99",
    type: "appetizer",
  },
  {
    id: 9,
    name: "Mushroom pizza",
    path: "./mushroom.webp",
    selected: false,
    description:
      "Savory mushroom pizza topped with a blend of cheeses and herbs.",
    price: "€11.99",
    type: "pizza",
  },
  {
    id: 10,
    name: "Salami pizza",
    path: "./salami.webp",
    selected: false,
    description: "Spicy salami pizza with a crispy crust and melted cheese.",
    price: "€12.99",
    type: "pizza",
  },
  {
    id: 11,
    name: "Tiramisu",
    path: "./tiramisu.webp",
    selected: false,
    description:
      "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.",
    price: "€6.99",
    type: "dessert",
  },
  {
    id: 12,
    name: "Vegetarian pizza",
    path: "./veggie.webp",
    selected: false,
    description:
      "Delicious vegetarian pizza topped with fresh vegetables and mozzarella cheese.",
    price: "€10.99",
    type: "pizza",
  },
];

export const buffetItems: MenuItemType[] = [
  {
    id: 1,
    name: "Brat Wurst",
    path: "./buffetItems/bratWurst.webp",
    selected: false,
    description:
      "Traditional German bratwurst grilled to perfection, juicy and flavorful.",
    price: "€7.99",
    type: "buffet",
  },
  {
    id: 2,
    name: "Dumplings",
    path: "./buffetItems/dumplings.webp",
    selected: false,
    description: "Soft and fluffy dumplings served as a classic comfort food.",
    price: "€5.99",
    type: "buffet",
  },
  {
    id: 3,
    name: "English Breakfast",
    path: "./buffetItems/englishBreakFast.webp",
    selected: false,
    description:
      "Hearty English breakfast with eggs, sausages, beans, and toast.",
    price: "€9.49",
    type: "buffet",
  },
  {
    id: 4,
    name: "Lasagna",
    path: "./buffetItems/lasagna.webp",
    selected: false,
    description:
      "Layers of pasta, rich meat sauce, and creamy béchamel baked golden.",
    price: "€8.99",
    type: "buffet",
  },
  {
    id: 5,
    name: "Olivier Salad",
    path: "./buffetItems/olivierSalad.webp",
    selected: false,
    description:
      "Classic Olivier salad with potatoes, vegetables, and creamy dressing.",
    price: "€4.99",
    type: "buffet",
  },
  {
    id: 6,
    name: "Penne Bolognese",
    path: "./buffetItems/penneBolognese.webp",
    selected: false,
    description:
      "Penne pasta served with a rich and slow-cooked Bolognese sauce.",
    price: "€8.49",
    type: "buffet",
  },
  {
    id: 7,
    name: "Penne Pesto",
    path: "./buffetItems/pennePesto.webp",
    selected: false,
    description:
      "Penne pasta tossed in fresh basil pesto with olive oil and parmesan.",
    price: "€7.99",
    type: "buffet",
  },
  {
    id: 8,
    name: "Pizza Fungi",
    path: "./buffetItems/pizzaFungi.webp",
    selected: false,
    description:
      "Classic pizza topped with fresh mushrooms and melted mozzarella.",
    price: "€8.99",
    type: "buffet",
  },
  {
    id: 9,
    name: "Pizza Margarita",
    path: "./buffetItems/pizzaMargarita.webp",
    selected: false,
    description:
      "Traditional Margherita pizza with tomato sauce, mozzarella, and basil.",
    price: "€8.49",
    type: "buffet",
  },
  {
    id: 10,
    name: "Pizza Salami",
    path: "./buffetItems/pizzaSalami.webp",
    selected: false,
    description: "Savory pizza topped with spicy salami and melted cheese.",
    price: "€9.49",
    type: "buffet",
  },
  {
    id: 11,
    name: "Poke Bowl Chicken",
    path: "./buffetItems/pokeBowlChicken.webp",
    selected: false,
    description:
      "Fresh poke bowl with marinated chicken, rice, and vegetables.",
    price: "€9.99",
    type: "buffet",
  },
  {
    id: 12,
    name: "Poke Bowl Thuna",
    path: "./buffetItems/pokeBowlThuna.webp",
    selected: false,
    description: "Light poke bowl with fresh tuna, rice, and sesame flavors.",
    price: "€10.49",
    type: "buffet",
  },
  {
    id: 13,
    name: "Roasted Salmon",
    path: "./buffetItems/roastedSalmon.webp",
    selected: false,
    description: "Oven-roasted salmon fillet with herbs and lemon.",
    price: "€11.99",
    type: "buffet",
  },
  {
    id: 14,
    name: "Salad",
    path: "./buffetItems/salad.webp",
    selected: false,
    description:
      "Fresh mixed salad with seasonal vegetables and light dressing.",
    price: "€4.49",
    type: "buffet",
  },
  {
    id: 15,
    name: "Schnitzel",
    path: "./buffetItems/schnitzel.webp",
    selected: false,
    description: "Crispy breaded schnitzel fried until golden and tender.",
    price: "€10.99",
    type: "buffet",
  },
  {
    id: 16,
    name: "Schwarma",
    path: "./buffetItems/schwarma.webp",
    selected: false,
    description: "Spiced shawarma-style meat served juicy and aromatic.",
    price: "€9.49",
    type: "buffet",
  },
  {
    id: 17,
    name: "Spaghetti Alassasina",
    path: "./buffetItems/spagettiAlassasina.webp",
    selected: false,
    description:
      "Spaghetti cooked directly in spicy tomato sauce for deep flavor.",
    price: "€8.99",
    type: "buffet",
  },
  {
    id: 18,
    name: "Steak",
    path: "./buffetItems/steak2.webp",
    selected: false,
    description: "Tender steak cut served with rich natural juices.",
    price: "€14.49",
    type: "buffet",
  },
  {
    id: 19,
    name: "Sushi",
    path: "./buffetItems/sushi.webp",
    selected: false,
    description: "Assorted sushi selection with fresh fish and rice.",
    price: "€12.99",
    type: "buffet",
  },
  {
    id: 21,
    name: "Tacos",
    path: "./buffetItems/tacos.webp",
    selected: false,
    description: "Mexican-style tacos filled with seasoned meat and toppings.",
    price: "€7.49",
    type: "buffet",
  },
  {
    id: 22,
    name: "Tartar Soup",
    path: "./buffetItems/tartarSoup.webp",
    selected: false,
    description: "Traditional hearty soup with rich spices and vegetables.",
    price: "€5.99",
    type: "buffet",
  },
];
