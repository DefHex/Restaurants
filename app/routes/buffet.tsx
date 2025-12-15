import React, { useState } from "react";
import type { Route } from "./+types/Home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Buffet" }, { name: "description", content: "Buffet" }];
}

type Point = { x: number; y: number };

type MenuItem = {
  id: number;
  name: string;
  path: string;
  selected: boolean;
  description: string;
  price: string;
  type: string;
};

export default function MagnifyingCircles() {
  const [offset, setOffset] = useState<Point>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<Point>({ x: 0, y: 0 });

  const rows = 12;
  const cols = 12;
  const baseSize = 120; // slightly bigger so image fits
  const maxScale = 3;
  const spacing = 200;

  const dishColors: string[] = [
    "#FEF3C7",
    "#DBEAFE",
    "#FCE7F3",
    "#D1FAE5",
    "#FED7AA",
    "#E0E7FF",
    "#FECACA",
    "#BAE6FD",
    "#FDE68A",
    "#DDD6FE",
    "#FCA5A5",
    "#A7F3D0",
    "#FCD34D",
    "#C7D2FE",
    "#F87171",
    "#6EE7B7",
  ];

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
    // ... keep the rest of your items exactly as-is
  ];

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

  const getCircleScale = (x: number, y: number): number => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const dx = x - centerX;
    const dy = y - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const maxDistance = 350;
    const normalized = Math.min(distance / maxDistance, 1);

    return maxScale - normalized * (maxScale - 0.3);
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
            const color = dishColors[index % dishColors.length];

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
                  className="w-full h-full rounded-full shadow-xl border-2 border-gray-300 overflow-hidden flex flex-col items-center justify-center"
                  style={{ backgroundColor: color }}
                >
                  {/* image */}
                  <img
                    src={item.path}
                    alt={item.name}
                    className="w-14 h-14 object-contain"
                    draggable={false}
                  />

                  {/* name + price */}
                  <div className="mt-1 text-center px-2 leading-tight">
                    <div className="text-xs font-semibold">{item.name}</div>
                    <div className="text-[11px] opacity-80">{item.price}</div>
                  </div>
                </div>
              </div>
            );
          }
        }
      }
    }
  }

  return (
    <div
      className="w-full h-screen bg-white overflow-hidden relative select-none"
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {circles}

      <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full text-white text-sm pointer-events-none">
        Drag to explore • Infinite scroll 🌍
      </div>

      <div
        className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-500/30 rounded-full pointer-events-none"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
}
