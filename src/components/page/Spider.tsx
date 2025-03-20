import { useEffect } from "react";
import {spiderEffect} from "../../hooks/spiderEffect";

export const Spider = () => {
  const canvasRef = spiderEffect();

  // Ajustar el tamaño del canvas al tamaño de la ventana
  useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const resizeCanvas = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
      };

      // Ajustar el canvas al cargar el componente
      resizeCanvas();

      // Escuchar cambios en el tamaño de la ventana
      window.addEventListener("resize", resizeCanvas);

      // Limpieza al desmontar el componente
      return () => {
          window.removeEventListener("resize", resizeCanvas);
      };
  }, [canvasRef]);

  return (
      <canvas
          ref={canvasRef}
          className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      />
  );
}
