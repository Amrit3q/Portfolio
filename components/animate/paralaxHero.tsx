"use client";

import { motion, useScroll, useTransform } from "motion/react";

export default function ParallaxHero({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollY } = useScroll();

  // Hero moves upward slower than the page
  const y = useTransform(scrollY, [0, 600], [0, 380]);

  // Gradually fade as we scroll away
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Slightly scale down
  const scale = useTransform(scrollY, [0, 600], [1, 0.92]);

  return (
    <motion.div
      style={{
        y,
        opacity,
        scale,
      }}
    >
      {children}
    </motion.div>
  );
}