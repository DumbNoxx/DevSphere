/**
 * Represents the return type of a hook for managing modal state.
 */
export type OpenModalHookReturn = {
  /**
   * Function to open the modal.
   */
  openModal: () => void;

  /**
   * Function to close the modal.
   */
  closeModal: () => void;

  /**
   * Boolean indicating whether the modal is currently open.
   */
  isModalOpen: boolean;
};
