import { style } from "@vanilla-extract/css";

export const pageContainer = style({
  position: "absolute",
  right: "908px",
  bottom: "160px",
  letterSpacing: "1px",
  color: "#191919",
  textShadow:
    "0 0 2px rgba(0, 0, 0, .5), -1px -1px 1px rgba(179, 179, 179, .5), 1px 1px 0 rgba(255, 255, 255, 0.55), 0 1px 3px white",
});
// 카드 스타일
export const card = style({
  position: "relative",
  width: "350px",
  height: "200px",
  margin: "20vh auto 0",
  padding: "20px 10px 10px",
  borderRadius: "6px",
  backgroundColor: "#f4f1eb",
  backgroundImage:
    "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
  transform: "rotateX(50deg) rotateY(0deg) rotateZ(45deg)",
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
  cursor: "pointer",
  outline: "none",
  boxShadow: "0",
});

export const notClickedCard = style({
  selectors: {
    [`&:hover`]: {
      transform: "rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(10px)",
      boxShadow: "20px 20px 20px rgba(0, 0, 0, .4)",
    },
  },
});

export const clickedCard = style({
  position: "fixed",
  top: "25%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "550px",
  height: "300px",
  boxShadow: "0px 15px 20px rgba(0, 0, 0, .5)",
  zIndex: 1000,
  borderRadius: "10px",
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
});
