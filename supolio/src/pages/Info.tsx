import React, { useState } from "react";
import Modal from "../components/Modal.tsx";
import { stackData } from "../data/stackData.ts";
import TechStack from "../components/TeckStack.tsx";
const Info: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [animateText, setAnimateText] = useState(true);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("dalramjwi@gmail.com");
    // 이메일 클릭 시 모달 띄우기
    setShowEmailModal(true);
  };

  const handleAboutStudyClick = () => {
    setShowModal(true);
    // 모달 클릭하면 애니메이션 제거
    setAnimateText(false);
  };

  return (
    <div className="p-10 relative">
      {/* 상단 연락처 정보 */}
      <div className="grid grid-cols-3 text-center gap-8">
        <div className="pb-4 mb-4">
          <h3 className="text-xl font-bold mb-2 border-b-2 border-gray-400 pb-2">
            PHONE NUMBER
          </h3>
          <p>010 - 9823 - 3662</p>
        </div>
        <div className="pb-4 mb-4">
          <h3 className="text-xl font-bold mb-2 border-b-2 border-gray-400 pb-2">
            E - MAIL
          </h3>
          <p
            onClick={handleEmailClick}
            className="cursor-pointer text-blue-500 underline"
          >
            dalramjwi@gmail.com
          </p>
        </div>
        <div className="pb-4 mb-4">
          <h3 className="text-xl font-bold mb-2 border-b-2 border-gray-400 pb-2">
            GITHUB
          </h3>
          <a
            href="https://github.com/dalramjwi"
            className="text-blue-500 underline"
          >
            CONNECT TO GITHUB PAGE
          </a>
        </div>
      </div>

      {/* 기술 스택을 분류별로 배치 */}
      <div className="grid grid-cols-2 text-center gap-8">
        <div className="pb-4 mb-4">
          <h3 className="text-xl font-bold mb-2 border-b-2 border-gray-400 pb-2">
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
        <div className="pb-4 mb-4">
          <h3 className="text-xl font-bold mb-2 border-b-2 border-gray-400 pb-2">
            HOW STUDY
          </h3>
          <ul className="list-none">
            <li className="flex justify-center" onClick={handleAboutStudyClick}>
              <span
                className={`text-2xl font-bold cursor-pointer ${
                  animateText ? "animate-pulse" : ""
                }`}
              >
                ABOUT STUDYING
              </span>
              <span
                className={`ml-1 text-2xl ${
                  animateText ? "animate-pulse" : ""
                }`}
              >
                ...
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Email Modal */}
      <Modal
        show={showEmailModal}
        close={() => setShowEmailModal(false)}
        content={<p>E-mail이 클립보드에 복사되었습니다!</p>}
      />

      {/* Study Modal */}
      <Modal
        show={showModal}
        close={() => setShowModal(false)}
        content={<p>Study Details</p>}
      />
    </div>
  );
};

export default Info;
