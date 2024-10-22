import React from "react";
import Modal from "../../molecules/Modal.tsx";
import { useHandleModal } from "../Modal/hook/useHandleModal.tsx";
import HtmlElementDiv from "../../molecules/HtmlElementDiv.tsx";

interface StudyModalProps {
  studyData: {
    title: string[];
    description: string[];
    imgurl: string[];
  };
  show: boolean;
  close: () => void;
}

const StudyModal: React.FC<StudyModalProps> = ({ studyData, show, close }) => {
  const { currentIndex, handleNext, handlePrev } = useHandleModal(
    studyData.title.length
  );

  if (!show) return null;

  const content = (
    <div className="flex flex-col md:flex-row">
      <div className="p-4 w-full md:w-1/2">
        <div className="flex flex-col min-h-full">
          <div className="flex flex-col flex-grow bg-white rounded-lg shadow-lg p-6 border border-gray-300 overflow-y-scroll scrollbar-hidden max-h-[76vh]">
            <h2 className="text-2xl font-bold">
              {studyData.title[currentIndex]}
            </h2>
            <div className="flex justify-end pb-4 gap-x-2">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`bg-gray-400 text-white w-10 h-10 rounded-full disabled:opacity-50 ${
                  currentIndex === 0 ? "" : "hover:bg-gray-500"
                }`}
              >
                ◀
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === studyData.title.length - 1}
                className={`bg-gray-400 text-white w-10 h-10 rounded-full disabled:opacity-50 ${
                  currentIndex === studyData.title.length - 1
                    ? ""
                    : "hover:bg-gray-500"
                }`}
              >
                ▶
              </button>
            </div>
            <HtmlElementDiv
              className="text-gray-700 whitespace-pre-line mb-4 text-xl"
              htmlContent={studyData.description[currentIndex]}
            />
          </div>
        </div>
      </div>
      <img
        src={studyData.imgurl[currentIndex]}
        alt={studyData.title[currentIndex]}
        className="w-full md:w-1/2 h-auto max-h-[80vh] object-contain"
      />
    </div>
  );

  return (
    <Modal
      show={show}
      close={close}
      content={
        <div className="w-[80vw] h-[80vh] min-w-[80vw] max-w-[80vw] min-h-[80vh] max-h-[80vh] overflow-y-scroll scrollbar-hidden">
          {content}
        </div>
      }
    />
  );
};

export default StudyModal;
