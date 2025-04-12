import { useState, useEffect } from "react";
import { OpenModalHookReturn } from "@/types/indexTypes";
/**
 * Custom hook for managing the state of a modal.
 *
 * @returns {OpenModalHookReturn} An object containing modal state and handlers.
 */

export const useOpenModal = (): OpenModalHookReturn => {
  // State for tracking whether the modal is open.
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Limpieza: elimina la clase cuando el componente se desmonta
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isModalOpen]);

  /**
   * Opens the modal by setting the state to true.
   */
  const openModal = (): void => {
    setIsModalOpen(true);
  };

  /**
   * Closes the modal by setting the state to false.
   */
  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  return {
    openModal,
    closeModal,
    isModalOpen,
  };
};
