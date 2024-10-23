import React from "react";
import InfoList from "../organisms/info/InfoList";
import data from "../../data/data.json";

const InfoTemplate: React.FC = () => {
  const infoData = data.info;
  return (
    <div className="flex flex-col min-h-full bg-gray-100 p-6">
      <div className="flex flex-col justify-center items-center flex-grow text-center bg-white rounded-lg shadow-lg p-10 border border-gray-300">
        {/* InfoList 컴포넌트에 데이터 전달 */}
        <InfoList infoData={infoData} />
      </div>
    </div>
  );
};

export default InfoTemplate;
