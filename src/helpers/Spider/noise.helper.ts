// Import the `sin` function from the Math object.
const { sin } = Math;

/**
 * Generates a noise value based on the input coordinates (x, y) and time (t).
 * The function combines sinusoidal waves to create a pseudo-random noise effect.
 *
 * @param {number} x - The x-coordinate input.
 * @param {number} y - The y-coordinate input.
 * @param {number} [t=101] - The time input, defaulting to 101 if not provided.
 * @returns {number} - The resulting noise value.
 */
export const noise = (x: number, y: number, t: number = 101): number => {
  // Calculate the first wave component using a combination of x, y, and t.
  const w0 = sin(0.3 * x + 1.4 * t + 2.0 + 2.5 * sin(0.4 * y + -1.3 * t + 1.0));

  // Calculate the second wave component using a combination of y, x, and t.
  const w1 = sin(0.2 * y + 1.5 * t + 2.8 + 2.3 * sin(0.5 * x + -1.2 * t + 0.5));

  // Return the sum of the two wave components as the noise value.
  return w0 + w1;
};
