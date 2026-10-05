"use client";

import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let mouseX = -1000;
    let mouseY = -1000;

const handleMouseMove = (e: MouseEvent) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
};

window.addEventListener("mousemove", handleMouseMove);
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId: number;
    let lastScroll = window.scrollY;
    let scrollSpeed = 0;

    const stars = Array.from({ length: 500 }, () => ({
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
      z: Math.random(),
      pz: Math.random(),
    }));

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handleScroll = () => {
      const current = window.scrollY;
      scrollSpeed = Math.min(Math.abs(current - lastScroll) * 0.002, 0.08);
      lastScroll = current;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    resize();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      scrollSpeed *= 0.96;

      stars.forEach((star) => {
        star.pz = star.z;

        // Continuous forward movement + scroll boost
        // star.z -= 0.0015 + scrollSpeed;
        star.z -= scrollSpeed * (1.2 - star.z);
        if (star.z <= 0.01) {
          star.x = Math.random() * 2 - 1;
          star.y = Math.random() * 2 - 1;
          star.z = 1;
          star.pz = 1;
        }

        const sx = cx + (star.x * width * 0.5) / star.z;
        const sy = cy + (star.y * height * 0.5) / star.z;
        const distance = Math.sqrt(
        (sx - mouseX) ** 2 +
        (sy - mouseY) ** 2
        );

        if (distance < 150) {
        const opacity = (1 - distance / 150) * 0.35;

        ctx.beginPath();
        ctx.moveTo(mouseX, mouseY);
        ctx.lineTo(sx, sy);

        ctx.strokeStyle = `rgba(180, 210, 255, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
        }

        const px = cx + (star.x * width * 0.5) / star.pz;
        const py = cy + (star.y * height * 0.5) / star.pz;

        if (sx < 0 || sx > width || sy < 0 || sy > height) return;

        const size = Math.max(0.5, (1 - star.z) * 2.5);

        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        const brightness = Math.random() > 0.96 ? 1 : 0.5;

        ctx.fillStyle = `rgba(
  200,
  220,
  255,
  ${brightness * (1 - star.z)}
)`;
        ctx.strokeStyle = `rgba(180, 210, 255, ${1 - star.z})`;
        ctx.lineWidth = size;
        ctx.stroke();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 h-full w-full pointer-events-none"
    />
  );
}
