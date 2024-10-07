import { parseDate } from "./calendarUtils.ts";

// 특정 날짜에 해당하는 프로젝트를 찾아 반환하는 함수
// 주어진 날짜(day, month, year)에 해당하는 프로젝트들을 찾아 리스트로 반환
export const getProjectInDay = (
  day: number,
  month: number,
  year: number,
  workPeriod: { [key: string]: { start: string; end: string } }
): string[] => {
  // workPeriod 객체의 키(프로젝트 이름)를 순회하면서 해당 날짜에 포함되는 프로젝트를 찾습니다.
  return Object.keys(workPeriod).filter((project) => {
    // 프로젝트 시작일을 Date 객체로 변환
    const start = parseDate(workPeriod[project].start, year);
    // 프로젝트 종료일을 Date 객체로 변환. 종료일이 "NaN"일 경우, 현재 날짜를 종료일로 간주
    const end =
      workPeriod[project].end === "NaN"
        ? new Date() // 종료일이 NaN인 경우, 현재 날짜를 종료일로 처리
        : parseDate(workPeriod[project].end, year);
    // 현재 주어진 날짜를 Date 객체로 변환
    const current = new Date(year, month, day);
    // 현재 날짜가 시작일과 종료일 사이에 있으면 해당 프로젝트를 반환 리스트에 포함
    return current >= start && current <= end;
  });
};
