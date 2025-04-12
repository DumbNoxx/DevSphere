/**
 * Represents a point in a 2D space with optional properties for additional calculations.
 */
export type Point = {
  /**
   * The x-coordinate of the point.
   */
  x: number;

  /**
   * The y-coordinate of the point.
   */
  y: number;

  /**
   * Optional length or magnitude associated with the point.
   */
  len?: number;

  /**
   * Optional radius value, typically used in polar coordinates.
   */
  r?: number;

  /**
   * Optional angle in radians, typically used in polar coordinates.
   */
  t?: number;
};
