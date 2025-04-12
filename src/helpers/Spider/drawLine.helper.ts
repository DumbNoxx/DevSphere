import { many } from "./many.helper";
import { lerp } from "./lerp.helper";
import { noise } from "./noise.helper";

/**
 * Draws a noisy line between two points on a canvas.
 *
 * @param x0 - The x-coordinate of the starting point.
 * @param y0 - The y-coordinate of the starting point.
 * @param x1 - The x-coordinate of the ending point.
 * @param y1 - The y-coordinate of the ending point.
 * @param ctx - The canvas rendering context to draw on.
 */
export const drawLine = (
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  ctx: CanvasRenderingContext2D
): void => {
  // Begin a new path for the line
  ctx.beginPath();
  ctx.moveTo(x0, y0); // Move to the starting point

  // Generate 100 points along the line with noise
  many(100, (i) => {
    i = (i + 1) / 100; // Normalize the iteration index
    const x = lerp(x0, x1, i); // Interpolate x-coordinate
    const y = lerp(y0, y1, i); // Interpolate y-coordinate
    const k = noise(x / 5 + x0, y / 5 + y0) * 2; // Add noise to the coordinates
    ctx.lineTo(x + k, y + k); // Draw a line to the noisy point
  });

  // Render the line on the canvas
  ctx.stroke();
};
