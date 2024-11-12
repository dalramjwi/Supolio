import { style, styleVariants } from "@vanilla-extract/css";

// 색상과 폰트 크기 변수 정의
const colors = {
  main: "pink",
  info: "#70CC72",
  projects: "#FE4365",
  background: "#000",
  text: "#FFF",
  shadow: "rgba(0, 0, 0, 0.15)",
};

const fontSizes = {
  mainButton: "1.2rem", // 메인 메뉴 버튼 폰트 크기
  subMenuButton: "1rem", // 서브 메뉴 버튼 폰트 크기
};

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
  background: colors.background,
  color: colors.text,
  borderRadius: "50%",
  width: "60px",
  height: "60px",
  padding: "1.95vw", // 패딩 추가
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: fontSizes.mainButton,
  textDecoration: "none",
  transition: "transform 0.3s ease",
  cursor: "pointer",
  boxShadow: `0px 2px 10px ${colors.shadow}`,
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
    transform: "translate3d(-85px, 89px, 0) scale(1)",
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
    transform: "translate3d(-65px, 79px, 0) scale(1)",
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
    backgroundColor: colors.main,
    color: colors.text,
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    padding: "1.75vw", // 패딩 추가
    fontSize: fontSizes.subMenuButton, // 서브 메뉴 폰트 크기 적용
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: `0px 2px 8px ${colors.shadow}`,
    position: "absolute",
    bottom: "80px", // 메인 버튼 위로
  }),
  info: style({
    backgroundColor: colors.info,
    color: colors.text,
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    padding: "1.75vw", // 패딩 추가
    fontSize: fontSizes.subMenuButton, // 서브 메뉴 폰트 크기 적용
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: `0px 2px 8px ${colors.shadow}`,
    position: "absolute",
    bottom: "140px",
  }),
  projects: style({
    backgroundColor: colors.projects,
    color: colors.text,
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    padding: "1.75vw", // 패딩 추가
    fontSize: fontSizes.subMenuButton, // 서브 메뉴 폰트 크기 적용
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: `0px 2px 8px ${colors.shadow}`,
    position: "absolute",
    bottom: "200px",
    textAlign: "center",
  }),
};
