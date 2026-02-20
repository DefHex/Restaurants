import React, { useState } from "react";
import { buffetItems } from "components/menuItems";
type Point = { x: number; y: number };

const widthRatio = 0.4; // width ratio of focus area
const heightRatio = 0.4; // height ratio of the focus area
const cornerRadius = 100; // corner radius of the focus area
const fallOff = 100;
const maxScale = 1;

const isSmall = window.innerWidth < 640;

const rows = 4;
const cols = window.innerWidth < 640 ? 3 : 5;

const spacing = window.innerWidth < 640 ? 125 : 220;
const baseSize = 100;

export default function BuffetMagnifyView() {
  const [origin, setOrigin] = useState<Point>({ x: 0, y: 0 }); // top left of the screen
  const [dragStartPoint, setDragStartPoint] = useState<Point>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // handles when mouse is clicked/screen is touched
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>): void => {
    // set state -> dragging
    setIsDragging(true);
    // get current position
    const currentX = e.clientX;
    const currentY = e.clientY;
    setDragStartPoint({ x: currentX, y: currentY });
  };

  // handles when mouse / finger is dragged
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>): void => {
    // ignore mouse/finger movement when not dragging
    if (!isDragging) return;
    // get current position
    const currentX = e.clientX;
    const currentY = e.clientY;
    // get delta vector
    const delta: Point = {
      x: currentX - dragStartPoint.x,
      y: currentY - dragStartPoint.y,
    };
    // update origin position
    setOrigin((old) => ({
      x: old.x + delta.x,
      y: old.y + delta.y,
    }));
    // update drag start position
    setDragStartPoint({ x: currentX, y: currentY });
  };

  // handles when mouse is not clicked / finger is not touched
  const handlePointerUp = (): void => {
    // set state -> not dragging
    setIsDragging(false);
  };

  // calculates dish size relative to screen center
  const getCircleScale = (p: Point): number => {
    // get the screen center
    const center: Point = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    // get delta from center
    const delta: Point = {
      x: p.x - center.x,
      y: p.y - center.y,
    };
    // main radiants of grid
    const rx = window.innerWidth * widthRatio;
    const ry = window.innerHeight * heightRatio;

    // formula of rounded rectangle
    const dx = Math.abs(delta.x) - (rx - cornerRadius);
    const dy = Math.abs(delta.y) - (ry - cornerRadius);
    const outsideX = Math.max(dx, 0);
    const outsideY = Math.max(dy, 0);
    const outsideD = Math.hypot(outsideX ,outsideY);
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
              >
                <div
                  className="w-full h-full flex flex-col items-center justify-center bg-no-repeat bg-contain"
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
