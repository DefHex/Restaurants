import type { Route } from "./+types/bar";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import OldBarScroll from "components/OldBarScroll";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

gsap.registerPlugin(ScrollTrigger);

const STREAK_COUNT = 5;

export default function bar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const streaksRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const height = window.innerHeight;

      streaksRef.current.forEach((el, i) => {
        if (!el) return;
        const startX = 100 + i * 150;

        gsap.fromTo(
          el,
          { y: -200, opacity: 0 },
          {
            y: height + 200,
            opacity: 1,
            duration: 2 + Math.random(),
            ease: "power2.in",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 1,
            },
            repeat: -1,
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="w-screen h-[200vh] bg-black relative overflow-hidden"
    >
      {Array.from({ length: STREAK_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (streaksRef.current[i] = el)}
          className="absolute w-64 h-4 rounded-full"
          style={{
            background: `linear-gradient(90deg, transparent, #ff4fd8, #4fd8ff, transparent)`,
            boxShadow: `0 0 20px #ff4fd8, 0 0 60px #4fd8ff, 0 0 120px #ff4fd8`,
          }}
        />
      ))}
    </div>
  );
}
