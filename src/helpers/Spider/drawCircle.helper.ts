// Importing the constant PI from the Math object for calculations.
const { PI } = Math;

/**
 * Draws a filled circle on a given canvas context.
 *
 * @param x - The x-coordinate of the circle's center.
 * @param y - The y-coordinate of the circle's center.
 * @param r - The radius of the circle.
 * @param ctx - The CanvasRenderingContext2D where the circle will be drawn.
 */
export const drawCircle = (
  x: number,
  y: number,
  r: number,
  ctx: CanvasRenderingContext2D
): void => {
  ctx.beginPath(); // Start a new path for the circle.
  ctx.ellipse(x, y, r, r, 0, 0, PI * 2); // Draw an ellipse (circle in this case).
  ctx.fill(); // Fill the circle with the current fill style.
};
