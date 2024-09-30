import React, { useState } from "react";

const generateCalendar = (year: number, month: number): number[][] => {
  const date = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = date.getDay();
  //이중 배열 선언
  const weeks: number[][] = [];
  // 빈 날짜는 NaN 또는 빈 문자열로 채우기
  let week: number[] = new Array(firstDayIndex).fill(NaN);

  for (let day = 1; day <= daysInMonth; day++) {
    // 날짜 추가
    week.push(day);
    // 일주일이 찼으면
    if (week.length === 7) {
      // 한 주를 weeks에 추가
      weeks.push(week);
      // 새로운 주 초기화
      week = [];
    }
  }

  if (week.length > 0) {
    while (week.length < 7) {
      // 마지막 주에 빈 칸 추가
      week.push(NaN);
    }
    // 마지막 주 추가
    weeks.push(week);
  }

  return weeks;
};

const Overview: React.FC = () => {
  // May (0: Jan, 4: May)
  const [currentMonth, setCurrentMonth] = useState<number>(4);
  const [currentYear, setCurrentYear] = useState<number>(2024);

  const months = ["May", "June", "July", "August", "September", "October"];

  const handlePrevMonth = () => {
    if (currentMonth === 4) {
      // May is the start
      return;
    }
    setCurrentMonth(currentMonth - 1);
  };

  const handleNextMonth = () => {
    if (currentMonth === 9) {
      // October is the end
      return;
    }
    setCurrentMonth(currentMonth + 1);
  };

  const weeks: number[][] = generateCalendar(currentYear, currentMonth);

  return (
    <div className="p-10 text-center">
      <h2 className="text-4xl font-bold mb-6">{months[currentMonth - 4]}</h2>
      {/* 달 출력 */}
      {/* 이전 달과 다음 달로 이동하는 버튼 */}
      <div className="flex justify-between mb-6">
        <button
          onClick={handlePrevMonth}
          className={`px-4 py-2 bg-gray-200 rounded ${
            currentMonth === 4 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentMonth === 4} // May가 최소값이므로 이동 제한
        >
          이전 달
        </button>
        <button
          onClick={handleNextMonth}
          className={`px-4 py-2 bg-gray-200 rounded ${
            currentMonth === 9 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentMonth === 9} // October이 최대값이므로 이동 제한
        >
          다음 달
        </button>
      </div>
      {/* 달력 테이블 */}
      <table className="table-fixed w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
              <th key={day} className="w-1/7 border border-gray-400 py-2">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((day, j) => (
                <td key={j} className="border border-gray-400 py-2 text-center">
                  {isNaN(day) ? "" : day}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Overview;
