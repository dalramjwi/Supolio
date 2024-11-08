// src/styles/dogStyles.css.ts
import { style, keyframes } from "@vanilla-extract/css";

// 색상 변수 설정
export const colors = {
  body: "#3C3C3C", // 강아지 몸통 색상
  ear: "#222222", // 귀와 꼬리의 어두운 포인트 색상
  headShadow: "#222222", // 머리 옆 그림자
  eye: "black", // 눈 색상
  nose: "#fbf1d8", // 코 색상
  paw: "#222222", // 발 색상
  tail: "#3C3C3C", // 꼬리 색상
  laptopScreen: "#C7C3B4", // 노트북 화면 색상
  keyboard: "#6F6660", // 노트북 키보드 색상
};

// 애니메이션 정의
const dogLeftType = keyframes({
  "50%": { transform: "none" },
  "52%": { transform: "translateY(-8px)" },
  "56%": { transform: "none" },
  "58%": { transform: "translateY(-8px)" },
  "60%": { transform: "none" },
  "64%": { transform: "translateY(-8px)" },
  "66%": { transform: "none" },
  "68%": { transform: "translateY(-8px)" },
  "70%": { transform: "none" },
  "72%": { transform: "translateY(-8px)" },
  "76%": { transform: "none" },
});

const dogRightType = keyframes({
  "54%": { transform: "none" },
  "56%": { transform: "translateY(-8px)" },
  "58%": { transform: "none" },
  "60%": { transform: "translateY(-8px)" },
  "62%": { transform: "none" },
  "66%": { transform: "translateY(-8px)" },
  "68%": { transform: "translateY(-8px)" },
  "70%": { transform: "none" },
  "72%": { transform: "translateY(-8px)" },
  "74%": { transform: "none" },
  "78%": { transform: "translateY(-8px)" },
});

const dogRead = keyframes({
  "5%": { transform: "none" },
  "17%": { transform: "translateX(-5px)" },
  "25%": { transform: "none" },
  "37%": { transform: "translateX(-5px)" },
  "45%": { transform: "none" },
});

// 스타일 정의
export const dogContainer = style({
  position: "fixed", // 고정 위치
  bottom: "5vh", // 화면의 하단에서 약간 띄움 (vh 단위 사용)
  left: "6.5vw", // 화면의 왼쪽에서 약간 띄움 (vw 단위 사용)
  height: "18vh", // 화면 높이에 비례한 크기 설정
  zIndex: 10, // 레이어를 최상단에 위치시킴

  "@media": {
    "(max-width: 480px)": {
      height: "14vh",
      left: "10vw",
      bottom: "20vh",
    },
    "(min-width: 481px) and (max-width: 768px)": {
      height: "16vh",
      bottom: "20vh",
    },
    "(min-width: 769px)": {
      height: "18vh",
      bottom: "20vh",
    },
  },
});

export const ears2 = style({
  height: 0,
  width: 0,
  position: "relative",
  left: "30px",
  borderBottom: `27px solid ${colors.ear}`,
  borderLeft: "23px solid transparent",
  borderRight: "10px solid transparent",
});

export const ears2Before = style({
  content: "",
  display: "block",
  height: 0,
  width: 0,
  position: "relative",
  left: "33px",
  borderBottom: `27px solid ${colors.ear}`,
  borderLeft: "10px solid transparent",
  borderRight: "23px solid transparent",
});

export const head2 = style({
  height: "74px",
  width: "140px",
  position: "relative",
  zIndex: 2,
  boxShadow: `8px 0 0 ${colors.headShadow}`,
  borderRadius: "35px",
  background: colors.body,
});

export const eyes2 = style({
  height: "12px",
  width: "12px",
  position: "relative",
  top: "37px",
  left: "50px",
  borderRadius: "50%",
  background: colors.eye,
  animation: `${dogRead} 9s infinite`,
});

export const eyes2Before = style({
  content: "",
  display: "block",
  height: "12px",
  width: "12px",
  position: "relative",
  left: "18px",
  borderRadius: "50%",
  background: colors.eye,
});

export const nose2 = style({
  height: "30px",
  width: "48px",
  position: "relative",
  top: "40px",
  left: "37px",
  borderRadius: "20px",
  background: colors.nose,
});

// 새로 추가된 nose2Before 스타일
export const nose2Before = style({
  content: "",
  display: "block",
  height: 0,
  width: 0,
  position: "relative",
  top: "3px",
  left: "9px",
  borderRadius: "15px",
  borderTop: "12px solid black",
  borderLeft: "12px solid transparent",
  borderRight: "10px solid transparent",
});

export const body2 = style({
  height: "110px",
  width: "200px",
  position: "relative",
  top: "-30px",
  zIndex: 1,
  borderRadius: "55px",
  background: colors.body,
});

export const leftPaw2 = style({
  height: "25px",
  width: "37px",
  position: "relative",
  borderRadius: "12px",
  background: colors.paw,
  top: "70px",
  left: "15px",
  animation: `${dogLeftType} 9s infinite`,
});

export const rightPaw2 = style({
  height: "25px",
  width: "37px",
  position: "relative",
  borderRadius: "12px",
  background: colors.paw,
  top: "45px",
  left: "60px",
  animation: `${dogRightType} 9s infinite`,
});

export const tail2 = style({
  height: "34px",
  width: "70px",
  position: "relative",
  top: "-64px",
  left: "150px",
  zIndex: 0,
  borderRadius: "0 17px 17px 0",
  background: colors.tail,
});

export const ORlaptop = style({
  position: "relative",
  top: "-161px",
  left: "-103px",
});

export const ORscreen = style({
  height: "85px",
  width: "130px",
  borderRadius: "8px",
  transform: "skew(18deg)",
  background: colors.laptopScreen,
});

export const ORkeyboard = style({
  height: "12px",
  width: "132px",
  position: "relative",
  left: "14px",
  borderRadius: "6px 0 0 6px",
  background: colors.keyboard,
});

// 좌우 반전
export const flippedDog = style({
  transform: "scaleX(-1)",
});
