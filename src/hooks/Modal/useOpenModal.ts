import { useState, useEffect } from "react";
import { OpenModalHookReturn } from "@types";

/**
 * Custom React hook for managing the state of a modal.
 *
 * This hook provides a simple interface to control the visibility of a modal
 * and ensures that the document body is updated to prevent scrolling when the modal is open.
 *
 * Features:
 * - Tracks whether the modal is open or closed.
 * - Adds a "no-scroll" class to the document body when the modal is open to prevent background scrolling.
 * - Automatically cleans up the "no-scroll" class when the component using the hook is unmounted.
 *
 * @returns {OpenModalHookReturn} An object containing:
 * - `isModalOpen` (boolean): The current state of the modal (open or closed).
 * - `openModal` (function): Function to open the modal.
 * - `closeModal` (function): Function to close the modal.
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

    // Cleanup: removes the class when the component is unmounted
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
