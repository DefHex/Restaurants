import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import LayoutSelector from "components/layoutSelector";
import BuffetMagnifyView from "components/buffetMagnifyView";
import BuffetGridView from "components/buffetGridView";
import { buffetItems } from "components/menuItems";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "components/animate-ui/components/radix/dialog";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function meta() {
  return [{ title: "Buffet" }, { name: "description", content: "Buffet" }];
}

// Type for a buffet item — adjust fields to match your actual menuItems shape
type BuffetItem = {
  path: string;
  name?: string;
  price?: string;
  description?: string;
  // add any other fields your items have (calories, tags, etc.)
};

export default function Buffet() {
  const [screenMode, setScreenMode] = useState<number>(1);

  // Dialog state
  const [selectedItem, setSelectedItem] = useState<BuffetItem | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = (item: BuffetItem) => {
    setSelectedItem(item);
    setDialogOpen(true);
  };

  const heroTitleRef = useRef<HTMLDivElement>(null);
  const heroSubtitleRef = useRef<HTMLDivElement>(null);
  const heroButtonsRef = useRef<HTMLDivElement>(null);

  const features = [1, 4, 12].map((i) => buffetItems[i]);

  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);

  // Hero fade-in animation
  useGSAP(() => {
    if (
      !heroTitleRef.current ||
      !heroSubtitleRef.current ||
      !heroButtonsRef.current
    )
      return;
    const timeLine = gsap.timeline();
    timeLine
      .fromTo(
        heroTitleRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" },
      )
      .fromTo(
        heroSubtitleRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" },
        ">0",
      )
      .fromTo(
        heroButtonsRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" },
        ">0",
      );
  });
  // Footer parallax layers
  useGSAP(() => {
    if (!layer1Ref.current || !layer2Ref.current || !layer3Ref.current) return;
    gsap.to(layer1Ref.current, {
      y: -200,
      ease: "none",
      scrollTrigger: {
        trigger: layer1Ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(layer2Ref.current, {
      y: -300,
      ease: "none",
      scrollTrigger: {
        trigger: layer2Ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(layer3Ref.current, {
      y: -80,
      rotation: 40,
      ease: "none",
      scrollTrigger: {
        trigger: layer3Ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return (
    <div className="min-h-screen overflow-hidden bg-zinc-950 text-stone-100">
      {/* ── Item Detail Dialog ── */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent
          className="bg-zinc-900 border border-stone-700 text-stone-100 max-w-md overflow-hidden p-0"
          showCloseButton
        >
          {selectedItem && (
            <>
              {/* Hero image */}
              <div className="w-full max-h-96 overflow-hidden">
                <img
                  src={selectedItem.path}
                  alt={selectedItem.name ?? "Buffet item"}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4">
                <DialogHeader>
                  <div className="flex items-start justify-between gap-4">
                    <DialogTitle className="text-xl font-bold text-stone-100">
                      {selectedItem.name ?? "Unnamed item"}
                    </DialogTitle>
                    {selectedItem.price && (
                      <span className="text-amber-400 font-semibold text-base whitespace-nowrap">
                        {selectedItem.price}
                      </span>
                    )}
                  </div>

                  {selectedItem.description && (
                    <DialogDescription className="text-stone-300 text-sm leading-relaxed mt-1">
                      {selectedItem.description}
                    </DialogDescription>
                  )}
                </DialogHeader>

                <DialogFooter>
                  <button
                    onClick={() => setDialogOpen(false)}
                    className="w-full py-2.5 bg-amber-700 hover:bg-amber-600 transition-colors rounded-lg text-sm font-semibold"
                  >
                    Close
                  </button>
                </DialogFooter>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* ── Nav bar ── */}
      <nav className="fixed w-full h-20 top-0 z-50 flex items-center justify-center bg-stone-900/90 border-b border-stone-800">
        <div className="flex gap-5 sm:gap-8 md:gap-10 lg:12 xl:15 2xl:18">
          <div className="w-20 h-8 bg-stone-800 rounded" />
          <div className="w-20 h-8 bg-stone-800 rounded" />
          <div className="w-20 h-8 bg-stone-800 rounded" />
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative h-screen overflow-hidden flex flex-col justify-center items-center ">
        <div className="z-10 flex flex-col items-center gap-6 px-6 sm:px-8">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none -translate-x-1/2 -translate-y-1/2 object-cover opacity-50 z-0"
          >
            <source src="bgvid.webm" type="video/webm" />
          </video>
          <div
            ref={heroTitleRef}
            className="w-full max-w-xs sm:max-w-md md:max-w-xl h-16 sm:h-20 md:h-24
                       bg-linear-to-r from-stone-600 via-stone-500 to-stone-600 rounded-lg opacity-0"
          >
            <h1
              ref={heroTitleRef}
              className="text-center text-lg sm:text-2xl md:text-4xl font-bold text-stone-100"
            >
              Artistry
            </h1>
            <h1
              ref={heroSubtitleRef}
              className="text-center text-lg sm:text-2xl md:text-4xl font-bold text-orange-600"
            >
              on a plate
            </h1>
          </div>
          <div className="w-full max-w-sm sm:max-w-md h-6 sm:h-8 md:h-10 bg-stone-700 rounded opacity-0" />
          <div
            ref={heroButtonsRef}
            className="w-60 sm:w-md md:w-136 lg:w-160 xl:w-180 2xl:w-300 h-20 sm:h-24 md:h-12 lg:h-14 xl:h-15 2xl:h-36
                       flex flex-col sm:flex-row gap-4 sm:gap-5 opacity-0"
          >
            <div className="flex-1 bg-stone-600 rounded-full" />
            <div className="flex-1 bg-transparent border-2 border-stone-100 rounded-full" />
          </div>
        </div>
      </section>

      {/* ── Features Section ── */}
      <section className="relative z-10 m-5 flex flex-col items-center gap-20 bg-zinc-950 overflow-hidden">
        <div className="w-96 h-14 container flex items-center justify-center bg-stone-800 rounded-lg">
          <h1>Featured Food</h1>
        </div>
        <div className="container grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-10 z-30">
          {features.map((feature, i) => (
            <div
              key={i + "buffetItem"}
              className="text-left bg-stone-900 border border-stone-800 rounded-xl overflow-hidden
                         hover:border-amber-700 hover:shadow-lg hover:shadow-amber-950/40
                         transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-600"
            >
              {/* Image */}
              <div className="w-full">
                <img
                  src={feature.path}
                  alt={feature.name ?? "Buffet item"}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div className="p-6 flex flex-col gap-2">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold leading-tight">
                    {feature.name ?? "Unnamed item"}
                  </h3>
                  {feature.price && (
                    <span className="text-amber-400 font-semibold text-base whitespace-nowrap">
                      {feature.price}
                    </span>
                  )}
                </div>
                {feature.description && (
                  <p className="text-sm text-stone-300 line-clamp-2">
                    {feature.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Buffet Section ── */}
      <section className="max-h-[70vh] sm:max-h-[75vh] lg:max-h-screen bg-linear-to-b from-stone-200 to-orange-200 flex flex-col items-center relative">
        {screenMode === 1 && <BuffetMagnifyView onItemClick={openDialog} />}
        {screenMode === 2 && (
          <div
            className="w-full px-3 overflow-y-auto overscroll-contain"
            style={{ height: "80vh" }}
          >
            <BuffetGridView onItemClick={openDialog} />
          </div>
        )}
        <div className="absolute bottom-6 inset-x-0 pointer-events-auto">
          <div className="grid place-items-center">
            <LayoutSelector setScreenMode={setScreenMode} />
          </div>
        </div>
      </section>

      {/* ── Footer Section ── */}
      <section className="h-[60vh] bg-amber-950 flex justify-center items-center relative overflow-hidden">
        <div
          ref={layer1Ref}
          className="absolute w-48 h-48 top-[20%] left-[10%] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${buffetItems[8].path})` }}
        />
        <div
          ref={layer2Ref}
          className="absolute w-36 h-36 bottom-[20%] right-[15%] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${buffetItems[9].path})` }}
        />
        <div
          ref={layer3Ref}
          className="absolute w-60 h-60 top-[40%] right-[30%] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${buffetItems[18].path})` }}
        />
        <div className="w-125 h-20 bg-stone-600/80 rounded-lg z-10" />
      </section>

      {/* ── Footer ── */}
      <footer className="h-24 bg-stone-950 border-t border-stone-800 flex justify-center items-center">
        <div className="w-72 h-5 bg-stone-800 rounded" />
      </footer>
    </div>
  );
}
