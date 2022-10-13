import { useState } from "react";
const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return { modalOpen, handleCloseModal, handleOpenModal } as const;
};
export default useModal;
