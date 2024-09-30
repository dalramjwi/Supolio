let year = 2024;
let month = 4;
// 해당 연도의 특정 달의 1일로 날짜 설정
const date = new Date(2024, 5, 1);
// 해당 월의 일 수 계산
const daysInMonth = new Date(year, month + 1, 0).getDate();
// 1일이 무슨 요일에 시작하는지 계산
const firstDayIndex = date.getDay();
console.log(date.toLocaleString());
console.log(date);
