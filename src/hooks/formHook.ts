import { useState } from "react"
import { UseSendEmailReturn, FormDatas } from "../interfaces/index.interface";
const API_SEND_MESSAGE = import.meta.env.VITE_API_SEND_MESSAGE;

export const formHook = (): UseSendEmailReturn => {
  const initialForm = {
    name:"",
    email:"",
    enterprice:"",
    message:"",
    checkbox:false
  }
  
  const [formData, setFormData] = useState<FormDatas>({
    name:"",
    email:"",
    enterprice:"",
    message:"",
    checkbox:false
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    try {
      const response = await fetch(API_SEND_MESSAGE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error(`Error en la solicitud ${response.status}`);
      }
      setFormData(initialForm);
      alert('Email enviado')
    } catch (err) {
      setErrorMessage("Hubo un problema al enviar los datos al servidor.");
      alert("Se te han acabado las solicitudes a la api, intenta manana");
      console.error("Error:", err)
    } finally {
      setIsSubmitting(false);
    }
  };
  return {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    errorMessage
  };
}
