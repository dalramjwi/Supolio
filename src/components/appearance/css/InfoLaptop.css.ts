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
      height: "30vh", // 태블릿에서 높이 증가
    },
    "screen and (max-width: 480px)": {
      height: "35vh", // 모바일에서 높이 증가
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
  zIndex: 10, // 최상단으로 설정
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
  aspectRatio: "16/10", // 노트북에 더 적합한 비율
  zIndex: 10,
});

// Display style
export const display = style({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  background: `linear-gradient(30deg, ${colors.darkGray} 0%, ${colors.darkGray} 50%, ${colors.darkerGray} 50%, ${colors.darkerGray} 100%)`,
  borderRadius: "10px",
  boxSizing: "border-box",
  border: `25px solid ${colors.darkSlateGray}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media": {
    "screen and (max-width: 768px)": {
      border: `20px solid ${colors.darkSlateGray}`,
    },
    "screen and (max-width: 480px)": {
      border: `15px solid ${colors.darkSlateGray}`,
    },
  },
});

// Keyboard style
export const keyboard = style({
  position: "absolute",
  left: "0",
  width: "100%",
  backgroundColor: colors.lightBlue,
  borderRadius: "10px",
  boxShadow: `inset 0 -15px 0 0 ${colors.lightGreenGray}`,
  bottom: "-40%",
  height: "40%",
  "@media": {
    "screen and (max-width: 768px)": {
      bottom: "-35%",
      height: "35%",
    },
    "screen and (max-width: 480px)": {
      bottom: "-30%",
      height: "30%",
    },
  },
});

// Display content style
export const displayContent = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  gap: "10px",
  color: colors.lightGray,
  "@media": {
    "screen and (max-width: 768px)": {
      gap: "8px",
    },
    "screen and (max-width: 480px)": {
      gap: "6px",
    },
  },
});

// 컨테이너 스케일 조정
export const responsiveContainer = style({
  position: "relative",
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  overflow: "visible", // 노트북이 desk 위에 올라가도록
  zIndex: 10,
  "@media": {
    "screen and (max-width: 1440px)": {
      transform: "scale(0.95)",
    },
    "screen and (max-width: 1024px)": {
      transform: "scale(0.85)",
    },
    "screen and (max-width: 768px)": {
      transform: "scale(0.75)",
    },
    "screen and (max-width: 480px)": {
      transform: "scale(0.65)",
    },
  },
});
