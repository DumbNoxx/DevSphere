import { useEffect, useRef, useState } from "react";

export const animationFormHook = ({ onClose }: { onClose: () => void }) => {
  const formRef = useRef<HTMLDivElement>(null);

  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.classList.add("animate-fade-in-slide-up");
    }
  });
  const handleClose = () => {
    if (formRef.current && !isClosing) {
      setIsClosing(true);
      formRef.current.classList.remove("animate-fade-in-slide-up");
      formRef.current.classList.add("animate-fade-out-slide-down");

      setTimeout(() => {
        onClose();
      }, 500);
    }
  };

  return {
    formRef,
    handleClose,
  };
};
