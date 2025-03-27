import { ModalProps } from "@/interfaces/index.interface";
import { animationFormHook } from "@/hooks/animationFormHook";

export const Modal = ({ onClose, children }: ModalProps) => {
  const { formRef, handleClose } = animationFormHook({ onClose });
  return (
    <>
      <article className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-center">
        {/* Contenedor del modal */}
        <section
          ref={formRef}
          className="p-6 rounded-lg relative max-w-md w-full mx-4 lg:max-w-lg lg:p-8"
        >
          {/* Botón de cerrar */}
          <button
            onClick={handleClose}
            className="absolute text-2xl top-2 right-2 text-white hover:text-gray-300
             size-10 rounded-lg mt-6 mr-6 hover:bg-stone-800 transition-colors
            duration-500 md:mr-0 md:-right-2 lg:top-3"
          >
            &times;
          </button>
          {/* Contenido del modal */}
          {children}
        </section>
      </article>
    </>
  );
};
