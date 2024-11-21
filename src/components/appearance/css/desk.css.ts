import { style, keyframes } from "@vanilla-extract/css";

// 색상 변수
const colors = {
  tableBackground: "white",
  table: "#B6B6B6",
  cupBody: "#cbcbcb ",
  handleBorder: "#cbcbcb",
  cupInnerBorder: "#d9d9d9fa",
  notepadBackground: "#76888E",
  displayBackgroundStart: "#2C2C2C",
  displayBackgroundEnd: "#383838",
  arrowColor: "#A8A8A8",
  cursor: "rgba(0, 0, 0, 0.5)",
  keyboardBackground: "#E1E6E8",
  keyBackground: "#4E555A",
  trackpadBackground: "#C7D3D7",
  shadow: "rgba(150, 150, 150, 0.5)",
  cupInner: "#816c4d",
  cupTopBackground: "#6f6046",
};

// 애니메이션 키프레임
const blink = keyframes({
  "50%": { opacity: 0 },
});

export const deskContainer = style({
  position: "relative",
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  backgroundColor: colors.tableBackground,
  overflow: "hidden",
});

// 테이블 스타일
export const table = style({
  position: "relative",
  height: "50vh",
  width: "100%",
  display: "flex",
  backgroundColor: colors.table,
  borderTopLeftRadius: "7px",
  borderTopRightRadius: "7px",
  boxShadow: `inset 0 -16px 0 0 ${colors.shadow}`,
  zIndex: "2",
});

// 노트패드 스타일
export const notepad = style({
  height: "193px",
  width: "136px",
  background: `linear-gradient(to bottom, ${colors.notepadBackground} 0px, ${colors.notepadBackground} 34px, #ffffff 34px, #ffffff 62px, #cee8ef 62px, #cee8ef 66px, #fffefe 66px, #ffffff 90px, #cee8ef 90px, #cee8ef 94px, #ffffff 94px, #ffffff 118px, #cee8ef 118px, #cee8ef 122px, #ffffff 122px, #ffffff 146px, #cee8ef 146px, #cee8ef 150px, #ffffff 150px, #ffffff 176px, #cee8ef 176px, #cee8ef 193px)`,
  boxShadow: `-10px 0 0 0 ${colors.shadow}`,
  position: "absolute",
  bottom: "7vh",
  left: "6vw",
  overflow: "hidden",
  fontWeight: "bold",
  lineHeight: "1.9em",
  "@media": {
    "screen and (max-width: 1350px)": {
      // tablet
    },
    "screen and (max-width: 980px)": {
      // smartphone
      display: "none",
    },
    "screen and (max-width: 679px)": {
      display: "none",
    },
    "screen and (max-width: 559px)": {
      display: "none",
    },
  },
});

// 노트북 스타일
export const notebook = style({
  height: "522px",
  width: "457px",
  position: "absolute",
  bottom: "22.5vh",
  left: "65vw",
  "@media": {
    "screen and (max-width: 1350px)": {
      // tablet
    },
    "screen and (max-width: 980px)": {
      // smartphone
    },
    "screen and (max-width: 679px)": { display: "none" },
    "screen and (max-width: 500px)": {
      display: "none",
    },
  },
});

// 디스플레이 스타일
export const display = style({
  position: "relative",
  height: "290px",
  width: "100%",
  background: `linear-gradient(30deg, ${colors.displayBackgroundStart} 0%, ${colors.displayBackgroundStart} 50%, ${colors.displayBackgroundEnd} 50%, ${colors.displayBackgroundEnd} 100%)`,
  borderRadius: "10px",
  boxSizing: "border-box",
  border: "25px solid #515555",
});

// 화살표 스타일 (기본 부분)
export const arrow = style({
  position: "absolute",
  height: "12px",
  width: "36px",
  borderRadius: "6px",
  top: "28px",
  left: "20px",
});

// 화살표의 왼쪽 대각선 부분
export const arrowBefore = style({
  position: "absolute",
  height: "12px",
  width: "36px",
  backgroundColor: colors.arrowColor,
  borderRadius: "6px",
  transform: "rotate(40deg)",
  top: "14px",
  right: "0px",
  transformOrigin: "right center",
});

// 화살표의 오른쪽 대각선 부분
export const arrowAfter = style({
  position: "absolute",
  height: "12px",
  width: "36px",
  backgroundColor: colors.arrowColor,
  borderRadius: "6px",
  transform: "rotate(-40deg)",
  top: "8px",
  right: "0px",
  transformOrigin: "right center",
});

// 커서 스타일 (cursor)
export const cursor = style({
  height: "13px",
  width: "50px",
  borderRadius: "6px",
  background: `${colors.cursor}`,
  position: "relative",
  top: "58px",
  left: "67px",
  backgroundPosition: "0px -3px",
  backgroundSize: "220%",
  animation: `${blink} 2s step-end infinite`,
});

// 키보드 스타일
export const keyboard = style({
  position: "relative",
  height: "232px",
  width: "100%",
  backgroundColor: colors.keyboardBackground,
  borderRadius: "10px",
  boxShadow: `inset 0 -15px 0 0 #959fa0, -15px 0 0 0 ${colors.shadow}`,
});

// 각 키 스타일
export const key = style({
  height: "25px",
  width: "25px",
  backgroundColor: colors.keyBackground,
  borderRadius: "8px",
  position: "absolute",
});

// 키 위치 설정을 위한 스타일
export const keyPositions = [
  { top: "22px", left: "61px" }, // 1번째 줄
  { top: "22px", left: "92px" },
  { top: "22px", left: "123px" },
  { top: "22px", left: "154px" },
  { top: "22px", left: "185px" },
  { top: "22px", left: "216px" },
  { top: "22px", left: "247px" },
  { top: "22px", left: "278px" },
  { top: "22px", left: "308px" },
  { top: "22px", left: "339px" },
  { top: "22px", left: "370px" },
  { top: "56px", left: "58px", width: "59px" }, // 2번째 줄
  { top: "56px", left: "123px" },
  { top: "56px", left: "154px" },
  { top: "56px", left: "185px" },
  { top: "56px", left: "216px" },
  { top: "56px", left: "247px" },
  { top: "56px", left: "278px" },
  { top: "56px", left: "308px" },
  { top: "56px", left: "339px", width: "60px" },
  { top: "90px", left: "58px", width: "42px" }, // 3번째 줄
  { top: "90px", left: "105px", width: "41px" },
  { top: "90px", left: "151px", width: "155px" },
  { top: "90px", left: "311px", width: "42px" },
  { top: "90px", left: "358px", width: "41px" },
];

// 트랙패드 스타일
export const trackpad = style({
  height: "60px",
  width: "124px",
  borderRadius: "6px",
  backgroundColor: colors.trackpadBackground,
  position: "absolute",
  top: "134px",
  left: "167px",
});

// 컵 스타일
export const cup = style({
  height: "155px",
  width: "131px",
  backgroundColor: colors.cupBody,
  position: "absolute",
  bottom: "269px",
  left: "60px",
  borderTopLeftRadius: "50% 34%",
  borderTopRightRadius: "50% 34%",
  borderBottomLeftRadius: "45% 67%",
  borderBottomRightRadius: "45% 67%",
});

export const cupShadow = style({
  height: "56px",
  width: "100px",
  backgroundColor: colors.shadow,
  borderRadius: "50%",
  position: "absolute",
  bottom: "265px",
  left: "52px",
  zIndex: "-2",
});

export const cupTop = style({
  height: "97px",
  width: "131px",
  borderRadius: "50%",
  backgroundColor: colors.cupTopBackground,
  boxSizing: "border-box",
  border: `12px solid ${colors.cupInnerBorder}`,
  boxShadow: `inset 0 50px 0 -20px ${colors.cupInner}`,
  position: "relative",
});

export const handle = style({
  height: "66px",
  width: "60px",
  backgroundColor: "transparent",
  border: `16px solid ${colors.handleBorder}`,
  borderTopLeftRadius: "50%",
  borderBottomLeftRadius: "80% 60%",
  position: "absolute",
  top: "60px",
  left: "-31px",
  zIndex: "-1",
});
export const cupLocation = style({
  position: "absolute",
  top: "49vh",
  left: "12.5vw",
  "@media": {
    "screen and (max-width: 1350px)": {
      // tablet
      display: "none",
    },
    "screen and (max-width: 780px)": {
      // smartphone
      display: "none",
    },
    "screen and (max-width: 679px)": {
      display: "none",
    },
    "screen and (max-width: 559px)": {
      display: "none",
    },
  },
});
