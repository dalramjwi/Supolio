import { style, styleVariants } from "@vanilla-extract/css";
import * as colors from "../../../appearance/css/colors/colors.css.ts";

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
  background: colors.black,
  color: colors.white,
  borderRadius: "50%",
  width: "60px",
  height: "60px",
  padding: "40px", // 패딩 추가
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: fontSizes.mainButton,
  textDecoration: "none",
  transition: "transform 0.3s ease",
  cursor: "pointer",
  boxShadow: `0px 2px 10px ${colors.semisemiTransparent}`,
  ":hover": {
    backgroundColor: colors.white,
    color: "black", // 색상 반전
    boxShadow: `0px 4px 12px ${colors.semisemiTransparent}`,
  },
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
    transform: "translate3d(-65px, 79.5px, 0) scale(1)",
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
    backgroundColor: colors.pastelBlue,
    color: colors.white,
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    padding: "34px", // 패딩 추가
    fontSize: fontSizes.subMenuButton, // 서브 메뉴 폰트 크기 적용
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: `0px 2px 8px ${colors.semisemiTransparent}`,
    position: "absolute",
    bottom: "80px", // 메인 버튼 위로
    ":hover": {
      backgroundColor: colors.white,
      color: colors.pastelBlue, // 색상 반전
      boxShadow: `0px 4px 12px ${colors.semisemiTransparent}`,
    },
  }),
  info: style({
    backgroundColor: colors.softGrayBlue,
    color: colors.white,
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    padding: "34px", // 패딩 추가
    fontSize: fontSizes.subMenuButton, // 서브 메뉴 폰트 크기 적용
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: `0px 2px 8px ${colors.semisemiTransparent}`,
    position: "absolute",
    bottom: "140px",
    ":hover": {
      backgroundColor: colors.white,
      color: colors.softGrayBlue, // 색상 반전
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
    },
  }),
  projects: style({
    backgroundColor: colors.mutedGreen,
    color: colors.white,
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    padding: "34px", // 패딩 추가
    fontSize: fontSizes.subMenuButton, // 서브 메뉴 폰트 크기 적용
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: `0px 2px 8px ${colors.semisemiTransparent}`,
    position: "absolute",
    bottom: "200px",
    textAlign: "center",
    lineHeight: "19px",
    ":hover": {
      backgroundColor: colors.white,
      color: colors.mutedGreen, // 색상 반전
      boxShadow: `0px 4px 12px ${colors.semisemiTransparent}`,
    },
  }),
};
// 현재 위치에 따라 흑백 처리 스타일
export const grayScale = style({
  filter: "grayscale(100%)",
  opacity: 0.5,
  cursor: "default", // 흑백 상태에서 커서를 기본 화살표로 설정
  pointerEvents: "none",
});
