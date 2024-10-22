import React from "react";
import Modal from "../../molecules/Modal.tsx";
import { useHandleModal } from "../Modal/hook/useHandleModal.tsx";
import Div from "../../atoms/Div.tsx";
import Img from "../../atoms/Img.tsx";
import HtmlElementDiv from "../../molecules/HtmlElementDiv.tsx";
import ModalButtonGroup from "./ModalButtonGroup.tsx";

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
            <Div className="flex justify-end pb-4">
              {/* ModalButtonGroup을 사용하여 버튼 쌍을 출력 */}
              <ModalButtonGroup
                onPrev={handlePrev}
                onNext={handleNext}
                disablePrev={currentIndex === 0}
                disableNext={currentIndex === studyData.title.length - 1}
              />
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
