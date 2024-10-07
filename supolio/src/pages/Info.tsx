import React, { useState } from "react";
import Modal from "../components/Modal.tsx";
import { stackData } from "../data/stackData.ts";
import TechStack from "../components/TeckStack.tsx";
import StudyModal from "../components/StudyModal.tsx";

const Info: React.FC = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [animateText, setAnimateText] = useState(true);
  const [showStudyModal, setShowStudyModal] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("dalramjwi@gmail.com");
    setShowEmailModal(true);
  };

  const handleAboutStudyClick = () => {
    setShowStudyModal(true);
    setAnimateText(false);
  };

  return (
    <div className="flex flex-col min-h-full bg-gray-100 p-6 ">
      <div className="flex flex-col justify-center items-center flex-grow text-center bg-white rounded-lg shadow-lg p-10 border border-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8 mb-4 w-full">
          <div className="pb-4 mb-4 w-full">
            <h3 className="text-2xl font-bold mb-2 border-b-2 border-gray-400 pb-2">
              PHONE NUMBER
            </h3>
            <p className="text-xl">010 - 9823 - 3662</p>
          </div>
          <div className="pb-4 mb-4 w-full">
            <h3 className="text-2xl font-bold mb-2 border-b-2 border-gray-400 pb-2">
              E - MAIL
            </h3>
            <p
              onClick={handleEmailClick}
              className="cursor-pointer text-blue-700 underline text-xl"
            >
              dalramjwi@gmail.com
            </p>
          </div>
          <div className="pb-4 mb-4 w-full">
            <h3 className="text-2xl font-bold mb-2 border-b-2 border-gray-400 pb-2">
              GITHUB
            </h3>
            <a
              href="https://github.com/dalramjwi"
              className="text-blue-700 underline text-xl"
            >
              CONNECT TO GITHUB PAGE
            </a>
          </div>
        </div>

        {/* 기술 스택을 분류별로 배치 */}
        <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-8 w-full">
          <div className="mb-4 w-full">
            <h3 className="text-2xl font-bold mb-2 border-b-2 border-gray-400 pb-2">
              STACK
            </h3>
            {/* stackData 배열을 이용하여 각 기술 스택을 렌더링 */}
            {stackData.map((stack) => (
              <TechStack
                key={stack.title}
                title={stack.title}
                items={stack.items}
                colorClass={stack.colorClass}
              />
            ))}
          </div>

          {/* ABOUT STUDY 섹션 */}
          <div className="pb-4 mb-4 w-full">
            <h3 className="text-2xl font-bold mb-2 border-b-2 border-gray-400 pb-2">
              HOW STUDY
            </h3>
            <ul className="list-none">
              <li
                className="flex justify-center"
                onClick={handleAboutStudyClick}
              >
                <span
                  className={`text-2xl cursor-pointer text-decoration-line: underline text-blue-700 font-bold ${
                    animateText ? "animate-pulse" : ""
                  }`}
                >
                  ABOUT STUDYING
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Email Modal */}
      <Modal
        show={showEmailModal}
        close={() => setShowEmailModal(false)}
        content={<p>E-mail이 클립보드에 복사되었습니다!</p>}
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
