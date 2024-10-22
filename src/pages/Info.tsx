import React from "react";
import data from "../data/data.json";
import InfoList from "../components/organisms/info/InfoList.tsx";

const Info: React.FC = () => {
  const infoData = data.info;

  //todo css 변경 필요
  return (
    <div className="flex flex-col min-h-full bg-gray-100 p-6">
      <div className="flex flex-col justify-center items-center flex-grow text-center bg-white rounded-lg shadow-lg p-10 border border-gray-300">
        {/* InfoList 컴포넌트에 데이터 전달 */}
        <InfoList infoData={infoData} />
      </div>
    </div>
  );
};

export default Info;
