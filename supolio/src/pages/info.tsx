import React, { useState } from "react";

const Info: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [animateText, setAnimateText] = useState(true); // 애니메이션 제어용 상태

  const handleEmailClick = () => {
    navigator.clipboard.writeText("dalramjwi@gmail.com");
    setShowEmailModal(true); // 이메일 클릭 시 모달 띄우기
  };

  const handleAboutStudyClick = () => {
    setShowModal(true);
    setAnimateText(false); // 모달 클릭하면 애니메이션 제거
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeEmailModal = () => {
    setShowEmailModal(false);
  };

  return (
    <div className="p-10 relative">
      {/* 상단에 배치된 3열 구조 */}
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
          <a href="https://github.com" className="text-blue-500 underline">
            GITHUB LINK
          </a>
        </div>
      </div>

      {/* 기술 스택을 분류별로 배치 */}
      <div className="grid grid-cols-2 text-center gap-8">
        <div className="pb-4 mb-4">
          <h3 className="text-xl font-bold mb-2 border-b-2 border-gray-400 pb-2">
            STACK
          </h3>
          <div className="text-left mb-4">
            <h4 className="text-lg font-semibold mb-2">Language</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-yellow-100 rounded-lg border border-yellow-300">
                JavaScript
              </span>
              <span className="px-2 py-1 bg-yellow-100 rounded-lg border border-yellow-300">
                TypeScript
              </span>
              <span className="px-2 py-1 bg-yellow-100 rounded-lg border border-yellow-300">
                Python
              </span>
            </div>
          </div>

          <div className="text-left mb-4">
            <h4 className="text-lg font-semibold mb-2">Framework / Library</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-100 rounded-lg border border-blue-300">
                React
              </span>
              <span className="px-2 py-1 bg-blue-100 rounded-lg border border-blue-300">
                Next.js
              </span>
              <span className="px-2 py-1 bg-blue-100 rounded-lg border border-blue-300">
                Nest.js
              </span>
              <span className="px-2 py-1 bg-blue-100 rounded-lg border border-blue-300">
                Node.js
              </span>
              <span className="px-2 py-1 bg-blue-100 rounded-lg border border-blue-300">
                TailwindCSS
              </span>
              <span className="px-2 py-1 bg-blue-100 rounded-lg border border-blue-300">
                Vanilla Extract
              </span>
            </div>
          </div>

          <div className="text-left mb-4">
            <h4 className="text-lg font-semibold mb-2">MarkUp</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-green-100 rounded-lg border border-green-300">
                HTML5
              </span>
              <span className="px-2 py-1 bg-green-100 rounded-lg border border-green-300">
                CSS3
              </span>
            </div>
          </div>

          <div className="text-left mb-4">
            <h4 className="text-lg font-semibold mb-2">Database</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-100 rounded-lg border border-gray-300">
                Sqlite3
              </span>
              <span className="px-2 py-1 bg-gray-100 rounded-lg border border-gray-300">
                PostgreSQL
              </span>
              <span className="px-2 py-1 bg-gray-100 rounded-lg border border-gray-300">
                MongoDB
              </span>
            </div>
          </div>

          <div className="text-left mb-4">
            <h4 className="text-lg font-semibold mb-2">Tool</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-purple-100 rounded-lg border border-purple-300">
                Git
              </span>
              <span className="px-2 py-1 bg-purple-100 rounded-lg border border-purple-300">
                GitHub
              </span>
              <span className="px-2 py-1 bg-purple-100 rounded-lg border border-purple-300">
                Figma
              </span>
              <span className="px-2 py-1 bg-purple-100 rounded-lg border border-purple-300">
                Notion
              </span>
            </div>
          </div>

          <div className="text-left mb-4">
            <h4 className="text-lg font-semibold mb-2">AWS</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-orange-100 rounded-lg border border-orange-300">
                S3
              </span>
              <span className="px-2 py-1 bg-orange-100 rounded-lg border border-orange-300">
                Amplify
              </span>
              <span className="px-2 py-1 bg-orange-100 rounded-lg border border-orange-300">
                EC2
              </span>
            </div>
          </div>
        </div>

        {/* About Studying... with animation */}
        <div
          className="pb-4 mb-4 cursor-pointer"
          onClick={handleAboutStudyClick}
        >
          <h3 className="text-xl font-bold mb-2 border-b-2 border-gray-400 pb-2">
            HOW STUDY
          </h3>
          <ul className="list-none">
            <li className="flex justify-center">
              <span
                className={`text-2xl font-bold ${
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
      {showEmailModal && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
          onClick={closeEmailModal} // 모달 외부 클릭 시 닫히게 처리
        >
          <div
            className="bg-white text-black p-6 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // 모달 안 클릭 시 닫히지 않게
          >
            <p>E-mail이 클립보드에 복사되었습니다!</p>
          </div>
        </div>
      )}

      {/* Modal - 클릭하면 나오는 모달 */}
      {showModal && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
          onClick={closeModal} // 모달 외부 클릭 시 닫히게 처리
        >
          <div
            className="bg-white text-black p-6 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // 모달 안 클릭 시 닫히지 않게
          >
            <p>Study Details</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
