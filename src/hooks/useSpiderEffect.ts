import { useEffect, useRef } from "react";
import { Spider } from "@types";
import { spawn, resizeCanvas, many } from "@helpers";

/**
 * Custom hook to create and manage a spider animation effect on a canvas.
 *
 * @returns {React.RefObject<HTMLCanvasElement>} A reference to the canvas element.
 */
export const useSpiderEffect =
  (): React.RefObject<HTMLCanvasElement | null> => {
    // Create a reference to the canvas element
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
      // Get the canvas element from the reference
      const canvas = canvasRef.current;
      if (!canvas) return;

      // Get the 2D rendering context of the canvas
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Variables for canvas dimensions
      let w = (canvas.width = window.innerWidth);
      let h = (canvas.height = window.innerHeight);

      // Function to handle canvas resizing
      const handleResize = () => {
        w = window.innerWidth;
        h = window.innerHeight;
        resizeCanvas(w, h, canvas); // Adjust canvas size
      };

      // Add an event listener for window resize
      window.addEventListener("resize", handleResize);

      // Function to spawn a new spider
      const handleSpawn = () => {
        return spawn(w, h, ctx);
      };

      // Create an array of spiders using the helper function
      const spiders: Spider[] = many(1, handleSpawn);

      // Function to track mouse movement and update spider behavior
      const handlePointerMove = (e: PointerEvent) => {
        spiders.forEach((spider) => {
          spider.follow(e.clientX, e.clientY); // Make spiders follow the pointer
        });
      };

      // Add an event listener for pointer movement
      window.addEventListener("pointermove", handlePointerMove);

      // Main animation loop
      let animationFrameId: number;
      const anim = (t: number) => {
        ctx.fillStyle = "#000"; // Set background color
        ctx.fillRect(0, 0, w, h); // Clear the canvas
        ctx.fillStyle = ctx.strokeStyle = "#fff"; // Set drawing color
        t /= 1000; // Convert time to seconds
        spiders.forEach((spider) => spider.tick(t)); // Update each spider
        animationFrameId = requestAnimationFrame(anim); // Request next frame
      };

      // Start the animation loop
      animationFrameId = requestAnimationFrame(anim);

      // Cleanup function to remove event listeners and stop animation
      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("pointermove", handlePointerMove);
        cancelAnimationFrame(animationFrameId);
      };
    }, []);

    // Return the canvas reference to be used in the component
    return canvasRef;
  };
