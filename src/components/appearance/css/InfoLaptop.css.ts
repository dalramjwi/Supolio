import { style } from "@vanilla-extract/css";
import * as colors from "./colors/colors.css.ts";

// Background style
export const infobackground = style({
  background: colors.darkerBlack,
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  position: "relative",
  zIndex: 1,
});

// Desk style
export const infodesk = style({
  background: colors.lightGray,
  height: "25vh", // 데스크탑 기준 높이
  width: "100vw",
  position: "fixed",
  bottom: "0",
  zIndex: 2,
  "@media": {
    "screen and (max-width: 768px)": {
      height: "30vh",
    },
    "screen and (max-width: 480px)": {
      height: "35vh",
    },
  },
});

// Parent container style
export const laptopContainer = style({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  maxWidth: "1200px",
  minWidth: "300px",
  height: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 10,
  "@media": {
    "screen and (max-width: 768px)": {
      width: "80vw",
      top: "55%",
    },
    "screen and (max-width: 480px)": {
      width: "90vw",
      top: "60%",
    },
  },
});

// Notebook style
export const notebook = style({
  width: "100%",
  position: "relative",
  aspectRatio: "16/10",
  zIndex: 10,
});

// Display style
export const display = style({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  background: `url(https://images.frandroid.com/wp-content/uploads/2019/12/windows-10-wallpaper.jpg) center/cover no-repeat`,
  borderRadius: "10px",
  boxSizing: "border-box",
  border: `25px solid ${colors.darkSlateGray}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "20px",
  "@media": {
    "screen and (max-width: 768px)": {
      border: `20px solid ${colors.darkSlateGray}`,
    },
    "screen and (max-width: 480px)": {
      border: `15px solid ${colors.darkSlateGray}`,
    },
  },
});

// 아이콘 스타일 (세로 정렬)
export const desktop = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "20px",
  color: "white",
});

export const iconDesktop = style({
  width: "70px",
  margin: "10px",
  textAlign: "center",
  cursor: "pointer",
  color: "white",
  marginLeft: "2vw",
  marginTop: "2vw",
});

export const iconDesktopLink = style({
  textDecoration: "none",
  color: "white",
});

export const iconDesktopImg = style({
  width: "48px",
  height: "48px",
});

export const iconDesktopLabel = style({
  fontSize: "11px",
  display: "block",
  marginTop: "5px",
});

// 크롬 팝업 스타일
export const chromePopup = style({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "900px",
  height: "500px",
  background: "white",
  border: "2px solid #004275",
  zIndex: 10,
  overflow: "hidden",
  display: "none",
});

export const chromePopupVisible = style({
  display: "block",
});

export const iframe = style({
  width: "100%",
  height: "100%",
  border: "none",
});

// 태스크바 스타일
// export const taskbar = style({
//   position: "absolute",
//   bottom: 0,
//   height: "43px",
//   width: "100%",
//   background: "#004172",
//   display: "flex",
//   justifyContent: "space-between",
// });
// taskbar + blur 오버레이 통합 구성
// InfoLaptop.css.ts – taskbar 관련 style 수정 및 추가
export const taskbar = style({
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "43px",
  zIndex: 10,
  overflow: "hidden",
});

// 블러 배경 (더 강한 투명 느낌)
export const taskbarBlurOverlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage:
    "url('https://images.frandroid.com/wp-content/uploads/2019/12/windows-10-wallpaper.jpg')",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  filter: "blur(6px)",
  opacity: 0.5,
  zIndex: 1,
});

// 상단 1px 검정 테두리 + 투명 그라데이션
export const taskbarOverlayTint = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background:
    "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 100%)",
  borderTop: "1px solid black",
  zIndex: 2,
});

// 실제 아이콘/시간 등 내용 표시 영역
export const taskbarContent = style({
  position: "relative",
  zIndex: 3,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const taskbarLeft = style({
  display: "flex",
  alignItems: "center",
});

export const taskbarRight = style({
  display: "flex",
  alignItems: "center",
});

export const taskbarIcon = style({
  width: "49px",
  height: "43px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "contain",
  cursor: "pointer",
});

export const datetime = style({
  color: "white",
  textAlign: "center",
  fontSize: "11.3px",
  lineHeight: 1.2,
  padding: "0 10px",
});
