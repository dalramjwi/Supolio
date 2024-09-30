import React, { useState } from "react";

// 작업 기간 데이터
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

// 주어진 연도와 달에 대한 주차별 날짜 배열 생성
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

// 날짜를 '5.24' 형식에서 Date 객체로 변환
const parseDate = (dateStr: string, year: number) => {
  const [month, day] = dateStr.split(".").map(Number);
  return new Date(year, month - 1, day);
};

// 주어진 날짜가 작업 기간 내에 포함되는지 확인
const getProjectInDay = (
  day: number,
  month: number,
  year: number,
  workPeriod: { [key: string]: { start: string; end: string } }
) => {
  return Object.keys(workPeriod).filter((project) => {
    const start = parseDate(workPeriod[project].start, year);
    const end =
      workPeriod[project].end === "NaN"
        ? new Date()
        : parseDate(workPeriod[project].end, year);
    const current = new Date(year, month, day);
    return current >= start && current <= end;
  });
};

const projectColors: { [key: string]: string } = {
  수록: "bg-red-200",
  내꿈은급식왕: "bg-blue-200",
  CustomWidgets: "bg-green-200",
  도타임: "bg-purple-200",
  수폴리오: "bg-yellow-200",
  수상한자판기: "bg-orange-200",
  DelaN: "bg-pink-200",
  갈라테이아: "bg-indigo-200",
  호랑이: "bg-teal-200",
};

const Overview: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<number>(4); // May (0: Jan, 4: May)
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
              {week.map((day, j) => {
                const personalProjects = getProjectInDay(
                  day,
                  currentMonth,
                  currentYear,
                  workPeriod.personal
                );
                const teamProjects = getProjectInDay(
                  day,
                  currentMonth,
                  currentYear,
                  workPeriod.team
                );

                return (
                  <td
                    key={j}
                    className="relative border border-gray-400 text-xl text-right align-top pr-2 h-24"
                  >
                    {/* 날짜 표시 */}
                    {!isNaN(day) && <div className="z-10 pt-1">{day}</div>}
                    {/* 개인 프로젝트 막대 */}
                    {personalProjects.map((project, index) => (
                      <div
                        key={project}
                        className={`${projectColors[project]} absolute w-full h-4 left-0`}
                        title={project}
                        style={{ bottom: `${(index + 1) * 8}px` }}
                      >
                        <span className="text-xs">{project}</span>
                      </div>
                    ))}
                    {/* 팀 프로젝트 막대 */}
                    {teamProjects.map((project, index) => (
                      <div
                        key={project}
                        className={`${projectColors[project]} absolute w-full h-4 left-0`}
                        title={project}
                        style={{
                          bottom: `${
                            (index + personalProjects.length + 1) * 8
                          }px`,
                        }}
                      >
                        <span className="text-xs">{project}</span>
                      </div>
                    ))}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Overview;
