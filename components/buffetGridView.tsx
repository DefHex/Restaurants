import React, { useState } from "react";
import { buffetItems } from "./menuItems";

export default function BuffetGridView() {
  return (
    <div className="grid gap-3 auto-rows-[160px]">
      {buffetItems.map((item, index) => {
        const even = index % 2 === 0;

        return (
          <div
            key={item.id}
            className={`
              grid grid-cols-3 gap-3
              ${
                even
                  ? "[grid-template-areas:'text_text_img']"
                  : "[grid-template-areas:'img_text_text']"
              }
            `}
          >
            <div></div>
            {/* TEXT — ALWAYS BIG */}
            <div
              className="
                [grid-area:text]
                col-span-2
                backdrop-blur-xl bg-white/10
                rounded-3xl border border-white/20 shadow-2xl
                p-6 flex flex-col items-center
              "
            >
              <h2 className="leading-relaxed">{item.name}</h2>
              <p className="text-sm leading-relaxed">{item.description}</p>
              <h3 className="leading-relaxed">{item.price}</h3>
            </div>

            {/* IMAGE — ALWAYS SMALL */}
            <div
              className="
                flex items-center justify-center
                w-full h-full
                [grid-area:img]
                backdrop-blur-xl bg-white/10
                rounded-3xl border border-white/20 shadow-2xl
                overflow-hidden
                p-2 sm:p-4 md:p-6
              "
            >
              <img
                src={item.path}
                alt={item.name}
                className="
                  w-full h-full object-cover
                  sm:object-contain
                  transition duration-300 ease-in-out 
                  hover:-translate-y-1 hover:scale-110
                "
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
