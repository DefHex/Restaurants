import type { Route } from "./+types/restaurant";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Restaurant Table" },
    { name: "description", content: "A virtual dining experience!" },
  ];
}

const menuItems = [
  {
    id: 1,
    name: "Bolognese",
    path: "./bolognese.png",
    selected: false,
    description: "Creamy pasta with rich tomato meat sauce and Parmesan cheese.",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    path: "./margherita.png",
    selected: false,
    description: "Classic pizza with fresh mozzarella, tomatoes, and basil.",
  },
  {
    id: 3,
    name: "Pasta",
    path: "./pasta.png",
    selected: false,
    description: "Creamy pasta with egg, and Parmesan cheese.",
  },
  {
    id: 4,
    name: "Cesar Salad",
    path: "./cesar.png",
    selected: false,
    description: "Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.",
  },
  {
    id: 5,
    name: "Cheesy pizza",
    path: "./cheese.png",
    selected: false,
    description: "Classic cheese pizza with a blend of mozzarella and cheddar cheeses.",
  },
  {
    id: 6,
    name: "Ice Cream",
    path: "./ice-cream.png",
    selected: false,
    description: "Ice cream mix of flavors.",
  },
  {
    id: 7,
    name: "Lasagna",
    path: "./lasagna.png",
    selected: false,
    description: "Delicious layers of pasta, meat, and cheese baked to perfection.",
  },
  {
    id: 8,
    name: "Mozzarella",
    path: "./mozzarella.png",
    selected: false,
    description: "Fresh mozzarella cheese served with tomatoes and basil.",
  },
  {
    id: 9,
    name: "Mushroom pizza",
    path: "./mushroom.png",
    selected: false,
    description: "Savory mushroom pizza topped with a blend of cheeses and herbs.",
  },
  {
    id: 10,
    name: "Salami pizza",
    path: "./salami.png",
    selected: false,
    description: "Spicy salami pizza with a crispy crust and melted cheese.",
  },
  {
    id: 11,
    name: "Tiramisu",
    path: "./tiramisu.png",
    selected: false,
    description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.",
  },
  {
    id: 12,
    name: "Vegetarian pizza",
    path: "./veggie.png",
    selected: false,
    description: "Delicious vegetarian pizza topped with fresh vegetables and mozzarella cheese.",
  },
];

export default function restaurant() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(menuItems);
  function toggleMenuItemSelection(id: number) {
    setSelectedMenuItem(selectedMenuItem.map(menuItem => menuItem.id === id ? {...menuItem, selected: !menuItem.selected} : menuItem))
  }
  return (
    <div className="min-h-screen bg-red-500 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] p-8">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-2 text-white font-serif shadow-lg">Our Menu</h1>
        <p className="text-white/90 mb-12 text-lg">Click on a plate to see the details.</p>
        <div className="flex flex-col flex-wrap items-center justify-center gap-16">
          {menuItems.map((item) => (
            <div key={item.id} className="group">
              <div className="relative w-72 h-72 transition-transform duration-900 group-hover:rotate-z-360 md:group-hover:scale-140 cursor-pointer transform-style-preserve-3d"
              onClick={() => toggleMenuItemSelection(item.id)} >
                {/* Front of the plate (the food) */}
                {!selectedMenuItem.find(menuItem => menuItem.id === item.id)?.selected ? (
                  <div className="absolute w-full h-full rounded-full bg-white shadow-2xl flex items-center justify-center">
                    <img src={item.path} alt={item.name} className="w-full h-full rounded-full object-cover" />
                  </div>
                ) :
                (
                  <div className="absolute w-full h-full rounded-full bg-slate-50 shadow-2xl  flex flex-col items-center justify-center p-6 text-center">
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">{item.name}</h2>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
