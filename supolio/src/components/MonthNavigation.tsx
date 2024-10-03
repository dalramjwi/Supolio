import React from "react";

interface Props {
  currentMonth: number;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
}

// '이전 달'과 '다음 달' 버튼을 렌더링하는 컴포넌트
const MonthNavigation: React.FC<Props> = ({
  currentMonth,
  handlePrevMonth,
  handleNextMonth,
}) => {
  return (
    <div className="flex justify-end mb-4">
      <button
        onClick={handlePrevMonth}
        className={`px-6 py-2 bg-gray-200 rounded ${
          currentMonth === 4 ? "opacity-30 cursor-not-allowed" : "opacity-100"
        }`}
        disabled={currentMonth === 4}
      >
        이전 달
      </button>
      <button
        onClick={handleNextMonth}
        className={`px-6 py-2 bg-gray-200 rounded ${
          currentMonth === 9 ? "opacity-30 cursor-not-allowed" : "opacity-100"
        }`}
        disabled={currentMonth === 9}
      >
        다음 달
      </button>
    </div>
  );
};

export default MonthNavigation;
