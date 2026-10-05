'use client'

import Image from "next/image";
import { useState } from "react";

const techStack = [
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "Redux", category: "State Management" },
  { name: "Node.js", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
];

export default function HeroPolygon() {
    const [showStack, setShowStack] = useState(false);
  return (
    <>
    <div className="absolute inset-0 z-[1] flex items-end justify-center">
        <div className="relative w-full max-w-[1500px] aspect-[3/2]">
          <Image
            
            src="/Images/Anime Tech Skills Constellation.png"
            alt="Anime illustration of a developer surrounded by technology"
            fill
            priority
            sizes="100vw"
            className="object-contain mask-y-from-20 mask-y-to-80 [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_100%)]
  [-webkit-mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_100%)]"

          />

          {/* Clickable polygon hotspot */}
          

          {/* Expanded technology stack */}
          
        </div>
      </div>
    </>
  )
}