import { FormDatas } from "./formEmail.interface";

/**
 * Interface representing the return type of a custom hook for sending emails.
 */
export interface UseSendEmailReturn {
  /**
   * The form data containing the input values.
   */
  formData: FormDatas;

  /**
   * Handles changes to input fields in the form.
   * @param e - The change event from an HTML input element.
   */
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Handles changes to textarea fields in the form.
   * @param e - The change event from an HTML textarea element.
   */
  handleChangeTextArea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;

  /**
   * Handles the form submission event.
   * @param e - The form submission event.
   * @returns A promise that resolves when the submission is complete.
   */
  handleSubmit: (e: React.FormEvent) => Promise<void>;

  /**
   * Indicates whether the form is currently being submitted.
   */
  isSubmitting: boolean;

  /**
   * Stores any error message encountered during form submission.
   */
  errorMessage: string;
}
