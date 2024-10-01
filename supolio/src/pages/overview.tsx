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

const projectColors: { [key: string]: string } = {
  수록: "bg-yellow-400",
  내꿈은급식왕: "bg-green-400",
  CustomWidgets: "bg-teal-400",
  도타임: "bg-blue-400",
  수폴리오: "bg-purple-400",
  수상한자판기: "bg-orange-400",
  DelaN: "bg-pink-400",
  갈라테이아: "bg-indigo-400",
  호랑이: "bg-green-400",
};

const parseDate = (dateStr: string, year: number) => {
  const [month, day] = dateStr.split(".").map(Number);
  return new Date(year, month - 1, day);
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

const Overview: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<number>(4); // May (0: Jan, 4: May)
  const [currentYear, setCurrentYear] = useState<number>(2024);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const months = ["May", "June", "July", "August", "September", "October"];

  const handlePrevMonth = () => {
    if (currentMonth > 4) {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth < 9) {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleProjectClick = (project: string) => {
    setSelectedProject(project);
    const projectStart = parseDate(
      workPeriod.personal[project]?.start || workPeriod.team[project]?.start,
      currentYear
    );
    setCurrentMonth(projectStart.getMonth());
    setCurrentYear(projectStart.getFullYear());
  };

  const weeks: number[][] = generateCalendar(currentYear, currentMonth);

  return (
    <div className="flex justify-center items-end">
      {/* 달력 및 이전/다음 달 버튼 */}
      <div className="pt-10 pr-10 pb-0 pl-10 text-center">
        <h2 className="text-5xl font-bold mb-2 ml-52">
          {months[currentMonth - 4]}
        </h2>
        <div className="flex justify-end mb-4 ">
          <button
            onClick={handlePrevMonth}
            className={`px-6 py-2 bg-gray-200 rounded ${
              currentMonth === 4
                ? "opacity-30 cursor-not-allowed"
                : "opacity-100"
            }`}
            disabled={currentMonth === 4}
          >
            이전 달
          </button>
          <button
            onClick={handleNextMonth}
            className={`px-6 py-2 bg-gray-200 rounded ${
              currentMonth === 9
                ? "opacity-30 cursor-not-allowed"
                : "opacity-100"
            }`}
            disabled={currentMonth === 9}
          >
            다음 달
          </button>
        </div>
        <div className="flex flex-row gap-10">
          {/* 프로젝트 리스트 */}
          <div className="flex flex-col justify-center gap-4 pl-8">
            {/* padding-left을 추가하여 여백 유지 */}
            {Object.keys(projectColors).map((project) => (
              <div
                key={project}
                className={`p-3 text-black rounded flex items-center justify-between cursor-pointer ${projectColors[project]}`}
                onClick={() => handleProjectClick(project)}
              >
                {project}
                <span>▶</span>
              </div>
            ))}
          </div>
          {/* 달력 */}
          <table className="table-fixed w-full max-w-3xl mx-auto border-collapse border border-gray-400">
            <thead>
              <tr>
                {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                  (day) => (
                    <th
                      key={day}
                      className="w-1/7 border border-gray-400 py-4 text-xl"
                    >
                      {day}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {weeks.map((week, i) => (
                <tr key={i}>
                  {week.map((day, j) => (
                    <td
                      key={j}
                      className="relative border border-gray-400 text-xl text-right align-top pr-2 h-24"
                    >
                      {!isNaN(day) && <div className="z-10 pt-1">{day}</div>}
                      {/* 선택된 프로젝트가 있을 때만 프로젝트 표시 */}
                      {selectedProject &&
                        getProjectInDay(
                          day,
                          currentMonth,
                          currentYear,
                          workPeriod.personal
                        )
                          .filter((project) => project === selectedProject)
                          .map((project, index) => (
                            <div
                              key={project}
                              className={`${projectColors[project]} absolute w-full h-6 left-0`} // 막대 높이 유지
                              title={project}
                              style={{
                                top: "60%", // 막대 바를 살짝 아래로 이동
                                transform: "translateY(-50%)",
                              }}
                            ></div>
                          ))}
                      {selectedProject &&
                        getProjectInDay(
                          day,
                          currentMonth,
                          currentYear,
                          workPeriod.team
                        )
                          .filter((project) => project === selectedProject)
                          .map((project, index) => (
                            <div
                              key={project}
                              className={`${projectColors[project]} absolute w-full h-6 left-0`} // 막대 높이 유지
                              title={project}
                              style={{
                                top: "60%", // 막대 바를 살짝 아래로 이동
                                transform: "translateY(-50%)",
                              }}
                            ></div>
                          ))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Overview;
