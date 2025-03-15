import { useEffect, useState } from "react";

const TypingEffect: React.FC = () => {
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

  return (
    <h1 className="Nombre">
      {visibleText}
      <span style={{ opacity: 0 }}>{fullText.slice(visibleText.length)}</span>
    </h1>
  );
};

export default TypingEffect;
