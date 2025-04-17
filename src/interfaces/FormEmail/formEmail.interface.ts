/**
 * Interface representing the structure of form data.
 */
export interface FormDatas {
  /**
   * The name of the user filling out the form.
   */
  name: string;

  /**
   * The email address of the user.
   */
  email: string;

  /**
   * (Optional) The name of the user's enterprise or company.
   */
  enterprice: string;

  /**
   * (Optional) A message provided by the user.
   */
  message: string;

  /**
   * (Optional) A boolean indicating whether a checkbox is selected.
   */
  checkbutton?: boolean;
}
