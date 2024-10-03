import { parseDate } from "./calendarUtils.ts";

// 특정 날짜에 해당하는 프로젝트를 찾아 반환하는 함수
export const getProjectInDay = (
  day: number,
  month: number,
  year: number,
  workPeriod: { [key: string]: { start: string; end: string } }
): string[] => {
  return Object.keys(workPeriod).filter((project) => {
    const start = parseDate(workPeriod[project].start, year);
    const end =
      workPeriod[project].end === "NaN"
        ? new Date() // 종료일이 NaN인 경우, 현재 날짜를 종료일로 처리
        : parseDate(workPeriod[project].end, year);
    const current = new Date(year, month, day);
    return current >= start && current <= end;
  });
};
