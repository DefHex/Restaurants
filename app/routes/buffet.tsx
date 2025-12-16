import React, { useState } from "react";
import type { Route } from "./+types/Home";
import {menuItems} from "components/menuItems";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Buffet" }, { name: "description", content: "Buffet" }];
}

type Point = { x: number; y: number }; // tuple of positions

const rootFontSize = parseFloat(
  getComputedStyle(document.documentElement).fontSize
);

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