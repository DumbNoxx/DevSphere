/**
 * Interface representing the properties required for a modal component.
 */
export interface ModalProps {
  /**
   * Callback function to handle the closing of the modal.
   */
  onClose: () => void;

  /**
   * The content to be displayed inside the modal.
   */
  children: React.ReactNode;
}
