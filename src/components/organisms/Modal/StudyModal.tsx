import React from "react";
import Modal from "../../molecules/Modal.tsx";
import { useHandleModal } from "../Modal/hook/useHandleModal.tsx";
import Div from "../../atoms/Div.tsx";
import Img from "../../atoms/Img.tsx";
import Button from "./../../atoms/Button.tsx";
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
    <Div className="flex flex-col md:flex-row">
      <Div className="p-4 w-full md:w-1/2">
        <Div className="flex flex-col min-h-full">
          <Div className="flex flex-col flex-grow bg-white rounded-lg shadow-lg p-6 border border-gray-300 overflow-y-scroll scrollbar-hidden max-h-[76vh]">
            <Div className="text-2xl font-bold">
              {studyData.title[currentIndex]}
            </Div>
            <Div className="flex justify-end pb-4 gap-x-2">
              <Button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`bg-gray-400 text-white w-10 h-10 rounded-full disabled:opacity-50 ${
                  currentIndex === 0 ? "" : "hover:bg-gray-500"
                }`}
              >
                ◀
              </Button>
              <Button
                onClick={handleNext}
                disabled={currentIndex === studyData.title.length - 1}
                className={`bg-gray-400 text-white w-10 h-10 rounded-full disabled:opacity-50 ${
                  currentIndex === studyData.title.length - 1
                    ? ""
                    : "hover:bg-gray-500"
                }`}
              >
                ▶
              </Button>
            </Div>
            <HtmlElementDiv
              className="text-gray-700 whitespace-pre-line mb-4 text-xl text-left"
              htmlContent={studyData.description[currentIndex]}
            />
          </Div>
        </Div>
      </Div>
      <Img
        src={studyData.imgurl[currentIndex]}
        alt={studyData.title[currentIndex]}
        className="w-full md:w-1/2 h-auto max-h-[80vh] object-contain"
      />
    </Div>
  );

  return (
    <Modal
      show={show}
      close={close}
      content={
        <Div className="w-[80vw] h-[80vh] min-w-[80vw] max-w-[80vw] min-h-[80vh] max-h-[80vh] overflow-y-scroll scrollbar-hidden">
          {content}
        </Div>
      }
    />
  );
};

export default StudyModal;
