import React, { useState } from "react";
import type { Route } from "./+types/Home";
import LayoutSelector from "components/layoutSelector";
import BuffetMagnifyView from "components/buffetMagnifyView";
import BuffetGridView from "components/buffetGridView";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Buffet" }, { name: "description", content: "Buffet" }];
}

export default function Buffet() {
  const [screenMode, setScreenMode] = useState<number>(1);
  return (
    <div>
      {screenMode === 1 && <BuffetMagnifyView />}
      {screenMode === 2 && <BuffetGridView />}
      <div className="fixed bottom-6 inset-x-0 z-50 pointer-events-auto">
        <div className="grid place-items-center">
          <LayoutSelector setScreenMode={setScreenMode} />
        </div>
      </div>
    </div>
  );
}
