import React from "react";
import { ModalButtonProps } from "../interfaces/organisms/ModalButton.interface";

const ModalButton: React.FC<ModalButtonProps> = ({
  direction,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-gray-400 text-white w-10 h-10 rounded-full disabled:opacity-50 mx-2 ${
        disabled ? "" : "hover:bg-gray-500"
      }`}
    >
      {direction === "prev" ? "◀" : "▶"}
    </button>
  );
};

export default ModalButton;
