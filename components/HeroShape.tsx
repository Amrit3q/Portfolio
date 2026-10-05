"use client";

import { motion } from "motion/react";
import { useState } from "react";

const polygons = [
  "polygon(8% 12%, 82% 4%, 96% 30%, 88% 88%, 28% 96%, 4% 68%)",
  "polygon(18% 4%, 92% 16%, 96% 72%, 68% 96%, 8% 82%, 4% 28%)",
  "polygon(12% 18%, 42% 2%, 90% 14%, 96% 62%, 72% 94%, 20% 88%, 2% 52%)",
  "polygon(6% 24%, 30% 4%, 86% 10%, 98% 48%, 78% 92%, 24% 98%, 2% 66%)",
];

export default function HeroShape() {
  const [polygon] = useState(
    () => polygons[Math.floor(Math.random() * polygons.length)]
  );

  return (
    <motion.div
      className="absolute inset-0 -z-10"
      style={{
        clipPath: polygon,
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(226,232,240,0.7))",
        boxShadow:
          "0 25px 60px rgba(0,0,0,0.12)",
      }}
      initial={{
        scale: 0.7,
        opacity: 0,
        y: 30,
      }}
      animate={{
        scale: 1,
        opacity: 1,
        y: [0, -8, 0],
      }}
      transition={{
        scale: {
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        },
        opacity: {
          duration: 0.5,
        },
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    />
  );
}