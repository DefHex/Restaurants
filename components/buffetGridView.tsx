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
            <div
              className="[grid-area:text] col-span-2 flex flex-col items-center justify-center rounded-3xl 
                         border border-amber-700 text-amber-700"
            >
              <h2 className="leading-relaxed">{item.name}</h2>
              <p className="text-sm leading-relaxed">{item.description}</p>
              <h3 className="leading-relaxed">{item.price}</h3>
            </div>

            <div
              className="w-full h-full [grid-area:img] flex items-center justify-center overflow-hidden
                            p-2 sm:p-4 md:p-6 rounded-3xl border border-white/20"
            >
              <img
                src={item.path}
                alt={item.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover sm:object-contain"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
