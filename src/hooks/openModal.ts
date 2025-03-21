import { useState, useEffect } from "react";

export const openModall = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Limpieza: elimina la clase cuando el componente se desmonta
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isModalOpen]);

  const openModal = (): void => {
    setIsModalOpen(true);
  }
  const closeModal = (): void => {
    setIsModalOpen(false);
  }

  return {
    openModal,
    closeModal,
    isModalOpen
  }
}
