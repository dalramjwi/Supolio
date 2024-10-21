import React from "react";
import Div from "../atoms/Div.tsx";
import { ModalProps } from "../interfaces/molecules/Modal.interface.ts";
//todo css 빼기 및 css 전달 필요, 모달 외부를 눌렀을 때 닫히지 않는 문제 해결 : div => Div atomic 사용
const Modal: React.FC<ModalProps> = ({ show, close, content }) => {
  if (!show) return null;

  return (
    <Div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
      onClick={close} // 모달 외부를 클릭하면 닫힘
    >
      <Div
        className="bg-white text-black p-6 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} // 모달 내부를 클릭해도 닫히지 않게 처리
      >
        {content}
      </Div>
    </Div>
  );
};

export default Modal;
