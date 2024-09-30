import React, { useState } from "react";

const workPeriod = {
  personal: {
    수록: { start: "5.24", end: "6.12" },
    내꿈은급식왕: { start: "5.8", end: "9.11" },
    CustomWidgets: { start: "7.17", end: "9.18" },
    도타임: { start: "9.17", end: "NaN" },
    수폴리오: { start: "9.20", end: "10.3" },
  },
  team: {
    수상한자판기: { start: "6.20", end: "7.15" },
    DelaN: { start: "7.16", end: "10.11" },
    갈라테이아: { start: "7.24", end: "NaN" },
    호랑이: { start: "9.12", end: "10.10" },
  },
};

const generateCalendar = (year: number, month: number): number[][] => {
  const date = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = date.getDay();
  const weeks: number[][] = [];
  let week: number[] = new Array(firstDayIndex).fill(NaN);

  for (let day = 1; day <= daysInMonth; day++) {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }

  if (week.length > 0) {
    while (week.length < 7) {
      week.push(NaN);
    }
    weeks.push(week);
  }

  return weeks;
};

const Overview: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<number>(4);
  const [currentYear, setCurrentYear] = useState<number>(2024);

  const months = ["May", "June", "July", "August", "September", "October"];

  const handlePrevMonth = () => {
    if (currentMonth === 4) {
      return;
    }
    setCurrentMonth(currentMonth - 1);
  };

  const handleNextMonth = () => {
    if (currentMonth === 9) {
      return;
    }
    setCurrentMonth(currentMonth + 1);
  };

  const weeks: number[][] = generateCalendar(currentYear, currentMonth);

  return (
    <div className="pt-10 pr-10 pb-0 pl-10 text-center">
      <h2 className="text-5xl font-bold mb-2">{months[currentMonth - 4]}</h2>
      <div className="flex justify-between mb-4">
        <button
          onClick={handlePrevMonth}
          className={`px-6 py-2 bg-gray-200 rounded ${
            currentMonth === 4 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentMonth === 4}
        >
          이전 달
        </button>
        <button
          onClick={handleNextMonth}
          className={`px-6 py-2 bg-gray-200 rounded ${
            currentMonth === 9 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentMonth === 9}
        >
          다음 달
        </button>
      </div>
      <table className="table-fixed w-full max-w-3xl mx-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
              <th
                key={day}
                className="w-1/7 border border-gray-400 py-4 text-xl"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((day, j) => (
                <td
                  key={j}
                  className="border border-gray-400 py-1 text-xl text-right align-top pr-2 h-24"
                >
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
