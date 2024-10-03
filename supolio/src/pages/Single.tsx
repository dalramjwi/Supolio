import React from "react";

const Single: React.FC = () => {
  return (
    <div className="w-52 h-72 bg-gray-200 rounded-lg shadow-lg p-4 flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <div className="text-sm font-bold">이름</div>
        {/* 스택 : 반복 */}
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
        </div>
      </div>

      {/* 이미지 영역 */}
      <div className="w-full h-40 bg-white rounded-md mt-4 flex items-center justify-center">
        이미지
      </div>

      {/* 상세 설명 */}
      <div className="w-full text-center bg-gray-600 text-white font-bold py-2 rounded mt-4">
        상세설명
      </div>
    </div>
  );
};

export default Single;
