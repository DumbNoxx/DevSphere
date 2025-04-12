import { rnd } from "./rdn.helper";
import { many } from "./many.helper";
import { drawLine } from "./drawLine.helper";
import { lerp } from "./lerp.helper";
import { Spider } from "../../types/Spider/spider.type";
import { Point } from "../../types/Spider/point.type";
import { drawCircle } from "./drawCircle.helper";
import { pt } from "./pt.helper";

const { sin, cos, PI, hypot, min, max } = Math;

/**
 * Creates and manages a "spider" object that can follow a target and render itself on a canvas.
 *
 * @param {number} w - The width of the canvas.
 * @param {number} h - The height of the canvas.
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
 * @returns {Spider} A spider object with `follow` and `tick` methods.
 */
export const spawn = (
  w: number,
  h: number,
  ctx: CanvasRenderingContext2D
): Spider => {
  /**
   * Array of points representing the spider's body.
   */
  const pts: Point[] = many(333, () => {
    return {
      x: rnd(w),
      y: rnd(h),
      len: 0,
      r: 0,
    };
  });

  /**
   * Array of points representing the spider's legs.
   */
  const pts2: Point[] = many(9, (i) => {
    return {
      x: cos((i / 9) * PI * 2),
      y: sin((i / 9) * PI * 2),
    };
  });

  // Internal state variables
  const seed: number = rnd(100);
  let tx: number = rnd(w); // Target x-coordinate
  let ty: number = rnd(h); // Target y-coordinate
  let x: number = rnd(w); // Current x-coordinate
  let y: number = rnd(h); // Current y-coordinate
  const kx: number = rnd(0.5, 0.5); // Movement factor for x
  const ky: number = rnd(0.5, 0.5); // Movement factor for y
  const walkRadius: { x: number; y: number } = pt(rnd(50, 50), rnd(50, 50)); // Radius of self-movement
  const r: number = w / rnd(100, 150); // Radius for rendering

  /**
   * Paints a single point on the canvas, including its connections to the spider's legs.
   *
   * @param {Point} pt - The point to paint.
   */
  const paintPt = (pt: Point): void => {
    pts2.forEach((pt2) => {
      const len = pt.len || 0; // Default value for pt.len
      if (len === 0) return;
      drawLine(
        lerp(x + pt2.x * r, pt.x, len * len),
        lerp(y + pt2.y * r, pt.y, len * len),
        x + pt2.x * r,
        y + pt2.y * r,
        ctx
      );
    });
    drawCircle(pt.x, pt.y, pt.r || 0, ctx); // Default value for pt.r
  };

  return {
    /**
     * Updates the target coordinates for the spider to follow.
     *
     * @param {number} x - The target x-coordinate.
     * @param {number} y - The target y-coordinate.
     */
    follow(x: number, y: number): void {
      tx = x;
      ty = y;
    },

    /**
     * Updates the spider's position and renders it on the canvas.
     *
     * @param {number} t - The current time or tick value.
     */
    tick(t: number): void {
      const selfMoveX: number = cos(t * kx + seed) * walkRadius.x;
      const selfMoveY: number = sin(t * ky + seed) * walkRadius.y;
      const fx: number = tx + selfMoveX;
      const fy: number = ty + selfMoveY;

      // Smoothly move towards the target
      x += min(w / 100, (fx - x) / 10);
      y += min(h / 100, (fy - y) / 10);

      let i: number = 0;
      pts.forEach((pt) => {
        const dx: number = pt.x - x,
          dy: number = pt.y - y;
        const len: number = hypot(dx, dy);
        let r: number = min(2, w / len / 5);
        pt.t = 0;
        const increasing: boolean = len < w / 10 && i++ < 8;
        const dir: number = increasing ? 0.1 : -0.1;
        if (increasing) {
          r *= 1.5;
        }
        pt.r = r;
        pt.len = max(0, min((pt.len || 0) + dir, 1)); // Default value for pt.len
        paintPt(pt);
      });
    },
  };
};
