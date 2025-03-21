import { ModalProps } from "../../interfaces/index.interface";

export const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <>
      <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-center">
        <div className=" p-6 rounded-lg relative max-w-md w-full mx-4">
          <button
            onClick={onClose }
            className="absolute text-2xl top-2 right-2 text-white hover:text-gray-300
             size-10 rounded-lg mt-6 mr-6 hover:bg-stone-800 transition-colors
            duration-500"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    </>
  );
};