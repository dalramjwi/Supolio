import React from "react";
import { ModalProps } from "../../interfaces/molecules/Modal.interface.ts";
import Div from "../../atoms/base/Div.tsx";
//todo css 빼기 및 css 전달 필요
const Modal: React.FC<ModalProps> = ({ show, close, content }) => {
  if (!show) return null;

  return (
    <Div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-[1000]"
      onClick={close} // 모달 외부를 클릭하면 닫힘
    >
      <Div
        onClick={(e) => e.stopPropagation()} // 모달 내부를 클릭해도 닫히지 않게 처리
      >
        {content}
      </Div>
    </Div>
  );
};

export default Modal;
