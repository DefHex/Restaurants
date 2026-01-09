import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { Route } from "./+types/Home";
import LayoutSelector from "components/layoutSelector";
import BuffetMagnifyView from "components/buffetMagnifyView";
import BuffetGridView from "components/buffetGridView";
import { buffetItems } from "components/menuItems";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function meta() {
  return [{ title: "Buffet" }, { name: "description", content: "Buffet" }];
}

export default function Buffet() {
  const [screenMode, setScreenMode] = useState<number>(1);

  const heroTitleRef = useRef<HTMLDivElement>(null);
  const heroSubtitleRef = useRef<HTMLDivElement>(null);
  const heroButtonsRef = useRef<HTMLDivElement>(null);
  const circle1Ref = useRef<HTMLDivElement>(null);
  const circle2Ref = useRef<HTMLDivElement>(null);

  const features = [1, 4, 12].map((i) => buffetItems[i]);

  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);

  // for animating the hero section
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
        { opacity: 1, duration: 1, ease: "power2.out" }
      )
      .fromTo(
        heroSubtitleRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" },
        ">0"
      )
      .fromTo(
        heroButtonsRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" },
        ">0"
      );
  });
  // for animating the hero section
  useGSAP(() => {
    if (!circle1Ref.current || !circle2Ref.current) return;

    const st = ScrollTrigger.create({
      trigger: document.documentElement,
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const y = self.scroll();

        gsap.set(circle1Ref.current!, {
          x: -y * 0.7,
          y: y * 0.25,
          rotation: y * 0.15,
        });

        gsap.set(circle2Ref.current!, {
          x: y * 0.9,
          y: -y * 0.2,
          rotation: -y * 0.4,
        });
      },
    });
    return () => st.kill();
  });
  // for  animating footer section
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
      {/* Nav bar */}
      <nav className="fixed w-full h-20 top-0 z-50 flex items-center justify-center bg-stone-900/90 border-b border-stone-800 ">
        <div className="flex gap-5 sm:gap-8 md:gap-10 lg:12 xl:15 2xl:18">
          <div className="w-20 h-8 bg-stone-800 rounded" />
          <div className="w-20 h-8 bg-stone-800 rounded" />
          <div className="w-20 h-8 bg-stone-800 rounded" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden flex flex-col justify-center items-center bg-linear-to-br from-stone-900 to-amber-950">
        {/* Circle on the top right*/}
        <div
          ref={circle1Ref}
          className=" absolute w-33 h-33 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-66 lg:h-66 xl:w-75 xl:h-75 2xl:w-85 2xl:h-85
                      top-16 -right-10 sm:top-14 sm:-right-20 md:top-12 md:-right-24 lg:top-8 lg:-right-32 xl:top-4 xl:-right-36 2xl:top-0 2xl:-right-40
                      z-0
                      bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${buffetItems[17].path})` }}
        />
        {/* Circle on the bottom left */}
        <div
          ref={circle2Ref}
          className=" absolute w-40 h-40 sm:w-50 sm:h-50 md:w-60 md:h-60 lg:w-70 lg:h-70 xl:w-75 xl:h-75 2xl:w-85 2xl:h-85
                      bottom-0 -left-10 sm:-left-8  md:-left-12 lg:-left-16 xl:-left-20 2xl:-left-24
                      z-0
                      bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${buffetItems[19].path})` }}
        />
        {/* Hero Section */}
        <div className="z-10 container w-full flex flex-col items-center gap-4 px-6 sm:px-8">
          <div
            ref={heroTitleRef}
            className="w-60 sm:w-md md:w-136 lg:w-160 xl:w-180 2xl:w-300 h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 2xl:h-44
                       bg-linear-to-r from-stone-600 via-stone-500 to-stone-600
                       rounded-lg 2xl:rounded-2xl opacity-0"
          ></div>
          <div
            ref={heroSubtitleRef}
            className="w-60 sm:w-md md:w-136 lg:w-160 xl:w-180 2xl:w-300 h-8 sm:h-12 md:h-12 lg:h-14 xl:h-15 2xl:h-36
                       rounded-lg 2xl:rounded-2xl opacity-0 bg-stone-700 "
          />

          <div
            ref={heroButtonsRef}
            className="w-60 sm:w-md md:w-136 lg:w-160 xl:w-180 2xl:w-300 h-20 sm:h-24 md:h-12 lg:h-14 xl:h-15 2xl:h-36
                       flex flex-col sm:flex-row
                       gap-4 sm:gap-5
                       opacity-0"
          >
            <div className="flex-1 bg-stone-600 rounded-full" />
            <div className="flex-1 bg-transparent border-2 border-stone-100 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="z-10 m-5 flex flex-col items-center gap-20 bg-zinc-950 ">
        <div className="w-96 h-14 container flex items-center justify-center bg-stone-800 rounded-lg ">
          <h1>Featured Food</h1>
        </div>
        <div className="container grid grid-rows-3 md:grid-rows-1 md:grid-cols-3  gap-10">
          {features.map((feature, i) => (
            <div
              key={i + "buffetItem"}
              className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden"
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
                    <span className="text-sm text-stone-200 whitespace-nowrap">
                      {feature.price}
                    </span>
                  )}
                </div>

                {feature.description && (
                  <p className="text-sm text-stone-300">
                    {feature.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*  BUFFET SECTION */}
      <section className="max-h-[70vh] sm:max-h-[75vh] lg:max-h-screen bg-linear-to-b from-stone-200 to-orange-200 flex flex-col items-center relative">
        {/* Magnify (full space) */}
        {screenMode === 1 && <BuffetMagnifyView />}

        {/* Grid (scroll window) */}
        {screenMode === 2 && (
          <div
            className="w-full px-3 overflow-y-auto overscroll-contain"
            style={{ height: "80vh" }}
          >
            <BuffetGridView />
          </div>
        )}

        <div className="absolute bottom-6 inset-x-0 pointer-events-auto">
          <div className="grid place-items-center">
            <LayoutSelector setScreenMode={setScreenMode} />
          </div>
        </div>
      </section>

      {/* Footer Section */}
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

      {/* Footer */}
      <footer className="h-24 bg-stone-950 border-t border-stone-800 flex justify-center items-center">
        <div className="w-72 h-5 bg-stone-800 rounded" />
      </footer>
    </div>
  );
}
