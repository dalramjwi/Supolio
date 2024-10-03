// 날짜 문자열을 Date 객체로 변환하는 함수
export const parseDate = (dateStr: string, year: number): Date => {
  const [month, day] = dateStr.split(".").map(Number);
  return new Date(year, month - 1, day);
};

// 연도와 월을 입력받아 해당 월의 달력을 배열로 생성하는 함수
export const generateCalendar = (year: number, month: number): number[][] => {
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
