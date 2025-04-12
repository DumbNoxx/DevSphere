import { useEffect, useRef } from "react";
import { Spider } from "@types";
import { spawn, resizeCanvas, many } from "@helpers";

export const useSpiderEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Variables for canvas size
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    // Handle canvas resizing
    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      resizeCanvas(w, h, canvas);
    };

    // Listen to the resize event
    window.addEventListener("resize", handleResize);

    // Handle spider creation
    const handleSpawn = () => {
      return spawn(w, h, ctx);
    };

    // Create multiple spiders
    const spiders: Spider[] = many(1, handleSpawn);

    // Track mouse movement
    const handlePointerMove = (e: PointerEvent) => {
      spiders.forEach((spider) => {
        spider.follow(e.clientX, e.clientY);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    // Main animation
    let animationFrameId: number;
    const anim = (t: number) => {
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, w, h); // Clear the canvas
      ctx.fillStyle = ctx.strokeStyle = "#fff";
      t /= 1000;
      spiders.forEach((spider) => spider.tick(t));
      animationFrameId = requestAnimationFrame(anim);
    };

    animationFrameId = requestAnimationFrame(anim);

    // Cleanup when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return canvasRef;
};
