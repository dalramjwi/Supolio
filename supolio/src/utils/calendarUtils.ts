// 날짜 문자열을 Date 객체로 변환하는 함수
export const parseDate = (dateStr: string, year: number): Date => {
  //날짜 문자열을 .으로 분리해 월과 일로 분리
  const [month, day] = dateStr.split(".").map(Number);
  return new Date(year, month - 1, day);
};

// 연도와 월을 입력받아 해당 월의 달력을 2차원 배열로 생성하는 함수
export const generateCalendar = (year: number, month: number): number[][] => {
  // month의 첫 번째 날짜
  const date = new Date(year, month, 1);
  // 해당 월의 마지막 날짜
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // 달력에서 첫째 날이 주의 몇 번째 요일에 해당
  const firstDayIndex = date.getDay();
  // 2차원 배열인 weeks 배열을 생성
  const weeks: number[][] = [];
  // 첫 주는 첫날 이전에 빈 칸을 넣기 위해 firstDayIndex만큼 NaN 삽입
  let week: number[] = new Array(firstDayIndex).fill(NaN);

  for (let day = 1; day <= daysInMonth; day++) {
    week.push(day);
    // 한 주는 7일로 구성되므로, 배열의 길이가 7이 되면 주가 완료
    if (week.length === 7) {
      // 완료된 주(week)를 weeks 배열에 추가
      weeks.push(week);
      week = [];
    }
  }
  // 위 반복문이 끝났을 때 마지막 주의 남은 칸을 NaN으로 채워서 7일 제작
  if (week.length > 0) {
    while (week.length < 7) {
      week.push(NaN);
    }
    // 마지막 주를 weeks 배열에 추가
    weeks.push(week);
  }

  return weeks;
};
