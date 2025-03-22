import { rnd } from "./rdn.helper";
import { many } from "./many.helper";
import { drawLine } from "./drawLine.helper";
import { lerp } from "./lerp.helper";
import { Spider } from "../../types/Spider/spider.type";
import { Point } from "../../types/Spider/point.type";
import { drawCircle } from "./drawCircle.helper";
import { pt } from "./pt.helper";

const { sin, cos, PI, hypot, min, max } = Math;

export const spawn = (
  w: number,
  h: number,
  ctx: CanvasRenderingContext2D
): Spider => {
  const pts: Point[] = many(333, () => {
    return {
      x: rnd(w),
      y: rnd(h),
      len: 0,
      r: 0,
    };
  });

  const pts2: Point[] = many(9, (i) => {
    return {
      x: cos((i / 9) * PI * 2),
      y: sin((i / 9) * PI * 2),
    };
  });

  let seed: number = rnd(100);
  let tx: number = rnd(w);
  let ty: number = rnd(h);
  let x: number = rnd(w);
  let y: number = rnd(h);
  let kx: number = rnd(0.5, 0.5);
  let ky: number = rnd(0.5, 0.5);
  let walkRadius: { x: number; y: number } = pt(rnd(50, 50), rnd(50, 50));
  let r: number = w / rnd(100, 150);

  const paintPt = (pt: Point): void => {
    pts2.forEach((pt2) => {
      const len = pt.len || 0; // Valor predeterminado para pt.len
      if (len === 0) return;
      drawLine(
        lerp(x + pt2.x * r, pt.x, len * len),
        lerp(y + pt2.y * r, pt.y, len * len),
        x + pt2.x * r,
        y + pt2.y * r,
        ctx
      );
    });
    drawCircle(pt.x, pt.y, pt.r || 0, ctx); // Valor predeterminado para pt.r
  };

  return {
    follow(x: number, y: number): void {
      tx = x;
      ty = y;
    },

    tick(t: number): void {
      const selfMoveX: number = cos(t * kx + seed) * walkRadius.x;
      const selfMoveY: number = sin(t * ky + seed) * walkRadius.y;
      let fx: number = tx + selfMoveX;
      let fy: number = ty + selfMoveY;

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
        let dir: number = increasing ? 0.1 : -0.1;
        if (increasing) {
          r *= 1.5;
        }
        pt.r = r;
        pt.len = max(0, min((pt.len || 0) + dir, 1)); // Valor predeterminado para pt.len
        paintPt(pt);
      });
    },
  };
};
