import { style, globalStyle } from "@vanilla-extract/css";

// 전체 페이지 스타일
export const pageContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "azure",
  fontFamily: "'Cormorant Garamond', serif",
  letterSpacing: "1px",
  color: "#191919",
  overflow: "hidden",
  textShadow:
    "0 0 2px rgba(0, 0, 0, .5), -1px -1px 1px rgba(179, 179, 179, .5), 1px 1px 0 rgba(255, 255, 255, 0.55), 0 1px 3px white",
});

// 카드 스타일
export const card = style({
  position: "relative",
  width: "350px",
  height: "200px",
  margin: "20vh auto 0",
  padding: "20px 10px 10px",
  backgroundColor: "#f4f1eb",
  backgroundImage:
    "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
  transform: "rotateX(60deg) rotateY(0deg) rotateZ(45deg)",
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
  cursor: "pointer",
  outline: "none",
  boxShadow: "0",
  ":hover": {
    transform: "rotateX(60deg) rotateY(0deg) rotateZ(45deg) translateZ(10px)",
    boxShadow: "20px 20px 20px rgba(0, 0, 0, .4)",
  },
  ":focus": {
    transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(10px)",
    boxShadow: "0px 10px 10px rgba(0, 0, 0, .4)",
  },
});

// 카드 클릭 시 그림자 제거 및 효과
globalStyle(`${card}:focus::before`, {
  transform: "skewX(0deg) translateX(0) translateY(0)",
  height: "0",
});

globalStyle(`${card}:focus::after`, {
  transform: "skewY(0deg) translateX(0) translateY(0)",
  width: "0",
});

// 카드 깊이 효과
globalStyle(`${card}::before`, {
  content: '""',
  position: "absolute",
  width: "100%",
  height: "6px",
  bottom: 0,
  left: 0,
  backgroundColor: "grey",
  transform: "skewX(45deg) translateX(-3px) translateY(6px)",
  transition: "transform 0.4s ease, height 0.4s ease",
});

globalStyle(`${card}::after`, {
  content: '""',
  position: "absolute",
  height: "100%",
  width: "6px",
  top: 0,
  right: 0,
  backgroundColor: "grey",
  transform: "skewY(45deg) translateX(6px) translateY(-3px)",
  transition: "transform 0.4s ease, width 0.4s ease",
});
