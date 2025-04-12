/**
 * Creates a point object with x and y coordinates.
 *
 * @param x - The x-coordinate of the point.
 * @param y - The y-coordinate of the point.
 * @returns An object representing the point with x and y properties.
 */
export const pt = (x: number, y: number): { x: number; y: number } => {
  return { x, y };
};
