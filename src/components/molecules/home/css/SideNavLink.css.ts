import { style, styleVariants } from "@vanilla-extract/css";

// 메뉴 컨테이너 스타일 (항상 하단 고정)
export const linkContainer = style({
  position: "fixed",
  bottom: "5vh", // 항상 하단에 고정
  right: "1.5vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  zIndex: 10,
});

// 메인 메뉴 버튼 스타일 (고정 위치)
export const menuButton = style({
  background: "#000",
  color: "#FFF",
  borderRadius: "50%",
  width: "60px",
  height: "60px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.2rem",
  textDecoration: "none",
  transition: "transform 0.3s ease",
  cursor: "pointer",
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
});

// 서브 메뉴 아이템 스타일
export const subMenuOne = styleVariants({
  hidden: {
    opacity: 0,
    transform: "scale(0)",
    transition: "transform 1s ease, opacity 1s ease",
  },
  visible: {
    opacity: 1,
    transform: "translate3d(-75px, 79px, 0) scale(1)",
    transition: "transform 1s ease, opacity 1s ease",
  },
});
export const subMenuTwo = styleVariants({
  hidden: {
    opacity: 0,
    transform: "scale(0)",
    transition: "transform 1s ease, opacity 1s ease",
  },
  visible: {
    opacity: 1,
    transform: "translate3d(-55px, 79px, 0) scale(1)",
    transition: "transform 1s ease, opacity 1s ease",
  },
});
export const subMenuThree = styleVariants({
  hidden: {
    opacity: 0,
    transform: "scale(0)",
    transition: "transform 1s ease, opacity 1s ease",
  },
  visible: {
    opacity: 1,
    transform: "translate3d(0px, 109px, 0) scale(1)",
    transition: "transform 1s ease, opacity 1s ease",
  },
});

// 서브 메뉴 아이템 색상별 스타일
export const subMenuColors = {
  main: style({
    backgroundColor: "#669AE1",
    color: "#FFF",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
    position: "absolute",
    bottom: "80px", // 메인 버튼 위로
  }),
  info: style({
    backgroundColor: "#70CC72",
    color: "#FFF",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
    position: "absolute",
    bottom: "140px",
  }),
  projects: style({
    backgroundColor: "#FE4365",
    color: "#FFF",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
    position: "absolute",
    bottom: "200px",
  }),
};
