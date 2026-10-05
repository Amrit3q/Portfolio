"use client";

import Header from "@/components/Header";
import HeroPolygon from "@/components/HeroPolygon";
import HeroShape from "@/components/HeroShape";
import LinetTwo from "@/components/lineTwo";
import { useRef, useState } from "react";

export default function HeroWrap() {
  const [switchVal, setSwitchVal] = useState(false);
  const polygonRef = useRef<HTMLDivElement>(null);

  // Magnetic cursor effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = polygonRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    el.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px) scale(1.04)`;
  };

  const handleMouseLeave = () => {
    if (polygonRef.current) {
      polygonRef.current.style.transform = "";
    }
  };

  return (
    <section className="relative min-h-[650px] overflow-hidden">

      {/* BACKGROUND / HERO SHAPE */}
      <div
        className={`
          absolute inset-0
          transition-all duration-1000 ease-in-out
          ${
            switchVal
              ? "opacity-0 scale-105 blur-sm pointer-events-none"
              : "opacity-100 scale-100 blur-0"
          }
        `}
      >
        <div
    ref={polygonRef}
    role="button"
    tabIndex={0}
    onClick={() => setSwitchVal(true)}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    className="
      relative z-30
      flex items-center justify-center
      cursor-pointer
      group
      transition-transform duration-300
    "
  >
        <div className="absolute inset-0 z-0 w-full h-[550px] pointer-events-none">
    <HeroShape />
  </div>

  {/* Text / foreground */}
  <div className="relative z-10 pt-48 ml-12">
    <Header />
    <LinetTwo />
  </div>
  <span className="
      absolute -bottom-10
      whitespace-nowrap
      text-blue-300 text-xs
      tracking-[0.3em] uppercase
      opacity-50 group-hover:opacity-100
      transition-opacity
    ">
      Click
    </span>
  </div>
      </div>

      {/* POLYGON INTERACTION */}
      <div
  className={`
    absolute inset-0 z-30
    flex items-center justify-center
    transition-all duration-1000 ease-in-out
    ${
      switchVal
        ? "opacity-100 scale-100 blur-0"
        : "opacity-0 scale-75 blur-md pointer-events-none"
    }
  `}
>
  <div
    ref={polygonRef}
    role="button"
    tabIndex={0}
    onClick={() => setSwitchVal(false)}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    className="
      relative z-30
      flex items-center justify-center
      cursor-pointer
      group
      rounded-2xl shadow-lg shadow-black/10
      [mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%)]
      [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%)]
      transition-transform duration-300
    "
  >
    {/* Glow */}
    <div className="
      absolute inset-0
      rounded-full
      bg-blue-500/20
      blur-3xl
      scale-125
      pointer-events-none
    "/>

    {/* Polygon */}
    <div className="
      relative z-10
      w-[650px] h-[450px]
      mr-12
      rounded-3xl overflow-hidden shadow-xl shadow-black/10
      
      flex items-center justify-center
      transition-all duration-500
      group-hover:drop-shadow-[0_0_35px_rgba(59,130,246,0.9)]
    ">
      <HeroPolygon />
    </div>

    {/* Hover hint */}
    <span className="
      absolute -bottom-10
      whitespace-nowrap
      text-blue-300 text-xs
      tracking-[0.3em] uppercase
      opacity-50 group-hover:opacity-100
      transition-opacity
    ">
      Click
    </span>
  </div>
</div>

    </section>
  );
}