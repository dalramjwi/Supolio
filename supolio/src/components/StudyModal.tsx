import React, { useState } from "react";
import Modal from "./Modal.tsx";
import { contentData } from "../data/study.ts";

interface StudyModalProps {
  show: boolean;
  close: () => void;
}

const StudyModal: React.FC<StudyModalProps> = ({ show, close }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!show) return null;

  const handleSwipe = (direction: string) => {
    if (direction === "next" && currentIndex < contentData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (direction === "prev" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const content = (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">
        {contentData[currentIndex].title}
      </h2>
      <img
        src={contentData[currentIndex].imageUrl}
        alt={contentData[currentIndex].title}
        className="w-full h-40 object-cover mb-2" // 이미지 자리에 임시 이미지 경로 사용
      />
      <p className="text-gray-700 whitespace-pre-line mb-4">
        {contentData[currentIndex].description}
      </p>
      <div className="flex justify-between">
        <button
          onClick={() => handleSwipe("prev")}
          disabled={currentIndex === 0}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          ◀
        </button>
        <button
          onClick={() => handleSwipe("next")}
          disabled={currentIndex === contentData.length - 1}
          className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
        >
          ▶
        </button>
      </div>
    </div>
  );

  return (
    <Modal
      show={show}
      close={close}
      content={
        <div className="w-[80vw] h-[80vh] min-w-[80vw] max-w-[80vw] min-h-[80vh] max-h-[80vh] overflow-y-auto">
          {content}
        </div>
      }
    />
  );
};

export default StudyModal;
