import React, { useState } from "react";
import data from "../data/data.json"; // 데이터 불러오기
import StudyModal from "../components/StudyModal.tsx";
import InfoList from "../components/organisms/info/InfoList.tsx";

const Info: React.FC = () => {
  const [showStudyModal, setShowStudyModal] = useState(false);

  const handleAboutStudyClick = () => {
    setShowStudyModal(true);
  };

  const infoData = data.info;

  return (
    <div className="flex flex-col min-h-full bg-gray-100 p-6">
      <div className="flex flex-col justify-center items-center flex-grow text-center bg-white rounded-lg shadow-lg p-10 border border-gray-300">
        {/* InfoList 컴포넌트에 데이터와 클릭 핸들러 전달 */}
        <InfoList infoData={infoData} onStudyClick={handleAboutStudyClick} />
      </div>

      {/* Study Modal */}
      <StudyModal
        show={showStudyModal}
        close={() => setShowStudyModal(false)}
      />
    </div>
  );
};

export default Info;
