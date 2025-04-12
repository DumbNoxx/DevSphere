import { useState } from "react";
import { UseSendEmailReturn, FormDatas } from "@/interfaces/index.interface";
import { ENV } from "@/env";

const API = ENV.PUBLIC.API_URL;

/**
 * Custom hook for managing a form and submitting its data to an API.
 *
 * @returns {UseSendEmailReturn} An object containing form data, handlers, and submission state.
 */
export const useFormHook = (): UseSendEmailReturn => {
  /**
   * Initial state for the form fields.
   */
  const initialForm = {
    name: "",
    email: "",
    enterprice: "",
    message: "",
    checkbutton: false,
  };

  // State for managing form data.
  const [formData, setFormData] = useState<FormDatas>(initialForm);

  // State for tracking the submission status of the form.
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // State for storing error messages during form submission.
  const [errorMessage, setErrorMessage] = useState<string>("");

  /**
   * Handles changes to input fields in the form.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  /**
   * Handles changes to textarea fields in the form.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement>} e - The textarea change event.
   */
  const handleChangeTextArea = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /**
   * Handles form submission by sending the form data to the API.
   *
   * @param {React.FormEvent} e - The form submission event.
   */
  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`Error en la solicitud ${response.status}`);
      }
      setFormData(initialForm);
      alert("Email enviado");
    } catch (err) {
      setErrorMessage("Hubo un problema al enviar los datos al servidor.");
      alert("Se te han acabado las solicitudes a la api, intenta manana");
      console.error("Error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };
  return {
    formData,
    handleChange,
    handleSubmit,
    handleChangeTextArea,
    isSubmitting,
    errorMessage,
  };
};
