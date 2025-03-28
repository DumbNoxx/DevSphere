import { FormDatas } from "./formEmail.interface";

export interface UseSendEmailReturn {
  formData: FormDatas;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeTextArea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isSubmitting: boolean;
  errorMessage: string;
}