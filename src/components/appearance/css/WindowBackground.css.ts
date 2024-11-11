import { style, globalStyle, keyframes } from "@vanilla-extract/css";

// 색상 변수 정의
const colors = {
  wall: "#322c3a",
  sky: "#3a2e5d",
  star: "wheat",
  frame: "#201c26",
  moon: "#eacd97",
  cloud: "#322751",
  frameShadow: "#75637e",
  bush: "#131515",
  calendarBackground: "#443f4a",
  calendarText: "#1c1c1c",
  lightGlow: "#f4e1b5",
  calendarDot: "#000000",
  calendarDashedLine: "#1c1c1c",
  calendarShadow: "rgba(0, 0, 0, 0.2)",
  calendarBottomLineDark: "#2e2e2e",
};

// 구름 애니메이션 키프레임
const cloudAnimation = keyframes({
  "0%": { transform: "translate3d(-27vh, 0, 0)" },
  "100%": { transform: "translate3d(100vh, 0, 0)" },
});

// 별 반짝이는 애니메이션
const starTwinkle = keyframes({
  "0%, 100%": { opacity: 1 },
  "50%": { opacity: 0.5 },
});

// 방 스타일
export const room = style({
  position: "relative",
  height: "100vh",
  overflow: "hidden",
  backgroundColor: colors.wall,
  backgroundImage:
    "repeating-linear-gradient(to right, #aaa, #aaa 3vh, #bbb 3vh, #bbb 6vh)",
  backgroundBlendMode: "multiply",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

// 창문 밖 배경 스타일
export const outsideBackground = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: colors.sky,
  zIndex: -2,
});

// 창문 스타일
export const window = style({
  height: "70vh",
  width: "58vh",
  backgroundColor: colors.sky,
  borderRadius: "50% 50% 0 0 / 40% 40% 0 0",
  overflow: "hidden",
  position: "relative",
  zIndex: 1,
});

globalStyle(`${window}::before`, {
  content: "",
  position: "absolute",
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
  border: "3vh solid",
  borderColor: colors.frame,
  boxShadow: `inset 0 0 0 1vh ${colors.frameShadow}`,
});

globalStyle(`${window}::after`, {
  content: "",
  position: "absolute",
  width: "calc(100% - 6vh)",
  height: "3vh",
  borderBottom: "2vh solid",
  borderColor: colors.frame,
  boxShadow: `inset 0 0 0 1vh ${colors.frameShadow}`,
  top: "55%",
  left: "3vh",
  zIndex: 5,
});

// 창문 아래 받침대 스타일
export const windowSill = style({
  position: "absolute",
  top: "85vh",
  width: "66vh",
  height: "4vh",
  borderBottom: "3vh solid",
  borderColor: colors.frame,
  boxShadow: `inset 5vh 0 0 0 ${colors.frameShadow}, inset -5vh 0 0 0 ${colors.frameShadow}, inset 0 0 0 1vh ${colors.frameShadow}`,
  zIndex: 1,
});

// 구름 스타일
export const cloud = style({
  width: "6vh",
  height: "2vh",
  background: colors.cloud,
  color: colors.cloud,
  top: "23vh",
  left: "20vh",
  borderRadius: "0.5vh",
  boxShadow:
    "-4vh -1.5vh 0 currentColor, 0 -1.5vh 0 currentColor, 2vh -1.5vh 0 currentColor, -10vh 1.5vh 0 currentColor, -5vh 1.5vh 0 currentColor, 0vh 1.5vh 0 currentColor, 5vh 1.5vh 0 currentColor, -6vh 3vh 0 currentColor, -8vh 4.5vh 0 currentColor, -4vh 4.5vh 0 currentColor, -4vh 4.5vh 0 currentColor, 3vh 6vh 0 currentColor, 1vh 7.5vh 0 currentColor, 1vh 4.5vh 0 currentColor",
  opacity: 0.8,
  zIndex: -1,
  position: "absolute",
  animation: `${cloudAnimation} 40s linear infinite`,
});

globalStyle(`${cloud}::before, ${cloud}::after`, {
  content: '""',
  boxShadow: "inherit",
  background: "inherit",
  width: "100%",
  height: "100%",
  position: "absolute",
});

globalStyle(`${cloud}::before`, {
  transform: "translate3d(-30vh, 20vh, 0)",
});

globalStyle(`${cloud}::after`, {
  transform: "translate3d(-60vh, -18vh, 0)",
});

// 별들 스타일
export const stars = style({
  position: "absolute",
  width: "0.35vh",
  height: "0.35vh",
  borderRadius: "50%",
  background: colors.star,
  top: "38%",
  left: "64%",
  zIndex: -3,
  boxShadow: `
    20vh 10vh 0 ${colors.star}, -10vh 15vh 0 ${colors.star}, 15vh 20vh 0 ${colors.star}, 
    -20vh -10vh 0 ${colors.star}, -30vh 5vh 0 ${colors.star}, 25vh -15vh 0 ${colors.star},
    -15vh -20vh 0 ${colors.star}, 10vh -30vh 0 ${colors.star}, 5vh 25vh 0 ${colors.star},
    -25vh 20vh 0 ${colors.star}, 30vh 15vh 0 ${colors.star}, -15vh 10vh 0 ${colors.star}
  `,
  animation: `${starTwinkle} 3s ease-in-out infinite`,
});

// 달 스타일
export const moon = style({
  width: "8vh",
  height: "8vh",
  borderRadius: "50%",
  position: "absolute",
  top: "19%",
  left: "63%",
  backgroundColor: colors.moon,
  zIndex: -2,
  filter: "blur(2px)",
});

// 부시 흔들림 애니메이션 키프레임
const bushWobble = keyframes({
  "0%, 100%": { transform: "translateX(0) scale(1)" },
  "50%": { transform: "translateX(-0.3vh) scale(1.005)" },
  "25%, 75%": { transform: "translateX(0.3vh) scale(0.995)" },
});

// 부시 스타일
export const bush = style({
  width: "160vh",
  height: "9vh",
  background: colors.bush,
  borderRadius: "50% 50% 0 0",
  position: "absolute",
  bottom: "5%",
  left: "0%",
  boxShadow:
    "-6vh 2vh 0 -2vh currentColor, -12vh 2vh 0 -2vh currentColor, -18vh 3vh 0 -3vh currentColor",
  zIndex: -3,
  animation: `${bushWobble} 5s ease-in-out infinite`, // 부시 흔들림 애니메이션 추가
});

// 달력 스타일
export const calendar = style({
  position: "absolute",
  top: "45vh",
  right: "25vw",
  backgroundColor: colors.calendarBackground,
  color: colors.calendarText,
  width: "12vh",
  height: "16vh",
  borderRadius: "2px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  fontFamily: "serif",
  fontSize: "1.8vh",
  textAlign: "center",
  padding: "1vh 0",
  zIndex: 1,
});

// 상단의 원형 점
export const calendarDot = style({
  width: "0.5vh",
  height: "0.5vh",
  borderRadius: "50%",
  backgroundColor: colors.calendarDot,
  margin: "0.5vh auto",
});

// 점선 스타일
export const calendarDashedLine = style({
  width: "90%",
  height: "0",
  borderTop: `1px dashed ${colors.calendarDashedLine}`,
  margin: "0.5vh 0",
});

// 겹쳐진 종이 효과
export const calendarShadowPaper = style({
  position: "relative",
  top: "2vh",
  width: "12vh",
  height: "0.5vh",
  backgroundColor: colors.calendarShadow,
  borderRadius: "2px",
  zIndex: 0,
});

// 하단 선 스타일
export const calendarBottomLine = style({
  marginTop: "auto",
  width: "80%",
  height: "0.3vh",
  background: `linear-gradient(to right, transparent 25%, ${colors.calendarBottomLineDark} 25%, ${colors.calendarBottomLineDark} 75%, transparent 75%)`,
  backgroundSize: "100% 0.1vh",
  boxShadow: "0 1px 0 rgba(0, 0, 0, 0.1), 0 2px 0 rgba(0, 0, 0, 0.05)",
  marginBottom: "1vh",
});

export const calendarHeader = style({
  fontSize: "2vh",
  fontWeight: "bold",
  color: colors.calendarText,
  textAlign: "center",
});
