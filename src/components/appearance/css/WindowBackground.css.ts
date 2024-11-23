import { style, globalStyle, keyframes } from "@vanilla-extract/css";
import * as colors from "./colors/colors.css.ts";

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
  backgroundColor: colors.darkerBlack,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1,
});

// 창문 밖 배경 스타일
export const outsideBackground = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: colors.darkerBlack,
  zIndex: -2,
});

// 창문 스타일
export const window = style({
  height: "42vh", // 원래의 70vh에서 40% 축소
  width: "34.8vh", // 원래의 58vh에서 40% 축소
  backgroundColor: colors.deepDarkBlue,
  borderRadius: "50% 50% 0 0 / 40% 40% 0 0",
  overflow: "hidden",
  position: "absolute",
  zIndex: 1,
  top: "2vw",
  left: "7vw",
});

globalStyle(`${window}::before`, {
  content: "",
  position: "absolute",
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
  border: "1.8vh solid", // 원래의 3vh에서 축소
  borderColor: colors.lightGray,
  boxShadow: `inset 0 0 0 0.6vh ${colors.lightGreenGray}`, // 원래의 1vh에서 축소
});

globalStyle(`${window}::after`, {
  content: "",
  position: "absolute",
  width: "calc(100% - 3.4vh)",
  height: "2.5vh",
  borderBottom: "2vh solid",
  borderColor: colors.lightGray,
  boxShadow: `inset 0 0 0 1vh ${colors.lightGreenGray}`,
  top: "55%",
  left: "1.7vh",
  zIndex: 5,
});

// 창문 아래 받침대 스타일
export const windowSill = style({
  position: "absolute",
  top: "71vh",
  width: "39.6vh",
  height: "2.4vh",
  borderBottom: "1.8vh solid",
  borderColor: colors.lightGray,
  boxShadow: `inset 3vh 0 0 0 ${colors.lightGreenGray}, inset -3vh 0 0 0 ${colors.lightGreenGray}, inset 0 0 0 1vh ${colors.lightGreenGray}`,
  zIndex: 1,
});

// 구름 스타일
export const cloud = style({
  width: "6vh",
  height: "2vh",
  background: colors.purpleTransparent,
  color: colors.purpleTransparent,
  top: "14vh",
  left: "18vh",
  borderRadius: "0.5vh",
  boxShadow:
    "-4vh -1.5vh 0 currentColor, 0 -1.5vh 0 currentColor, 2vh -1.5vh 0 currentColor, -10vh 1.5vh 0 currentColor, -5vh 1.5vh 0 currentColor, 0vh 1.5vh 0 currentColor, 5vh 1.5vh 0 currentColor, -6vh 3vh 0 currentColor, -8vh 4.5vh 0 currentColor, -4vh 4.5vh 0 currentColor, -4vh 4.5vh 0 currentColor, 3vh 6vh 0 currentColor, 1vh 7.5vh 0 currentColor, 1vh 4.5vh 0 currentColor",
  opacity: 0.6,
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

// globalStyle(`${cloud}::before`, {
//   transform: "translate3d(-30vh, 20vh, 0)",
// });

globalStyle(`${cloud}::after`, {
  transform: "translate3d(-60vh, -18vh, 0)",
});

// 별들 스타일
export const stars = style({
  position: "absolute",
  width: "0.35vh",
  height: "0.35vh",
  borderRadius: "50%",
  background: colors.lightYellow,
  top: "40%",
  left: "54%",
  zIndex: -3,
  boxShadow: `
    20vh 10vh 0 ${colors.lightYellow}, -10vh 15vh 0 ${colors.lightYellow}, 15vh 20vh 0 ${colors.lightYellow}, 
    -20vh -10vh 0 ${colors.lightYellow}, -30vh 5vh 0 ${colors.lightYellow}, 25vh -15vh 0 ${colors.lightYellow},
    -15vh -20vh 0 ${colors.lightYellow}, 10vh -30vh 0 ${colors.lightYellow}, 5vh 25vh 0 ${colors.lightYellow},
    -25vh 20vh 0 ${colors.lightYellow}, 30vh 15vh 0 ${colors.lightYellow}, -15vh 10vh 0 ${colors.lightYellow}
  `,
  animation: `${starTwinkle} 3s ease-in-out infinite`,
});

// 달 스타일
export const moon = style({
  width: "7vh",
  height: "7vh",
  borderRadius: "50%",
  position: "absolute",
  top: "25%",
  left: "63%",
  backgroundColor: colors.lightDarkYellow,
  zIndex: -2,
  filter: "blur(1px)",
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
  height: "6vh",
  background: colors.darkerBlackTransparent,
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
  top: "17vh",
  right: "2.5vw",
  backgroundColor: colors.lightBlue,
  color: colors.darkBlackGray,
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
  "@media": {
    "screen and (max-width: 1350px)": {
      // tablet
    },
    "screen and (max-width: 780px)": {
      // smartphone
    },
    "screen and (max-width: 679px)": {},
    "screen and (max-width: 559px)": {
      display: "none",
    },
  },
});

// 상단의 원형 점
export const calendarDot = style({
  width: "0.5vh",
  height: "0.5vh",
  borderRadius: "50%",
  backgroundColor: colors.blackGray,
  margin: "0.5vh auto",
});

// 점선 스타일
export const calendarDashedLine = style({
  width: "90%",
  height: "0",
  borderTop: `1px dashed ${colors.blackLightGray}`,
  margin: "0.5vh 0",
});

// 겹쳐진 종이 효과
export const calendarShadowPaper = style({
  position: "relative",
  top: "1vh",
  width: "12vh",
  height: "0.5vh",
  backgroundColor: colors.semisemiTransparent,
  borderRadius: "2px",
  zIndex: 0,
});

// 하단 선 스타일
export const calendarBottomLine = style({
  marginTop: "auto",
  width: "80%",
  height: "0.3vh",
  background: `linear-gradient(to right, transparent 25%, ${colors.transparent} 25%, ${colors.transparent} 75%, transparent 75%)`,
  backgroundSize: "100% 0.1vh",
  boxShadow: "0 1px 0 rgba(0, 0, 0, 0.1), 0 2px 0 rgba(0, 0, 0, 0.05)",
  marginBottom: "1vh",
});

export const calendarHeader = style({
  fontSize: "2vh",
  fontWeight: "bold",
  color: colors.darkBlackGray,
  textAlign: "center",
  marginTop: "3vh",
});

export const background = style({
  // position: "relative",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
});
