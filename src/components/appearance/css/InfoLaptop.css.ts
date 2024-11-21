import { style } from "@vanilla-extract/css";

// 색상 변수
const colors = {
  displayBackgroundStart: "#2C2C2C",
  displayBackgroundEnd: "#383838",
  arrowColor: "#A8A8A8",
  cursor: "rgba(0, 0, 0, 0.5)",
  keyboardBackground: "#E1E6E8",
  keyBackground: "#4E555A",
  trackpadBackground: "#C7D3D7",
};
// 배경 스타일
export const infobackground = style({
  background: "#1B1A1F",
  height: "100vh", // 화면 전체 높이
  width: "100vw", // 화면 전체 너비
  display: "flex", // 정렬을 위해 flex 사용
  justifyContent: "center", // 중앙 정렬
  alignItems: "center", // 중앙 정렬
  overflow: "hidden", // 배경 넘침 방지
  position: "relative",
});
export const infodesk = style({
  background: "#B6B6B6",
  height: "20vh", // 화면 전체 높이
  width: "100vw", // 화면 전체 너비
  position: "absolute",
  top: "90vh",
});
// 부모 컨테이너 스타일
export const laptopContainer = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw", // 전체 화면에서 90% 너비
  height: "90vh", // 전체 화면에서 90% 높이
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

// 노트북 스타일
export const notebook = style({
  height: "90%",
  width: "85%",
  position: "relative",
  "@media": {
    "screen and (max-width: 1350px)": {
      // tablet
    },
    "screen and (max-width: 980px)": {
      // smartphone
    },
    "screen and (max-width: 679px)": { display: "none" },
    "screen and (max-width: 500px)": {
      display: "none",
    },
  },
});

// 디스플레이 스타일
export const display = style({
  position: "relative",
  height: "83.5vh",
  width: "100%",
  background: `linear-gradient(30deg, ${colors.displayBackgroundStart} 0%, ${colors.displayBackgroundStart} 50%, ${colors.displayBackgroundEnd} 50%, ${colors.displayBackgroundEnd} 100%)`,
  borderRadius: "10px",
  boxSizing: "border-box",
  border: "25px solid #515555",
});

// 키보드 스타일
export const keyboard = style({
  position: "relative",
  height: "232px",
  width: "100%",
  backgroundColor: colors.keyboardBackground,
  borderRadius: "10px",
  boxShadow: `inset 0 -15px 0 0 #959fa0`,
});
