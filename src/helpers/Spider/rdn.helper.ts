/**
 * Generates a random number within a specified range.
 *
 * @param {number} [x=1] - The multiplier for the random number.
 * @param {number} [dx=0] - The offset added to the random number.
 * @returns {number} A random number calculated as (Math.random() * x + dx).
 */
export const rnd = (x: number = 1, dx: number = 0): number => {
  return Math.random() * x + dx;
};
