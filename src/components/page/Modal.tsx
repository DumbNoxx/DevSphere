import { ModalProps } from "@interfaces";
import { UseAnimationFormHook } from "@hooks";

export const Modal = ({ onClose, children }: ModalProps) => {
  const { formRef, handleClose } = UseAnimationFormHook({ onClose });
  return (
    <>
      <section className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-center">
        {/* Modal container */}
        <article
          ref={formRef}
          className="p-6 rounded-lg relative max-w-md w-full mx-4 lg:max-w-lg lg:p-8"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute text-2xl top-2 right-2 text-white hover:text-gray-300
             size-10 rounded-lg mt-6 mr-6 hover:bg-stone-800 transition-colors
            duration-500 md:mr-0 md:-right-2 lg:top-3"
          >
            &times;
          </button>
          {/* Modal content */}
          {children}
        </article>
      </section>
    </>
  );
};
