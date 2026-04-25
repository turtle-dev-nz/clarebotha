import { useState } from "react";

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export function useContactForm() {
  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange =
    (field: keyof ContactFormValues): React.ChangeEventHandler<HTMLInputElement> =>
    (e) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleTextAreaChange =
    (field: keyof ContactFormValues): React.ChangeEventHandler<HTMLTextAreaElement> =>
    (e) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise<void>((resolve) => setTimeout(resolve, 900));
    setSubmitting(false);
    setSubmitted(true);
  };

  const reset = () => {
    setValues({ name: "", email: "", message: "" });
    setSubmitted(false);
  };

  return {
    values,
    submitted,
    submitting,
    handleInputChange,
    handleTextAreaChange,
    handleSubmit,
    reset,
  };
}
