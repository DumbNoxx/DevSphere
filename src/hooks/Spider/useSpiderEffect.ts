import { useEffect, useRef } from "react";
import { Spider } from "@types";
import { spawn, resizeCanvas, many } from "@helpers";

/**
 * Custom React hook to create and manage a spider animation effect on a canvas element.
 *
 * This hook initializes a canvas, spawns spider objects, and animates them
 * to follow the user's pointer movements. It also handles window resizing
 * to ensure the canvas dimensions are updated dynamically.
 *
 * @returns {React.RefObject<HTMLCanvasElement | null>} A reference to the canvas element.
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

      /**
       * Handles resizing of the canvas when the window size changes.
       * Updates the canvas width and height to match the new window dimensions.
       */
      const handleResize = () => {
        w = window.innerWidth;
        h = window.innerHeight;
        resizeCanvas(w, h, canvas); // Adjust canvas size
      };

      // Add an event listener for window resize
      window.addEventListener("resize", handleResize);

      /**
       * Spawns a new spider object at a random position within the canvas.
       *
       * @returns {Spider} A new spider instance.
       */
      const handleSpawn = () => {
        return spawn(w, h, ctx);
      };

      // Create an array of spiders using the helper function
      const spiders: Spider[] = many(1, handleSpawn);

      /**
       * Handles pointer movement events and updates the spiders' behavior
       * to follow the pointer's position.
       *
       * @param {PointerEvent} e - The pointer event containing the cursor's position.
       */
      const handlePointerMove = (e: PointerEvent) => {
        spiders.forEach((spider) => {
          spider.follow(e.clientX, e.clientY); // Make spiders follow the pointer
        });
      };

      // Add an event listener for pointer movement
      window.addEventListener("pointermove", handlePointerMove);

      /**
       * Main animation loop to update and render the spiders on the canvas.
       *
       * @param {number} t - The current time in milliseconds.
       */
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

      /**
       * Cleanup function to remove event listeners and stop the animation loop.
       */
      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("pointermove", handlePointerMove);
        cancelAnimationFrame(animationFrameId);
      };
    }, []);

    // Return the canvas reference to be used in the component
    return canvasRef;
  };
