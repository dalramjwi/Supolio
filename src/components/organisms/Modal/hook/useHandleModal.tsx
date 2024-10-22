import { useState } from "react";

export const useHandleModal = (dataLength: number) => {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === dataLength - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dataLength - 1 : prevIndex - 1
    );
  };

  return {
    showModal,
    openModal,
    closeModal,
    currentIndex,
    handleNext,
    handlePrev,
  };
};
