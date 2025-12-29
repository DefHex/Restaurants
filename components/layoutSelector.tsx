import { useState } from "react";

type layoutSelectorProp = {
  setScreenMode: (index: number) => void;
};

export default function LayoutSelector({
  setScreenMode,
}: Readonly<layoutSelectorProp>) {
  const [selectedButton, setSelectedButton] = useState<number>(0); // change the state of the button

  const selectItem = (index: number) => {
    setSelectedButton(index);
    setScreenMode(index);
  };

  return (
    <div>
      <div className="w-full flex flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl">
        <button
          type="button"
          className={`flex-1 h-14 w-20 rounded-2xl border border-white/20 shadow-lg
            ${selectedButton === 1 ? "bg-white text-blue-800" : "backdrop-blur-sm bg-white/10 text-black"}
`}
          onClick={() => {
            selectItem(1);
          }}
        >
          One
        </button>
        <button
          type="button"
          className={`flex-1 h-14 w-20 rounded-2xl border border-white/20 shadow-lg
            ${selectedButton === 2 ? "bg-white  text-blue-800" : "backdrop-blur-sm bg-white/10 text-black"}
            `}
          onClick={() => selectItem(2)}
        >
          Two
        </button>
      </div>
    </div>
  );
}
