import { useState } from "react";

const useModalControl = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpenModal = () => {
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  return { isModalOpen, onOpenModal, onCloseModal };
};

export default useModalControl;
