import { buffetItems } from "./menuItems";

type BuffetItem = (typeof buffetItems)[number];

type Props = {
  onItemClick?: (item: BuffetItem) => void;
};

export default function BuffetGridView({ onItemClick }: Readonly<Props>) {
  return (
    <div className="grid gap-3 auto-rows-[160px]">
      {buffetItems.map((item, index) => {
        const even = index % 2 === 0;

        return (
          <button
            key={item.id}
            onClick={() => onItemClick?.(item)}
            className={`
              grid grid-cols-3 gap-3 text-left w-full
              ${
                even
                  ? "[grid-template-areas:'text_text_img']"
                  : "[grid-template-areas:'img_text_text']"
              }
            `}
          >
            <div
              className="[grid-area:text] col-span-2 flex flex-col items-center justify-center rounded-3xl
                         border border-amber-700 text-amber-700
                         hover:bg-amber-700/10 transition-colors duration-150"
            >
              <h2 className="leading-relaxed">{item.name}</h2>
              <p className="text-sm leading-relaxed">{item.description}</p>
              <h3 className="leading-relaxed">{item.price}</h3>
            </div>

            <div
              className="w-full h-full [grid-area:img] flex items-center justify-center overflow-hidden
                         p-2 sm:p-4 md:p-6 rounded-3xl border border-white/20
                         hover:border-amber-700/50 transition-colors duration-150"
            >
              <img
                src={item.path}
                alt={item.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover sm:object-contain"
              />
            </div>
          </button>
        );
      })}
    </div>
  );
}