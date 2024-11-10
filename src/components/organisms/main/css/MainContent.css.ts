import { style } from "@vanilla-extract/css";

// 전체 페이지 스타일
export const pageContainer = style({
  position: "absolute",
  right: "45vw",
  bottom: "160px",
  letterSpacing: "1px",
  color: "#191919",
  textShadow:
    "0 0 2px rgba(0, 0, 0, .5), -1px -1px 1px rgba(179, 179, 179, .5), 1px 1px 0 rgba(255, 255, 255, 0.55), 0 1px 3px white",
});

// 카드 스타일 (명함)
export const card = style({
  position: "relative",
  width: "350px",
  height: "200px",
  display: "flex",
  justifyContent: "center",
  padding: "20px 10px",
  borderRadius: "6px",
  backgroundColor: "#f4f1eb",
  backgroundImage:
    "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
  transform: "rotateX(50deg) rotateY(0deg) rotateZ(45deg)",
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
  boxShadow: "0",
  cursor: "pointer",
  ":hover": {
    transform: "rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(10px)",
    boxShadow: "20px 20px 20px rgba(0, 0, 0, .4)",
  },
});

// 텍스트 스타일
export const company = style({
  fontSize: "1.8rem",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "10px",
  lineHeight: "30px",
});

export const contactTitle = style({
  fontSize: "1.4rem",
  fontWeight: "bold",
  textAlign: "center",
  marginTop: "10px",
  marginBottom: "10px",
});

export const position = style({
  fontSize: "1rem",
  fontStyle: "italic",
  textAlign: "center",
  marginBottom: "2.5px",
});

export const contactInfo = style({
  fontSize: "1rem",
  textAlign: "center",
  marginBottom: "5px",
});

// 모달 콘텐츠 스타일 (명함 크기와 동일하게 설정)
export const modalContent = style({
  width: "700px",
  height: "350px",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 0 5px rgba(0, 0, 0, .3)",
  backgroundColor: "#f4f1eb",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.155rem",
  textAlign: "center",
  lineHeight: "28.5px",
});
