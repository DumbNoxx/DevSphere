import { useEffect, useRef } from "react";
import { Point } from "../types/point.type";
import { Spider } from "../types/spider.type";

export const spiderEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const { sin, cos, PI, hypot, min, max } = Math;

        // Variables para el tamaño del canvas
        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;


        // Función para redimensionar el canvas
        const resizeCanvas = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };

        // Escuchar el evento resize
        window.addEventListener("resize", resizeCanvas);

        // Función para generar puntos aleatorios
        const many = <T,>(n: number, f: (i: number) => T): T[] => {
            return [...Array(n)].map((_, i) => f(i));
        };

        // Función para generar números aleatorios
        const rnd = (x: number = 1, dx: number = 0): number => {
            return Math.random() * x + dx;
        };

        // Función para interpolar (lerp)
        const lerp = (a: number, b: number, t: number): number => {
            return a + (b - a) * t;
        };

        // Función de ruido para efectos visuales
        const noise = (x: number, y: number, t: number = 101): number => {
            let w0 = sin(0.3 * x + 1.4 * t + 2.0 + 2.5 * sin(0.4 * y + -1.3 * t + 1.0));
            let w1 = sin(0.2 * y + 1.5 * t + 2.8 + 2.3 * sin(0.5 * x + -1.2 * t + 0.5));
            return w0 + w1;
        };

        // Función para dibujar un círculo
        const drawCircle = (x: number, y: number, r: number): void => {
            ctx.beginPath();
            ctx.ellipse(x, y, r, r, 0, 0, PI * 2);
            ctx.fill();
        };

        // Función para dibujar una línea con efecto de ruido
        const drawLine = (x0: number, y0: number, x1: number, y1: number): void => {
            ctx.beginPath();
            ctx.moveTo(x0, y0);

            many(100, (i) => {
                i = (i + 1) / 100;
                let x = lerp(x0, x1, i);
                let y = lerp(y0, y1, i);
                let k = noise(x / 5 + x0, y / 5 + y0) * 2;
                ctx.lineTo(x + k, y + k);
            });

            ctx.stroke();
        };

        // Función para crear un punto (x, y)
        const pt = (x: number, y: number): { x: number, y: number } => {
            return { x, y };
        };

        // Función para generar una "araña" (spider)
        const spawn = (): Spider => {
            const pts: Point[] = many(333, () => {
                return {
                    x: rnd(w),
                    y: rnd(h),
                    len: 0,
                    r: 0
                };
            });

            const pts2: Point[] = many(9, (i) => {
                return {
                    x: cos((i / 9) * PI * 2),
                    y: sin((i / 9) * PI * 2)
                };
            });

            let seed: number = rnd(100);
            let tx: number = rnd(w);
            let ty: number = rnd(h);
            let x: number = rnd(w);
            let y: number = rnd(h);
            let kx: number = rnd(0.5, 0.5);
            let ky: number = rnd(0.5, 0.5);
            let walkRadius: { x: number, y: number } = pt(rnd(50, 50), rnd(50, 50));
            let r: number = w / rnd(100, 150);

            const paintPt = (pt: Point): void => {
                pts2.forEach((pt2) => {
                    const len = pt.len || 0; // Valor predeterminado para pt.len
                    if (len === 0) return;
                    drawLine(
                        lerp(x + pt2.x * r, pt.x, len * len),
                        lerp(y + pt2.y * r, pt.y, len * len),
                        x + pt2.x * r,
                        y + pt2.y * r
                    );
                });
                drawCircle(pt.x, pt.y, pt.r || 0); // Valor predeterminado para pt.r
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
                        const increasing: boolean = len < w / 10 && (i++) < 8;
                        let dir: number = increasing ? 0.1 : -0.1;
                        if (increasing) {
                            r *= 1.5;
                        }
                        pt.r = r;
                        pt.len = max(0, min((pt.len || 0) + dir, 1)); // Valor predeterminado para pt.len
                        paintPt(pt);
                    });
                }
            };
        };

        // Crear varias "arañas"
        const spiders: Spider[] = many(1, spawn);

        // Seguir el movimiento del ratón
        const handlePointerMove = (e: PointerEvent) => {
            spiders.forEach(spider => {
                spider.follow(e.clientX, e.clientY);
            });
        };

        window.addEventListener("pointermove", handlePointerMove);

        // Animación principal
        let animationFrameId: number;
        const anim = (t: number) => {
            ctx.fillStyle = "#000";
            ctx.fillRect(0, 0, w, h); // Limpiar el canvas
            ctx.fillStyle = ctx.strokeStyle = "#fff";
            t /= 1000;
            spiders.forEach(spider => spider.tick(t));
            animationFrameId = requestAnimationFrame(anim);
        };

        animationFrameId = requestAnimationFrame(anim);

        // Limpieza al desmontar el componente
        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("pointermove", handlePointerMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return canvasRef;
}
