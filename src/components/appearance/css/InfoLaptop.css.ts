import { style } from "@vanilla-extract/css";
import * as colors from "./colors/colors.css.ts";

// 배경 스타일
export const infobackground = style({
  background: colors.darkerBlack,
  height: "100vh", // 화면 전체 높이
  width: "100vw", // 화면 전체 너비
  display: "flex", // 정렬을 위해 flex 사용
  justifyContent: "center", // 중앙 정렬
  alignItems: "center", // 중앙 정렬
  overflow: "hidden", // 배경 넘침 방지
  position: "relative",
});

// Desk 스타일
export const infodesk = style({
  background: colors.lightGray,
  height: "20vh", // Desk 높이
  width: "100vw", // 화면 전체 너비
  position: "absolute",
  top: "90vh", // Desk 위치
});

// 부모 컨테이너 스타일
export const laptopContainer = style({
  position: "absolute",
  bottom: "5vh", // 기본적으로 화면 하단에서 약간 띄움
  left: "50%",
  transform: "translateX(-50%)", // X축 중앙 정렬
  width: "85vw", // 부모 요소 너비
  height: "auto", // 높이는 내용물에 맞게 조정
  display: "flex",
  justifyContent: "center", // 중앙 정렬
  alignItems: "flex-end", // 아래쪽 정렬
  "@media": {
    "screen and (max-width: 768px)": {
      bottom: "0", // 모바일 화면에서는 더 아래로 붙임
    },
    "screen and (max-width: 480px)": {
      bottom: "-5vh", // 작은 화면에서는 더 많이 가려지도록 조정
    },
  },
});

// 노트북 스타일
export const notebook = style({
  width: "100%", // 부모 컨테이너 기준 크기
  position: "relative",
  paddingTop: "56.25%", // 16:9 비율 유지
  transform: "translateY(10%)", // 기본적으로 아래로 이동
  zIndex: 2, // 배경과 겹침 방지
  "@media": {
    "screen and (max-width: 768px)": {
      transform: "translateY(15%)", // 모바일에서는 더 많이 아래로 이동
    },
    "screen and (max-width: 480px)": {
      transform: "translateY(10%)", // 더 아래로 밀어 키보드가 가려지도록 조정
    },
  },
});

// 디스플레이 스타일
export const display = style({
  position: "absolute",
  top: "0",
  left: "0",
  height: "75%", // 디스플레이 영역
  width: "100%",
  background: `linear-gradient(30deg, ${colors.darkGray} 0%, ${colors.darkGray} 50%, ${colors.darkerGray} 50%, ${colors.darkerGray} 100%)`,
  borderRadius: "10px",
  boxSizing: "border-box",
  border: `25px solid ${colors.darkSlateGray}`,
});

// 키보드 스타일
export const keyboard = style({
  position: "absolute",
  bottom: "-10%", // 기본적으로 일부 가리기
  left: "0",
  height: "25%", // 키보드 영역
  width: "100%",
  backgroundColor: colors.lightBlue,
  borderRadius: "10px",
  boxShadow: `inset 0 -15px 0 0 ${colors.lightGreenGray}`,
  "@media": {
    "screen and (max-width: 768px)": {
      bottom: "-15%", // 모바일 화면에서는 더 많이 가리기
    },
    "screen and (max-width: 480px)": {
      bottom: "-20%", // 작은 화면에서는 더 깊이 가려지도록 조정
    },
  },
});
