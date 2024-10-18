import React from "react";
import Div from "../atoms/Div.tsx";
const AboutMeSection: React.FC = () => {
  return (
    <Div className="flex flex-col justify-center items-center flex-grow text-center bg-white rounded-lg shadow-lg p-6 border border-gray-300 relative z-10">
      프로젝트 목록을 여기에 표시합니다.
    </Div>
  );
};

export default AboutMeSection;
