/**
 * Represents the return type of a custom hook used for managing animations in a modal form.
 *
 * @property formRef - A React ref object pointing to the HTMLDivElement of the form or null.
 *                     This is used to reference the form element in the DOM.
 * @property handleClose - A function to handle the closing of the modal form.
 *                         Typically used to trigger animations or clean up resources.
 */
export type AnimationFormHookReturn = {
  formRef: React.RefObject<HTMLDivElement | null>;
  handleClose: () => void;
};
