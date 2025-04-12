/**
 * Resizes a canvas element to the specified width and height.
 *
 * @param w - The new width of the canvas.
 * @param h - The new height of the canvas.
 * @param canvas - The HTMLCanvasElement to be resized.
 */
export const resizeCanvas = (
  w: number,
  h: number,
  canvas: HTMLCanvasElement
) => {
  canvas.width = w;
  canvas.height = h;
};
