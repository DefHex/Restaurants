import React, { useState } from "react";
import type { Route } from "./+types/Home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Buffet" }, { name: "description", content: "Buffet" }];
}

type Point = { x: number; y: number }; // tuple of positions

type MenuItem = {
  id: number;
  name: string;
  path: string;
  selected: boolean;
  description: string;
  price: string;
  type: string;
}; // type of the objects

const rootFontSize = parseFloat(
  getComputedStyle(document.documentElement).fontSize
);

const menuItems: MenuItem[] = [
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

export default function MagnifyingCircles() {
  const [dragStart, setDragStart] = useState<Point>({ x: 0, y: 0 });
  const [offset, setOffset] = useState<Point>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const rows = 4;
  const cols = 7;
  const baseSize = 120; // slightly bigger so image fits
  const maxScale = 2;
  const spacing = 220;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;

    setOffset((prev) => ({ x: prev.x + deltaX, y: prev.y + deltaY }));
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = (): void => setIsDragging(false);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>): void => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>): void => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;

    setOffset((prev) => ({
      x: prev.x + deltaX,
      y: prev.y + deltaY,
    }));

    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handlePointerUp = (): void => {
    setIsDragging(false);
  };

  const getCircleScale = (x: number, y: number): number => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const dx = x - centerX;
    const dy = y - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const maxDistance = 0.45 * window.innerWidth;
    const normalized = Math.min(distance / maxDistance, 1);

    return maxScale * (1 - normalized);
  };

  const circles = [];

  const gridWidth = cols * spacing;
  const gridHeight = rows * spacing;

  const wrappedOffsetX = ((offset.x % gridWidth) + gridWidth) % gridWidth;
  const wrappedOffsetY = ((offset.y % gridHeight) + gridHeight) % gridHeight;

  for (let gridX = -1; gridX <= 1; gridX++) {
    for (let gridY = -1; gridY <= 1; gridY++) {
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * spacing + wrappedOffsetX + gridX * gridWidth;
          const y = row * spacing + wrappedOffsetY + gridY * gridHeight;
          if (
            x > -200 &&
            x < window.innerWidth + 200 &&
            y > -200 &&
            y < window.innerHeight + 200
          ) {
            const scale = getCircleScale(x, y);
            const index = row * cols + col;

            const item = menuItems[index % menuItems.length];

            circles.push(
              <div
                key={`${gridX}-${gridY}-${row}-${col}`}
                className="absolute transition-transform duration-100 ease-out"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: `translate(-50%, -50%) scale(${scale})`,
                  width: `${baseSize}px`,
                  height: `${baseSize}px`,
                }}
              >
                <div
                  className="w-full h-full rounded-full overflow-hidden flex flex-col items-center justify-center bg-no-repeat bg-contain"
                  style={{ backgroundImage: `url(${item.path})` }}
                ></div>
              </div>
            );
          }
        }
      }
    }
  }

  return (
    <div
      className="w-full h-screen bg-white overflow-hidden relative select-none touch-none"
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {circles}

      <div
        className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-500/30 rounded-full pointer-events-none"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
}