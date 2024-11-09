// src/styles/searchBar.css.ts
import { style, keyframes } from "@vanilla-extract/css";

// 깜빡이는 애니메이션 정의 (존재/사라짐, 공간 유지)
const blink = keyframes({
  "0%": { visibility: "visible" },
  "50%": { visibility: "hidden" },
  "100%": { visibility: "visible" },
});

export const searchContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center", // 텍스트 중앙 정렬
  width: "600px",
  padding: "18px 40px",
  borderRadius: "15px",
  backgroundColor: "#f5f5f5",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",

  // 가운데 정렬 (기본 화면 크기에서)
  position: "absolute",
  top: "19.5%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  // 미디어 쿼리
  "@media": {
    "(max-width: 1024px)": {
      // 태블릿 화면
      width: "80%",
      position: "fixed",
      // top: "10vh",
      left: "50%",
      transform: "translateX(-50%)",
    },
    "(max-width: 768px)": {
      // 모바일 화면
      width: "90%",
      position: "fixed",
      // top: "16.5vh",
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
});

export const placeholderText = style({
  fontSize: "20px",
  color: "#7c85ab",
  fontFamily: "inherit",
  display: "flex",
  alignItems: "center",
});

export const blinkingCursor = style({
  marginLeft: "5px",
  animation: `${blink} 1s steps(1) infinite`,
  color: "#7c85ab",
});

// 돋보기 아이콘 스타일
export const searchIcon = style({
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  border: "3px solid #7c85ab",
  position: "absolute",
  right: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "2.5px",

  // 돋보기 손잡이 스타일
  "::before": {
    content: '""',
    width: "12px", // 손잡이의 길이
    height: "3.25px", // 손잡이의 굵기
    backgroundColor: "#7c85ab",
    position: "absolute",
    top: "14px",
    right: "-8.5px",
    transform: "rotate(40deg)",
    borderRadius: "1px",
  },
});
