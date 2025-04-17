import { useEffect } from "react";
import { useSpiderEffect } from "./useSpiderEffect";
import { UseCanvasRefReturn } from "@interfaces";

/**
 * Custom hook to manage a canvas element reference and ensure its size dynamically
 * matches the window dimensions. It also handles resizing the canvas when the
 * window is resized.
 *
 * @returns {UseCanvasRefReturn} An object containing the `canvasRef` reference to the canvas element.
 */
export const useCanvasRef = (): UseCanvasRefReturn => {
  /**
   * Special thanks to meowish for being the original creator of the spider effect.
   * You're awesome, bro. <3
   */

  const canvasRef = useSpiderEffect();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    /**
     * Resizes the canvas to match the current window dimensions.
     */
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
