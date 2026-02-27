import React, { useState } from "react";
import { buffetItems } from "components/menuItems";

type Point = { x: number; y: number };

type BuffetItem = (typeof buffetItems)[number];

type Props = {
  onItemClick?: (item: BuffetItem) => void;
};

const widthRatio = 0.4;
const heightRatio = 0.4;
const cornerRadius = 100;
const fallOff = 100;
const maxScale = 1;

const rows = 4;
const cols = window.innerWidth < 640 ? 3 : 5;
const spacing = window.innerWidth < 640 ? 125 : 220;
const baseSize = 100;

export default function BuffetMagnifyView({ onItemClick }: Readonly<Props>) {
  const [origin, setOrigin] = useState<Point>({ x: 0, y: 0 });
  const [dragStartPoint, setDragStartPoint] = useState<Point>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [hasDragged, setHasDragged] = useState<boolean>(false);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>): void => {
    setIsDragging(true);
    setHasDragged(false);
    setDragStartPoint({ x: e.clientX, y: e.clientY });
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>): void => {
    if (!isDragging) return;
    const delta: Point = {
      x: e.clientX - dragStartPoint.x,
      y: e.clientY - dragStartPoint.y,
    };
    // Mark as dragged if moved more than 4px — avoids swallowing taps
    if (Math.abs(delta.x) > 4 || Math.abs(delta.y) > 4) {
      setHasDragged(true);
    }
    setOrigin((old) => ({ x: old.x + delta.x, y: old.y + delta.y }));
    setDragStartPoint({ x: e.clientX, y: e.clientY });
  };

  const handlePointerUp = (): void => {
    setIsDragging(false);
  };

  const getCircleScale = (p: Point): number => {
    const center: Point = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    const delta: Point = { x: p.x - center.x, y: p.y - center.y };
    const rx = window.innerWidth * widthRatio;
    const ry = window.innerHeight * heightRatio;
    const dx = Math.abs(delta.x) - (rx - cornerRadius);
    const dy = Math.abs(delta.y) - (ry - cornerRadius);
    const outsideX = Math.max(dx, 0);
    const outsideY = Math.max(dy, 0);
    const outsideD = Math.hypot(outsideX, outsideY);
    const insideD = Math.min(Math.max(dx, dy), 0);
    const distance = outsideD + insideD;
    const normalized = Math.min(Math.max(distance / 2.5 / fallOff, 0), 1);
    return maxScale * (1 - normalized) ** 2;
  };

  const circles = [];

  const gridWidth = cols * spacing;
  const gridHeight = rows * spacing;
  const wrappedOffsetX = ((origin.x % gridWidth) + gridWidth) % gridWidth;
  const wrappedOffsetY = ((origin.y % gridHeight) + gridHeight) % gridHeight;

  for (let gridX = -1; gridX <= 1; gridX++) {
    for (let gridY = -1; gridY <= 1; gridY++) {
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const worldPos: Point = {
            x: col * spacing + wrappedOffsetX + gridX * gridWidth,
            y: row * spacing + wrappedOffsetY + gridY * gridHeight,
          };
          if (
            worldPos.x > -200 &&
            worldPos.x < window.innerWidth + 200 &&
            worldPos.y > -200 &&
            worldPos.y < window.innerHeight + 200
          ) {
            const scale = getCircleScale(worldPos);
            const index = row * cols + col;
            const item = buffetItems[index % buffetItems.length];

            circles.push(
              <div
                key={`${gridX}-${gridY}-${row}-${col}`}
                className="absolute transition-transform duration-100 ease-out"
                style={{
                  left: `${worldPos.x}px`,
                  top: `${worldPos.y}px`,
                  transform: `translate(-50%, -50%) scale(${scale})`,
                  width: `${baseSize}px`,
                  height: `${baseSize}px`,
                }}
                // Only fire click if the user didn't drag
                onPointerUp={() => {
                  if (!hasDragged && onItemClick) {
                    onItemClick(item);
                  }
                }}
              >
                <div
                  className="w-full h-full flex flex-col items-center justify-center bg-no-repeat bg-contain"
                  style={{ backgroundImage: `url(${item.path})` }}
                />
              </div>
            );
          }
        }
      }
    }
  }

  return (
    <div
      className="w-full h-screen overflow-hidden relative select-none touch-none"
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {circles}
    </div>
  );
}