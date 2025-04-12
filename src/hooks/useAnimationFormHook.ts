import { useEffect, useRef, useState } from "react";
import { AnimationFormHookReturn } from "@/types/indexTypes";
/**
 * Custom hook for managing the animation state of a form.
 *
 * @returns {AnimationFormHookReturn} An object containing animation state and handlers.
 */

export const UseAnimationFormHook = ({
  onClose,
}: {
  onClose: () => void;
}): AnimationFormHookReturn => {
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
