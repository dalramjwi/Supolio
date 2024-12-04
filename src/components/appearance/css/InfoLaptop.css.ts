import { style } from "@vanilla-extract/css";
import * as colors from "./colors/colors.css.ts";

// 배경 스타일
export const infobackground = style({
  background: colors.darkerBlack,
  height: "100vh", // 화면 전체 높이
  width: "100vw", // 화면 전체 너비
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  position: "relative",
});

// Desk 스타일
export const infodesk = style({
  background: colors.lightGray,
  height: "20vh", // Desk 높이
  width: "100vw", // 화면 전체 너비
  position: "fixed", // 고정된 위치
  bottom: "0", // 화면 하단에 고정
});

// 부모 컨테이너 스타일
export const laptopContainer = style({
  position: "fixed", // 창 크기와 관계없이 고정된 위치
  top: "50%", // 화면 세로 중심
  left: "50%", // 화면 가로 중심
  transform: "translate(-50%, -50%)", // 중앙 정렬
  width: "60vw", // 고정된 너비
  height: "auto", // 높이는 비율에 따라 자동 조정
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

// 노트북 스타일
export const notebook = style({
  width: "100%", // 부모 컨테이너 기준 너비
  paddingTop: "56.25%", // 16:9 비율 유지
  position: "relative",
  transform: "none",
  zIndex: 2,
});

// 디스플레이 스타일
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
});

// 키보드 스타일
export const keyboard = style({
  position: "absolute",
  bottom: "-55%", // 기본적으로 일부 가리기
  left: "0",
  height: "55%",
  width: "100%",
  backgroundColor: colors.lightBlue,
  borderRadius: "10px",
  boxShadow: `inset 0 -15px 0 0 ${colors.lightGreenGray}`,
});
