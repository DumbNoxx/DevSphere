import { useEffect, useRef } from "react";
import { Spider } from "../types/indexTypeSpider";
import { spawn, resizeCanvas, many } from "../helpers/indexSpider";

export const spiderEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Variables para el tamaño del canvas
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    // Manejar las dimensiones
    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      resizeCanvas(w, h, canvas);
    };

    // Escuchar el evento resize
    window.addEventListener("resize", handleResize);

    // Manejar la creacion de la spider
    const handleSpawn = () => {
      return spawn(w, h, ctx);
    };

    // Crear varias "arañas"
    const spiders: Spider[] = many(1, handleSpawn);

    // Seguir el movimiento del ratón
    const handlePointerMove = (e: PointerEvent) => {
      spiders.forEach((spider) => {
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
      spiders.forEach((spider) => spider.tick(t));
      animationFrameId = requestAnimationFrame(anim);
    };

    animationFrameId = requestAnimationFrame(anim);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return canvasRef;
};
