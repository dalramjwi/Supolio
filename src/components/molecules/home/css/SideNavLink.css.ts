import { style } from "@vanilla-extract/css";

// 전체 링크 컨테이너 스타일
export const linkContainer = style({
  position: "fixed",
  bottom: "20px",
  right: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
  zIndex: 100,
});

// 각 링크 스타일
export const linkStyle = style({
  background: "#596778",
  color: "#FFFFFF",
  fontSize: "1.2rem",
  textDecoration: "none",
  textAlign: "center",
  padding: "10px 20px",
  borderRadius: "20px",
  transition: "background 0.3s, transform 0.3s",
  width: "120px",

  ":hover": {
    background: "#70CC72", // Hover 시 색상 변경
    transform: "scale(1.1)", // 살짝 확대 효과
  },
});
