import React, { useState } from "react";

import data from "../data/data.json"; // 데이터 불러오기
import Div from "../components/atoms/Div.tsx";
import Img from "../components/atoms/Img.tsx";
import Anchor from "../components/atoms/Anchor.tsx";
import Modal from "../components/molecules/Modal.tsx";
import StudyModal from "../components/StudyModal.tsx";

const Info: React.FC = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showStudyModal, setShowStudyModal] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("dalramjwi@gmail.com");
    setShowEmailModal(true);
  };

  const handleAboutStudyClick = () => {
    setShowStudyModal(true);
  };

  const infoData = data.info;

  return (
    <div className="flex flex-col min-h-full bg-gray-100 p-6">
      <div className="flex flex-col justify-center items-center flex-grow text-center bg-white rounded-lg shadow-lg p-10 border border-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8 mb-4 w-full">
          {Object.keys(infoData).map((key) => {
            const { data, method } = infoData[key];
            return (
              <Div key={key} className="pb-4 mb-4 w-full">
                <h3 className="text-2xl font-bold mb-2 border-b-2 border-gray-400 pb-2">
                  {key.toUpperCase()}
                </h3>
                <Div className="content">
                  {(() => {
                    switch (method) {
                      case "img":
                        return (
                          <Img
                            src={data}
                            alt={key}
                            className="h-[15vh] top-12"
                          />
                        );
                      case "a":
                        return (
                          <Anchor
                            href={data}
                            className="text-blue-700 underline text-xl"
                          >
                            {key}
                          </Anchor>
                        );
                      case "text":
                        return <p>{JSON.stringify(data)}</p>;
                      case "modal":
                        return (
                          <p
                            onClick={handleAboutStudyClick}
                            className="cursor-pointer text-blue-700 underline text-xl"
                          >
                            ABOUT {key.toUpperCase()}
                          </p>
                        );
                      default:
                        return null;
                    }
                  })()}
                </Div>
              </Div>
            );
          })}
        </div>
      </div>

      {/* Email Modal */}
      <Modal
        show={showEmailModal}
        close={() => setShowEmailModal(false)}
        content={<p>E-mail이 클립보드에 복사되었습니다!</p>}
        className="modal-custom-class"
      />

      {/* Study Modal */}
      <StudyModal
        show={showStudyModal}
        close={() => setShowStudyModal(false)}
      />
    </div>
  );
};

export default Info;
