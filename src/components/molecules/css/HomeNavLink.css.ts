// src/styles/homePage.css.ts
import { style } from "@vanilla-extract/css";

// 컨테이너 스타일
export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  height: "100vh",
  backgroundColor: "#f4f4f4", // 사진과 유사한 배경 색상
  padding: "20px",
});

// 링크 컨테이너 스타일
export const linkContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px", // 링크 간격 조절
});

// 링크 스타일 및 Hover 효과
export const linkStyle = style({
  color: "rgba(0, 0, 0, 0.5)", // 기본적으로 투명도가 낮은 글씨
  fontSize: "32px",
  fontWeight: "bold",
  transition: "color 0.3s",
  textDecoration: "none", // 링크 밑줄 제거
  ":hover": {
    color: "black", // Hover 시 검정색으로 변경
  },
});
