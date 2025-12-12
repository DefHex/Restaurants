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

export default function restaurant() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(menuItems);
  function toggleMenuItemSelection(id: number) {
    setSelectedMenuItem(
      selectedMenuItem.map((menuItem) =>
        menuItem.id === id
          ? { ...menuItem, selected: !menuItem.selected }
          : menuItem
      )
    );
  }

  const [zoomLevel, setZoomLevel] = useState(1); // Default zoom level (100%)

  function zoomIn() {
    // Increase zoom level, with a maximum of 200%
    setZoomLevel((prevZoom) => Math.min(2, prevZoom + 0.1));
  }
  function zoomOut() {
    // Decrease zoom level, with a minimum of 50%
    setZoomLevel((prevZoom) => Math.max(0.5, prevZoom - 0.1));
  }
  return (
    <div
      className="min-h-screen bg-red-500 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] p-8"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-2 text-white font-serif shadow-lg">
          Our Menu
        </h1>
        <p className="text-white/90 mb-12 text-lg">
          Click on a plate to see the details.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-16">
          {menuItems.map((item) => (
            <div key={item.id} className="group">
              <div
                className="relative transition-transform duration-900 group-hover:rotate-z-360 md:group-hover:scale-140 cursor-pointer transform-style-preserve-3d"
                onClick={() => toggleMenuItemSelection(item.id)}
                style={{ width: `${288 * zoomLevel}px`, height: `${288 * zoomLevel}px` }}
              >
                {/* Front of the plate (the food) */}
                {!selectedMenuItem.find((menuItem) => menuItem.id === item.id)
                  ?.selected ? (
                  <div className="absolute w-full h-full rounded-full bg-white shadow-2xl flex items-center justify-center">
                    <img
                      src={item.path}
                      alt={item.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="absolute w-full h-full rounded-full bg-slate-50 shadow-2xl  flex flex-col items-center justify-center p-6 text-center">
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">
                      {item.name}
                    </h2>
                      <p className="text-slate-600">{item.description}</p>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {item.price}
                    </h3>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div
          id="zoom"
          className="fixed bottom-[5px] right-[5px] z-50 flex flex-col rounded-[5px] border border-solid border-t-[#201f33] border-x-black border-b-[#575666] bg-gradient-to-t from-[#111119] via-[#282742] to-[#191927] shadow-[10px_10px_15px_0px_rgba(0,0,0,0.85)]"
        >
          <button
            title="Zoom In"
            className="m-0 cursor-pointer border-none bg-none p-[9px_14px] font-bold text-white outline-none"
            onClick={zoomIn}
          >
            +
          </button>
          <hr className="m-[0_3px] h-px border-none bg-white/20 p-0 text-white/40" />
          <button
            title="Zoom Out"
            className="m-0 cursor-pointer border-none bg-none p-[9px_14px] font-bold text-white outline-none"
            onClick={zoomOut}
          >
            –
          </button>
        </div>
      </div>
    </div>
  );
}
