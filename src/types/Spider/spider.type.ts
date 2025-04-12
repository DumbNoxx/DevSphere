/**
 * Represents a Spider entity with specific behaviors.
 */
export type Spider = {
  /**
   * Makes the spider follow a target position.
   * @param x - The x-coordinate of the target position.
   * @param y - The y-coordinate of the target position.
   */
  follow: (x: number, y: number) => void;

  /**
   * Updates the spider's state based on the elapsed time.
   * @param t - The time elapsed since the last update, in milliseconds.
   */
  tick: (t: number) => void;
};
