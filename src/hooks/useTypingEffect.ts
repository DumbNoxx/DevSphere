import { useEffect, useState } from "react";

export const useTypingEffect = () => {
  const [visibleText, setVisibleText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const fullText: string = "Hola, soy Dylan";
  const typingSpeed: number = 100;
  const deletingSpeed: number = 70;
  const pauseDuration: number = 1000;

  useEffect(() => {
    let timeout: number;

    if (!isDeleting && visibleText.length < fullText.length) {
      timeout = window.setTimeout(() => {
        setVisibleText(fullText.slice(0, visibleText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && visibleText.length > 0) {
      timeout = window.setTimeout(() => {
        setVisibleText(fullText.slice(0, visibleText.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && visibleText.length === fullText.length) {
      timeout = window.setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && visibleText.length === 0) {
      timeout = window.setTimeout(() => {
        setIsDeleting(false);
      }, pauseDuration);
    }

    return () => window.clearTimeout(timeout);
  }, [
    visibleText,
    isDeleting,
    fullText,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);
  return {
    visibleText,
    fullText,
  };
};
