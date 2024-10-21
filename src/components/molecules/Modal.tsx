import React from "react";

interface ModalProps {
  show: boolean;
  close: () => void;
  content: React.ReactNode;
}

//모달 컴포넌트
const Modal: React.FC<ModalProps> = ({ show, close, content }) => {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
      onClick={close} // 모달 외부를 클릭하면 닫힘
    >
      <div
        className="bg-white text-black p-6 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} // 모달 내부를 클릭해도 닫히지 않게 처리
      >
        {content}
      </div>
    </div>
  );
};

export default Modal;
