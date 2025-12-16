import type { Route } from "./+types/restaurant";
import { useState } from "react";
import { menuItems, type MenuItemType } from "components/menuItems";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Restaurant Table" },
    { name: "description", content: "A virtual dining experience!" },
  ];
}

export default function restaurant() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(menuItems);
  function toggleMenuItemSelection(id: number) {
    setSelectedMenuItem(
      selectedMenuItem.map((menuItem: MenuItemType) =>
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
