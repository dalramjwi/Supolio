import React, { useState } from "react";
import { workPeriod } from "../data/overview.ts";
import { projectColors } from "../data/overviewCss.ts";
import { getProjectInDay } from "../utils/projectUtils.ts";
import MonthNavigation from "../components/MonthNavigation.tsx";
import ProjectList from "../components/ProjectList.tsx";
import { generateCalendar } from "../utils/calendarUtils.ts";
const Overview: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<number>(4); // May
  const [currentYear, setCurrentYear] = useState<number>(2024);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const months = ["May", "June", "July", "August", "September", "October"];

  // 이전 달로 이동하는 함수
  const handlePrevMonth = () => {
    if (currentMonth > 4) {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // 다음 달로 이동하는 함수
  const handleNextMonth = () => {
    if (currentMonth < 9) {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // 프로젝트 클릭 시 해당 프로젝트로 달력을 이동시키는 함수
  const handleProjectClick = (project: string) => {
    setSelectedProject(project);
    const projectStart = new Date(
      workPeriod.personal[project]?.start || workPeriod.team[project]?.start
    );
    setCurrentMonth(projectStart.getMonth());
    setCurrentYear(projectStart.getFullYear());
  };

  // 현재 연도와 월에 맞는 달력 배열 생성
  const weeks: number[][] = generateCalendar(currentYear, currentMonth);

  return (
    <div className="flex justify-center items-end">
      <div className="pt-10 pr-10 pb-0 pl-10 text-center">
        <h2 className="text-5xl font-bold mb-2 ml-52">
          {months[currentMonth - 4]}
        </h2>

        {/* 이전/다음 달 버튼 */}
        <MonthNavigation
          currentMonth={currentMonth}
          handlePrevMonth={handlePrevMonth}
          handleNextMonth={handleNextMonth}
        />

        <div className="flex flex-row gap-10">
          {/* 프로젝트 리스트 */}
          <ProjectList handleProjectClick={handleProjectClick} />

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

                      {/* 선택된 프로젝트가 있을 때 해당 프로젝트 표시 */}
                      {selectedProject &&
                        getProjectInDay(
                          day,
                          currentMonth,
                          currentYear,
                          workPeriod.personal
                        )
                          .filter((project) => project === selectedProject)
                          .map((project) => (
                            <div
                              key={project}
                              className={`${projectColors[project]} absolute w-full h-6 left-0`}
                              title={project}
                              style={{
                                top: "60%",
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
                          .map((project) => (
                            <div
                              key={project}
                              className={`${projectColors[project]} absolute w-full h-6 left-0`}
                              title={project}
                              style={{
                                top: "60%",
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
