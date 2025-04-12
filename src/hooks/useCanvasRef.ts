import { useEffect } from "react";
import { useSpiderEffect } from "./useSpiderEffect";

export const useCanvasRef = () => {
  /**
   * Special thanks to meowish for being the original creator of the spider effect.
   * You're awesome, bro. <3
   */

  const canvasRef = useSpiderEffect();

  // Adjust the canvas size to match the window size
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Adjust the canvas size when the component loads
    resizeCanvas();

    // Listen for window resize events
    window.addEventListener("resize", resizeCanvas);

    // Cleanup when the component unmounts
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [canvasRef]);
  return {
    canvasRef,
  };
};
