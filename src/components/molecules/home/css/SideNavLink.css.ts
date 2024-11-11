import { style } from "@vanilla-extract/css";

export const linkContainer = style({
  position: "fixed",
  bottom: "20px", // 화면 하단에서 20px 위로 고정
  right: "20px", // 화면 우측에서 20px 왼쪽으로 고정
  zIndex: 100,
  display: "flex",
  flexDirection: "column-reverse", // 버튼을 맨 아래에 배치
  alignItems: "center",
});

export const menuButton = style({
  width: "50px",
  height: "50px",
  position: "absolute",
  borderRadius: "50%",
  backgroundColor: "#333",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ":hover": {
    transform: "scale(1.1)",
  },
});

export const navLinksContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px", // 링크들 간의 간격 조정
  marginTop: "10px",
});
export const linkStyle = style({
  marginBottom: "10px",
  padding: "10px 20px",
  borderRadius: "20px",
  backgroundColor: "#333",
  color: "#fff",
  textDecoration: "none",
  opacity: 0,
  bottom: "60px", // 메뉴 버튼 위에 위치
  transition: "opacity 0.3s ease",
});

export const linkStyleOpen = style({
  opacity: 1,
  display: "block",
});
